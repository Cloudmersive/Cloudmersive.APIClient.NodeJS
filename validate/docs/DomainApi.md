# Validateapi.DomainApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck**](DomainApi.md#domainCheck) | **POST** /validate/domain/check | 
[**domainPost**](DomainApi.md#domainPost) | **POST** /validate/domain/whois | 


<a name="domainCheck"></a>
# **domainCheck**
> CheckResponse domainCheck(domain)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.DomainApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainCheck(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**CheckResponse**](CheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="domainPost"></a>
# **domainPost**
> WhoisResponse domainPost(domain)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.DomainApi();

var domain = "domain_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainPost(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**|  | 

### Return type

[**WhoisResponse**](WhoisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

