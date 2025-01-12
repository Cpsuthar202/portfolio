import { errorToast, successToast } from "../toastify/Toast";

export const textCopy = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      successToast({ message: "Copied successfully!", id: text });
    })
    .catch((error) => {
      console.error("error", error);

      errorToast({ message: "Failed to copy  Please try again.", id: text });
    });
};
