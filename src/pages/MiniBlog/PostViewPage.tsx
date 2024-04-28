import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { IValues, init } from "~/helper";

const PostViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const [postList, setPostList] = useState<IValues[]>(() => init());
  console.log(id);

  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          <div className={styles.postView} style={{ margin: "40px 0 20px" }}>
            <h2 className={styles.postViewTitle}>
              {postList[Number(id)].title}
            </h2>
            <div className={styles.postViewDesc}>
              {postList[Number(id)].content}
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
            <ul className={styles.postList} style={{ margin: "60px 0" }}>
              {postList?.map((el, idx) => (
                <li
                  key={`li${idx}`}
                  onClick={() => navigate(`/postView/${idx}`)}
                >
                  {el.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostViewPage;
