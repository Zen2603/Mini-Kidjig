(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_f20a09d0._.js", {

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
const HeroSection = ({ title = "Modern Gradient", description = "A sleek, modern background with soft gradient spheres, subtle movement, and interactive particle effects. Perfect for contemporary web designs.", buttonText = "Explore More", onButtonClick = ()=>{} })=>{
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
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["sphere-2"]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["gradient-sphere"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["sphere-3"]}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glow
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["grid-overlay"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["noise-overlay"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["particles-container"],
                        id: "particles-container"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["content-container"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        onClick: onButtonClick,
                        children: buttonText
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn1,
                        onClick: onButtonClick,
                        children: buttonText
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 159,
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
}]);

//# sourceMappingURL=src_components_f20a09d0._.js.map