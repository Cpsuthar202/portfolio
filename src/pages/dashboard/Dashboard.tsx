import CommonTable from "@/components/table/table/CommonTable";
import { Box } from "@mui/material";
import { DashboardTableData } from "./utils";

const Dashboard = () => {
  return (
    <Box>
      Dashboard
      <CommonTable data={DashboardTableData} />
    </Box>
  );
};

export default Dashboard;
