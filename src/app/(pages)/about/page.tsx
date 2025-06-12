import Gutter from "@/app/components/layout/Gutter";
import P from "@/app/components/styledComponents/P";
import { fetchAbout } from "@/lib/fetchers/aboutFetchers";
import Image from "next/image";


const page = async () => {
  const about = await fetchAbout();
  const img = typeof about?.image !== "string" ? about?.image : null;


  return (
    <main>
      <Gutter className="flex flex-col md:flex-row gap-12 items-center min-h-full">
        <div className="h-60 w-60 md:h-80 md:w-80 rounded-full overflow-hidden shrink-0">
          <Image
            src={img?.url || ""}
            alt={img?.alt || ""}
            width={img?.width || 0}
            height={img?.height || 0}
          />
        </div>
        <section className="flex flex-col gap-4 px-4 md:px-0">
          <P>{about?.intro}</P>
          <P>{about?.main}</P>
          <P>You can find my design and computation portfolio here: <a href="https://www.taolechen.com" target="_blank" rel="noopener noreferrer">taolechen.com</a></P>
        </section>
      </Gutter>
    </main>
  );
};

export default page;
