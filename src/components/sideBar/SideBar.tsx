import { Avatar, Box, Button, Typography } from "@mui/material";
import { sidebarMenuList } from "./utils";
import { useSideBar } from "./SideBar.hook";

const SideBar = ({ onClickMenu }: { onClickMenu?: () => void }) => {
  const {
    // variable: {},
    methods: { handleNavigate },
  } = useSideBar();

  return (
    <Box sx={{ p: 3 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, m: "auto" }} variant="rounded" />
      <Typography variant="subtitle2">Remy Sharp </Typography>
      <Box display={"flex"} flexDirection={"column"}>
        {sidebarMenuList.map((menu) => (
          <Button
            key={menu.id}
            sx={{ justifyContent: "flex-start", px: 3 }}
            onClick={() => {
              handleNavigate(menu.link);
              if (onClickMenu) onClickMenu(); // Closes the drawer
            }}
          >
            {menu.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
