import React from "react";
import Layout from "../components/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const Product = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" >
       <HomeIcon sx={{ mr: 0.5,fontSize:20 }} fontSize="inherit" />
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
     
    >
      Offers
    </Link>,
    <Typography key="3" color="text.primary">
      Intelligent Finite Elements in Structural mechanics
    </Typography>,
  ];
  return (
    <Layout>
      <div>
  
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
       
      </div>
    </Layout>
  );
};

export default Product;
