import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

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
  },
  {
    'title': `Web
    UI
    Automation`,
    'image': {
      'desc':"description of work 3",
      'src': "images/example3.png",
      'comment':""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
