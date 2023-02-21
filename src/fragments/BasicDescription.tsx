import {orDefault} from "@/lib/stringUtils";

export interface BasicDescriptionProps {
  text: string
  containerClassName?: string
  title?: string
}

export default function BasicDescription(props: BasicDescriptionProps) {
  const {text, containerClassName, title} = props
  return (
    <div className={`${orDefault(containerClassName, 'm-8')}`}>
      {title}
      {text}
    </div>
  )
}