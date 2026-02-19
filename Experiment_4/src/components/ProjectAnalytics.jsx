import { Card, CardContent, Typography, Chip, Box, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProjectAnalytics = ({ title, metric, tags }) => {
  const { state, dispatch } = useContext(AppContext);
  const isSaved = state.savedProjects.some((proj) => proj.title === title);

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: 'REMOVE_PROJECT', payload: title });
    } else {
      dispatch({ type: 'ADD_PROJECT', payload: { title, metric, tags } });
    }
  };

  return (
    <Card sx={{ border: '1px solid #e2e8f0', boxShadow: 'none', '&:hover': { boxShadow: 4 }, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
        <IconButton onClick={handleSave} sx={{ color: '#0d9488' }}>
          {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight="700" sx={{ pr: 4 }}>{title}</Typography>
        <Typography variant="h6" sx={{ color: '#0d9488', mb: 2 }}>{metric}</Typography>
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