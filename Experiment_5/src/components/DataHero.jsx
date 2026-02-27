import { Box, Typography, Container, Button, Stack } from '@mui/material';

const DataHero = () => (
  <Box sx={{ bgcolor: '#f8fafc', color: '#1e293b', py: 12, borderBottom: '1px solid #e2e8f0' }}>
    <Container maxWidth="md">
      <Typography variant="overline" sx={{ color: '#0d9488', fontWeight: 'bold', letterSpacing: 2 }}>
        Computer Science Student & Data Analyst
      </Typography>
      <Typography variant="h2" fontWeight="800" sx={{ mt: 2, mb: 3 }}>
        Charu Sood
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 4, lineHeight: 1.6 }}>
        Detail-oriented student with hands-on experience in building analytical dashboards and transforming raw data into actionable insights. 
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{ bgcolor: '#0d9488', '&:hover': { bgcolor: '#0f766e' } }}>
          View Research 
        </Button>
        <Button variant="outlined" color="inherit">Contact [cite: 2]</Button>
      </Stack>
    </Container>
  </Box>
);

export default DataHero;