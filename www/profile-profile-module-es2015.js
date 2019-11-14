(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
  \******************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    /**
     * @return {?}
     */
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    /**
     * @param {?} inputFilename
     * @return {?}
     */
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        /** @type {?} */
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    }
    /**
     * @protected
     * @param {?} parsedHeaders
     * @return {?}
     */
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
];
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div class=\"head_panel\">\n      <ion-title>Профиль </ion-title>\n      <button (click)=\"logout()\"> <ion-icon name=\"exit\"></ion-icon></button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"content_div\">\n  <div class=\"data_panel\">\n    <h3 class=\"name_p\">{{userData.user}} {{userData.family}}</h3>\n    <h3 class=\"login_p\">{{userData.login}}</h3>\n  </div>\n\n  <ion-col class=\"avatar\" >\n    <img [src]=\"fileImage\" class=\"avatar_img\" alt=\"\">\n    <label class=\"change_avatar\" for=\"fileUp\" (click)=\"selectImage()\">\n      <ion-icon name=\"create\" class=\"icon_upload\"></ion-icon>\n    </label>\n  </ion-col>\n</div>\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваш логин:</ion-label>\n      <ion-input  type=\"email\"  [(ngModel)]=\"userLogin\"  pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваше имя:</ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"firstname\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваша фамилия:</ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"lastname\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Дата рождение:</ion-label>\n      <ion-datetime displayFormat=\"DD.MM.YYYY\" max=\"2005-08-23\" min=\"1944-08-23\" [(ngModel)]=\"birth\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваш номер:</ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"phonenumber\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваш VK:</ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"vk\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" >Ваш Skype:</ion-label>\n      <ion-input  type=\"text\" [(ngModel)]=\"skype\"></ion-input>\n    </ion-item>\n  </ion-card>\n    <ion-button class=\"user-update\" (click)=\"updateUser()\">Обновить</ion-button>\n  <br>\n    <ion-button (click)=\"presentAlert()\">\n   Данный токен\n  </ion-button>\n  <ion-button (click)=\"getUserData()\">\n    Данные в консоле\n  </ion-button>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header .head_panel {\n  display: -webkit-box;\n  display: flex;\n}\nion-header .head_panel button {\n  background: transparent;\n  color: #e6380f;\n  margin-right: 10px;\n  font-size: 1.5rem;\n  border-radius: 5px;\n}\nion-header ion-toolbar {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  --background: #1f2229;\n  color: #fcfaff;\n  box-shadow: #172029 0 0 15px;\n}\nion-content {\n  --background: #1f2229;\n}\nion-content ion-card {\n  position: relative;\n  top: 50px;\n}\nion-content ion-card ion-item {\n  --background: #3d4048;\n  color: rgba(255, 255, 255, 0.5);\n}\nion-button {\n  position: relative;\n  left: 47%;\n  top: 70px;\n  font-size: 1.4rem;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  box-shadow: #6d9160 0 0 5px;\n  --background: #6d9160;\n}\n.user-update {\n  top: 50px;\n}\nion-button:focus {\n  background: #4c8dff;\n}\na {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 49%;\n  top: 52%;\n  font-size: 1rem;\n  color: #fcfaff;\n  text-shadow: 0 0 15px #fcfaff;\n}\n.content_div {\n  background: gray;\n}\n.content_div .avatar {\n  border: none;\n  box-shadow: none;\n  position: relative;\n  top: 20px;\n}\n.content_div .avatar .avatar_img {\n  position: relative;\n  left: 15%;\n  top: 5px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  --background: #1f2229;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n.content_div .avatar .change_avatar {\n  background: #e6bc0a;\n  font-size: 1.7rem;\n  width: 100px !important;\n  color: #344352;\n  position: relative;\n  right: 10px;\n  top: -10px;\n  border-radius: 50%;\n}\n.content_div .avatar .change_avatar .icon_upload {\n  padding-left: 5px;\n  position: relative;\n  top: 3px;\n  left: -2px;\n}\n.data_panel {\n  position: relative;\n  left: 50%;\n}\n.data_panel .name_p, .data_panel .family_p, .data_panel .login_p {\n  position: absolute;\n  top: 10px;\n  width: 50%;\n}\n.data_panel .login_p {\n  top: 40px;\n}\n#file {\n  display: none;\n}\n#fileUp {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXGh0Y3VjXFxlZHVQcm9qZWN0c1xcaW9uaWNcXGFpc19pb25pYy9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNESjtBREVJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQU47QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNESjtBREtBO0VBRUUscUJBQUE7QUNIRjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDSEo7QURLSTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7QUNITjtBRFlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUNURjtBRFdBO0VBQ0UsU0FBQTtBQ1JGO0FEWUE7RUFDRSxtQkFBQTtBQ1RGO0FEYUE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNWRjtBRGFBO0VBQ0UsZ0JBQUE7QUNWRjtBRFdFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDVko7QURZSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDVk47QURZSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNWTjtBRFdNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDVFI7QURnQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNiRjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1pKO0FEY0U7RUFDRSxTQUFBO0FDWko7QURpQkE7RUFDRSxhQUFBO0FDZEY7QURpQkE7RUFDRSxhQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVyIHtcbiAgLmhlYWRfcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNlNjM4MGY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbiAgaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICAgIGNvbG9yOiAjZmNmYWZmO1xuICAgIGJveC1zaGFkb3c6ICMxNzIwMjkgMCAwIDE1cHg7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLy0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbG9nX2JrZy5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuXG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjM2Q0MDQ4O1xuICAgICAgY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcbiAgICB9XG5cbiAgICAvL2JveC1zaGFkb3c6ICMzZDQwNDggMCA1cHggMTBweDtcbiAgfVxuXG5cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDclO1xuICB0b3A6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNmQ5MTYwO1xufVxuLnVzZXItdXBkYXRlIHtcbiAgdG9wOiA1MHB4O1xufVxuXG5cbmlvbi1idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjNGM4ZGZmO1xufVxuXG5cbmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNDklO1xuICB0b3A6IDUyJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZjZmFmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNmY2ZhZmY7XG59XG5cbi5jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIC5hdmF0YXIge1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcblxuICAgIC5hdmF0YXJfaW1nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDE1JTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmNoYW5nZV9hdmF0YXIge1xuICAgICAgYmFja2dyb3VuZDogI2U2YmMwYTtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzM0NDM1MjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC5pY29uX3VwbG9hZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5kYXRhX3BhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIC5uYW1lX3AsIC5mYW1pbHlfcCAsIC5sb2dpbl9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmxvZ2luX3Age1xuICAgIHRvcDogNDBweDtcbiAgfVxufVxuXG5cbiNmaWxlIHtcbiAgZGlzcGxheTogIG5vbmU7XG59XG5cbiNmaWxlVXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiaW9uLWhlYWRlciAuaGVhZF9wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24taGVhZGVyIC5oZWFkX3BhbmVsIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2U2MzgwZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAtLWJhY2tncm91bmQ6ICMxZjIyMjk7XG4gIGNvbG9yOiAjZmNmYWZmO1xuICBib3gtc2hhZG93OiAjMTcyMDI5IDAgMCAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzFmMjIyOTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzNkNDA0ODtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDclO1xuICB0b3A6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJveC1zaGFkb3c6ICM2ZDkxNjAgMCAwIDVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNmQ5MTYwO1xufVxuXG4udXNlci11cGRhdGUge1xuICB0b3A6IDUwcHg7XG59XG5cbmlvbi1idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjNGM4ZGZmO1xufVxuXG5hIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGxlZnQ6IDQ5JTtcbiAgdG9wOiA1MiU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmY2ZhZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjZmNmYWZmO1xufVxuXG4uY29udGVudF9kaXYge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuLmNvbnRlbnRfZGl2IC5hdmF0YXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xufVxuLmNvbnRlbnRfZGl2IC5hdmF0YXIgLmF2YXRhcl9pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1JTtcbiAgdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAjMWYyMjI5O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250ZW50X2RpdiAuYXZhdGFyIC5jaGFuZ2VfYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2U2YmMwYTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzM0NDM1MjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbnRlbnRfZGl2IC5hdmF0YXIgLmNoYW5nZV9hdmF0YXIgLmljb25fdXBsb2FkIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IC0ycHg7XG59XG5cbi5kYXRhX3BhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG4uZGF0YV9wYW5lbCAubmFtZV9wLCAuZGF0YV9wYW5lbCAuZmFtaWx5X3AsIC5kYXRhX3BhbmVsIC5sb2dpbl9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG4uZGF0YV9wYW5lbCAubG9naW5fcCB7XG4gIHRvcDogNDBweDtcbn1cblxuI2ZpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZmlsZVVwIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth.guard */ "./src/app/api/auth.guard.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");















