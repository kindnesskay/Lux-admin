import { Box, Button } from "@mui/material";
import SignIn from "../components/forms/sign-In";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box>
        <h1>Continue to sign in page</h1>
        <Link href={"/login"}>
          <Button variant="contained" color="primary">
            Login in
          </Button>
        </Link>
        <h1>Continue to dashboard</h1>
        <Link href={"/dashboard"}>
          <Button variant="contained" color="primary">
            Dashboard
          </Button>
        </Link>
      </Box>
    </>
  );
}
