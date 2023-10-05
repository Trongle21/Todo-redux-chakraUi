import React from "react";
import {
  Container,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Flex,
} from "@chakra-ui/react";
import RenderList from "./RenderList";

const List = () => {
  return (
    <Container maxW={748} background={"#191919"} pt={6} zIndex={1}>
      <RadioGroup maxW={810} pt={8} defaultValue="all">
        <Stack>
          <Flex
            direction={"row"}
            justifyContent={"end"}
            gap={10}
            color={"#fff"}
          >
            <Radio value="all">All</Radio>
            <Radio value="InCompleted">InCompleted</Radio>
            <Radio value="Completed">Completed</Radio>
          </Flex>
        </Stack>
      </RadioGroup>
      <Flex justifyContent={"space-between"} pt={6} color={"#fff"}>
        <Text>Bạn có 5 công việc</Text>
        <Text cursor={"pointer"} _hover={{ color: "#BDADAD" }}>
          Xóa tất cả
        </Text>
      </Flex>
      <RenderList />
    </Container>
  );
};

export default List;
