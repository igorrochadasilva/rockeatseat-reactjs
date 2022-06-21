import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Separator from "../components/Separator";
import TravelTypes from "../components/TravelTypes";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  );
};

export default Home;
