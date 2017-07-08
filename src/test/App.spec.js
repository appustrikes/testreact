import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import axios from 'axios'
import sinon from 'sinon'

import App from '../components/App';
import Block from '../components/Block';
import Hero from '../components/Hero';


describe('<App />', () => {
  let wrapper;
  let sandbox;
  let server;

  beforeEach(() => {
     wrapper = shallow(<App />);
  });


  it('gets data from the server', (done) => {
    sandbox = sinon.sandbox.create();
    server = sandbox.useFakeServer();
    const data = {
      status: 200,
      data: {
        data: [
          {
            images: {
              standard_resolution: { url: "url1" }
            }
          },
          {
            images: {
              standard_resolution: { url: "url2" }
            }
          },
          {
            images: {
              standard_resolution: { url: "url3" }
            }
          },
          {
            images: {
              standard_resolution: { url: "url4" }
            }
          },
          {
            images: {
              standard_resolution: { url: "url5" }
            }
          },
          {
            images: {
              standard_resolution: { url: "url6" }
            }
          }
        ]
      },
      headers: {}
    };
    wrapper.instance().getInstagram()
      .then(() => {
        expect(wrapper.find(Block)).to.have.length(3);
        expect(wrapper.state.instagram).to.have.length(3);
      })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)]), 0);

    server.restore();
    sandbox.restore();
    done();
  });

  it('renders one <Hero /> component and zero <Block /> component', () => {
    expect(wrapper.find(Hero)).to.have.length(1);
  });

  it('contains one "app" class', () => {
    expect(wrapper.find('.app')).to.have.length(1);
  });

  it('renders three <Block /> component', () => {
    expect(wrapper.state('instagram')).to.have.length(6);
    expect(wrapper.find(Block)).to.have.length(6);
    wrapper.setState({instagram: ["url1", "url2", "url3", "url4", "url5", "url6"]});
    expect(wrapper.find(Block)).to.have.length(6);
  });
});
