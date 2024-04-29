import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Btn from "~/component/Button";
import { IValues, init } from "~/helper";

const PostWritepage = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  //list 포스트 배열을 초기화. null일 수 있음.
  const [postList, setPostList] = useState<IValues[]>(() => init());
  const [postObj, setPostObj] = useState<IValues>({
    title: "",
    content: "",
  });

  console.log(postList[Number(id)]);

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
            {postList[Number(id)] ? (
              <>
                <input
                  type="text"
                  defaultValue={postList[Number(id)].title}
                  onChange={(e) =>
                    setPostObj({ ...postObj, title: e.target.value })
                  }
                />
                <textarea
                  defaultValue={postList[Number(id)].content}
                  onChange={(e) =>
                    setPostObj({ ...postObj, content: e.target.value })
                  }
                ></textarea>
                <Btn text="수정" onClick={() => onSubmit()} />
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWritepage;
