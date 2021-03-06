# Imageapi.ResizeApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resizePost**](ResizeApi.md#resizePost) | **POST** /image/resize/preserveAspectRatio/{maxWidth}/{maxHeight} | Resize an image with parameters


<a name="resizePost"></a>
# **resizePost**
> Object resizePost(maxWidth, maxHeight, imageFile)

Resize an image with parameters

Resize an image to a maximum width and maximum height, while preserving the image&#39;s original aspect ratio

### Example
```javascript
var Imageapi = require('imageapi');

var apiInstance = new Imageapi.ResizeApi();

var maxWidth = 56; // Number | Maximum width of the output image - final image will be as large as possible while less than or equial to this width

var maxHeight = 56; // Number | Maximum height of the output image - final image will be as large as possible while less than or equial to this height

var imageFile = "/path/to/file.txt"; // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resizePost(maxWidth, maxHeight, imageFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxWidth** | **Number**| Maximum width of the output image - final image will be as large as possible while less than or equial to this width | 
 **maxHeight** | **Number**| Maximum height of the output image - final image will be as large as possible while less than or equial to this height | 
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/png

