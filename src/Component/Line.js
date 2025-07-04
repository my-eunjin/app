import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Line() {
  const bestproduct = [
    {id:1, src:`${process.env.PUBLIC_URL}/images/line1.png`, title:'PDRN Line', subtitle:'흔적미백 케어 & 볼륨탄력',
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line1-1.jpg`, title:'[아이돌PICK] PDRN 핑크 콜라겐 토닝 겔 토너 패드', price:'17,500원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line1-2.jpg`, title:'PDRN 핑크 펩타이드 앰플', price:'20,700원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line1-3.jpg`, title:'PDRN 핑크 콜라겐 엑소좀 샷 앰플 2000', price:'22,000원',sale:'50%'},
      ]
    },
    {id:2, src:`${process.env.PUBLIC_URL}/images/line2.jpg`, title:'Collagen Line', subtitle:'물광 리프팅 & 탄력충전', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line2-1.png`, title:'콜라겐 글로우 부스터 세럼', price:'26,000원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line2-2.jpg`, title:'[초대용량] 콜라겐 나이트 랩핑 마스크', price:'25,000원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line2-3.jpg`, title:'콜라겐 젤크림', price:'19,500원',sale:'50%'},
      ]
    },
    {id:3, src:`${process.env.PUBLIC_URL}/images/line3.png`, title:'Zero Line', subtitle:'모공타이트닝 & 블랙헤드 제거', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line3-1.jpg`, title:'제로 원데이 엑소좀 샷 모공 앰플 2000', price:'22,000원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line3-2.jpg`, title:'제로 모공패드 2.0 | 마일드', price:'17,500원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line3-3.jpg`, title:'제로 모공 원데이 세럼', price:'23,500원',sale:'50%'},
      ]
    },
    {id:4, src:`${process.env.PUBLIC_URL}/images/line4.jpg`, title:'Cica Line', subtitle:'민감피부 진정 & 시카 수분', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line4-1.jpg`, title:'엑소좀 시카 앰플', price:'17,500원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line4-2.jpg`, title:'엑소좀 시카 요철 진정패드', price:'17,500원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line4-3.png`, title:'[비건] 슈퍼 시카 딥 클렌징 밤', price:'21,000원',sale:'50%'},
      ]
    },
    {id:5, src:`${process.env.PUBLIC_URL}/images/line5.png`, title:'Deep Line', subtitle:'잡티 & 미백 주름 개선', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line5-1.jpg`, title:'딥 비타C 캡슐 크림', price:'26,200원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line5-2.jpg`, title:'7일 기미앰플 2.0', price:'30,000원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line5-3.jpg`, title:'딥 비타C 패드', price:'21,000원',sale:'50%'},
      ]
    },
    {id:6, src:`${process.env.PUBLIC_URL}/images/line6.webp`, title:'Red Line', subtitle:'여드름성 피부 사용 적합', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line6-1.jpg`, title:'[트러블개선] 레드 석시닉 애씨드 패드', price:'18,000원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line6-2.png`, title:'레드 석시닉 애씨드 흔적세럼', price:'18,000원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line6-3.png`, title:'레드 아크네 석시닉애씨드 필', price:'24,000원',sale:'50%'},
      ]
    },
    {id:7, src:`${process.env.PUBLIC_URL}/images/line7.jpg`, title:'Body Line', subtitle:'저자극 & 여드름성 바디 피부 케어', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line7-1.png`, title:'레드 아크네 바디워시 2.0 (화해 1위)', price:'19,000원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line7-2.png`, title:'레드 클리어 캡슐 바디로션', price:'19,000원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line7-3.jpg`, title:'레드 아크네 바디 필링 샷', price:'19,000원',sale:'50%'},
      ]
    },
    {id:8, src:`${process.env.PUBLIC_URL}/images/line8.jpg`, title:'Soyxidil Line', subtitle:'탈모 완화 기능성 성분', 
      subitem:[
        {id:1, src:`${process.env.PUBLIC_URL}/images/line8-1.jpg`, title:'소이민트 스케일링 샴푸 (지루성 투피용)', price:'18,000원',sale:'50%'},
        {id:2, src:`${process.env.PUBLIC_URL}/images/line8-2.png`, title:'소이시딜 샴푸 (탈모기능성)', price:'24,000원',sale:'50%'},
        {id:3, src:`${process.env.PUBLIC_URL}/images/line8-3.png`, title:'소이 프로틴 LPP 퍼스트 헤어팩', price:'19,000원',sale:'50%'},
      ]
    },
  ]
    return (
      <div className="line_wrap">
        <div className="title">
          <h3>뷰티 & 헤어바디</h3>
          <a href="#">전체보기</a>
        </div>
        <div className="bestline">
            <Swiper
              slidesPerView={1.15}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              className="mySwiper">
              {
                bestproduct.map((item)=>(
                  <SwiperSlide key={item.id}>
                    <div className="item_wrap">
                      <img src={item.src} alt={item.title} />
                      <div className="text_wrap">
                        <p>{item.title}</p>
                        <span>{item.subtitle}</span>
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
                              <p><span>{sub.sale}</span>{sub.price}</p>
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
    );
  }
  
  export default Line;