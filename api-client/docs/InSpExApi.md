# InteractiveSpectralExploration.InSpExApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFilters**](InSpExApi.md#getFilters) | **GET** /filters | Get supporter filters
[**getSlice**](InSpExApi.md#getSlice) | **GET** /slices/{id} | Run an analysis
[**runAnalysis**](InSpExApi.md#runAnalysis) | **POST** /analysis | Run an analysis

<a name="getFilters"></a>
# **getFilters**
> SupportedFilters getFilters()

Get supporter filters

### Example
```javascript
import InteractiveSpectralExploration from 'interactive_spectral_exploration';

let apiInstance = new InteractiveSpectralExploration.InSpExApi();
apiInstance.getFilters((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SupportedFilters**](SupportedFilters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSlice"></a>
# **getSlice**
> Slice getSlice(id)

Run an analysis

### Example
```javascript
import InteractiveSpectralExploration from 'interactive_spectral_exploration';

let apiInstance = new InteractiveSpectralExploration.InSpExApi();
let id = "id_example"; // String | 

apiInstance.getSlice(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Slice**](Slice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runAnalysis"></a>
# **runAnalysis**
> [AnalysedSlice] runAnalysis(opts)

Run an analysis

### Example
```javascript
import InteractiveSpectralExploration from 'interactive_spectral_exploration';

let apiInstance = new InteractiveSpectralExploration.InSpExApi();
let opts = { 
  'body': new InteractiveSpectralExploration.AnalysisQuery() // AnalysisQuery | 
};
apiInstance.runAnalysis(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AnalysisQuery**](AnalysisQuery.md)|  | [optional] 

### Return type

[**[AnalysedSlice]**](AnalysedSlice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

