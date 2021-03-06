# interactive_spectral_exploration

InteractiveSpectralExploration - JavaScript client for interactive_spectral_exploration
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install interactive_spectral_exploration --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var InteractiveSpectralExploration = require('interactive_spectral_exploration');

var api = new InteractiveSpectralExploration.InSpExApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getFilters(callback);
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InteractiveSpectralExploration.InSpExApi* | [**getFilters**](docs/InSpExApi.md#getFilters) | **GET** /filters | Get supporter filters
*InteractiveSpectralExploration.InSpExApi* | [**getSlice**](docs/InSpExApi.md#getSlice) | **GET** /slices/{id} | Run an analysis
*InteractiveSpectralExploration.InSpExApi* | [**runAnalysis**](docs/InSpExApi.md#runAnalysis) | **POST** /analysis | Run an analysis

## Documentation for Models

 - [InteractiveSpectralExploration.AnalysedSlice](docs/AnalysedSlice.md)
 - [InteractiveSpectralExploration.AnalysisQuery](docs/AnalysisQuery.md)
 - [InteractiveSpectralExploration.MetaFilter](docs/MetaFilter.md)
 - [InteractiveSpectralExploration.Slice](docs/Slice.md)
 - [InteractiveSpectralExploration.Stat](docs/Stat.md)
 - [InteractiveSpectralExploration.StatFilter](docs/StatFilter.md)
 - [InteractiveSpectralExploration.SupportedFilters](docs/SupportedFilters.md)

## Documentation for Authorization

 All endpoints do not require authorization.

