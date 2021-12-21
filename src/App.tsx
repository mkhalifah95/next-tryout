import React from 'react';
import TabsExtended from 'widgets/TabsExtended/TabsExtended';
import TabsWidget from 'widgets/TabsWidget/TabsWidget';
import classes from './App.module.scss';
import RenderWidget from './base/widget/RenderWidget';
import DaisyModal from './components/DaisyModal/DaisyModal';
import tabsData from './widgets/TabsWidget/data/data.json';
import 'scss/build.scss';


function App() {
  return (
    <div className={classes.App}>
      <RenderWidget data={tabsData}>
        <TabsWidget />
      </RenderWidget>
      {/* <RenderWidget data={tabsData}>
        <TabsExtended />
      </RenderWidget> */}

      {/* <DaisyModal></DaisyModal> */}
    </div>
  );
}

export default App;
