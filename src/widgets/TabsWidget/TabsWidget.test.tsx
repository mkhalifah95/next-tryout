import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './TabsWidget';

describe('<Tabs />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Tabs />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
