import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon02 = () => {
	return (
		<Fragment>
			<Helmet>
				<link
					href='https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
					rel='stylesheet'
				/>
			</Helmet>

			<div
				className='cs-02-page-wrapper h-100 bg-img d-flex flex-column justify-content-between'
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL +
						"/assets/img/backgrounds/coming-soon-02.jpg"
					})`,
				}}
			>
				{/*====================  header ====================*/}
				<header className='cs-02-header space-pt--30 space-pb--30'>
					<div className='container'>
						<div className='row'>
							<div className='col-4'>
								{/* logo */}
								<div className='cs-02-logo'>
									<Link to={process.env.PUBLIC_URL + "/"}>
										<img
											style={{ width: 100 }}
											src={
												process.env.PUBLIC_URL +
												"/assets/img/logo/logo--rgb.png"
											}
											className='img-fluid'
											alt=''
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/*====================  End of header  ====================*/}
				{/*====================  content ====================*/}
				<div className='cs-02-content'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8'>
								<h2 className='cs-02-content__title'>
									We are building <br /> something awesome!!
								</h2>
								{/* countdown */}
								<div className='cs-02-countdown space-mt--50'>
									<Countdown
										date={new Date("April 02, 2024 12:12:00")}
										renderer={Renderer}
									/>
								</div>
								<div className='cs-02-subscription-wrapper space-mt--50'>
									<p style={{ color: "white", fontSize: "24px" }}>
										Email: info@soft49n.io
									</p>
									<p style={{ color: "white", fontSize: "24px" }}>
										Phone: 1 (888) 416-3919
									</p>
									{/* subscribe email */}
									{/* <SubscribeEmail mailchimpUrl='https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef' /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*====================  End of content  ====================*/}
				{/*====================  footer ====================*/}
				<footer className='cs-02-footer space-pt--25 space-pb--25'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-12 col-md-6'>
								{/* social icons */}
								{/* <ul className='cs-02-social-icons d-flex align-items-center justify-content-center justify-content-md-start'>
									<li>
										<a
											href='http://www.facebook.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ReactSVG
												src={
													process.env.PUBLIC_URL +
													"/assets/img/icons/facebook-02.svg"
												}
											/>
										</a>
									</li>
									<li>
										<a
											href='http://www.twitter.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ReactSVG
												src={
													process.env.PUBLIC_URL +
													"/assets/img/icons/twitter-02.svg"
												}
											/>
										</a>
									</li>
									<li>
										<a
											href='http://www.instagram.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ReactSVG
												src={
													process.env.PUBLIC_URL +
													"/assets/img/icons/instagram-02.svg"
												}
											/>
										</a>
									</li>
									<li>
										<a
											href='http://www.linkedin.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ReactSVG
												src={
													process.env.PUBLIC_URL +
													"/assets/img/icons/linkedin-02.svg"
												}
											/>
										</a>
									</li>
									<li>
										<a
											href='http://www.youtube.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ReactSVG
												src={
													process.env.PUBLIC_URL +
													"/assets/img/icons/youtube-02.svg"
												}
											/>
										</a>
									</li>
								</ul> */}
							</div>
							{/* <div className='col-12 col-md-6'>
								<div className='cs-02-copyright text-right'>
									&copy; {new Date().getFullYear() + " "}
									<a
										href='https://hasthemes.com/'
										target='_blank'
										rel='noopener noreferrer'
									>
										HasThemes
									</a>
									, all rights reserved
								</div>
							</div> */}
						</div>
					</div>
				</footer>
				{/*====================  End of footer  ====================*/}
			</div>
		</Fragment>
	);
};

export default ComingSoon02;
