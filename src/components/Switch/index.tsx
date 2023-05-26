import React from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import useStore from "../../../store";
import { css } from "styled-components";

const MaterialUISwitch = styled(Switch)`
  width: 62;
  height: 34;
  padding: 7;
  position: "absolute";
  &.MuiSwitch-switchBase {
    margin: 1;
    padding: 0;
    transform: "translateX(6px)";
    &.Mui-checked {
      transform: "translateX(22px)";
      /* &.MuiSwitch-thumb:before {
        background-image: url("/dark_mode_black_24dp.svg");
      } */
      & + .MuiSwitch-track {
        opacity: 1;
        background-color: ${(props: any) =>
          props.checked ? "#8796A5" : "#aab4be"};
      }
    }
  }
  & .MuiSwitch-thumb {
    background-color: ${(props: any) => (props.checked ? "#000" : "#fff")};
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: ${(props: any) =>
        css`
        url(${
          props.checked
            ? "/dark_mode_black_24dp.svg"
            : "/light_mode_black_24dp.svg"
        });
        `};
      left: 0;
      top: 0;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  & .MuiSwitch-track {
    opacity: 1;
    background-color: ${(props: any) =>
      props.checked ? "#8796A5" : "#aab4be"};
    border-radius: 20 / 2;
  }
`;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export default function SwitchDarkmode({ onChange, checked }: Props) {
  return (
    <MaterialUISwitch
      onChange={onChange}
      checked={checked}
      sx={{ position: "fixed", top: 0, right: 0 }}
    />
  );
}
