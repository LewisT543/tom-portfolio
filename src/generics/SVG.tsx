import {orDefault} from "@/lib/stringUtils";

export interface SVGProps {
  path: string
  className?: string
}

export default function SVG(props: SVGProps) {
  const { path, className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={orDefault(className, `mx-auto h-full w-4`)}
      fill="currentColor"
      viewBox="0 0 24 24">
      <path d={path}/>
    </svg>
  )
}