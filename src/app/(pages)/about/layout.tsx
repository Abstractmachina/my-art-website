import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'About Taole Chen - Artist in Palma de Mallorca | Bio & Contact',
  description: 'Taole Chen is an artist currently based in Palma de Mallorca. Background, approach, values, and contact.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Taole Chen - Artist in Palma de Mallorca',
    description: 'Taole Chen is an artist currently based in Palma de Mallorca. Background, approach, values, and contact.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    type: 'website',
  },
  twitter: {
    title: 'Taole Chen - Art Portfolio',
    description: 'The art portfolio of Taole Chen, a contemporary artist exploring the world and architecture through travel, plein air painting and mostly ink.',
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}

const AboutLayout = ({children}:Props) => {
  return (
    <>{children}</>
  )
}

export default AboutLayout;