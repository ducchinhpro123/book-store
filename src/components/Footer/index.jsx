/* import styles from "./Footer.module.scss";
import classNameNames from "classNamenames/bind";

export default function Footer() {
  const cx = classNameNames.bind(styles); // Bind the styles object to classNameNames
  return <div classNameName={cx("test")}>Footer</div>;
}
 */
import SubscribeNewsletter from "../../components/SubscribeNewsletter"
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiMap, BiPhone} from "react-icons/bi";
import {FaFacebook} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export default function Footer() {
  return (
      <div id={"Contact"}>

        <div className="container-fluid bg-white mt-3">
          <SubscribeNewsletter/>
          <footer>
            <div className="row">
              <div className="col-sm-6 col-md-4 footer-navigation">
                <h3><a href="#">Book<span> Store</span></a></h3>
                {/*<img src="https://demo.joomlabuff.com/bookstore/images/logo/logo_footer.png" alt=""
                     style={{width: '120px', height: '120px'}}/>*/}
                <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a
                    href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a
                    href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                <p className="company-name">Book Store © 2023 </p>
              </div>
              <div className="col-sm-6 col-md-4 footer-contacts">
                <div>
                  <BiMap className="fa fa-map-marker footer-contacts-icon"/>
                  <p>
                    <span className="new-line-span">21 Revolution Street</span>
                    Paris, France
                  </p>
                </div>
                <div>
                  <BiPhone className="fa fa-map-marker footer-contacts-icon"/>
                  <p className="footer-center-info email text-start"> +1 555 123456</p>
                </div>
                <div>
                  <MdEmail className="fa fa-map-marker footer-contacts-icon"/>
                  <p><a href="#" target="_blank">support@company.com</a></p>
                </div>
              </div>
              <div className="col-md-4 footer-about">
                <h4>About the company</h4>
                <p> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor
                  lacus vehicula sit amet. </p>
                <div className="social-links social-icons">
                  <a href="#">
                    <BiLogoGithub className={'w-8 h-8'}/>
                  </a>
                  <a href="#">
                    <BiLogoTwitter className={'w-8 h-8'}/>
                  </a>
                  <a href="#">
                    <BiLogoLinkedin className={'w-8 h-8'}/>
                  </a>
                  <a href="#">
                    <FaFacebook className={'w-8 h-8'}/>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
  );
}
