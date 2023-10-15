import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${footerStyles.footer} ${footerStyles.set_bg}`}
      data-setbg="img/footer-bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={footerStyles.logo__carousel}>
              <div className={footerStyles.logo__carousel__item}>
                <a href="#!">
                  <img src="img/logo/logo-1.png" alt="" />
                </a>
              </div>
              <div className={footerStyles.logo__carousel__item}>
                <a href="#!">
                  <img src="img/logo/logo-2.png" alt="" />
                </a>
              </div>
              <div className={footerStyles.logo__carousel__item}>
                <a href="#!">
                  <img src="img/logo/logo-3.png" alt="" />
                </a>
              </div>
              <div className={footerStyles.logo__carousel__item}>
                <a href="#!">
                  <img src="img/logo/logo-4.png" alt="" />
                </a>
              </div>
              <div className={footerStyles.logo__carousel__item}>
                <a href="#!">
                  <img src="img/logo/logo-5.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={footerStyles.footer__content}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={footerStyles.footer__about}>
                <div className={footerStyles.footer__logo}>
                  <a href="#!">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <h4>(123) 456-78-91096</h4>
                <ul>
                  <li>Ernser Vista Suite 437, NY</li>
                  <li>Info.colorlib@gmail.com</li>
                </ul>
                <div className={footerStyles.footer__social}>
                  <a href="#!">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#!">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#!">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#!">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
              <div className={footerStyles.footer__widget}>
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    <a href="#!">Home</a>
                  </li>
                  <li>
                    <a href="#!">Booking</a>
                  </li>
                  <li>
                    <a href="#!">About Us</a>
                  </li>
                  <li>
                    <a href="#!">Review</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#!">Services</a>
                  </li>
                  <li>
                    <a href="#!">Our Room</a>
                  </li>
                  <li>
                    <a href="#!">Restaurants</a>
                  </li>
                  <li>
                    <a href="#!">Payments</a>
                  </li>
                  <li>
                    <a href="#!">Events</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-12">
              <div className={footerStyles.footer__newslatter}>
                <h4>Subscribe our newlatester</h4>
                <form action="#">
                  <input type="text" placeholder="Your E-mail Address" />
                  <button type="submit">Subscribe</button>
                </form>
                <div className={footerStyles.footer__newslatter__find}>
                  <h5>Find Us:</h5>
                  <div className={footerStyles.footer__newslatter__find__links}>
                    <a href="#!">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#!">
                      <i className="fa fa-map-o"></i>
                    </a>
                    <a href="#!">
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a href="#!">
                      <i className="fa fa-forumbee"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={footerStyles.footer__copyright}>
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className={footerStyles.footer__copyright__text}>
                <p>© Copyright 2019 Hotell Hiroto - Theme by Colorlib.</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <ul className={footerStyles.footer__copyright__links}>
                <li>
                  <a href="#!">Terms Of Use</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
