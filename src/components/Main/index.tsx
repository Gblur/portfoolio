import React from "react";
import Introduction from "./Profile/Description";
import Links from "./Profile/Links";
import Fade from "@mui/material/Fade";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OppositeContentTimeline from "./Work/Timeline";
import { RadarChart } from "./Metrics/Matrix";
import PortFolio from "./Profile/Portfolio";
import TabPanel from "@mui/lab/TabPanel";
import Imprint from "../Imprint";

type Props = {
  checked: boolean;
};

export default function MainContent({checked}: Props) {
  const [value, setValue] = React.useState("1");
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
      
  return (
    <main>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Experience" value="1" />
          <Tab label="Contact" value="2" />
          <Tab label="Imprint" value="3" />
        </Tabs>
      <Introduction />
      <section>
        <TabPanel value="1">
          <OppositeContentTimeline />
          <hr></hr>
          <div className="chart-container">
            <RadarChart />
          </div>
          <hr></hr>
          <PortFolio />
        </TabPanel>
        <TabPanel value="2">
          <Links />
        </TabPanel>
        <TabPanel value="3">
          <Imprint />
        </TabPanel>
      </section>
      {/* <CenteredTabs imprint={value} contact={value} experience={value}/> */}
      </TabContext>
    </main>
  );
}
