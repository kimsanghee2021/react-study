import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const PostViewPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          <div className={styles.postView} style={{ margin: "40px 0 20px" }}>
            <h2 className={styles.postViewTitle}>
              리액트 Hook에 대해서 배워볼까요?
            </h2>
            <div className={styles.postViewDesc}>
              안녕하세요, 소플입니다. 이번 글에서는 리액트의 Hook에 대해서
              배워보도록 하겠습니다. Hook은 리액트의 함수 컴포넌트의 흐름에
              끼어들어서 다양한 작업들을 처리하기 위해서 사용합니다.
            </div>
          </div>
          <button className={styles.btn} onClick={() => navigate("/mainPage")}>
            목록보기
          </button>
          <div>
            <p className={styles.commentTitle}>댓글(5개)</p>
            <div className={styles.commentInputWrap}>
              <input type="text" />
              <button className={styles.commentInputBtn}>등록</button>
            </div>
            <ul className={styles.postList}>
              <li>리액트 배울래?</li>
              <li>좋아</li>
              <li>어떻게 배우는건데?</li>
              <li>오늘 하루 그래도 체크 해볼수 있나?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostViewPage;
