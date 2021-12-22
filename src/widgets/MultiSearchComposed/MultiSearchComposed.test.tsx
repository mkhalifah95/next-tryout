import React from 'react';
import { shallow } from 'enzyme';
import MultiSearchComposed from './MultiSearchComposed';

describe('<MultiSearchComposed />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MultiSearchComposed />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