let ProfilePage = class ProfilePage {
    constructor(authGuard, authService, storage, alertController, camera, file, http, webview, actionSheetController, toastController, plt, loadingController, ref, filePath, crop, imagePicker) {
        this.authGuard = authGuard;
        this.authService = authService;
        this.storage = storage;
        this.alertController = alertController;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.crop = crop;
        this.imagePicker = imagePicker;
        this.token = '';
        this.username = '';
        this.userData = {};
        this.input = '';
        this.img = '';
        this.imgData = '';
        this.fileImage = '';
    }
    ngOnInit() {
        this.getToken();
    }
    /******************************************/
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Выберите способ загрузки',
                buttons: [{
                        text: 'из Галерея',
                        handler: () => {
                            this.getPhoto(0);
                        }
                    },
                    {
                        text: 'Камера',
                        handler: () => {
                            this.getFromCamera();
                        }
                    },
                    {
                        text: 'Отмена',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    getFromCamera() {
        const options = {
            quality: 100,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 0,
            correctOrientation: true,
            allowEdit: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            this.fileImage = 'data:image/jpeg;base64,' + imageData;
            this.changeAvatar(this.fileImage);
        }, (err) => {
        });
    }
    getPhoto(sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                targetHeight: 300,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: sourceType,
                saveToPhotoAlbum: false,
                allowEdit: true
            };
            this.camera.getPicture(options).then((imageData) => {
                this.fileImage = 'data:image/jpeg;base64,' + imageData;
                this.changeAvatar(this.fileImage);
                // now you can do whatever you want with the base64Image, I chose to update the db
            }, (err) => {
                // Handle error
            });
        });
    }
    /************************************************/
    changeAvatar(image64) {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://studentapi.myknitu.ru/updateuserimage/', {
            'token': this.token,
            'img': image64
        }).then(res => {
            if (res.data.status) {
                this.notAlert('Оп оп оп ', 'Ваша аватарка изменилась!');
            }
        });
    }
    getMonthIndex(month) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let returnDate = 0;
        for (let i = 0; i < months.length; i++) {
            if (month === months[i]) {
                returnDate = i + 2;
            }
        }
        return returnDate;
    }
    dateRealiseGetUser(date) {
        const arrDate = date.split(' ');
        //console.log(arrDate)
        const monthIndex = this.getMonthIndex(arrDate[1]);
        if (monthIndex > 0) {
            const joiner = [arrDate[2], monthIndex, arrDate[0]];
            this.birth = joiner.join('.');
        }
        console.log(this.birth);
    }
    dateRealise(date) {
        let nDate = new Date(date);
        let month = parseInt(nDate.getMonth().toString());
        return String(nDate.getDate() + '.' + (month++) + '.' + nDate.getFullYear());
    }
    changeListener($event) {
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Данный токен',
                subHeader: '',
                message: this.token,
                buttons: ['Закрыть']
            });
            yield alert.present();
        });
    }
    getToken() {
        this.storage.get('token').then((value) => {
            this.token = value;
            this.getUserData();
        });
        return true;
    }
    getUserData() {
        console.log('axios token ', this.token);
        const tokenLog = { 'token': this.token };
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://studentapi.myknitu.ru/getuser/', tokenLog).then(res => {
            console.log(res.data);
            if (res.data) {
                let user = res.data;
                this.username = user.login;
                this.userData = user;
                this.fileImage = user.img;
                this.userLogin = user.login;
                this.firstname = user.user;
                this.lastname = user.family;
                this.dateRealiseGetUser(user.birthday);
                this.phonenumber = user.phonenumber;
                this.vk = user.vk;
                this.skype = user.skype;
            }
        });
    }
    updateUser() {
        const birthDate = this.dateRealise(this.birth);
        console.log(this.birth);
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://studentapi.myknitu.ru/userupdate/', {
            'token': this.token,
            'nameuser': this.firstname,
            'family': this.lastname,
            'birthday': birthDate,
            'phonenumber': this.phonenumber,
            'vk': 'http://vk.com',
            'skype': 'loginskype'
        }).then(res => {
            if (res.data) {
                console.log(res.data);
                if (res.data.status) {
                    this.notAlert('Обновление', 'Ваши данные обновились!');
                }
            }
            else {
                this.notAlert('Ошибка', 'Проверьте данные для доступности сервера');
            }
        });
    }
    notAlert(title, mess) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: '',
                message: mess,
                buttons: ['Закрыть']
            });
            yield alert.present();
        });
    }
    logout() {
        this.authService.logout();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _api_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"] },
    { type: _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
        _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map