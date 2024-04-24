import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Btn from "~/component/Button";
interface IVAlues {
  title: string;
  contents: string;
}

const PostWritepage = () => {
  //인풋박스에 들어가는 내용들
  const [defaultVal, setDefaultVal] = useState<string>("");
  const [defaultConts, setDefaultConts] = useState<string>("");
  //list
  const [values, setValues] = useState<IVAlues[]>([]);

  //등록버튼 눌렀을 때 함수
  const onSubmit = () => {
    if (defaultVal) {
      setValues([
        ...values,
        {
          title: defaultVal,
          contents: defaultConts,
        },
      ]);
    }

    setDefaultConts("");
  };

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          <div className={styles.postWrite}>
            <p>title</p>
            <input
              type="text"
              defaultValue={defaultVal}
              onChange={(e) => console.log(setDefaultVal(e.target.value))}
            />
            <textarea
              defaultValue={defaultConts}
              onChange={(e) => setDefaultConts(e.target.value)}
            ></textarea>
            <Btn text="등록" onClick={() => onSubmit()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWritepage;
