import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';



const myWork = [{
	'title': "My Serverless Ƥortfolio On AWS!",
	'href': "https://goo.gl/forms/hrMdiyrgWF1we5Ps1",
	'desc': "Welcome! to Ƴunior Ƥortal Ƥortfolio. This is my Ƥrofessional Ƥortfolio. It is Serverless on AWS. Technologies Used: UI: ReactJS, Cross-Browser Compatibility: Babel, Asset Management & Bundling: Webpack, Package Management: NPM, Testing: Jest, Chai & Mocha, AWS - Hosted Serverless, Lambda, Route53, CloudFront, S3, CodeBuild, CodePipeline, Python, Node.js, Git & GitHUB, SSH, HTML/JS, CSS, Font Awesome, and Google Fonts.    Click Above to Contact Me!",
	'image': {
		'descO': "My Ƥortfolio On AWS",
		'src': "images/example1.png",
		'comment': ""
	}
}, {
	'title': `AWS Solutions Architect Certification`,
	'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-12-18&ci=AWS00364784",
	'desc': `I am happy and proud to be part of the Cloud! AWS Certified Solutions Architect.
   I have extensive love and experience designing distributed applications and systems on the AWS platform including:
   Designing and deploying scalable, highly available, and fault tolerant systems on AWS
   Lift and shift of an existing on-premises application to AWS
   Ingress and egress of data to and from AWS
   Selecting the appropriate AWS service based on data, compute, database, or security requirements
   Identifying appropriate use of AWS architectural best practices
   Estimating AWS costs and identifying cost control mechanisms. I ♥ AWS!`,
	'image': {
		'descO': "My Journey in the cloud",
		'src': "images/example2.png",
		'comment': ""
	}
}, {
	'title': `My Serverless Chat-Bot / Currency Converter`,
	'href': "https://slsbot.slack.com",
	'desc': `My Serverless Chat-Bot / Currency Converter : Please use this syntax (@forex convert 1USD to AUD) when asking Forex(chatbot) to convert your currency.
    About this ChatBot - Technologies used : The Serverless Framework - AWS Lambda, Slack API, fixer.io, DynamoDB, NodeJS and AWS CLI.`,
	'image': {
		'descO': "My Serverless Chat-Bot / Currency Converter",
		'src': "images/example3.png",
		'comment': ""
	}
}]

ReactDOM.render( < ExampleWork work = {
			myWork
		}
		/>, document.getElementById('example-work'));
