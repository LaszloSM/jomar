export function WayuuPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`h-8 w-full ${className}`}>
      <svg viewBox="0 0 1200 32" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="wayuu" x="0" y="0" width="80" height="32" patternUnits="userSpaceOnUse">
            {/* Diamond pattern */}
            <polygon points="20,0 40,16 20,32 0,16" fill="#FDB515" />
            <polygon points="60,0 80,16 60,32 40,16" fill="#003A70" />
            <polygon points="30,8 40,16 30,24 20,16" fill="#DC3545" />
            <polygon points="70,8 80,16 70,24 60,16" fill="#FDB515" />

            {/* Zigzag lines */}
            <polyline points="0,4 10,12 20,4 30,12 40,4" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="40,28 50,20 60,28 70,20 80,28" stroke="white" strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="1200" height="32" fill="url(#wayuu)" />
      </svg>
    </div>
  )
}
