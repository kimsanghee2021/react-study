import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-util">
        <ul>
          <li>고객센터</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년 보호정책</li>
          <li>법적고지</li>
          <li>이벤트</li>
          <li>인재채용</li>
          <li>티빙을 만드는 사람들</li>
        </ul>
        <div className="dFlexCenter familyList">
          <span>브랜드 바로가기</span>
          <span>그룹계열사 바로가기</span>
        </div>
      </div>
      <div className="copyright-box">
        <p>
          <span>대표이사 : 최주희</span>
          <span>사업자정보확인</span>
          <span>사업자등록번호 : 188-88-01893</span>
          <span>통신판매신고번호 : 2020-서울마포-3641호</span>
        </p>
        <p>
          <span>
            사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
          </span>
          <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
        </p>
        <p>
          <span>고객센터 (평일 09시~17시/점심시간 13시~14시)</span>
          <span>1:1 게시판 문의</span>
          <span>대표메일 : tving@cj.net</span>
          <span>전화번호(ARS) : 1670-1525 (챗봇/채팅 상담 연결)</span>
        </p>
        <p>
          <span>
            ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
          </span>
          <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
        </p>
      </div>
      <p className="copyright">Copyright © 주식회사 티빙 All right reserved.</p>
    </footer>
  );
};

export default Footer;
