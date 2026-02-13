import { Typography, Stack, Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="h6" fontWeight="bold">Charu Sood</Typography>

      <Typography variant="body2" color="text.secondary">
        Computer Science Undergrad (AI & ML)
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Button size="small">LinkedIn</Button>
        <Button size="small">GitHub</Button>
        <Button size="small">Email</Button>
      </Stack>

      <Typography variant="caption" sx={{ mt: 4 }}>
        © 2026. Built with React & MUI.
      </Typography>
    </footer>
  );
};

export default Footer;
