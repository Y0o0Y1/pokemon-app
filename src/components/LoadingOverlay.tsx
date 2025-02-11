import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

const LoadingOverlay = () => {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 9999 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingOverlay;
