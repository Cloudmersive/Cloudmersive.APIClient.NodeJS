# Nlpapi.PosTaggerJsonApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posTaggerJsonPost**](PosTaggerJsonApi.md#posTaggerJsonPost) | **POST** /nlp/PosTaggerJson | Part-of-speech tag a string


<a name="posTaggerJsonPost"></a>
# **posTaggerJsonPost**
> PosResponse posTaggerJsonPost(request)

Part-of-speech tag a string

Part-of-speech (POS) tag a string and return result as JSON

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.PosTaggerJsonApi();

var request = new Nlpapi.PosRequest(); // PosRequest | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.posTaggerJsonPost(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PosRequest**](PosRequest.md)| Input string | 

### Return type

[**PosResponse**](PosResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

