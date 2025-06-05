import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "About Taole Chen",
  description: "About Taole Chen",
}

const AboutLayout = ({children}:Props) => {
  return (
    <>{children}</>
  )
}

export default AboutLayout;