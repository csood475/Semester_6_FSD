import { Container, Typography, TextField, Button, Stack } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Typography variant="h4" className="section-title">
        Contact Me
      </Typography>

      <Stack spacing={3} sx={{ mt: 4 }}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />

        <Button variant="contained" className="contact-btn">
          Send Message
        </Button>
      </Stack>
    </Container>
  );
};

export default Contact;
