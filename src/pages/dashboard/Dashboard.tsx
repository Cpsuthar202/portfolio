import CommonTable from "@/components/table/table/CommonTable";
import { Box, Button, Typography } from "@mui/material";
import { DashboardTableData } from "./utils";

const Dashboard = () => {
  return (
    <Box>
      Dashboard
      <CommonTable data={DashboardTableData} />
      <Typography variant="h1">h1 h1 h1</Typography>
      {/* Text Buttons */}
      <h3>Text Buttons</h3>
      <Button variant="text" color="primary">
        Text Primary
      </Button>
      <Button variant="text" color="secondary">
        Text Secondary
      </Button>
      <Button variant="text" color="error">
        Text Error
      </Button>
      <Button variant="text" color="warning">
        Text Warning
      </Button>
      <Button variant="text" color="info">
        Text Info
      </Button>
      <Button variant="text" color="success">
        Text Success
      </Button>
      {/* Outlined Buttons */}
      <h3>Outlined Buttons</h3>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined Secondary
      </Button>
      <Button variant="outlined" color="error">
        Outlined Error
      </Button>
      <Button variant="outlined" color="warning">
        Outlined Warning
      </Button>
      <Button variant="outlined" color="info">
        Outlined Info
      </Button>
      <Button variant="outlined" color="success">
        Outlined Success
      </Button>
      {/* Contained Buttons */}
      <h3>Contained Buttons</h3>
      <Button variant="contained" color="primary">
        Contained Primary
      </Button>
      <Button variant="contained" color="secondary">
        Contained Secondary
      </Button>
      <Button variant="contained" color="error">
        Contained Error
      </Button>
      <Button variant="contained" color="warning">
        Contained Warning
      </Button>
      <Button variant="contained" color="info">
        Contained Info
      </Button>
      <Button variant="contained" color="success">
        Contained Success
      </Button>
    </Box>
  );
};

export default Dashboard;
