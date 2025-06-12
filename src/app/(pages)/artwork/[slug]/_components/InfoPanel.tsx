import { Button } from "@/app/components/shadcn/button";
import H3 from "@/app/components/styledComponents/H3";
import P from "@/app/components/styledComponents/P";
import { Artwork } from "@/types/payload-types";

type Props = {
  artwork?: Artwork | null;
};

const InfoPanel = ({ artwork }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:w-80 shrink-0">
      <H3 className="font-light">{artwork?.title}</H3>
      <P variant="description">{artwork?.medium}</P>
      <P variant="description">{artwork?.dimensions}</P>
      <P variant="description" className="mt-8 md:w-5/6">
        {artwork?.description}
      </P>
      {artwork?.salesLink && (
        <Button>
          <a
            href={artwork?.salesLink || process.env.PRINTS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy a print
          </a>
        </Button>
      )}
    </div>
  );
};

export default InfoPanel;
