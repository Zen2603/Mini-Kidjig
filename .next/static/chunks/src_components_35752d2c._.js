(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_35752d2c._.js", {

"[project]/src/components/HeroSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "btn": "HeroSection-module__sBkrQG__btn",
  "btn1": "HeroSection-module__sBkrQG__btn1",
  "content-container": "HeroSection-module__sBkrQG__content-container",
  "float-1": "HeroSection-module__sBkrQG__float-1",
  "float-2": "HeroSection-module__sBkrQG__float-2",
  "float-3": "HeroSection-module__sBkrQG__float-3",
  "glow": "HeroSection-module__sBkrQG__glow",
  "gradient-background": "HeroSection-module__sBkrQG__gradient-background",
  "gradient-sphere": "HeroSection-module__sBkrQG__gradient-sphere",
  "grid-overlay": "HeroSection-module__sBkrQG__grid-overlay",
  "heroSection": "HeroSection-module__sBkrQG__heroSection",
  "noise-overlay": "HeroSection-module__sBkrQG__noise-overlay",
  "particle": "HeroSection-module__sBkrQG__particle",
  "particles-container": "HeroSection-module__sBkrQG__particles-container",
  "pulse": "HeroSection-module__sBkrQG__pulse",
  "sphere-1": "HeroSection-module__sBkrQG__sphere-1",
  "sphere-2": "HeroSection-module__sBkrQG__sphere-2",
  "sphere-3": "HeroSection-module__sBkrQG__sphere-3",
});
}}),
"[project]/src/components/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/HeroSection.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // Use the client directive since we're using browser APIs
;
;
const HeroSection = ({ title = "Modern Gradient", description = "A sleek, modern background with soft gradient spheres, subtle movement, and interactive particle effects. Perfect for contemporary web designs.", buttonText1 = "Explore More", buttonText2 = "Explore More", onButtonClick = ()=>{} })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            // Create particle effect
            const particlesContainer = document.getElementById("particles-container");
            if (!particlesContainer) return;
            const particleCount = 80;
            // Create particles
            for(let i = 0; i < particleCount; i++){
                createParticle(particlesContainer);
            }
            function createParticle(container) {
                const particle = document.createElement("div");
                particle.className = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle;
                // Random size (small)
                const size = Math.random() * 3 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                // Initial position
                resetParticle(particle);
                container.appendChild(particle);
                // Animate
                animateParticle(particle);
            }
            function resetParticle(particle) {
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.opacity = "0";
                return {
                    x: posX,
                    y: posY
                };
            }
            function animateParticle(particle) {
                // Initial position
                const pos = resetParticle(particle);
                // Random animation properties
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                // Animate with timing
                setTimeout({
                    "HeroSection.useEffect.animateParticle": ()=>{
                        particle.style.transition = `all ${duration}s linear`;
                        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
                        // Move in a slight direction
                        const moveX = pos.x + (Math.random() * 20 - 10);
                        const moveY = pos.y - Math.random() * 30; // Move upwards
                        particle.style.left = `${moveX}%`;
                        particle.style.top = `${moveY}%`;
                        // Reset after animation completes
                        setTimeout({
                            "HeroSection.useEffect.animateParticle": ()=>{
                                animateParticle(particle);
                            }
                        }["HeroSection.useEffect.animateParticle"], duration * 1000);
                    }
                }["HeroSection.useEffect.animateParticle"], delay * 1000);
            }
            // Mouse interaction handler
            const handleMouseMove = {
                "HeroSection.useEffect.handleMouseMove": (e)=>{
                    if (!particlesContainer) return;
                    // Get container bounds
                    const containerRect = particlesContainer.getBoundingClientRect();
                    // Calculate mouse position relative to container
                    const mouseX = e.clientX - containerRect.left;
                    const mouseY = e.clientY - containerRect.top;
                    // Convert to percentage within container
                    const mouseXPercent = mouseX / containerRect.width * 100;
                    const mouseYPercent = mouseY / containerRect.height * 100;
                    // Create temporary particle
                    const particle = document.createElement("div");
                    particle.className = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].particle;
                    // Small size
                    const size = Math.random() * 4 + 2;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    // Position at mouse
                    particle.style.left = `${mouseXPercent}%`;
                    particle.style.top = `${mouseYPercent}%`;
                    particle.style.opacity = "0.6";
                    particlesContainer.appendChild(particle);
                    // Animate outward
                    setTimeout({
                        "HeroSection.useEffect.handleMouseMove": ()=>{
                            particle.style.transition = "all 2s ease-out";
                            particle.style.left = `${mouseXPercent + (Math.random() * 10 - 5)}%`;
                            particle.style.top = `${mouseYPercent + (Math.random() * 10 - 5)}%`;
                            particle.style.opacity = "0";
                            // Remove after animation
                            setTimeout({
                                "HeroSection.useEffect.handleMouseMove": ()=>{
                                    particle.remove();
                                }
                            }["HeroSection.useEffect.handleMouseMove"], 2000);
                        }
                    }["HeroSection.useEffect.handleMouseMove"], 10);
                    // Subtle movement of gradient spheres (also updating this)
                    const spheres = document.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]}`);
                    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
                    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
                    spheres.forEach({
                        "HeroSection.useEffect.handleMouseMove": (sphere)=>{
                            const element = sphere;
                            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
                        }
                    }["HeroSection.useEffect.handleMouseMove"]);
                }
            }["HeroSection.useEffect.handleMouseMove"];
            // Add event listener
            document.addEventListener("mousemove", handleMouseMove);
            // Cleanup function
            return ({
                "HeroSection.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-background"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["sphere-1"]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["sphere-2"]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["sphere-3"]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["grid-overlay"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["noise-overlay"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["particles-container"],
                        id: "particles-container"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["content-container"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        onClick: onButtonClick,
                        children: buttonText1
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn1,
                        onClick: onButtonClick,
                        children: buttonText2
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
_s(HeroSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/InfiniteCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InfiniteCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const companies = [
    {
        name: "Mistral",
        color: "#FF5733",
        initial: "M"
    },
    {
        name: "Anthropic",
        color: "#E040FB",
        initial: "A"
    },
    {
        name: "Google",
        color: "#00BCD4",
        initial: "G"
    },
    {
        name: "DeepSeek",
        color: "#2979FF",
        initial: "D"
    },
    {
        name: "Open",
        color: "#29B6F6",
        initial: "O"
    },
    {
        name: "Open AI",
        color: "#00E676",
        initial: "O"
    },
    {
        name: "Meta AI",
        color: "#2979FF",
        initial: "M"
    }
];
// Duplicate the array to create a seamless loop
const duplicatedCompanies = [
    ...companies,
    ...companies,
    ...companies
];
function InfiniteCarousel() {
    _s();
    const [blobPosition1, setBlobPosition1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 20,
        y: 20
    });
    const [blobPosition2, setBlobPosition2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 70,
        y: 60
    });
    // Random blob movement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteCarousel.useEffect": ()=>{
            const moveBlobs = {
                "InfiniteCarousel.useEffect.moveBlobs": ()=>{
                    setBlobPosition1({
                        x: 10 + Math.random() * 30,
                        y: 10 + Math.random() * 30
                    });
                    setBlobPosition2({
                        x: 50 + Math.random() * 30,
                        y: 50 + Math.random() * 30
                    });
                }
            }["InfiniteCarousel.useEffect.moveBlobs"];
            const interval = setInterval(moveBlobs, 5000);
            return ({
                "InfiniteCarousel.useEffect": ()=>clearInterval(interval)
            })["InfiniteCarousel.useEffect"];
        }
    }["InfiniteCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "590f6e5b692075ec",
                [
                    companies.length,
                    companies.length
                ]
            ]
        ]) + " " + "w-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    left: `${blobPosition1.x}%`,
                    top: `${blobPosition1.y}%`,
                    transform: "translate(-50%, -50%)"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "590f6e5b692075ec",
                        [
                            companies.length,
                            companies.length
                        ]
                    ]
                ]) + " " + "absolute w-[500px] h-[500px] rounded-full bg-purple-300/20 blur-[100px] -z-10 transition-all duration-[5000ms] ease-in-out"
            }, void 0, false, {
                fileName: "[project]/src/components/InfiniteCarousel.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    left: `${blobPosition2.x}%`,
                    top: `${blobPosition2.y}%`,
                    transform: "translate(-50%, -50%)"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "590f6e5b692075ec",
                        [
                            companies.length,
                            companies.length
                        ]
                    ]
                ]) + " " + "absolute w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-[100px] -z-10 transition-all duration-[5000ms] ease-in-out"
            }, void 0, false, {
                fileName: "[project]/src/components/InfiniteCarousel.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "590f6e5b692075ec",
                        [
                            companies.length,
                            companies.length
                        ]
                    ]
                ]) + " " + "w-full overflow-hidden mb-4 mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "590f6e5b692075ec",
                            [
                                companies.length,
                                companies.length
                            ]
                        ]
                    ]) + " " + "flex items-center carousel-scroll-left",
                    children: duplicatedCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "590f6e5b692075ec",
                                    [
                                        companies.length,
                                        companies.length
                                    ]
                                ]
                            ]) + " " + "flex items-center bg-gray-700 rounded-full px-4 py-2 mx-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: company.color
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "590f6e5b692075ec",
                                            [
                                                companies.length,
                                                companies.length
                                            ]
                                        ]
                                    ]) + " " + "w-6 h-6 rounded-full flex items-center justify-center mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "590f6e5b692075ec",
                                                [
                                                    companies.length,
                                                    companies.length
                                                ]
                                            ]
                                        ]) + " " + "text-white text-xs font-bold text-nowrap",
                                        children: company.initial
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "590f6e5b692075ec",
                                            [
                                                companies.length,
                                                companies.length
                                            ]
                                        ]
                                    ]) + " " + "text-white text-sm font-medium text-nowrap",
                                    children: company.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `left-${index}`, true, {
                            fileName: "[project]/src/components/InfiniteCarousel.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InfiniteCarousel.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "590f6e5b692075ec",
                        [
                            companies.length,
                            companies.length
                        ]
                    ]
                ]) + " " + "w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "590f6e5b692075ec",
                            [
                                companies.length,
                                companies.length
                            ]
                        ]
                    ]) + " " + "flex items-center carousel-scroll-right",
                    children: duplicatedCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "590f6e5b692075ec",
                                    [
                                        companies.length,
                                        companies.length
                                    ]
                                ]
                            ]) + " " + "flex items-center bg-gray-700 rounded-full px-4 py-2 mx-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: company.color
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "590f6e5b692075ec",
                                            [
                                                companies.length,
                                                companies.length
                                            ]
                                        ]
                                    ]) + " " + "w-6 h-6 rounded-full flex items-center justify-center mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "590f6e5b692075ec",
                                                [
                                                    companies.length,
                                                    companies.length
                                                ]
                                            ]
                                        ]) + " " + "text-white text-xs font-bold text-nowrap",
                                        children: company.initial
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "590f6e5b692075ec",
                                            [
                                                companies.length,
                                                companies.length
                                            ]
                                        ]
                                    ]) + " " + "text-white text-sm font-medium text-nowrap",
                                    children: company.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `right-${index}`, true, {
                            fileName: "[project]/src/components/InfiniteCarousel.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/InfiniteCarousel.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InfiniteCarousel.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "590f6e5b692075ec",
                dynamic: [
                    companies.length,
                    companies.length
                ],
                children: `.carousel-scroll-left.__jsx-style-dynamic-selector{animation:60s linear infinite scrollLeft}.carousel-scroll-right.__jsx-style-dynamic-selector{animation:60s linear infinite scrollRight}@keyframes scrollLeft{0%{transform:translate(0)}to{transform:translateX(calc(-200px*${companies.length}))}}@keyframes scrollRight{0%{transform:translateX(calc(-200px*${companies.length}))}to{transform:translate(0)}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InfiniteCarousel.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(InfiniteCarousel, "wDc6dSpy6zPu5Ka7ltuknuFLyMo=");
_c = InfiniteCarousel;
var _c;
__turbopack_context__.k.register(_c, "InfiniteCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_35752d2c._.js.map