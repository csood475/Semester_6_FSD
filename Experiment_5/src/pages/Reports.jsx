import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Grid, Box, Button, Paper, Divider } from "@mui/material";
import { clearSaved } from "../redux/slices/savedSlice";
import ProjectAnalytics from "../components/ProjectAnalytics";

const Reports = () => {
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state.saved.projects);

  const reportData = useMemo(() => {
    const totalProjects = savedProjects.length;
    let allTags = [];
    savedProjects.forEach(proj => {
      allTags = [...allTags, ...proj.tags];
    });
    
    const uniqueTools = [...new Set(allTags)].length;
    const isPythonHeavy = allTags.filter(tag => tag.toLowerCase().includes("python")).length >= 2;

    return { totalProjects, uniqueTools, isPythonHeavy };
  }, [savedProjects]);

  return (
    <Container maxWidth="xl" sx={{ py: 10, minHeight: '80vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">Data Insights Report</Typography>
        <Button variant="outlined" color="error" onClick={() => dispatch(clearSaved())} disabled={savedProjects.length === 0}>
          Clear Data
        </Button>
      </Box>

      <Paper sx={{ p: 4, mb: 6, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h3" color="primary" fontWeight="bold">{reportData.totalProjects}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Analyzed Datasets</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" color="primary" fontWeight="bold">{reportData.uniqueTools}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Distinct Tools Used</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" color="primary" fontWeight="bold">{reportData.isPythonHeavy ? "High" : "Standard"}</Typography>
            <Typography variant="subtitle1" color="textSecondary">Python Utilization Focus</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ mb: 4 }} />
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Bookmarked Projects</Typography>

      {savedProjects.length === 0 ? (
        <Typography variant="body1" color="textSecondary">No data sources bookmarked for reporting yet.</Typography>
      ) : (
        <Grid container spacing={4}>
          {savedProjects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectAnalytics title={project.title} metric={project.metric} tags={project.tags} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Reports;