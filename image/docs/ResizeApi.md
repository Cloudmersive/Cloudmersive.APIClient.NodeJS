# ResizeApi

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
```java
// Import classes:
//import invalidPackageName.ApiException;
//import cloudmersive_image_api_client.ResizeApi;


ResizeApi apiInstance = new ResizeApi();
Integer maxWidth = 56; // Integer | Maximum width of the output image - final image will be as large as possible while less than or equial to this width
Integer maxHeight = 56; // Integer | Maximum height of the output image - final image will be as large as possible while less than or equial to this height
File imageFile = new File("/path/to/file.txt"); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
try {
    Object result = apiInstance.resizePost(maxWidth, maxHeight, imageFile);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ResizeApi#resizePost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxWidth** | **Integer**| Maximum width of the output image - final image will be as large as possible while less than or equial to this width |
 **maxHeight** | **Integer**| Maximum height of the output image - final image will be as large as possible while less than or equial to this height |
 **imageFile** | **File**| Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported. |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: image/png

