export interface WithKey {
  key: number
}
export interface WithButton {
  buttonText: string
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

export interface BaseCardProps extends WithButton {
  title: string
  imageSrc?: string
  href?: string
  description: string
}

export interface CardColourOptions {
  buttonColour?: string
  buttonTextColour?: string
  textColour?: string
  bgColour?: string
  cardColour?: string
  lastUpdatedTextColour?: string
}