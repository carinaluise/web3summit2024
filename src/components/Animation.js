import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "gatsby";

const Animation = ({ homeAnimation, notAnimated, middle, reverse }) => {
  // References
  const wrapper = useRef(null);
  const dot = useRef(null);

  // State hooks
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [isAnimationReady, setAnimationReady] = useState(false);
  const [isAnimationStarted, setAnimationStarted] = useState(false);
  const [isAnimationFinished, setAnimationFinished] = useState(false);

  // const [isMoveDotStarted, setMoveDotStarted] = useState(false);

  const [blocks, setBlocks] = useState([]);

  const [xAmount, setXAmount] = useState();
  const [yAmount, setYAmount] = useState();

  const [dotX, setDotX] = useState();
  const [dotY, setDotY] = useState();

  let dotInterval;

  // Wrapper variables
  let wrapperWidth;
  let wrapperHeight;

  let roundedWrapperWidth;
  let roundedWrapperHeight;

  // Countdown Variables
  let animationCountdown;
  let animationCountdownTimer;

  if (homeAnimation) {
    animationCountdown = 1500;
  } else {
    animationCountdown = 0;
  }

  //Animation initiation function
  function animationInit() {
    if (xAmount !== undefined && yAmount !== undefined && !isAnimationReady) {
      for (let i = 0; i < yAmount; i++) {
        // Generate three random percentages that add up to one row of squares
        let random1 = Math.floor(Math.random() * xAmount);
        let random2 = Math.floor(Math.random() * (xAmount - random1));
        let random3 = xAmount - (random1 + random2);

        let random1perc = (random1 / xAmount) * 100;
        let random2perc = (random2 / xAmount) * 100;
        let random3perc = (random3 / xAmount) * 100;

        if (homeAnimation) {
          // use percentages to generate three blocks with a width of the random percentage (to eventually hide random areas of the wrapper)
          setBlocks((blocks) => [
            ...blocks,
            { width: random1perc, hidden: true },
            { width: random2perc, hidden: true },
            { width: random3perc, hidden: true },
          ]);
        } else {
          setBlocks((blocks) => [
            ...blocks,
            { width: random1perc, hidden: false },
            { width: random2perc, hidden: false },
            { width: random3perc, hidden: false },
          ]);
        }
        setAnimationReady(true);
      }
    }
  }

  function skipCountdown() {
    clearTimeout(animationCountdownTimer);
    runAnimation();
  }

  function runAnimation() {
    if (!isAnimationStarted && !isAnimationFinished) {
      setAnimationStarted(true);
    }

    if (blocks !== undefined) {
      // Iterate through blocks array
      for (let i = 0; i < blocks.length; i++) {
        setTimeout(() => {
          // Initialise an index reference array
          let availableIndexes = [];
          for (let i = 0; i < blocks.length; i++) {
            if (
              (homeAnimation && blocks[i].hidden) ||
              (!homeAnimation && !blocks[i].hidden)
            ) {
              // Push available indexes from block array into reference array
              availableIndexes.push(i);
            }
          }
          // Pick a random block from available indexes
          let randomBlock =
            availableIndexes[
              Math.floor(Math.random() * (availableIndexes.length / 4))
            ];

          let newBlocks = [...blocks];

          if (
            homeAnimation &&
            newBlocks !== undefined &&
            randomBlock !== undefined
          ) {
            // Make block visible to hide squares on homepage animation wrapper
            newBlocks[randomBlock].hidden = false;
            setBlocks(newBlocks);
          }

          if (
            !homeAnimation &&
            newBlocks !== undefined &&
            randomBlock !== undefined
          ) {
            // Hide blocks to make squares on animation wrapper visible
            newBlocks[randomBlock].hidden = true;
            setBlocks(newBlocks);
          }
          // When all blocks have been animated set animation to finished
          if (
            (homeAnimation && blocks.every((block) => !block.hidden)) ||
            (!homeAnimation && blocks.every((block) => block.hidden))
          ) {
            setAnimationFinished(true);
            setBlocks([]);
          }
        }, i * 10 + 200);
      }
    }
  }

  // Moving dot function
  function moveDot() {
    setDotY(Math.floor(Math.random() * yAmount) * 21);
    setDotX(Math.floor(Math.random() * xAmount) * 21);

    dotInterval = setInterval(() => {
      setDotY(Math.floor(Math.random() * yAmount) * 21);
      setDotX(Math.floor(Math.random() * xAmount) * 21);
    }, 2000);
  }

  //Wrapper width and height calculation function
  function onResize() {
    if (wrapper.current !== null) {
      wrapperWidth = wrapper.current.offsetWidth;
      wrapperHeight = window.innerHeight - 30;

      roundedWrapperWidth = Math.floor(wrapperWidth / 21) * 21 - 1;
      window.innerWidth <= 999 &&
        (roundedWrapperWidth = Math.floor(wrapperWidth / 21) * 21 + 7);
      roundedWrapperHeight = Math.floor(wrapperHeight / 21) * 21;

      setXAmount(roundedWrapperWidth / 21);
      setYAmount(roundedWrapperHeight / 21);

      setWidth(roundedWrapperWidth);
      setHeight(roundedWrapperHeight);
    }
  }

  //Animation startup and finish instructions
  useEffect(() => {
    if (!notAnimated) {
      animationInit();
    }
    if (
      isAnimationReady &&
      !isAnimationStarted &&
      !isAnimationFinished &&
      !notAnimated
    ) {
      animationCountdownTimer = setTimeout(() => {
        runAnimation();
      }, animationCountdown);
    }
    if (isAnimationFinished || (notAnimated && middle)) {
      moveDot();
    }
    return () => {
      clearInterval(dotInterval);
      clearTimeout(animationCountdownTimer);
    };
  }, [isAnimationReady, isAnimationFinished, xAmount, yAmount]);

  //Resizing wrappers widths and heights on page load/ window size change
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  });

  //Standard Animation
  if (!homeAnimation && !notAnimated) {
    return (
      <div className="animation__wrapper" ref={wrapper}>
        <div
          className={`animation animation--fixed ${
            isAnimationReady && "animation--ready"
          } ${isAnimationFinished && "animation--finished"}`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <div
            ref={dot}
            className={`animation__dot ${
              isAnimationFinished && "animation__dot--visible"
            }`}
            style={{ left: `${dotX}px`, top: `${dotY}px` }}
          ></div>
          {!isAnimationFinished &&
            blocks.map((data, i) => {
              return (
                <div
                  key={i}
                  className={
                    data.hidden
                      ? "animation__block animation__block--hidden"
                      : "animation__block"
                  }
                  style={{ width: `${data.width}%` }}
                ></div>
              );
            })}
        </div>
      </div>
    );
  }
  // Homepage Animation
  else {
    return (
      <div
        className={`${reverse ? "animation__wrapper--reverse" : ""} ${
          middle ? "animation__wrapper--middle" : ""
        } animation__wrapper`}
        ref={wrapper}
      >
        {
          // Homeanimation
          homeAnimation && !isAnimationFinished && (
            <div
              onClick={skipCountdown}
              className={`animation animation--home animation--click ${
                isAnimationReady && "animation--ready"
              }`}
              style={{ width: `${width}px`, height: `${height}px` }}
              aria-hidden="true"
            >
              {blocks.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={
                      data.hidden
                        ? "animation__block animation__block--hidden"
                        : "animation__block"
                    }
                    style={{ width: `${data.width}%` }}
                  ></div>
                );
              })}
            </div>
          )
        }
        {
          // Static animation wrapper's on homepage
          notAnimated && (
            <div
              className={`animation animation--home animation--ready animation--finished`}
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              {middle && (
                <div
                  ref={dot}
                  className={"animation__dot animation__dot--visible"}
                  style={{ left: `${dotX}px`, top: `${dotY}px` }}
                ></div>
              )}
            </div>
          )
        }
        {
          // Final View Of Homepage navigation wrapper
          homeAnimation && isAnimationFinished && (
            <>
              <Header />
              <footer>
                <Link to="/imprint/">Imprint</Link>
              </footer>
            </>
          )
        }
      </div>
    );
  }
};

export default Animation;
