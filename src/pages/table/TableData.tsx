import product from "@/data/products.json";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const TableData = () => {
  const headstyle = {
    fontWeight: 500,
    whiteSpace: "nowrap",
    fontSize: {
      xs: "10px", // Font size for extra-small screens (mobile)
      sm: "15px", // Font size for small screens (tablet)
    },
  };
  const bodystyle = {
    whiteSpace: "nowrap",
    fontWeight: 300,
    fontSize: {
      xs: "10px", // Font size for extra-small screens (mobile)
      sm: "15px", // Font size for small screens (tablet)
    },
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>Model Name</TableCell>
            <TableCell sx={headstyle}>Dimension</TableCell>
            <TableCell sx={headstyle}>Motor</TableCell>
            <TableCell sx={headstyle}>Water Tank</TableCell>
            <TableCell sx={headstyle}>Fan</TableCell>
            <TableCell sx={headstyle}>Speed Control</TableCell>
            <TableCell sx={headstyle}>Oscillating Louvers</TableCell>
            <TableCell sx={headstyle}>Cooling Pad</TableCell>
            <TableCell sx={headstyle}>Noise Level</TableCell>
            <TableCell sx={headstyle}>Power Consumption</TableCell>
            <TableCell sx={headstyle}>Air Throw Distance</TableCell>
            <TableCell sx={headstyle}>Airflow Capacity</TableCell>
            <TableCell sx={headstyle}>Inverter Compatible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((item) => (
            <TableRow key={item.model_name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={headstyle}>{item.model_name}</TableCell>
              <TableCell sx={bodystyle}>{item.dimension || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.motor || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.water_tank || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.fan || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.speed_control || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.oscillating_louvers || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.cooling_pad || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.noise_level || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.power_consumption || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.air_throw_distance || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.airflow_capacity || "---"}</TableCell>
              <TableCell sx={bodystyle}>{item.inverter_compatible ? "true" : "false"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
