import React from 'react';
import { shallow } from 'enzyme';
import CardComp from './CardComp';

describe('<CardComp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardComp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
