# Nlpapi.ApikeyUsageApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apikeyUsageGet**](ApikeyUsageApi.md#apikeyUsageGet) | **GET** /nlp/apikeyUsage/{id} | Get API Key usage


<a name="apikeyUsageGet"></a>
# **apikeyUsageGet**
> &#39;Number&#39; apikeyUsageGet(id)

Get API Key usage

Use this API to determine how many API calls you have made during this month.

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.ApikeyUsageApi();

var id = "id_example"; // String | API key to check


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apikeyUsageGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API key to check | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

