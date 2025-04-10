// components/HeroSection.tsx
"use client"; // Use the client directive since we're using browser APIs

import { useEffect } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText1?: string;
  buttonText2?: string;
  onButtonClick?: () => void;
}

const HeroSection = ({
  title = "Modern Gradient",
  description = "A sleek, modern background with soft gradient spheres, subtle movement, and interactive particle effects. Perfect for contemporary web designs.",
  buttonText1 = "Explore More",
  buttonText2 = "Explore More",
  onButtonClick = () => {},
}: HeroSectionProps) => {
  useEffect(() => {
    // Create particle effect
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;

    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle(particlesContainer);
    }

    function createParticle(container: HTMLElement) {
      const particle = document.createElement("div");
      particle.className = styles.particle;

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

    function resetParticle(particle: HTMLDivElement) {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return {
        x: posX,
        y: posY,
      };
    }

    function animateParticle(particle: HTMLDivElement) {
      // Initial position
      const pos = resetParticle(particle);

      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      // Animate with timing
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;

        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }

    // Mouse interaction handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesContainer) return;

      // Get container bounds
      const containerRect = particlesContainer.getBoundingClientRect();

      // Calculate mouse position relative to container
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      // Convert to percentage within container
      const mouseXPercent = (mouseX / containerRect.width) * 100;
      const mouseYPercent = (mouseY / containerRect.height) * 100;

      // Create temporary particle
      const particle = document.createElement("div");
      particle.className = styles.particle;

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
      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseXPercent + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseYPercent + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";

        // Remove after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      // Subtle movement of gradient spheres (also updating this)
      const spheres = document.querySelectorAll(
        `.${styles["gradient-sphere"]}`
      );
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      spheres.forEach((sphere) => {
        const element = sphere as HTMLElement;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles["gradient-background"]}>
        <div
          className={`${styles["gradient-sphere"]} ${styles["sphere-1"]}`}
        ></div>
        <div
          className={`${styles["gradient-sphere"]} ${styles["sphere-2"]}`}
        ></div>
        <div
          className={`${styles["gradient-sphere"]} ${styles["sphere-3"]}`}
        ></div>
        <div className={styles.glow}></div>
        <div className={styles["grid-overlay"]}></div>
        <div className={styles["noise-overlay"]}></div>
        <div
          className={styles["particles-container"]}
          id="particles-container"
        ></div>
      </div>

      <div className={styles["content-container"]}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className={styles.btn} onClick={onButtonClick}>
          {buttonText1}
        </button>
        <button className={styles.btn1} onClick={onButtonClick}>
          {buttonText2}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
