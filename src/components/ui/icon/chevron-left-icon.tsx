import { Icon, IconProps } from '@chakra-ui/react'

type ChevronLeftIconProps = {
  weight?: 300 | 400
}

export const ChevronLeftIcon = ({
  weight = 300,
  ...props
}: ChevronLeftIconProps & IconProps) => {
  return (
    <>
      {weight === 300 && (
        <Icon viewBox={'0 0 48 48'} {...props}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="currentColor"
              d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z"
            />
          </svg>
        </Icon>
      )}
      {weight === 400 && (
        <Icon viewBox={'0 0 48 48'} {...props}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="currentColor"
              d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
            />
          </svg>
        </Icon>
      )}
    </>
  )
}
