'use strict';


/**
 * Convert a URL to PDF
 * Fully renders a website and returns a PDF of the full page.  Javascript, HTML5, CSS and other advanced features are all supported.
 *
 * input ScreenshotRequest URL to PDF request parameters
 * returns Object
 **/
exports.convertWeb_UrlToPdf = function(input) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Convert HTML string to PDF
 * Fully renders a website and returns a PDF of the HTML.  Javascript, HTML5, CSS and other advanced features are all supported.
 *
 * input HtmlToPdfRequest HTML to PDF request parameters
 * returns Object
 **/
exports.convertWeb_UrlToPdf_0 = function(input) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Take screenshot of URL
 * Fully renders a website and returns a PNG screenshot of the full page image.  Javascript, HTML5, CSS and other advanced features are all supported.
 *
 * input ScreenshotRequest Screenshot request parameters
 * returns Object
 **/
exports.convertWeb_UrlToScreenshot = function(input) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

