import { useState, useEffect } from "react"

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100
      setScroll(scrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[1px] bg-transparent z-[60]">
      <div
        className="h-full bg-[#C5A059]"
        style={{ width: `${scroll}%`, transition: "width 0.1s ease-out" }}
      />
    </div>
  )
}

export default ScrollProgress