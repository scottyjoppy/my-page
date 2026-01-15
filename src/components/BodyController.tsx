'use client'
import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function BodyController({ children }: Props) {
  const pathname = usePathname()
  const switchColor = pathname !== "/projects"

  useEffect(() => {
    const body = document.body

    body.classList.remove("switch")

    if (!switchColor) {
      body.classList.add("switch")
    }
  }, [switchColor])

  return children
}
