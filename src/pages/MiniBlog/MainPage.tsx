import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { IValues, init } from "~/helper";

const MainPage = () => {
  const navigate = useNavigate();

  const [postList, setPostList] = useState<IValues[] | null>(() => init());
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>

          <ul className={styles.postList} style={{ margin: "60px 0" }}>
            {postList?.map((el, idx) => (
              <li key={`li${idx}`} onClick={() => navigate(`/postView/${idx}`)}>
                {el.title}
              </li>
            ))}
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
