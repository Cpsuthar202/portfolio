import toast, { Renderable } from "react-hot-toast";
import { ReportProblem, Info } from "@mui/icons-material";

type ToastOptions = {
  message: string;
  id?: string;
  loadingTime?: number;
  dismissTime?: number;
  color?: string;
  icon?: Renderable;
  duration?: number;
};

const cDuration = 1500;

// Success Toast
export const successToast = ({ message, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast.success(message, {
    id: toastId,
    duration: duration,
  });
};

// Error Toast
export const errorToast = ({ message, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast.error(message, {
    id: toastId,
    duration: duration,
  });
};

// Loading Success Toast
export const loadingSuccessToast = ({ message, loadingTime = 1000, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast.loading("Processing...", { id: toastId });

  setTimeout(() => {
    toast.success(message, { id: toastId, duration: duration });
  }, loadingTime);
};

// Loading Error Toast
export const loadingErrorToast = ({ message, loadingTime, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast.loading("Processing...", { id: toastId });

  setTimeout(() => {
    toast.error(message, { id: toastId, duration: duration });
  }, loadingTime);
};

// Warning Toast
export const warningToast = ({ message, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast(message, {
    id: toastId,
    duration: duration,
    icon: <ReportProblem />,
  });
};

// Info Toast
export const infoToast = ({ message, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast(message, {
    id: toastId,
    duration: duration,
    icon: <Info />,
  });
};

// Neutral Toast
export const neutralToast = ({ message, id, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast(message, {
    id: toastId,
    duration: duration,
  });
};

// Custom Themed Toast
export const customThemedToast = ({ message, id, color, icon, duration = cDuration }: ToastOptions): void => {
  const toastId = id || message;
  toast(message, {
    id: toastId,
    duration: duration,
    icon: icon,
    style: {
      color: color,
    },
  });
};
