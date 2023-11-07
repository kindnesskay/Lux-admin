import { useEffect, useState } from "react";
import Product from "./product";
export default function Products() {
  const [productData, setProductData] = useState([
    {
      name: "jean",
      price: 2000,
      image_url: "/images/default.jpg",
      id: 1,
    },
  ]);
  async function fetchProducts() {
    fetch("/api/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.response);
      });
  }

  const [target, setTarget] = useState("");
  useState(() => {
    async function run() {
      await fetchProducts();
    }
    run();
  }, []);

  useEffect(() => {
    if (!target) return;
    console.log(target);

    async function run2() {
      fetch(`/api/deleteproduct?id=${target}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    run2();
  }, [target]);
  function handleDelete(id) {
    setTarget(Number(id));
    let filterd_item = productData.filter((item) => {
      return Number(item.id) != Number(id);
    });
    setProductData(filterd_item);
  }
  return (
    <>
      {productData.map((item) => {
        return (
          <Product
            name={item.name}
            price={item.price}
            image_url={item.image_url}
            key={item.id}
            handleRemove={() => handleDelete(item.id)}
          />
        );
      })}
    </>
  );
}
