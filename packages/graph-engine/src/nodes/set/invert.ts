import { NodeDefinition, NodeTypes } from "../../types.js";
import { SingleToken } from "@tokens-studio/types";

export const type = NodeTypes.INVERT_SET;

type Input = {
  array: SingleToken[];
};

export const TOKEN_PREFIX = "token.";

export const process = (input: Input) => {
  const array = input.array;
  return array.map((x, i) => {
    const vals = array[array.length - i - 1];
    return {
      ...vals,
      name: x.name,
    };
  });
};

export const node: NodeDefinition<Input, any> = {
  type,
  process,
};
