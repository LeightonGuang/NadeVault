import {
  XLogoSvg,
  TiktokLogoSvg,
  YoutubeLogoSvg,
  InstagramLogoSvg,
} from "@/assets/logos";

const getSocialLinks = () => [
  {
    name: "YouTube",
    url: "https://youtube.com/@NadeVault",
    icon: <YoutubeLogoSvg />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@NadeVault",
    icon: <TiktokLogoSvg />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/NadeVault",
    icon: <InstagramLogoSvg />,
  },
  {
    name: "X",
    url: "https://x.com/NadeVault",
    icon: <XLogoSvg />,
  },
];

export default getSocialLinks;
