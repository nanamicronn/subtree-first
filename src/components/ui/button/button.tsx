import React from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  IconProps,
  Spinner,
  useStyleConfig,
  forwardRef,
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
} from '@/components/ui/icon'

type ButtonIcon = {
  iconName?: 'chevronLeftIcon' | 'chevronRightIcon' | 'editIcon'
}

const ButtonIcon = ({ iconName, ...props }: ButtonIcon & IconProps) => {
  switch (iconName) {
    case 'chevronLeftIcon':
      return <ChevronLeftIcon {...props} />
    case 'chevronRightIcon':
      return <ChevronRightIcon {...props} />
    case 'editIcon':
      return <EditIcon {...props} />
    default:
      return null
  }
}

export type ButtonProps = {
  xsIconPosition?: 'right' | 'left'
  xsIconName?: 'chevronLeftIcon' | 'chevronRightIcon' | 'editIcon'
  xsIconColor?: string
}

// デザインシステム上xsサイズとしてのみアイコンボタンが存在するのでアイコンもこちらで定義
export const Button = forwardRef<ButtonProps & ChakraButtonProps, 'button'>(
  ({ children, xsIconPosition, xsIconName, xsIconColor, ...props }, ref) => {
    const { variant, size, color } = props
    const style = useStyleConfig('Spinner', { variant: `${variant}Button` })
    return size === 'xs' ? (
      <ChakraButton borderWidth={'1px'} {...props} ref={ref}>
        {xsIconPosition === 'left' && (
          <ButtonIcon
            iconName={xsIconName}
            color={xsIconColor ?? color}
            w={'1.25rem'}
            h={'1.25rem'}
            mr={'0.25rem'}
          />
        )}
        {children}
        {xsIconPosition === 'right' && (
          <ButtonIcon
            iconName={xsIconName}
            color={xsIconColor ?? color}
            w={'1.25rem'}
            h={'1.25rem'}
            ml={'0.25rem'}
          />
        )}
      </ChakraButton>
    ) : (
      <ChakraButton {...props} spinner={<Spinner sx={style} />} ref={ref}>
        {children}
      </ChakraButton>
    )
  },
)
