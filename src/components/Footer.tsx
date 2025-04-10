"use client";
// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Twitter, Github, Linkedin, Mail, Discord } from "lucide-react";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 w-6 h-6 flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <h2 className="text-xl font-bold">Kidjig</h2>
            </div>
            <p className="text-gray-300">
              Building the future of AI Products. Empowering creators and
              developers with powerful AI tools.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:info@kidjig.com"
                className="text-gray-300 hover:text-white"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://discord.com"
                className="text-gray-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">LEGAL</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span className="text-purple-400">Public Beta</span>
            </div>
            <p className="text-gray-300">
              Join our early access program and shape the future of AI APIs
            </p>
            <div className="flex items-center space-x-2">
              {/* <Discord size={20} className="text-gray-300" /> */}
              <i className="fa-brands fa-discord"></i>
              <Link href="/discord" className="text-gray-300 hover:text-white">
                Join Discord Community
              </Link>
            </div>
          </div>
        </div>

        {/* Microsoft Startup and Product Hunt */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/microsoft-logo.svg"
              alt="Microsoft Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <p className="font-semibold">Microsoft Startup</p>
              <p className="text-gray-400">Founders Hub Member</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 flex items-center space-x-2">
            <div className="bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="font-bold">P</span>
            </div>
            <div>
              <p className="text-gray-500 text-xs">FIND US ON</p>
              <p className="text-red-400 font-bold">Product Hunt</p>
            </div>
            <div className="text-red-400">
              <div className="flex flex-col items-center">
                <span>▲</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Kidjig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
