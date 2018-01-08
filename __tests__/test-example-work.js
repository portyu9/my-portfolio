import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
    'title': "AWS Certified",
    'image': {
      'desc':"description of work 1",
      'src': "images/example1.png",
      'comment':""
    }
  },
  {
    'title': `I
    ♥
    AWS!`,
    'image': {
      'desc':"description of work 2",
      'src': "images/example2.png",
      'comment':""
    }
  }
];

describe("ExampleWork component", () =>{
  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain 2 work bubbles only", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () =>{
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
  let images = component.find("img");

  it("Should contain a single img", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the img src correctly", () => {
    expect(images.getElement().props.src).toEqual(myWork[1].image.src);
  });
});
