import { Point } from "./Point";
import { MapSlug } from "./Map";
import { Precision } from "./Precision";

export interface Lineup {
  id: number;
  name: string;
  mapSlug: MapSlug;
  type: "flash" | "smoke" | "molly" | "he";
  description: string;
  /**
   * - 1 = Very Forgiving
   * - 2 = Forgiving
   * - 3 = Precise
   * - 4 = Pixel Perfect
   */
  precision: Precision;
  team: "T" | "CT";
  throwType:
    | "left click throw"
    | "right click throw"
    | "jump throw"
    | "walk throw"
    | "run throw"
    | "jump right click throw";
  duration: number;
  youtubeUrl: string;
  points: Point[];
}
