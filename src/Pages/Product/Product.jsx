import { Link, useParams } from "react-router-dom";
import {
  faStar,
  faStarHalfStroke,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarO } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShopSearch from "../../Components/Shop/ShopSearch";
import Loading from "../../Components/Layout/Loading";

function Product() {
  const params = useParams();
  const productId = params["productId"];
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function fetchProduct() {
    try {
      const res = await axios.get(
        `https://logistics-solution-wheat.vercel.app/api/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res.data);
      setProduct(res.data);
      if (res.data.colors && res.data.colors.length > 0) {
        setSelectedColor(res.data.colors[0]);
      }
      if (res.data.availableForWholesale) {
        setQuantity(res.data.minOrderQuantityForWholesale);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  function updateQuantity(x) {
    setQuantity(quantity + x);
  }

  return (
    <>
      <ShopSearch />
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10 ">
            <Carousel
              autoPlay
              infiniteLoop
              width="100%"
              stopOnHover
              showStatus={false}
              showArrows={false}
            >
              {product.image &&
                product.image.map((img, i) => (
                  <div key={i} className="flex justify-center items-center">
                    <img
                      src={img.publicUrl}
                      alt={`${product.name} ${i + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ))}
            </Carousel>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center space-x-1 py-2">
                {[...Array(5)].map((_, index) => {
                  const starIndex = index + 1;
                  const isFilled = starIndex <= product.totalRating;
                  const isHalf =
                    starIndex === Math.ceil(product.totalRating) &&
                    product.totalRating % 1 !== 0;
                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={
                        isFilled ? faStar : isHalf ? faStarHalfStroke : faStarO
                      }
                      className="text-yellow-500"
                    />
                  );
                })}
              </div>
              <p className="text-2xl text-primary font-medium">
                {product.price} SAR
              </p>
              <p className="text-gray-700 py-2">{product.description}</p>
              <p className="text-gray-600">
                Brand:{" "}
                <span className="font-medium text-gray-800">
                  {product.brand}
                </span>
              </p>
              <p className="text-gray-600 py-2">
                Material:{" "}
                <span className="font-medium text-gray-800">
                  {product.material}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors &&
                  product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="relative cursor-pointer"
                      onClick={() => handleColorSelection(color)}
                    >
                      <div
                        style={{ backgroundColor: color }}
                        className="w-8 h-8 rounded-full border relative"
                        title={color}
                      >
                        {selectedColor === color && (
                          <div className="w-8 h-8 absolute rounded-full bg-white flex justify-center items-center opacity-35">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="text-xs "
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex my-3 items-center">
                <button
                  onClick={() => {
                    updateQuantity(-1);
                  }}
                  className="text-center bg-primary p-3 my-5 text-white rounded hover:bg-red-900"
                  disabled={
                    product.availableForWholesale &&
                    product.minOrderQuantityForWholesale === quantity
                  }
                >
                  -
                </button>
                <p className="mx-3 text-lg">{quantity}</p>
                <button
                  onClick={() => {
                    updateQuantity(1);
                  }}
                  className="text-center bg-primary p-3 my-5 text-white rounded hover:bg-red-900"
                >
                  +
                </button>
              </div>
              <Link
                to={`/checkout/data/${product._id}?quantity=${quantity}&color=${selectedColor}`}
                className="block text-center w-full bg-primary py-3 my-5 text-white rounded-lg shadow-lg hover:bg-red-900 transition duration-300"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default Product;
