# Nlpapi.ParseStringApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**parseStringPost**](ParseStringApi.md#parseStringPost) | **POST** /nlp/ParseString | Parse string to syntax tree


<a name="parseStringPost"></a>
# **parseStringPost**
> &#39;String&#39; parseStringPost(input)

Parse string to syntax tree

Parses the input string into a Penn Treebank syntax tree

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.ParseStringApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseStringPost(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | **String**| Input string | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

