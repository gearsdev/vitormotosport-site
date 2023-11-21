interface TitlePropse extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function Title({ children, className, ...rest }: TitlePropse) {
  return (
    <h2 className={`text-black text-3xl font-bold mb-2 ${className}`} {...rest}>{children}</h2>
  )
}