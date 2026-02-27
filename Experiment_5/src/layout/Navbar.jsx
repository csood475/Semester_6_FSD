import { AppBar, Toolbar, Typography, Container, Button, Stack, Badge, IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const savedProjects = useSelector((state) => state.saved.projects);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: '900', textDecoration: 'none', color: 'text.primary' }} component={Link} to="/">
            Charu<span style={{color:'#0d9488'}}>.</span>
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            
            {/* THEME TOGGLE BUTTON - EXPLICITLY STYLED */}
            <IconButton 
              onClick={toggleTheme} 
              sx={{ color: mode === 'dark' ? '#f8fafc' : '#0f172a' }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <Button component={Link} to="/skills" sx={{ color: 'text.primary' }}>Skills</Button>
            <Button component={Link} to="/research" sx={{ color: 'text.primary' }}>Research</Button>
            <Button component={Link} to="/projects" sx={{ color: 'text.primary' }}>Projects</Button>
            
            <Button component={Link} to="/reports" sx={{ color: 'text.primary' }}>
              <Badge badgeContent={savedProjects.length} sx={{ '& .MuiBadge-badge': { backgroundColor: '#0d9488', color: 'white' } }}>
                Reports
              </Badge>
            </Button>
            
            <Button component={Link} to="/contact" variant="contained" sx={{ bgcolor: '#0d9488', color: 'white', borderRadius: '20px', px: 3, '&:hover': { bgcolor: '#0f766e' } }}>
              Contact Me
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;