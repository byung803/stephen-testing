import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../components';
import AddComment from '../../containers/AddComment';
import VisibleComment from '../../containers/VisibleComment';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Index />);
});

it('should have one AddComment Component', () => {
})

it('should have one VisibleComment Component', () => {
    expect(wrapper.find(VisibleComment).length).toEqual(1);
})

test('should take a snapshot of Index', () => {
    expect(wrapper).toMatchSnapshot();
});
