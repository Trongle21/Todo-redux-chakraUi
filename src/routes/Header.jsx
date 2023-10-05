import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Heading, Text, Stack, Input, Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

/**
 * @typedef HeaderProps
 *
 * @property {func} onChangeColor
 *
 */

/**
 *
 * @param {HeaderProps} props
 * @returns
 */

const Header = ({ colorTodo }) => {
  const [inputTodo, setInputTodo] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleAddTodo = () => {
    setInputTodo("");
    inputRef.current.focus();
    if (colorTodo) {
      dispatch({
        type: "todos/added",
        payload: { title: inputTodo, color: colorTodo },
      });
    } else {
      dispatch({
        type: "todos/added",
        payload: { title: inputTodo },
      });
    }
  };

  const handleAddTodoByEnter = (e) => {
    setInputTodo("");
    inputRef.current.focus();
    if (e.key === "Enter") {
      if (inputTodo.trim().length === 0) {
        return;
      }
      if (colorTodo) {
        dispatch({
          type: "todos/added",
          payload: { title: inputTodo, color: colorTodo },
        });
      } else {
        dispatch({
          type: "todos/added",
          payload: { title: inputTodo },
        });
      }
    }
  };

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
        <Text
          bgGradient={"linear(to-r, #3884F6, #DA0D19)"}
          bgClip="text"
          fontSize={60}
        >
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
          border={"1px solid #494949"}
          value={inputTodo}
          ref={inputRef}
          onChange={(e) => setInputTodo(e.target.value)}
          onKeyDown={handleAddTodoByEnter}
        />
        <Button
          _hover={{ background: "#2E88B1" }}
          background="#1E6F9F"
          transition="background 0.3s ease"
          color={"#fff"}
          onClick={handleAddTodo}
        >
          add
        </Button>
      </Stack>
    </Flex>
  );
};

Header.propTypes = {
  colorTodo: PropTypes.string ,
};

export default Header;
