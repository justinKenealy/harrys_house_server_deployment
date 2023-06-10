import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  const UrlBasepath = 'https://github.com/justinKenealy/harrys_house_server_deployment/blob/main/public'

  return (
    <div id="homepage">
      <div id="homepageText">
        <img
          id="heroImage"
          alt="hero image"
          src={`${UrlBasepath}/assets/homepage/landingPageBackground.jpg` + '?raw=true'}
        />
        <Heading>Welcome to Harry's House Pet Store</Heading>
        <Text margin="40px 0" fontSize="2xl">
          We offer a wide range of pet supplies and accessories for your best
          friends no matter their shape or size. Head to our store to check out
          our products!
        </Text>
        <Link to="/store">
          <Button colorScheme="blue">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
