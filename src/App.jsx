import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  AppBar,
  CardContent,
  CssBaseline,
  Toolbar,
  Container,
  Box,
  Button,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "@fontsource/roboto/400.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon sx={{ mr: 2 }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundColor: "background.paper", py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h6" align="justify" color="textSecondary" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias labore quae, quidem eligendi tempora ut exercitationem in sit, beatae illo cupiditate, nemo quia at sunt adipisci perspiciatis iste fugit fuga?
          </Typography>

          <Box display="flex" justifyContent="center" alignItems="center" sx={{ gap: 2 }}>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Box>
        </Container>
      </Box>

      {/* Cards Section */}
      <Container maxWidth="md">
        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {cards.map((card) => (
            <Card key={card} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image="random.jpg" 
                alt="Random Image"
                sx={{ height: 150 }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Card {card}
                </Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
      
      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: "background.default", py: 3, mt: 4, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="body1">© 2025 Photo Album. All Rights Reserved.</Typography>
          <Typography variant="body2" color="textSecondary">
            Built with React & Material UI
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default App;
