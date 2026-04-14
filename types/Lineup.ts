import { Point } from "./Point";
import { MapSlug } from "./Map";
import { Precision } from "./Precision";

export interface Lineup {
  id: number;
  name: string;
  mapSlug: MapSlug;
  type: "flash" | "smoke" | "molly" | "he";
  description: string;
  precision: Precision;
  team: "T" | "CT";
  throwType: "bounce" | "walk" | "jump";
  duration: number;
  youtubeUrl: string;
  points: Point[];
}
