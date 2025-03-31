export const buttonStandardStyle: string = 'border-2 rounded-sm p-1'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'wait'
  | 'success'
  | 'transparent'

export type ColorVariants = {
  [colorName in ButtonColor]: string
}

//TODO investigar como agregar intellisense en variables
export const colorVariants: ColorVariants = {
  primary: 'bg-white text-black border-white hover:border-black',
  secondary: 'bg-black text-white border-black hover:border-white',
  danger: 'bg-status-error  text-primary-white',
  wait: 'bg-secondary-darkBlue text-primary-white',
  success: 'bg-secondary-darkBlue text-primary-white',
  transparent:
    'bg-other-transparent outline outline-2 outline-primary-white text-primary-white'
}
