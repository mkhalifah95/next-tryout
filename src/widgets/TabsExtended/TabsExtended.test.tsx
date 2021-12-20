import React from 'react';
import { shallow } from 'enzyme';
import TabsExtended from './TabsExtended';

describe('<TabsExtended />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TabsExtended />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
