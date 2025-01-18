import { APP_HOST } from "@/utils/constants";
import { ReactNode } from "react";
import { RWebShare } from "react-web-share";

interface IWebShare {
  children: ReactNode; // Define the type for children
  text: string;
  url: string;
}
export const WebShare: React.FC<IWebShare> = ({ url, text, children }) => {
  return (
    <RWebShare
      data={{
        text: text,
        url: `${APP_HOST}${url}`,
        title: "Gold Wing Cooler",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      {children}
    </RWebShare>
  );
};

export const handleShareUrl = ({ url }: { url?: string }) => {
  window.open(url, "_blank");
};
