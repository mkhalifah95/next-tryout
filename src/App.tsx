import React from 'react';
import TabsExtended from 'widgets/TabsExtended/TabsExtended';
import classes from './App.module.scss';
import RenderWidget from './base/widget/RenderWidget';
import tabsData from './widgets/Tabs/data/data.json';

function App() {
  return (
    <div className={classes.App}>
      <RenderWidget data={tabsData}>
        <TabsExtended />
      </RenderWidget>
    </div>
  );
}

export default App;
