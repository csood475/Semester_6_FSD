import { Container, Typography, Box } from "@mui/material";
import ResearchTimeline from "../components/ResearchTimeline";

const Research = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Typography variant="h4" className="section-title">
        Research Publications
      </Typography>

      <Box sx={{ mt: 4 }}>
        <ResearchTimeline />
      </Box>
    </Container>
  );
};

export default Research;
