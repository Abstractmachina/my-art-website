import "./globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  // variable: "--font-montserrat",
})

type Props = {
  children: React.ReactNode;
}

const RootLayout = ({children}:Props) => {
  return (
    <html className={`${montserrat.className}`} lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;