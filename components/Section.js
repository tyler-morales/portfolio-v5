import React from 'react'

export default function Section({children, bgColor, id}) {
  return (
    <section id={id} className={`py-10 md:py-16 ${bgColor}`}>
      {children}
    </section>
  )
}
