import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon16 = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className="cs-16-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-16.jpg"
          })`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-16-header space-pt--30 space-pb--30">
          <div className="container">
            <div className="row">
              <div className="col-4">
                {/* logo */}
                <div className="cs-16-logo">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo/logo-16.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-16-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="cs-16-content__subtitle space-mb--10">
                  Stay Tuned
                </h3>
                <h2 className="cs-16-content__title">
                  Site is under <br />
                  maintenance
                </h2>
                {/* countdown */}
                <div className="cs-16-countdown space-mt--50">
                  <Countdown
                    date={new Date("November 07, 2024 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-16-subscription-wrapper space-mt--50">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-16-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* copyright */}
                <div className="cs-16-copyright">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://hasthemes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HasThemes
                  </a>
                  , all rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon16;
