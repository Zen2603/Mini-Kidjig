// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronRight,
//   Search,
//   ExternalLink,
//   Info,
//   ChevronDown,
//   Github,
//   Twitter,
//   Linkedin,
//   Youtube,
//   MessageSquare,
//   House,
//   FileBox,
//   Sparkles,
//   KeyRound,
//   Star,
//   ChartColumn,
//   BookOpen,
//   CircleHelp,
//   Coins,
// } from "lucide-react";
import HeroSection from "../components/HeroSection";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Sidebar from "@/components/Sidebar";
import QuickStartGuide from "@/components/QuickStartGuide";
import ModelExplorer from "@/components/ModelExplorer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Hero Section */}
        <HeroSection
          title="Enterprise AI Gateway"
          description="Deploy, secure, and scale your enterprise AI infrastructure with a
              single gateway to provision, access, and manage multiple AI
              providers and open-source models."
          buttonText1="Get Api Key"
          buttonText2="Schedule Demo"
          // Contact Sales
        />

        {/* crousel */}
        <InfiniteCarousel />

        {/* Quick Start Section */}
        <QuickStartGuide />

        {/* Models Section */}
        <ModelExplorer />

        {/* AI Playground Section */}
        <div className="px-8 py-6">
          <div className="bg-blue-900/20 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-blue-500/20 text-blue-300 text-xs px-2 py-0.5 rounded-full">
              AI Playground
            </div>

            <h2 className="text-2xl font-bold mb-2">
              Explore, Create, and Discover in Our AI Playground!
            </h2>

            <div className="mt-6 bg-[#111] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-[#222] flex justify-between items-center">
                <span className="text-sm font-medium">
                  Experience the Power of AI
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded">
                  Try Now
                </button>
              </div>
              <div className="h-32 bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  AI Playground Interface Preview
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#111] rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Simple Integration</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Easily integrate with your existing applications using our
                  simple API.
                </p>
                <div className="h-24 bg-[#0a0a0a] rounded flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Code Example</span>
                </div>
              </div>

              <div className="bg-[#111] rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">
                  Infinite Scalability
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Scale your AI applications with our high-performance API
                  gateway.
                </p>
                <div className="h-24 bg-[#0a0a0a] rounded flex items-center justify-center">
                  <span className="text-gray-500 text-xs">
                    Scalability Diagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-8 py-6">
          <div className="bg-[#111] rounded-lg p-4">
            <div className="border-b border-[#222] pb-2 mb-2">
              <button className="w-full text-left text-sm hover:text-blue-400">
                What is Kidjig AI?
              </button>
            </div>
            <div className="border-b border-[#222] pb-2 mb-2">
              <button className="w-full text-left text-sm hover:text-blue-400">
                How to get started?
              </button>
            </div>
            <div className="border-b border-[#222] pb-2 mb-2">
              <button className="w-full text-left text-sm hover:text-blue-400">
                How do I contact support?
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {/* <div className="px-8 py-6 border-t border-[#222]">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-6 h-6 rounded"></div>
              <div>
                <div className="font-semibold">Kidjig</div>
                <div className="text-xs text-gray-400">
                  AI Gateway for Enterprise | Empowering creators and businesses
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-xs text-gray-400">
                <div className="font-medium text-gray-300 mb-1">LINKS</div>
                <div className="grid gap-1">
                  <Link href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </div>
              </div>

              <div className="text-xs text-gray-400">
                <div className="font-medium text-gray-300 mb-1">SOCIAL</div>
                <div className="grid gap-1">
                  <Link
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <Twitter className="w-3 h-3" />
                    <span>Join our Twitter program</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" />
                    <span>Join our Discord community</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white">
                <Github className="w-4 h-4" />
              </button>
              <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white">
                <Youtube className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-[#222] rounded-md px-2 py-1">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  width={16}
                  height={16}
                  alt="Microsoft"
                  className="rounded"
                />
                <span className="text-xs">Microsoft Partner</span>
              </div>

              <div className="flex items-center gap-1 bg-[#222] rounded-md px-2 py-1">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  width={16}
                  height={16}
                  alt="Product Hunt"
                  className="rounded"
                />
                <span className="text-xs">Product Hunt</span>
                <span className="bg-orange-500 text-white text-xs px-1 rounded">
                  5.0
                </span>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8">
            © 2024 Kidjig. All rights reserved.
          </div>
        </div> */}
      </div>
    </div>
  );
}
