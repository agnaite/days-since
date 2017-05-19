import React from 'react';
import DayTracker from '../components/counter';
import "../styles/style.css";

export default class SimplePage {
	getElements() {
		return <DayTracker/>;
	}

	getTitle() {
		return "days since"
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'days since'},
			{name: 'generator', content: 'React Server'},
		];
	}

	getLinkTags() {
	  return [
	    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
	  ];
  }

  getBodyClasses() {
		return ['container'];
	}
}
