import React from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Box, 
  Button, Card, CardContent, Chip, Stack, LinearProgress 
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for Research
import './App.css';

// --- Sub-Component: Skill Bar (Improved) ---
const SkillBar = ({ label, value }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="subtitle1" fontWeight="bold" color="#334155">{label}</Typography>
      <Typography variant="subtitle1" fontWeight="bold" color="primary.main">{value}%</Typography>
    </Box>
    <LinearProgress variant="determinate" value={value} className="skill-progress" />
  </Box>
);

function App() {
  return (
    <div className="portfolio-root">
      {/* Navigation */}
      <AppBar position="sticky" elevation={0} className="custom-navbar">
        {/* maxWidth="xl" use kiya taki navbar content fail jaye */}
        <Container maxWidth="xl"> 
          <Toolbar disableGutters>
            <Typography variant="h5" sx={{ flexGrow: 1, color: '#0f172a', fontWeight: '900', letterSpacing: '-0.5px' }}>
              Charu<span style={{color:'#0d9488'}}>.</span>
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit" href="#skills" sx={{fontWeight: 600}}>Skills</Button>
                <Button color="inherit" href="#research" sx={{fontWeight: 600}}>Research</Button>
                <Button color="inherit" href="#projects" sx={{fontWeight: 600}}>Projects</Button>
                <Button variant="contained" className="contact-btn" startIcon={<DescriptionIcon />}>View Resume</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero-section">
        {/* maxWidth="xl" yahan bhi use kiya wide look ke liye */}
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8} lg={7}>
              <Typography variant="overline" className="teal-text">Computer Science & Data Analytics</Typography>
              <Typography variant="h1" className="hero-title">
                Turning Raw Data into <br/> <span className="highlight">Strategic Insights.</span>
              </Typography>
              <Typography variant="body1" className="hero-subtext">
                Detail-oriented Computer Science student at Chandigarh University specializing in Python, SQL, and Power BI.  Passionate about building privacy-preserving ML models and analytical dashboards.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                <Button variant="contained" size="large" className="contact-btn">Explore My Work</Button>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="caption" fontWeight="bold" color="text.secondary">UID: 23BAI70044</Typography>
                    <Typography variant="caption" color="text.secondary">Section: 23AML-7A</Typography>
                </Box>
              </Stack>
            </Grid>
            {/* Optional: Right side image placeholder agar chahiye ho */}
             <Grid item md={4} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                {/* Yahan koi illustration aa sakti hai future mein */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills & Research Section - Wide Container */}
      <Container maxWidth="xl" sx={{ py: 10 }} id="skills">
        <Grid container spacing={10}>
          {/* Skills Column */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" className="section-title">Technical Proficiency</Typography>
            <Box sx={{ mt: 4 }}>
                <SkillBar label="SQL & Data Cleaning" value={92} />
                <SkillBar label="Python (Django & Pandas)" value={88} />
                <SkillBar label="Power BI & Tableau Viz" value={90} />
                <SkillBar label="Machine Learning Concepts" value={78} />
                <SkillBar label="Statistical Analysis (EDA)" value={85} />
            </Box>
          </Grid>
          
          {/* Research Column */}
          <Grid item xs={12} md={7} id="research">
            <Typography variant="h4" className="section-title">Research Publications & Papers</Typography>
            <Box sx={{ mt: 4 }}>
            <Timeline position="right" sx={{ p: 0 }}>
              <TimelineItem>
                <TimelineSeparator><TimelineDot sx={{ bgcolor: '#0d9488' }} /><TimelineConnector /></TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 3 }}>
                  <Typography variant="h6" fontWeight="bold">Quantum-Enhanced Federated Learning</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{mb:1}}>Published virtually at <strong>ODSIE Conference</strong></Typography>
                  <Chip label="Quantum Computing" size="small" sx={{mr:1}}/> <Chip label="Federated Learning" size="small"/>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator><TimelineDot sx={{ bgcolor: '#64748b' }} /><TimelineConnector /></TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 3 }}>
                  <Typography variant="h6" fontWeight="bold">Privacy-Preserving ML Model</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{mb:1}}>Presented at <strong>SEMIT</strong> for Student Performance Prediction</Typography>
                  <Chip label="Machine Learning" size="small" sx={{mr:1}}/> <Chip label="Privacy" size="small"/>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                 <TimelineSeparator><TimelineDot sx={{ bgcolor: '#64748b' }} /></TimelineSeparator>
                 <TimelineContent sx={{ py: '12px', px: 3 }}>
                  <Typography variant="h6" fontWeight="bold">Review Paper on ICDPN</Typography>
                  <Typography variant="body2" color="textSecondary">Submitted review on recent advancements in data privacy networks.</Typography>
                 </TimelineContent>
              </TimelineItem>
            </Timeline>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Projects Grid - Full Width Background */}
      <Box sx={{ bgcolor: '#f1f5f9', py: 10 }} id="projects">
        <Container maxWidth="xl">
          <Typography variant="h4" className="section-title" textAlign="center" sx={{ mb: 6 }}>Key Analytics Projects</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} d-flex alignItems="stretch">
              <Card className="project-card" elevation={0}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="overline" color="primary" fontWeight="bold">Django App</Typography>
                  <Typography variant="h5" fontWeight="800" gutterBottom>Library Management System</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ my: 3 }}>
                    Developed a full-stack application to automate book tracking, reducing manual entry discrepancies by <strong>~30%</strong>.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Python" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}} /> 
                    <Chip label="Django" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}} />
                    <Chip label="SQLite" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}}/>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} d-flex alignItems="stretch">
              <Card className="project-card" elevation={0}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="overline" color="primary" fontWeight="bold">Data Viz</Typography>
                  <Typography variant="h5" fontWeight="800" gutterBottom>E-commerce Analytics Dashboard</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ my: 3 }}>
                    Transformed raw sales data into interactive Power BI dashboards, improving actionable insight generation by <strong>32%</strong>.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                   <Chip label="Power BI" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}} /> 
                   <Chip label="Power Query" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} d-flex alignItems="stretch">
              <Card className="project-card" elevation={0}>
                <CardContent sx={{ p: 4 }}>
                   <Typography variant="overline" color="primary" fontWeight="bold">Excel Analysis</Typography>
                  <Typography variant="h5" fontWeight="800" gutterBottom>Coffee Shop Sales Analysis</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ my: 3 }}>
                    Utilized advanced Excel functions and Pivot Tables to analyze sales trends, boosting data reporting accuracy by <strong>28%</strong>.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Advanced Excel" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}} /> 
                    <Chip label="Pivot Tables" size="small" sx={{bgcolor:'#e2f2f1', color:'#0d9488', fontWeight:'bold'}}/>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <footer className="footer">
        <Typography variant="h6" fontWeight="bold" gutterBottom>Charu Sood</Typography>
        <Typography variant="body2" color="text.secondary">Computer Science Undergrad (AI & ML) at Chandigarh University</Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button size="small" color="inherit">LinkedIn</Button>
            <Button size="small" color="inherit">GitHub</Button>
            <Button size="small" color="inherit">Email</Button>
        </Stack>
        <Typography variant="caption" display="block" sx={{ mt: 4, color: '#94a3b8' }}>
          © 2026. Built with React & Material UI.
        </Typography>
      </footer>
    </div>
  );
}

export default App;