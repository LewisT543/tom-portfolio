import {ReactNode} from "react";

interface ImageWithMaskProps {
  children: ReactNode
}

export default function ImageWithMask(props: ImageWithMaskProps) {
  return (
    <div
      className="relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      {props.children}
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
    </div>
  )
}