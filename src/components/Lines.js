import React, { useRef, useEffect, useState } from "react";

const Lines = () => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lines, setLines] = useState([]);

  const drawLines = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    lines.forEach(({ startX, startY, length, numLines }) => {
      for (let i = 0; i < numLines; i++) {
        const y = Math.round(startY + i * 5);
        ctx.beginPath();
        ctx.moveTo(Math.round(startX), y);
        const variation = Math.random() * 100;
        ctx.lineTo(Math.round(startX + length + variation), y);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    });
  };

  useEffect(() => {
    const generateLines = () => {
      const random = Math.random() * 10 + 1;

      return [
        {
          startX: 100,
          startY: 130,
          length: random + 800,
          numLines: 5,
        },
        {
          startX: 180,
          startY: 155,
          length: random + 500,
          numLines: 3,
        },
        {
          startX: 60,
          startY: 170,
          length: random + 600,
          numLines: 5,
        },
        {
          startX: 90,
          startY: 195,
          length: random + 400,
          numLines: 5,
        },
        {
          startX: 200,
          startY: 220,
          length: random + 500,
          numLines: 2,
        },
        {
          startX: 0,
          startY: 230,
          length: random + 500,
          numLines: 1,
        },
        {
          startX: 55,
          startY: 235,
          length: random + 800,
          numLines: 5,
        },
      ];
    };

    setLines(generateLines());

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const interval = setInterval(() => {
      if (isHovered) {
        setLines(generateLines());
        drawLines(ctx);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawLines(ctx);
  });

  return (
    <div
      className="canvas-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} width={1000} height={400} />
    </div>
  );
};

export default Lines;
