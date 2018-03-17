# Nlpapi.WordsApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wordsAdjectives**](WordsApi.md#wordsAdjectives) | **POST** /nlp/get/words/adjectives/string | Get adjectives in string
[**wordsAdverbs**](WordsApi.md#wordsAdverbs) | **POST** /nlp/get/words/adverbs/string | Get adverbs in input string
[**wordsGetWordsJson**](WordsApi.md#wordsGetWordsJson) | **POST** /nlp/get/words/json | Get words in input string (JSON)
[**wordsGetWordsString**](WordsApi.md#wordsGetWordsString) | **POST** /nlp/get/words/string | Get words from string
[**wordsNouns**](WordsApi.md#wordsNouns) | **POST** /nlp/get/words/nouns/string | Get nouns in string
[**wordsPost**](WordsApi.md#wordsPost) | **POST** /nlp/get/words/verbs/string | Get the verbs in a string
[**wordsPronouns**](WordsApi.md#wordsPronouns) | **POST** /nlp/get/words/pronouns/string | Returns all pronounts in string
[**wordsProperNouns**](WordsApi.md#wordsProperNouns) | **POST** /nlp/get/words/properNouns/string | Get proper nouns in a string


<a name="wordsAdjectives"></a>
# **wordsAdjectives**
> &#39;String&#39; wordsAdjectives(input)

Get adjectives in string

Retrieves all adjectives in input string

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsAdjectives(input, callback);
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

<a name="wordsAdverbs"></a>
# **wordsAdverbs**
> &#39;String&#39; wordsAdverbs(input)

Get adverbs in input string

Returns all adverb words in the input string

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsAdverbs(input, callback);
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

<a name="wordsGetWordsJson"></a>
# **wordsGetWordsJson**
> GetWordsJsonResponse wordsGetWordsJson(input)

Get words in input string (JSON)

Get the component words in an input string, formatted as JSON

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | String to process


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsGetWordsJson(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | **String**| String to process | 

### Return type

[**GetWordsJsonResponse**](GetWordsJsonResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="wordsGetWordsString"></a>
# **wordsGetWordsString**
> &#39;String&#39; wordsGetWordsString(input)

Get words from string

Segment an input string into its component words

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsGetWordsString(input, callback);
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

<a name="wordsNouns"></a>
# **wordsNouns**
> &#39;String&#39; wordsNouns(input)

Get nouns in string

Returns all of the nouns in the input string

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsNouns(input, callback);
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

<a name="wordsPost"></a>
# **wordsPost**
> &#39;String&#39; wordsPost(input)

Get the verbs in a string

Get all of the verbs in the input string.

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsPost(input, callback);
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

<a name="wordsPronouns"></a>
# **wordsPronouns**
> &#39;String&#39; wordsPronouns(input)

Returns all pronounts in string

Returns all pronouns in the input string

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsPronouns(input, callback);
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

<a name="wordsProperNouns"></a>
# **wordsProperNouns**
> &#39;String&#39; wordsProperNouns(input)

Get proper nouns in a string

Returns all of the proper nouns in a string.  Proper nouns are named entities such as \&quot;Hilton\&quot;.

### Example
```javascript
var Nlpapi = require('nlpapi');

var apiInstance = new Nlpapi.WordsApi();

var input = "input_example"; // String | Input string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsProperNouns(input, callback);
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

