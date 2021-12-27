import React from 'react';
import 'scss/build.scss';

import TabsExtended from 'widgets/TabsExtended/TabsExtended';
import TabsWidget from 'widgets/TabsWidget/TabsWidget';
import MultiSearchComposed from 'widgets/MultiSearchComposed/MultiSearchComposed';
import classes from './App.module.scss';
import RenderWidget from './base/widget/RenderWidget';
import RenderWidgetComposed from './base/widget/RenderWidgetComposed';
import DaisyModal from './components/DaisyModal/DaisyModal';
import tabsData from './widgets/TabsWidget/data/data.json';
import multiData from './widgets/MultiSearchComposed/data/data.json';
import XYZProductMultiSearch from 'widgets/XYZProductMultiSearch/XYZProductMultiSearch';

function App() {
  return (
    <div className={classes.App}>
      {/* <RenderWidget data={tabsData}>
        <TabsWidget />
      </RenderWidget> */}
      <h1 className='mb-4'>Default multi search</h1>
      <RenderWidgetComposed data={multiData}>
        <MultiSearchComposed />
      </RenderWidgetComposed>
      {/* <RenderWidgetComposed data={multiData}>
        <XYZProductMultiSearch />
      </RenderWidgetComposed> */}
      {/* <RenderWidget data={tabsData}>
        <TabsExtended />
      </RenderWidget> */}

      {/* <DaisyModal></DaisyModal> */}
    </div>
  );
}

export default App;
