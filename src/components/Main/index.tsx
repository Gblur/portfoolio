import React from "react";
import CenteredTabs from "./Tabs";
import Introduction from "./Profile/Description";
import Links from "./Profile/Links";
import Fade from "@mui/material/Fade";

type Props = {
  checked: boolean;
};

export default function MainContent({checked}: Props) {
  return (
    <main>
      <Introduction />
      <CenteredTabs />
      <Links />
    </main>
  );
}
