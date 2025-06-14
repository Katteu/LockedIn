import React from 'react'

interface TileProps {
  text: string;
  isHidden?: boolean;
  onClick?: () => void;
}

const Tile = ({ text, isHidden = false, onClick }: TileProps) => {
  return (
    <div 
      className={`px-[10px] md:px-[20px] py-[10px] text-[12px] sm:text-[14px] md:text-[16px] bg-box rounded-[10px] inline-block min-w-fit ${isHidden ? 'hover:cursor-pointer' : ''}`} 
      onClick={() => isHidden && onClick?.()}
    >
      <p className={`font-semibold whitespace-nowrap ${isHidden ? 'text-box' : ''}`}>{text}</p>
    </div>
  )
}

export default Tile