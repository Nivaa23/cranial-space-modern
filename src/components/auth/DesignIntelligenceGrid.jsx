import React, { useEffect, useRef } from 'react';

// Strategically placed peripheral design intelligence nodes (avoiding logo, title, card, footer)
const DESIGN_NODES = [
  {
    id: 'node-sys',
    xPct: 84,
    yPct: 10,
    label: 'SYS_GRID // 01',
    code: '[48.2, 12.0]',
    type: 'crosshair',
    basePulse: true,
  },
  {
    id: 'node-vec',
    xPct: 90,
    yPct: 42,
    label: 'VEC.AXIS',
    code: '[92.4, 44.8]',
    type: 'corner',
    basePulse: false,
  },
  {
    id: 'node-flow',
    xPct: 8,
    yPct: 52,
    label: 'UX_FLOW :: L2',
    code: 'ACTIVE',
    type: 'dot',
    basePulse: true,
  },
  {
    id: 'node-telemetry',
    xPct: 92,
    yPct: 78,
    label: 'TEL_NODE',
    code: '96.8 UX',
    type: 'crosshair',
    basePulse: false,
  },
  {
    id: 'node-coord',
    xPct: 12,
    yPct: 92,
    label: 'ALIGN_GUIDE',
    code: 'x: 120 y: 640',
    type: 'dot',
    basePulse: false,
  }
];

