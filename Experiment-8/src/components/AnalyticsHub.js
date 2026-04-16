import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box } from "@mui/material";

function AnalyticsHub() {
  const [serverData, setServerData] = useState("");
  const token = sessionStorage.getItem("jwt_token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  const fetchSecureData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setServerData(res.data);
    } catch (error) {
      setServerData("Session Expired or Invalid JWT Token.");
    }
  };

  const terminateSession = async () => {
    try {
      // Optional: Calling backend logout if required, otherwise just clear session
      await axios.post("http://localhost:8080/logout");
    } catch (e) { console.log(e); }
    
    sessionStorage.removeItem("jwt_token");
    window.location.href = "/";
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#006064' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Analytics Data Hub
          </Typography>
          <Button color="inherit" onClick={terminateSession}>End Session</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Secure Workspace
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Your connection is secured with JSON Web Tokens.
          </Typography>
          
          <Box mb={3}>
            <Button variant="contained" sx={{ backgroundColor: '#00838f' }} onClick={fetchSecureData}>
              Retrieve Server Data
            </Button>
          </Box>

          {serverData && (
            <div className="alert alert-info border-start border-info border-4 mt-4 text-start">
              <strong>Backend Response: </strong> {serverData}
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default AnalyticsHub;