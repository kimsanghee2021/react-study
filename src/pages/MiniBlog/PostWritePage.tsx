import styles from "./styles.module.scss";

const PostWritepage = () => {
  return (
    <>
      <div className={styles.miniBlogWrap}>
        <div className={styles.container}>
          <h2 className={styles.title}>상희의 미니 블로그 환영합니다.</h2>
          <div className={styles.postWrite}>
            <p>title</p>
            <input type="text" />
            <textarea></textarea>
            <button className={styles.btn}>등록</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostWritepage;
