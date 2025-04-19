import RotatingText from "@/components/rotating-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Waves from "@/components/waves";
import { BriefcaseBusinessIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-start mt-8 lg:mt-0 lg:items-center mx-auto">
      <Card className="container mx-8 gap-4 lg:gap-6 flex flex-col justify-center items-center bg-transparent backdrop-filter backdrop-blur-[25px] [box-shadow:0_0_0.2rem_#fff,_0_0_.2rem_#fff,_0_0_1rem_#8ec5ff,_0_0_0.2rem_#8ec5ff,_0_0_.5rem_#8ec5ff,_inset_0_0_.5rem_#8ec5ff]">
        <CardContent>
          <div className="text-center text-xs lg:text-base font-audiowide">
            ROMAN SENDZIUK
          </div>
          <h1 className="text-center text-3xl lg:text-5xl mt-2 font-audiowide">
            software engineer <br />
          </h1>
          <br />
          <div className="relative border-2 border-black dark:border-white rounded-lg overflow-hidden">
            <Waves
              lineColor="pink"
              backgroundColor="lightyellow"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
              style={{ filter: `blur(2px)` }}
            />
            <RotatingText
              texts={[
                "Frontend",
                "💙     💛     💙",
                "Web",
                "🖤     ❤️     💛",
                "Fullstack",
                "   ",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-audiowide text-md sm:text-2xl md:text-xl font-bold"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <p className="text-center text-sm lg:text-base mt-6 lg:mt-12 font-audiowide">
            I turn passion and coffee into code. <br />
            When I&apos;m not crafting frontend, you&apos;ll find me debugging
            life itself.
          </p>
          <p className="text-center font-audiowide"></p>
        </CardContent>
        <hr className="h-2 w-[75%]" />
        <CardFooter className="space-x-8">
          <Button size="lg" asChild>
            <Link href="/projects">
              <BriefcaseBusinessIcon />
              Projects
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="mailto:sendzyuk.r@gmail.com,sendzyuk.r@ukr.net">
              <HandshakeIcon />
              Contact me
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
