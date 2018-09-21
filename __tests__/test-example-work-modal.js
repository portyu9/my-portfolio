import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM(``, {
  url: "http://localhost",
});

const myExample = {
  'title': "AWS Certified",
  'href': "https://example.com",
  'desc': "Long Description",
  'image': {
    'desc':"description of work 1",
    'src': "images/example1.png",
    'comment':""
  }
};

describe("ExampleWorkModal component", () =>{
  let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true}/>);
  let anchors = component.find("a");
  it("Should be a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });
  it("Should link to project", () => {
    expect(anchors.getElement().props.href).toEqual(myExample.href);
  });
  it("Should have modal box set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
});
