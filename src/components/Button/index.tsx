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
    fill: "bg-yellow-500 hover:bg-yellow-600 text-white",
    outline:
      "border-yellow-600 hover:border-yellow-700 border text-yellow-500 hover:text-yellow-600 font-bold bg-transparent",
  };

  return (
    <button
      className={`h-11 w-full md:w-auto md:px-12 text-xl ${variants[variant]} ${className} transition-colors flex items-center justify-center gap-4`}
      {...rest}
    >
      {children}
    </button>
  );
}
