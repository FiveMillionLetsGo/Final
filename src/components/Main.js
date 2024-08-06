import "../styles/Main.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

function Main() {
    let navigate = useNavigate();
    let main = '먹고';
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
        if (main === "먹고") {
            navigate("/Category");
        } else if (main === "포") {
            navigate("/Category");
        }
    }, [navigate, main]);

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
        <div className="main">
            {isPopupVisible && (
                <div className="video-popup">
                    <video ref={videoRef} className="popup-video" autoPlay muted>
                        <source src="/다희ai/video/포장.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            <Link to="/Category" className="main__left">
                <p className="main_link">먹고가기</p>
            </Link>
            <Link to="/Category" className="main__right">
                <p className="main_link">포장하기</p>
            </Link>
        </div>
    );
}
export default Main;
