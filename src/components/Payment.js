import "../styles/Setting.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Payment() {
    let main = '';
    let category = '';
    let menu = '';
    let size = '';
    let mtemperture = '';

    return (
        <div className="setting">
            <img src="https://cdn.thepublic.kr/news/photo/202207/20220719_1_bodyimg_82127.jpg" width={350} height={250}></img>
            <div className="payment_font">결제중입니다...</div>

            <div className="payment_font">
                오른쪽 아래에 <br></br>카드를 넣어주세요.
            </div>
        </div>
    );
}
export default Payment;
