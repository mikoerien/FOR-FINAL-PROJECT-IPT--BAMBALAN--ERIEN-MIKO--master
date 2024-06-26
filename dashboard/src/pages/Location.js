import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Divider, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = () => {
  return (
    <Layout>
   <Box
      sx={{
        my:5,
        ml:10,
        padding: 2,
        "& h4": {
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: 2,
        },
        "& p": {
          marginBottom: 2,
          mt: 3,
         color: "black",
        },
      }}
   >
    <Typography variant="h4">Contact us</Typography>
    <Divider />
      <p>
      All the details are given below to contact us.
        </p>  
   </Box>
   <Box sx={{m:3,
     width:"600px",
      ml:10,
       "@media (max-width:600px)":{
        width:"300px",
       },
       }}
       >
    <TableContainer component={Paper}>
       <Table aria-label="contact-table">
        <TableHead>
          <TableRow>
           <TableCell sx={{bgcolor:"black", color:"gold"}}
           align="center"
           >Contact Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell>
            <LocationOnIcon  sx={{color:'blue', pt:1}}/> Del Pilar 3700 Bayombong, Philippines
          </TableCell>
          </TableRow> 
         <TableRow>
          </TableRow> 
          <TableRow>
          <TableCell>
            <EmailIcon sx={{color:'skyblue', pt:1}}/> https://www.facebook.com/profile.php?id=100083557623121
          </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
            <CallIcon sx={{color:'green', pt:1}}/> 0995 165 1534         
            </TableCell>
          </TableRow>
        </TableBody>
       </Table>
    </TableContainer>
   </Box>
    </Layout>
  );
};

export default Location;
