"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Define the notes for our demo - a simple melody with correct white key indices
const DEMO_NOTES = [
  { note: "C4", whiteKeyIndex: 0, staffPosition: 5 },
  { note: "E4", whiteKeyIndex: 2, staffPosition: 4 },
  { note: "G4", whiteKeyIndex: 4, staffPosition: 3 },
  { note: "C5", whiteKeyIndex: 7, staffPosition: 2 },
  { note: "G4", whiteKeyIndex: 4, staffPosition: 3 },
]

const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B", "C2"]
const BLACK_KEY_POSITIONS = [0, 1, 3, 4, 5] // After C, D, F, G, A

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  color: string
}

export function PianoDemo() {
  const [activeNoteIndex, setActiveNoteIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeKeyIndex, setActiveKeyIndex] = useState<number | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [explodingNote, setExplodingNote] = useState<number | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const noteRefs = useRef<(HTMLDivElement | null)[]>([])
  const keyRefs = useRef<(HTMLDivElement | null)[]>([])
  const guideLineRef = useRef<SVGLineElement>(null)
  const animationRef = useRef<number | null>(null)
  const particleIdRef = useRef(0)

  // Create explosion particles
  const createExplosion = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = []
    const colors = ["#fbbf24", "#f59e0b", "#fcd34d", "#fef3c7", "#ffffff"]
    
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.5
      const speed = 2 + Math.random() * 4
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    
    setParticles(prev => [...prev, ...newParticles])
  }, [])

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return

    const animate = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // gravity
            life: p.life - 0.03,
          }))
          .filter(p => p.life > 0)
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [particles.length > 0])

  // Main animation loop
  useEffect(() => {
    if (!isPlaying) return

    const runSequence = async () => {
      const currentNote = DEMO_NOTES[activeNoteIndex]
      const noteEl = noteRefs.current[activeNoteIndex]
      
      // Step 1: Highlight note and show guide line
      setActiveKeyIndex(currentNote.whiteKeyIndex)

      // Step 2: Wait for the note duration
      await new Promise(resolve => setTimeout(resolve, 800))

      // Step 3: Explode the note
      if (noteEl && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const noteRect = noteEl.getBoundingClientRect()
        const x = noteRect.left - containerRect.left + noteRect.width / 2
        const y = noteRect.top - containerRect.top + noteRect.height / 2
        
        setExplodingNote(activeNoteIndex)
        createExplosion(x, y)
        
        // Clear explosion state after animation
        setTimeout(() => setExplodingNote(null), 300)
      }

      // Step 4: Clear key and move to next note
      await new Promise(resolve => setTimeout(resolve, 400))
      setActiveKeyIndex(null)
      setActiveNoteIndex((prev) => (prev + 1) % DEMO_NOTES.length)
    }

    runSequence()
  }, [activeNoteIndex, isPlaying, createExplosion])

  // Calculate guide line position
  const getGuideLineCoords = () => {
    if (activeKeyIndex === null) return null
    
    const noteEl = noteRefs.current[activeNoteIndex]
    const keyEl = keyRefs.current[activeKeyIndex]
    
    if (!noteEl || !keyEl || !containerRef.current) return null

    const containerRect = containerRef.current.getBoundingClientRect()
    const noteRect = noteEl.getBoundingClientRect()
    const keyRect = keyEl.getBoundingClientRect()

    return {
      x1: noteRect.left - containerRect.left + noteRect.width / 2,
      y1: noteRect.top - containerRect.top + noteRect.height,
      x2: keyRect.left - containerRect.left + keyRect.width / 2,
      y2: keyRect.top - containerRect.top + 4,
    }
  }

  const lineCoords = getGuideLineCoords()

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-slate-950/50 pointer-events-none" />
      
      {/* Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
        {particles.map(p => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size * p.life}
            fill={p.color}
            opacity={p.life}
            style={{
              filter: "blur(1px)",
            }}
          />
        ))}
      </svg>

      {/* Staff / Sheet Music Section */}
      <div className="relative w-full max-w-md mb-8 md:mb-12">
        <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
          {/* Staff lines */}
          <div className="relative h-24 md:h-32">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-slate-600/50"
                style={{ top: `${(i + 1) * 16}%` }}
              />
            ))}
            
            {/* Treble clef symbol */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-amber-400/80 font-serif select-none">
              𝄞
            </div>

            {/* Notes */}
            <div className="absolute left-12 md:left-16 right-4 top-0 bottom-0 flex items-center justify-around">
              {DEMO_NOTES.map((note, i) => (
                <div
                  key={i}
                  ref={(el) => { noteRefs.current[i] = el }}
                  className={`relative transition-all duration-150 ${
                    explodingNote === i ? "scale-150 opacity-0" : ""
                  }`}
                  style={{
                    marginTop: `${(note.staffPosition - 3) * 12}%`,
                  }}
                >
                  {/* Note head */}
                  <div 
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-150 ${
                      activeNoteIndex === i && explodingNote !== i
                        ? "bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 scale-110"
                        : "bg-gradient-to-br from-slate-300 to-slate-500"
                    }`}
                    style={{
                      boxShadow: activeNoteIndex === i && explodingNote !== i
                        ? "0 0 24px 8px rgba(251, 191, 36, 0.6), 0 0 48px 16px rgba(251, 191, 36, 0.3)"
                        : "0 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                  
                  {/* Note stem */}
                  <div 
                    className={`absolute left-full top-1/2 w-0.5 h-8 md:h-10 transition-colors duration-150 ${
                      activeNoteIndex === i ? "bg-amber-400" : "bg-slate-400"
                    }`}
                  />
                  
                  {/* Active glow ring */}
                  {activeNoteIndex === i && explodingNote !== i && (
                    <div 
                      className="absolute inset-0 -m-2 rounded-full animate-ping"
                      style={{
                        background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Label */}
          <div className="mt-2 text-xs text-slate-500 text-center">
            실시간 악보 연동
          </div>
        </div>
      </div>

      {/* SVG for guide line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <defs>
          <linearGradient id="guideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glowLine" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {lineCoords && (
          <>
            {/* Glow background */}
            <line
              x1={lineCoords.x1}
              y1={lineCoords.y1}
              x2={lineCoords.x2}
              y2={lineCoords.y2}
              stroke="#fbbf24"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.3"
              filter="url(#glowLine)"
            />
            {/* Main line */}
            <line
              ref={guideLineRef}
              x1={lineCoords.x1}
              y1={lineCoords.y1}
              x2={lineCoords.x2}
              y2={lineCoords.y2}
              stroke="url(#guideGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glowLine)"
            />
            {/* Arrow head at key */}
            <circle
              cx={lineCoords.x2}
              cy={lineCoords.y2}
              r="6"
              fill="#fbbf24"
              filter="url(#glowLine)"
            />
          </>
        )}
      </svg>

      {/* Piano Keyboard */}
      <div className="relative w-full max-w-md">
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 shadow-2xl">
          <div className="relative flex h-28 md:h-36">
            {/* White keys */}
            {WHITE_KEYS.map((key, i) => {
              const isActive = activeKeyIndex === i
              
              return (
                <div
                  key={key}
                  ref={(el) => { keyRefs.current[i] = el }}
                  className={`relative flex-1 mx-0.5 rounded-b-lg cursor-pointer transition-all duration-100 ${
                    isActive ? "translate-y-1" : ""
                  }`}
                  style={{
                    background: isActive 
                      ? "linear-gradient(to bottom, #fef3c7, #fcd34d)"
                      : "linear-gradient(to bottom, #ffffff, #f1f5f9)",
                    boxShadow: isActive
                      ? "0 0 40px 12px rgba(251, 191, 36, 0.7), 0 0 80px 24px rgba(251, 191, 36, 0.4), inset 0 -4px 8px rgba(251, 191, 36, 0.3)"
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => {
                    const noteIndex = DEMO_NOTES.findIndex(n => n.whiteKeyIndex === i)
                    if (noteIndex >= 0) setActiveNoteIndex(noteIndex)
                  }}
                >
                  {/* Key shine */}
                  <div className="absolute inset-x-1 top-1 h-1/3 rounded-sm bg-gradient-to-b from-white/80 to-transparent" />
                  
                  {/* Active pulse effect */}
                  {isActive && (
                    <>
                      <div 
                        className="absolute inset-0 rounded-b-lg animate-pulse"
                        style={{
                          background: "linear-gradient(to bottom, rgba(251, 191, 36, 0.3), rgba(251, 191, 36, 0.1))",
                        }}
                      />
                      <div 
                        className="absolute -inset-2 rounded-lg animate-ping opacity-30"
                        style={{
                          background: "radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, transparent 70%)",
                        }}
                      />
                    </>
                  )}
                </div>
              )
            })}
            
            {/* Black keys */}
            <div className="absolute top-0 left-0 right-0 flex h-16 md:h-20 pointer-events-none">
              {BLACK_KEY_POSITIONS.map((posIndex, i) => {
                const position = ((posIndex + 0.65) / WHITE_KEYS.length) * 100
                
                return (
                  <div
                    key={`black-${i}`}
                    className="absolute w-[9%] rounded-b-md cursor-pointer pointer-events-auto transition-all duration-100"
                    style={{
                      left: `${position}%`,
                      height: "100%",
                      background: "linear-gradient(to bottom, #374151, #1f2937)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5), inset 0 -1px 2px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {/* Key shine */}
                    <div className="absolute inset-x-1 top-1 h-1/4 rounded-sm bg-gradient-to-b from-slate-500/30 to-transparent" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Label */}
          <div className="mt-2 text-xs text-slate-500 text-center">
            건반 지시 시스템
          </div>
        </div>
      </div>

      {/* Play/Pause control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mt-4 px-4 py-2 text-xs text-slate-400 hover:text-white border border-slate-700 rounded-full hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
      >
        {isPlaying ? "일시정지" : "재생"}
      </button>
    </div>
  )
}
