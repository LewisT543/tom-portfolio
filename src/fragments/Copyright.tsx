import Link from "next/link";

export interface CopyrightProps {
  year: number
  organisation: string
  href: string
  textColour?: string
  bgColour?: string
}

export default function Copyright(props: CopyrightProps) {
  const { year, organisation, href, textColour, bgColour } = props
  return (
    <div
      className={`p-4 text-center bg-${bgColour ? bgColour : 'black'}`}>
      © {year} Copyright:
      <Link className={`text-${textColour ? textColour : 'white'}`} href={href}
      > {organisation}</Link
      >
    </div>
  )
}