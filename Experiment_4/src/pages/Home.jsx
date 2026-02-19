import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" className="teal-text">
              Computer Science & Data Analytics
            </Typography>

            <Typography variant="h2" className="hero-title">
              Turning Raw Data into <br />
              <span className="highlight">Strategic Insights.</span>
            </Typography>

            <Typography className="hero-subtext">
              Detail-oriented CS student specializing in Python, SQL and BI tools.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button component={Link} to="/projects" variant="contained" className="contact-btn">
                Explore Work
              </Button>

              <Button component={Link} to="/contact">
                Contact Me
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
