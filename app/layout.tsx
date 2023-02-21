import './globals.css'
import Footer from "@/components/Footer";
import {FOOTER_DATA} from "../data/exampleData";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {SOCIALS_SVGS, FORM_PROPS, DESCRIPTION_TEXT, NAV_PROPS, COPYRIGHT_PROPS} = FOOTER_DATA
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Footer
          footerSocials={SOCIALS_SVGS}
          newsLetterProps={FORM_PROPS}
          description={DESCRIPTION_TEXT}
          navProps={NAV_PROPS}
          copyright={COPYRIGHT_PROPS}
        />
      </body>
    </html>
  )
}
