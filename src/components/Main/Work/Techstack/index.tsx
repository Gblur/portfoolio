import React from "react";
import styled from "styled-components";

interface ListItemProps {
  isDarkMode: boolean;
}

const Techitem = styled.li<ListItemProps>`
  display: inline;
  color: ${(props: any) => !props.isDarkMode && "var(--primary-color)"};
  background: ${(props: any) =>
    props.isDarkMode ? "var(--primary-color)" : "#8d8d8d45"};
  word-break: keep-all;
  padding: 5px;
`;

type Props = {
  company: string[];
  isDarkMode: boolean;
};

export default function Techstack({company, isDarkMode}: Props) {
  return (
    <ul className="techstack__list">
      {company.map((skill: string) => (
        <Techitem key={skill} isDarkMode={isDarkMode}>
          {skill}
        </Techitem>
      ))}
    </ul>
  );
}
