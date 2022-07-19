import { Icon, IconProps } from '@chakra-ui/react'

type ChevronRightIconProps = {
  weight?: 300 | 400
}

export const ChevronRightIcon = ({
  weight = 300,
  ...props
}: ChevronRightIconProps & IconProps) => {
  return (
    <>
      {weight === 300 && (
        <Icon viewBox={'0 0 48 48'} {...props}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="currentColor"
              d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z"
            />
          </svg>
        </Icon>
      )}
      {weight === 400 && (
        <Icon viewBox={'0 0 48 48'} {...props}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="currentColor"
              d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
            />
          </svg>
        </Icon>
      )}
    </>
  )
}
