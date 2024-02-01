import Header from "~/component/common/header";
import Footer from "~/component/common/Footer";
import "./main.scss";

export default () => {
  return (
    <>
      <Header />
      <div id="main">
        <div className="bannerWrap">베너 이미지 영역</div>
        <section className="listSlideWrap">
          <ul className="listSlide">
            <li>키즈</li>
            <li>아시안 컵</li>
            <li>분데스리가</li>
            <li>UFC</li>
          </ul>
        </section>
        <section>
          <h2>오늘의 티빙 TOP 20</h2>
          <ul className="posterWrap">
            <li>
              <div className="posterImg">포스터 이미지01</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지02</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지03</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지04</div>
            </li>
          </ul>
        </section>
        <section>
          <h2>지금 반영중인 인기 드라마</h2>
          <ul className="posterWrap">
            <li>
              <div className="posterImg">포스터 이미지01</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지02</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지03</div>
            </li>
            <li>
              <div className="posterImg">포스터 이미지04</div>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};
