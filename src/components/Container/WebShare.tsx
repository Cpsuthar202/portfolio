import { APP_HOST } from "@/utils/constants";
import { ReactNode } from "react";
import { RWebShare } from "react-web-share";

interface IWebShare {
  children: ReactNode; // Define the type for children
  text: string | undefined;
  url: string;
}
export const WebShare: React.FC<IWebShare> = ({ url, text, children }) => {
  return (
    <RWebShare
      data={{
        text: text,
        url: `${APP_HOST}${url}`,
        title: "E-Commerce",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      {children}
    </RWebShare>
  );
};
