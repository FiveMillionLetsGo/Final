import "../styles/Menu.css";
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Menu() {

    let navigate = useNavigate();
    let menu = '';
    const videoRef = useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(true);

    useEffect(() => {
        const playVideoWithSound = () => {
            if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.play().catch(error => {
                    console.error("Failed to play video:", error);
                });
            }
        };

        playVideoWithSound();
    }, []);

    useEffect(() => {
        if (menu === '아메리카노') {
            navigate('/Size');
        } else if (menu === '카페라떼') {
            navigate('/Size');
        } else if (menu === '에스프레스') {
            navigate('/Size');
        } else if (menu === '바닐라라뗴') {
            navigate('/Size');
        }
    }, [navigate, menu]);

    useEffect(() => {
        const handleVideoEnd = () => {
            setIsPopupVisible(false);
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('ended', handleVideoEnd);
            return () => {
                videoElement.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, []);

    return (
        < div className="menu" >
            {isPopupVisible && (
                <div className="video-popup">
                    <video ref={videoRef} className="popup-video" autoPlay muted>
                        <source src="/다희ai/video/메뉴.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <div className="menu__header">
                <p>
                    <Link to="/Menu/Coffee" className="link link_coffee">
                        커피
                    </Link>
                </p>
                <p>
                    <Link to="/Menu/Ade" className="menu_link">
                        에이드
                    </Link>
                </p>
                <p>
                    <Link to="/Menu/Smoothie" className="menu_link">
                        스무디
                    </Link>
                </p>
                <p>
                    <Link to="/Menu/Desert" className="menu_link">
                        디저트
                    </Link>
                </p>
            </div>
            <div className="menu__box">
                <div className="menu__body">
                    <div className="menu__body__container">
                        <Link to="/Size" className="link">
                            <div className="menu__body__box">
                                <img
                                    src="https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202308310540309360.png"
                                    width={150}
                                ></img>
                                <div className="menu__body__name">아메리카노</div>
                                <div className="menu__body__price">3200원</div>
                            </div>
                        </Link>

                        <Link to="/Latte" className="link">
                            <div className="menu__body__box">
                                <img
                                    src="https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202208310252574560.png"
                                    width={150}
                                ></img>
                                <div className="menu__body__name">카페라떼</div>
                                <div className="menu__body__price">3500원</div>
                            </div>
                        </Link>
                    </div>

                    <div className="menu__box">
                        <Link to="/Espresso" className="link">
                            <div className="menu__body__box">
                                <img
                                    src="https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202205100950557620.png"
                                    width={150}
                                ></img>
                                <div className="menu__body__name">에스프레소</div>
                                <div className="menu__body__price">3200원</div>
                            </div>
                        </Link>

                        <Link to="/VanilaLatte" className="link">
                            <div className="menu__body__box">
                                <img
                                    src="https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202210110500272440.png"
                                    width={150}
                                ></img>
                                <div className="menu__body__name">바닐라라떼</div>
                                <div className="menu__body__price">4200원</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;
