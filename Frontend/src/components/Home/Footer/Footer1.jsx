import React from "react";
import BizClass from "./Footer.module.scss";

const Footer1 = () => {
  return (
    <div className={BizClass.Section_Footer}>
      <div className={BizClass.BackGround_Img}>
        <img
          src="	https://sherbazaar.co/wp-content/uploads/2022/06/eimap-1.png"
          alt=""
        />
      </div>
      <div className={BizClass.Footer}>
        <div className={BizClass.Links}>
          <span className={BizClass.Footera}>
            © 2023 Copyright – Sher Bazaar
          </span>
          <a className={BizClass.Footera}>Cash & Withdrawal Policy</a>
          <a className={BizClass.Footera}>Standard Terms & Conditions.</a>
          <a className={BizClass.Footera}>Fair Play Policy</a>
          <a className={BizClass.Footera}>TDS Policy</a>
          <a className={BizClass.Footera}>Privacy Policy</a>
        </div>
        <p>
          Disclaimer: The games involve financial risk and may result into
          dependence. Please read all the terms and conditions carefully prior
          using the Sher Bazaar App. Indulge at your own personal risk. This app
          is not regulated by SEBI. Hence, benefit of Investor protection under
          SEBI / Exchange(s) Jurisdiction, Exchange dispute resolution mechanism
          and Investor greviance redressal mechanism administered by Exchange(s)
          will not be available with the Users.
        </p>
      </div>
    </div>
  );
};

export default Footer1;
