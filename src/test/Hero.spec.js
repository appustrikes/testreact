import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';


import Hero from '../components/Hero';


describe('<Hero />', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<Hero subtitle="subtitle" title="title"/>);
  });

  it('contains class "cover" and "hero"', () => {
    expect(wrapper.find('.cover')).to.have.length(1);
    expect(wrapper.find('.hero')).to.have.length(1);
  });

  it('contains a title and subtitle', () => {
    expect(wrapper.find(".text-center")).to.have.length(1);
    expect(wrapper.find(".text-center").node.props.children).to.have.length(2);
    expect(wrapper.find(".text-center").children().find("h1").node.props.children).to.equal("title");
    expect(wrapper.find(".text-center").children().find("h3").node.props.children).to.equal("subtitle");
  });
});
