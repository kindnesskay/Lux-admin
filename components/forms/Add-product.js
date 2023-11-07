import { useEffect, useState } from "react";
import styles from "./form.module.css";
import { Button, Input } from "@mui/material";

export default function NewProductForm() {
  const [newEntry, setNewEntry] = useState("");
  const [productName, setProductName] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [data, setData] = useState({
    name: "",
    price: "",
    imageUrl: "",
  });
  const handleAdd = () => {
    if (!productName || !productPrice) return;
    setNewEntry({ name: productName, price: productPrice });
    setProductName("");
    setProductImageUrl("");
    setProductPrice("");
  };
  useEffect(() => {
    if (!newEntry) return;
    const form_data = {
      name: newEntry.name,
      price: newEntry.price,
      image: productImageUrl,
    };
    setNewEntry("");
    async function run() {
      fetch("/api/get", {
        method: "POST",
        body: JSON.stringify(form_data),
        headers: { "Content-Type": "aplication/json" },
      })
        .then((res) => res.json())
        .then((res_data) => {
          console.log(res_data);
          // setData(res_data);
        });
    }
    run();
  }, [newEntry]);
  return (
    <form className={styles.form}>
      <label htmlFor="product_name">product name</label>
      <input
        type="text"
        name="product_name"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      <label htmlFor="product_price">product price</label>
      <input
        type="number"
        name="product_price"
        value={productPrice}
        onChange={(e) => {
          setProductPrice(e.target.value);
        }}
      />
      <label htmlFor="product_image_url">product image</label>
      <input
        type="file"
        name="product_image_url"
        onChange={(e) => {
          setProductImageUrl(e.target.value);
        }}
      />
      <input
        style={{ visibility: "hidden", position: "absolute" }}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </form>
  );
}
