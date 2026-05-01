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
          // {
          //   id: 1,
          //   mapSlug: "dust2",
          //   type: "smoke",
          //   name: "Xbox smoke from top mid",
          //   description: "",
          //   precision: "Very Forgiving",
          //   team: "T",
          //   duration: 4,
          //   throwType: "left click throw",
          //   youtubeUrl: "https://www.youtube.com/embed/WwVY1MztYnc",
          //   points: [
          //     { x: 500, y: 600 },
          //     { x: 495, y: 380 },
          //     { x: 480, y: 400 },
          //   ],
          // },
          // {
          //   id: 2,
          //   mapSlug: "dust2",
          //   type: "smoke",
          //   name: "A Cross smoke from blue",
          //   description: "",
          //   precision: "Forgiving",
          //   team: "T",
          //   throwType: "left click throw",
          //   points: [
          //     { x: 745, y: 480 },
          //     { x: 795, y: 210 },
          //     { x: 800, y: 245 },
          //   ],
          //   duration: 5,
          //   youtubeUrl: "https://www.youtube.com/embed/vpOWeEQ4sv4",
          // },
        ]);
      }, 500); // simulate network delay
    });
  } else if (mapSlug === "dust2") {
    return new Promise<Lineup[]>((resolve) => {
      setTimeout(() => {
        const allLineups: Lineup[] = [
          {
            id: 1,
            name: "Xbox smoke from top mid",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "left click throw",
            precision: 1,
            duration: 3,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/WwVY1MztYnc",
            points: [
              { x: 513, y: 615 },
              { x: 500, y: 385 },
              { x: 492, y: 410 },
            ],
          },
          {
            id: 2,
            name: "A Cross smoke from blue",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "left click throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/vpOWeEQ4sv4",
            points: [
              { x: 763, y: 490 },
              { x: 820, y: 210 },
              { x: 825, y: 245 },
            ],
          },
          {
            id: 3,
            name: "Xbox Smoke from T Spawn",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "jump throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/t-RZyKreicY",
            points: [
              { x: 490, y: 1000 },
              { x: 492, y: 410 },
            ],
          },
          {
            id: 4,
            name: "Xbox smoke from top mid",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "run throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
            points: [
              { x: 560, y: 650 },
              { x: 446, y: 550 },
              { x: 492, y: 410 },
            ],
          },
          {
            id: 5,
            name: "B door smoke from upper tunnel",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "left click throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
            points: [
              { x: 147, y: 455 },
              { x: 255, y: 245 },
            ],
          },
          {
            id: 6,
            name: "B flash from upper tunnel",
            mapSlug: "dust2",
            type: "flash",
            description: "",
            throwType: "run throw",
            precision: 1,
            duration: 1.4,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
            points: [
              { x: 125, y: 455 },
              { x: 75, y: 182 },
              { x: 70, y: 205 },
            ],
          },
          {
            id: 7,
            name: "A flash from short",
            mapSlug: "dust2",
            type: "flash",
            description: "",
            throwType: "jump throw",
            precision: 1,
            duration: 1.4,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
            points: [
              { x: 615, y: 390 },
              { x: 700, y: 250 },
            ],
          },
          {
            id: 8,
            name: "Car molotov from A long",
            mapSlug: "dust2",
            type: "molly",
            description: "",
            throwType: "jump throw",
            precision: 1,
            duration: 1.4,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/DDG5FzTh47Y",
            points: [
              { x: 748, y: 557 },
              { x: 950, y: 305 },
            ],
          },
          {
            id: 9,
            name: "Mid Doors smoke from T Spawn",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "jump throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/ZtwLrYIjcko",
            points: [
              { x: 487.5, y: 884.8 },
              { x: 456.5, y: 370.0 },
            ],
          },
          {
            id: 10,
            name: "B Doors Smoke from Outside Tunnels",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "jump throw",
            precision: 3,
            duration: 10,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/I5b5RUSAWwE",
            points: [
              { x: 264.8, y: 621.1 },
              { x: 264.8, y: 225.8 },
            ],
          },
          {
            id: 11,
            name: "Cross Plat Smoke",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "crouch jump throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/UCMiCv7qrKo",
            points: [
              { x: 501.5, y: 428.1 },
              { x: 427.1, y: 332.4 },
              { x: 516.5, y: 231.8 },
              { x: 526.0, y: 234.0 },
            ],
          },
          {
            id: 12,
            name: "Long Doors Smoke from A Site",
            mapSlug: "dust2",
            type: "smoke",
            description: "",
            throwType: "jump throw",
            precision: 2,
            duration: 5,
            team: "T",
            youtubeUrl: "https://www.youtube.com/embed/eY19M79SHaU",
            points: [
              {
                x: 843.9811009201296,
                y: 155.93677888161943,
              },
              {
                x: 688.8611467775221,
                y: 602.9835917020329,
              },
              {
                x: 678.5710781575033,
                y: 583.338913054945,
              },
              {
                x: 680.4419997247794,
                y: 577.7261477272056,
              },
            ],
          },
        ];

        if (!nadeType || nadeType === "all") {
          resolve(allLineups);
        } else {
          resolve(allLineups.filter((l) => l.type === nadeType));
        }
      }, 500);
    });
  } else {
    return [];
  }
};
