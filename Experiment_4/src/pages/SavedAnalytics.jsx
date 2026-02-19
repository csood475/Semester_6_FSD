import { useContext, useMemo } from "react";
import { Container, Typography, Grid, Box, Button, Paper } from "@mui/material";
import { AppContext } from "../context/AppContext";
import ProjectAnalytics from "../components/ProjectAnalytics";

const SavedAnalytics = () => {
  const { state, dispatch } = useContext(AppContext);

  const analyticsData = useMemo(() => {
    const totalSaved = state.savedProjects.length;
    const totalTags = state.savedProjects.reduce((acc, curr) => acc + curr.tags.length, 0);
    return { totalSaved, totalTags };
  }, [state.savedProjects]);

  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h4" className="section-title" sx={{ mb: 0 }}>
          Saved Analytics
        </Typography>
        <Button 
          variant="outlined" 
          onClick={() => dispatch({ type: 'CLEAR_PROJECTS' })}
          disabled={state.savedProjects.length === 0}
          sx={{ color: '#0d9488', borderColor: '#0d9488', '&:hover': { borderColor: '#0f766e', backgroundColor: 'rgba(13, 148, 136, 0.04)' } }}
        >
          Clear All
        </Button>
      </Box>

      <Paper elevation={0} sx={{ p: 3, mb: 4, border: '1px solid #e2e8f0', bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="h6" color="textSecondary">
          Portfolio Insights: You have bookmarked <strong style={{ color: '#0d9488' }}>{analyticsData.totalSaved}</strong> key projects containing <strong style={{ color: '#0d9488' }}>{analyticsData.totalTags}</strong> unique technical tools.
        </Typography>
      </Paper>

      {state.savedProjects.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 4, color: '#64748b' }}>
          No projects saved yet. Visit the Projects section to bookmark key insights.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {state.savedProjects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectAnalytics
                title={project.title}
                metric={project.metric}
                tags={project.tags}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SavedAnalytics;