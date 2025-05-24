import { ArtWork } from "../(pages)/page";

type Props = {
  artWork?: ArtWork[];
}

const HomeGallery = ({ artWork }: Props) => {
  


  return (
    <section className="columns-3 w-full bg-green-100">
      {
        artWork?.map((aw, i) => {
          return (
            <div key={i} className="bg-blue-100 w-1/3">
              <h1>{aw.title}</h1>
              <p>{aw.description}</p>
              <img src={aw.image} alt={aw.title} />
            </div>
          )
        })
      }
    </section>
  )
}

export default HomeGallery;