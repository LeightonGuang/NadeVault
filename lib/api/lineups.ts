import { MapSlug } from "@/types/Map";
import { Lineup } from "@/types/Lineup";
import { NadeType } from "@/types/Nade";

export const fetchLineups = async (
  mapSlug?: MapSlug,
  nadeType?: NadeType | "all",
) => {
  if (!mapSlug) {
    return new Promise<Lineup[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            mapSlug: "dust2",
            type: "smoke",
            name: "Xbox smoke from top mid",
            description: "",
            precision: "Very Forgiving",
            team: "T",
            duration: 4,
            throwType: "bounce",
            youtubeUrl: "https://www.youtube.com/embed/WwVY1MztYnc",
            points: [
              { x: 500, y: 600 },
              { x: 495, y: 380 },
              { x: 480, y: 400 },
            ],
          },
          {
            id: 2,
            mapSlug: "dust2",
            type: "smoke",
            name: "A Cross smoke from blue",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 745, y: 480 },
              { x: 795, y: 210 },
              { x: 800, y: 245 },
            ],
            duration: 5,
            youtubeUrl: "https://www.youtube.com/shorts/a0PmqfEjPjA",
          },
        ]);
      }, 500); // simulate network delay
    });
  } else if (mapSlug === "dust2") {
    return new Promise<Lineup[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            mapSlug: "dust2",
            type: "smoke",
            name: "Xbox smoke from top mid",
            description: "",
            precision: "Very Forgiving",
            team: "T",
            duration: 3,
            throwType: "bounce",
            youtubeUrl: "https://www.youtube.com/embed/WwVY1MztYnc",
            points: [
              { x: 513, y: 615 },
              { x: 500, y: 385 },
              { x: 492, y: 410 },
            ],
          },
          {
            id: 2,
            mapSlug: "dust2",
            type: "smoke",
            name: "A Cross smoke from blue",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 763, y: 490 },
              { x: 820, y: 210 },
              { x: 825, y: 245 },
            ],
            duration: 5,
            youtubeUrl: "https://www.youtube.com/embed/a0PmqfEjPjA",
          },
          {
            id: 3,
            mapSlug: "dust2",
            type: "smoke",
            name: "Xbox smoke from T spawn",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 490, y: 1000 },
              { x: 492, y: 410 },
            ],
            duration: 5,
            youtubeUrl: "https://www.youtube.com/embed/a0PmqfEjPjA",
          },
          {
            id: 4,
            mapSlug: "dust2",
            type: "smoke",
            name: "Xbox smoke from top mid",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 560, y: 650 },
              { x: 446, y: 550 },
              { x: 492, y: 410 },
            ],
            duration: 5,
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
          },
          {
            id: 5,
            mapSlug: "dust2",
            type: "smoke",
            name: "B door smoke from upper tunnel",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 147, y: 455 },
              { x: 255, y: 245 },
            ],
            duration: 5,
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
          },
          {
            id: 6,
            mapSlug: "dust2",
            type: "flash",
            name: "B flash from upper tunnel",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "bounce",
            points: [
              { x: 125, y: 455 },
              { x: 75, y: 182 },
              { x: 70, y: 205 },
            ],
            duration: 1.4,
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
          },
          {
            id: 7,
            mapSlug: "dust2",
            type: "flash",
            name: "A flash from short",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "jump",
            points: [
              { x: 615, y: 390 },
              { x: 700, y: 250 },
            ],
            duration: 1.4,
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
          },
        ]);
      }, 500); // simulate network delay
    });
  } else {
    return [];
  }
};
