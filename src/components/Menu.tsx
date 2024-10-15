import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-grid";
import { Nav } from 'react-bootstrap';
import WriteUs from './WriteUs';
import '../App.css';

export default function Menu({isMobile, isMenuClicked, setIsMenuClicked}) {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');

    const updateMenu = () => {
        if (isMenuClicked) {
            closeMenu();
        }
        else {
            openMenu();
        }
    
        setIsMenuClicked(!isMenuClicked);
      }

    const openMenu = () => {
        setBurgerClass('burger-bar clicked');
        setMenuClass('menu visible');
      }
    
      const closeMenu = () => {
        setBurgerClass('burger-bar unclicked');
        setMenuClass('menu hidden');
      }

      useEffect(() => {
        if (!isMobile) {
            closeMenu();
            setIsMenuClicked(false);
        }
      }, [isMobile]);

  return (
    <>
        <Container fluid>
            <Row>
                <Col>
                    <a href="/">
                        <img src="Freedom_Solution_final_white.png" className="main_header_logo" />
                    </a>
                </Col>
                {!isMobile && (<Col>
                    <Nav className='d-flex justify-content-end' defaultActiveKey="/#about">
                        <Nav.Item>
                            <Nav.Link className='menu__link_2K2' href="/#about">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='menu__link_2K2' href="/#services">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='menu__link_2K2' href="/#process">P2P Deal</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='menu__link_2K2' href="/#termsofuse">Terms of Use</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='menu__link_2K2' href="/#contacts">Contacts</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>)}
                {isMobile && (<Col>
                    <Nav className='d-flex justify-content-end'>
                        <Nav.Item>
                            <div className='burger-menu' onClick={updateMenu}>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                                <div className={burger_class}></div>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Col>)}
            </Row>
        </Container>
        <Container fluid className={menu_class}>
            <Nav className='d-block' defaultActiveKey="/#about">
                <Nav.Link className='menu__link_2K2' href="/#about">About us</Nav.Link>
                <Nav.Link className='menu__link_2K2' href="/#services">Services</Nav.Link>
                <Nav.Link className='menu__link_2K2' href="/#process">P2P Deal</Nav.Link>
                <Nav.Link className='menu__link_2K2' href="/#termsofuse">Terms of Use</Nav.Link>
                <Nav.Link className='menu__link_2K2' href="/#contacts">Contacts</Nav.Link>
                <WriteUs/>
            </Nav>
        </Container>
    </>);
}