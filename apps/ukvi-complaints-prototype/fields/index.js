'use strict';

const dateComponent = require('hof-component-date');

module.exports = {
  reason: {
  	mixin: 'radio-group',
  	options: [
  		'immigration-application',
  		'immigration-appointment',
  		'application-delay',
  		'return-of-documents',
  		'immigration-decision',
  		// 'immigration-status-change',
  		'biometric-residence-permit',
  		'refund',
  		'staff-behaviour',
  		'existing-complaint',
  		'other-complaint'
  	],
    validate: 'required'
  },

  'immigration-application': {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'technical-issues',
      'guidance',
      'complain'
    ]
  },

  'immigration-appointment': {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'lack-availability',
      'change-appointment',
      'technical-appointments',
      'questions-appointments',
      'complain-appointments'
    ]
  },
  
  'where-applied-from': {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'inside-uk',
      'outside-uk'
    ]
  },

  "application-delay": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'request-upgrade',
      'application-ref-numbers'
    ]
  },

  "have-reference-numbers": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },

  // "reference-numbers": {
  // 	mixin: 'radio-group',
  // 	validate: 'required',
  // 	legend: {
  //     className: 'visuallyhidden'
  //   },
  //   className: ['form-group'],
  //   options: [
  //     'gwf',
  //     'ho',
  //     'ihs'
  //   ]
  // },

  "requested-documents": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },
  
  "have-requested": {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'used-service',
      'something-else'
    ]
  },

  "return-of-documents": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },

  "immigration-decision": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },
  
  "decision-outcome": {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'positive',
      'negative'
    ]
  },

  "immigration-status-change": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'questions-status-change',
      'complain-status-change'
    ]
  },

  "biometric-residence-permit": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'card-not-arrived',
      'letter-not-arrived',
      'card-incorrect',
      'complain-brp'
    ]
  },

  "refund-type": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'ihs',
      'standard',
      'priority',
      'super-priority',
      'premium'
    ]
  },

  "refund": {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },
  "refund-when": {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'less-than',
      'more-than'
    ]
  },

  "staff-behaviour": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'face-to-face',
      'on-phone',
      'in-letter'
    ]
  },

  "which-centre": {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'vac',
      'ssc',
      'ukvcas'
    ]
  },

  "vac-country": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
  },

  "vac-city": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
  },

  "ssc-city": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
  },

  "ukvcas-city": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
  },

  "called-date": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
  },
  "called-time": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
  },
  "called-from": {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
  },

  "existing-complaint": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes',
      'no'
    ]
  },

  "complaint-reason-previous": {
    mixin: 'radio-group',
    options: [
      'immigration-application',
      'immigration-appointment',
      'application-delay',
      'return-of-documents',
      'immigration-decision',
      'biometric-residence-permit',
      'refund',
      'staff-behaviour',
      'other-complaint'
    ],
    validate: 'required'
  },


  "other-complaint": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'technical-issues',
      'questions',
      'complain'
    ]
  },
  'reference-numbers': {
    mixin: 'checkbox-group',
    legend: {
      className: 'visuallyhidden'
    },
    validate: 'required',
    options: [{
      value: 'gwf',
      toggle: 'gwf-reference',
      child: 'input-text'
    }, {
      value: 'ho',
      toggle: 'ho-reference',
      child: 'input-text'
    }, {
      value: 'ihs',
      toggle: 'ihs-reference',
      child: 'input-text'
    }, {
      value: 'uan',
      toggle: 'uan-reference',
      child: 'input-text'
    }]
  },
  'when-applied': {
   mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },
  'gwf-reference': {
    dependent: {
      field: 'reference-numbers',
      value: 'gwf'
    },
    validate: 'required'
  },
  'ho-reference': {
    dependent: {
      field: 'reference-numbers',
      value: 'ho'
    },
    validate: 'required'
  },
  'ihs-reference': {
    dependent: {
      field: 'reference-numbers',
      value: 'ihs'
    },
    validate: 'required'
  },
  'uan-reference': {
    dependent: {
      field: 'reference-numbers',
      value: 'uan'
    },
    validate: 'required'
  },

  'complaint-reference-number': {
    mixin: 'input-text'
  },

  'complaint-details': {
    mixin: 'textarea',
    attributes: [{
      attribute: 'rows',
      value: 12
    }],
    validate: 'required',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    className: ['form-control-3-4'],
  },

  "acting-as-agent": {
  	mixin: 'radio-group',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'yes', 
      'no'
    ]
  },

  "who-representing": {
    mixin: "radio-group",
    options: [
      "legal-rep",
      "relative",
      "sponsor",
      "support-org"
    ]
  },

  "agent-name": {
  	mixin: 'input-text',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  "agent-email": {
  	mixin: 'input-text',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  "agent-phone": {
  	mixin: 'input-text',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  "applicant-name": {
  	mixin: 'input-text',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  'applicant-dob': dateComponent('applicant-dob', {
    labelClassName: 'visuallyhidden',
  }),

  'dob': {},
  'dob-day': {
    mixin:'input-text-compound',
    validate: ['required', 'numeric'],
    includeInEmail: false,
    includeInSummary: false
  },
  'dob-month': {
    validate: ['required', 'numeric'],
    includeInEmail: false,
    includeInSummary: false
  },
  'dob-year': {
    validate: ['required', 'numeric'],
    includeInEmail: false,
    includeInSummary: false
  },

  "applicant-email": {
  	mixin: 'input-text',
  	validate: 'required',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  "applicant-nationality":{
    mixin: 'select',
    options: require('hof-util-countries')(),
    validate: 'required',
    className: ['typeahead']
  },

  "agent-representative-nationality":{
    mixin: 'select',
    options: require('hof-util-countries')(),
    validate: 'required'
  },

  "applicant-phone": {
  	mixin: 'input-text',
  	legend: {
      className: 'visuallyhidden'
    },
    className: ['']
  },

  'where': {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    className: ['form-group'],
    options: [
      'phone',
      'visa-application-centre',
      'premium-service-centre',
      'letter'
    ]
  }
};

