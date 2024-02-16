import styled from "styled-components";

type ButtonProps = {
  $bg?: string;
};

export const Button = styled.button<ButtonProps>(({ $bg }) => ({
  fontFamily: "sans-serif",
  ...($bg
    ? {
        backgroundColor: $bg,
      }
    : {}),
}));
