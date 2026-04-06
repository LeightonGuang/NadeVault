import { MapSlug } from "./Map";
import { Point } from "./Point";

export interface Lineup {
  id: number;
  name: string;
  description: string;
  mapSlug: MapSlug;
  precision: "Very Forgiving" | "Forgiving" | "Precise" | "Pixel Perfect";
  team: "T" | "CT";
  throwType: "bounce" | "walk" | "jump";
  startPosition: Point;
  endPosition: Point;
  duration: number;
}
