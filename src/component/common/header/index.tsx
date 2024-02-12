import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="gnbWrap">
        <h1 className="logo">
          <Link to="/">
            <img
              src="https://image.tving.com/ntgs/operation/logo/2024/02/01/1706777181_1.png"
              alt="Tving"
            />
          </Link>
        </h1>
        <ul className="gnb">
          <li>
            <Link to="/category">시리즈</Link>
          </li>
          <li>영화</li>
          <li>라이브</li>
          <li>파라마운트</li>
        </ul>
      </div>
      <div className="myMenuWrap">
        <div className="searchIco">
          <img
            src="https://www.tving.com/img/icon_search.svg"
            alt="searchIco"
          />
        </div>
        <div className="mypageLogo">
          <img
            src="https://image.tving.com/upload/profile/default.png/dims/resize/100"
            alt="mypage"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
