import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Layout/Loading";
import ShopSearch from "../../Components/Shop/ShopSearch";
import { getProducts } from "../../Utils/functions/getProducts";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const res = await getProducts()
      setProducts(res);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ShopSearch />

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div className="shadow p-2 m-2 text-center" key={product._id}>
              <img
                src={product.image.publicUrl}
                alt={product.name}
                className="w-full"
              />
              <Link to={`/product/${product._id}`}>
                <h2 className=" text-lg font-medium text-left">
                  {product.name}
                </h2>
              </Link>
              <p className=" text-primary my-3 text-left">
                {product.price} SAR
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Shop;
