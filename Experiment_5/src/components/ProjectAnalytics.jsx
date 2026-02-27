import { Card, CardContent, Typography, Chip, Box, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { saveProject, removeProject } from '../redux/slices/savedSlice';

const ProjectAnalytics = ({ title, metric, tags }) => {
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state.saved.projects);
  const isSaved = savedProjects.some((proj) => proj.title === title);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeProject(title));
    } else {
      dispatch(saveProject({ title, metric, tags }));
    }
  };

  return (
    <Card sx={{ border: '1px solid', borderColor: 'divider', boxShadow: 'none', '&:hover': { boxShadow: 4 }, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
        <IconButton onClick={handleSave} color="primary">
          {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight="700" sx={{ pr: 4 }}>{title}</Typography>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>{metric}</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectAnalytics;