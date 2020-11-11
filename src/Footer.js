import React  from "react";

import './Form.css';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function Footer() {
      return (
        <footer className="footer-section">
          <div className="container">
            <div className="footer-text">
              <div className="row">
                <div className="col-lg-4">
                  <div className="ft-about">
                    <div className="logo">
                      <img src="logo.png" alt="" />
                    </div>
                    <p>MiKuFu đem đến tiếng cười <br />sảng khoái cho mọi người</p>
                    <div className="fa-social">
                        <a href="https://www.facebook.com/camnhung13"><i class="fa fa-facebook" /></a>
                      <a href="https://twitter.com/nanahah53755510"><i className="fa fa-twitter" /></a>
                      <a href="https://www.instagram.com/khongphaithinhdau/"><i className="fa fa-instagram" /></a>
                      <a href="https://www.youtube.com/channel/UCPRGrZCscuRJT_tUI2NTfzw/featured"><i className="fa fa-youtube-play" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="ft-contact">
                    <h6>Liên hệ</h6>
                    <ul>
                      <li>Công ty thương mại MiKuFu</li>
                      <li>kamsamita.korean@gmail.com</li>
                      <li>Số 8 (tầng 2) Tôn Thất Thuyết, Quận Nam Từ Liêm, Thành phố Hà Nội</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="ft-news">
                    <h6>Thông báo</h6>
                    <p>Nhận tin từ chúng mình</p>
                    <form action="#" className="fn-form">
                      <input type="text" placeholder="Email" />
                      <button type="submit"><i className="fa fa-send" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;