# Validateapi.IPaddressControllerApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPaddressControllerPost**](IPaddressControllerApi.md#iPaddressControllerPost) | **POST** /validate/ip/geolocate | 


<a name="iPaddressControllerPost"></a>
# **iPaddressControllerPost**
> GeolocateResponse iPaddressControllerPost(value)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.IPaddressControllerApi();

var value = "value_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPaddressControllerPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**|  | 

### Return type

[**GeolocateResponse**](GeolocateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

