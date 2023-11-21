interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'fill' | 'outline'
}

export function Button({ children, variant = 'fill', className, ...rest }: ButtonProps) {
  const variants = {
    fill: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'border-red-600 hover:border-red-700 border text-red-600 hover:text-red-700'
  }

  return (
    <button className={`h-11 px-4 text-xl ${variants[variant]} ${className} transition-colors`} {...rest}>
      {children}
    </button>
  )
}