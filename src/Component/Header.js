import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [scrollMenu, setScrollMenu] = useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setScrollMenu(true);
      }else{
        setScrollMenu(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  }, []);

  useEffect(()=>{
    const handleScroll=()=>{
      setScrollMenu(window.scrollY>100);
    };
    window.addEventListener('scroll', handleScroll);
    return()=>window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSlideChange=()=>{
    gsap.killTweensOf('.bannerText>*');
    gsap.fromTo('.bannerText>*',
    {opacity:0, x:30, duration:0},
    {opacity:1, x:0, duration:0.5, stagger:0.3, ease: 'power3.out', overwrite:'auto',
      scrollTrigger:{
        trigger:'.mySwiper', once:true,
        }
      }
    );
  }
  
  const mainBanner = [
    {id:1, src:`${process.env.PUBLIC_URL}/images/banner1.jpg`, alt:'부스터 프로', title1:'', title2:'', subtitle:''},
    {id:2, src:`${process.env.PUBLIC_URL}/images/banner2.jpg`, alt:'포커스 샷', title1:'1등 하이푸, 하이 포커스 샷', title2:'근막 타겟팅 윤곽&탄력 특화', subtitle:'에이지알 하이 포커스 샷'},
    {id:3, src:`${process.env.PUBLIC_URL}/images/banner3.jpg`, alt:'시카 카밍 패드', title1:'4세대 엑소좀시카 진정 팩패드', title2:'엑소좀 시카 카밍 패드', subtitle:'요철진정 밀착거즈 패드'},
    {id:4, src:`${process.env.PUBLIC_URL}/images/banner4.jpg`, alt:'울트라 튠', title1:'국내 최초 40.68MHz 고주파와', title2:'미세전류의 완벽하고 강력한 결합', subtitle:'고주파 기기 울트라튠 40.68 출시'},
    {id:5, src:`${process.env.PUBLIC_URL}/images/banner5.jpg`, alt:'콜라겐 부스터 세럼', title1:'차오르는 탄탄한 볼륨 광채', title2:'콜라겐 글로우 부스터 세럼', subtitle:'100% 고밀도 단백질로 채우는 탄탄함'},
    {id:6, src:`${process.env.PUBLIC_URL}/images/banner6.jpg`, alt:'부스터 미니', title1:'막강한 진정 & 미백 효과', title2:'첫 뷰티 디바이스부터 완벽하게', subtitle:'에이지알 부스터프로 미니'},
  ]

    return (
      <div className="header">
        <div className="fixIcon">
          <button><img src={`${process.env.PUBLIC_URL}/images/event3.png`} alt="친구초대" /></button>
          <button><img src={`${process.env.PUBLIC_URL}/images/event4.png`} alt="카톡상담" /></button>
        </div>
        <nav className={`${scrollMenu ? 'scrolled' : ''}`}>
          <h1><a href="#">logo</a></h1>
          <div className="topbtn">
            <button className="search"></button>
            <button className="cart"></button>
          </div>
        </nav>
        <section>
          <Swiper
            onSlideChangeTransitionEnd={handleSlideChange}
            centeredSlides={true}
            autoplay={{
              disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                type: 'fraction'
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper">
            {
              mainBanner.map((banner)=>(
                <SwiperSlide key={banner.id}>
                  <div className="bannerText">
                    <h3 className='texteffect1'>{banner.title1}</h3>
                    <h3 className='texteffect2'>{banner.title2}</h3>
                    <p className='texteffect3'>{banner.subtitle}</p>
                  </div>
                  <img src={banner.src} alt={banner.alt} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </section>
      </div>
    );
  }
  

  export default Header;


