import Image from "next/image";

export interface AboutItemProps {
  title: string
  content: string
  image: string
}

export default function AboutItem(props: AboutItemProps) {
  const { title, image, content } = props
  return (
    <div className="flex justify-center h-[350px]">
      <div
        className="block max-w-sm rounded-lg bg-primaryDark shadow-lg">
        <div className='flex justify-center p-[40px]'>
          <a href="#!">
            <Image
              className="rounded-t-lg"
              src={image}
              alt={title}
              width={36} height={36}
            />
          </a>
        </div>

        <div className="p-6">
          <h5
            className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
            {title}
          </h5>
          <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
            {`${content.substring(0, 100)}...`}
          </p>
        </div>
      </div>
    </div>
  )
}