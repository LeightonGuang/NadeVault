import { MapSlug } from "@/types/Map";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";
import { dust2Lineups } from "./lineups/dust2";

export const fetchLineups = async (
  mapSlug?: MapSlug,
  nadeType?: NadeType | "all",
) => {
  if (!mapSlug) {
    return new Promise<Lineup[]>((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 500);
    });
  } else if (mapSlug === "dust2") {
    return new Promise<Lineup[]>((resolve) => {
      setTimeout(() => {
        if (!nadeType || nadeType === "all") {
          resolve(dust2Lineups);
        } else {
          resolve(dust2Lineups.filter((l) => l.type === nadeType));
        }
      }, 500);
    });
  } else {
    return [];
  }
};
