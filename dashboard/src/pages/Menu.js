import React from "react";
import { MenuList } from '../data/data';
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function Menu() {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, p: 2 }}>
        {MenuList.map((menu) => (
          <Card key={menu.name} sx={{ maxWidth: 390, display: "flex", flexDirection: "column" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ minHeight: 400 }}
                image={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: "black", fontSize: 30 }}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", fontSize: 15 }}>
                  {menu.description}
                </Typography>
                <Typography sx={{ mt: 2, color: "green", fontSize: 20 }}>
                  {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Menu;
