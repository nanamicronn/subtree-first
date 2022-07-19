import { Icon } from '@chakra-ui/react'

export const MenuIcon = ({ ...props }) => {
  return (
    <Icon viewBox={'0 0 48 48'} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path
          fill="currentColor"
          d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"
        />
      </svg>
    </Icon>
  )
}
