import { Container, Typography, Grid } from "@mui/material";
import ProjectAnalytics from "../components/ProjectAnalytics";

const Projects = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Typography variant="h4" className="section-title">
        Key Analytics Projects
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <ProjectAnalytics
            title="Library Management"
            metric="30% Error Reduction"
            tags={["Python", "Django"]}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ProjectAnalytics
            title="E-Commerce Dashboard"
            metric="32% Better Insights"
            tags={["Power BI", "Excel"]}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ProjectAnalytics
            title="Coffee Sales Analysis"
            metric="28% Reporting Accuracy"
            tags={["Excel", "Pivot"]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
