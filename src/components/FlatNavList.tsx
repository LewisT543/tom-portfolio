import Link from "next/link";
import {orDefault} from "@/lib/stringUtils";
import {NavItem} from "@/types";

export interface FlatNavListProps {
  navItems: NavItem[]
  title?: string
  className?: string
}

export default function FlatNavList(props: FlatNavListProps) {
  const { navItems, title, className } = props
  return (
    <div className="mb-6">
      <h5 className="mb-2.5 font-bold uppercase">{orDefault(title, 'links')}</h5>
      <ul className={`${orDefault(className,'flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white')}`}>
        {navItems.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            className={orDefault(nav.className, `mr-4 hover:${orDefault(nav.onHover, 'underline')} md:mr-6`)}
          >
            {nav.text}
          </Link>
        ))}
      </ul>
    </div>
  )
}