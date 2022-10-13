import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.svg";
import appstore from "../../assets/app-store.svg";
import googleplay from "../../assets/google-play.svg";
import androidApk from "../../assets/android-apk-f.svg";

// Social Icons
import socialTwitter from "../../assets/social/twitter.svg";
import socialTelegram from "../../assets/social/telegram.svg";
import socialDiscord from "../../assets/social/discord.svg";
import socialYoutube from "../../assets/social/youtube.svg";
import socialInstagram from "../../assets/social/instagram.svg";
import socialMedium from "../../assets/social/medium.svg";

const Footer = () => {
  const data = {
    menu: [
      {
        name: "Privacy policy",
        url: "/privacy-policy",
      },
      {
        name: "Terms of service",
        url: "/terms-of-service",
      },
      {
        name: "Documentation",
        url: "/documentation",
      },
      {
        name: "Request form",
        url: "/request-form",
      },
      {
        name: "Disclaimer",
        url: "/disclaimer",
      },
      {
        name: "Support",
        url: "/support",
      },
      {
        name: "Audit",
        url: "/audit",
      },
    ],
    social: [
      {
        name: "Twitter",
        icon: socialTwitter,
        url: "https://twitter.com/BlitheWallet?t=SLPAHTN62XbHX5CWSjk8BQ&s=09",
      },
      {
        name: "Telegram",
        icon: socialTelegram,
        url: "https://t.me/blithewallet",
      },
      {
        name: "Discord",
        icon: socialDiscord,
        url: "https://discord.gg/RFcu94Nu",
      },
      {
        name: "Youtube",
        icon: socialYoutube,
        url: "https://youtube.com/channel/UCIEZNs84cnGGwv34wYJQfEw",
      },
      {
        name: "Instagram",
        icon: socialInstagram,
        url: "https://www.instagram.com/blithewallet",
      },
      {
        name: "Medium",
        icon: socialMedium,
        url: "https://medium.com/@blithewallet",
      },
    ],
  };
  return (
    <footer className="footer bg-primary text-white text-opacity-75 pt-6 pb-5">
      <Container>
        <Row className="mb-5 gy-4">
          <Col>
            <div className="footer-widget" style={{ maxWidth: "320px" }}>
              <div className="mb-3 mb-lg-4">
                <img src={logo} />
              </div>
              <div className="fs-md">
                First non- custodial multi chain Wallet to offer NFC Payment,
                stake and buy crypto assets..No KYC needed!
              </div>
            </div>
          </Col>
          <Col md="auto">
            <div className="footer-widget">
              <h5 className="text-white fnjHN fw-light fs-md">
                Get the app <span>Coming soon</span>
              </h5>

              <div className="d-flex ndhdnImf flex-md-column gap-3">
                <div>
                  <img src={googleplay} alt="App Store" />
                </div>
                <div>
                  <img src={androidApk} alt="Android Apk" />
                </div>
                <div>
                  <img src={appstore} alt="Google Play Store" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {data && data.menu && (
              <div className="footer-widget">
                <ul className="list-inline d-flex flex-wrap gap-2 gap-lg-4">
                  {data.menu.map((item, i) => (
                    <li key={i} className="list-inline-item">
                      <Link to={item.url} className="link-light">
                        {item.name}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="my-4" />
          </Col>
        </Row>
        <Row className="gy-4 flex-md-row-reverse">
          {data && data.social && (
            <Col md="auto">
              <ul className="list-inline mb-0 d-inline-flex gap-2 gap-lg-3">
                {data.social.map((item, i) => (
                  <li key={i} className="list-inline-item">
                    <a target="_blank" href={item.url}>
                      <img src={item.icon} alt={item.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          )}
          <Col>
            <div className="fw-light">
              © 2022 Blithe Inc. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
