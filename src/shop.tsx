import { PropsWithChildren } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

type Product = {
  name: string;
  price: number;
  image: string;
};

const ProductCard = (props: PropsWithChildren & Product) => {
  const [hover, setHover] = useState(false);
  const { image, name, price } = props;
  return (
    <div
      className="flex flex-col p-4 gap-2 items-stretch justify-between"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setTimeout(() => setHover(false), 500)}
    >
      <img
        className={`rounded-2xl ${hover ? "brightness-100" : "brightness-75"}`}
        src={image}
        alt={name}
      />
      <div className="flex text-blue-900 items-center justify-around p-2">
        <p className="text-xl font-bold uppercase w-2/3">{name}</p>
        <div className="flex flex-col w-1/3 relative">
          <p
            className={`text-lg text-center transition-opacity absolute -top-3 left-0 ml-2 mt-2 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          >
            ${price}
          </p>
          <button
            className={`rounded-full p-3 bg-blue-900 text-white hover:bg-pink-500 absolute -top-3 left-0 text-center transition-opacity ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    const data = (await import("./data.json")).default as Product[];
    setProducts(data);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div
        className="w-full flex flex-col gap-4 items-center justify-center"
        style={{
          height: "50vh",
          background:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1558284296-7579da2deb30?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 -120px",
        }}
      >
        <h2 className="text-pink-300 font-bold text-5xl">
          A SPEAKER FOR EVERY NEED
        </h2>
        <p className="text-pink-300 text-2xl">
          Discover the perfect speaker for you
        </p>
      </div>
      <div className="grid grid-cols-3 w-2/3 self-center my-8 gap-8">
        {products?.map((product, i) => {
          return <ProductCard key={`product-${i}`} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
