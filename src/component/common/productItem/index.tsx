import SvgIcon from "~/assets/images/svgIcon";

interface Props {
  ranking?: number;
  title: string;
  thumb: string;
}

const ProductItem = ({ ranking, title, thumb }: Props) => {
  return (
    <>
      {ranking && <span className="ranking">{SvgIcon[ranking]()}</span>}
      <div className="posterImg">
        <p className="hiddenTitle">{title}</p>
        {/* <img src={thumb} alt={title} /> */}
      </div>
    </>
  );
};

export default ProductItem;
