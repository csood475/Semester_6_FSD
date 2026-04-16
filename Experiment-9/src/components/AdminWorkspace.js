import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box } from "@mui/material";

function AdminWorkspace() {
  const role = sessionStorage.getItem("access_level");
  const user = sessionStorage.getItem("user");
  const pass = sessionStorage.getItem("pass");
  
  const [systemData, setSystemData] = useState("");

  if (role !== "ADMIN") {
    alert("CRITICAL: Unauthorized Access Logged.");
    window.location.href = "/";
  }

  const loadSystemConfig = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/system/settings", {
        auth: { username: user, password: pass }
      });
      setSystemData(res.data.message);
    } catch (err) {
      setSystemData("Failed to connect to core system.");
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#d32f2f' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>System Core | Admin Override</Typography>
          <Typography variant="body1" sx={{ mr: 3 }}>SuperAdmin: {user}</Typography>
          <Button color="inherit" variant="outlined" onClick={() => { sessionStorage.clear(); window.location.href="/"; }}>Terminate Session</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, backgroundColor: '#2d2d2d', color: 'white', borderRadius: 2 }}>
          <Typography variant="h5" color="error" gutterBottom>Elevated Controls</Typography>
          <Box mt={3} mb={3}>
            <Button variant="contained" color="error" size="large" onClick={loadSystemConfig}>Initialize System Settings</Button>
          </Box>

          {systemData && <div className="alert alert-dark text-danger border-danger mt-3">{systemData}</div>}
        </Paper>
      </Container>
    </div>
  );
}

export default AdminWorkspace;