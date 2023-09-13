import { toast } from "react-toastify";

const ShowToast = (type: "success" | "error" | "info" | "warning", message: string) => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default ShowToast;