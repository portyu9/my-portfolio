import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "About My Portfolio",
    'href': "https://example.com",
    'desc': `# Ƴunior Ƥortal's portfolio

    This is my professional portfolio. It uses AWS and ReactJS.

    ## Technologies Used:
    UI: React
    Cross-Browser Compatibility: Babel
    Asset Management & Bundling: Webpack
    Package Management: NPM
    Testing: Jest, Chai & Mocha
    AWS - Hosted Serverless
    Lambda
    Route53
    CloudFrontS3
    CodeBuild
    CodePipeline
    Python
    Node.js
    Git & GitHUB
    SSH
    HTML/JS
    CSS
    Font Awesome
    Google Fonts`,
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
