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
  const borderBottomStyle = borderBottom ? 'border-b-[1.5px]' : ''
  const borderColorStyle = variant === 'light' ? 'border-primaryDark' : 'border-primaryGold'

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 md:px-5">
        <div
          className={`flex flex-col w-full mx-auto border-l-0 sm:border-l-[1.5px] border-r-0 sm:border-r-[1.5px] ${borderColorStyle} ${className} ${borderBottomStyle}`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
