import "./index.styl"

const Link: React.FC<{ link: string }> = ({children, link}) => {
  return <a href={link}>
    {children}
  </a>
}

export default Link
