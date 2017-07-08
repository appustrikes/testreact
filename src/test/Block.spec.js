import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Block from '../components/Block';

import VisibilitySensor from 'react-visibility-sensor'


describe('<Block />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Block background="imgUrl" caption="caption" />);
  });

  it('renders one VisibilitySensor component', () => {
    expect(wrapper.find(VisibilitySensor)).to.have.length(1);
  });

  it('contains classes "cover" and "block"', () => {
    expect(wrapper.find(".cover")).to.have.length(1);
    expect(wrapper.find(".block")).to.have.length(1);
  });

  it('contains a caption', () => {
    expect(wrapper.find(".text-center")).to.have.length(1);
    expect(wrapper.find(".caption")).to.have.length(1);
    expect(wrapper.find(".caption").node.props.children).to.equal("caption");
  });

  it('doesn\'t contain class "is-visible"', () => {
    expect(wrapper.find(".is-visible")).to.have.length(0);
  });

  it('contains class "is-visible"', () => {
    expect(wrapper.state('isVisibleClass')).to.equal("");
    expect(wrapper.find(".is-visible")).to.have.length(0);
    wrapper.setState({isVisibleClass: "is-visible"});
    expect(wrapper.find(".is-visible")).to.have.length(1);
  });
});
