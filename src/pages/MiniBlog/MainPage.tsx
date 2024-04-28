import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>

          <ul className={styles.postList} style={{ margin: "60px 0" }}>
            <li onClick={() => navigate("/postView")}>리액트 배울래?</li>
            <li>좋아</li>
            <li>어떻게 배우는건데?</li>
            <li>오늘 하루 그래도 체크 해볼수 있나?</li>
          </ul>
          <button className={styles.btn} onClick={() => navigate("/postWrite")}>
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
};
export default MainPage;
