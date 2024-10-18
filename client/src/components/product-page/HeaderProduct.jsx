import InfoVignette from "./InfoVignette";
import HeaderVideo from "./HeaderVideo";
import "./styles/HeaderProduct.css";

function HeaderProduct() {
  return (
    <div className="header-product">
      <div className="header-product__video">
        <HeaderVideo />
      </div>
      <div className="header-product__info">
        <InfoVignette />
      </div>
    </div>
  );
}

export default HeaderProduct;
