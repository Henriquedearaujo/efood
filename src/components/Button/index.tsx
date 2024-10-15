import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'submit'
  title: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

export const Button = ({ type, title, onClick, children, disabled }: Props) => {
  return (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
