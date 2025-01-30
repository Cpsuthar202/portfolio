import { Box, Button, Collapse } from "@mui/material";
import { sidebarMenuList } from "./utils";
import { useSideBar } from "./SideBar.hook";
import { useState } from "react";
import { handleShareUrl, WebShare } from "@components/Container/index";

import pdf from "@/data/GWCCatalogue.pdf";
const SideBar = ({ onClickMenu }: { onClickMenu?: () => void }) => {
  const {
    // variable: { },
    methods: { handleNavigate },
  } = useSideBar();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box display={"flex"} flexDirection={"column"}>
        {sidebarMenuList.map((menu) => (
          <Box key={menu.id}>
            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                px: 3,
                my: "2px",
                // border: 1,
                // border: currentPathId === menu.id ? 1 : "none",
              }}
              onClick={() => {
                if (menu.subMenu) {
                  toggleDropdown(menu.id); // Toggles dropdown for this menu item
                } else {
                  handleNavigate(menu.link);
                  if (onClickMenu) onClickMenu(); // Closes the drawer
                }
              }}
            >
              {menu.label}
            </Button>
            {menu.subMenu && (
              <Collapse in={openDropdown === menu.id} timeout="auto" unmountOnExit>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {menu.subMenu.map((subMenu) => (
                    <Button
                      key={subMenu.id}
                      fullWidth
                      sx={{
                        justifyContent: "flex-start",
                        // border: 1,
                        px: 3,
                        my: "2px",
                        // border: currentPathId === subMenu.id ? 1 : "none",
                      }}
                      onClick={() => {
                        handleNavigate(subMenu.link);
                        if (onClickMenu) onClickMenu(); // Closes the drawer
                      }}
                    >
                      {subMenu.label}
                    </Button>
                  ))}
                </Box>
              </Collapse>
            )}
          </Box>
        ))}
        <Button
          fullWidth
          sx={{
            px: 3,
            my: "2px",
            justifyContent: "flex-start",
          }}
          onClick={() => handleShareUrl({ url: "https://www.instagram.com/goldwing_cooler/" })}
        >
          Instagram
        </Button>
        <Button
          fullWidth
          sx={{
            px: 3,
            my: "2px",
            justifyContent: "flex-start",
          }}
          href={pdf}
          download
        >
          Catalogue
        </Button>
        <WebShare text="Gold Wing Cooler" url="/">
          <Button
            fullWidth
            sx={{
              px: 3,
              my: "2px",
              justifyContent: "flex-start",
            }}
          >
            Share
          </Button>
        </WebShare>
      </Box>
    </Box>
  );
};

export default SideBar;
