import React, {useState} from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import {arrayCeil} from 'src/lib/arrayUtils';
import Button from "@/generics/Button";

export default function Hero() {
  const [heroImage, setHeroImage] = useState('hero-1920.png')
  const imageSizes = [600, 1280, 1920]

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
        <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">Thomas Gardner <br />
          <br />
          <span className="text-primary">Education Consultant</span>
        </h1>
        <br />
        <p className="mt-5 text-center text-xl text-white opacity-90">Filling your kids brains with mush since 1997...</p>
        <Button href="/">Get started</Button>
      </div>
    </div>
  )
}
