import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Footer from "../components/globals/Footer";
import Header from "../components/globals/Header";
import DotGrid from "../components/styledComponents/DotGrid";
import DashedGutterOverlay from "./home/_components/DashedGutterOverlay";
import { fetchLogos } from "@/lib/fetchers/graphicsFetchers";

const montserrat = Montserrat({
  subsets: ["latin"],
  // variable: "--font-montserrat",
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Taole Chen - Art Portfolio",
  description:
    "The art portfolio of Taole Chen, a contemporary artist exploring the world and architecture through travel, plein air painting and mostly ink.",
  keywords: [
    "Taole Chen",
    "Art Portfolio",
    "Contemporary Art",
    "Ink Art",
    "Digital Art",
    "Architectural Drawing",
    "Landscape Art",
    "Travel Art",
    "Mixed Media",
    "Art Commissions",
    "Prints",
    "artist",
    "originals",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  authors: [{ name: "Taole Chen", url: `${process.env.NEXT_PUBLIC_BASE_URL}` }],
  creator: "Taole Chen",
  publisher: "Taole Chen",
  openGraph: {
    title: "Taole Chen - Art Portfolio",
    description:
      "The art portfolio of Taole Chen, a contemporary artist exploring the world and architecture through travel, plein air painting and mostly ink.",
    siteName: "Taole Chen's Art Portfolio",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Taole Chen Art Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Taole Chen - Art Portfolio",
    description:
      "The art portfolio of Taole Chen, a contemporary artist exploring the world and architecture through travel, plein air painting and mostly ink.",
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};

const RootLayout = async ({ children }: Props) => {
  const logos = await fetchLogos();

  return (
    <html className={`${montserrat.className}`} lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>

      <body>
        <DotGrid />
        <Header logo={logos && logos[0]?.logo} />
        {children}
        <Footer />
        <DashedGutterOverlay />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
