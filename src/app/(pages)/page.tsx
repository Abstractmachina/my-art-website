import { fetchLogos } from "@/lib/fetchers/graphicsFetchers";
import Footer from "../components/globals/Footer";
import Header from "../components/globals/Header";
import Gutter from "../components/layout/Gutter";
import DotGrid from "../components/styledComponents/DotGrid";
import DashedGutterOverlay from "./home/_components/DashedGutterOverlay";
import HomeGallery from "./home/_components/HomeGallery";
import { fetchArtworks } from "@/lib/fetchers/artworkFetchers";

const HomePage = async () => {
  const logos = await fetchLogos();
  const artwork = await fetchArtworks(2);

  return (
    <>
      <DotGrid />
      <Header logo={logos && logos[0]?.logo} />
      <Gutter>
        <HomeGallery artWork={artwork} />
      </Gutter>
      <Footer />
      <DashedGutterOverlay />
    </>
  );
};

export default HomePage;
