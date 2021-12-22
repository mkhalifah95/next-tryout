import React from 'react';
import TabsExtended from 'widgets/TabsExtended/TabsExtended';
import TabsWidget from 'widgets/TabsWidget/TabsWidget';
import MultiSearchComposed from 'widgets/MultiSearchComposed/MultiSearchComposed';
import classes from './App.module.scss';
import RenderWidget from './base/widget/RenderWidget';
import RenderWidgetComposed from './base/widget/RenderWidgetComposed';
import DaisyModal from './components/DaisyModal/DaisyModal';
import tabsData from './widgets/TabsWidget/data/data.json';
import multiData from './widgets/MultiSearchComposed/data/data.json';
import 'scss/build.scss';


function App() {
  return (
    <div className={classes.App}>
      <RenderWidget data={tabsData}>
        <TabsWidget />
      </RenderWidget>
      {/* <RenderWidgetComposed data={multiData}>
        <MultiSearchComposed />
      </RenderWidgetComposed> */}
      {/* <RenderWidget data={tabsData}>
        <TabsExtended />
      </RenderWidget> */}

      {/* <DaisyModal></DaisyModal> */}
    </div>
  );
}

export default App;
