import { NextResponse } from "next/server";
import worldData from "../../../lib/world.json";

export async function GET() {
  return NextResponse.json(worldData);
}
