import React, { useRef, useEffect, useState } from "react";
import lineData from "../data/lineData";

const Lines = () => {
  const canvasRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setLines(lineData.map((line) => ({ ...line, isVisible: false })));
  }, [setLines]);

  useEffect(() => {
    const initialLoadInterval = startInitialLoadInterval();
    const hideRandomLineInterval = startHideRandomLineInterval();

    return () => {
      clearInterval(initialLoadInterval);
      clearInterval(hideRandomLineInterval);
    };
  }, [lines, visibleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    drawLines(ctx);
  }, [lines, visibleCount]);

  const startInitialLoadInterval = () => {
    return setInterval(() => {
      setVisibleCount((prevCount) => {
        if (prevCount < lines.length) {
          const updatedLines = [...lines];
          updatedLines[prevCount].isVisible = true;
          setLines(updatedLines);
          return prevCount + 1;
        } else {
          return prevCount;
        }
      });
    }, 25 - 2 * visibleCount);
  };

  const startHideRandomLineInterval = () => {
    return setInterval(() => {
      setLines((prevLines) => {
        const updatedLines = prevLines.map((line) => ({
          ...line,
          isVisible: true,
        }));

        const randomIndex = Math.floor(Math.random() * updatedLines.length);
        updatedLines[randomIndex].isVisible = false;

        return updatedLines;
      });
    }, 5000);
  };

  const drawLines = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    lines
      .slice(0, visibleCount)
      .forEach(({ startX, startY, length, isVisible }) => {
        if (isVisible) {
          const y = Math.round(startY);
          ctx.beginPath();
          ctx.moveTo(startX, y);
          ctx.lineTo(Math.round(startX + length), y);
          ctx.strokeStyle = "white";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });
  };

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={1000} height={400} />
    </div>
  );
};

export default Lines;
