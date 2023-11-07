import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function CreateProduct({ onclick }) {
  return (
    <>
      <IconButton color="primary" onClick={onclick}>
        <Add />
      </IconButton>
    </>
  );
}
