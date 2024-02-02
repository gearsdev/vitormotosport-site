interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "fill" | "outline";
}

export function Button({
  children,
  variant = "fill",
  className,
  ...rest
}: ButtonProps) {
  const variants = {
    fill: "bg-yellow-500 hover:bg-yellow-700 text-white",
    outline:
      "border-yellow-600 hover:border-yellow-700 border text-yellow-500 hover:text-yellow-600 font-bold bg-transparent",
  };

  return (
    <button
      className={`h-11 px-4 text-xl ${variants[variant]} ${className} transition-colors`}
      {...rest}
    >
      {children}
    </button>
  );
}
