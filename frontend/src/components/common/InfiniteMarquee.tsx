import type { ReactNode } from 'react'

interface InfiniteMarqueeProps {
  children: ReactNode
  className?: string
  label: string
  reverse?: boolean
}

export function InfiniteMarquee({ children, className = '', label, reverse = false }: InfiniteMarqueeProps) {
  return (
    <div className={`marquee ${className}`.trim()} aria-label={label}>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
