import Gutter from "../components/Gutter";
import Header from "../components/Header";
import HomeGallery from "../components/HomeGallery";
import { fetchArtworks } from "@/lib/fetchers/artworkFetchers";


// const dummyArtWork : Artwork[] = [
//   {
//     id: "1",
//     title: "Artwork 1",
//     description: "This is the description of Artwork 1.",
//     slug: "artwork-1",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "2",
//     title: "Artwork 2",
//     description: "This is the description of Artwork 2.",
//     slug: "artwork-2",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "3",
//     title: "Artwork 3",
//     description: "This is the description of Artwork 3.",
//     slug: "artwork-3",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "4",
//     title: "Artwork 4",
//     description: "This is the description of Artwork 4.",
//     slug: "artwork-4",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "5",
//     title: "Artwork 5",
//     description: "This is the description of Artwork 5.",
//     slug: "artwork-5",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "6",
//     title: "Artwork 6",
//     description: "This is the description of Artwork 6.",
//     slug: "artwork-6",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "7",
//     title: "Artwork 7",
//     description: "This is the description of Artwork 7.",
//     slug: "artwork-7",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
//   {
//     id: "8",
//     title: "Artwork 8",
//     description: "This is the description of Artwork 8.",
//     slug: "artwork-8",
//     images: [],
//     updatedAt: "",
//     createdAt: ""
//   },
// ]

const HomePage = async () => {
  const artwork = await fetchArtworks(2);

  return (
    <Gutter>
      <Header />
      <HomeGallery artWork={artwork}/>
    </Gutter>
  )
}

export default HomePage;