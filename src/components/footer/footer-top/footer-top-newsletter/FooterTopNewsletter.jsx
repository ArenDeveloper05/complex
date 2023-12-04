import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const FooterTopNewsletter = () => {
  const [footerInputVal, setFooterInputVal] = useState("");

  const handleFooterInputOnChange = (evt) => {
    setFooterInputVal(evt.target.value);
  };

  return (
    <div className="footer-inner-top-newsletter">
      <p className="footer-inner-top-newsletter-title">NEWSLETTER</p>

      <form>
        <input
          type="text"
          placeholder="Email Address"
          value={footerInputVal}
          onChange={handleFooterInputOnChange}
        />

        <button>
          <HiOutlineMail />
        </button>
      </form>

      <p className="footer-inner-top-newsletter-txt">
        Sign up for our latest news & articles. We won’t give you spam mails.
      </p>
    </div>
  );
};

export default FooterTopNewsletter;
