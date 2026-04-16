import React, { useState } from "react";
import axios from "axios";
import { Paper, Typography, Button, TextField, Box } from "@mui/material";

function LoginPortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Charu ka backend endpoint check kar rahe hain
      const res = await axios.get("http://localhost:8080/api/standard/dashboard", {
        auth: { username, password }
      });

      if (res.status === 200) {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("pass", password);
        
        // Agar aman hai toh ADMIN, warna USER
        const role = (username === "riya") ? "ADMIN" : "USER";
        sessionStorage.setItem("access_level", role);

        if (role === "ADMIN") {
          window.location.href = "/workspace/admin";
        } else {
          window.location.href = "/workspace/user";
        }
      }
    } catch (err) {
      setError("Authentication Failed. Check credentials.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={10} sx={{ padding: 4, width: '100%', maxWidth: 450, borderRadius: 3 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="#1976d2">
            Analytics Portal
          </Typography>
          <Typography variant="body2" color="textSecondary">Sign in to access your workspace</Typography>
        </Box>

        {error && <div className="alert alert-danger text-center">{error}</div>}
        
        <TextField fullWidth label="User ID" variant="filled" margin="normal" onChange={(e) => setUsername(e.target.value)} />
        <TextField fullWidth label="Secret Key" type="password" variant="filled" margin="normal" onChange={(e) => setPassword(e.target.value)} />
        
        <Button fullWidth variant="contained" size="large" sx={{ mt: 3, py: 1.5, backgroundColor: '#1976d2' }} onClick={handleLogin}>
          Secure Login
        </Button>
      </Paper>
    </div>
  );
}

export default LoginPortal;