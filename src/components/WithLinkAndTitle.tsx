import Link from "next/link";
import {WrapperComp} from "@/types";

export interface WithLinkAndTitleProps {
  name: string
  href: string
}

interface WrappedWithLinkAndTitleProps extends WithLinkAndTitleProps, WrapperComp { }

export default function WithLinkAndTitle(props: WrappedWithLinkAndTitleProps) {
  const { name, href, children } = props
  return (
    <Link
      href={href}
      type="button"
      className="relative group m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      data-te-ripple-color="light"
    >
      {children}
      <div className="opacity-0 m-1 group-hover:opacity-100 duration-300 relative inset-0 z-10 flex justify-center items-center text-xs text-white font-semibold">
        {name}
      </div>
    </Link>
  )
}