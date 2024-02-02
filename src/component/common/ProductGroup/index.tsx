import ProductItem from "~/component/common/ProductItem";
interface Props {
  title?: string;
  isRanking?: boolean;
  list?: any[];
}

const ProductGroup = ({ title, list, isRanking }: Props) => {
  return (
    <section className="productListWrap">
      <h2 className="contsTitle">{title}</h2>

      <ul className={`posterWrap ${isRanking ? "rankingList" : ""}`}>
        {list &&
          list.length > 0 &&
          list?.map((e, idx) => {
            return (
              <li key={`${title}${idx}`}>
                <ProductItem {...e} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ProductGroup;
