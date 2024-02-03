import { ReactNode } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div {...rest} className={`w-full max-w-[1200px] h-full mx-auto px-4 ${className}`}>{children}</div>
  )
}