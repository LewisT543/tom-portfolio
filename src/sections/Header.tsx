"use client"

import Link from "next/link";
import {NavItem} from "@/types";
import {orDefault} from "@/lib/stringUtils";
import SVG from "@/components/SVG";

export interface HeaderProps {
  navItems: NavItem[]
  title: string
  titleLink?: string
}

export default function Header(props: HeaderProps) {
  const { navItems, title, titleLink } = props
  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start h-[80px] text-xl">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation">
      <span className="[&>svg]:w-7">
        <SVG className='h-7 w-7' path={"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"} />
      </span>
        </button>
        <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent4">
          <ul className="list-style-none ml-[10px] mr-auto flex flex-col pl-0 lg:flex-row">
            {navItems.map((nav, index) => (
              <Link key={index} href={nav.href} className={orDefault(nav.className, `p-2 p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400`)}>
                {nav.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center">
          {/*@ts-ignore -> orDefault not removing undefined values... except it is*/}
          <Link href={orDefault(titleLink, '/')}>
            <h5 className="text-xl">{title}</h5>
          </Link>
        </div>
      </div>
    </nav>
  )
}