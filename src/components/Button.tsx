import React, {ReactNode} from 'react'
import Link from 'next/link';
import {DefaultButtonClassName} from "@/constants";

interface ButtonProps {
  href?: string
  children?: ReactNode
  className?: string
}

export default function Button(props: ButtonProps, { variant = 'primary', children }: {variant: string, children: ReactNode}) {
  const className = props.className
    ? props.className
    : DefaultButtonClassName;

  if (props.href !== undefined) { // @ts-ignore
    return <Link className={className} {...props} />
  }
  return <button type="button" className={className} {...props} />
}