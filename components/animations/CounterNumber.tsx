'use client'

import { useEffect, useState } from 'react'

interface CounterNumberProps {
  value: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CounterNumber({
  value,
  duration = 1.5,
  decimals = 1,
  suffix = '',
  prefix = '',
  className = '',
}: CounterNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const steps = 60 // frames
    const stepValue = value / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep += 1
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3) // easing function

      setDisplayValue(parseFloat((value * easeOut).toFixed(decimals)))

      if (currentStep >= steps) {
        setDisplayValue(value)
        setHasAnimated(true)
        clearInterval(interval)
      }
    }, (duration * 1000) / steps)

    return () => clearInterval(interval)
  }, [value, duration, decimals, hasAnimated])

  const formattedValue = displayValue.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
