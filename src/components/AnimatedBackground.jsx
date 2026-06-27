import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 120, // Interaction radius
    };

    // Particles array
    const particles = [];
    const particleCount = Math.min(120, Math.floor((width * height) / 14000)); // Responsive count

    class Particle {
      constructor() {
        this.reset();
        // Stagger initial positions across full screen
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35; // Gentle speed
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.5; // Fine microscopic stars
        this.alpha = Math.random() * 0.5 + 0.2; // Glowing brightness
        this.fadeSpeed = (Math.random() - 0.5) * 0.005;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce/Wrap-around boundaries nicely
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Pulsating glow effect
        this.alpha += this.fadeSpeed;
        if (this.alpha <= 0.15 || this.alpha >= 0.8) {
          this.fadeSpeed *= -1;
        }

        // Mouse interactivity (gentle repelling force)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push away subtly
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${this.alpha})`; // Elegant indigo tinted stars
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep, pure black space backdrop with subtle grid overlay
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Draw dynamic constellation connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            // Stronger opacity for closer stars
            const linkAlpha = (100 - dist) / 100 * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Dynamic colorful gradient connections
            ctx.strokeStyle = `rgba(147, 51, 234, ${linkAlpha})`; // Indigo/purple constellation thread
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none block bg-black"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
