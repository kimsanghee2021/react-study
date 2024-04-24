interface Props {
  onClick?: () => void;
  item: string;
}
const ListItem = ({ item, onClick }: Props) => {
  return (
    <>
      <li onClick={onClick}>{item}</li>
    </>
  );
};
export default ListItem;
