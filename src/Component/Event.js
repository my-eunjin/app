function Event() {
    return (
      <div className="event_wrap">
        <div className="title">
          <h3>메디큐브 특별 혜택</h3>
          <a href="#">전체보기</a>
        </div>
        <figure>
          <img src="./images/event1.png" alt="친구초대" />
          <figcaption>
            <h4>친구 초대할 때마다 무제한 적립금</h4>
            <p>초대한 친구가 7만원 이상 구매시 5천원 적립금 지급</p>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/event2.png" alt="라이브방송" />
          <figcaption>
            <h4>메디큐브 라이브 방송</h4>
            <p>최저가 혜택 및 사은품 증정 + 구매왕 추첨 이벤트</p>
          </figcaption>
        </figure>
      </div>
    );
  }
  
  export default Event;