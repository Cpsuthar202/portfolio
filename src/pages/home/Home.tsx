import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { setTitle } from "@/store/reducers/topBar/topBarSlice";
import CommonTable from "@/components/table/table/CommonTable";
import { homeTableData } from "./utils";
import { useAppDispatch } from "@/store/store";
import { mColor } from "@color";
import { ChatBgImg } from "@image";
import { chekedIcon } from "@svg";
const Home = () => {
  const dispatch = useAppDispatch();

  const [titleData, setTitleData] = useState<string>("");
  const send = () => {
    dispatch(setTitle(titleData));
    setTitleData("");
  };

  return (
    <Box>
      <Typography sx={{ color: mColor.secondaryLight }}>oiuytrewsdfyuio</Typography>
      Home
      <TextField
        margin="normal"
        // required
        fullWidth
        id="email"
        label="Title"
        autoFocus
        value={titleData}
        onChange={(e) => setTitleData(e.target.value)}
      />
      <Button onClick={send}>ok</Button>
      <CommonTable data={homeTableData} />
      <Box
        component="img"
        src={ChatBgImg}
        alt="Example Image"
        sx={{
          width: 300, // width of the image
          height: 200, // height of the image
          borderRadius: "8px", // optional: add border radius
          boxShadow: 3, // optional: add box shadow
        }}
      />
      <Box
        component="img"
        src={chekedIcon}
        alt="Example Image"
        sx={{
          width: 300, // width of the image
          height: 200, // height of the image
          borderRadius: "8px", // optional: add border radius
          boxShadow: 3, // optional: add box shadow
        }}
      />
    </Box>
  );
};

export default Home;
