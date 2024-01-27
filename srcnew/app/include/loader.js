'use client'
import { useEffect, useState } from 'react';
export default function Loader() {
    return (
        <>
           <div className="text-center l-loading">
                <svg className="circlespinner" viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx={25}
                    cy={25}
                    r={20}
                    fill="none"
                    strokeWidth={5}
                    />
                </svg>
                <h1
                    style={{
                    fontSize: 14,
                    color: "#506070",
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600
                    }}
                >
                    Please wait...Verifying AADHAR (UIDAI) Details...
                    <br /> Redirecting in <span id="countdown"> <Countdown countingInSeconds={5} /></span> seconds.
                </h1>
                </div>


      </>
          )
  }

  function formatTime(minutes, seconds) {
    const formattedMinutes = Math.floor(minutes).toString().padStart(2, '0');
    const formattedSeconds = Math.floor(seconds).toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  function Countdown({ countingInSeconds }) {
    const [timeRemaining, setTimeRemaining] = useState(formatTime(countingInSeconds / 60, countingInSeconds % 60));
  
    useEffect(() => {
      const targetTime = new Date();
      targetTime.setSeconds(targetTime.getSeconds() + countingInSeconds);
  
      const calculateRemainingTime = () => {
        const currentTime = new Date();
        const timeDifference = targetTime - currentTime;
  
        if (timeDifference > 0) {
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          setTimeRemaining(formatTime(minutes, seconds));
          setTimeout(calculateRemainingTime, 1000);
        } else {
          setTimeRemaining('00:00');
        }
      };
  
      calculateRemainingTime();
    }, [countingInSeconds]);
  
    return <> <span id="timeCountDown">{timeRemaining}</span> </>;
  }