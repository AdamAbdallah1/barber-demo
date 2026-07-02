import { useRef, useEffect, useState } from "react"
import aboutImg from "../assets/gallery/barber6.jpg"

const About = () => {
  const containerRef = useRef(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [isFullyEntered, setIsFullyEntered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const SCROLL_SPEED_MULTIPLIER = 3 
  const paragraph1 = "In Lebanon, a barber is more than a stylist; they are a confidant. Grooming is an uncompromised ritual of respect and presentation. We took that old-school hospitality and fused it with the vanguard of modern men's fashion."

  const allWords = [
    ...("Ahla W Sahla".split(" ")),
    ...("Rooted in Tradition.".split(" ")),
    ...("Built for Today.".split(" ")),
    ...(paragraph1.split(" "))
  ]
  const totalWords = allWords.length

  // 1. Detect device width on mount and window resizing
  useEffect(() => {
    const checkDevice = () => {
      // 1024px matches Tailwind's lg: breakpoint
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      
      // If a user switches to mobile, automatically light up all words so nothing is hidden
      if (mobile) {
        setWordIndex(totalWords)
      } else {
        setWordIndex(0)
      }
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [totalWords])

  // 2. Monitor when the component commands the screen (Desktop Only)
  useEffect(() => {
    if (isMobile) return // Disable observer entirely on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFullyEntered(true)
        } else {
          setIsFullyEntered(false)
        }
      },
      { threshold: 0.7 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isMobile])

  // 3. Absolute Window Interaction Intercept Hook (Desktop Only)
  useEffect(() => {
    if (isMobile || !isFullyEntered) return

    const handleGlobalWheel = (e) => {
      // SCROLLING DOWN
      if (e.deltaY > 0 && wordIndex < totalWords) {
        e.preventDefault()
        containerRef.current?.scrollIntoView({ behavior: "auto", block: "center" })
        setWordIndex((prev) => Math.min(prev + SCROLL_SPEED_MULTIPLIER, totalWords))
      }
      // SCROLLING UP
      else if (e.deltaY < 0 && wordIndex > 0) {
        e.preventDefault()
        containerRef.current?.scrollIntoView({ behavior: "auto", block: "center" })
        setWordIndex((prev) => Math.max(prev - SCROLL_SPEED_MULTIPLIER, 0))
      }
    }

    window.addEventListener("wheel", handleGlobalWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleGlobalWheel)
  }, [isFullyEntered, wordIndex, totalWords, isMobile])

  const getWordsForSection = (textArray, globalStartIndex) => {
    return textArray.map((word, i) => {
      const currentGlobalIndex = globalStartIndex + i
      const hasRevealed = wordIndex > currentGlobalIndex

      return (
        <span
          key={i}
          className="inline-block mr-[0.25em] transition-all duration-150"
          style={{ 
            // On mobile, force opacity to 1 instantly; on desktop, follow the scroll lock mechanics
            opacity: isMobile ? 1 : (hasRevealed ? 1 : 0.12),
            transform: isMobile ? "none" : (hasRevealed ? "translateY(0px)" : "translateY(2px)")
          }}
        >
          {word}
        </span>
      )
    })
  }

  const overlineLength = "Ahla W Sahla".split(" ").length
  const head1Length = "Rooted in Tradition.".split(" ").length
  const head2Length = "Built for Today.".split(" ").length

  return (
    <section
      ref={containerRef}
      id="about"
      // min-h-screen dynamic sizing safety overhauls
      className="w-full min-h-screen lg:h-screen bg-transparent py-16 lg:py-0 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        
        {/* Visual Column - Order changes on mobile to drop smoothly into layout flow */}
        <div 
          className="order-2 lg:order-1 lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[480px] w-full transition-all duration-700 ease-out"
          style={{ 
            opacity: isMobile ? 1 : (wordIndex > 3 ? 1 : 0.15),
            transform: isMobile ? "scale(1)" : (wordIndex > 3 ? "scale(1)" : "scale(0.97)")
          }}
        >
          <div className="absolute inset-0 border border-[#C5A059]/10 translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 rounded-sm" />
          <img
            src={aboutImg}
            alt="Heritage Background"
            className="relative z-10 w-full h-full object-cover rounded-sm filter brightness-[0.75] contrast-[1.05]"
          />
        </div>

        {/* Text Details Column */}
        <div className="order-1 lg:order-2 lg:col-span-7 select-none text-white">
          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[9px] font-semibold mb-3 lg:mb-4">
            {getWordsForSection("Ahla W Sahla".split(" "), 0)}
          </p>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-[1.2] lg:leading-[1.15] tracking-tight max-w-xl mb-4 lg:mb-6">
            {getWordsForSection("Rooted in Tradition.".split(" "), overlineLength)}
            <br className="hidden sm:block" />
            <span className="font-serif italic text-gray-400">
              {getWordsForSection("Built for Today.".split(" "), overlineLength + head1Length)}
            </span>
          </h2>

          <div className="text-gray-400 max-w-xl text-xs sm:text-sm leading-relaxed font-light mb-2">
            <p>
              {getWordsForSection(paragraph1.split(" "), overlineLength + head1Length + head2Length)}
            </p>
          </div>
          
          <img 
            src="/signature.png" 
            alt="Founder Signature Marker" 
            className="h-7 lg:h-8 mt-6 lg:mt-8 filter invert transition-all duration-300" 
            style={{ 
              opacity: isMobile ? 0.2 : (wordIndex === totalWords ? 0.2 : 0),
              transform: isMobile ? "none" : (wordIndex === totalWords ? "translateY(0)" : "translateY(10px)") 
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default About