import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";

type Props = {};

export default function LinksList({}: Props) {
  return (
    <section>
      <h1>Find me</h1>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Link href="https://github.com/Gblur">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/florian-gaebler-a317aa115/">
          <LinkedInIcon />
        </Link>
      </Stack>
    </section>
  );
}
