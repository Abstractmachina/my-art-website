import Gutter from "@/app/components/Gutter";
import Header from "@/app/components/Header";

type Props = {
  children: React.ReactNode;
}

// function generate

const ArtworkLayout = ({children}:Props) => {
  return (
    <Gutter>
      <Header />
      {children}
    </Gutter>
  )
}

export default ArtworkLayout;