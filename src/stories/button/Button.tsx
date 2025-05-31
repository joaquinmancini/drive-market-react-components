import React from 'react'

import { twMerge } from 'tailwind-merge'
import {
  ButtonColor,
  buttonStandardStyle,
  colorVariants
} from './button-styles'
import './button.css'

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  color?: ButtonColor
  /** Clases que indican estilos tailwind del componente*/
  className?: string
  /** Button contents */
  label: string
  /** Optional click handler */
  onClick?: () => void

  nativeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  className,
  label,
  onClick,
  nativeProps
}) => {
  return (
    <button
      {...nativeProps}
      type='button'
      onClick={onClick}
      className={twMerge(
        buttonStandardStyle,
        `${colorVariants[color]}`,
        className
      )}
      //Ver si lo dejamos o sacamos
      style={{}}
    >
      {label}
    </button>
  )
}
