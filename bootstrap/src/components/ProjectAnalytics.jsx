import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const ProjectAnalytics = ({ title, metric, tags }) => (
  <Card sx={{ border: '1px solid #e2e8f0', boxShadow: 'none', '&:hover': { boxShadow: 4 } }}>
    <CardContent>
      <Typography variant="h5" gutterBottom fontWeight="700">{title}</Typography>
      <Typography variant="h6" sx={{ color: '#0d9488', mb: 2 }}>{metric}</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {tags.map(tag => <Chip key={tag} label={tag} size="small" variant="outlined" />)}
      </Box>
    </CardContent>
  </Card>
);

// usage: 
// <ProjectAnalytics title="Library Management" metric="30% Reduction in Discrepancies" tags={['Python', 'Django']} /> [cite: 17]
// <ProjectAnalytics title="E-commerce Dashboard" metric="32% Insight Improvement" tags={['Power BI', 'Excel']} /> [cite: 25]