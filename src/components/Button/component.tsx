import { CSS } from '@stitches/react'
import { Container } from './styles'

type VariantType = 'default' | 'purple-light' | 'purple-dark'

interface ButtonProps extends CSS {
  value: string
  isOperation?: boolean
  hasDefaultStyle?: boolean
  backgroundColor?: 'dark' | 'light'
  extraCss?: CSS
  onButtonClick: (value: string, isOperation: boolean) => void
}

export default function Button({
  value,
  isOperation = false,
  hasDefaultStyle = false,
  backgroundColor = 'dark',
  extraCss,
  onButtonClick,
}: ButtonProps) {
  const variantValue: VariantType = hasDefaultStyle
    ? 'default'
    : isOperation
    ? `purple-${backgroundColor}`
    : 'default'

  function handleClick(e: HTMLButtonElement) {
    onButtonClick(e.value, isOperation)
  }

  return (
    <Container
      variant={variantValue}
      onClick={(e) => handleClick(e.currentTarget)}
      css={extraCss}
      value={value}
    >
      {value}
    </Container>
  )
}
