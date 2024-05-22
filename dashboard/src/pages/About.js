import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          backgroundColor: "whitesmoke",
          borderRadius: 2,
          boxShadow: 1,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          },
          "& p": {
            textAlign: "justify",
            mt: 2,
          },
          "@media (max-width:600px)": {
            mt: 0,
          },
        }}>
          <Typography variant="h4">
            Welcome to Per Os Resto
          </Typography>
          <Typography variant="body1">
          Per Os Resto is a vibrant culinary destination nestled in the heart of Nueva Vizcaya, Philippines. Our restaurant offers a unique dining experience, blending traditional Filipino flavors with modern culinary techniques.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
          At Per Os Resto, we are passionate about using locally-sourced ingredients to create dishes that showcase the rich and diverse culinary heritage of the Philippines. From classic favorites like adobo and sinigang to innovative creations inspired by global cuisine, our menu has something to satisfy every palate.
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
          Beyond the food, our restaurant provides a welcoming atmosphere where guests can relax and enjoy a memorable dining experience with friends and family. Whether you're looking for a casual lunch, a romantic dinner, or a special celebration, Per Os Resto is the perfect destination for food lovers in Nueva Vizcaya.
          </Typography>
          <Typography variant="body1" sx={{ mt: 4 }}>
          Come join us and embark on a culinary journey that celebrates the flavors of the Philippines at Per Os Resto."
          </Typography>
          <Typography variant="body1" sx={{ mt: 5 }}>
          If you're looking for more specific information about Per Os Resto, I'd recommend checking out our social media pages for the most up-to-date details.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
