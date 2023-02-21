"use client"

import WithLinkAndTitle, {WithLinkAndTitleProps} from "@/components/WithLinkAndTitle";
import SVG, {SVGProps} from "@/components/SVG";
import NewsletterSignupForm, {NewsletterSignupFormProps} from "@/fragments/NewsletterSignupForm";
import BasicDescription, {BasicDescriptionProps} from "@/fragments/BasicDescription";
import Copyright, {CopyrightProps} from "@/fragments/Copyright";
import FlatNavList, {FlatNavListProps} from "@/components/FlatNavList";

interface SVGWithLinkAndTitleProps extends SVGProps, WithLinkAndTitleProps { }

export interface FooterProps {
  footerSocials: SVGWithLinkAndTitleProps[]
  newsLetterProps: NewsletterSignupFormProps
  description: BasicDescriptionProps
  navProps: FlatNavListProps
  copyright: CopyrightProps
}

export default function Footer(props: FooterProps) {
  const { footerSocials, newsLetterProps, description, navProps, copyright } = props
  return (
    <footer className="bg-neutral-900 text-center text-white justify-center">
      <div className="px-6 pt-6">
        <div className="mb-6 flex justify-center">
          {footerSocials.map((svg, index) => (
            <WithLinkAndTitle key={index} name={svg.name} href={svg.href}>
              <SVG key={index} path={svg.path} />
            </WithLinkAndTitle>
          ))}
        </div>
        <div>
          <NewsletterSignupForm {...newsLetterProps} />
        </div>
        <div className="mb-6">
          <BasicDescription {...description} />
        </div>
        <div className="grid grid-cols-1">
          <FlatNavList {...navProps} />
        </div>
      </div>
      <Copyright {...copyright} />
    </footer>
  )
}