import React, { useState } from "react";
import axios from "axios";
import { Paper, Typography, Button, TextField, Box } from "@mui/material";

function AuthPortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticate = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", {
        username,
        password
      });

      // Charu ke backend mein humne key ka naam 'accessToken' rakha tha
      if (res.data.accessToken) {
        sessionStorage.setItem("jwt_token", res.data.accessToken);
        window.location.href = "/hub";
      }
    } catch (err) {
      setError("Access Denied: Invalid Credentials");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eceff1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={6} sx={{ padding: 5, width: '100%', maxWidth: 400, borderRadius: 3 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="#006064">
            Data Hub Auth
          </Typography>
          <Typography variant="body2" color="textSecondary">JWT Secured Portal</Typography>
        </Box>

        {error && <div className="alert alert-danger text-center">{error}</div>}
        
        <TextField 
          fullWidth label="Analytics ID" variant="standard" margin="normal" 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <TextField 
          fullWidth label="Secret Passkey" type="password" variant="standard" margin="normal" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <Button 
          fullWidth variant="contained" size="large" sx={{ mt: 4, backgroundColor: '#00838f' }} 
          onClick={authenticate}
        >
          Verify & Enter
        </Button>
      </Paper>
    </div>
  );
}

export default AuthPortal;