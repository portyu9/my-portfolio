import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

class ExampleDescription extends React.Component {
  render() {
    let example = this.props.example;

    const text = `# Ƴunior Ƥortal's portfolio \n

    \nThis is my professional portfolio. It uses AWS and ReactJS.\n

    \n## Technologies Used:
    \nUI: React
    \nCross-Browser Compatibility: Babel
    \nAsset Management & Bundling: Webpack
    \nPackage Management: NPM
    \nTesting: Jest, Chai & Mocha
    \nAWS - Hosted Serverless
    \nLambda
    \nRoute53
    \nCloudFrontS3
    \nCodeBuild
    \nCodePipeline
    \nPython
    \nNode.js
    \nGit & GitHUB
    \nSSH
    \nHTML/JS
    \nCSS
    \nFont Awesome
    \nGoogle Fonts`;
    return (
       <div className="display-linebreak">
          {text}
       </div>
    );
  }
}

const myWork = [
  {
    'title': "About My Portfolio",
    'href': "https://example.com",
    'desc': `Ƴunior Ƥortal's portfolio \n
            \nThis is my professional portfolio. It uses AWS and ReactJS.\n
            \nTechnologies Used:
            \nUI: React
            \nCross-Browser Compatibility: Babel
            \nAsset Management & Bundling: Webpack
            \nPackage Management: NPM
            \nTesting: Jest, Chai & Mocha
            \nAWS - Hosted Serverless
            \nLambda
            \nRoute53
            \nCloudFrontS3
            \nCodeBuild
            \nCodePipeline
            \nPython
            \nNode.js
            \nGit & GitHUB
            \nSSH
            \nHTML/JS
            \nCSS
            \nFont Awesome
            \nGoogle Fonts`,
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
