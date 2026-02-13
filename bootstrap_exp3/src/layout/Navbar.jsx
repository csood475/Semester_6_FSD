import { AppBar, Toolbar, Typography, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0} className="custom-navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography variant="h5" sx={{ flexGrow: 1, color: '#0f172a', fontWeight: '900' }}>
            Charu<span style={{color:'#0d9488'}}>.</span>
          </Typography>

          <Stack direction="row" spacing={3}>
            <Button component={Link} to="/skills">Skills</Button>
            <Button component={Link} to="/research">Research</Button>
            <Button component={Link} to="/projects">Projects</Button>
            <Button component={Link} to="/contact" variant="contained" className="contact-btn">
              Contact Me
            </Button>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
