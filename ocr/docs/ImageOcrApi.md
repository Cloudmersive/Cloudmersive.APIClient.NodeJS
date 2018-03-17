# Ocrapi.ImageOcrApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageOcrPost**](ImageOcrApi.md#imageOcrPost) | **POST** /ocr/image/toText | Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.


<a name="imageOcrPost"></a>
# **imageOcrPost**
> ImageToTextResponse imageOcrPost(imageFile)

Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.

### Example
```javascript
var Ocrapi = require('ocrapi');

var apiInstance = new Ocrapi.ImageOcrApi();

var imageFile = "/path/to/file.txt"; // File | Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageOcrPost(imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageFile** | **File**| Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

[**ImageToTextResponse**](ImageToTextResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

