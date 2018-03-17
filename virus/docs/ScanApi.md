# ScanApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scanFile**](ScanApi.md#scanFile) | **POST** /virus/scan/file | 


<a name="scanFile"></a>
# **scanFile**
> VirusScanResult scanFile(inputFile)



### Example
```java
// Import classes:
//import invalidPackageName.ApiException;
//import cloudmersive_virus_api_client.ScanApi;


ScanApi apiInstance = new ScanApi();
File inputFile = new File("/path/to/file.txt"); // File | Input file to perform the operation on.
try {
    VirusScanResult result = apiInstance.scanFile(inputFile);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ScanApi#scanFile");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. |

### Return type

[**VirusScanResult**](VirusScanResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

