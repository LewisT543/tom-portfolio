"use client"

import {ReactNode} from "react";

interface GridProps {
  gridItems: ReactNode[]
}

export default function Grid(props: GridProps) {
  return (
    <div className="p-8 bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {props.gridItems.map(aboutItem => (
          <div className="p-4 bg-white rounded-md flex items-center justify-center">
            {aboutItem}
          </div>
        ))}
      </div>
    </div>
  )
}