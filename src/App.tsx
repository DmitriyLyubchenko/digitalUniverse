import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Menu from './components/Menu';
import './App.css';
import './themes/core-theme.css';
import './themes/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/fira-sans";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/400-italic.css";
import WhyColumn from './components/WhyColumn';
import ServiceColumn from './components/ServiceColumn';
import StagesSection from './components/StagesSection';
import Footer from './components/Footer';

const MAX_MOBILE_WIDTH = 1000;

function App() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MAX_MOBILE_WIDTH);

    useEffect(() => {
        const handleResize = () => {
            const isMobileWindow = window.innerWidth <= MAX_MOBILE_WIDTH;
            setIsMobile(isMobileWindow);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
        <section className={(isMenuClicked && isMobile) ? 'background-wrapper dark' : 'background-wrapper'}>
            {/* {!isMobile && (<Container>
                <Row>
                    <Col/>
                    <Col/>
                    <Col>
                        <WriteUs/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className='separator'/>
                    </Col>
                </Row>
            </Container>)} */}
            <Menu isMobile={isMobile} isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>
            <div className='unlock'>
                <h1 className='text_1k0 ui-heroTitle w-heroTitle ui-heroTitle--light ui-' style={{margin: "5%"}}>
                    <span className='w-text-block w-text-content'>
                        Unlock the power of p2p Crypto Trading with<br/>Digital Universe!<br/>🚀
                    </span>
                </h1>
                <p className='text_1k0 ui-subtitle w-subtitle ui-subtitle--light'>
                    <span className='w-text-block w-text-content'>
                    At Digital Universe, we are dedicated to providing you with the ultimate experience in peer-to-peer (P2P) crypto exchanges. As a reputable leader in the industry, we offer P2P transactions via famous Crypto Exchange platforms. 
                    </span>
                </p>
                <p className='text_1k0 ui-text w-body ui-text--light'>
                    <h4 className='w-text-block text-ui-brand-color'>
                        Start trading with us and unlock the full potential of the crypto market!
                    </h4>
                </p>
            </div>
        </section>

        <section style={{background: "#15151b", padding: "4%"}}>
            <div className='w-section__inner'>
            <Container fluid>
                <Row className="mb-5">
                    <Col>
                        <p class="text_1k0 ui-headingLg w-heading-lg ui-headingLg--light" data-component="text">
                            <span class="w-text-content">
                                <span class="text-ui-brand-color">—</span> Why Do We All Need P2P Cryptochange?</span>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WhyColumn label='$1.37T' text='The global coin market cap right now in 2024.'/>
                    </Col>
                    <Col>
                        <WhyColumn label='100' text='Million active crypto users over the globe.'/>
                    </Col>
                    <Col>
                        <WhyColumn label='0%' text='Fee for any kinds of crypto and fiat exchanges.'/>
                    </Col>
                    <Col>
                        <WhyColumn label='x20' text='Faster transactions with Cryptochange.'/>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>

        <section style={{background: "black", padding: "50px"}}>
            <div className='w-section__inner' id='about'>
            <Container fluid>
                <Row>
                    <Col>
                        <h2 class="text_1k0 ui-blockTitle w-title ui-blockTitle--light" data-component="text">
                            <span class="w-text-content">
                                <span class="text-ui-brand-color">—</span> Why Choose Us for P2P Crypto Trading?</span>
                        </h2>
                        <p class="text_1k0 ui-text w-body ui-text--light" data-component="text">
                            <span>
                                <strong className="text-ui-brand-color">Authorized Expertise:</strong>
                                <br/> Rest assured, we are duly authorized to facilitate exchanges between virtual currencies and fiat, as well as between various virtual currencies. Our track record speaks volumes about our commitment to compliance and regulatory standards.  </span>
                                <br/><br/>
                            <span>
                                <strong className="text-ui-brand-color">Partnered with Leading Platforms:</strong>
                                <br/> Digitail Universe collaborates with renowned Crypto Exchange platforms to bring you unparalleled convenience and accessibility. Benefit from fast, secure, and user-friendly trading experiences on platforms trusted by millions worldwide. 
                            </span>
                        </p>
                    </Col>
                    <Col>
                        <div class="w-picture-wrapper media-wrapper_3VN">
                            <picture class="w-picture ui-picture_2i5" style={{paddingTop:"88.25%"}} data-component="picture" data-images="[]" data-fallbackurl="60df03bb9350b9002126ed78_optimized" data-was-processed="true">
                                <img alt="Illustration" 
                                    data-fallback-url="60df03bb9350b9002126ed78_optimized" 
                                    class="w-picture__image ui-image_3aJ w-ddcc310ab79db79b65faaa0013f426e1" 
                                    src="https://i.pinimg.com/564x/3c/cd/31/3ccd311412316fef65e43b19aa611fb8.jpg"/>
                            </picture>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
        <section style={{background: "#15151b", padding: "50px"}}>
            <div className='w-section__inner' id='services'>
                <Container fluid>
                    <Row>
                        <Col>
                            <ServiceColumn 
                                icon='//res2.weblium.site/res/60c8bda3f1911800212f169f/60c99b9e8a8ec60022de4ee6'
                                label='Real-Time Transactions'
                                text='Experience the thrill of instant transactions with our cutting-edge P2P trading platform. Say goodbye to waiting times and seize opportunities as they arise.'/>
                        </Col>
                        <Col>
                            <ServiceColumn 
                                icon='//res2.weblium.site/res/60c8bda3f1911800212f169f/60c99b9e7afe1700211788f8'
                                label='Top-Notch Security'
                                text='Your safety is our priority. Partnering with established Crypto Exchange platforms means your assets are safeguarded by industry-leading security protocols, giving you peace of mind with every trade.'/>
                        </Col>
                        <Col>
                            <ServiceColumn 
                                icon='//res2.weblium.site/res/60c8bda3f1911800212f169f/60c99b9eb2468100226cf80f'
                                label='Intuitive Interface'
                                text="Whether you're a seasoned trader or just starting out, user-centric interface of Crypto Exchange platforms is designed to cater to your needs."/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

        <StagesSection/>

        <section class="w-blocks-group-wrapper blocks-group-wrapper_2QF" style={{backgroundImage: "url(tonenisation.png)"}}>
            <div id="contacts">
                <Container fluid>
                    <Row style={{padding: "3% 0"}}>
                        <Col>
                            <img alt="Illustration" 
                                data-fallback-url="60df03bb9350b9002126ed78_optimized" 
                                class="w-picture__image ui-image_3aJ w-ddcc310ab79db79b65faaa0013f426e1" 
                                src="1600w-YyhnXDO96s8.png"/>
                        </Col>
                        <Col>
                            <div class="form" id="form">
                                <div class="form-box thank">
                                    <h2 class="text_1k0 ui-blockTitle w-title">Thank you!</h2>
                                    <h3 class="w-contacts-list__body text_1k0 ui-text w-body">We will contact you soon</h3>
                                </div>
                                <div class="form-box">
                                    <input type="text" id="name-form" placeholder="Enter your full name" class="ui-text"/>
                                    <input type="text" id="phone-form" placeholder="Enter your phone number" class="ui-text"/>
                                    <input type="text" id="email-form" placeholder="Enter your email" class="ui-text"/>
                                    <textarea id="message-form" name="story" rows="5" placeholder="Type your message" class="ui-text"/>
                                    <div class="btn form-button" onclick="formSend(this)">Send message</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default App
