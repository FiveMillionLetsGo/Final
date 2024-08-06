import "../styles/Setting.css";
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Temperature() {

    let navigate = useNavigate();
    let temperature = '';
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
        if (temperature === '따뜻') {
            navigate('/Payment');
        } else if (temperature === '차') {
            navigate('/Payment');
        }
    }, [navigate, temperature]);

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
        <div className="setting">
            {isPopupVisible && (
                <div className="video-popup">
                    <video ref={videoRef} className="popup-video" autoPlay muted>
                        <source src="/다희ai/video/온도.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <Link to="/Size" className="link">
                <div className="menu__body__box_size">
                    <img
                        src="https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202308310540309360.png"
                        width={180}
                    ></img>
                    <div className="menu__body__name bold_font">아메리카노</div>
                    <div className="menu__body__price bold_font">3200원</div>
                </div>
            </Link>
            <div className="size">
                <div className="menus_size_name">
                    <p className="bold_font">온도</p>
                </div>

                <div className="menus_size_options">
                    <div className="menus_size_option">
                        <Link to="/Payment" className="option_link">
                            따뜻함
                        </Link>
                    </div>
                    <div className="menus_size_option">
                        <Link to="/Payment" className="option_link">
                            차가움
                        </Link>
                    </div>
                </div>
            </div>

            <div className="pay">
                <div className="menus_size_option_back ">
                    <p className="option_link">뒤로가기</p>
                </div>
                {/* <Link to="/Payment">
          <div className="menus_size_option_back ">
            <p className="option_link">결제하기</p>
          </div>
        </Link> */}
            </div>
        </div>
    );
}
export default Temperature;
