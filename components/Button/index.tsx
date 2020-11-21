import clsx from "clsx";
import React from "react";
import Ink from "react-ink";
import "./index.scss"

const Button: React.FC<{
  muted?: boolean,
  href?: string
}> = ({children, muted, href}) => {
  return React.createElement(
    href ? "a" : "button",
    {
      className: clsx(muted && "muted"),
      href,
      target: href ? "_blank" : false
    },
    children,
    <Ink/>
  )
}

export default Button
