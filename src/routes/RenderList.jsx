import React from "react";
import {
  Container,
  Text,
  Button,
  Flex,
  Card,
  CardBody,
  Checkbox,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
const RenderList = () => {
  return (
    <Container mt={4} height={400} overflowY={"auto"} maxW={"100%"} padding={0}>
      <Card mb={2} borderRadius={8} overflow={"hidden"} border={"none"}>
        <CardBody
          display={"flex"}
          justifyContent={"space-between"}
          bg={"#262626"}
        >
          <Flex gap={2}>
            <Checkbox />
            <Text color={"#fff"}>Công việc 1</Text>
          </Flex>
          <Button size={"xs"} backgroundColor={"#373737"}>
            <BsTrash />
          </Button>
        </CardBody>
      </Card>
      <Card mb={2} borderRadius={8} overflow={"hidden"}>
        <CardBody
          display={"flex"}
          justifyContent={"space-between"}
          bg={"#262626"}
        >
          <Flex gap={2}>
            <Checkbox />
            <Text>Công việc 2</Text>
          </Flex>
          <Button size={"xs"}>
            <BsTrash />
          </Button>
        </CardBody>
      </Card>
      <Card mb={2} borderRadius={8} overflow={"hidden"}>
        <CardBody
          display={"flex"}
          justifyContent={"space-between"}
          bg={"#262626"}
        >
          <Flex gap={2}>
            <Checkbox />
            <Text>Công việc 3</Text>
          </Flex>
          <Button size={"xs"}>
            <BsTrash />
          </Button>
        </CardBody>
      </Card>
      <Card mb={2} borderRadius={8} overflow={"hidden"}>
        <CardBody
          display={"flex"}
          justifyContent={"space-between"}
          bg={"#262626"}
        >
          <Flex gap={2}>
            <Checkbox />
            <Text>Công việc 4</Text>
          </Flex>
          <Button size={"xs"}>
            <BsTrash />
          </Button>
        </CardBody>
      </Card>
      <Card mb={4} borderRadius={8} overflow={"hidden"}>
        <CardBody
          display={"flex"}
          justifyContent={"space-between"}
          bg={"#262626"}
        >
          <Flex gap={2}>
            <Checkbox />
            <Text>Công việc 5</Text>
          </Flex>
          <Button size={"xs"}>
            <BsTrash />
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default RenderList;
