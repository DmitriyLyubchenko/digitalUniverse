import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import WriteUs from './components/WriteUs';
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
            {!isMobile && (<Container>
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
            </Container>)}
            <Menu isMobile={isMobile} isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked}/>
            <div className='unlock'>
                <h2 className='text_1k0 ui-heroTitle w-heroTitle ui-heroTitle--light ui-'>
                    <span className='w-text-block w-text-content'>
                        Unlock the power of p2p Crypto Trading with Digital Universe! 🚀
                    </span>
                </h2>
                <p className='text_1k0 ui-subtitle w-subtitle ui-subtitle--light'>
                    <span className='w-text-block w-text-content'>
                        At Freedom Solution, we are dedicated to providing you with the ultimate experience in peer-to-peer (P2P) crypto exchanges. As a reputable leader in the industry, we offer P2P transactions via famous Crypto Exchange platforms. 
                    </span>
                </p>
                <p className='text_1k0 ui-text w-body ui-text--light'>
                    <span className='w-text-block text-ui-brand-color'>
                        Start trading with us and unlock the full potential of the crypto market!
                    </span>
                </p>
            </div>
        </section>

        <section style={{background: "#15151b", padding: "50px"}}>
            <div className='w-section__inner'>
            <Container fluid>
                <Row>
                    <Col>
                        <p class="text_1k0 ui-headingLg w-heading-lg ui-headingLg--light" data-component="text">
                            <span class="w-text-content">
                                <span class="text-ui-brand-color">—</span> Why Do We All Need P2P Cryptochange?</span>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WhyColumn label='$1.35T' text='The global coin market cap right now in 2024.'/>
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

        <section style={{background: "#191B26", padding: "50px"}}>
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
                                <strong>Authorized Expertise:</strong>
                                <br/> Rest assured, we are duly authorized to facilitate exchanges between virtual currencies and fiat, as well as between various virtual currencies. Our track record speaks volumes about our commitment to compliance and regulatory standards.  </span>
                                <br/><br/>
                                <span><strong>Partnered with Leading Platforms:</strong>
                                <br/> Freedom Solution collaborates with renowned Crypto Exchange platforms to bring you unparalleled convenience and accessibility. Benefit from fast, secure, and user-friendly trading experiences on platforms trusted by millions worldwide. 
                            </span>
                        </p>
                    </Col>
                    <Col>
                        <div class="w-picture-wrapper media-wrapper_3VN">
                            <picture class="w-picture ui-picture_2i5" style={{paddingTop:"88.25%"}} data-component="picture" data-images="[]" data-fallbackurl="60df03bb9350b9002126ed78_optimized" data-was-processed="true">
                                <img alt="Illustration" 
                                    data-fallback-url="60df03bb9350b9002126ed78_optimized" 
                                    class="w-picture__image ui-image_3aJ w-ddcc310ab79db79b65faaa0013f426e1" 
                                    src="60df03bb9350b9002126ed78_optimized.webp"/>
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

        <section class="w-blocks-group-wrapper blocks-group-wrapper_2QF">
            <div id="contacts" data-block-name="wireframe-series-11-contacts" data-block-categories="contacts" data-test="block-wrapper" data-anchor="contacts" class="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background">
                <div class="w-block-background background-wrapper_RZ2" aria-hidden="true" data-background--hide="false" data-component="background" data-type="color" data-data-loaded="true">
                    <div class="background_2xT" style={{background:"#fff"}} data-role="placeholder" data-selection-container="true"></div>
                </div>
                <section class="w-section">
                    <div class="w-section__inner">
                        <div class="w-section__content">
                            <div class="w-grid w-grid--row w-grid--gap" data-columns-count="2">
                                <div class="w-grid__inner">
                                    <div class="w-grid__item w-grid__item--top">
                                        <div class="w-grid__item-inner w-grid__item-panel w-text-left-xs w-text-left-sm w-text-left-md w-text-left w-088754deb0dd8820b733e12d9894218e">
                                            <p class="text_1k0 ui-blockTitle w-title" data-component="text"><span class="w-text-block"><span class="w-text-content"><span class="text-ui-brand-color" style={{color:"var(--ui-brand-color)"}}>—</span>Contacts</span></span></p>
                                            <p class="text_1k0 ui-subtitle w-subtitle" data-component="text"><span class="w-text-block"><span class="w-text-content">Feel free to contact us :</span></span></p>
                                            <div class="w-contacts-list-wrapper">
                                                <div data-component="collection" data-collection-mode="collection" class="collection w-2cacdfbafe7cc8cc3b679e8d4af879bc w-contacts-list w-contacts-list--horizontal" data-items-count="3">
                                                    <div class="w-contacts-list__item w-088754deb0dd8820b733e12d9894218e">
                                                        <div class="w-layout__item">
                                                            <p class="w-contacts-list__heading text_1k0 ui-heading w-heading" data-component="text"><span class="w-text-block"><span class="w-text-content">Address</span></span></p>
                                                        </div>
                                                        <div class="w-layout__item">
                                                            <p class="w-contacts-list__body text_1k0 ui-text w-body" data-component="text"><span class="w-text-block"><span class="w-text-content">HOŻA 86/210, 00-682 WARSAW, POLAND</span></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="w-contacts-list__item w-088754deb0dd8820b733e12d9894218e">
                                                        <div class="w-layout__item">
                                                            <h3 class="w-contacts-list__heading text_1k0 ui-heading w-heading" data-component="text"><span class="w-text-block"><span class="w-text-content">Phone</span></span></h3>
                                                        </div>
                                                        <div class="w-layout__item">
                                                            <p class="w-contacts-list__body text_1k0 ui-text w-body" data-component="text"><span class="w-text-block"><span class="w-text-content">+45 2238 8855</span></span></p>
                                                        </div>
                                                    </div>
                                                    <div class="w-contacts-list__item w-088754deb0dd8820b733e12d9894218e">
                                                        <div class="w-layout__item">
                                                            <h3 class="w-contacts-list__heading text_1k0 ui-heading w-heading" data-component="text"><span class="w-text-block" ><span class="w-text-content">Contacts</span></span></h3>
                                                        </div>
                                                        <div class="w-layout__item">
                                                            <p class="w-contacts-list__body text_1k0 ui-text w-body" data-component="text" data-replace="true"><span class="w-text-block" ><span class="w-text-content">freedom.solution.sp@gmail.com</span></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-map-wrapper" style={{height:"244px"}}>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.021891758036!2d21.0038883769585!3d52.224820071985306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecced1c4099a5%3A0x3655b3605e0b349f!2zSG_FvGEgODYvQXB0L1Jvb20gMjEwLCAwMC02ODIgV2Fyc3phd2EsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sua!4v1713318777071!5m2!1sru!2sua" width="100%" height="100%" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-grid__item w-grid__item--top">
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
                                                <div class="btn" onclick="formSend(this)">Send message</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default App
