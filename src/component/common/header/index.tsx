import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="gnbWrap">
        <h1 className="logo">Logo</h1>
        <ul className="gnb">
          <li>시리즈</li>
          <li>영화</li>
          <li>라이브</li>
          <li>파라마운트</li>
        </ul>
      </div>
      <div className="myMenuWrap">
        <div>검색</div>
        <div>마이페이지</div>
      </div>
    </header>
  );
};
export default Header;
