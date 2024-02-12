import Header from "~/component/common/header";
import Footer from "~/component/common/Footer";
import ProductGroup from "~/component/common/ProductGroup";
import "./category.scss";
const Category = () => {
  const seriesProps = {
    title: "Top 20 시리즈",
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
  seriesProps.list.some((e) => {
    if (e.ranking) {
      seriesProps.isRanking = true;
      return true;
    }
    return false;
  });
  return (
    <>
      <Header />
      <div id="contents">
        <section className="categoryListWrap">
          <div className="categoryList">
            <span>드라마</span>
            <span>예능</span>
            <span>에니메이션</span>
            <span>키즈</span>
            <span>미국시리즈</span>
            <span>영국시리즈</span>
            <span>중국시리즈</span>
            <span>일본시리즈</span>
            <span>로맨스</span>
            <span>코미디</span>
            <span>스릴러</span>
            <span>모험</span>
            <span>드라마</span>
            <span>예능</span>
            <span>에니메이션</span>
            <span>키즈</span>
            <span>미국시리즈</span>
            <span>영국시리즈</span>
            <span>중국시리즈</span>
            <span>일본시리즈</span>
            <span>로맨스</span>
            <span>코미디</span>
            <span>스릴러</span>
            <span>모험</span>
          </div>
        </section>
        <ProductGroup {...seriesProps} />
      </div>
      <Footer />
    </>
  );
};
export default Category;
