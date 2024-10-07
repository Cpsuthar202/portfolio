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
import { ViewCard } from "@/components/Container";
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
      <ViewCard button={true}>
        <h1>sdfghjkl;</h1>
        <TextField margin="normal" fullWidth id="email" label="Title" autoFocus value={titleData} onChange={(e) => setTitleData(e.target.value)} />
      </ViewCard>
      <ViewCard button={false}>
        <h1>sdfghjkl;</h1>
        <TextField margin="normal" fullWidth id="email" label="Title" autoFocus value={titleData} onChange={(e) => setTitleData(e.target.value)} />
      </ViewCard>
      <Typography sx={{ color: mColor.secondaryLight }}>oiuytrewsdfyuio</Typography>
      Home
      <Button onClick={send}>ok</Button>
      <Image src={backgroundImage} alt="Chat background" sx={{ border: 4 }} />
      <CommonTable data={homeTableData} />
    </Box>
  );
};

export default Home;
