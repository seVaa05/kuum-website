import type { ReactNode } from 'react'

interface InfiniteMarqueeProps {
  children: ReactNode
  className?: string
  label: string
  reverse?: boolean
}

export function InfiniteMarquee({ children, className = '', label, reverse = false }: InfiniteMarqueeProps) {
  const groupCopies = 4

  return (
    <div className={`marquee ${className}`.trim()} aria-label={label}>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        {Array.from({ length: groupCopies }, (_, index) => (
          <div className="marquee-group" aria-hidden={index > 0 ? 'true' : undefined} key={index}>{children}</div>
        ))}
      </div>
    </div>
  )
}
