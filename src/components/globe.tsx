"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

interface WorldFeature {
  type: string;
  properties: { name: string };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  id: string;
}

interface WorldData {
  type: string;
  features: WorldFeature[];
}

const Globe = ({ className: _className }: { className?: string }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<d3.Timer | null>(null);
  const [worldData, setWorldData] = useState<WorldData | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isRendered, setIsRendered] = useState(false);

  const visitedCountries = [
    "Austria",
    "Bulgaria",
    "Canada",
    "Croatia",
    "Czech Republic",
    "France",
    "Georgia",
    "Germany",
    "Hungary",
    "Italy",
    "Lithuania",
    "Malta",
    "Montenegro",
    "Netherlands",
    "Poland",
    "Romania",
    "Spain",
    "Ukraine",
  ];

  // Fetch world data only once
  useEffect(() => {
    fetch("/api/world-data")
      .then((response) => response.json())
      .then((data: WorldData) => {
        setWorldData(data);
      })
      .catch((error) => console.error("Error loading world data:", error));
  }, []);

  // Render globe when data is available
  useEffect(() => {
    if (!worldData) return;

    const renderGlobe = () => {
      const mapContainer = mapContainerRef.current;
      if (!mapContainer) return;
      setIsRendered(false);

      // Clean up any previous SVG and timer
      d3.select(mapContainer).selectAll("svg").remove();
      if (timerRef.current) {
        timerRef.current.stop();
        timerRef.current = null;
      }

      const width = mapContainer.clientWidth;
      const height = mapContainer.clientHeight;
      const sensitivity = 75;

      // Calculate scale based on container size
      const globeScale = Math.min(width, height) * 0.45;

      const projection = d3
        .geoOrthographic()
        .scale(globeScale)
        .center([0, 0])
        .rotate([0, -30])
        .translate([width / 2, height / 2]);

      const initialScale = projection.scale();
      const pathGenerator = d3.geoPath().projection(projection);

      const svg = d3
        .select(mapContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      svg
        .append("circle")
        .attr("fill", "#EEE")
        .attr("stroke", "#000")
        .attr("stroke-width", "0.2")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", initialScale);

      const map = svg.append("g");

      map
        .append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(worldData.features)
        .enter()
        .append("path")
        .attr("d", (d) => pathGenerator(d as d3.GeoPermissibleObjects))
        .attr("fill", (d: { properties: { name: string } }) =>
          visitedCountries.includes(d.properties.name) ? "blue" : "white"
        )
        .style("stroke", "black")
        .style("stroke-width", 0.3)
        .style("opacity", 0.8);

      // Animation for globe rotation - store timer reference for cleanup
      timerRef.current = d3.timer(() => {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([rotate[0] - 1 * k, rotate[1]]);
        svg
          .selectAll("path")
          .attr("d", (d) => pathGenerator(d as d3.GeoPermissibleObjects));
      }, 200);
      setIsRendered(true);
    };

    // Initial render
    renderGlobe();

    // Debounced rerender on window resize
    const handleResize = () => {
      // Clear the previous timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Set a new timeout
      resizeTimeoutRef.current = setTimeout(() => {
        renderGlobe();
      }, 250); // Wait 250ms after resize stops before redrawing
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (timerRef.current) {
        timerRef.current.stop();
      }
      if (mapContainerRef.current) {
        d3.select(mapContainerRef.current).selectAll("svg").remove();
      }
    };
  }, [worldData]);

  const isLoading = !worldData || !isRendered;

  return (
    <div
      className={clsx(
        "flex flex-col text-white justify-center items-center w-full h-full p-4 self-center",
        _className
      )}
    >
      <div className="w-full h-80 lg:h-[500px] relative">
        <div className="absolute inset-0" ref={mapContainerRef} />

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Globe;
