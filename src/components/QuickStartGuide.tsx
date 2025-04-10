"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import "./QuickStartGuide.css";

// Sample code snippets for different languages
const codeSnippets: Record<string, string> = {
  javascript: `const axios = require('axios');

// Base URL for all API calls
const baseUrl = 'https://api.kidjig.com/provider';

// Example: Chat completion with GPT-3.5
const response = await axios.post(
  \`\${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo\`,
  {
    prompt: "What is the capital of France?",
    stream: false,
    config: {
      temperature: 0.7,
      maxOutputTokens: 4096,
      topP: 1,
      topK: 40
    }
  },
  {
    headers: {
      'X-Api-Key': 'YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

console.log(response.data);`,
  python: `import requests

# Base URL for all API calls
base_url = 'https://api.kidjig.com/provider'

# Example: Chat completion with GPT-3.5
response = requests.post(
    f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",
    json={
        "prompt": "What is the capital of France?",
        "stream": False,
        "config": {
            "temperature": 0.7,
            "maxOutputTokens": 4096,
            "topP": 1,
            "topK": 40
        }
    },
    headers={
        "X-Api-Key": "YOUR_API_KEY",
        "Content-Type": "application/json"
    }
)

print(response.json())`,
  curl: `curl -X POST https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo \\
  -H "X-Api-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "What is the capital of France?",
    "stream": false,
    "config": {
      "temperature": 0.7,
      "maxOutputTokens": 4096,
      "topP": 1,
      "topK": 40
    }
  }'`,
};

// Step images and descriptions
const steps = [
  {
    title: "Create Account",
    description:
      "Sign up and create your account to get started with Kidjig API. Access the dashboard to manage your projects and monitor usage.",
    image: "https://placehold.co/400x400/3b82f6/FFFFFF?text=Create+Account",
  },
  {
    title: "Get API Key",
    description:
      "Generate your API key from the API Keys section in your dashboard. This key will be used to authenticate all your API requests.",
    image: "https://placehold.co/400x400/8b5cf6/FFFFFF?text=Get+API+Key",
  },
  {
    title: "Make API Calls",
    description:
      "Use your API key to authenticate and start making API calls. Follow the examples below to get started with different programming languages.",
    image: "https://placehold.co/400x400/10b981/FFFFFF?text=Make+API+Calls",
  },
];

interface BackgroundShapeProps {
  shape: {
    id: number;
    type: string;
    size: number;
    x: number;
    y: number;
    color: string;
    duration: number;
    delay: number;
  };
}

const BackgroundShape = ({ shape }: BackgroundShapeProps) => {
  return (
    <div
      className={`background-shape ${shape.type}`}
      style={{
        width: shape.size,
        height: shape.size,
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        backgroundColor: shape.color,
        animationDuration: `${shape.duration}s`,
        animationDelay: `${shape.delay}s`,
      }}
    />
  );
};

interface QuickStartGuideProps {
  className?: string;
}

export default function QuickStartGuide({
  className = "",
}: QuickStartGuideProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const containerRef = useRef<HTMLDivElement>(null);

  // Loop through steps continuously unless a step is being hovered
  useEffect(() => {
    if (hoveredStep !== null) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeStep, hoveredStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate random shapes for the background - now using useMemo to prevent recreation
  const shapes = useMemo(() => {
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];

    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? "circle" : "square",
      size: 20 + Math.random() * 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 60 + Math.random() * 40,
      delay: Math.random() * 10,
    }));
  }, []);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <div className={`quick-start-container ${className}`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden background-animation">
        {shapes.map((shape) => (
          <BackgroundShape key={shape.id} shape={shape} />
        ))}
      </div>

      {/* Main container with glass effect */}
      <motion.div
        ref={containerRef}
        className="quick-start-glass"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="quick-start-content">
          {/* Header */}
          <div className="quick-start-header">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="quick-start-title">
                Quick <span>Start</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button className="docs-button">
                <ExternalLink className="mr-2 h-4 w-4" />
                Full Documentation
              </button>
            </motion.div>
          </div>

          {/* Steps and visualization section */}
          <div className="steps-grid">
            {/* Steps column */}
            <div className="steps-container">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`step-card ${
                    currentStep === index ? "active" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="step-content">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-details">
                      <h3 className="step-title">{step.title}</h3>
                      <AnimatePresence mode="wait">
                        {currentStep === index && (
                          <motion.p
                            className="step-description"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Step visualization column */}
            <div className="step-visualization">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  className="relative w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="image-container">
                    <Image
                      src={steps[currentStep].image}
                      alt={`Step ${currentStep + 1}: ${
                        steps[currentStep].title
                      }`}
                      width={400}
                      height={400}
                      className="step-image"
                    />
                    <div className="step-badge">
                      <span>Step {currentStep + 1}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Base URL section */}
          <motion.div
            className="base-url-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="section-title">Base URL</h2>
            <div className="url-container">
              <code className="url-code">https://api.kidjig.com/provider</code>
              <button
                className="copy-button"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://api.kidjig.com/provider"
                  )
                }
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Code examples section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-title">Make your first API call</h2>
            </div>

            {/* Custom tabs implementation */}
            <div className="w-full">
              <div className="tabs-container">
                {Object.keys(codeSnippets).map((lang) => (
                  <button
                    key={lang}
                    className={`tab-button ${
                      language === lang ? "active" : ""
                    }`}
                    onClick={() => setLanguage(lang)}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="code-container">
                    <pre className="code-block">
                      <code className="code-content">
                        {codeSnippets[language]}
                      </code>
                    </pre>
                    <button
                      className="code-copy-button"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <Check className="code-copy-icon check-icon" />
                      ) : (
                        <Copy className="code-copy-icon" />
                      )}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Authorization section */}
          <motion.div
            className="auth-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="section-title">Authorization</h2>
            <div className="auth-container">
              <p className="auth-text">
                Include your API key in the X-Api-Key header for all requests:
              </p>
              <div className="auth-code-block">
                <code className="auth-code">X-Api-Key: YOUR_API_KEY</code>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
