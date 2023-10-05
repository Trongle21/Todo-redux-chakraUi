import React from "react";
import {
  Container,
  Text,
  Stack,
  Button,
  RadioGroup,
  Radio,
  Flex,
} from "@chakra-ui/react";

const Filter = () => {
  return (
    <Container
      w={"fit-content"}
      padding={4}
      h={"fit-content"}
      background={"#262626"}
      position={"fixed"}
      borderRadius={10}
      overflow={"hidden"}
      top={274}
      left={14}
    >
      <Stack>
        <Stack>
          <Text fontWeight={700} fontSize={24}>
            Actions
          </Text>
          <Flex gap={2}>
            <Button background={"#191919"}>All Completed</Button>
            <Button background={"#191919"}>Clear completed</Button>
          </Flex>
        </Stack>
        <Stack mt={4}>
          <Text fontWeight={700} fontSize={24}>
            Filter by color
          </Text>
          <RadioGroup>
            <Stack direction={"column"} gap={1}>
              <Radio value="red" colorScheme={"red"} color={"red"}>
                <Text color={"red"} fontWeight={600}>
                  Red
                </Text>
              </Radio>
              <Radio value="gray" colorScheme={"gray"}>
                <Text color={"gray"} fontWeight={600}>
                  Gray
                </Text>
              </Radio>
              <Radio value="Blue" colorScheme={"blue"}>
                <Text color={"blue"} fontWeight={600}>
                  Blue
                </Text>
              </Radio>
              <Radio value="Purple" colorScheme={"purple"}>
                <Text color={"purple"} fontWeight={600}>
                  Purple
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Filter;
