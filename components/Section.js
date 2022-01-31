import React from 'react'

export default function Section({children, bgColor}) {
  return <section className={`py-16 ${bgColor}`}>{children}</section>
}
