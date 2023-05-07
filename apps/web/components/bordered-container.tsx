export function ContainerBorder({
  variant = 'light',
  children,
  className,
  borderBottom,
}: {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: React.ComponentProps<'div'>['className']
  borderBottom?: boolean
}) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 md:px-5">
        <div
          className={`flex flex-col w-full mx-auto border-l-0 sm:border-l-[1.5px] border-r-0 sm:border-r-[1.5px] border-${
            variant === 'light' ? 'primaryDark' : 'primaryLight'
          } ${className} border-b-[${borderBottom ? '1.5px' : '0'}]`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
