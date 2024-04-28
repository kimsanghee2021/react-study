import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Btn from "~/component/Button";
interface IValues {
  title?: string;
  content?: string;
}

const PostWritepage = () => {
  const navigate = useNavigate();

  // 이 컴포넌트에서 초기화하고싶은 함수, IValues 배열을 반환, null일 수도 있음.
  const init = (): IValues[] | null => {
    // 로컬스토리지 데이터 불러오기 string이거나 null일 수 있음
    const dataStr =
      localStorage.getItem("postList") != null
        ? localStorage.getItem("postList")
        : null;
    //  dataStr null여부에 따라 다른 값 반환.
    if (dataStr) {
      return JSON.parse(dataStr ? dataStr : "[]");
    } else {
      return null;
    }
  };
  //list 포스트 배열을 초기화. null일 수 있음.
  const [postList, setPostList] = useState<IValues[] | null>(() => init());

  const [postObj, setPostObj] = useState<IValues>({
    title: "",
    content: "",
  });
  //등록버튼 눌렀을 때 함수
  const onSubmit = () => {
    const data = [...(postList ?? []), postObj];
    console.log(data);
    localStorage.setItem("postList", JSON.stringify(data));
    navigate("/mainPage");
  };

  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          <div className={styles.postWrite}>
            <p>title</p>
            <input
              type="text"
              defaultValue={postObj.title}
              onChange={(e) =>
                setPostObj({ ...postObj, title: e.target.value })
              }
            />
            <textarea
              defaultValue={postObj.content}
              onChange={(e) =>
                setPostObj({ ...postObj, content: e.target.value })
              }
            ></textarea>
            <Btn text="등록" onClick={() => onSubmit()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWritepage;
