import Header from "~/component/common/header";
import Footer from "~/component/common/Footer";
import ProductGroup from "~/component/common/ProductGroup";
import "./main.scss";

const Index = () => {
  const top10Props = {
    title: "오늘의 티빙 TOP 20",
    list: [
      {
        ranking: 1,
        title: "내남편과 결혼해줘",
        thumb: "",
      },
      {
        ranking: 2,
        title: "LTNS",
      },
      {
        ranking: 3,
        title: "끝내주는 해결사",
        thumb: "",
      },
      {
        ranking: 4,
        title: "나는 솔로",
      },
      {
        ranking: 5,
        title: "어쩌다 사장3",
        thumb: "",
      },
      {
        ranking: 6,
        title: "환승연애 3",
      },
      {
        ranking: 7,
        title: "닥터슬럼프",
      },
      {
        ranking: 8,
        title: "모래에도 꽃이 핀다.",
      },
      {
        ranking: 9,
        title: "나나투어",
      },
      {
        ranking: 10,
        title: "장사천재 백사장",
      },
    ],
    isRanking: false,
  };

  top10Props.list.some((e) => {
    if (e.ranking) {
      top10Props.isRanking = true;
      return true;
    }
    return false;
  });

  const unscriptShow = {
    title: "지금 반영중인 인기 예능",
    list: [
      {
        title: "나나투어",
        thumb: "",
      },
      {
        title: "용감한 형사들3",
        thumb: "",
      },
      {
        title: "씰크업",
        thumb: "",
      },
      {
        title: "미스틑트롯",
        thumb: "",
      },
      {
        title: "어쩌다 사장",
        thumb: "",
      },
      {
        title: "금쪽같은 내새끼",
        thumb: "",
      },
      {
        title: "유퀴즈온더블럭",
        thumb: "",
      },
      {
        title: "한국은 처음이지?",
        thumb: "",
      },
    ],
  };

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
            <li>UFC</li>
          </ul>
        </section>
        <ProductGroup {...top10Props} />
        <ProductGroup {...unscriptShow} />
      </div>
      <Footer />
    </>
  );
};
export default Index;
