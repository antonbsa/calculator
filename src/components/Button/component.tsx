import { CSS } from '@stitches/react'
import { Container } from './styles'

type VariantType = 'default' | 'purple-light' | 'purple-dark'

interface ButtonProps extends CSS {
  value: string
  isOperation?: boolean
  hasDefaultStyle?: boolean
  backgroundColor?: 'dark' | 'light'
  extraCss?: CSS
  onButtonClicked: (value: string, isOperation: boolean) => void
}

export default function Button({
  value,
  isOperation = false,
  hasDefaultStyle = false,
  backgroundColor = 'dark',
  extraCss,
  onButtonClicked,
}: ButtonProps) {
  const variantValue: VariantType = hasDefaultStyle
    ? 'default'
    : isOperation
    ? `purple-${backgroundColor}`
    : 'default'

  function handleClick(e: HTMLButtonElement) {
    onButtonClicked(e.value, isOperation)
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