const DesignIntelligenceGrid = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const brandPanel = container.closest('.auth-brand-panel') || container.parentElement;
    if (!brandPanel) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check accessibility & device capabilities
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const touchQuery = window.matchMedia('(hover: none) or (pointer: coarse)');
    
    let prefersReducedMotion = motionQuery.matches;
    let isTouch = touchQuery.matches;

    const handleMediaChange = () => {
      prefersReducedMotion = motionQuery.matches;
      isTouch = touchQuery.matches;
    };

    motionQuery.addEventListener?.('change', handleMediaChange);
    touchQuery.addEventListener?.('change', handleMediaChange);

    let animFrameId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Smooth cursor interpolation state
    let mouseTarget = { x: -1000, y: -1000, active: false };
    let mouseCurrent = { x: -1000, y: -1000, intensity: 0 };

    const handleResize = () => {
      if (!brandPanel || !canvas) return;
      const rect = brandPanel.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (e) => {
      if (prefersReducedMotion || isTouch) return;
      const rect = brandPanel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseTarget.x = x;
        mouseTarget.y = y;
        mouseTarget.active = true;
      } else {
        mouseTarget.active = false;
      }
    };

    const handlePointerLeave = () => {
      mouseTarget.active = false;
    };

    const handlePointerEnter = (e) => {
      if (prefersReducedMotion || isTouch) return;
      const rect = brandPanel.getBoundingClientRect();
      mouseTarget.x = e.clientX - rect.left;
      mouseTarget.y = e.clientY - rect.top;
      mouseTarget.active = true;
    };

    // Attach listeners to the entire left brand panel
    brandPanel.addEventListener('pointermove', handlePointerMove);
    brandPanel.addEventListener('pointerleave', handlePointerLeave);
    brandPanel.addEventListener('pointerenter', handlePointerEnter);
    window.addEventListener('resize', handleResize);

    handleResize();

    let time = 0;
    const gridSize = 36;

    const render = (timestamp) => {
      time = timestamp * 0.001;
      const interactive = !prefersReducedMotion && !isTouch;

      // Lerp mouse positions for smooth, slightly delayed physics
      if (interactive) {
        const targetIntensity = mouseTarget.active ? 1.0 : 0.0;
        mouseCurrent.intensity += (targetIntensity - mouseCurrent.intensity) * 0.07;

        if (mouseTarget.active) {
          if (mouseCurrent.x < -500) {
            mouseCurrent.x = mouseTarget.x;
            mouseCurrent.y = mouseTarget.y;
          } else {
            mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.08;
            mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.08;
          }
        }
      } else {
        mouseCurrent.intensity = 0;
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle parallax offset calculations
      const normX = width > 0 && mouseCurrent.intensity > 0.01 
        ? (mouseCurrent.x / width - 0.5) 
        : 0;
      const normY = height > 0 && mouseCurrent.intensity > 0.01 
        ? (mouseCurrent.y / height - 0.5) 
        : 0;

      const gridParallaxX = normX * 3;
      const gridParallaxY = normY * 3;
      const nodeParallaxX = normX * 14;
      const nodeParallaxY = normY * 14;

      // 1. Draw Base Ambient Grid
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(55, 65, 81, 0.2)';

      const startX = (gridParallaxX % gridSize) - gridSize;
      const startY = (gridParallaxY % gridSize) - gridSize;

      ctx.beginPath();
      for (let x = startX; x <= width + gridSize; x += gridSize) {
        ctx.moveTo(Math.floor(x) + 0.5, 0);
        ctx.lineTo(Math.floor(x) + 0.5, height);
      }
      for (let y = startY; y <= height + gridSize; y += gridSize) {
        ctx.moveTo(0, Math.floor(y) + 0.5);
        ctx.lineTo(width, Math.floor(y) + 0.5);
      }
      ctx.stroke();
      ctx.restore();

      // 2. Cursor Reactive Light Field & Illuminated Grid
      if (mouseCurrent.intensity > 0.005) {
        const mx = mouseCurrent.x;
        const my = mouseCurrent.y;
        const radius = 240;

        ctx.save();

        // Soft Radial Glow Light Field (Purple / Indigo / Sky Blue brand tones)
        const radialGlow = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
        radialGlow.addColorStop(0, `rgba(79, 70, 229, ${0.16 * mouseCurrent.intensity})`);
        radialGlow.addColorStop(0.35, `rgba(129, 140, 248, ${0.08 * mouseCurrent.intensity})`);
        radialGlow.addColorStop(0.75, `rgba(56, 189, 248, ${0.025 * mouseCurrent.intensity})`);
        radialGlow.addColorStop(1, 'rgba(79, 70, 229, 0)');

        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(mx, my, radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlighted Grid Lines around Cursor
        ctx.save();
        ctx.beginPath();
        ctx.arc(mx, my, radius, 0, Math.PI * 2);
        ctx.clip();

        // Responsive grid lines with subtle purple/cyan tone
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.36 * mouseCurrent.intensity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = startX; x <= width + gridSize; x += gridSize) {
          ctx.moveTo(Math.floor(x) + 0.5, 0);
          ctx.lineTo(Math.floor(x) + 0.5, height);
        }
        for (let y = startY; y <= height + gridSize; y += gridSize) {
          ctx.moveTo(0, Math.floor(y) + 0.5);
          ctx.lineTo(width, Math.floor(y) + 0.5);
        }
        ctx.stroke();

        // Subtle intersection points and micro crosshairs near cursor
        const minGridX = Math.floor((mx - radius - startX) / gridSize) * gridSize + startX;
        const maxGridX = Math.ceil((mx + radius - startX) / gridSize) * gridSize + startX;
        const minGridY = Math.floor((my - radius - startY) / gridSize) * gridSize + startY;
        const maxGridY = Math.ceil((my + radius - startY) / gridSize) * gridSize + startY;

        for (let gx = minGridX; gx <= maxGridX; gx += gridSize) {
          for (let gy = minGridY; gy <= maxGridY; gy += gridSize) {
            const dist = Math.hypot(gx - mx, gy - my);
            if (dist < radius) {
              const pointAlpha = (1 - dist / radius) * 0.65 * mouseCurrent.intensity;
              ctx.fillStyle = `rgba(192, 132, 252, ${pointAlpha})`;
              ctx.fillRect(Math.floor(gx) - 1, Math.floor(gy) - 1, 2, 2);

              // Draw tiny crosshairs for very close intersections (< 75px)
              if (dist < 75) {
                const crossAlpha = (1 - dist / 75) * 0.45 * mouseCurrent.intensity;
                ctx.strokeStyle = `rgba(56, 189, 248, ${crossAlpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(gx - 3.5, gy);
                ctx.lineTo(gx + 3.5, gy);
                ctx.moveTo(gx, gy - 3.5);
                ctx.lineTo(gx, gy + 3.5);
                ctx.stroke();
              }
            }
          }
        }

        ctx.restore();
        ctx.restore();
      }

      // 3. Draw Subtle Design Intelligence Nodes
      ctx.save();
      DESIGN_NODES.forEach((node) => {
        const baseX = (node.xPct / 100) * width;
        const baseY = (node.yPct / 100) * height;

        // Apply parallax
        const nx = baseX + nodeParallaxX;
        const ny = baseY + nodeParallaxY;

        // Calculate proximity to cursor
        let proximity = 0;
        if (mouseCurrent.intensity > 0.01) {
          const dist = Math.hypot(nx - mouseCurrent.x, ny - mouseCurrent.y);
          if (dist < 260) {
            proximity = (1 - dist / 260) * mouseCurrent.intensity;
          }
        }

        // Base breathing pulse
        const pulse = node.basePulse && !prefersReducedMotion
          ? Math.sin(time * 1.5 + baseX * 0.1) * 0.15 + 0.85
          : 0.85;

        const baseAlpha = 0.22 * pulse + proximity * 0.58;

        if (node.type === 'crosshair') {
          // Subtle precision crosshair
          ctx.strokeStyle = `rgba(129, 140, 248, ${baseAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nx - 4.5, ny);
          ctx.lineTo(nx + 4.5, ny);
          ctx.moveTo(nx, ny - 4.5);
          ctx.lineTo(nx, ny + 4.5);
          ctx.stroke();

          // Outer delicate circle on proximity
          if (proximity > 0.08) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${proximity * 0.4})`;
            ctx.beginPath();
            ctx.arc(nx, ny, 7 + proximity * 4, 0, Math.PI * 2);
            ctx.stroke();
          }
        } else if (node.type === 'corner') {
          // Precise 90-degree corner brackets
          ctx.strokeStyle = `rgba(99, 102, 241, ${baseAlpha})`;
          ctx.lineWidth = 1;
          const s = 5.5;
          ctx.beginPath();
          ctx.moveTo(nx - s, ny);
          ctx.lineTo(nx, ny);
          ctx.lineTo(nx, ny - s);
          ctx.stroke();
        } else {
          // Micro dot anchor
          ctx.fillStyle = `rgba(129, 140, 248, ${baseAlpha})`;
          ctx.beginPath();
          ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
          ctx.fill();

          if (proximity > 0.12) {
            ctx.strokeStyle = `rgba(192, 132, 252, ${proximity * 0.35})`;
            ctx.beginPath();
            ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Draw subtle typography label (design intelligence coordinates)
        const labelAlpha = Math.max(0.18, proximity * 0.72);
        ctx.font = '500 8.5px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
        ctx.fillStyle = `rgba(148, 163, 184, ${labelAlpha})`;
        ctx.textAlign = 'left';
        ctx.fillText(node.label, nx + 9, ny - 2);

        if (proximity > 0.18) {
          ctx.fillStyle = `rgba(56, 189, 248, ${proximity * 0.8})`;
          ctx.fillText(node.code, nx + 9, ny + 8);
        }
      });
      ctx.restore();

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      brandPanel.removeEventListener('pointermove', handlePointerMove);
      brandPanel.removeEventListener('pointerleave', handlePointerLeave);
      brandPanel.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener?.('change', handleMediaChange);
      touchQuery.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="auth-design-grid-container" aria-hidden="true">
      <canvas ref={canvasRef} className="auth-design-grid-canvas" />
    </div>
  );
};

export default DesignIntelligenceGrid;
