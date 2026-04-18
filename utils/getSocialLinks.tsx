import {
  XLogoSvg,
  TiktokLogoSvg,
  YoutubeLogoSvg,
  InstagramLogoSvg,
} from "@/assets/icons";

const getSocialLinks = () => [
  {
    name: "YouTube",
    url: "https://youtube.com/@NadeVault",
    icon: <YoutubeLogoSvg />,
  },
  {
    name: "TikTok",
    url: "https://x.com/@NadeVaultgg",
    icon: <TiktokLogoSvg />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/NadeVault",
    icon: <InstagramLogoSvg />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/NadeVault",
    icon: <XLogoSvg />,
  },
];

export default getSocialLinks;
