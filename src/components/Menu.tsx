import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import WriteUs from './WriteUs';
import '../App.css';

interface IMenuProps {
    isMobile: boolean, 
    isMenuClicked: boolean, 
    setIsMenuClicked: Dispatch<SetStateAction<boolean>>
}

export default function Menu(props: IMenuProps) {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');

    const updateMenu = () => {
        if (props.isMenuClicked) {
            closeMenu();
        }
        else {
            openMenu();
        }
    
        props.setIsMenuClicked(!props.isMenuClicked);
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
        if (!props.isMobile) {
            closeMenu();
            props.setIsMenuClicked(false);
        }
      }, [props]);

  return (
    <>
        <Container fluid>
            <Row style={{marginTop: "40px", marginRight: "10px"}}>
                <Col lg={4}>
                    {/* <a href="/">
                        <img src="Freedom_Solution_final_white.png" className="main_header_logo" />
                    </a> */}
                    {/* <h1>$₮€</h1> */}
                </Col>
                {!props.isMobile && (<Col>
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
                {props.isMobile && (<Col>
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
                <Nav.Link className='menu__link_2K2 mb-4' href="/#contacts">Contacts</Nav.Link>
                <WriteUs/>
            </Nav>
        </Container>
    </>);
}