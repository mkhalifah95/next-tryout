import React from 'react';
import { shallow } from 'enzyme';
import DaisyModal from './DaisyModal';

describe('<DaisyModal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DaisyModal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
