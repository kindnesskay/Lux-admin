import Image from "next/image";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import styles from "./product.module.css";
export default function Product({ image_url, name, price, id, handleRemove }) {
  return (
    <div className={styles.cart_product}>
      <Image
        loading="lazy"
        src={image_url}
        alt="image name"
        height={400}
        width={400}
        className={styles.cart_product_image}
      />

      <div className={styles.cart_product_details}>
        <p>{name}</p>
        <p>
          <span>$</span>
          {price}
        </p>
      </div>
      <Button variant="outlined" color="error" onClick={handleRemove}>
        <Delete />
      </Button>
    </div>
  );
}
