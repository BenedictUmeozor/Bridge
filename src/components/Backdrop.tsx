import { Backdrop } from "@mui/material";
import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <FadeLoader color={"#18298d"} />
    </Backdrop>
  );
}
