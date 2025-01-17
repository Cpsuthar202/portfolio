import product from "@/data/products.json";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const TableData = () => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Model Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Dimension</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Motor</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Water Tank</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Fan</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Speed Control</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Oscillating Louvers</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Cooling Pad</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Noise Level</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Power Consumption</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Air Throw Distance</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Airflow Capacity</TableCell>
            <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>Inverter Compatible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((item) => (
            <TableRow key={item.model_name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>{item.model_name}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.dimension || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.motor || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.water_tank || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.fan || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.speed_control || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.oscillating_louvers || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.cooling_pad || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.noise_level || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.power_consumption || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.air_throw_distance || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.airflow_capacity || "---"}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>{item.inverter_compatible ? "true" : "false"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
