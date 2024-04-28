interface IValues {
  title?: string;
  content?: string;
}
// 이 컴포넌트에서 초기화하고싶은 함수, IValues 배열을 반환, null일 수도 있음.
const init = (): IValues[] => {
  // 로컬스토리지 데이터 불러오기 string이거나 null일 수 있음
  const dataStr =
    localStorage.getItem("postList") != null
      ? localStorage.getItem("postList")
      : null;
  //  dataStr null여부에 따라 다른 값 반환.
  if (dataStr) {
    return JSON.parse(dataStr ? dataStr : "[]");
  } else {
    return [];
  }
};

export type { IValues };
export { init };
