import Gutter from "../components/Gutter";
import HomeGallery from "./home/_components/HomeGallery";
import { fetchArtworks } from "@/lib/fetchers/artworkFetchers";


const HomePage = async () => {
  const artwork = await fetchArtworks(2);

  return (
    <Gutter>
      <HomeGallery artWork={artwork}/>
    </Gutter>
  )
}

export default HomePage;