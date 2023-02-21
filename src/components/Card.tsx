import Link from "next/link";
import {orDefault} from "@/lib/stringUtils";
import {BaseCardProps, CardColourOptions, WithButton} from "@/types";

export interface CardProps extends BaseCardProps, CardColourOptions {  }

export default function Card(props: CardProps) {
  const { title, imageSrc, href, description, buttonText, buttonColour, textColour, bgColour, cardColour } = props
  return (
    <div className={`flex justify-center bg-${orDefault(bgColour, 'neutral-900')}`}>
      <div
        className={`block max-w-sm rounded-lg shadow-lg dark:bg-${orDefault(bgColour, 'primaryDark')}`}>
        <Link href={`${orDefault(href, '#!')}`}>
          <img
            className="rounded-t-lg"
            src={orDefault(imageSrc, '/hot-air-balloons.png')}
            alt={title}
          />
        </Link>
        <div className="p-6">
          <h5
            className={`mb-2 text-xl font-medium leading-tight text-${orDefault(textColour, 'neutral-800')} dark:text-neutral-50`}>
            {title}
          </h5>
          <p className={`mb-4 text-base text-${orDefault(textColour, 'neutral-600')} dark:text-neutral-200`}>
            {description}
          </p>
          <button
            type="button"
            className={`inline-block rounded bg-${orDefault(buttonColour, 'primary')} px-6 pt-2.5 pb-2 text-s font-medium uppercase leading-normal text-primaryDark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
            data-te-ripple-init
            data-te-ripple-color="light">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

