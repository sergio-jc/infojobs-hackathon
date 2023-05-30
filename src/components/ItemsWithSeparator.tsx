import React from 'react'

interface Item {
  title: string
  className?: string
}

interface Props {
  data: Item[]
}
export const ItemsWithSeparetor = ({ data }: Props) => {
  const result = data.map(({ title, className }, index) => {
    const separator = index !== data.length - 1 ? <span className='text-txt-thin-gray text-xs'>|</span> : null
    return (
      <React.Fragment key={index}>
        <span className={className ?? 'text-txt-gray text-xs'}>{title}</span>
        {separator}
      </React.Fragment>
    )
  })

  return <div className='flex flex-row gap-2'>{result}</div>
}
