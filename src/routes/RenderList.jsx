import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Text,
  Button,
  Flex,
  Card,
  CardBody,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

/**
 * @typedef RenderListProps
 *
 * @property {string} stateTodo
 * @property {string} colorTodo
 *
 */

/**
 *
 * @param {RenderListProps} props
 * @returns
 */

const RenderList = ({ stateTodo, colorTodo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    const filerStateTodo = state.todos.filter((todo) => {
      if (stateTodo === "completed") {
        return todo.completed;
      } else if (stateTodo === "inCompleted") {
        return !todo.completed;
      } else {
        return true;
      }
    });
    const filerColorTodo = filerStateTodo.filter((todo) => {
      if (colorTodo === "red") {
        return todo.color === "red";
      } else if (colorTodo === "gray") {
        return todo.color === "gray";
      } else if (colorTodo === "blue") {
        return todo.color === "blue";
      } else if (colorTodo === "purple") {
        return todo.color === "purple";
      } else {
        return true;
      }
    });
    return filerColorTodo;
  });

  const handleChangeStateTodo = (id) => {
    dispatch({
      type: "todos/changeState",
      payload: { id: id },
    });
  };

  const handleChangeColor = (id, color) => {
    dispatch({ type: "todos/changeColor", payload: { id: id, color: color } });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "todos/deleteTodo", payload: { id: id } });
  };

  return (
    <Container mt={4} height={400} overflowY={"auto"} maxW={"100%"} padding={0}>
      {todos &&
        todos.map((todo, index) => (
          <Card
            key={index}
            mb={2}
            borderRadius={8}
            overflow={"hidden"}
            border={"none"}
          >
            <CardBody
              display={"flex"}
              justifyContent={"space-between"}
              bg={"#262626"}
            >
              <Flex gap={2} alignItems={"center"}>
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => handleChangeStateTodo(todo.id)}
                />
                <Text color={"#fff"}>{todo.title}</Text>
              </Flex>
              <Flex gap={2} align={"center"}>
                <Select
                  value={todo.color}
                  color={"#fff"}
                  onChange={(e) => handleChangeColor(todo.id, e.target.value)}
                >
                  <option value="red">Red</option>
                  <option value="gray">Gray</option>
                  <option value="blue">Blue</option>
                  <option value="purple">purple</option>
                </Select>
                <Button
                  size={"xs"}
                  backgroundColor={"#373737"}
                  _hover={{ background: "#484848" }}
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <BsTrash color="#fff" />
                </Button>
              </Flex>
            </CardBody>
          </Card>
        ))}
    </Container>
  );
};

RenderList.propTypes = {
  colorTodo: PropTypes.string,
  stateTodo: PropTypes.string,
};

export default RenderList;
