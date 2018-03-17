# Nlpapi.SentencesApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentencesPost**](SentencesApi.md#sentencesPost) | **POST** /nlp/get/sentences/string | Extract sentences from string


<a name="sentencesPost"></a>
# **sentencesPost**
> &#39;String&#39; sentencesPost(input)

Extract sentences from string

Segment an input string into separate sentences, output result as a string.

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.SentencesApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sentencesPost(input, callback);
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

