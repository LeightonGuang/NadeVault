import SocialsClient from "./components/SocialsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials | Nade Vault",
  description: "Follow Nade Vault on social media for the latest Counter-Strike 2 lineups and tactical guides.",
  openGraph: {
    title: "Nade Vault Socials",
    description: "Follow us on social media for the latest CS2 lineups.",
    type: "website",
  },
};

const SocialsPage = () => {
  return (
    <section className="min-h-section relative flex flex-col items-center overflow-hidden bg-zinc-950 px-6 py-20 text-white select-none">
      <SocialsClient />
    </section>
  );
};

export default SocialsPage;
