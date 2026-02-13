import { Box, LinearProgress, Typography, Grid } from '@mui/material';

const SkillItem = ({ label, value }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography>{label}</Typography>
      <Typography>{value}%</Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 8,
        borderRadius: 5,
        bgcolor: '#e2e8f0',
        '& .MuiLinearProgress-bar': { bgcolor: '#0d9488' }
      }}
    />
  </Box>
);

const SkillDashboard = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <SkillItem label="Python & Django" value={85} />
      <SkillItem label="SQL" value={90} />
    </Grid>

    <Grid item xs={12} md={6}>
      <SkillItem label="Power BI & Tableau" value={80} />
      <SkillItem label="Data Analysis (EDA)" value={88} />
    </Grid>
  </Grid>
);

export default SkillDashboard;
