import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "AWS Certified",
    'href': "https://example.com",
    'desc': "Long Description",
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
    'href': "https://example.com",
    'desc': "Long Description",
    'image': {
      'desc':"description of work 2",
      'src': "images/example2.png",
      'comment':""
    }
  },
  {
    'title': `Web
    UI
    Automation`,
    'href': "https://example.com",
    'desc': "Long Description",
    'image': {
      'desc':"description of work 3",
      'src': "images/example3.png",
      'comment':""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
