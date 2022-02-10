import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Infotablecomponent from "./InfoTableComponent";

const TabComponent = (props) => {
  console.log(props.info);
  return (
    <div>
      <React.Fragment>
        <Tabs style={{ marginTop: "61px", marginBottom: "25px" }}>
          <TabList>
            <Tab><strong> Offical Info</strong></Tab>
            <Tab><strong>Personal Info</strong></Tab>
            <Tab><strong>Emergency Info</strong></Tab>
          </TabList>

          <TabPanel>
            <Infotablecomponent
              info={props.info}
              check="true"
              role={props.role}
            />
          </TabPanel>
          <TabPanel>
            <Infotablecomponent
              info={props.info}
              check="false"
              role={props.role}
            />
          </TabPanel>
          <TabPanel>
            <Infotablecomponent info={props.info} check="emergency" />
          </TabPanel>
        </Tabs>
      </React.Fragment>
    </div>
  );
};

export default TabComponent;
