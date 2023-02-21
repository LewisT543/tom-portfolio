import {orDefault} from "@/lib/stringUtils";
import {BaseCardProps, CardColourOptions} from "@/types";
import Link from "next/link";

export interface HorizontalCardProps extends BaseCardProps, CardColourOptions {
  lastUpdatedText?: string
}

export default function HorizontalCard(props: HorizontalCardProps) {
  const { title, imageSrc, href, description, buttonText, buttonColour,
    textColour, bgColour, cardColour, lastUpdatedText, lastUpdatedTextColour } = props
  return (
    <div className={`flex justify-center bg-${orDefault(bgColour, 'neutral-900')}`}>
      <div
        className={`flex flex-col rounded-lg bg-white shadow-lg dark:bg-${orDefault(bgColour, 'primaryDark')} md:max-w-xl md:flex-row`}>
        <Link href={`${orDefault(href, '#!')}`}>
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={orDefault(imageSrc, '/legs.png')}
            alt={title}/>
        </Link>
        <div className="flex flex-col justify-start p-6">
          <h5
            className={`mb-2 text-xl font-medium text-${orDefault(textColour, 'neutral-800')} dark:text-neutral-50`}>
            {title}
          </h5>
          <p className={`mb-4 text-base text-${orDefault(textColour, 'neutral-600')} dark:text-neutral-200`}>
            {description}
          </p>
          <p className={`text-xs text-${orDefault(lastUpdatedTextColour, 'black')} dark:text-neutral-600`}>
            {lastUpdatedText}
          </p>
        </div>
      </div>
    </div>
  )
}