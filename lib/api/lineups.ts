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
            throwType: "left click throw",
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
            throwType: "left click throw",
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
            throwType: "left click throw",
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
            throwType: "left click throw",
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
            throwType: "jump throw",
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
            throwType: "run throw",
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
            throwType: "left click throw",
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
            throwType: "run throw",
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
            throwType: "jump throw",
            points: [
              { x: 615, y: 390 },
              { x: 700, y: 250 },
            ],
            duration: 1.4,
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
          },
          {
            id: 8,
            mapSlug: "dust2",
            type: "molly",
            name: "Car molotov from A long",
            description: "",
            precision: "Forgiving",
            team: "T",
            throwType: "jump throw",
            points: [
              { x: 748, y: 557 },
              { x: 950, y: 305 },
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
