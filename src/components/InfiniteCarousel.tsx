"use client"

import { useEffect, useState } from "react"

// Company data with proper TypeScript interface
interface Company {
  name: string
  color: string
  initial: string
}

const companies: Company[] = [
  { name: "Mistral", color: "#FF5733", initial: "M" },
  { name: "Anthropic", color: "#E040FB", initial: "A" },
  { name: "Google", color: "#00BCD4", initial: "G" },
  { name: "DeepSeek", color: "#2979FF", initial: "D" },
  { name: "Open", color: "#29B6F6", initial: "O" },
  { name: "Open AI", color: "#00E676", initial: "O" },
  { name: "Meta AI", color: "#2979FF", initial: "M" },
]

// Duplicate the array to create a seamless loop
const duplicatedCompanies = [...companies, ...companies, ...companies]

export default function InfiniteCarousel() {
  const [blobPosition1, setBlobPosition1] = useState({ x: 20, y: 20 })
  const [blobPosition2, setBlobPosition2] = useState({ x: 70, y: 60 })

  // Random blob movement
  useEffect(() => {
    const moveBlobs = () => {
      setBlobPosition1({
        x: 10 + Math.random() * 30,
        y: 10 + Math.random() * 30,
      })

      setBlobPosition2({
        x: 50 + Math.random() * 30,
        y: 50 + Math.random() * 30,
      })
    }

    const interval = setInterval(moveBlobs, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full relative">
      {/* Background blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[100px] -z-10 transition-all duration-[5000ms] ease-in-out"
        style={{
          left: `${blobPosition1.x}%`,
          top: `${blobPosition1.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-[100px] -z-10 transition-all duration-[5000ms] ease-in-out"
        style={{
          left: `${blobPosition2.x}%`,
          top: `${blobPosition2.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Top carousel - left to right */}
      <div className="w-full overflow-hidden mb-4 mt-6">
        <div className="flex items-center carousel-scroll-left">
          {duplicatedCompanies.map((company, index) => (
            <div key={`left-${index}`} className="flex items-center bg-gray-700 rounded-full px-4 py-2 mx-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                style={{ backgroundColor: company.color }}
              >
                <span className="text-white text-xs font-bold text-nowrap">{company.initial}</span>
              </div>
              <span className="text-white text-sm font-medium text-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom carousel - right to left */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center carousel-scroll-right">
          {duplicatedCompanies.map((company, index) => (
            <div key={`right-${index}`} className="flex items-center bg-gray-700 rounded-full px-4 py-2 mx-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                style={{ backgroundColor: company.color }}
              >
                <span className="text-white text-xs font-bold text-nowrap">{company.initial}</span>
              </div>
              <span className="text-white text-sm font-medium text-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        .carousel-scroll-right {
          animation: scrollRight 60s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${companies.length}));
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(calc(-200px * ${companies.length}));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
