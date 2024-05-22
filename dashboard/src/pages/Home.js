import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Dialog, DialogContent } from "@mui/material";
import Banner from '../images/banner.jpg';
import Customer1 from '../images/A1.jpg';
import Customer2 from '../images/A2.jpg';
import Customer3 from '../images/A3.jpg';
import Customer4 from '../images/A4.jpg';
import Customer5 from '../images/A5.jpg'; 
import Customer6 from '../images/A6.jpg';
import Customer7 from '../images/A7.jpg';
import Customer8 from '../images/A8.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Layout>
      <Box
        className="home"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <Box className="headerContainer">
          <Box className="textBox">
            <Typography variant="h1">
              Per Os Resto
            </Typography>
            <Typography variant="body1">
              Best Food In Nueva Vizcaya
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={8}>
        <Typography variant="h2" align="center" mb={4} color="Goldenrod">Happy Customers</Typography>
        <Grid container spacing={3} justifyContent="center">
          {[Customer1, Customer2, Customer3, Customer4, Customer5, Customer6, Customer7, Customer8].map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card onClick={() => handleImageClick(image)}>
                <CardMedia component="img" height="200" image={image} alt={`Customer ${index + 1}`} className="customerImage" />
                <CardContent>
                  <Typography variant="body2" align="center">{}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <img src={selectedImage} alt="Full size" style={{ maxWidth: "100%" }} />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Home;
