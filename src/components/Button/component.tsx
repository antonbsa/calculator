import { CSS } from '@stitches/react'
import { Container } from './styles'

type VariantType = 'default' | 'operation-light' | 'operation-dark'

interface ButtonProps extends CSS {
  value: string
  type?: 'button' | 'operation'
  colorType?: 'dark' | 'light'
  extraCss?: CSS
}

export default function Button({
  value,
  type = 'button',
  colorType = 'dark',
  extraCss,
}: ButtonProps) {
  const variantValue: VariantType =
    type === 'operation' ? `${type}-${colorType}` : 'default'

  function handleClick(e: HTMLButtonElement) {
    console.log(e.value)
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
