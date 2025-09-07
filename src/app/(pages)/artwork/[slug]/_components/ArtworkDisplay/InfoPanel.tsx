import { Button } from "@/app/components/shadcn/button";
import H3 from "@/app/components/styledComponents/H3";
import P from "@/app/components/styledComponents/P";
import { cn } from "@/utils/tailwind/cn";
import { Artwork } from "@/types/payload-types";

type Props = {
  artwork?: Artwork | null;
};

const InfoPanel = ({ artwork }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:w-80 md:max-w-80 shrink-0">
      <H3 className="">{artwork?.title}</H3>
      <P variant="description">{artwork?.medium}</P>
      <P variant="description">{artwork?.dimensions}</P>
      <P variant="description" className="mt-8 md:w-5/6">
        {artwork?.description}
      </P>
      {artwork?.originalForSale && (
        <P variant="description">
          <span className={cn("", artwork?.originalSold && "line-through")}>
            If you&apos;re interested in aquiring the original drawing, please{" "}
            <a href="mailto:me@taolechen.com">reach out to me</a>.
          </span>
          {artwork?.originalSold && <span> Sold!</span>}
        </P>
      )}

      {artwork?.salesLink && (
        <Button className="mt-4" asChild>
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
