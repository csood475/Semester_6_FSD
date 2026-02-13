import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Paper, Typography } from '@mui/material';

const ResearchTimeline = () => (
  <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={2} sx={{ p: 2, bgcolor: '#ffffff' }}>
          <Typography variant="h6" component="span">Quantum-enhanced Federated Learning </Typography>
          <Typography color="textSecondary">Published at ODSIE</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" component="span">Privacy-Preserving ML Model </Typography>
          <Typography color="textSecondary">Published at SEMIT</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);