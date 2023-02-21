export interface WithKey {
  key: number
}
export interface WrapperComp {
  children: JSX.Element | JSX.Element[]
}

export interface NavItem {
  href: string
  text: string
  onHover?: string
  className?: string
}