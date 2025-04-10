"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Search, ArrowRight } from "lucide-react";

// Define types for better TypeScript support
interface Model {
  id: number;
  name: string;
  category: string;
  color: string;
  description: string;
  link: string;
}

const ModelExplorer = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const filters = ["All", "LLMs", "Embeddings"];

  const models: Model[] = [
    {
      id: 1,
      name: "Gemini Pro",
      category: "LLM",
      color: "#4ade80",
      description:
        "Google's most capable model for text generation, reasoning, and complex reasoning.",
      link: "Try Gemini Pro",
    },
    {
      id: 2,
      name: "Claude 3.5 Pro",
      category: "LLM",
      color: "#3b82f6",
      description:
        "High-performance model balancing speed with expert-level reasoning, images, coding, and text.",
      link: "Try Claude 3.5 Pro",
    },
    {
      id: 3,
      name: "Claude 3.5 Haiku",
      category: "LLM",
      color: "#3b82f6",
      description:
        "Fastest Claude model with exceptional intelligence and understanding quality.",
      link: "Try Claude 3.5 Haiku",
    },
    {
      id: 4,
      name: "Claude 3.0 Opus",
      category: "LLM",
      color: "#3b82f6",
      description:
        "Anthropic's most intelligent model with exceptional understanding, reasoning, and nuanced instructions.",
      link: "Try Claude 3.0 Opus",
    },
    {
      id: 5,
      name: "Claude 3.5 Pro Experimental",
      category: "LLM",
      color: "#3b82f6",
      description:
        "Early access to the latest Claude 3.5 Pro with enhanced capabilities and experimental features.",
      link: "Try Claude 3.5 Pro Experimental",
    },
    {
      id: 6,
      name: "Claude 3.5 Flash",
      category: "LLM",
      color: "#3b82f6",
      description:
        "Balanced Claude model with exceptional intelligence and understanding quality.",
      link: "Try Claude 3.5 Flash",
    },
    {
      id: 7,
      name: "GPT-4",
      category: "LLM",
      color: "#ef4444",
      description:
        "OpenAI's most capable model for complex problem-solving and creative tasks.",
      link: "Try GPT-4",
    },
    {
      id: 8,
      name: "E5-Base",
      category: "Embeddings",
      color: "#3b82f6",
      description:
        "A powerful model designed to create text embeddings for semantic search applications.",
      link: "Try E5-Base",
    },
    {
      id: 9,
      name: "Cohere",
      category: "Embeddings",
      color: "#a855f7",
      description:
        "A powerful model designed to create text embeddings for semantic search applications.",
      link: "Try Cohere",
    },
  ];

  // Filter models based on selected filter and search term
  const filteredModels = models.filter((model) => {
    const matchesFilter = filter === "All" || model.category === filter;
    const matchesSearch =
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // For animation purposes
  const displayedModels = showMore
    ? filteredModels
    : filteredModels.slice(0, 6);

  return (
    <div className="p-6 bg-black text-white w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        {/* Header with title and filters in a grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <h2 className="text-2xl font-bold lg:col-span-1">
            Explore Available Models
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-2 lg:justify-end">
            <div className="grid grid-cols-3 gap-2">
              {filters.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-2 py-1 rounded-full text-sm transition-all duration-300 ${
                    filter === option
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {option}{" "}
                  {option !== "All" && (
                    <ChevronDown className="inline-block w-3 h-3" />
                  )}
                </button>
              ))}
            </div>

            <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm transition-all duration-300">
              Advanced Filtering{" "}
              <ChevronRight className="inline-block w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 pl-10 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        </div>

        {/* Grid of model cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedModels.map((model) => (
            <div
              key={model.id}
              className={`grid grid-rows-[auto_1fr_auto] bg-gray-900 border border-gray-800 rounded-xl p-5 transition-all duration-300 h-64 ${
                hoveredCard === model.id
                  ? "transform scale-105 shadow-lg shadow-blue-500/20"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Category badge */}
              <div className="justify-self-end">
                <span className="bg-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  {model.category}
                </span>
              </div>

              {/* Main content */}
              <div className="grid gap-3">
                <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: model.color }}
                  />
                  <h3 className="text-lg font-semibold">{model.name}</h3>
                </div>

                <p className="text-gray-300 text-sm">{model.description}</p>
              </div>

              {/* Link */}
              <div className="self-end">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center group"
                >
                  {model.link}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Animated grid SVG background */}
              {hoveredCard === model.id && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <svg width="100%" height="100%" className="opacity-10">
                    {/* Grid patterns */}
                    <defs>
                      <pattern
                        id={`smallGrid-${model.id}`}
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke={model.color}
                          strokeWidth="0.5"
                          opacity="0.5"
                        />
                      </pattern>
                      <pattern
                        id={`grid-${model.id}`}
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          width="50"
                          height="50"
                          fill={`url(#smallGrid-${model.id})`}
                        />
                        <path
                          d="M 50 0 L 0 0 0 50"
                          fill="none"
                          stroke={model.color}
                          strokeWidth="1"
                          opacity="0.8"
                        />
                      </pattern>
                    </defs>

                    {/* Grid background */}
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#grid-${model.id})`}
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Animated elements */}
                    <circle
                      cx="75%"
                      cy="25%"
                      r="30"
                      fill="none"
                      stroke={model.color}
                      strokeWidth="2"
                      className="animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                    <rect
                      x="10%"
                      y="70%"
                      width="40"
                      height="40"
                      stroke={model.color}
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDuration: "2.5s" }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load more button */}
        {filteredModels.length > 6 && (
          <div className="grid place-items-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 group"
            >
              {showMore ? "Show Less" : "Load More Models"}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelExplorer;
