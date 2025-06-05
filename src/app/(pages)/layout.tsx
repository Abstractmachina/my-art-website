import { fetchLogos } from "@/lib/fetchers/graphicsFetchers";
import Footer from "../components/globals/Footer";
import Header from "../components/Header";
import DotGrid from "../components/styledComponents/DotGrid";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  // variable: "--font-montserrat",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const logos = await fetchLogos();

  console.log("logos: ", logos);

  return (
    <html className={`${montserrat.className}`} lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>

      <body>
        <DotGrid />
        <Header logo={ logos && logos[0]?.logo } />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
