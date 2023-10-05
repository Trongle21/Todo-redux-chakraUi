import React from "react";
import { Heading, Text, Stack, Input, Button, Flex } from "@chakra-ui/react";

const Header = () => {
  const gradientColor = "linear(to-r, #3884F6, #DA0D19)";
  return (
    <Flex
      maxW={"100vw"}
      background={"#0D0D0D"}
      height={200}
      direction={"column"}
    >
      <Heading
        height={200}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text bgGradient={gradientColor} bgClip="text" fontSize={60}>
          Todo
        </Text>
      </Heading>
      <Stack
        spacing={1}
        display={"flex"}
        justifyContent={"center"}
        mb={-5}
        flexDirection={"row"}
      >
        <Input
          background={"#262626"}
          placeholder="Nhập công việc ..."
          w={650}
        />
        <Button
          _hover={{ background: "#2E88B1" }}
          background="#1E6F9F"
          transition="background 0.3s ease"
          color={"#fff"}
        >
          add
        </Button>
      </Stack>
    </Flex>
  );
};

export default Header;
