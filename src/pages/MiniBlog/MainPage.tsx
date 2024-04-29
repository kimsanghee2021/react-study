import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { IValues, init } from "~/helper";

const MainPage = () => {
  const navigate = useNavigate();

  const [postList, setPostList] = useState<IValues[]>(() => init());
  console.log();
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          {postList.length > 0 ? (
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
          ) : (
            <div style={{ margin: "50px 0", textAlign: "center" }}>
              게시글이 없습니다.
            </div>
          )}

          <button className={styles.btn} onClick={() => navigate("/postWrite")}>
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
};
export default MainPage;
