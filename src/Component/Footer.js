import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Footer() {
    const [fontIcon, setFontIcon] = useState('false');
    const [addressBtn, setAddressBtn] = useState('');
    const clickToggle =()=>{
        setFontIcon(fontIcon => !fontIcon);
        setAddressBtn(addressBtn => !addressBtn);
    };

    const [toggleBtn, setToggleBtn] = useState('false');
    const [hidden, setHidden] = useState('');
    const clickleng =()=>{
        setToggleBtn(toggleBtn => !toggleBtn);
        setHidden(hidden => !hidden);
    }
    return (
      <footer>
        <div className="footer-top">
            <strong>고객센터 1577-0719</strong>
            <p>운영시간 평일 09:00 - 18:00 (토, 일, 공휴일 휴무)</p>
            <p>점심시간 평일 12:00 - 13:30</p>
            <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">협업 문의</a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <div className="sns">
                <ul>
                    <li><a href="#">페이스북</a></li>
                    <li><a href="#">유튜브</a></li>
                    <li><a href="#">인스타그램</a></li>
                </ul>
                <a className="toggle1" onClick={clickToggle}>사업자정보<span><FontAwesomeIcon icon={fontIcon ? faChevronUp : faChevronDown} /></span></a>
            </div>
            {addressBtn && (
                <address>
                    <p>대표이사 : 김병훈</p>
                    <p>사업장소재지 : 서울특별시 송파구 올림픽로 300, 36층 (신천동, 롯데월드타워)</p>
                    <p>사업자등록번호 : 220-88-89441<a href="#">사업자정보확인</a></p>
                    <p>통신판매업신고 : 제2020-서울송파-1274</p>
                    <p>호스팅업체 : 카페24(주)</p>
                    <p>전자우편주소 : cs123@apr-in.com</p>
                </address>
            )}
            <p className="copy">&copy; Medicube all rights reserved.</p>
            <div className="select">
                <div className="leng" onClick={clickleng}>한국어<span><FontAwesomeIcon icon={toggleBtn ? faChevronUp : faChevronDown} /></span></div>
                {hidden && (
                    <div className="hidden">
                        <a href="#">한국어</a>
                        <a href="#">English</a>
                        <a href="#">中文</a>
                        <a href="#">日本語</a>
                    </div>
                )}
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;