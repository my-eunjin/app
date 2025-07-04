import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';

function Product() {
  const topIcon1 =[
    {id:1, src:`${process.env.PUBLIC_URL}/images/menu1.png`, alt:'상반기결산'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/menu2.png`, alt:'선물하기'},
    {id:3, src:`${process.env.PUBLIC_URL}/images/menu3.jpg`, alt:'라이브'},
    {id:4, src:`${process.env.PUBLIC_URL}/images/menu4.jpg`, alt:'전제품'},
    {id:5, src:`${process.env.PUBLIC_URL}/images/menu5.jpg`, alt:'이벤트'},
  ]
  const topIcon2 =[
    {id:6, src:`${process.env.PUBLIC_URL}/images/menu6.png`, alt:'에이지알'},
    {id:7, src:`${process.env.PUBLIC_URL}/images/menu7.png`, alt:'제로'},
    {id:8, src:`${process.env.PUBLIC_URL}/images/menu8.png`, alt:'레드'},
    {id:9, src:`${process.env.PUBLIC_URL}/images/menu9.png`, alt:'딥'},
    {id:10, src:`${process.env.PUBLIC_URL}/images/menu10.png`, alt:'콜라겐'},
    {id:11, src:`${process.env.PUBLIC_URL}/images/menu11.png`, alt:'PDRN'},
    {id:12, src:`${process.env.PUBLIC_URL}/images/menu12.png`, alt:'트라넥삼산'},
    {id:13, src:`${process.env.PUBLIC_URL}/images/menu13.png`, alt:'터메릭'},
    {id:14, src:`${process.env.PUBLIC_URL}/images/menu14.png`, alt:'시카'},
    {id:15, src:`${process.env.PUBLIC_URL}/images/menu15.png`, alt:'소이시딜'},
    {id:16, src:`${process.env.PUBLIC_URL}/images/menu16.png`, alt:'바디'},
  ]
  const mainitem = [
    {id:1, src:`${process.env.PUBLIC_URL}/images/product1.png`, title:'High Focus Shot', subtitle:'차세대 집속 초음파, 하이 포커스 샷', subitemtitle:'하이 포커스 샷 시너지템', subitem:[{id:1, src:`${process.env.PUBLIC_URL}/images/product1-1.png`, title:'에이지알 PDRN 부스터 젤', subtitle:'PDRN+펩타이드 리프팅 젤 세럼'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/product1-2.jpg`, title:'딥 비타A 레티놀 세럼', subtitle:'주름 차오르는 탄력 리프팅 세럼'}]}, 

    {id:2, src:`${process.env.PUBLIC_URL}/images/product2.jpg`, title:'Ultra tune 40.68', subtitle:'콜라겐 생성, 울트라 튠 40.68', subitemtitle:'울트라 튠 시너지템', subitem:[{id:1, src:`${process.env.PUBLIC_URL}/images/product2-1.jpg`, title:'글루타치온 글로우 캡슐 크림', subtitle:'광채 비결을 담은 즉각 리프팅 크림'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/product2-2.jpg`, title:'콜라겐 글로우 부스터 세럼', subtitle:'속부터 차오르는 탄탄한 볼륨 광채'}]},

    {id:3, src:`${process.env.PUBLIC_URL}/images/product3.jpg`, title:'Booster Pro', subtitle:'6 in 1 토탈케어, 부스터 프로', subitemtitle:'부스터 프로 시너지템', subitem:[{id:1, src:`${process.env.PUBLIC_URL}/images/product3-1.png`, title:'에이지알 글루타치온 글로우 앰플', subtitle:'집에서 경험하는 하이엔드 스킨 부스터'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/product3-2.jpg`, title:'에이지알 비타C 프로 앰플', subtitle:'고순도 프리미엄 비타민 25% 앰플'}]},

    {id:4, src:`${process.env.PUBLIC_URL}/images/product4.jpg`, title:'Contour Body Shot', subtitle:'슬림 바디기술, 석션 바디샷', subitemtitle:'석션 바디샷 시너지템', subitem:[{id:1, src:`${process.env.PUBLIC_URL}/images/product4-1.png`, title:'에이지알 비타 케이 흔적 크림', subtitle:'셀룰라이트와 관리 후 일시적 흔적 케어'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/product4-2.jpg`, title:'레드 클리어 캡슐 바디로션', subtitle:'바디트러블 특화 바디로션'}]},

    {id:5, src:`${process.env.PUBLIC_URL}/images/product5.webp`, title:'I shot', subtitle:'국소 부위 전용 볼륨 케어 디바이스', subitemtitle:'아이샷 시너지템', subitem:[{id:1, src:`${process.env.PUBLIC_URL}/images/product5-1.jpg`, title:'딥 비타A 레티놀 세럼', subtitle:'주름 차오르는 탄력 리프팅 세럼'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/product5-2.png`, title:'딥 리프팅 펩타이드 아이크림', subtitle:'깊어진 눈가 주름 리프팅하는 아이크림'}]},
  ]

    return (
      <div className="product_container">
        <div className="top_section">
          <Swiper
            slidesPerView={3.8}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            {
              topIcon1.map((icon)=>(
                <SwiperSlide key={icon.id}>
                  <div className="icon_wrap">
                    <img src={icon.src} alt={icon.alt} />
                    <p>{icon.alt}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="top_section">
          <Swiper
            slidesPerView={3.85}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            {
              topIcon2.map((icon)=>(
                <SwiperSlide key={icon.id}>
                  <div className="icon_wrap">
                    <div><img src={icon.src} alt={icon.alt} /></div>
                    <p>{icon.alt}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="product_item">
          <div className="title">
            <h3>메디큐브 에이지알</h3>
            <a href="#">전체보기</a>
          </div>
          <div className="main_product">
            <Swiper
              slidesPerView={1.15}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              className="mySwiper">
              {
                mainitem.map((item)=>(
                  <SwiperSlide key={item.id}>
                    <div className="item_wrap">
                      <img src={item.src} alt={item.title} />
                      <div className="text_wrap">
                        <p>{item.title}</p>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="subitem_wrap">
                      <h4>{item.subitemtitle}</h4>
                      {
                        item.subitem?.map((sub)=>(
                          <figure key={sub.id}>
                              <img src={sub.src} />
                            <figcaption>
                              <h4>{sub.title}</h4>
                              <p>{sub.subtitle}</p>
                            </figcaption>
                          </figure>
                        ))
                      }
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        
        {/* sub banner */}
        <div className="product_banner">
        <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper">
            <SwiperSlide>
              <div className="bannerText">
                <h3>AGE-R</h3>
                <p>모두가 누릴 수 있는 클리닉 서비스</p>
                <a href="#">더보기</a>
              </div>
              <img src={`${process.env.PUBLIC_URL}/images/subbanner1.jpg`} alt="AGE-R" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="bannerText">
                <h3>BEAUTY</h3>
                <p>지속가능한 메디큐브</p>
                <a href="#">더보기</a>
              </div>
              <img src={`${process.env.PUBLIC_URL}/images/subbanner2.jpg`} alt="beauty" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
  
  export default Product;