import React, { ReactNode } from 'react'

interface ButtonProps {
  className?: string;
  outline?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  outline = false, 
  children,
  onClick
}) => {
  const baseStyles = 'font-semibold px-[20px] py-[10px] flex items-center gap-[10px] rounded-[20px] transition-colors duration-700 ease-in-out hover:cursor-pointer'
  const variantStyles = outline 
    ? 'border-1 border-primary text-primary hover:bg-primary hover:text-white' 
    : 'bg-primary text-white hover:bg-[#0740a3]'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button