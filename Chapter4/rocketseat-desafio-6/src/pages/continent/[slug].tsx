import { Flex } from "@chakra-ui/react";
import BioInfo from "../../components/BioInfo";
import Cities from "../../components/Cities";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <BioInfo />
        <Cities />
      </Flex>
    </Flex>
  );
}
