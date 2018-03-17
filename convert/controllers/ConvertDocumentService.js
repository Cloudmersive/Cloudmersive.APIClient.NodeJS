'use strict';


/**
 * Convert Document to PDF
 * Automatically detect file type and convert it to PDF.
 *
 * inputFile File Input file to perform the operation on.
 * returns File
 **/
exports.convertDocument_AutodetectToPdf = function(inputFile) {
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
 * Word DOCX to PDF
 * Convert Office Word Documents (docx) to standard PDF
 *
 * inputFile File Input file to perform the operation on.
 * returns File
 **/
exports.convertDocument_DocxToPdf = function(inputFile) {
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
 * PowerPoint PPTX to PDF
 * Convert Office PowerPoint Documents (pptx) to standard PDF
 *
 * inputFile File Input file to perform the operation on.
 * returns File
 **/
exports.convertDocument_PptxToPdf = function(inputFile) {
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
 * Excel XLSX to CSV
 * Convert Office Excel Workbooks (xlsx) to standard Comma-Separated Values (CSV) format.
 *
 * inputFile File Input file to perform the operation on.
 * returns File
 **/
exports.convertDocument_XlsxToCsv = function(inputFile) {
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
 * Excel XLSX to PDF
 * Convert Office Excel Workbooks (xlsx) to standard PDF.  Converts all worksheets in the workbook to PDF.
 *
 * inputFile File Input file to perform the operation on.
 * returns File
 **/
exports.convertDocument_XlsxToPdf = function(inputFile) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

