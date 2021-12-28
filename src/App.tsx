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
      <h3>Some Hooks and composition resources from the official react docs: </h3>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/composition-vs-inheritance.html">https://reactjs.org/docs/composition-vs-inheritance.html</a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</a>
        </li>
      </ul>
      <p>Personally I prefer <b>Composition & Hooks</b> over Inheritance & Class based mainly because: </p>
      <ol>
        <li>React itself is Components-centric so this Pattern works pretty well with it</li>
        <li>This Pattern improves reusability</li>
        <li>The code written is much less and much cleaner</li>
        <li>We can leverage the latest improvements that are made by the React team, and stay up to date with the latest trends</li>
      </ol>
      <i>Ofc this is not a final decision, and there's room for further considerations</i>

      <hr />
      {/* <RenderWidget data={tabsData}>
        <TabsWidget />
      </RenderWidget> */}

      <h1 className='mb-4'>Default multi search</h1>
      <RenderWidgetComposed data={multiData}>
        <MultiSearchComposed />
      </RenderWidgetComposed>
      <br></br>
      <h1 className='mb-0'>Modified multi search
      </h1>
      <h5 className='mb-4'>(<i> watermelon flavor 🍉 </i>)</h5>

      <RenderWidgetComposed data={multiData}>
        <XYZProductMultiSearch />
      </RenderWidgetComposed>

      {/* <RenderWidget data={tabsData}>
        <TabsExtended />
      </RenderWidget> */}

      {/* <DaisyModal></DaisyModal> */}
    </div>
  );
}

export default App;
