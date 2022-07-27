import {
  Flex,
  Heading,
  Link,
  Icon,
  Text,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import {
  FiHome,
  FiUpload,
  FiChevronsRight,
  FiChevronsLeft,
  FiMeh,
  FiHeart,
} from "react-icons/fi";
import IconLink from "./components/iconLink";
import ExerciseTable from "./components/table";

export default function dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Flex flexDir="column" justifyContent="space-between">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Gym.
            </Heading>
            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <IconLink iconName={FiHome} text="Home"></IconLink>
              <IconLink iconName={FiUpload} text="Upload"></IconLink>
              <Divider></Divider>
              <IconLink
                iconName={FiChevronsRight}
                text="Push"
                mt={5}
              ></IconLink>
              <IconLink iconName={FiChevronsLeft} text="Pull"></IconLink>
              <IconLink iconName={FiMeh} text="Legs"></IconLink>
              <IconLink iconName={FiHeart} text="Cardio"></IconLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Column 2 */}
      <Flex w="80%" p="2%" flexDir="column" overflow="auto">
        <Flex>
          <Flex w="50%" mr={30}>
            <ExerciseTable exerciseDay="Push"></ExerciseTable>
          </Flex>
          <Flex w="50%">
            <ExerciseTable exerciseDay="Pull"></ExerciseTable>
          </Flex>
        </Flex>
        <Flex mt={15}>
          <Flex w="50%" mr={30} flexDir="column">
            <ExerciseTable exerciseDay="Legs"></ExerciseTable>
          </Flex>
          <Flex w="50%" flexDir="column">
            <ExerciseTable exerciseDay="Cardio"></ExerciseTable>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
