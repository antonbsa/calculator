export function calculate(
  prevValue: number,
  operator: string,
  newValue: number,
): string {
  switch (operator) {
    case '+':
      return (prevValue + newValue).toString()
    case '-':
      return (prevValue - newValue).toString()
    case 'X':
      return (prevValue * newValue).toString()
    case '/':
      return (prevValue / newValue).toString()
    default:
      return '0'
  }
}
