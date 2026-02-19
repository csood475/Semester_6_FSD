import { Container, Typography, Box } from "@mui/material";
import SkillDashboard from "../components/SkillDashboard";

const Skills = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Typography variant="h4" className="section-title">
        Technical Proficiency
      </Typography>

      <Box sx={{ mt: 4 }}>
        <SkillDashboard />
      </Box>
    </Container>
  );
};

export default Skills;
