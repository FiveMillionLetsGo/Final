import "../styles/Menu.css";
import React, { useEffect, useRef, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
} from "react-router-dom";

function Menu() {

    let navigate = useNavigate();
    let category = '커피';
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
        if (category === "커피") {
            navigate("/Menu");
        } else if (category === "에이드") {
            navigate("/Menu");
        } else if (category === "스무디") {
            navigate("/Menu");
        } else if (category === "디저트") {
            navigate("/Menu");
        }
    }, [navigate, category]);

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
        <div className="menu">
            {isPopupVisible && (
                <div className="video-popup">
                    <video ref={videoRef} className="popup-video" autoPlay muted>
                        <source src="/다희ai/video/메뉴.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <div className="menu__box">
                <div className="menu__body">
                    <div className="menu__body__container">
                        <Link to="/Menu" className="link">
                            <div className="menu__body__box">
                                <div className="category_name">커피</div>
                            </div>
                        </Link>

                        <Link to="/Ade" className="link">
                            <div className="menu__body__box">
                                <div className="category_name">에이드</div>
                            </div>
                        </Link>
                    </div>

                    <div className="menu__box">
                        <Link to="/Smoothie" className="link">
                            <div className="menu__body__box">
                                <div className="category_name">스무디</div>
                            </div>
                        </Link>

                        <Link to="/Dessert" className="link">
                            <div className="menu__body__box">
                                <div className="category_name">디저트</div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;
