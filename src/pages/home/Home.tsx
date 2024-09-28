import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { setTitle } from "@/store/reducers/topBar/topBarSlice";
import CommonTable from "@/components/table/table/CommonTable";
import { homeTableData } from "./utils";
import { useAppDispatch } from "@/store/store";
import { mColor } from "@color";
import { ChatBgImg } from "@image";
import { chekedIcon } from "@svg";
import Image from "@/components/image/Image";
import { getInitialTheme } from "@/utils/localStorage";
const Home = () => {
  const dispatch = useAppDispatch();

  const [titleData, setTitleData] = useState<string>("");
  const send = () => {
    dispatch(setTitle(titleData));
    setTitleData("");
  };

  const backgroundImage = getInitialTheme() ? ChatBgImg : chekedIcon;

  return (
    <Box sx={{ overflow: "auto" }}>
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
      <Image src={backgroundImage} alt="Chat background" sx={{ border: 4 }} />
      <CommonTable data={homeTableData} />
    </Box>
  );
};

export default Home;
