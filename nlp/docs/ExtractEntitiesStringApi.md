# Nlpapi.ExtractEntitiesStringApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractEntitiesStringPost**](ExtractEntitiesStringApi.md#extractEntitiesStringPost) | **POST** /nlp/ExtractEntitiesString | Extract entities from string


<a name="extractEntitiesStringPost"></a>
# **extractEntitiesStringPost**
> &#39;String&#39; extractEntitiesStringPost(value)

Extract entities from string

Extract the named entitites from an input string.

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.ExtractEntitiesStringApi();

var value = "value_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.extractEntitiesStringPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**| Input string | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

