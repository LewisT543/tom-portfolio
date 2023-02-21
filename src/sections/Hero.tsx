import React, {useState} from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import Button from "@/components/Button";
import {arrayCeil} from "@/lib/arrayUtils";

export interface HeroProps {
  imageName: string
  imageSizes: number[]
  topTitle?: string
  lowerTitle?: string
  pText?: string
}

export default function Hero(props: HeroProps) {
  const { imageName, imageSizes, topTitle, lowerTitle, pText } = props
  const [heroImage, setHeroImage] = useState(imageName)

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width)}.png`)

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <div
      ref={observe}
      className="w-full h-[800px] flex justify-center items-center overflow-hidden relative bg-black">
      <Image
        src={`/${heroImage}`}
        alt="Hero Image"
        className="opacity-50 object-cover"
        fill
      />
      <div className="flex flex-col justify-center items-center px-3">
        <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">{topTitle}<br />
          <br />
          <span className="text-primary">{lowerTitle}</span>
        </h1>
        <br />
        <p className="mt-5 text-center text-xl text-white opacity-90">{pText}</p>
        <Button href="/">Get started</Button>
      </div>
    </div>
  )
}
