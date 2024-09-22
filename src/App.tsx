// import { Route, Routes } from "react-router-dom";
// import AuthRoutes from "./routes/AuthRoutes";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
// import UnprotectedRoutes from "./routes/UnprotectedRoutes";
// import TopBar from "./components/topBar/TopBar";
// import { Box } from "@mui/material";

// const App = () => {
//   return (
//     <>
//       <Box sx={{ overflow: "auto", height: "100vh" }}>
//         <TopBar />
//         <Routes>
//           <Route path="/*" element={<UnprotectedRoutes />} />
//           <Route path="/user/auth/*" element={<AuthRoutes />} />
//           <Route path="/user/*" element={<ProtectedRoutes />} />
//         </Routes>
//       </Box>
//     </>
//   );
// };

// export default App;

import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UnprotectedRoutes from "./routes/UnprotectedRoutes";
import TopBar from "./components/topBar/TopBar";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <TopBar />
        <Routes>
          <Route path="/*" element={<UnprotectedRoutes />} />
          <Route path="/user/auth/*" element={<AuthRoutes />} />
          <Route path="/user/*" element={<ProtectedRoutes />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
