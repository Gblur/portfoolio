import * as React from "react";
import Box from "@mui/material/Box";
import styles from "@/styles/Home.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import OppositeContentTimeline from "../Work/Timeline";
import {RadarChart} from "../Metrics/Matrix";
import PortFolio from "../Profile/Portfolio";
import Imprint from "../../Imprint";

export default function CenteredTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Experience" value="1" />
        <Tab label="Skills" value="2" />
        <Tab label="Projects" value="3" />
        <Tab label="Imprint" value="4" />
      </Tabs>

      <section>
        <TabPanel value="1">
          <OppositeContentTimeline />
        </TabPanel>
        <TabPanel value="2">
          <div className="chart-container">
            <RadarChart />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <PortFolio />
        </TabPanel>
        <TabPanel value="4">
          <Imprint />
        </TabPanel>
      </section>
    </TabContext>
  );
}
