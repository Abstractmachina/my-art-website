import Header from "../components/header";
import HomeGallery from "../components/home-gallery";

export type ArtWork = {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
}
const dummyArtWork : ArtWork[] = [
  {
    id: 1,
    title: "Artwork 1",
    description: "This is the description of Artwork 1.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-1",
  },
  {
    id: 2,
    title: "Artwork 2",
    description: "This is the description of Artwork 2.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-2",
  },
  {
    id: 3,
    title: "Artwork 3",
    description: "This is the description of Artwork 3.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-3",
  },
  {
    id: 4,
    title: "Artwork 4",
    description: "This is the description of Artwork 4.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-4",
  },
  {
    id: 5,
    title: "Artwork 5",
    description: "This is the description of Artwork 5.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-5",
  },
  {
    id: 6,
    title: "Artwork 6",
    description: "This is the description of Artwork 6.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-6",
  },
  {
    id: 7,
    title: "Artwork 7",
    description: "This is the description of Artwork 7.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-7",
  },
  {
    id: 8,
    title: "Artwork 8",
    description: "This is the description of Artwork 8.",
    image: "https://via.placeholder.com/150",
    slug: "artwork-8",
  },
]

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeGallery artWork={dummyArtWork}/>
    </>
  )
}

export default HomePage;