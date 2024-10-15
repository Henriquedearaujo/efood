import { SideComponent } from './styles'

export type Props = {
  title?: string
  children: JSX.Element
  className: string
}

const SideBar = ({ title, children, className }: Props) => {
  return (
    <>
      <SideComponent title={title} className={className}>
        <h4>{title}</h4>
        {children}
      </SideComponent>
    </>
  )
}

export default SideBar
