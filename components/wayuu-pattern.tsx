interface WayuuPatternProps {
  className?: string
  height?: number
  flip?: boolean
  animated?: boolean
}

export function WayuuPattern({
  className = "",
  height = 64,
  flip = false,
  animated = false,
}: WayuuPatternProps) {
  const patternId = `wayuu-${Math.random().toString(36).slice(2, 7)}`

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{
        height: `${height}px`,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 160 64"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="160"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Background */}
            <rect width="160" height="64" fill="#003A70" />

            {/* ── TOP ZIGZAG — triangles pointing down (y: 0→14) ── */}
            <polygon points="0,0 20,0 10,14"   fill="#E91E8C" />
            <polygon points="20,0 40,0 30,14"  fill="#00BCD4" />
            <polygon points="40,0 60,0 50,14"  fill="#FFD700" />
            <polygon points="60,0 80,0 70,14"  fill="#FF5722" />
            <polygon points="80,0 100,0 90,14" fill="#76C442" />
            <polygon points="100,0 120,0 110,14" fill="#9C27B0" />
            <polygon points="120,0 140,0 130,14" fill="#E91E8C" />
            <polygon points="140,0 160,0 150,14" fill="#00BCD4" />

            {/* ── DIAMOND 1 — center (40, 32) ── */}
            {/* Outer: pink */}
            <polygon points="40,14 74,32 40,50 6,32" fill="#E91E8C" />
            {/* Inner: yellow */}
            <polygon points="40,21 60,32 40,43 20,32" fill="#FFD700" />
            {/* Core: navy */}
            <polygon points="40,26 50,32 40,38 30,32" fill="#003A70" />
            {/* Corner dots */}
            <polygon points="40,11 43,14 40,17 37,14" fill="#FFFFFF" />
            <polygon points="74,29 77,32 74,35 71,32" fill="#FFFFFF" />
            <polygon points="40,47 43,50 40,53 37,50" fill="#FFFFFF" />
            <polygon points="6,29 9,32 6,35 3,32"   fill="#FFFFFF" />

            {/* ── DIAMOND 2 — center (120, 32) ── */}
            {/* Outer: cyan */}
            <polygon points="120,14 154,32 120,50 86,32" fill="#00BCD4" />
            {/* Inner: orange */}
            <polygon points="120,21 140,32 120,43 100,32" fill="#FF5722" />
            {/* Core: navy */}
            <polygon points="120,26 130,32 120,38 110,32" fill="#003A70" />
            {/* Corner dots */}
            <polygon points="120,11 123,14 120,17 117,14" fill="#FFFFFF" />
            <polygon points="154,29 157,32 154,35 151,32" fill="#FFFFFF" />
            <polygon points="120,47 123,50 120,53 117,50" fill="#FFFFFF" />
            <polygon points="86,29 89,32 86,35 83,32"   fill="#FFFFFF" />

            {/* ── BOTTOM ZIGZAG — triangles pointing up (y: 50→64) ── */}
            <polygon points="0,64 20,64 10,50"    fill="#FFD700" />
            <polygon points="20,64 40,64 30,50"   fill="#FF5722" />
            <polygon points="40,64 60,64 50,50"   fill="#76C442" />
            <polygon points="60,64 80,64 70,50"   fill="#9C27B0" />
            <polygon points="80,64 100,64 90,50"  fill="#E91E8C" />
            <polygon points="100,64 120,64 110,50" fill="#00BCD4" />
            <polygon points="120,64 140,64 130,50" fill="#FFD700" />
            <polygon points="140,64 160,64 150,50" fill="#FF5722" />
          </pattern>
        </defs>

        <rect width="1600" height="64" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

/* ── Slim stripe variant (16px) used in header ── */
export function WayuuStripe({ className = "" }: { className?: string }) {
  const id = `wayuu-stripe-${Math.random().toString(36).slice(2, 7)}`
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: 10 }}>
      <svg
        viewBox="0 0 160 10"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={id} x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
            <rect x="0"  width="20" height="10" fill="#003A70" />
            <rect x="0"  width="20" height="10" fill="#E91E8C" />
          </pattern>
          <pattern id={`${id}-b`} x="0" y="0" width="160" height="10" patternUnits="userSpaceOnUse">
            <rect x="0"   width="20" height="10" fill="#E91E8C" />
            <rect x="20"  width="20" height="10" fill="#00BCD4" />
            <rect x="40"  width="20" height="10" fill="#FFD700" />
            <rect x="60"  width="20" height="10" fill="#FF5722" />
            <rect x="80"  width="20" height="10" fill="#76C442" />
            <rect x="100" width="20" height="10" fill="#9C27B0" />
            <rect x="120" width="20" height="10" fill="#E91E8C" />
            <rect x="140" width="20" height="10" fill="#00BCD4" />
          </pattern>
        </defs>
        <rect width="1600" height="10" fill={`url(#${id}-b)`} />
      </svg>
    </div>
  )
}
