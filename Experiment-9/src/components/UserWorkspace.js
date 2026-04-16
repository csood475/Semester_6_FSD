import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box } from "@mui/material";

function UserWorkspace() {
  const role = sessionStorage.getItem("access_level");
  const user = sessionStorage.getItem("user");
  const pass = sessionStorage.getItem("pass");
  
  const [panelData, setPanelData] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  if (!role) window.location.href = "/";

  const loadStandardData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/standard/dashboard", {
        auth: { username: user, password: pass }
      });
      setPanelData(res.data.message);
      setAlertMsg("");
    } catch (err) {
      setAlertMsg("System Error: Cannot fetch data.");
    }
  };

  const testAdminBreach = async () => {
    try {
      await axios.get("http://localhost:8080/api/system/settings", {
        auth: { username: user, password: pass }
      });
    } catch (err) {
      setPanelData("");
      setAlertMsg("Security Breach Blocked! 403 Forbidden: You are not an Admin.");
    }
  };

  return (
    <div style={{ backgroundColor: '#eef2f6', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#2e7d32' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Data Hub | Standard Workspace</Typography>
          <Typography variant="body1" sx={{ mr: 3 }}>User: {user}</Typography>
          <Button color="inherit" variant="outlined" onClick={() => { sessionStorage.clear(); window.location.href="/"; }}>Sign Out</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>Workspace Controls</Typography>
          <Box mt={3} mb={3}>
            <Button variant="contained" color="success" sx={{ mr: 2 }} onClick={loadStandardData}>Load Analytics Data</Button>
            <Button variant="contained" color="warning" onClick={testAdminBreach}>Attempt System Settings</Button>
          </Box>

          {panelData && <div className="alert alert-success border-start border-success border-4">{panelData}</div>}
          {alertMsg && <div className="alert alert-danger border-start border-danger border-4">{alertMsg}</div>}
        </Paper>
      </Container>
    </div>
  );
}

export default UserWorkspace;