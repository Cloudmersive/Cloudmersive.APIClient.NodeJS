# Validateapi.EmailApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailAddressGetServers**](EmailApi.md#emailAddressGetServers) | **POST** /validate/email/address/servers | 
[**emailFullValidation**](EmailApi.md#emailFullValidation) | **POST** /validate/email/address/full | 
[**emailPost**](EmailApi.md#emailPost) | **POST** /validate/email/address/syntaxOnly | 


<a name="emailAddressGetServers"></a>
# **emailAddressGetServers**
> AddressGetServersResponse emailAddressGetServers(email)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.EmailApi();

var email = "email_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailAddressGetServers(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**AddressGetServersResponse**](AddressGetServersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="emailFullValidation"></a>
# **emailFullValidation**
> FullEmailValidationResponse emailFullValidation(email)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.EmailApi();

var email = "email_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailFullValidation(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**FullEmailValidationResponse**](FullEmailValidationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="emailPost"></a>
# **emailPost**
> AddressVerifySyntaxOnlyResponse emailPost(value)



### Example
```javascript
var Validateapi = require('validateapi');

var apiInstance = new Validateapi.EmailApi();

var value = "value_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailPost(value, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | **String**|  | 

### Return type

[**AddressVerifySyntaxOnlyResponse**](AddressVerifySyntaxOnlyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

