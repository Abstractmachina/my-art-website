import Gutter from "@/app/components/layout/Gutter";

type Props = {
  children: React.ReactNode;
}

// function generate

const ArtworkLayout = ({children}:Props) => {
  return (
    <Gutter>
      {children}
    </Gutter>
  )
}

export default ArtworkLayout;