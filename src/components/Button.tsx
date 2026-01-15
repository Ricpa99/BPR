type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full px-6 py-2 text-sm font-semibold shadow-lg transition-transform duration-150 ease-out hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
