import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Component', () => {

    const accordionProps = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]

      it('renders without errors', () => {
          const div = document.createElement('div');
          ReactDOM.render(<Accordion />, div);
          ReactDOM.unmountComponentAtNode(div);
      })

      it('renders the first thing by default', () => {
          const wrapper = shallow(<Accordion section={accordionProps} />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('renders empty given no accordion', () => {
          const wrapper = shallow(<Accordion sections={accordionProps}/>)
          expect(toJson(wrapper)).toMatchSnapshot()
      })
    
      it('opens one section at a time', () => {
          const wrapper = mount(<Accordion section={accordionProps}/>)
          console.log(wrapper.find('button'))
          wrapper.find('button').at(0).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()      })
    
    
    })