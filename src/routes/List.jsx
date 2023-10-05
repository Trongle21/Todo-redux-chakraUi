import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Flex,
} from "@chakra-ui/react";
import RenderList from "./RenderList";
import { useDispatch, useSelector } from "react-redux";

/**
 * @typedef ListProps
 *
 * @property {string} colorTodo
 *
 */

/**
 *
 * @param {ListProps} props
 * @returns
 */

const List = ({ colorTodo }) => {
  const todos = useSelector((state) => state.todos);
  const [stateTodo, setStateTodo] = useState("all");

  const dispatch = useDispatch();

  const handleDeleteAllTodo = () => {
    dispatch({ type: "todos/deleteAll" });
  };

  const handleChangeState = (value) => {
    setStateTodo(value);
  };

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
            <Radio value="all" onChange={() => handleChangeState("all")}>
              All
            </Radio>
            <Radio
              value="inCompleted"
              onChange={() => handleChangeState("inCompleted")}
            >
              InCompleted
            </Radio>
            <Radio
              value="completed"
              onChange={() => handleChangeState("completed")}
            >
              Completed
            </Radio>
          </Flex>
        </Stack>
      </RadioGroup>
      <Flex justifyContent={"space-between"} pt={6} color={"#fff"}>
        <Text>Bạn có {todos.length} công việc</Text>
        <Text
          cursor={"pointer"}
          _hover={{ color: "#BDADAD" }}
          onClick={handleDeleteAllTodo}
        >
          Xóa tất cả
        </Text>
      </Flex>
      <RenderList stateTodo={stateTodo} colorTodo={colorTodo} />
    </Container>
  );
};

List.propTypes = {
  colorTodo: PropTypes.string,
};

export default List;
