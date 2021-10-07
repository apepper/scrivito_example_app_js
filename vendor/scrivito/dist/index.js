(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("history"), require("html-to-text"), require("promise-polyfill"), require("react"), require("react-dom"), require("speakingurl"), require("tcomb-react"), require("tcomb-validation"), require("underscore"), require("urijs"), require("w3c-xmlhttprequest"));
	else if(typeof define === 'function' && define.amd)
		define(["history", "html-to-text", "promise-polyfill", "react", "react-dom", "speakingurl", "tcomb-react", "tcomb-validation", "underscore", "urijs", "w3c-xmlhttprequest"], factory);
	else if(typeof exports === 'object')
		exports["scrivito"] = factory(require("history"), require("html-to-text"), require("promise-polyfill"), require("react"), require("react-dom"), require("speakingurl"), require("tcomb-react"), require("tcomb-validation"), require("underscore"), require("urijs"), require("w3c-xmlhttprequest"));
	else
		root["scrivito"] = factory(root["history"], root["html-to-text"], root["promise-polyfill"], root["react"], root["react-dom"], root["speakingurl"], root["tcomb-react"], root["tcomb-validation"], root["underscore"], root["urijs"], root["w3c-xmlhttprequest"]);
})((typeof self !== 'undefined' ? self : global), function(__WEBPACK_EXTERNAL_MODULE__7428__, __WEBPACK_EXTERNAL_MODULE__6556__, __WEBPACK_EXTERNAL_MODULE__1932__, __WEBPACK_EXTERNAL_MODULE__8156__, __WEBPACK_EXTERNAL_MODULE__7111__, __WEBPACK_EXTERNAL_MODULE__2018__, __WEBPACK_EXTERNAL_MODULE__7726__, __WEBPACK_EXTERNAL_MODULE__5807__, __WEBPACK_EXTERNAL_MODULE__4952__, __WEBPACK_EXTERNAL_MODULE__8842__, __WEBPACK_EXTERNAL_MODULE__3747__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ absoluteUrl; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6958);


function absoluteUrl(url) {
    var uri = urijs__WEBPACK_IMPORTED_MODULE_0__(url);
    if (uri.normalizeProtocol().protocol() === 'data')
        return url;
    return uri.absoluteTo((0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .currentHref */ .RO)()).toString();
}


/***/ }),

/***/ 2358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ provideAuthGroups; },
/* harmony export */   "m": function() { return /* binding */ getAuthGroups; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7227);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var authGroupsState = (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_1__/* .createStateContainer */ .JH)();
/** @internal */
function provideAuthGroups(authGroups) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkProvideAuthGroups.apply(void 0, __spreadArray([authGroups], excessArgs, false));
    authGroupsState.set(authGroups);
}
function getAuthGroups() {
    return authGroupsState.get();
}
var checkProvideAuthGroups = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .checkArgumentsFor */ .PJ)('provideAuthGroups', [['authGroups', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.String */ .pC.String)]], { docPermalink: 'js-sdk/provideAuthGroups' });


/***/ }),

/***/ 703:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oA": function() { return /* binding */ getNextNavigateToCallId; },
/* harmony export */   "jc": function() { return /* binding */ isLatestNavigateToCallId; },
/* harmony export */   "_i": function() { return /* binding */ basicNavigateTo; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8251);
/* harmony import */ var scrivito_sdk_app_support_change_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4149);
/* harmony import */ var scrivito_sdk_app_support_destination_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7365);
/* harmony import */ var scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9861);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5285);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7227);










var latestCallId = 0;
function getNextNavigateToCallId() {
    latestCallId++;
    return latestCallId;
}
function isLatestNavigateToCallId(callId) {
    return latestCallId === callId;
}
function basicNavigateTo(target, callId) {
    if (callId === void 0) { callId = getNextNavigateToCallId(); }
    (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_9__/* .failIfFrozen */ .un)('basicNavigateTo');
    return (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__/* .load */ .zD)(function () { return destinationForTarget(target); }).then(function (routingTarget) {
        if (isLatestNavigateToCallId(callId)) {
            if (routingTarget.type === 'remote') {
                (0,scrivito_sdk_app_support_change_location__WEBPACK_IMPORTED_MODULE_2__/* .changeLocation */ .z)(routingTarget.url);
            }
            else if (routingTarget.type === 'local') {
                navigateToResource(routingTarget.resource);
            }
            else if (routingTarget.type === 'crossSite') {
                var uri = new urijs__WEBPACK_IMPORTED_MODULE_0__(routingTarget.url);
                if ((0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .isLocalUri */ .m4)(uri)) {
                    navigateToResource(uri.resource());
                }
                else {
                    (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .redirectTo */ .gB)(routingTarget.url);
                }
            }
            else if (routingTarget.type === 'unavailable') {
                (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .logError */ .H)("Could not navigate to Obj " + routingTarget.objId + ", no URL found");
            }
        }
    });
}
function destinationForTarget(target) {
    if (isUrlRoutingTarget(target))
        return destinationForUrl(target.url);
    var objId = target.objId, query = target.query, hash = target.hash;
    var obj = scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__/* .BasicObj.get */ .Jj.get(objId);
    if (!obj)
        return (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .generateDestinationForId */ .N2)({ objId: objId, query: query, hash: hash });
    if ((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_8__/* .isBinaryBasicObj */ .Gf)(obj)) {
        var blob = obj.get('blob', ['binary']);
        if (!blob)
            return (0,scrivito_sdk_app_support_destination_types__WEBPACK_IMPORTED_MODULE_3__/* .generateDestinationUnavailable */ .Y)({ objId: objId });
        return { type: 'remote', url: blob.url() };
    }
    return (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .generateDestination */ .BC)({ obj: obj, query: query, hash: hash });
}
function navigateToResource(resource) {
    var currentResource = scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2();
    if (resource === currentResource) {
        scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx(resource);
    }
    else {
        scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__/* .push */ .VF(resource);
    }
}
function isUrlRoutingTarget(routingTarget) {
    return !!routingTarget.url;
}
function destinationForUrl(url) {
    var uri = urijs__WEBPACK_IMPORTED_MODULE_0__(url);
    return (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .isLocalUri */ .m4)(uri)
        ? { type: 'local', resource: uri.resource() }
        : { type: 'remote', url: url };
}


/***/ }),

/***/ 8333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ basicUrlFor; },
/* harmony export */   "P": function() { return /* binding */ basicUrlForObj; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5285);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function basicUrlFor(target, options) {
    if (target instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .BasicLink */ .AM)
        return urlForLink(target, options);
    if (target instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .Binary */ .Kb)
        return target.url();
    return basicUrlForObj(target, options);
}
function basicUrlForObj(obj, options) {
    if ((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__/* .isBinaryBasicObj */ .Gf)(obj)) {
        var binaryUrl = urlForBinaryObj(obj, options.preserveObjId);
        if (binaryUrl)
            return binaryUrl;
    }
    return urlForNonBinaryObj(obj, options);
}
function urlForBinaryObj(obj, withoutPlaceholder) {
    var blob = obj.get('blob', ['binary']);
    if (blob) {
        return withoutPlaceholder ? blob.urlWithoutPlaceholder() : blob.url();
    }
}
function urlForLink(link, options) {
    if (link.isExternal())
        return link.url();
    var obj = link.obj();
    if (obj instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .BasicObj */ .Jj) {
        return basicUrlForObj(obj, populateMissingOptionsFromLink(options, link));
    }
    throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .ArgumentError */ .ir('Missing link target.');
}
function urlForNonBinaryObj(obj, _a) {
    var queryString = _a.query, queryParameters = _a.queryParameters, withoutOriginIfLocal = _a.withoutOriginIfLocal, hash = _a.hash;
    var query = queryParameters !== null && queryParameters !== void 0 ? queryParameters : queryString;
    if (!withoutOriginIfLocal) {
        return (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_0__/* .generateUrlWithCanonicalOrigin */ .cr)({ obj: obj, query: query, hash: hash });
    }
    var destination = (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_0__/* .generateDestination */ .BC)({ obj: obj, query: query, hash: hash });
    switch (destination.type) {
        case 'local':
            return destination.resource;
        case 'crossSite':
            return destination.url;
        default:
            return destination.fallbackUrl;
    }
}
function populateMissingOptionsFromLink(options, link) {
    var linkOptions = __assign({}, options);
    if (!options.queryParameters && typeof options.query !== 'string') {
        linkOptions.query = link.query() || undefined;
    }
    if (typeof options.hash !== 'string') {
        linkOptions.hash = link.hash() || undefined;
    }
    return linkOptions;
}


/***/ }),

/***/ 8251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k6": function() { return /* binding */ useHistory; },
/* harmony export */   "JY": function() { return /* binding */ getHistoryState; },
/* harmony export */   "U2": function() { return /* binding */ get; },
/* harmony export */   "pj": function() { return /* binding */ getHistoryChangesCount; },
/* harmony export */   "VF": function() { return /* binding */ push; },
/* harmony export */   "gx": function() { return /* binding */ replace; },
/* harmony export */   "XB": function() { return /* binding */ isCurrentHistoryState; }
/* harmony export */ });
/* unused harmony exports reset, createInitialHistory */
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7428);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7227);




var history;
var unlistenToHistory;
var lastAction;
/** @internal */
function useHistory(historyToUse) {
    if (historyToUse.createHref({ pathname: '/' }) !== '/') {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir('Expected a history without a preconfigured basename.' +
            ' For further details, see: https://www.scrivito.com/js-sdk/useHistory');
    }
    if (historyToUse === history) {
        return;
    }
    var isFirstHistory = !history;
    listenToHistory(historyToUse);
    history = historyToUse;
    if (!isFirstHistory) {
        historyHasChanged();
    }
}
function getHistoryState() {
    return {
        historyChangesCount: getHistoryChangesCount(),
        location: get(),
        isRevisit: lastAction === 'POP',
    };
}
function get() {
    var location = getHistory().location;
    return "" + location.pathname + location.search + location.hash;
}
function getHistoryChangesCount() {
    return historyChangesCountState().get() || 0;
}
function push(resource) {
    var uri = new urijs__WEBPACK_IMPORTED_MODULE_1__(resource);
    getHistory().push({
        pathname: uri.pathname(),
        search: uri.search(),
        hash: uri.hash(),
    });
}
function replace(resource) {
    var uri = new urijs__WEBPACK_IMPORTED_MODULE_1__(resource);
    getHistory().replace({
        pathname: uri.pathname(),
        search: uri.search(),
        hash: uri.hash(),
    });
}
function isCurrentHistoryState(historyState) {
    return historyState.historyChangesCount === getHistoryChangesCount();
}
// For test purpose only.
function reset() {
    history = undefined;
    lastAction = undefined;
    unlistenToHistory = undefined;
    historyChangesCountState().clear();
}
// export for test purpose only
function createInitialHistory() {
    return (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();
}
function ensureHistory() {
    if (!history) {
        useHistory(createInitialHistory());
    }
}
function getHistory() {
    ensureHistory();
    return history;
}
function listenToHistory(historyToListen) {
    if (unlistenToHistory) {
        unlistenToHistory();
    }
    if (isHistoryV4(historyToListen)) {
        unlistenToHistory = historyToListen.listen(function (_location, action) {
            historyHasChanged(action);
        });
    }
    else {
        unlistenToHistory = historyToListen.listen(function (_a) {
            var action = _a.action;
            historyHasChanged(action);
        });
    }
}
function historyHasChanged(action) {
    lastAction = action;
    historyChangesCountState().set(getHistoryChangesCount() + 1);
}
function historyChangesCountState() {
    return scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_3__/* .globalState.subState */ .n2.subState('historyChangesCount');
}
function isHistoryV4(historyToCheck) {
    return historyToCheck.hasOwnProperty('length');
}


/***/ }),

/***/ 1784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ canEdit; },
/* harmony export */   "r": function() { return /* binding */ canEditObjWithId; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9679);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5285);





/** @public */
function canEdit(obj) {
    checkCanEditArguments(obj);
    return canEditObjWithId((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__/* .unwrapAppClass */ .bM)(obj).id());
}
function canEditObjWithId(objId) {
    var ui = scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter */ .k;
    if (!ui)
        return false;
    return ((0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__/* .loadWithDefault */ .n4)(false, function () { return ui.canEdit((0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .currentWorkspaceId */ .tV)(), objId); }) ||
        false);
}
var checkCanEditArguments = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .checkArgumentsFor */ .PJ)('canEdit', [['obj', scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .ObjType */ .Bt]], {
    docPermalink: 'js-sdk/canEdit',
});


/***/ }),

/***/ 4149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ changeLocation; },
/* harmony export */   "o": function() { return /* binding */ openInNewWindow; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2644);
/* harmony import */ var scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9679);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9861);





function changeLocation(url) {
    if (scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter */ .k) {
        // change the location of the parent, to avoid CSP errors.
        scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter.navigateToExternalUrl */ .k.navigateToExternalUrl(url);
    }
    else {
        (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .redirectTo */ .gB)(url);
    }
}
function openInNewWindow(url) {
    if (scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter */ .k && (0,_routing__WEBPACK_IMPORTED_MODULE_3__/* .isLocalUri */ .m4)(urijs__WEBPACK_IMPORTED_MODULE_0__(url))) {
        scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter.openInNewUiWindow */ .k.openInNewUiWindow(convertToAbsoluteLocalUrl(url));
    }
    else {
        (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .openWindow */ .xw)(url, '_blank');
    }
}
function convertToAbsoluteLocalUrl(url) {
    var origin = (0,scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__/* .currentOrigin */ .Z)();
    if (origin === undefined)
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .InternalError */ .AQ();
    return new urijs__WEBPACK_IMPORTED_MODULE_0__(url).origin(origin).toString();
}


/***/ }),

/***/ 9102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eZ": function() { return /* binding */ getContentBrowserConfiguration; },
/* harmony export */   "Zh": function() { return /* binding */ configureContentBrowser; }
/* harmony export */ });
/* unused harmony export resetContentBrowserConfiguration */
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9679);
/* harmony import */ var scrivito_sdk_app_support_ui_adapter_compatible_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7624);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5912);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var filters;
var filtersBuilder;
function getContentBrowserConfiguration(validObjClasses) {
    if (filtersBuilder) {
        var context = {};
        if (validObjClasses) {
            context._validObjClasses = validObjClasses;
        }
        var dynamicFilters = filtersBuilder(context);
        if (dynamicFilters) {
            return { filters: dynamicFilters };
        }
    }
    else if (filters) {
        return { filters: filters };
    }
}
/** @internal */
function configureContentBrowser(configuration) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    if (!scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter */ .k) {
        return;
    }
    try {
        checkConfigure.apply(void 0, __spreadArray([configuration], excessArgs, false));
    }
    catch (e) {
        throw e instanceof Error
            ? new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir(removeUnionSubTypeIndexesFromKey(e.message))
            : e;
    }
    if (configuration.filters) {
        filters = configuration.filters;
        if (isFilterBuilder(filters)) {
            filtersBuilder = filters;
            filters = undefined;
        }
        else {
            filters = configuration.filters;
            filtersBuilder = undefined;
        }
    }
    var baseFilter = configuration.baseFilter;
    if (baseFilter) {
        var baseQuery = baseFilter.query;
        if (baseQuery) {
            scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_4__/* .uiAdapter.configureContentBrowser */ .k.configureContentBrowser((0,scrivito_sdk_app_support_ui_adapter_compatible_value__WEBPACK_IMPORTED_MODULE_1__/* .uiAdapterCompatibleValue */ .f)({ baseQuery: baseQuery }));
        }
    }
}
function isFilterBuilder(maybeFilterBuilder) {
    return typeof maybeFilterBuilder === 'function';
}
// For test purpose only.
function resetContentBrowserConfiguration() {
    filters = undefined;
    filtersBuilder = undefined;
}
function removeUnionSubTypeIndexesFromKey(message) {
    // key 'filters/0/xyz... becomes key 'filters/xyz...
    return message.replace(/key 'filters.\d/, "key 'filters");
}
var SearchFieldType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String)]);
var SearchOperatorType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.enums.of */ .pC.enums.of((0,underscore__WEBPACK_IMPORTED_MODULE_0__.intersection)(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .OPERATORS */ .fP, [
    'contains',
    'containsPrefix',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
]));
var SearchValueType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Date */ .pC.Date,
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil,
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Number */ .pC.Number,
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil])),
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Date */ .pC.Date, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil])),
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Number */ .pC.Number, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil])),
], 'SearchValue');
var FilterNodeType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
    title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
});
var FilterCollectionNodeType = FilterNodeType.extend({
    field: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchFieldType),
    operator: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchOperatorType),
    expanded: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
});
var RadioOptionType = FilterNodeType.extend({
    value: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchValueType),
    query: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .ObjSearchType */ .d4),
    selected: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
});
var RadioFilterType = FilterCollectionNodeType.extend({
    type: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.enums.of */ .pC.enums.of(['radioButton']),
    options: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, RadioOptionType),
}, 'RadioFilterDefinition');
var CheckboxOptionType = FilterNodeType.extend({
    value: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchValueType),
    selected: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
});
var CheckboxFilterType = FilterCollectionNodeType.extend({
    type: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.enums.of */ .pC.enums.of(['checkbox']),
    options: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, CheckboxOptionType),
}, 'CheckboxFilterDefinition');
var TreeFilterType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.declare */ .pC.declare('TreeFilterDefinition');
TreeFilterType.define(FilterNodeType.extend({
    type: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.enums.of */ .pC.enums.of(['tree'])),
    icon: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
    query: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .ObjSearchType */ .d4),
    expanded: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
    value: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchValueType),
    field: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchFieldType),
    operator: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(SearchOperatorType),
    selected: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
    options: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, TreeFilterType)),
}));
var FilterDefinitionTypeMapping = {
    tree: TreeFilterType,
    radioButton: RadioFilterType,
    checkbox: CheckboxFilterType,
};
var FilterDefinitionType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([
    FilterDefinitionTypeMapping.tree,
    FilterDefinitionTypeMapping.checkbox,
    FilterDefinitionTypeMapping.radioButton,
]);
FilterDefinitionType.dispatch = function (definition) { return FilterDefinitionTypeMapping[definition.type || 'tree']; };
var StaticFiltersType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, FilterDefinitionType);
var DynamicOrStaticFiltersType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function, StaticFiltersType]);
DynamicOrStaticFiltersType.dispatch = function (v) {
    return scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function.is */ .pC.Function.is(v)
        ? DynamicOrStaticFiltersType.meta.types[0]
        : DynamicOrStaticFiltersType.meta.types[1];
};
var BaseFilterType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
    query: scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .ObjSearchType */ .d4,
});
var ConfigurationType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
    filters: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(DynamicOrStaticFiltersType),
    baseFilter: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(BaseFilterType),
}, 'Configuration');
var checkConfigure = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('configureContentBrowser', [['configuration', ConfigurationType]], {
    docPermalink: 'js-sdk/configureContentBrowser',
});


/***/ }),

/***/ 9504:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ getObjClassForContentTypeMapping; },
/* harmony export */   "h": function() { return /* binding */ configureObjClassForContentType; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7227);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var state = (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_1__/* .createStateContainer */ .JH)();
function getObjClassForContentTypeMapping() {
    return state.get();
}
/** @internal */
function configureObjClassForContentType(configuration) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkConfigureObjClassForContentType.apply(void 0, __spreadArray([configuration], excessArgs, false));
    if (!configuration['*/*']) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ArgumentError */ .ir('No ObjClass has been configured for the contentType "*/*"');
    }
    if (state.get() !== undefined) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ScrivitoError */ .Ix('configureObjClassForContentType must be called only once');
    }
    state.set(configuration);
}
var ContentTypePattern = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.refinement */ .pC.refinement(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.String */ .pC.String, 
// either */*, or
// type/* (type without / and *), or
// type/subtype (subtype without ; and *)
// Note: Intentionally no */subtype
function (s) { return /^(\*\/\*|[^\/\*]+\/(\*|[^\*;]+))$/.test(s); }, 'Content Type');
var ConfigurationType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.dict */ .pC.dict(ContentTypePattern, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .tcomb.String */ .pC.String);
var checkConfigureObjClassForContentType = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .checkArgumentsFor */ .PJ)('configureObjClassForContentType', [['configuration', ConfigurationType]], { docPermalink: 'js-sdk/configureObjClassForContentType' });


/***/ }),

/***/ 4155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a3": function() { return /* binding */ setConstraintsValidationCallback; },
/* harmony export */   "jv": function() { return /* binding */ getConstraintsValidationCallback; }
/* harmony export */ });
/* unused harmony export resetConstraintsValidationCallback */
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);

var constraintsValidationCallback;
function setConstraintsValidationCallback(callback) {
    constraintsValidationCallback = callback;
}
function getConstraintsValidationCallback() {
    if (constraintsValidationCallback) {
        return constraintsValidationCallback;
    }
    throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ScrivitoError */ .Ix('Constraints validation callback is not configured. ' +
        'Forgot to call Scrivito.configure with the "constraintsCallback" option?');
}
// For test purpose only.
function resetConstraintsValidationCallback() {
    constraintsValidationCallback = undefined;
}


/***/ }),

/***/ 811:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ currentAppSpace; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_editing_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6487);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5912);


/** returns an ObjScope that represents what is currently being displayed by
 * the application, e.g. the current workspace.
 */
function currentAppSpace() {
    var currentObjSpace = (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__/* .objSpaceScope */ .hA)((0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__/* .currentObjSpaceId */ .GD)());
    return (0,scrivito_sdk_app_support_editing_context__WEBPACK_IMPORTED_MODULE_0__/* .isComparisonActive */ .rl)()
        ? currentObjSpace
        : currentObjSpace.and(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__/* .excludeDeletedObjs */ .E2);
}


/***/ }),

/***/ 2644:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ currentOrigin; },
/* harmony export */   "k": function() { return /* binding */ setOriginProvider; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);

var originProvider;
function currentOrigin() {
    if (!originProvider)
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .InternalError */ .AQ();
    return originProvider();
}
function setOriginProvider(provider) {
    originProvider = provider;
}


/***/ }),

/***/ 7826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lo": function() { return /* binding */ currentPage; },
/* harmony export */   "WX": function() { return /* binding */ currentPageParams; },
/* harmony export */   "lx": function() { return /* binding */ currentSiteId; },
/* harmony export */   "U": function() { return /* binding */ withDefaultSiteContext; },
/* harmony export */   "pd": function() { return /* binding */ withForbiddenSiteContext; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_current_page_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9507);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1190);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5285);





/** @public */
function currentPage() {
    var _a;
    (0,scrivito_sdk_data__WEBPACK_IMPORTED_MODULE_3__/* .assertNotUsingInMemoryTenant */ .VJ)('Scrivito.currentPage');
    var page = (_a = (0,scrivito_sdk_app_support_current_page_data__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentPageData */ ["if"])()) === null || _a === void 0 ? void 0 : _a.currentPage;
    return page ? (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_4__/* .wrapInAppClass */ .pz)(page) : null;
}
/** @public */
function currentPageParams() {
    var _a;
    (0,scrivito_sdk_data__WEBPACK_IMPORTED_MODULE_3__/* .assertNotUsingInMemoryTenant */ .VJ)('Scrivito.currentPageParams');
    return urijs__WEBPACK_IMPORTED_MODULE_0__.parseQuery(((_a = (0,scrivito_sdk_app_support_current_page_data__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentRoute */ .rk)()) === null || _a === void 0 ? void 0 : _a.query) || '');
}
var currentSiteContext = new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ContextContainer */ .AY();
var forbiddenSiteContext = new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ContextContainer */ .AY();
/** @public */
function currentSiteId() {
    var _a, _b, _c, _d;
    var errorMessage = forbiddenSiteContext.current();
    if (errorMessage)
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ScrivitoError */ .Ix(errorMessage);
    return ((_d = (_a = currentSiteContext.current()) !== null && _a !== void 0 ? _a : (_c = (_b = (0,scrivito_sdk_app_support_current_page_data__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentRoute */ .rk)()) === null || _b === void 0 ? void 0 : _b.siteData) === null || _c === void 0 ? void 0 : _c.siteId) !== null && _d !== void 0 ? _d : null);
}
function withDefaultSiteContext(fn) {
    return currentSiteContext.runWith('default', fn);
}
function withForbiddenSiteContext(message, fn) {
    return forbiddenSiteContext.runWith(message, fn);
}


/***/ }),

/***/ 9507:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "if": function() { return /* binding */ getCurrentPageData; },
/* harmony export */   "rk": function() { return /* binding */ getCurrentRoute; },
/* harmony export */   "Mw": function() { return /* binding */ withCurrentPageContext; },
/* harmony export */   "fW": function() { return /* binding */ getNotFoundErrorPageState; }
/* harmony export */ });
/* unused harmony export setNavigationStateProvider */
/* harmony import */ var scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(811);
/* harmony import */ var scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9861);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var getCurrentNavigationState = function () { return undefined; };
function setNavigationStateProvider(provider) {
    getCurrentNavigationState = provider;
}
var navigationContext = new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ContextContainer */ .AY();
function getCurrentPageData() {
    return (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .loadableWithDefault */ .qu)(undefined, function () {
        var _a;
        var navigationState = (_a = navigationContext.current()) !== null && _a !== void 0 ? _a : getCurrentNavigationState();
        if (!navigationState)
            return undefined;
        var route = navigationState.locationRoute;
        if (route.objId) {
            var currentPage = (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .getObjFrom */ .R2)((0,scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_0__/* .currentAppSpace */ .q)(), route.objId);
            if (!currentPage) {
                // Not found (page disappeared meanwhile)
                return {
                    navigationState: __assign(__assign({}, navigationState), { locationRoute: __assign(__assign({}, route), { objId: undefined }) }),
                };
            }
            return { navigationState: navigationState, currentPage: currentPage };
        }
        return { navigationState: navigationState };
    });
}
function getCurrentRoute() {
    var _a;
    var navigationState = (_a = navigationContext.current()) !== null && _a !== void 0 ? _a : (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .loadableWithDefault */ .qu)(undefined, getCurrentNavigationState);
    return navigationState === null || navigationState === void 0 ? void 0 : navigationState.locationRoute;
}
function withCurrentPageContext(context, fn) {
    return navigationContext.runWith({
        locationRoute: {
            objId: context.page.id(),
            sitePath: context.sitePath,
            siteData: {
                siteId: context.siteId,
                baseUrl: context.baseUrl,
            },
        },
        historyState: {
            historyChangesCount: 0,
            location: "" + context.baseUrl + context.sitePath,
            isRevisit: false,
        },
    }, fn);
}
function getNotFoundErrorPageState() {
    var _a;
    if (navigationContext.current())
        return;
    var navigationState = (_a = getCurrentPageData()) === null || _a === void 0 ? void 0 : _a.navigationState;
    if (!navigationState)
        return;
    if (!(0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_1__/* .isObjNotFoundRoute */ .Kh)(navigationState.locationRoute))
        return;
    return navigationState;
}


/***/ }),

/***/ 7365:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ generateDestinationUnavailable; },
/* harmony export */   "W": function() { return /* binding */ recognizeDestinationUnavailable; }
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);

function generateDestinationUnavailable(params) {
    return {
        type: 'unavailable',
        fallbackUrl: getDestinationUnavailableFallbackUrl(params),
        objId: params.objId,
    };
}
function recognizeDestinationUnavailable(fallbackUri) {
    if (fallbackUri.path() !== '')
        return null;
    var fallbackHash = fallbackUri.hash();
    if (fallbackHash.indexOf('#SCRIVITO_UNAVAILABLE_') === 0) {
        var encodedParams = fallbackHash.substr('#SCRIVITO_UNAVAILABLE_'.length);
        var paramsUri = new urijs__WEBPACK_IMPORTED_MODULE_0__(encodedParams);
        var objId = paramsUri.path();
        var params = { objId: objId };
        if (paramsUri.query())
            params.query = paramsUri.query();
        if (paramsUri.hash())
            params.hash = paramsUri.hash();
        return params;
    }
    return null;
}
function getDestinationUnavailableFallbackUrl(params) {
    var paramsUri = new urijs__WEBPACK_IMPORTED_MODULE_0__('').path(params.objId);
    if (params.query)
        paramsUri.query(params.query);
    if (params.hash)
        paramsUri.hash(params.hash);
    var encodedParams = paramsUri.toString();
    var fallbackUri = new urijs__WEBPACK_IMPORTED_MODULE_0__('').hash("SCRIVITO_UNAVAILABLE_" + encodedParams);
    return fallbackUri.toString();
}


/***/ }),

/***/ 7401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uD": function() { return /* binding */ provideEditingConfig; },
/* harmony export */   "xk": function() { return /* binding */ getEditingConfigFor; },
/* harmony export */   "Gc": function() { return /* binding */ getValidationsConfigFor; },
/* harmony export */   "q3": function() { return /* binding */ getAttributesConfigFor; },
/* harmony export */   "k0": function() { return /* binding */ getAttributeEditingOptionsFor; }
/* harmony export */ });
/* unused harmony exports PropertiesGroupType, resetEditingConfig */
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_validations_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5912);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var editingConfigForClass = {};
/** @internal */
function provideEditingConfig(className, editingConfig) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    checkProvideEditingConfig.apply(void 0, __spreadArray([className, editingConfig], excessArgs, false));
    editingConfigForClass[className] = editingConfig;
}
function getEditingConfigFor(className, propertyName) {
    var config = editingConfigForClass[className];
    if (config) {
        return config[propertyName];
    }
}
function getValidationsConfigFor(className) {
    return getEditingConfigFor(className, 'validations');
}
function getAttributesConfigFor(className) {
    return getEditingConfigFor(className, 'attributes') || {};
}
function getAttributeEditingOptionsFor(className, attributeName, attributeType) {
    var attributes = getAttributesConfigFor(className);
    var attribute = attributes[attributeName];
    var options = attribute ? attribute.options : undefined;
    if (!options)
        return;
    if (attributeType === 'html')
        return options;
    (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .nextTick */ .Y3)(function () { return throwInvalidOptions(options); });
}
var PropertiesGroupDescriptionType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
    title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
    properties: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
    key: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
});
var ComponentGroupDescriptionType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
    title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
    component: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
    properties: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String)),
    key: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
});
var PropertiesGroupType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([
    PropertiesGroupDescriptionType,
    ComponentGroupDescriptionType,
]);
var _a = (function () {
    if (process.env.NODE_ENV !== 'development') {
        return {
            checkProvideEditingConfig: function () { },
            throwInvalidOptions: function () { },
        };
    }
    var EnumValueLocalizationType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
        value: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
        title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
    });
    var HtmlToolbarButtonType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.enums.of */ .pC.enums.of([
        'blockquote',
        'bold',
        'bulletList',
        'clean',
        'code',
        'codeBlock',
        'header1',
        'header2',
        'header3',
        'header4',
        'header5',
        'header6',
        'indent',
        'italic',
        'link',
        'mark',
        'orderedList',
        'outdent',
        'strikethrough',
        'subscript',
        'superscript',
        'underline',
    ]);
    var HtmlToolbarButtonsType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.refinement */ .pC.refinement(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(HtmlToolbarButtonType), function (list) { return list.length > 0; }, 'NonemptyArray');
    var AttributesEditingConfigType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
        title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
        description: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
        values: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(EnumValueLocalizationType)),
        options: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
            toolbar: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(HtmlToolbarButtonsType),
            showHtmlSource: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
        })),
    }));
    var PropertiesGroupsType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.refinement */ .pC.refinement(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(PropertiesGroupType), haveGroupsUniqueKey, 'Unique key as a group identifier for faster rendering (like keys in React do)');
    var InitialContentType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([
        scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .LinkType */ .Un,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Date */ .pC.Date,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Number */ .pC.Number,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String,
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .LinkType */ .Un),
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_3__/* .WidgetType */ .l9),
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
    ]));
    var EditingConfigType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
        attributes: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(AttributesEditingConfigType),
        description: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
        descriptionForContent: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function),
        hideInSelectionDialogs: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Boolean */ .pC.Boolean),
        initialContent: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(InitialContentType),
        initialize: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function),
        initializeCopy: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function),
        properties: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String), scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function])),
        propertiesGroups: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([PropertiesGroupsType, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function])),
        thumbnail: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
        thumbnailForContent: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function),
        title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
        titleForContent: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function),
        validations: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_app_support_validations_config__WEBPACK_IMPORTED_MODULE_1__/* .ValidationsConfigType */ .nN),
    });
    var docPermalink = 'js-sdk/provideEditingConfig';
    return {
        checkProvideEditingConfig: (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('provideEditingConfig', [
            ['className', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String],
            ['editingConfig', EditingConfigType],
        ], { docPermalink: docPermalink }),
        throwInvalidOptions: (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('provideEditingConfig', [['options', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.struct */ .pC.struct({})]], { docPermalink: docPermalink }),
    };
})(), checkProvideEditingConfig = _a.checkProvideEditingConfig, throwInvalidOptions = _a.throwInvalidOptions;
// For test purposes only
function resetEditingConfig() {
    editingConfigForClass = {};
}
function haveGroupsUniqueKey(groups) {
    var groupsWithKey = groups.filter(function (group) { return !!group.key; });
    return (0,underscore__WEBPACK_IMPORTED_MODULE_0__.uniq)(groupsWithKey, 'key').length === groupsWithKey.length;
}


/***/ }),

/***/ 6487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": function() { return /* binding */ isInPlaceEditingActive; },
/* harmony export */   "rl": function() { return /* binding */ isComparisonActive; }
/* harmony export */ });
/* unused harmony exports initializeEditingContextFromBrowsingContext, setIsInPlaceEditingActive, setIsComparisonActive, resetEditingContext */
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5912);

var inPlaceEditingActive = false;
var comparisonActive = false;
/** tries to initialize the editing context from the window name
 *
 * returns true if an editing context was found and initialized
 */
function initializeEditingContextFromBrowsingContext(browsingContextName) {
    var editingContext = editingContextFromBrowsingContext(browsingContextName);
    if (!editingContext.workspaceId) {
        setCurrentWorkspaceId('published');
        return false;
    }
    setCurrentWorkspaceId(editingContext.workspaceId);
    inPlaceEditingActive = !!editingContext.inPlaceEditingActive;
    comparisonActive = !inPlaceEditingActive && !!editingContext.comparisonActive;
    return true;
}
function editingContextFromBrowsingContext(browsingContextName) {
    var markerIndex = browsingContextName.indexOf(' _scrivito {');
    if (markerIndex === -1)
        return {};
    var _a = JSON.parse(browsingContextName.substring(markerIndex + 11)), editing = _a.editing, comparison = _a.comparison, workspaceId = _a.workspaceId;
    return {
        workspaceId: workspaceId,
        inPlaceEditingActive: !!editing,
        comparisonActive: !!comparison,
    };
}
/** @public */
function isInPlaceEditingActive() {
    return inPlaceEditingActive;
}
/** @public */
function isComparisonActive() {
    return comparisonActive;
}
// For test purposes only
function setIsInPlaceEditingActive(isActive) {
    inPlaceEditingActive = isActive;
}
// For test purposes only
function setIsComparisonActive(isActive) {
    comparisonActive = isActive;
}
// For test purposes only
function resetEditingContext() {
    inPlaceEditingActive = false;
    comparisonActive = false;
}


/***/ }),

/***/ 1120:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ setForcedEditorLanguage; },
/* harmony export */   "X": function() { return /* binding */ getForcedEditorLanguage; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7227);

var forcedEditorLanguage = (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_0__/* .createStateContainer */ .JH)();
function setForcedEditorLanguage(language) {
    forcedEditorLanguage.set(language);
}
function getForcedEditorLanguage() {
    return forcedEditorLanguage.get();
}


/***/ }),

/***/ 3647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ getComparisonRange; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9679);
/* harmony import */ var scrivito_sdk_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5912);



function getComparisonRange() {
    return (scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_2__/* .uiAdapter */ .k === null || scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_2__/* .uiAdapter */ .k === void 0 ? void 0 : scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_2__/* .uiAdapter.comparisonRange */ .k.comparisonRange()) || [scrivito_sdk_client__WEBPACK_IMPORTED_MODULE_0__/* .PUBLISHED_SPACE */ .Bm, (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__/* .currentObjSpaceId */ .GD)()];
}


/***/ }),

/***/ 1919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WS": function() { return /* binding */ initialContentFor; },
/* harmony export */   "vI": function() { return /* binding */ initializeContentForObj; },
/* harmony export */   "k9": function() { return /* binding */ initializeContentForWidget; }
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_editing_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7401);
/* harmony import */ var scrivito_sdk_app_support_present_ui_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6494);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5285);







function initialContentFor(className, attributeName) {
    var initialContent = (0,scrivito_sdk_app_support_editing_config__WEBPACK_IMPORTED_MODULE_1__/* .getEditingConfigFor */ .xk)(className, 'initialContent');
    if (initialContent) {
        var attributeContent = initialContent[attributeName];
        if ((0,underscore__WEBPACK_IMPORTED_MODULE_0__.isFunction)(attributeContent)) {
            return attributeContent();
        }
        if (isWidgetlist(attributeContent)) {
            return attributeContent.map(function (widget) {
                var basicWidget = widget._scrivitoPrivateContent;
                var copy = basicWidget.copy();
                return (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__/* .wrapInAppClass */ .pz)(copy);
            });
        }
        return attributeContent;
    }
}
function isWidgetlist(maybeWidgetlist) {
    return (Array.isArray(maybeWidgetlist) &&
        maybeWidgetlist.every(isWidget));
}
function isWidget(maybeWidget) {
    return (!!maybeWidget &&
        maybeWidget._scrivitoPrivateContent instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicWidget */ .E8);
}
function initializeContentForObj(objId) {
    return (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .load */ .zD)(function () { return scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicObj.get */ .Jj.get(objId); }).then(function (basicObj) {
        if (basicObj) {
            initializeContentFor(basicObj);
            initializeContentFromHook(basicObj);
        }
    });
}
function initializeContentForWidget(objId, widgetId) {
    return (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .load */ .zD)(function () { return scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicObj.get */ .Jj.get(objId); }).then(function (basicObj) {
        if (!basicObj)
            return;
        return (0,scrivito_sdk_app_support_present_ui_adapter__WEBPACK_IMPORTED_MODULE_2__/* .presentUiAdapter */ .K)()
            .finishReplicatingObj((0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .currentObjSpaceId */ .GD)(), objId)
            .then(function () {
            var basicWidget = basicObj.widget(widgetId);
            if (basicWidget) {
                initializeContentFor(basicWidget);
                initializeContentFromHook(basicWidget);
            }
        });
    });
}
function initializeContentFor(basicContent) {
    var objClassName = basicContent.objClass();
    var schema = (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__/* .schemaFromBasicObjOrWidget */ .cv)(basicContent);
    if (!schema)
        return;
    var initialAttributes = {};
    Object.keys(schema.attributes).forEach(function (attributeName) {
        var typeInfo = schema.attributes[attributeName];
        var currentValue = basicContent.get(attributeName, typeInfo);
        if ((0,underscore__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(currentValue)) {
            var initialValue = initialContentFor(objClassName, attributeName);
            if (initialValue) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    var attributesWithTypeInfo = (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__/* .unwrapAppAttributes */ .dz)(initialAttributes, schema, objClassName);
    basicContent.update(attributesWithTypeInfo);
}
function initializeContentFromHook(content) {
    var callback = (0,scrivito_sdk_app_support_editing_config__WEBPACK_IMPORTED_MODULE_1__/* .getEditingConfigFor */ .xk)(content.objClass(), 'initialize');
    if (callback)
        callback((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__/* .wrapInAppClass */ .pz)(content));
}


/***/ }),

/***/ 5712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kU": function() { return /* binding */ finishLoading; },
/* harmony export */   "YC": function() { return /* binding */ registerLoadingActivity; }
/* harmony export */ });
/* unused harmony export reset */
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);

var loadingCount = 0;
var deferred;
/** @public */
function finishLoading() {
    if (!deferred) {
        deferred = new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .Deferred */ .BH();
        (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .Y3)(updateLoadingState);
    }
    return deferred.promise;
}
function registerLoadingActivity() {
    loadingCount += 1;
    return createUnregister();
}
// For test purpose only.
function reset() {
    deferred = undefined;
    loadingCount = 0;
}
function createUnregister() {
    var unregisterHasBeenCalled = false;
    return function unregister() {
        if (unregisterHasBeenCalled) {
            // Unregister must not be called twice
            throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .InternalError */ .AQ();
        }
        loadingCount -= 1;
        unregisterHasBeenCalled = true;
        if (loadingCount === 0) {
            (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .Y3)(updateLoadingState);
        }
    };
}
function updateLoadingState() {
    if (deferred && loadingCount === 0) {
        deferred.resolve();
        deferred = undefined;
    }
}


/***/ }),

/***/ 3301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d7": function() { return /* binding */ getMenuHandler; },
  "Js": function() { return /* binding */ getMenuPatch; },
  "ff": function() { return /* binding */ updateMenuExtensions; }
});

// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_handler_builder.ts
var MenuHandlerBuilder = /** @class */ (function () {
    function MenuHandlerBuilder(id) {
        this.id = id;
    }
    MenuHandlerBuilder.prototype.insert = function (customMenuItem) {
        if (customMenuItem && customMenuItem.id === this.id) {
            this.onClick = customMenuItem.onClick;
        }
    };
    MenuHandlerBuilder.prototype.modify = function () {
        // Do nothing
    };
    MenuHandlerBuilder.prototype.remove = function () {
        // Do nothing
    };
    MenuHandlerBuilder.prototype.getHandler = function () {
        return this.onClick;
    };
    return MenuHandlerBuilder;
}());


// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/absolute_url.ts
var absolute_url = __webpack_require__(1244);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_patch_builder.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var MenuPatchBuilder = /** @class */ (function () {
    function MenuPatchBuilder() {
        this.patch = {
            insertIds: [],
            removeIds: [],
            items: {},
            modifyItems: {},
        };
    }
    MenuPatchBuilder.prototype.insert = function (customMenuItem) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuInsertArguments.apply(void 0, __spreadArray([customMenuItem], excessArgs, false));
        this.patch.insertIds = (0,external_underscore_.unique)(__spreadArray(__spreadArray([], this.patch.insertIds, true), [customMenuItem.id], false));
        this.patch.items[customMenuItem.id] = __assign(__assign(__assign({}, (0,external_underscore_.pick)(customMenuItem, 'description', 'group', 'position', 'title')), (0,external_underscore_.mapObject)((0,external_underscore_.pick)(customMenuItem, 'enabled'), function (v) { return !!v; })), iconPatch(customMenuItem.icon));
    };
    MenuPatchBuilder.prototype.modify = function (menuItem) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuModifyArguments.apply(void 0, __spreadArray([menuItem], excessArgs, false));
        this.patch.modifyItems[menuItem.id] = __assign(__assign(__assign({}, this.patch.modifyItems[menuItem.id]), (0,external_underscore_.pick)(menuItem, 'group', 'position', 'title')), iconPatch(menuItem.icon));
    };
    MenuPatchBuilder.prototype.remove = function (id) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuRemoveArguments.apply(void 0, __spreadArray([id], excessArgs, false));
        this.patch.removeIds.push(id);
    };
    MenuPatchBuilder.prototype.getPatch = function () {
        return this.patch;
    };
    return MenuPatchBuilder;
}());

var PositionType = common/* tcomb.interface */.pC["interface"]({
    after: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    before: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
});
var checkMenuInsertArguments = (0,common/* checkArgumentsFor */.PJ)('menu.insert', [
    [
        'options',
        common/* tcomb.interface */.pC["interface"]({
            id: common/* tcomb.String */.pC.String,
            description: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
            enabled: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
            group: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
            icon: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
            onClick: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
            position: common/* tcomb.maybe */.pC.maybe(PositionType),
            title: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
        }),
    ],
], {
    docPermalink: 'js-sdk/extendMenu',
});
var checkMenuModifyArguments = (0,common/* checkArgumentsFor */.PJ)('menu.modify', [
    [
        'options',
        common/* tcomb.interface */.pC["interface"]({
            id: common/* tcomb.String */.pC.String,
            group: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
            icon: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
            position: common/* tcomb.maybe */.pC.maybe(PositionType),
            title: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
        }),
    ],
], {
    docPermalink: 'js-sdk/extendMenu',
});
var checkMenuRemoveArguments = (0,common/* checkArgumentsFor */.PJ)('menu.remove', [['id', common/* tcomb.String */.pC.String]], {
    docPermalink: 'js-sdk/extendMenu',
});
function iconPatch(icon) {
    return icon ? { icon: (0,absolute_url/* absoluteUrl */.G)(icon) } : {};
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/menu/menu_registry.ts
var menu_registry = __webpack_require__(6260);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu.ts




var counterState = (0,state/* createStateContainer */.JH)();
function getMenuPatch() {
    // Make `getMenuPatch`'s state depend on the counter
    getCounter();
    var builder = new MenuPatchBuilder();
    evaluateCallbacks(builder);
    return builder.getPatch();
}
function getMenuHandler(id) {
    var builder = new MenuHandlerBuilder(id);
    evaluateCallbacks(builder);
    return builder.getHandler();
}
/** @public */
function updateMenuExtensions() {
    counterState.set((getCounter() || 0) + 1);
}
function evaluateCallbacks(builder) {
    (0,menu_registry/* getMenuCallbacks */.Ak)().forEach(function (menuCallback) {
        return menuCallback.call(null, builder);
    });
}
function getCounter() {
    return counterState.get();
}


/***/ }),

/***/ 6260:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lg": function() { return /* binding */ registerMenuCallback; },
/* harmony export */   "Ak": function() { return /* binding */ getMenuCallbacks; }
/* harmony export */ });
/* unused harmony export resetMenuRegistry */
var menuCallbacks = [];
function registerMenuCallback(menuCallback) {
    menuCallbacks.push(menuCallback);
}
function getMenuCallbacks() {
    return menuCallbacks;
}
// For test purpose only.
function resetMenuRegistry() {
    menuCallbacks = [];
}


/***/ }),

/***/ 4581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ navigateTo; }
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(703);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5285);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7227);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







/** @internal */
function navigateTo(target, options) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    var callId = (0,scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_1__/* .getNextNavigateToCallId */ .oA)();
    (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_6__/* .failIfFrozen */ .un)('navigateTo');
    if (target === null) {
        (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .nextTick */ .Y3)(function () { return checkNavigateTo.apply(void 0, __spreadArray([target, options], excessArgs, false)); });
        return;
    }
    checkNavigateTo.apply(void 0, __spreadArray([target, options], excessArgs, false));
    var queryParameters;
    var hash = null;
    if (options) {
        var optionsHash = options.hash, optionsParams = options.params, convenienceParams = __rest(options, ["hash", "params"]);
        checkNavigateToConvenience(target, convenienceParams);
        queryParameters = __assign(__assign({}, convenienceParams), optionsParams);
        hash = optionsHash || null;
    }
    var providesTarget = function () { return ((0,underscore__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target) ? target() : target); };
    (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .load */ .zD)(providesTarget)
        .then(function (evaluatedTarget) {
        checkEvaluatedTarget(evaluatedTarget);
        var basicTarget = (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_5__/* .unwrapAppClass */ .bM)(evaluatedTarget);
        if (!(basicTarget instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicObj */ .Jj) &&
            !(basicTarget instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicLink */ .AM)) {
            return;
        }
        return (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_3__/* .load */ .zD)(function () {
            return extractRoutingTarget(basicTarget, queryParameters, hash);
        }).then(function (routingTarget) {
            if (!routingTarget) {
                throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir('The link provided to navigateTo has no destination.');
            }
            return (0,scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_1__/* .basicNavigateTo */ ._i)(routingTarget, callId);
        });
    })
        .catch(function (e) {
        if ((0,scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_1__/* .isLatestNavigateToCallId */ .jc)(callId))
            (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .throwNextTick */ .a6)(e);
    });
}
function extractRoutingTarget(target, query, hash) {
    if (target instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicLink */ .AM) {
        return extractRoutingTargetForLink(target, query, hash);
    }
    return { objId: target.id(), query: query, hash: hash };
}
function extractRoutingTargetForLink(link, queryParameters, hashToApply) {
    if (link.isExternal())
        return { url: link.url() };
    var hash = hashToApply || link.hash();
    var query = queryParameters && !(0,underscore__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(queryParameters)
        ? queryParameters
        : link.queryParameters();
    var linkObj = link.obj();
    var objId = linkObj instanceof scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .BasicObj */ .Jj ? linkObj.id() : link.objId();
    return objId ? { objId: objId, query: query, hash: hash } : undefined;
}
var EvaluatedTargetType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .ObjType */ .Bt, scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_4__/* .LinkType */ .Un]);
var TargetType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Function */ .pC.Function, EvaluatedTargetType]);
var ParamsValueType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.dict */ .pC.dict(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String), scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.Nil */ .pC.Nil])));
var checkNavigateTo = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('navigateTo', [
    ['target', TargetType],
    [
        'options',
        scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb["interface"] */ .pC["interface"]({
            hash: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.String */ .pC.String),
            params: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(ParamsValueType),
        }, { strict: false })),
    ],
], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkNavigateToConvenience = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('navigateTo', [
    ['target', TargetType],
    ['options', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .tcomb.maybe */ .pC.maybe(ParamsValueType)],
], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkEvaluatedTarget = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .checkArgumentsFor */ .PJ)('navigateTo', [['target', EvaluatedTargetType]], {
    docPermalink: 'js-sdk/navigateTo',
});


/***/ }),

/***/ 6243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lT": function() { return /* binding */ getCurrentNavigationState; }
/* harmony export */ });
/* unused harmony exports forceNavigationStateNotResponsible, resetNavigationState, setRecognizedSiteId, resetRecognizedSiteId */
/* harmony import */ var scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8251);
/* harmony import */ var scrivito_sdk_app_support_change_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4149);
/* harmony import */ var scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(811);
/* harmony import */ var scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9861);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5285);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7227);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










function getCurrentNavigationState() {
    return loadableNavigationState.get();
}
var forceNotResponsible = false;
function forceNavigationStateNotResponsible() {
    forceNotResponsible = true;
    loadableNavigationState.reset();
}
function resetNavigationState() {
    forceNotResponsible = false;
}
function calculateNavigationState() {
    if (forceNotResponsible) {
        return {
            historyState: (0,scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__/* .getHistoryState */ .JY)(),
            locationRoute: { sitePath: null },
        };
    }
    var historyState = (0,scrivito_sdk_app_support_browser_location__WEBPACK_IMPORTED_MODULE_1__/* .getHistoryState */ .JY)();
    var locationRoute = recognizeLocation(historyState.location);
    if (typeof locationRoute === 'string')
        return locationRoute;
    return {
        historyState: historyState,
        locationRoute: locationRoute,
    };
}
function handleRedirectToBinary(maybeBinaryUrl) {
    if (typeof maybeBinaryUrl === 'string') {
        (0,scrivito_sdk_app_support_change_location__WEBPACK_IMPORTED_MODULE_2__/* .changeLocation */ .z)(maybeBinaryUrl);
        return false;
    }
    return true;
}
function recognizeLocation(location) {
    var _a, _b;
    var route = (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .recognize */ .jh)(location);
    if ((0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_4__/* .isDestinationUnavailableRecognized */ .BH)(route)) {
        // the browser location can never be DestinationUnavailable
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_5__/* .InternalError */ .AQ();
    }
    if (!route.objId)
        return route;
    var obj = (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__/* .getObjFrom */ .R2)((0,scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_3__/* .currentAppSpace */ .q)().and((0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__/* .restrictToSiteAndGlobal */ .L8)(route.siteData.siteId)), route.objId);
    if (!obj)
        return __assign(__assign({}, route), { objId: undefined });
    if ((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_8__/* .isBinaryBasicObj */ .Gf)(obj)) {
        return (_b = (_a = obj.get('blob', ['binary'])) === null || _a === void 0 ? void 0 : _a.url()) !== null && _b !== void 0 ? _b : __assign(__assign({}, route), { objId: undefined });
    }
    return route;
}
var navigationState = scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_9__/* .globalState.subState */ .n2.subState('currentPage');
var loadableNavigationState = new scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__/* .LoadableData */ .of({
    state: navigationState,
    stream: (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__/* .loadAndObserve */ .DU)(calculateNavigationState)
        .filter(handleRedirectToBinary)
        .filter(handleMovedCurrentPage),
});
var lastNavigationState;
function handleMovedCurrentPage(newState) {
    var movedCurrentPage = (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_6__/* .loadableWithDefault */ .qu)(null, function () {
        return lastNavigationState &&
            detectMovedCurrentPage(lastNavigationState, newState);
    });
    if (movedCurrentPage) {
        // the current page moved to a different URL
        // (e.g. because the permalink was edited in the UI),
        // try to heal the situation by navigating to the Objs new URL.
        (0,scrivito_sdk_app_support_basic_navigate_to__WEBPACK_IMPORTED_MODULE_0__/* .basicNavigateTo */ ._i)({ objId: movedCurrentPage.id() });
        return false;
    }
    lastNavigationState = newState;
    return true;
}
function detectMovedCurrentPage(oldState, newState) {
    return (
    // if the browser URL is unchanged
    newState.historyState.location === oldState.historyState.location &&
        // and was previously recognized as a page
        oldState.locationRoute.objId &&
        // but now suddenly turns into "404"
        !newState.locationRoute.objId &&
        // then consider the page to have "moved" (assuming it still exists)
        (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_7__/* .getObjFrom */ .R2)((0,scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_3__/* .currentAppSpace */ .q)(), oldState.locationRoute.objId));
}
// For test purposes only
function setRecognizedSiteId(_a) {
    var siteData = _a.siteData, historyChangesCount = _a.historyChangesCount;
    var historyState = {
        historyChangesCount: historyChangesCount,
        isRevisit: false,
        location: '',
    };
    var meta = historyChangesCount === -1
        ? {}
        : {
            version: historyChangesCount,
        };
    navigationState.set({
        meta: meta,
        value: {
            historyState: historyState,
            locationRoute: {
                siteData: siteData,
                sitePath: null,
            },
        },
    });
}
// For test purposes only
function resetRecognizedSiteId() {
    navigationState.clear();
}


/***/ }),

/***/ 6494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ presentUiAdapter; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);
/* harmony import */ var _ui_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9679);


/** get the uiAdapter, if you are sure that you in inside the UI */
function presentUiAdapter() {
    if (!_ui_adapter__WEBPACK_IMPORTED_MODULE_1__/* .uiAdapter */ .k)
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .InternalError */ .AQ();
    return _ui_adapter__WEBPACK_IMPORTED_MODULE_1__/* .uiAdapter */ .k;
}


/***/ }),

/***/ 4709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ configurePreviewSizes; },
/* harmony export */   "F": function() { return /* binding */ getPreviewSizes; }
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7227);



var state = (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_2__/* .createStateContainer */ .JH)();
/** @public */
function configurePreviewSizes(previewSizes) {
    checkConfigurePreviewSizes(previewSizes);
    if (!previewSizes.length) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .ArgumentError */ .ir('No sizes has been provided for "configurePreviewSizes"');
    }
    if ((0,underscore__WEBPACK_IMPORTED_MODULE_0__.uniq)(previewSizes, 'width').length !== previewSizes.length) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .ArgumentError */ .ir('A "width" must be unique for sizes');
    }
    if (!previewSizes.every(validatePreviewSizeWidth)) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .ArgumentError */ .ir('A "width" must be a positive integer');
    }
    state.set(previewSizes);
}
function validatePreviewSizeWidth(previewSize) {
    var width = previewSize === null || previewSize === void 0 ? void 0 : previewSize.width;
    if (!width)
        return true;
    return width % 1 === 0 && width > 0;
}
function getPreviewSizes() {
    return state.get();
}
var PreviewSizeType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb["interface"] */ .pC["interface"]({
    title: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.String */ .pC.String,
    width: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.Number */ .pC.Number),
    description: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.String */ .pC.String),
    icon: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.String */ .pC.String),
}, 'PreviewSize');
var checkConfigurePreviewSizes = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .checkArgumentsFor */ .PJ)('configurePreviewSizes', [['previewSizes', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.list */ .pC.list(PreviewSizeType)]], { docPermalink: 'js-sdk/configurePreviewSizes' });


/***/ }),

/***/ 5947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ resolveHtmlUrls; },
/* harmony export */   "q": function() { return /* binding */ replaceInternalLinks; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_basic_url_for__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8333);
/* harmony import */ var scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(811);
/* harmony import */ var scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9861);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_link_resolution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2861);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5912);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






/** @public */
function resolveHtmlUrls(htmlString) {
    checkResolveHtmlUrls(htmlString);
    return replaceInternalLinks(htmlString);
}
function replaceInternalLinks(htmlString, options) {
    return (0,scrivito_sdk_link_resolution__WEBPACK_IMPORTED_MODULE_4__/* .formatInternalLinks */ .fq)(htmlString, function (internalLinkUrl) {
        var objId = internalLinkUrl.obj_id, queryAndHash = __rest(internalLinkUrl, ["obj_id"]);
        var obj = (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_5__/* .getObjFrom */ .R2)((0,scrivito_sdk_app_support_current_app_space__WEBPACK_IMPORTED_MODULE_1__/* .currentAppSpace */ .q)(), objId);
        if (!obj)
            return (0,scrivito_sdk_app_support_routing__WEBPACK_IMPORTED_MODULE_2__/* .generateUrl */ .nu)(__assign({ objId: objId }, queryAndHash));
        return (0,scrivito_sdk_app_support_basic_url_for__WEBPACK_IMPORTED_MODULE_0__/* .basicUrlForObj */ .P)(obj, __assign(__assign(__assign({}, queryAndHash), options), { withoutOriginIfLocal: true }));
    });
}
var checkResolveHtmlUrls = (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .checkArgumentsFor */ .PJ)('resolveHtmlUrls', [['htmlString', scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .tcomb.String */ .pC.String]], { docPermalink: 'js-sdk/resolveHtmlUrls' });


/***/ }),

/***/ 9861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kx": function() { return /* binding */ ensureRoutingDataAvailable; },
  "BC": function() { return /* binding */ generateDestination; },
  "N2": function() { return /* binding */ generateDestinationForId; },
  "nu": function() { return /* binding */ generateUrl; },
  "cr": function() { return /* binding */ generateUrlWithCanonicalOrigin; },
  "ZK": function() { return /* binding */ initRouting; },
  "BH": function() { return /* binding */ isDestinationUnavailableRecognized; },
  "m4": function() { return /* binding */ isLocalUri; },
  "QF": function() { return /* binding */ isNotResponsibleRoute; },
  "Kh": function() { return /* binding */ isObjNotFoundRoute; },
  "jh": function() { return /* binding */ recognize; }
});

// UNUSED EXPORTS: generateLocalPath

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_origin.ts
var current_origin = __webpack_require__(2644);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_page_data.ts
var current_page_data = __webpack_require__(9507);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/destination_types.ts
var destination_types = __webpack_require__(7365);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: ./scrivito_sdk/data/index.ts + 29 modules
var data = __webpack_require__(1190);
// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
// EXTERNAL MODULE: ./scrivito_sdk/models/index.ts + 35 modules
var models = __webpack_require__(5912);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/permalink_cache.ts




var cache = {};
var cacheContentStateId;
var cacheDisabled = new common/* ContextContainer */.AY();
function cacheObjForPermalink(obj, permalink, siteId) {
    if (cacheDisabled.current())
        return;
    // throws, because clearIfOutdated observes only the current obj space
    // i.e. the cache is not invalidated properly for any other obj space
    // To not cache "foreign" obj spaces would also be an option.
    if (!(0,common/* equals */.fS)(obj.objSpaceId(), (0,models/* currentObjSpaceId */.GD)())) {
        throw new common/* InternalError */.AQ();
    }
    if (!obj.siteId())
        return;
    clearIfOutdated();
    if (!cache[siteId])
        cache[siteId] = {};
    cache[siteId][permalink] = obj.id();
}
function objIdForPermalink(permalink, siteId) {
    var _a;
    if (cacheDisabled.current())
        return;
    clearIfOutdated();
    return (_a = cache[siteId]) === null || _a === void 0 ? void 0 : _a[permalink];
}
function withDisabledPermalinkCache(fn) {
    return cacheDisabled.runWith(true, fn);
}
// For test purpose only.
function clearPermalinkCache() {
    cache = {};
    cacheContentStateId = undefined;
}
function clearIfOutdated() {
    var worldContentStateId = (0,loadable/* loadableWithDefault */.qu)(undefined, function () {
        return (0,data/* getContentStateId */.Dk)((0,models/* currentObjSpaceId */.GD)());
    }) || '';
    if (worldContentStateId !== cacheContentStateId) {
        cache = {};
        cacheContentStateId = worldContentStateId;
    }
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/routing/homepage_callback.ts
var homepage_callback = __webpack_require__(6421);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_app_space.ts
var current_app_space = __webpack_require__(811);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/unstable_multi_site_mode.ts
var unstable_multi_site_mode = __webpack_require__(2640);
// EXTERNAL MODULE: ./scrivito_sdk/realm/index.ts + 19 modules
var realm = __webpack_require__(5285);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing_path.ts







function generateRoutingPath(obj, siteId) {
    if (isHomepage(obj, siteId))
        return '/';
    var permalink = generatePermalinkPath(obj, siteId);
    if (permalink)
        return permalink;
    var slug = generateSlug(obj);
    if (slug) {
        return "/" + slug + "-" + obj.id();
    }
    return "/" + obj.id();
}
function recognizeRoutingPath(_a) {
    var _b, _c, _d, _e;
    var pathToRecognize = _a.sitePath, siteId = _a.siteData.siteId;
    var path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');
    if (path === '') {
        return usesOldStyleRouting(siteId)
            ? (_b = (0,homepage_callback/* homepageFromCallback */.R)()) === null || _b === void 0 ? void 0 : _b.id()
            : (_c = (0,models/* getRootObjFrom */.cS)((0,current_app_space/* currentAppSpace */.q)().and((0,models/* restrictToSite */.mz)(siteId)))) === null || _c === void 0 ? void 0 : _c.id();
    }
    return (_d = extractObjIdFromPath(path)) !== null && _d !== void 0 ? _d : (_e = recognizePermalink(path, siteId)) === null || _e === void 0 ? void 0 : _e.id();
}
function generatePermalinkPath(obj, siteId) {
    if (obj.isDeleted())
        return;
    var permalink = obj.permalink();
    if (!permalink)
        return;
    if (usesUnstableMultiSiteModeForSite(siteId) &&
        !(0,unstable_multi_site_mode/* isGlobalOrFromUnstableSelectedSite */.IC)(obj)) {
        return;
    }
    cacheObjForPermalink(obj, permalink, siteId);
    return "/" + permalink;
}
function recognizePermalink(path, siteId) {
    var _a, _b;
    var scope = (0,current_app_space/* currentAppSpace */.q)().and((0,models/* restrictToSiteAndGlobal */.L8)(siteId));
    var objId = objIdForPermalink(path, siteId);
    if (objId)
        return (_a = (0,models/* getObjFrom */.R2)(scope, objId)) !== null && _a !== void 0 ? _a : undefined;
    if (usesUnstableMultiSiteModeForSite(siteId)) {
        return (0,unstable_multi_site_mode/* recognizeUnstableMultiSitePermalink */.tB)(path, scope);
    }
    return (_b = (0,models/* getObjBy */.HG)(scope, '_permalink', path)) !== null && _b !== void 0 ? _b : undefined;
}
function isHomepage(obj, siteId) {
    if (!usesOldStyleRouting(siteId))
        return obj.path() === '/';
    var homepage = (0,loadable/* loadableWithDefault */.qu)(null, homepage_callback/* homepageFromCallback */.R);
    return homepage && homepage.id() === obj.id();
}
function generateSlug(basicObj) {
    var obj = (0,realm/* wrapInAppClass */.pz)(basicObj);
    // App functions can't be blindly trusted, since they can be deleted or monkey-patched
    if (!obj.slug)
        return;
    if (typeof obj.slug !== 'function')
        return;
    var slug = obj.slug();
    if (typeof slug === 'string')
        return slug;
}
function extractObjIdFromPath(input) {
    if (input.length < 16) {
        return null;
    }
    if (input.length > 16 && input.slice(-17, -16) !== '-') {
        return null;
    }
    var id = input.slice(-16);
    if (id.match(/[^0-9a-f]/)) {
        return null;
    }
    return id;
}
function usesOldStyleRouting(siteId) {
    return siteId === 'default';
}
function usesUnstableMultiSiteModeForSite(siteId) {
    return usesOldStyleRouting(siteId) && (0,unstable_multi_site_mode/* useUnstableMultiSiteMode */.Ly)();
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/site_mapping.ts
var site_mapping = __webpack_require__(317);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









function isDestinationUnavailableRecognized(route) {
    return !!route.objId && !route.siteData;
}
function isNotResponsibleRoute(route) {
    return !route.sitePath;
}
function isObjNotFoundRoute(route) {
    return !!route.sitePath && !route.objId;
}
function generateUrl(options) {
    return destinationToUrl(options.obj
        ? generateDestination(options)
        : generateDestinationForId(options));
}
/** get the local url-path for the given obj
 *
 * returns undefined, if the obj's site does not belong to the current origin
 */
function generateLocalPath(obj) {
    var destination = generateDestination({ obj: obj });
    return destination.type === 'local' ? destination.resource : undefined;
}
function destinationToUrl(destination) {
    switch (destination.type) {
        case 'local':
            return destination.resource;
        case 'crossSite':
            return destination.url;
        default:
            return destination.fallbackUrl;
    }
}
function generateDestination(options) {
    var _a;
    var obj = options.obj;
    var currentRoute = (0,current_page_data/* getCurrentRoute */.rk)();
    var currentSiteData = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.siteData;
    var currentSiteId = currentSiteData === null || currentSiteData === void 0 ? void 0 : currentSiteData.siteId;
    var siteId = (_a = obj.siteId()) !== null && _a !== void 0 ? _a : currentSiteId;
    if (!siteId)
        return unavailableFor(options);
    if (siteId !== currentSiteId) {
        var url = canonicalUrlForSite(siteId, options);
        return url ? { type: 'crossSite', url: url } : unavailableFor(options);
    }
    var baseUrl = currentSiteData === null || currentSiteData === void 0 ? void 0 : currentSiteData.baseUrl;
    if (!baseUrl)
        return unavailableFor(options);
    var uri = joinUri(baseUrl, generateRoutingPath(obj, siteId), options);
    return (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.sitePath) || uri.origin() === (0,current_origin/* currentOrigin */.Z)()
        ? { type: 'local', resource: uri.resource() }
        : { type: 'crossSite', url: uri.toString() };
}
/** generate an absolute URL for the given Obj, using the canonical origin
 *
 * the canonical origin is the origin that the baseUrlForSite callback defines.
 */
function generateUrlWithCanonicalOrigin(options) {
    var _a, _b, _c, _d;
    var siteId = (_a = options.obj.siteId()) !== null && _a !== void 0 ? _a : (_c = (_b = (0,current_page_data/* getCurrentRoute */.rk)()) === null || _b === void 0 ? void 0 : _b.siteData) === null || _c === void 0 ? void 0 : _c.siteId;
    if (!siteId)
        return unavailableFor(options).fallbackUrl;
    return ((_d = canonicalUrlForSite(siteId, options)) !== null && _d !== void 0 ? _d : unavailableFor(options).fallbackUrl);
}
function canonicalUrlForSite(siteId, options) {
    var baseUrl = (0,site_mapping/* baseUrlForSite */.XY)(siteId);
    return (baseUrl &&
        joinUri(baseUrl, generateRoutingPath(options.obj, siteId), options).toString());
}
function unavailableFor(options) {
    return (0,destination_types/* generateDestinationUnavailable */.Y)({
        objId: options.obj.id(),
        query: options.query,
        hash: options.hash,
    });
}
function generateDestinationForId(options) {
    var objId = options.objId, query = options.query, hash = options.hash;
    var currentRoute = (0,current_page_data/* getCurrentRoute */.rk)();
    if (!(currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.siteData)) {
        return (0,destination_types/* generateDestinationUnavailable */.Y)({ objId: objId, query: query, hash: hash });
    }
    var uri = joinUri(currentRoute.siteData.baseUrl, "/" + objId, options);
    return currentRoute.sitePath || uri.origin() === (0,current_origin/* currentOrigin */.Z)()
        ? { type: 'local', resource: uri.resource() }
        : { type: 'crossSite', url: uri.toString() };
}
/** join url components into a Uri
 *
 * baseUrl is expected to be normalized (= has no trailing slash)
 * path is expected to be normalized (= has leading slash)
 */
function joinUri(baseUrl, path, _a) {
    var query = _a.query, hash = _a.hash;
    var url = path === '/' ? baseUrl : "" + baseUrl + path;
    var uri = new external_urijs_(url);
    if (query)
        uri.query(query);
    if (hash)
        uri.hash(hash);
    return uri;
}
function recognize(url) {
    var uri = typeof url === 'string' ? new external_urijs_(url) : url;
    var destinationUnavailable = (0,destination_types/* recognizeDestinationUnavailable */.W)(uri);
    if (destinationUnavailable) {
        var objId = destinationUnavailable.objId, query_1 = destinationUnavailable.query;
        return {
            objId: objId,
            sitePath: null,
            query: query_1,
        };
    }
    var recognized = (0,site_mapping/* recognizeSiteAndPath */.Rc)(uri);
    var query = uri.query();
    if (recognized.sitePath === null) {
        return __assign(__assign({}, recognized), { query: query });
    }
    return __assign(__assign({}, recognized), { objId: recognizeRoutingPath(recognized), query: query });
}
function initRouting(_a) {
    var homepageCallback = _a.homepageCallback, siteMappingConfiguration = __rest(_a, ["homepageCallback"]);
    (0,homepage_callback/* setHomepageCallback */.i)(homepageCallback);
    (0,site_mapping/* initSiteMapping */.Vz)(siteMappingConfiguration);
}
function ensureRoutingDataAvailable(basicPage) {
    withDisabledPermalinkCache(function () {
        var url = generateUrlWithCanonicalOrigin({ obj: basicPage });
        var route = recognize(url);
        if (route.objId !== basicPage.id()) {
            throw new common/* ScrivitoError */.Ix("baseUrlForSite produced " + url + " for " + basicPage.id() + ", " +
                'but siteForUrl did not recognize that URL correctly.');
        }
    });
}
function isLocalUri(uri) {
    return uri.is('relative') || uri.origin() === (0,current_origin/* currentOrigin */.Z)();
}


/***/ }),

/***/ 6421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ setHomepageCallback; },
/* harmony export */   "R": function() { return /* binding */ homepageFromCallback; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_app_support_current_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7826);

var homepageCallback;
function setHomepageCallback(callback) {
    homepageCallback = callback;
}
function homepageFromCallback() {
    if (!homepageCallback)
        return null;
    // Because the (real) callback accesses the realm, and the realm requires a
    // site id to return any obj, a (reasonable) site id is forced.
    // Otherwise this would result in a circular call.
    return (0,scrivito_sdk_app_support_current_page__WEBPACK_IMPORTED_MODULE_0__/* .withDefaultSiteContext */ .U)(homepageCallback);
}


/***/ }),

/***/ 9988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R4": function() { return /* binding */ usePrerenderScaling; },
/* harmony export */   "kY": function() { return /* binding */ isInitialUrlAvailable; },
/* harmony export */   "BN": function() { return /* binding */ scaleDownBinary; }
/* harmony export */ });
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);

var prerenderContext = new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ContextContainer */ .AY();
var prerenderWidth = 128;
function usePrerenderScaling(fn) {
    return prerenderContext.runWith(true, fn);
}
function isInitialUrlAvailable(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return !!binary.urlWithoutPlaceholder();
    }
    return !!optimizeForPrerender(binary).urlWithoutPlaceholder();
}
function scaleDownBinary(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return { initialUrl: binary.url() };
    }
    var initialUrl = optimizeForPrerender(binary).url();
    if (prerenderContext.current()) {
        return { initialUrl: initialUrl };
    }
    var highResUrlToDecode = optimizeForScreen(binary).urlWithoutPlaceholder();
    if (!highResUrlToDecode || initialUrl === highResUrlToDecode) {
        return { initialUrl: initialUrl };
    }
    return { initialUrl: initialUrl, highResUrlToDecode: highResUrlToDecode };
}
function optimizeForPrerender(binary) {
    return binary.optimizeFor({ width: prerenderWidth });
}
function optimizeForScreen(binary) {
    // In not fully known circumstances `screen().width` could return `0`, which would produce an invalid transformation.
    var width = Math.max((0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .screen */ .M0)().width * (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .devicePixelRatio */ .KL)(), prerenderWidth);
    // The binary service never scales up, so we transform all images, regardless of their width.
    return binary.optimizeFor({ width: width });
}


/***/ }),

/***/ 1724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aL": function() { return /* binding */ registerScrollTarget; },
  "zT": function() { return /* binding */ scrollIntoView; }
});

// UNUSED EXPORTS: resetScrollIntoView

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/navigation_state.ts
var navigation_state = __webpack_require__(6243);
// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/get_current_page_id.ts


function getCurrentPageId() {
    return (0,loadable/* loadableWithDefault */.qu)(undefined, function () { var _a, _b; return (_b = (_a = (0,navigation_state/* getCurrentNavigationState */.lT)()) === null || _a === void 0 ? void 0 : _a.locationRoute) === null || _b === void 0 ? void 0 : _b.objId; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_element_into_view.ts
function scrollElementIntoView(element) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView for details
    // * Chrome and Firefox support all options
    // * Safari supports the most important options: "block" and "inline" (tested with Safari 12.1.1)
    // * Edge: Unknown
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_into_view.ts



function registerScrollTarget(targetId, element, onReveal) {
    var targetKey = keyFor(targetId);
    var id = (0,common/* randomHex */.Q4)();
    var reveal = function () {
        scrollElementIntoView(element);
        if (onReveal)
            onReveal();
    };
    var scrollTargets = scrollTargetRegistry[targetKey] || [];
    scrollTargets.push({ id: id, reveal: reveal });
    scrollTargetRegistry[targetKey] = scrollTargets;
    if (requestedTargetId === targetKey) {
        reveal();
        requestedTargetId = '';
    }
    return function () {
        var entries = scrollTargetRegistry[targetKey];
        var remainingEntries = entries === null || entries === void 0 ? void 0 : entries.filter(function (entry) { return entry.id !== id; });
        if (remainingEntries === null || remainingEntries === void 0 ? void 0 : remainingEntries.length) {
            scrollTargetRegistry[targetKey] = remainingEntries;
        }
        else {
            delete scrollTargetRegistry[targetKey];
        }
    };
}
function scrollIntoView(targetId) {
    if (targetId.objId !== getCurrentPageId())
        return;
    var targetKey = keyFor(targetId);
    var entries = scrollTargetRegistry[targetKey];
    if (entries) {
        entries.forEach(function (entry) { return entry.reveal(); });
    }
    else {
        requestedTargetId = targetKey;
    }
}
function keyFor(targetId) {
    return [targetId.objId, targetId.attributeName, targetId.widgetId].toString();
}
var scrollTargetRegistry = {};
var requestedTargetId;
// For test purpose only.
function resetScrollIntoView() {
    scrollTargetRegistry = {};
    requestedTargetId = '';
}


/***/ }),

/***/ 317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vz": function() { return /* binding */ initSiteMapping; },
/* harmony export */   "XY": function() { return /* binding */ baseUrlForSite; },
/* harmony export */   "Rc": function() { return /* binding */ recognizeSiteAndPath; }
/* harmony export */ });
/* unused harmony export reset */
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8842);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2644);
/* harmony import */ var scrivito_sdk_app_support_current_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7826);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6958);




// since this callback is from userland, we must assume unknown as the return type
var baseUrlForSiteCallback;
// since this callback is from userland, we must assume unknown as the return type
var siteForUrlCallback;
function initSiteMapping(config) {
    var _a;
    if (config === void 0) { config = {}; }
    if (config.baseUrlForSite) {
        baseUrlForSiteCallback = config.baseUrlForSite;
        siteForUrlCallback = config.siteForUrl;
        return;
    }
    // "desugar" the ClassicConfig
    var basePath = (_a = config.routingBasePath) !== null && _a !== void 0 ? _a : '';
    var baseUrl;
    baseUrlForSiteCallback = function (siteId) {
        var _a, _b;
        if (siteId === null || siteId === 'default') {
            if (!baseUrl) {
                var origin = (_b = (_a = config.origin) !== null && _a !== void 0 ? _a : (0,scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__/* .currentOrigin */ .Z)()) !== null && _b !== void 0 ? _b : throwNoOrigin();
                baseUrl = origin + "/" + basePath.replace(/^\/+/, '');
            }
            return baseUrl;
        }
    };
    siteForUrlCallback = function (url) {
        var uri = new urijs__WEBPACK_IMPORTED_MODULE_0__(url);
        var origin = uri.origin();
        if (origin !== config.origin && origin !== (0,scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__/* .currentOrigin */ .Z)())
            return;
        if (!basePath) {
            return { siteId: 'default', baseUrl: uri.origin() };
        }
        return {
            siteId: 'default',
            baseUrl: new urijs__WEBPACK_IMPORTED_MODULE_0__(uri.origin()).resource(basePath).toString(),
        };
    };
}
function baseUrlForSite(siteId) {
    var result = executeBaseUrlForSiteCallback(siteId);
    if (result === undefined)
        return null;
    if (result === '')
        return null;
    if (typeof result === 'string')
        return removeTrailingSlashes(result);
    reportUnexpectedReturnValue('baseUrlForSite', result, 'String | Void');
    return null;
}
function recognizeSiteAndPath(uriToRecognize) {
    if (!siteForUrlCallback)
        throwNotInitialized();
    var uri = normalizeUri(uriToRecognize);
    var url = uri.toString();
    var result = siteForUrl(url);
    if (!result)
        return { sitePath: null };
    var baseUrl = removeTrailingSlashes(result.baseUrl);
    return {
        siteData: { siteId: result.siteId, baseUrl: baseUrl },
        sitePath: determineSitePath(baseUrl, url),
    };
}
function determineSitePath(baseUrl, url) {
    if (!startsWith(baseUrl, url))
        return null;
    var restOfUrl = url.substring(baseUrl.length);
    var path = removeNonPathComponents(restOfUrl);
    if (path === '')
        return '/';
    if (path.charAt(0) !== '/')
        return null;
    return path;
}
function startsWith(prefix, input) {
    return input.substring(0, prefix.length) === prefix;
}
function removeNonPathComponents(resource) {
    return new urijs__WEBPACK_IMPORTED_MODULE_0__('').resource(resource).path();
}
function normalizeUri(uri) {
    var _a;
    var normalizedUrl = uri.clone();
    if (normalizedUrl.is('relative')) {
        normalizedUrl.origin((_a = (0,scrivito_sdk_app_support_current_origin__WEBPACK_IMPORTED_MODULE_1__/* .currentOrigin */ .Z)()) !== null && _a !== void 0 ? _a : throwNoOrigin());
    }
    normalizedUrl.normalizePath();
    return normalizedUrl;
}
function siteForUrl(url) {
    var result = (0,scrivito_sdk_app_support_current_page__WEBPACK_IMPORTED_MODULE_2__/* .withForbiddenSiteContext */ .pd)('Access to current site inside siteForUrl. Forgot to use onAllSites?', function () { return siteForUrlCallback === null || siteForUrlCallback === void 0 ? void 0 : siteForUrlCallback.call(null, url); });
    if (!isSiteForUrlResult(result)) {
        reportUnexpectedReturnValue('siteForUrl', result, '{siteId: String, baseUrl: String} | Void');
        return undefined;
    }
    return (result && {
        siteId: result.siteId,
        baseUrl: removeTrailingSlashes(result.baseUrl),
    });
}
function removeTrailingSlashes(input) {
    return input.replace(/\/+$/, '');
}
function reportUnexpectedReturnValue(callbackName, actual, expectedType) {
    var errorMessage = "Unexpected return value from " + callbackName + ": got " + (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .prettyPrint */ .xr)(actual) + ", expected type " + expectedType + ". " + SEE_CONFIGURE;
    (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .throwNextTick */ .a6)(new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .ArgumentError */ .ir(errorMessage));
}
function executeBaseUrlForSiteCallback(siteId) {
    if (!baseUrlForSiteCallback)
        throwNotInitialized();
    return baseUrlForSiteCallback.call(null, siteId);
}
// For test purpose only.
function reset() {
    baseUrlForSiteCallback = undefined;
    siteForUrlCallback = undefined;
}
function throwNotInitialized() {
    throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .ScrivitoError */ .Ix('Cannot use routing before Scrivito.configure was called.');
}
function throwNoOrigin() {
    throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .ScrivitoError */ .Ix("Cannot compute an absolute URL without a configured origin or base URL. " + SEE_CONFIGURE);
}
function isSiteForUrlResult(maybeSiteForUrlResult) {
    var siteForUrlResult = maybeSiteForUrlResult;
    if (siteForUrlResult === undefined)
        return true;
    return (typeof (siteForUrlResult === null || siteForUrlResult === void 0 ? void 0 : siteForUrlResult.siteId) === 'string' &&
        typeof (siteForUrlResult === null || siteForUrlResult === void 0 ? void 0 : siteForUrlResult.baseUrl) === 'string');
}
var SEE_CONFIGURE = "Visit " + (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_3__/* .docUrl */ .m0)('js-sdk/configure') + " for more information.";


/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ uiAdapter; }
/* harmony export */ });
/* unused harmony export setUiAdapter */
var uiAdapter;
// For test purpose only.
// => allow undefined
function setUiAdapter(newUiAdapter) {
    uiAdapter = newUiAdapter;
}


/***/ }),

/***/ 7624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ uiAdapterCompatibleValue; }
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4952);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5912);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Supported types must not exceed the supported types mentioned here:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm


function uiAdapterCompatibleValue(value) {
    if (!value)
        return value;
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
            return value;
        case 'object':
            if (isObjSearch(value))
                return uiCompatibleSearchParams(value);
            if ((0,underscore__WEBPACK_IMPORTED_MODULE_0__.isDate)(value))
                return value;
            if (Array.isArray(value))
                return uiCompatibleArrayValue(value);
            return uiCompatibleObjectValue(value);
    }
}
function uiCompatibleArrayValue(array) {
    var copy = [];
    array.forEach(function (item) {
        var compatibleItem = uiAdapterCompatibleValue(item);
        if (compatibleItem !== undefined) {
            copy.push(compatibleItem);
        }
    });
    return copy;
}
function uiCompatibleObjectValue(object) {
    var copy = {};
    Object.keys(object).forEach(function (key) {
        var value = object[key];
        var compatibleValueForKey = uiAdapterCompatibleValue(value);
        if (compatibleValueForKey !== undefined) {
            copy[key] = compatibleValueForKey;
        }
    });
    return copy;
}
function isObjSearch(v) {
    return (v._scrivitoPrivateContent instanceof
        scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_1__/* .BasicObjSearch */ .be);
}
function uiCompatibleSearchParams(objSearch) {
    var _a = objSearch._scrivitoPrivateContent.params(), query = _a.query, params = __rest(_a, ["query"]);
    var sanitizedQuery = query.filter(function (q) { return !isSiteRelated(q.field); });
    return uiAdapterCompatibleValue(__assign(__assign({}, params), { query: sanitizedQuery }));
}
function isSiteRelated(field) {
    return typeof field === 'string'
        ? field === '_site_id'
        : field.indexOf('_site_id') !== -1;
}


/***/ }),

/***/ 2640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NV": function() { return /* binding */ setUnstableMultiSiteMode; },
/* harmony export */   "Ly": function() { return /* binding */ useUnstableMultiSiteMode; },
/* harmony export */   "iY": function() { return /* binding */ getUnstableSiteIdForObjId; },
/* harmony export */   "gq": function() { return /* binding */ unstable_selectSiteId; },
/* harmony export */   "IN": function() { return /* binding */ getUnstableSelectedSiteId; },
/* harmony export */   "tB": function() { return /* binding */ recognizeUnstableMultiSitePermalink; },
/* harmony export */   "IC": function() { return /* binding */ isGlobalOrFromUnstableSelectedSite; }
/* harmony export */ });
/* unused harmony exports UnstableMultiSiteModeOperationError, resetUnstableMultiSiteMode */
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5912);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5285);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var UnstableMultiSiteModeOperationError = /** @class */ (function (_super) {
    __extends(UnstableMultiSiteModeOperationError, _super);
    function UnstableMultiSiteModeOperationError(message) {
        return _super.call(this, message) || this;
    }
    return UnstableMultiSiteModeOperationError;
}(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ScrivitoError */ .Ix));

var getUnstableSiteIdForObjCallback;
function setUnstableMultiSiteMode(callback) {
    getUnstableSiteIdForObjCallback = callback;
}
function useUnstableMultiSiteMode() {
    return !!getUnstableSiteIdForObjCallback;
}
function getUnstableSiteIdForObjId(objId) {
    if (useUnstableMultiSiteMode()) {
        var obj = scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .BasicObj.get */ .Jj.get(objId);
        if (obj)
            return getSiteIdForObj(obj);
    }
    return null;
}
function getSiteIdForObj(obj) {
    var siteId = getUnstableSiteIdForObjCallback((0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_3__/* .wrapInAppClass */ .pz)(obj));
    if (typeof siteId === 'string' && siteId.length > 0) {
        return siteId;
    }
    return null;
}
/** Selecting a site ID only makes sense in the unstable multi-site mode */
function unstable_selectSiteId(siteId) {
    if (!getUnstableSiteIdForObjCallback) {
        throw new UnstableMultiSiteModeOperationError('Scrivito.unstable_selectSiteId is only available in the multi-site mode');
    }
    var preselected = (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__/* .loadableWithDefault */ .qu)(null, getUnstableSelectedSiteId);
    if (preselected && preselected !== siteId) {
        throw new UnstableMultiSiteModeOperationError("Scrivito.unstable_selectSiteId called with " + siteId + ", but " + preselected + " was already selected");
    }
    if (typeof siteId !== 'string' || !siteId) {
        throw new UnstableMultiSiteModeOperationError('Scrivito.unstable_selectSiteId can only be called with a non-empty string');
    }
    selectedSiteId().set(siteId);
}
/** Accessing the selected site ID only makes sense in the multi-site mode */
function getUnstableSelectedSiteId() {
    // This should never happen!
    if (!getUnstableSiteIdForObjCallback) {
        // Calling getUnstableSelectedSiteId is only available in multi-site mode
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .InternalError */ .AQ();
    }
    return selectedSiteId().get() || null;
}
// For test purpose only.
function resetUnstableMultiSiteMode() {
    getUnstableSiteIdForObjCallback = undefined;
}
var loadableCollection = new scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__/* .LoadableCollection */ .X2({
    recordedAs: 'multiSiteMode',
    // the site id is not actually "loaded",
    // we are just waiting for the application to set it
    loadElement: function () { return ({
        loader: function () { return (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .never */ .Fi)(); },
    }); },
});
function selectedSiteId() {
    return loadableCollection.get('selectedSiteId');
}
function recognizeUnstableMultiSitePermalink(path, scope) {
    var _a;
    var siteId = getSiteIdAssumingSelected();
    var objs = (0,scrivito_sdk_models__WEBPACK_IMPORTED_MODULE_2__/* .getAllObjsByValueFrom */ .TW)(scope, '_permalink', path);
    var matchingObjs = objs.filter(function (obj) {
        var objSiteId = getSiteIdForObj(obj);
        return objSiteId ? objSiteId === siteId : true;
    });
    var matchingNotDeletedObjs = matchingObjs.filter(function (obj) { return !obj.isDeleted(); });
    return (_a = matchingNotDeletedObjs[0]) !== null && _a !== void 0 ? _a : matchingObjs[0];
}
function isGlobalOrFromUnstableSelectedSite(obj) {
    var objSiteId = getSiteIdForObj(obj);
    var currentSiteId = getSiteIdAssumingSelected();
    return !objSiteId || objSiteId === currentSiteId;
}
function getSiteIdAssumingSelected() {
    var siteId = (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_1__/* .loadableWithDefault */ .qu)(undefined, getUnstableSelectedSiteId);
    if (siteId === undefined) {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_0__/* .ScrivitoError */ .Ix('Access to routing in the multi-site mode, but the site ID is not yet selected.' +
            ' Forgot to use Scrivito.unstable_selectSiteId?');
    }
    return siteId;
}


/***/ }),

/***/ 225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bI": function() { return /* binding */ VALIDATION_SEVERITY_LEVELS; },
/* harmony export */   "nN": function() { return /* binding */ ValidationsConfigType; },
/* harmony export */   "np": function() { return /* binding */ getValidationCallback; },
/* harmony export */   "eK": function() { return /* binding */ isContentValidationCallback; },
/* harmony export */   "tj": function() { return /* binding */ isAttributeValidationConstraintsWithOptions; }
/* harmony export */ });
/* unused harmony export isAttributeValidationCallback */
/* harmony import */ var scrivito_sdk_app_support_constraints_validation_callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4155);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6958);


var VALIDATION_SEVERITY_LEVELS = [
    'error',
    'warning',
    'info',
];
var ConstraintsConfig = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb["interface"] */ .pC["interface"]({
    severity: scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.maybe */ .pC.maybe(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.enums.of */ .pC.enums.of(VALIDATION_SEVERITY_LEVELS)),
});
var ConstraintsWithConfig = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.tuple */ .pC.tuple([ConstraintsConfig, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.Object */ .pC.Object]);
var ValidationsConfigType = scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.union */ .pC.union([
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.Function */ .pC.Function,
    scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.list */ .pC.list(scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.union */ .pC.union([scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.String */ .pC.String, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.Function */ .pC.Function, scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_1__/* .tcomb.Object */ .pC.Object, ConstraintsWithConfig])),
]));
function getValidationCallback(callbackOrConstraints) {
    if (isAttributeValidationCallback(callbackOrConstraints)) {
        return callbackOrConstraints;
    }
    var constraints = isAttributeValidationConstraintsWithOptions(callbackOrConstraints)
        ? callbackOrConstraints[1]
        : callbackOrConstraints;
    return (0,scrivito_sdk_app_support_constraints_validation_callback__WEBPACK_IMPORTED_MODULE_0__/* .getConstraintsValidationCallback */ .jv)()(constraints);
}
function isContentValidationCallback(maybeContentValidationCallback) {
    return typeof maybeContentValidationCallback === 'function';
}
function isAttributeValidationCallback(maybeAttributeValidationCallback) {
    return typeof maybeAttributeValidationCallback === 'function';
}
function isAttributeValidationConstraintsWithOptions(candidate) {
    if (!Array.isArray(candidate))
        return false;
    var maybeOptions = candidate[0], maybeConstraints = candidate[1];
    if (!isAttributeValidationOptions(maybeOptions))
        return false;
    return !!maybeConstraints && typeof maybeConstraints === 'object';
}
function isAttributeValidationOptions(maybeAttributeValidationOptions) {
    if (!maybeAttributeValidationOptions)
        return false;
    if (typeof maybeAttributeValidationOptions !== 'object')
        return false;
    var maybeSeverity = maybeAttributeValidationOptions
        .severity;
    if (!maybeSeverity)
        return true;
    return VALIDATION_SEVERITY_LEVELS.indexOf(maybeSeverity) !== -1;
}


/***/ }),

/***/ 1893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HT": function() { return /* binding */ GET; },
/* harmony export */   "H8": function() { return /* binding */ SEND; },
/* harmony export */   "M": function() { return /* binding */ STREAM; }
/* harmony export */ });
var GET = 'GET';
var SEND = 'SEND';
var STREAM = 'STREAM';


/***/ }),

/***/ 4999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HT": function() { return /* reexport */ adapter_description/* GET */.HT; },
  "H8": function() { return /* reexport */ adapter_description/* SEND */.H8; },
  "M": function() { return /* reexport */ adapter_description/* STREAM */.M; },
  "Sp": function() { return /* reexport */ createAdapterConnection; },
  "oc": function() { return /* reexport */ linkViaPort; },
  "XP": function() { return /* reexport */ startAdapterMessageServer; }
});

// UNUSED EXPORTS: RemoteAdapterError, anticipatedMessageLink, connectTo, createAdapterClient, createAdapterMessageClient, createAdapterProxy, postMessageLinkFor, wrapWithLogging

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_client.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




/** creates an AdapterClient, using the provided AdapterConnection.
 */
function createAdapterClient(description, connection) {
    var adapterState = createStateContainer();
    var adapterClient = {};
    Object.keys(description).forEach(function (methodName) {
        // methodName is keyof Adapter, because description is AdapterDescription
        var methodType = description[methodName];
        if (methodType === GET) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                var methodNameAsGet = methodName;
                var state = adapterState
                    .subState(methodNameAsGet)
                    .subState(computeCacheKey(params));
                var data = new LoadableData({
                    state: state,
                    stream: connection.stream.apply(connection, __spreadArray([methodNameAsGet], params, false)),
                });
                return data.get();
            };
        }
        if (methodType === SEND) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return connection.send.apply(connection, __spreadArray([methodName], params, false));
            };
        }
        if (methodType === STREAM) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return connection.stream.apply(connection, __spreadArray([methodName], params, false));
            };
        }
    });
    // all methods needed for `AdapterClient` were added
    return adapterClient;
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_proxy.ts
var adapter_proxy_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



/** create a Proxy for an Adapter Client.
 *
 * An Adapter Proxy is useful, if the desired Adapter Client instance
 * changes over time. The Proxy Adapter will route all communication
 * to the 'current' Adapter Client instance.
 *
 * The passed-in callback (`currentClient`) determines which client is
 * considered 'current'. The callback must be observable.
 *
 * The proxy is returned as an AdapterConnection,
 * that can be wrapped in an AdapterClient, for easier usage.
 */
function createAdapterProxy(currentClient) {
    return {
        stream: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return loadAndObserve(function () {
                var client = currentClient();
                if (!client) {
                    return;
                }
                var method = client[methodName];
                return { valueFromClient: method.call.apply(method, adapter_proxy_spreadArray([client], params, false)) };
            })
                .filter(isPresent)
                .map(function (result) { return result.valueFromClient; });
        },
        send: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var promise = observe(currentClient)
                .filter(isPresent)
                .waitForFirst()
                .then(function (client) {
                var method = client[methodName];
                return method.call.apply(method, adapter_proxy_spreadArray([client], params, false));
            });
            // Promise<T> is assignable to Promisify<T>, but TS does not infer that
            return promise;
        },
    };
}

// EXTERNAL MODULE: ./scrivito_sdk/bridge/adapter_description.ts
var adapter_description = __webpack_require__(1893);
;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_connection.ts
var adapter_connection_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



/** create a connection to the given adapter */
function createAdapterConnection(description, adapter) {
    return {
        stream: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            // since MethodName is GetMethods or StreamMethods, method is Method
            var method = adapter[methodName];
            var methodType = description[methodName];
            if (methodType === adapter_description/* GET */.HT) {
                return (0,loadable/* loadAndObserve */.DU)(function () { return method.call.apply(method, adapter_connection_spreadArray([adapter], params, false)); });
            }
            if (methodType === adapter_description/* STREAM */.M) {
                var result = method.call.apply(method, adapter_connection_spreadArray([adapter], params, false));
                // a STREAM method always returns a stream :-)
                return result;
            }
            // unexpected method type
            throw new common/* InternalError */.AQ();
        },
        send: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            // since MethodName is SendMethods, method is Method
            var method = adapter[methodName];
            var promise = new common/* ScrivitoPromise */.s8(function (resolve) {
                (0,common/* nextTick */.Y3)(function () { return resolve(method.call.apply(method, adapter_connection_spreadArray([adapter], params, false))); });
            });
            // Promise<T> is assignable to Promisify<T>, but TS does not infer that
            return promise;
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/link_via_port.ts

function linkViaPort(messagePort) {
    return {
        incomingMessages: new common/* Streamable */.fU(function (subscriber) {
            function listener(event) {
                subscriber.next({ data: event.data });
            }
            messagePort.addEventListener('message', listener);
            messagePort.start();
            return function () {
                messagePort.removeEventListener('message', listener);
            };
        }),
        sendMessage: function (message) {
            if (message.transfer === undefined) {
                messagePort.postMessage(message.data);
            }
            else {
                messagePort.postMessage(message.data, message.transfer);
            }
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/post_message_link.ts
var post_message_link_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/** Get a Link for receiving and sending messages via the message events of
 * the given window.
 *
 * Note: The link forwards _all_ events, without filtering.
 * Checking for a secure origin is the responsibility of the caller!
 */
function postMessageLinkFor(theWindow) {
    return {
        incomingMessages: new Streamable(function (subscriber) {
            function listener(event) {
                if (event.source === null)
                    return;
                subscriber.next({
                    remoteOrigin: event.origin,
                    // when receiving MessageEvent on a window, the source is also a window.
                    remoteWindow: event.source,
                    data: event.data,
                    ports: event.ports,
                });
            }
            theWindow.addEventListener('message', listener);
            return function () {
                theWindow.removeEventListener('message', listener);
            };
        }),
        sendMessage: function (message) {
            message.remoteWindow.postMessage(message.data, message.remoteOrigin, post_message_link_spreadArray([], (message.ports || []), true));
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/messages.ts
function isAdapterMessage(data) {
    return (!!data &&
        typeof data.channel === 'number' &&
        typeof data.verb === 'string');
}
function isInvocationMessage(message) {
    return (typeof message.method === 'string' &&
        Array.isArray(message.params));
}
function isSendMessage(message) {
    return message.verb === 'SEND' && isInvocationMessage(message);
}
function isOpenStreamMessage(message) {
    return message.verb === 'OPEN' && isInvocationMessage(message);
}
function isCloseStreamMessage(message) {
    return message.verb === 'CLOSE';
}
function isResponseMessage(message) {
    return (message.verb === 'RESPOND' &&
        typeof message.sequence === 'number');
}
function isErrorMessage(message) {
    return message.verb === 'ERROR';
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/stream_demux.ts

var StreamDemux = /** @class */ (function () {
    function StreamDemux(muxedStream) {
        this.muxedStream = muxedStream;
        this.openStreams = {};
    }
    StreamDemux.prototype.streamWithId = function (streamId) {
        var _this = this;
        return new common/* Streamable */.fU(function (subscriber) {
            _this.ensureSubscribed();
            var streamSubject = _this.subjectForStreamId(streamId);
            var subscription = streamSubject.subscribe(subscriber);
            return function () {
                subscription.unsubscribe();
                _this.removeSubjectIfAbandoned(streamId);
            };
        });
    };
    StreamDemux.prototype.removeSubjectIfAbandoned = function (streamId) {
        var streamSubject = this.subjectForStreamId(streamId);
        if (streamSubject.subscriberCount() === 0) {
            delete this.openStreams[streamId];
            this.unsubscribeIfAbandoned();
        }
    };
    StreamDemux.prototype.subjectForStreamId = function (streamId) {
        var existingStream = this.openStreams[streamId];
        if (existingStream) {
            return existingStream;
        }
        var newStream = new common/* Subject */.xQ();
        this.openStreams[streamId] = newStream;
        return newStream;
    };
    StreamDemux.prototype.ensureSubscribed = function () {
        var _this = this;
        if (this.subscription)
            return;
        this.subscription = this.muxedStream.subscribe({
            next: function (message) {
                var streamId = message.streamId;
                var streamSubject = _this.openStreams[streamId];
                if (streamSubject)
                    streamSubject.next(message.data);
            },
            complete: function () {
                return Object.keys(_this.openStreams).forEach(function (id) {
                    var streamSubject = _this.openStreams[id];
                    if (streamSubject) {
                        streamSubject.complete();
                        delete _this.openStreams[id];
                    }
                });
            },
        });
    };
    StreamDemux.prototype.unsubscribeIfAbandoned = function () {
        if (Object.keys(this.openStreams).length === 0 && this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    return StreamDemux;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_message_client.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function createAdapterMessageClient(portLink) {
    return new AdapterMessageClient(portLink);
}
var AdapterMessageClient = /** @class */ (function () {
    function AdapterMessageClient(portLink) {
        this.portLink = portLink;
        /** a counter used to generate channel ids */
        this.channelCounter = 1;
        this.incomingChannels = new StreamDemux(this.portLink.incomingMessages
            .map(function (message) { return message.data; })
            .filter(isAdapterMessage)
            .map(function (message) { return ({
            streamId: message.channel,
            data: message,
        }); }));
    }
    AdapterMessageClient.prototype.stream = function (methodName) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return new common/* Streamable */.fU(function (subscriber) {
            var channel = _this.getNextChannelId();
            _this.postMessage({
                channel: channel,
                verb: 'OPEN',
                method: methodName,
                params: params,
            });
            var processedSequence;
            var subscription = _this.incomingChannels
                .streamWithId(channel)
                .subscribe(function (message) {
                if (isResponseMessage(message)) {
                    if (processedSequence !== undefined &&
                        message.sequence <= processedSequence) {
                        return;
                    }
                    // we trust the remote side to respond with the correct type
                    subscriber.next(message.data);
                    processedSequence = message.sequence;
                }
            });
            return function () {
                _this.postMessage({
                    channel: channel,
                    verb: 'CLOSE',
                });
                subscription.unsubscribe();
            };
        });
    };
    AdapterMessageClient.prototype.send = function (methodName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var channel = this.getNextChannelId();
        this.postMessage({
            channel: channel,
            verb: 'SEND',
            method: methodName,
            params: params,
        });
        var resultPromise = this.incomingChannels
            .streamWithId(channel)
            .filter(isSendReply)
            .waitForFirst()
            .then(function (message) {
            if (isErrorMessage(message)) {
                throw new RemoteAdapterError(message.errorMessage);
            }
            // we trust the remote side to respond with the correct type
            return message.data;
        });
        // Promise<T> is assignable to Promisify<T>, but TS does not infer that
        return resultPromise;
    };
    AdapterMessageClient.prototype.postMessage = function (message) {
        this.portLink.sendMessage({
            data: message,
            transfer: portsToTransfer(message),
        });
    };
    AdapterMessageClient.prototype.getNextChannelId = function () {
        return this.channelCounter++;
    };
    return AdapterMessageClient;
}());
var RemoteAdapterError = /** @class */ (function (_super) {
    __extends(RemoteAdapterError, _super);
    function RemoteAdapterError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoteAdapterError;
}(common/* ScrivitoError */.Ix));

function portsToTransfer(message) {
    if (message.verb === 'SEND') {
        return message.params.filter(isMessagePort);
    }
}
function isMessagePort(maybePort) {
    return maybePort instanceof MessagePort;
}
function isSendReply(message) {
    return isResponseMessage(message) || isErrorMessage(message);
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_invocation.ts
/** checks if the given invocation has the correct type for the adapter */
function isMatchingAdapterInvocation(description, expectedMethodDescription, invocation) {
    var actualMethodDescription = description[invocation.methodName];
    // Currently, we only check that the method exists and has a matching
    // description (GET vs. SEND).
    // We trust the remote site to provide correctly typed params.
    return actualMethodDescription === expectedMethodDescription;
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_message_server.ts
var adapter_message_server_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





function startAdapterMessageServer(portLink, adapterConnection, description, errorHandler) {
    var server = new AdapterMessageServer(portLink, adapterConnection, description, errorHandler);
    server.start();
}
var AdapterMessageServer = /** @class */ (function () {
    function AdapterMessageServer(portLink, adapterConnection, description, errorHandler) {
        this.portLink = portLink;
        this.adapterConnection = adapterConnection;
        this.description = description;
        this.errorHandler = errorHandler;
        this.incomingMessages = portLink.incomingMessages
            .map(function (message) { return message.data; })
            .filter(isAdapterMessage);
        this.incomingChannels = new StreamDemux(this.incomingMessages.map(function (message) { return ({
            streamId: message.channel,
            data: message,
        }); }));
    }
    AdapterMessageServer.prototype.start = function () {
        var _this = this;
        this.incomingMessages.subscribe(function (message) {
            if (isOpenStreamMessage(message)) {
                _this.handleOpenStreamMessage(message);
            }
            else if (isSendMessage(message)) {
                _this.handleSendMessage(message);
            }
        });
    };
    AdapterMessageServer.prototype.handleOpenStreamMessage = function (message) {
        var _this = this;
        var invocation = invocationFrom(message);
        var adapterStream = this.adapterStreamForInvocation(invocation);
        if (!adapterStream)
            return;
        var channel = message.channel;
        var sequence = 1;
        var subscription = adapterStream.subscribe(function (data) {
            _this.postMessage({
                verb: 'RESPOND',
                data: data,
                channel: channel,
                sequence: sequence,
            });
            sequence++;
        });
        this.incomingChannels
            .streamWithId(channel)
            .filter(isCloseStreamMessage)
            .waitForFirst()
            .then(function () { return subscription.unsubscribe(); })
            .catch(function (error) {
            subscription.unsubscribe();
            if (error instanceof common/* EndOfStreamError */.dL) {
                // link to client was closed (e.g. due to window reload)
                return;
            }
            throw error;
        });
    };
    AdapterMessageServer.prototype.adapterStreamForInvocation = function (invocation) {
        var _a, _b;
        if (isMatchingAdapterInvocation(this.description, adapter_description/* GET */.HT, invocation)) {
            return (_a = this.adapterConnection).stream.apply(_a, adapter_message_server_spreadArray([invocation.methodName], invocation.params, false));
        }
        if (isMatchingAdapterInvocation(this.description, adapter_description/* STREAM */.M, invocation)) {
            return (_b = this.adapterConnection).stream.apply(_b, adapter_message_server_spreadArray([invocation.methodName], invocation.params, false));
        }
    };
    AdapterMessageServer.prototype.handleSendMessage = function (message) {
        var _a;
        var _this = this;
        var invocation = invocationFrom(message);
        if (!isMatchingAdapterInvocation(this.description, adapter_description/* SEND */.H8, invocation)) {
            return;
        }
        (_a = this.adapterConnection)
            .send.apply(_a, adapter_message_server_spreadArray([invocation.methodName], invocation.params, false)).then(function (data) {
            return _this.postMessage({
                verb: 'RESPOND',
                data: data,
                channel: message.channel,
                sequence: 1,
            });
        }, function (error) {
            var errorMessage = _this.errorHandler(error);
            _this.postMessage({
                verb: 'ERROR',
                errorMessage: errorMessage,
                channel: message.channel,
            });
        });
    };
    AdapterMessageServer.prototype.postMessage = function (message) {
        this.portLink.sendMessage({ data: message });
    };
    return AdapterMessageServer;
}());
function invocationFrom(message) {
    return {
        methodName: message.method,
        params: message.params,
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/anticipated_message_link.ts

/** Convert a Promise to a MessageLink into the promised MessageLink. */
function anticipatedMessageLink(linkPromise) {
    return {
        incomingMessages: anticipatedStream(linkPromise.then(function (link) { return link.incomingMessages; })),
        sendMessage: function (message) {
            return linkPromise.then(function (link) { return link.sendMessage(message); });
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/connect_client.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/** Contact a UI window via message,
 * to retrieve a MessagePort for further communication.
 */
function connectTo(uiWindow, eventLink, clientDescription) {
    var requestId = randomId();
    eventLink.sendMessage({
        remoteWindow: uiWindow,
        remoteOrigin: '*',
        data: generateConnectRequestMessage(requestId, clientDescription),
    });
    return eventLink.incomingMessages
        .filter(function (event) { return event.remoteWindow === uiWindow; })
        .map(function (event) {
        var data = event.data;
        if (isConnectResponseMessage(data) &&
            data.requestId === requestId &&
            event.ports &&
            event.ports.length > 0) {
            return {
                port: event.ports[0],
                origin: event.remoteOrigin,
            };
        }
    })
        .filter(isPresent)
        .waitForFirst();
}
function generateConnectRequestMessage(requestId, clientDescription) {
    return __assign({ type: 'ScrivitoConnectRequest', requestId: requestId }, clientDescription);
}
function isConnectResponseMessage(data) {
    return (!!data &&
        data.type === 'ScrivitoConnectResponse');
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/wrap_with_logging.ts
var wrap_with_logging_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/** Wrap a connection with a logging middleware
 *
 * Returns a new connection, which has been wrapped with logging capabilities.
 *
 * You can set a logger using the returned function.
 * The connection will then log its traffic to the logger.
 * Usually, `console.log` is used as the logger.
 * If no logger is set, the runtime overhead is small.
 */
function wrapWithLogging(connection) {
    var logger;
    return {
        setLogger: function (newLogger) {
            logger = newLogger;
        },
        connection: {
            stream: function (methodName) {
                var params = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    params[_i - 1] = arguments[_i];
                }
                return new Streamable(function (subscriber) {
                    if (logger)
                        logger.apply(void 0, wrap_with_logging_spreadArray(['GET', methodName], params, false));
                    return connection
                        .stream.apply(connection, wrap_with_logging_spreadArray([methodName], params, false)).map(function (value) {
                        if (logger) {
                            logger.apply(void 0, wrap_with_logging_spreadArray(wrap_with_logging_spreadArray(['GET', methodName], params, false), ['RECEIVE', value], false));
                        }
                        return value;
                    })
                        .subscribe(subscriber);
                });
            },
            send: function (methodName) {
                var params = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    params[_i - 1] = arguments[_i];
                }
                if (logger)
                    logger.apply(void 0, wrap_with_logging_spreadArray(['SEND', methodName], params, false));
                return connection.send.apply(connection, wrap_with_logging_spreadArray([methodName], params, false)).then(function (response) {
                    if (logger) {
                        logger.apply(void 0, wrap_with_logging_spreadArray(wrap_with_logging_spreadArray(['SEND', methodName], params, false), ['RECEIVE', response], false));
                    }
                    return response;
                });
            },
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/bridge/index.ts













/***/ }),

/***/ 457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bm": function() { return /* reexport */ PUBLISHED_SPACE; },
  "h_": function() { return /* reexport */ VisitorAuthenticationProvider; },
  "i3": function() { return /* reexport */ cmsRestApi; },
  "Qw": function() { return /* reexport */ cmsRetrieval; },
  "KP": function() { return /* reexport */ copyObj; },
  "H0": function() { return /* reexport */ getWorkspaceChanges; },
  "cm": function() { return /* reexport */ getWorkspaceId; },
  "P7": function() { return /* reexport */ isEmptySpaceId; },
  "gg": function() { return /* reexport */ isExistentObjJson; },
  "MD": function() { return /* reexport */ isFetchingActive; },
  "J8": function() { return /* reexport */ isUnavailableObjJson; },
  "O6": function() { return /* reexport */ isWidgetlistAttributeJson; },
  "Hn": function() { return /* reexport */ isWorkspaceObjSpaceId; },
  "AL": function() { return /* reexport */ retrieveObj; },
  "_i": function() { return /* reexport */ useDefaultPriority; },
  "kq": function() { return /* reexport */ useXmlHttpRequest; },
  "dx": function() { return /* reexport */ withEachAttributeJson; }
});

// UNUSED EXPORTS: AuthFailureCounter, ClientError, MissingWorkspaceError, UnauthorizedError, isComparisonRange, isObjSpaceId, replaceCmsRetrieval, requestBuiltInUserSession, retrieveObjFieldDiffs, setupRegisterVerificator

// NAMESPACE OBJECT: ./scrivito_sdk/client/public_authentication.ts
var public_authentication_namespaceObject = {};
__webpack_require__.r(public_authentication_namespaceObject);
__webpack_require__.d(public_authentication_namespaceObject, {
  "ERROR_CODE_CLIENT_VERIFICATION_REQUIRED": function() { return ERROR_CODE_CLIENT_VERIFICATION_REQUIRED; },
  "currentState": function() { return currentState; },
  "perform": function() { return perform; },
  "reset": function() { return public_authentication_reset; }
});

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/client/auth_failure_counter.ts


var IDENTIFIER = '&scrivito.authFailedCount=';
var failureCount;
function init() {
    auth_failure_counter_reset();
    var uri = new URI(currentHref());
    var fragment = uri.hash();
    var offset = fragment.indexOf(IDENTIFIER);
    if (offset < 0)
        return;
    var countAsString = fragment.substr(offset + IDENTIFIER.length, 3);
    var remainingFragment = fragment.substring(0, offset);
    if (remainingFragment === '#') {
        remainingFragment = '';
    }
    var newLocation = uri.fragment(remainingFragment).toString();
    failureCount = parseInt(countAsString, 10) || 0;
    replaceHistoryState({}, '', newLocation);
}
function auth_failure_counter_reset() {
    failureCount = 0;
}
function augmentedRedirectUrl() {
    var uri = new external_urijs_((0,common/* currentHref */.RO)());
    var augmentedHash = "" + uri.hash() + IDENTIFIER + (failureCount + 1);
    return uri.hash(augmentedHash).toString();
}
function currentFailureCount() {
    return failureCount;
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/client_error.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(message, code, details) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        _this.details = details;
        return _this;
    }
    return ClientError;
}(common/* ScrivitoError */.Ix));


// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/client/fetch.ts



var connectionCounter = 0;
// For test purpose only
function isFetchingActive() {
    return connectionCounter > 0;
}
var xmlHttpRequest;
function useXmlHttpRequest(xhr) {
    xmlHttpRequest = xhr;
}
var fallbackPriority;
function useDefaultPriority(priority) {
    fallbackPriority = priority;
}
function fetch(method, url, _a) {
    var params = _a.params, authorization = _a.authorization, priority = _a.priority, forceVerification = _a.forceVerification;
    if (xmlHttpRequest === undefined) {
        return common/* ScrivitoPromise.resolve */.s8.resolve({
            status: 432,
            responseText: JSON.stringify({
                error: 'Forbidden',
                code: 'auth_missing',
                details: { visit: 'example.com' },
            }),
        });
    }
    connectionCounter += 1;
    return new common/* ScrivitoPromise */.s8(function (resolve, reject) {
        var request = createRequestObj(method, url, resolve, reject);
        if (authorization) {
            request.setRequestHeader('Authorization', authorization);
        }
        request.setRequestHeader('Scrivito-Client', "jssdk/" + (0,common/* getScrivitoVersion */.ux)());
        if (forceVerification) {
            request.setRequestHeader('Scrivito-Force-Verification', 'true');
        }
        var priorityWithFallback = priority || fallbackPriority;
        if (priorityWithFallback === 'background') {
            request.setRequestHeader('Scrivito-Priority', priorityWithFallback);
        }
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(JSON.stringify(params));
    });
}
function createRequestObj(method, url, resolve, reject) {
    var request = new xmlHttpRequest();
    request.open(method === 'POST' ? 'POST' : 'PUT', url);
    request.timeout = 15000;
    request.withCredentials = true;
    request.onload = function () { return onAjaxLoad(request, resolve, reject); };
    function handleError(message) {
        onAjaxError(new RequestFailedError(message), reject);
    }
    request.onerror = function () { return handleError('XMLHttpRequest Error'); };
    request.ontimeout = function () { return handleError('XMLHttpRequest Timeout'); };
    request.onabort = function () { return handleError('XMLHttpRequest Aborted'); };
    return request;
}
function onAjaxLoad(request, resolve, reject) {
    connectionCounter -= 1;
    var status = request.status;
    if (!status || !(0,external_underscore_.isNumber)(status)) {
        var message = "Unexpected response status: " + status + ";" +
            (" body: " + (status === 0 ? request.statusText : request.responseText));
        reject(new RequestFailedError(message));
    }
    resolve(request);
}
function onAjaxError(error, reject) {
    connectionCounter -= 1;
    reject(error);
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/unauthorized_error.ts
var unauthorized_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UnauthorizedError = /** @class */ (function (_super) {
    unauthorized_error_extends(UnauthorizedError, _super);
    function UnauthorizedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnauthorizedError;
}(ClientError));


;// CONCATENATED MODULE: ./scrivito_sdk/client/verificator_functions.ts

var registry;
function verificator_functions_reset() {
    registry = {};
}
function verificator_functions_fetch(verificatorId, verificatorUrl) {
    var deferred = registry[verificatorId];
    if (!deferred) {
        deferred = new common/* Deferred */.BH();
        registry[verificatorId] = deferred;
        (0,common/* loadJs */.Vp)(verificatorUrl);
    }
    return deferred.promise;
}
verificator_functions_reset();
function setupRegisterVerificator() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window._scrivitoRegisterVerificator = function (verificatorId, verificatorFunction) { return registry[verificatorId].resolve(verificatorFunction); };
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/public_authentication.ts
var public_authentication_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ERROR_CODE_CLIENT_VERIFICATION_REQUIRED = 'client_verification_required';
var VerificationRequiredError = /** @class */ (function (_super) {
    public_authentication_extends(VerificationRequiredError, _super);
    function VerificationRequiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerificationRequiredError;
}(UnauthorizedError));
var computation;
var verification;
function perform(sendRequest) {
    function handleError(error) {
        if (!isVerificationRequiredError(error)) {
            throw error;
        }
        return computeVerification(error.details)
            .then(sendRequest)
            .catch(handleError);
    }
    return sendRequest(currentAuthorization()).catch(handleError);
}
function computeVerification(challenge) {
    if (!computation) {
        // note that further request's challenges are ignored (intentionally)
        var verificator = challenge.verificator, data_1 = challenge.data;
        var promise = verificator_functions_fetch(verificator.id, verificator.url).then(function (compute) {
            return new common/* ScrivitoPromise */.s8(function (resolve) {
                function captureVerification(computedVerification) {
                    verification = computedVerification;
                    resolve(verification.authorization);
                }
                compute(data_1, captureVerification);
            });
        });
        computation = {
            challenge: { verificator: verificator, data: data_1 },
            promise: (0,common/* promiseAndFinally */.sH)(promise, function () {
                computation = undefined;
            }),
        };
    }
    return computation.promise;
}
function public_authentication_reset() {
    computation = undefined;
    verification = undefined;
}
function currentAuthorization() {
    if (!verification) {
        return;
    }
    if (verification.expiresAfter < new Date()) {
        verification = undefined;
        return;
    }
    return verification.authorization;
}
function isVerificationRequiredError(error) {
    return (error instanceof UnauthorizedError &&
        error.code === ERROR_CODE_CLIENT_VERIFICATION_REQUIRED);
}
// integration test support
function currentState() {
    var authorization = currentAuthorization();
    if (authorization) {
        return "Authorization: " + authorization;
    }
    if (computation) {
        var challenge = computation.challenge;
        return "Pending computation: " + challenge.verificator.id + " with " + challenge.data;
    }
    return null;
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/cms_rest_api.ts
var cms_rest_api_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var MissingAuthError = /** @class */ (function (_super) {
    cms_rest_api_extends(MissingAuthError, _super);
    function MissingAuthError(target) {
        var _this = _super.call(this, "Insufficient authorization - please visit " + target) || this;
        _this.target = target;
        return _this;
    }
    return MissingAuthError;
}(common/* ScrivitoError */.Ix));

var AccessDeniedError = /** @class */ (function (_super) {
    cms_rest_api_extends(AccessDeniedError, _super);
    function AccessDeniedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccessDeniedError;
}(ClientError));

var RequestFailedError = /** @class */ (function (_super) {
    cms_rest_api_extends(RequestFailedError, _super);
    function RequestFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RequestFailedError;
}(common/* ScrivitoError */.Ix));

var MissingWorkspaceError = /** @class */ (function (_super) {
    cms_rest_api_extends(MissingWorkspaceError, _super);
    function MissingWorkspaceError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissingWorkspaceError;
}(common/* ScrivitoError */.Ix));

var limitedRetries;
var retriesAreDisabled;
var CmsRestApi = /** @class */ (function () {
    function CmsRestApi() {
        this.initDeferred = new common/* Deferred */.BH();
        this.authHeaderValueProvider = public_authentication_namespaceObject;
    }
    CmsRestApi.prototype.init = function (endpoint, tenant) {
        this.tenant = tenant;
        this.endpoint = endpoint;
        this.url = "https://" + endpoint + "/tenants/" + tenant + "/perform";
        this.initDeferred.resolve();
    };
    CmsRestApi.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    CmsRestApi.prototype.setAuthProvider = function (authorizationProvider) {
        this.authHeaderValueProvider = authorizationProvider;
    };
    CmsRestApi.prototype.get = function (path, requestParams) {
        return this.perform('GET', path, requestParams);
    };
    CmsRestApi.prototype.put = function (path, requestParams) {
        return this.perform('PUT', path, requestParams);
    };
    CmsRestApi.prototype.post = function (path, requestParams) {
        return this.perform('POST', path, requestParams);
    };
    CmsRestApi.prototype.delete = function (path, requestParams) {
        return this.perform('DELETE', path, requestParams);
    };
    CmsRestApi.prototype.requestBuiltInUserSession = function (sessionId, idp) {
        var _this = this;
        var params = idp ? { idp: idp } : undefined;
        return this.ensureInitialized()
            .then(function () { return _this.ajax('PUT', "sessions/" + sessionId, params); })
            .then(function (response) {
            auth_failure_counter_reset();
            return response;
        });
    };
    CmsRestApi.prototype.requestVisitorSession = function (sessionId, token) {
        var _this = this;
        return this.ensureInitialized().then(function () {
            return _this.ajax('PUT', "sessions/" + sessionId, undefined, "id_token " + token);
        });
    };
    // For test purpose only.
    CmsRestApi.prototype.enableForceVerification = function () {
        this.forceVerification = true;
    };
    // For test purpose only.
    CmsRestApi.prototype.currentPublicAuthorizationState = function () {
        if (this.authHeaderValueProvider) {
            if (this.authHeaderValueProvider.currentState) {
                return "[API] " + this.authHeaderValueProvider.currentState();
            }
            return '[API]: authorization provider without currentState()';
        }
        return '[API]: no authorization provider';
    };
    CmsRestApi.prototype.ensureInitialized = function () {
        return this.initDeferred.promise;
    };
    CmsRestApi.prototype.perform = function (method, path, requestParams) {
        var _this = this;
        return this.ensureInitialized().then(function () {
            return _this.send(method, path, requestParams).then(function (result) {
                return isTaskResponse(result) ? _this.handleTask(result.task) : result;
            });
        });
    };
    CmsRestApi.prototype.send = function (method, path, requestParams) {
        var _this = this;
        return this.authHeaderValueProvider.perform(function (authorization) {
            return _this.ajax(method, path, requestParams, authorization);
        });
    };
    CmsRestApi.prototype.ajax = function (method, path, requestParams, authorization) {
        var _this = this;
        var options = {
            authorization: authorization,
            forceVerification: this.forceVerification,
            params: {
                path: path,
                verb: method,
                params: requestParams || {},
            },
        };
        if (this.priority) {
            options.priority = this.priority;
        }
        var performRequest = function () {
            return retryOnRateLimit(function () { return fetch(method, _this.url, options); }).then(handleAjaxResponse);
        };
        return method === 'POST' ? performRequest() : retryOnError(performRequest);
    };
    CmsRestApi.prototype.handleTask = function (task) {
        var _this = this;
        switch (task.status) {
            case 'success':
                return task.result;
            case 'error':
                throw new ClientError(task.message, task.code, {});
            case 'exception':
                throw new RequestFailedError(task.message);
            case 'open':
                return (0,common/* wait */.Dc)(2).then(function () {
                    return _this.get("tasks/" + task.id).then(function (result) {
                        return _this.handleTask(result);
                    });
                });
            default:
                throw new RequestFailedError('Invalid task response (unknown status)');
        }
    };
    return CmsRestApi;
}());
function retryOnError(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new common/* ScrivitoPromise */.s8(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().catch(function (error) {
        if (error instanceof RequestFailedError) {
            if (limitedRetries && retryCount > 5)
                throw error;
            return (0,common/* waitMs */.OH)(calculateDelay(retryCount)).then(function () {
                return retryOnError(requestCallback, retryCount + 1);
            });
        }
        throw error;
    });
}
function retryOnRateLimit(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new common/* ScrivitoPromise */.s8(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().then(function (response) {
        if (response.status !== 429)
            return response;
        // The value for the retry count limit should be high enough to show that the integer overflow
        // protection of the calculated timeout (currently: exponent limited to 16) is working.
        if (limitedRetries && retryCount > 19) {
            throw new Error('Maximum number of rate limit retries reached');
        }
        var retryAfter = Number(response.getResponseHeader('Retry-After')) || 0;
        var retryDelay = Math.max(retryAfter * 1000, calculateDelay(retryCount));
        return (0,common/* waitMs */.OH)(retryDelay).then(function () {
            return retryOnRateLimit(requestCallback, retryCount + 1);
        });
    });
}
function calculateDelay(retryCount) {
    return Math.pow(2, Math.min(retryCount, 16)) * 500;
}
function handleAjaxResponse(request) {
    var httpStatus = request.status;
    var responseData;
    try {
        responseData = JSON.parse(request.responseText);
    }
    catch (error) {
        throw new RequestFailedError(request.responseText);
    }
    if (httpStatus >= 200 && httpStatus < 300) {
        return responseData;
    }
    var error = errorForResponse(httpStatus, responseData, request.responseText);
    if (error instanceof MissingAuthError) {
        (0,common/* redirectTo */.gB)(error.target);
        return (0,common/* never */.Fi)();
    }
    throw error;
}
function isAuthMissingDetails(details) {
    return typeof details.visit === 'string';
}
function errorForResponse(httpStatus, responseData, responseText) {
    if (httpStatus.toString()[0] !== '4') {
        // The backend server responds with a proper error text on a server error.
        // If however not the backend server, but the surrounding infrastructure fails, then there is
        // no proper error text. In that case include the response text as a hint for debugging.
        var error = responseData.error;
        var message_1 = httpStatus === 500 && typeof error === 'string' ? error : responseText;
        return new RequestFailedError((0,common/* uniqueErrorMessage */.th)(message_1));
    }
    var _a = parseBackendError(responseData), originalMessage = _a.message, code = _a.code, details = _a.details;
    var message = (0,common/* uniqueErrorMessage */.th)(originalMessage);
    if (code === 'auth_missing') {
        return isAuthMissingDetails(details)
            ? new MissingAuthError(authenticationUrlFor(details.visit))
            : new RequestFailedError('Malformed error response: key visit is not a string');
    }
    if (code === 'precondition_not_met.workspace_not_found') {
        return new MissingWorkspaceError();
    }
    if (httpStatus === 401)
        return new UnauthorizedError(message, code, details);
    if (httpStatus === 403)
        return new AccessDeniedError(message, code, details);
    return new ClientError(message, code, details);
}
function authenticationUrlFor(visit) {
    var returnTo = augmentedRedirectUrl();
    return visit
        .replace('retry=RETRY', "retry=" + currentFailureCount())
        .replace(/\$RETURN_TO/, encodeURIComponent(returnTo));
}
function isTaskResponse(result) {
    return (!!result &&
        !!result.task &&
        Object.keys(result).length === 1);
}
function parseBackendError(_a) {
    var error = _a.error, code = _a.code, details = _a.details;
    if (typeof error !== 'string') {
        throw new RequestFailedError('Malformed error response: key error is not a string');
    }
    if (code !== undefined && typeof code !== 'string') {
        throw new RequestFailedError('Malformed error response: optional key code is not a string');
    }
    return {
        message: error,
        code: code || '',
        details: details || {},
    };
}
var cmsRestApi = new CmsRestApi();
// For test purpose only.
function resetAndLimitRetries() {
    cms_rest_api_reset();
    limitedRetries = true;
}
// For test purpose only.
function resetAndDisableRetries() {
    cms_rest_api_reset();
    retriesAreDisabled = true;
}
// For test purpose only.
function cms_rest_api_reset() {
    cmsRestApi = new CmsRestApi();
    retriesAreDisabled = undefined;
}
function requestBuiltInUserSession(sessionId, idp) {
    return cmsRestApi.requestBuiltInUserSession(sessionId, idp);
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/obj_json.ts
function buildNonexistentObjJson(id) {
    return { _deleted: id, _version: '' };
}
function isExistentObjJson(data) {
    return !data._deleted;
}
function isUnavailableObjJson(data) {
    return !!data._deleted;
}
function isWidgetlistAttributeJson(attributeJson) {
    return attributeJson[0] === 'widgetlist';
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/obj_space_id.ts

var PUBLISHED_SPACE = ['workspace', 'published'];
function getWorkspaceId(spaceId) {
    if (!isWorkspaceObjSpaceId(spaceId))
        throw new common/* InternalError */.AQ();
    return spaceId[1];
}
function isEmptySpaceId(spaceId) {
    return spaceId[0] === 'empty';
}
function isWorkspaceObjSpaceId(spaceId) {
    return spaceId[0] === 'workspace';
}
function obj_space_id_isObjSpaceId(maybeObjSpaceId) {
    if (!Array.isArray(maybeObjSpaceId))
        return false;
    if (maybeObjSpaceId.length === 2) {
        var t = maybeObjSpaceId[0], id = maybeObjSpaceId[1];
        return (t === 'revision' || t === 'workspace') && typeof id === 'string';
    }
    return maybeObjSpaceId.length === 1 && maybeObjSpaceId[0] === 'empty';
}
function asBackendObjSpaceId(objSpaceId) {
    return objSpaceId.join(':');
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/obj_retrieval.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var batchRetrievals = {};
function retrieveObj(objSpaceId, id, format) {
    return __awaiter(this, void 0, Promise, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (isEmptySpaceId(objSpaceId))
                        return [2 /*return*/, buildNonexistentObjJson(id)];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getBatchRetrieval(objSpaceId).retrieve([id, format])];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    if (error_1 instanceof MissingWorkspaceError) {
                        return [2 /*return*/, buildNonexistentObjJson(id)];
                    }
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getBatchRetrieval(objSpaceId) {
    var cacheKey = (0,common/* computeCacheKey */.mz)(objSpaceId);
    var batchRetrieval = batchRetrievals[cacheKey];
    if (!batchRetrieval) {
        batchRetrieval = buildBatchRetrieval(objSpaceId);
        batchRetrievals[cacheKey] = batchRetrieval;
    }
    return batchRetrieval;
}
function buildBatchRetrieval(objSpaceId) {
    var _this = this;
    var spaceType = objSpaceId[0], spaceId = objSpaceId[1];
    var endpoint = spaceType + "s/" + spaceId + "/objs/mget";
    var includeDeleted = spaceType === 'workspace' || undefined;
    return new common/* BatchRetrieval */.gh(function (keys) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cmsRestApi.get(endpoint, {
                        ids: keys.map(function (_a) {
                            var id = _a[0], format = _a[1];
                            return (format === 'full' ? id : [id]);
                        }),
                        include_deleted: includeDeleted,
                    })];
                case 1:
                    response = (_a.sent());
                    return [2 /*return*/, response.results.map(function (result, index) { return result || buildNonexistentObjJson(keys[index][0]); })];
            }
        });
    }); }, 
    // Question: Why the magic batchSize: 17?
    // Answer: Retrieval of up to 100 Objs is a common use-case (see ObjSearch)
    // With a batchSize of 17, this leads to 6 concurrent requests, which is
    // the concurrent request limit in many browsers for HTTP/1.
    // This ensures maximum parallel loading.
    { batchSize: 17 });
}
function obj_retrieval_reset() {
    batchRetrievals = {};
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/binary_metadata_retrieval.ts


function retrieveBinaryMetadata(binaryId, options) {
    var requestParams = {};
    if (options === null || options === void 0 ? void 0 : options.accessVia) {
        requestParams.access_via = asBackendObjSpaceId(options.accessVia);
    }
    return cmsRestApi.get("blobs/" + encodeURIComponent(binaryId || '') + "/meta_data", requestParams);
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/binary_urls_retrieval.ts



var batchRetrieval = new common/* BatchRetrieval */.gh(function (blobs) {
    return cmsRestApi.get('blobs/mget', { blobs: blobs })
        .then(function (_a) {
        var results = _a.results;
        return results.map(function (result) { return parseBackendResponse(result); });
    });
});
function retrieveBinaryUrls(binaryId, transformation, options) {
    var blob = { id: binaryId };
    if (transformation) {
        blob.transformation = transformation;
    }
    if (options === null || options === void 0 ? void 0 : options.accessVia) {
        blob.access_via = asBackendObjSpaceId(options.accessVia);
    }
    return batchRetrieval.retrieve(blob);
}
function parseBackendResponse(response) {
    var publicAccessData = response.public_access;
    var getPublicAccessData = publicAccessData.get;
    if (!getPublicAccessData.url)
        throw new common/* InternalError */.AQ();
    var binaryData = {
        public_access: {
            get: {
                url: getPublicAccessData.url,
            },
        },
    };
    var privateAccessData = response.private_access;
    if (privateAccessData) {
        var getPrivateAccessData = privateAccessData.get;
        if (getPrivateAccessData.url) {
            binaryData.private_access = {
                get: {
                    url: getPrivateAccessData.url,
                },
            };
        }
    }
    return binaryData;
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/facet_query_retrieval.ts

function retrieveFacetQuery(workspaceId, params) {
    return cmsRestApi.get("workspaces/" + workspaceId + "/objs/search", params)
        .then(function (response) { return response; })
        .catch(function (error) {
        if (error instanceof MissingWorkspaceError)
            return { facets: [[]] };
        throw error;
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/obj_field_diffs_retrieval.ts


function retrieveObjFieldDiffs(from, to, objId) {
    return cmsRestApi.get("objs/" + objId + "/diff", {
        from: asBackendObjSpaceId(from),
        to: asBackendObjSpaceId(to),
    })
        .then(function (response) { return response; })
        .catch(function (error) {
        if (error instanceof MissingWorkspaceError)
            return {};
        throw error;
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/obj_query_retrieval.ts

function retrieveObjQuery(workspaceId, params) {
    return cmsRestApi.get("workspaces/" + workspaceId + "/objs/search", params)
        .then(function (_a) {
        var results = _a.results, total = _a.total, continuation = _a.continuation, objs = _a.objs;
        return {
            results: results.map(function (result) { return result.id; }),
            continuation: continuation,
            total: total,
            objs: objs,
        };
    })
        .catch(function (error) {
        if (error instanceof MissingWorkspaceError) {
            return { results: [], total: 0 };
        }
        throw error;
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/suggest_retrieval.ts

function retrieveSuggest(workspaceId, params) {
    return cmsRestApi.put("workspaces/" + workspaceId + "/objs/search/suggest", params)
        .then(function (response) { return response; })
        .catch(function (error) {
        if (error instanceof MissingWorkspaceError)
            return { results: [] };
        throw error;
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/cms_retrieval.ts






var cmsRetrieval = {
    retrieveObjQuery: function (workspaceId, params) {
        return retrieveObjQuery(workspaceId, params);
    },
    retrieveFacetQuery: function (workspaceId, params) {
        return retrieveFacetQuery(workspaceId, params);
    },
    retrieveSuggest: function (workspaceId, params) {
        return retrieveSuggest(workspaceId, params);
    },
    retrieveBinaryMetadata: function (binaryId, options) {
        return retrieveBinaryMetadata(binaryId, options);
    },
    retrieveBinaryUrls: function (binaryId, transformation, options) {
        return retrieveBinaryUrls(binaryId, transformation, options);
    },
    retrieveObjFieldDiffs: function (from, to, objId) {
        return retrieveObjFieldDiffs(from, to, objId);
    },
};
function replaceCmsRetrieval(newCmsRetrieval) {
    cmsRetrieval = newCmsRetrieval;
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/comparison_range.ts

function isComparisonRange(input) {
    if (!Array.isArray(input))
        return false;
    if (input.length !== 2)
        return false;
    return input.every(isObjSpaceId);
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/get_workspace_changes.ts

function getWorkspaceChanges(workspaceId, from) {
    return cmsRestApi.get("workspaces/" + workspaceId + "/changes", {
        from: from,
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/visitor_authentication_provider.ts




/**
 * The VisitorAuthenticationProvider is responsible to provide the visitor
 * session to authenticate backend requests for a Scrivito configured with
 * visitor authentication.
 *
 * The visitor session is retrieved from backend using the id token that
 * the provider has received. Backend requests are delayed until the first
 * session response arrives.
 *
 * Responses of visitor session authenticated backend requests are monitored
 * if they indicate an expired session, and retried either with a fresh
 * visitor session or without authentication.
 */
var VisitorAuthenticationProvider = /** @class */ (function () {
    function VisitorAuthenticationProvider() {
        this.sessionId = (0,common/* randomId */.kb)();
        this.idToken = new common/* Deferred */.BH();
        this.state = 'waiting for token';
        this.sessionRequest = this.fetchSession();
    }
    VisitorAuthenticationProvider.prototype.setToken = function (token) {
        if (!this.idToken.isPending()) {
            this.idToken = new common/* Deferred */.BH();
            this.renewSession();
        }
        this.idToken.resolve(token);
        this.state = "active - token: " + token.substr(0, 3) + "...";
    };
    VisitorAuthenticationProvider.prototype.currentState = function () {
        return this.state;
    };
    VisitorAuthenticationProvider.prototype.perform = function (sendRequest) {
        var _this = this;
        var sessionRequest = this.sessionRequest;
        return sessionRequest.then(function (session) {
            return sendRequest("Session " + session.token).catch(function (error) {
                var sessionHasExpired = error instanceof UnauthorizedError;
                if (!sessionHasExpired)
                    throw error;
                if (_this.sessionRequest === sessionRequest)
                    _this.renewSession();
                return _this.perform(sendRequest);
            });
        }, function (_error) { return perform(sendRequest); });
    };
    VisitorAuthenticationProvider.prototype.renewSession = function () {
        this.sessionRequest = this.fetchSession();
    };
    VisitorAuthenticationProvider.prototype.fetchSession = function () {
        var _this = this;
        return this.idToken.promise
            .then(function (token) { return cmsRestApi.requestVisitorSession(_this.sessionId, token); })
            .catch(function (error) {
            (0,common/* throwNextTick */.a6)(new common/* ScrivitoError */.Ix("Failed to establish visitor session: " + error.message));
            throw error;
        });
    };
    return VisitorAuthenticationProvider;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/client/with_each_attribute_json.ts


function withEachAttributeJson(objJson, fn) {
    if (!isExistentObjJson(objJson))
        return;
    Object.keys(objJson).forEach(function (attrName) {
        if (!(0,common/* isSystemAttribute */.mb)(attrName)) {
            var value = objJson[attrName];
            if (!value)
                return;
            fn(value, attrName);
            return;
        }
        if (attrName !== '_widget_pool')
            return;
        var widgetPoolJson = objJson._widget_pool;
        if (!widgetPoolJson)
            return;
        Object.keys(widgetPoolJson).forEach(function (widgetId) {
            var widgetJson = widgetPoolJson[widgetId];
            if (!widgetJson)
                return;
            Object.keys(widgetJson).forEach(function (widgetAttrName) {
                if ((0,common/* isSystemAttribute */.mb)(widgetAttrName))
                    return;
                var value = widgetJson[widgetAttrName];
                if (!value)
                    return;
                fn(value, widgetAttrName, widgetId);
            });
        });
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/copy_obj.ts
var copy_obj_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var copy_obj_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function copyObj(_a) {
    var fromObjSpaceId = _a.fromObjSpaceId, fromObjId = _a.fromObjId, toObjSpaceId = _a.toObjSpaceId, toObjId = _a.toObjId;
    return copy_obj_awaiter(this, void 0, Promise, function () {
        return copy_obj_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!isWorkspaceObjSpaceId(fromObjSpaceId) ||
                        !isWorkspaceObjSpaceId(toObjSpaceId)) {
                        throw new common/* InternalError */.AQ();
                    }
                    return [4 /*yield*/, cmsRestApi.put("workspaces/" + toObjSpaceId[1] + "/objs/" + toObjId, {
                            copy_from: {
                                workspace_id: fromObjSpaceId[1],
                                obj_id: fromObjId,
                            },
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/client/index.ts




















/***/ }),

/***/ 6958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ir": function() { return /* reexport */ ArgumentError; },
  "gh": function() { return /* reexport */ BatchRetrieval; },
  "Xe": function() { return /* reexport */ BehaviorSubject; },
  "R0": function() { return /* reexport */ BlobType; },
  "AY": function() { return /* reexport */ ContextContainer; },
  "Am": function() { return /* reexport */ DEFAULT_ENDPOINT; },
  "BH": function() { return /* reexport */ Deferred; },
  "dL": function() { return /* reexport */ EndOfStreamError; },
  "Tv": function() { return /* reexport */ FileType; },
  "AQ": function() { return /* reexport */ InternalError; },
  "tT": function() { return /* reexport */ NonNegativeInteger; },
  "nH": function() { return /* reexport */ PositiveInteger; },
  "Ix": function() { return /* reexport */ ScrivitoError; },
  "s8": function() { return /* reexport */ ScrivitoPromise; },
  "fU": function() { return /* reexport */ streamable_Streamable; },
  "xQ": function() { return /* reexport */ Subject; },
  "eV": function() { return /* reexport */ camelCase; },
  "PJ": function() { return /* reexport */ checkArgumentsFor; },
  "xk": function() { return /* reexport */ classify; },
  "jB": function() { return /* reexport */ clickPositionWithinElement; },
  "Xq": function() { return /* reexport */ collectAndSchedule; },
  "W0": function() { return /* reexport */ collectInListAndSchedule; },
  "mz": function() { return /* reexport */ computeCacheKey; },
  "RO": function() { return /* reexport */ currentHref; },
  "r2": function() { return /* reexport */ deserializeAsDate; },
  "ld": function() { return /* reexport */ deserializeAsInteger; },
  "KL": function() { return /* reexport */ devicePixelRatio; },
  "m0": function() { return /* reexport */ docUrl; },
  "fS": function() { return /* reexport */ equals; },
  "Fe": function() { return /* reexport */ equalsBestEffort; },
  "W": function() { return /* reexport */ extractFromIterator; },
  "Kw": function() { return /* reexport */ extractTitleAndDescription; },
  "xH": function() { return /* reexport */ formatDateToString; },
  "Me": function() { return /* reexport */ getDocument; },
  "ux": function() { return /* reexport */ getScrivitoVersion; },
  "aZ": function() { return /* reexport */ getScrollHeight; },
  "WS": function() { return /* reexport */ window_proxy_innerHeight; },
  "q2": function() { return /* reexport */ isCamelCase; },
  "EN": function() { return /* reexport */ isPresent; },
  "mb": function() { return /* reexport */ isSystemAttribute; },
  "ix": function() { return /* reexport */ isValidDateString; },
  "RY": function() { return /* reexport */ isValidFloat; },
  "eZ": function() { return /* reexport */ isValidInteger; },
  "Yc": function() { return /* reexport */ loadCss; },
  "Vp": function() { return /* reexport */ loadJs; },
  "H": function() { return /* reexport */ logError; },
  "Fi": function() { return /* reexport */ never; },
  "Y3": function() { return /* reexport */ nextTick; },
  "xw": function() { return /* reexport */ openWindow; },
  "bY": function() { return /* reexport */ window_proxy_pageXOffset; },
  "XO": function() { return /* reexport */ window_proxy_pageYOffset; },
  "sp": function() { return /* reexport */ parseStringToDate; },
  "xr": function() { return /* reexport */ prettyPrint; },
  "sH": function() { return /* reexport */ promiseAndFinally; },
  "o8": function() { return /* reexport */ pruneString; },
  "Q4": function() { return /* reexport */ randomHex; },
  "kb": function() { return /* reexport */ randomId; },
  "gB": function() { return /* reexport */ redirectTo; },
  "H5": function() { return /* reexport */ reload; },
  "sy": function() { return /* reexport */ renameTo; },
  "fX": function() { return /* reexport */ runAndCatchException; },
  "M0": function() { return /* reexport */ screen; },
  "X5": function() { return /* reexport */ scrollTo; },
  "G8": function() { return /* reexport */ sentenceCase; },
  "pC": function() { return /* reexport */ external_tcomb_validation_; },
  "P2": function() { return /* reexport */ throttle; },
  "dg": function() { return /* reexport */ throwInvalidArgumentsError; },
  "a6": function() { return /* reexport */ throwNextTick; },
  "It": function() { return /* reexport */ underscore; },
  "th": function() { return /* reexport */ uniqueErrorMessage; },
  "Dc": function() { return /* reexport */ wait; },
  "OH": function() { return /* reexport */ waitMs; }
});

// UNUSED EXPORTS: anticipatedStream, appUrlFromPackagedUiUrl, bypassThrottle, cleanUniqueErrorMessage, currentHash, detectUniqueErrorMessage, disableConsoleError, enableUniqueErrors, getChildPath, isUnderscore, replaceHistoryState, setNextTickScheduler, setScrivitoPromise, sliceFromIterable, windowLocationOrigin

;// CONCATENATED MODULE: ./scrivito_sdk/common/collect_and_schedule.ts
/** Generate a function that collects its invocations,
 * and schedules a function to processes them later.
 *
 * This can be used to build throtteling, debouncing or buffering logic.
 *
 * On the first invocation, the function is scheduled. Calls are collected
 * until the function runs. The function is run _once_ for all collected calls.
 *
 * Afterwards, the first call schedules the next function run.
 */
function collectAndSchedule(scheduler, fn) {
    var isScheduled = false;
    var lastArgs;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        lastArgs = args;
        if (isScheduled)
            return;
        scheduler(function () {
            isScheduled = false;
            // ensure that lastArgs are forgotten quickly, to allow garbage collection
            var argsToProcess = lastArgs;
            lastArgs = undefined;
            fn.apply(void 0, argsToProcess);
        });
        isScheduled = true;
    };
}
/** Generate a function that collects the value passed to it in a list,
 * and schedules a function to process the collected values later.
 *
 * This can be used to build queueing or batch processing logic.
 *
 * On the first invocation, the function is scheduled. Calls are collected
 * until the function runs. Afterwards, the first call schedules the next function run.
 *
 * The function receives a list with all invocation parameters, in order.
 * The function should return a list of all items that have not been processed yet.
 */
function collectInListAndSchedule(scheduler, fn) {
    var list = [];
    var isScheduled = false;
    return function (value) {
        list.push(value);
        schedule();
    };
    function schedule() {
        if (isScheduled)
            return;
        isScheduled = true;
        scheduler(function () {
            try {
                runFunction();
            }
            finally {
                isScheduled = false;
                if (list.length > 0)
                    schedule();
            }
        });
    }
    function runFunction() {
        var remainder = [];
        try {
            while (list.length > 0) {
                var listToProcess = list;
                list = [];
                fn(listToProcess).forEach(function (value) { return remainder.push(value); });
            }
        }
        finally {
            list.forEach(function (value) { return remainder.push(value); });
            list = remainder;
        }
    }
}

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/common/error_logging.ts
var consoleErrorIsDisabled = false;
function logError() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (window && window.console && !consoleErrorIsDisabled) {
        (_a = window.console).error.apply(_a, args);
    }
}
function disableConsoleError() {
    consoleErrorIsDisabled = true;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/errors.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @public */
var ScrivitoError = /** @class */ (function (_super) {
    __extends(ScrivitoError, _super);
    function ScrivitoError(message) {
        var _newTarget = this.constructor;
        var _this = 
        // 'Error' breaks prototype chain here
        _super.call(this, message) || this;
        // restore prototype chain
        // see: https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        var correctPrototype = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, correctPrototype);
        }
        else {
            _this.__proto__ = correctPrototype;
        }
        return _this;
    }
    Object.defineProperty(ScrivitoError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: false,
        configurable: true
    });
    return ScrivitoError;
}(Error));

/** @public */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(message) {
        return _super.call(this, message) || this;
    }
    return ArgumentError;
}(ScrivitoError));

var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(message) {
        return _super.call(this, message !== null && message !== void 0 ? message : 'Scrivito internal error') || this;
    }
    return InternalError;
}(ScrivitoError));


;// CONCATENATED MODULE: ./scrivito_sdk/common/next_tick.ts
var nextTickScheduler = setTimeoutScheduler;
function nextTick(delayedFunction) {
    nextTickScheduler(delayedFunction);
}
function setTimeoutScheduler(fn) {
    setTimeout(fn, 0);
}
function throwNextTick(error) {
    nextTick(function () {
        throw error;
    });
}
function setNextTickScheduler(scheduler) {
    nextTickScheduler = scheduler;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/pretty_print.ts

function prettyPrint(input) {
    try {
        if ((0,external_underscore_.isFunction)(input)) {
            return printFunction(input);
        }
        if ((0,external_underscore_.isObject)(input)) {
            return printObject(input);
        }
        return printTruncated(input);
    }
    catch (_e) {
        return '';
    }
}
function printObject(object) {
    var basicContent = object._scrivitoPrivateContent;
    if (basicContent && (0,external_underscore_.isFunction)(basicContent.toPrettyPrint)) {
        return basicContent.toPrettyPrint();
    }
    if ((0,external_underscore_.isElement)(object)) {
        return "[object HTMLElement " + printTruncated(object.outerHTML) + "]";
    }
    return printTruncated(object);
}
function printFunction(fn) {
    if (isFnWithSchema(fn)) {
        var schema = fn._scrivitoPrivateSchema;
        return "[class " + schema.name + "]";
    }
    if (isReactComponent(fn)) {
        var name = fn.displayName || fn.name;
        return "[class React.Component \"" + name + "\"]";
    }
    return truncate(fn.toString());
}
function isFnWithSchema(fn) {
    return !!fn._scrivitoPrivateSchema;
}
function isReactComponent(fn) {
    var prototype = fn.prototype;
    return prototype && prototype.isReactComponent;
}
function printTruncated(input) {
    var stringified = JSON.stringify(input);
    if (stringified) {
        return truncate(stringified);
    }
    return stringified;
}
function truncate(value) {
    if (value.length > 100) {
        return value.slice(0, 100) + "...";
    }
    return value;
}

// EXTERNAL MODULE: external "tcomb-validation"
var external_tcomb_validation_ = __webpack_require__(5807);
;// CONCATENATED MODULE: ./scrivito_sdk/common/tcomb.ts

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
external_tcomb_validation_.struct.strict = true;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
external_tcomb_validation_["interface"].strict = true;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
external_tcomb_validation_.fail = function (message) {
    // original displays `[tcomb] ${message}`
    throw new TypeError(message);
};


;// CONCATENATED MODULE: ./scrivito_sdk/common/check_arguments_for.ts






function noop() { }
function checkArgumentsFor(functionName, argumentsDefinitions, options) {
    if (process.env.NODE_ENV !== 'development')
        return noop;
    return function () {
        var givenArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            givenArguments[_i] = arguments[_i];
        }
        var errorMessage;
        try {
            errorMessage = errorMessageForArguments(givenArguments, argumentsDefinitions);
        }
        catch (e) {
            // if the type checker crashes (e.g. due to a bug in the SDK),
            // we don't want to crash the application because of this!
            throwNextTick(e);
        }
        if (errorMessage) {
            throwInvalidArgumentsError(functionName, errorMessage, options);
        }
    };
}
function throwInvalidArgumentsError(functionName, errorMessage, _a) {
    var docPermalink = _a.docPermalink, severity = _a.severity;
    var fullErrorMessage = "Invalid arguments for '" + functionName + "': " + errorMessage + " Visit " + docUrl(docPermalink) + " for more information.";
    if (severity === 'warning') {
        logError(fullErrorMessage);
    }
    else {
        throw new ArgumentError(fullErrorMessage);
    }
}
function docUrl(docPermalink) {
    return "https://scrivito.com/" + docPermalink;
}
function errorMessageForArguments(givenArguments, argumentsDefinitions) {
    var numExpected = argumentsDefinitions.length;
    var numGiven = givenArguments.length;
    if (numGiven > numExpected) {
        return "Expected " + numExpected + " arguments, got " + numGiven + ".";
    }
    var errors = (0,external_underscore_.flatten)(argumentsDefinitions.map(function (_a, index) {
        var argumentName = _a[0], argumentType = _a[1];
        var givenArgument = givenArguments[index];
        var validation = external_tcomb_validation_.validate(givenArgument, argumentType);
        return validation.errors.map(function (error) {
            return messageForError(argumentName, error);
        });
    }));
    if (errors.length > 0) {
        return errors.join(' ');
    }
}
function messageForError(argumentName, error) {
    var subjectDescription = subjectDescriptionForError(argumentName, error);
    if (error.actual === undefined) {
        return "Missing required " + subjectDescription + ".";
    }
    if (error.expected === external_tcomb_validation_.Nil) {
        return "Unexpected " + subjectDescription + ".";
    }
    return "Unexpected value for " + subjectDescription + ": got " + prettyPrint(error.actual) + ", expected type " + external_tcomb_validation_.getTypeName(error.expected) + ".";
}
function subjectDescriptionForError(argumentName, error) {
    var argumentDescription = "argument '" + argumentName + "'";
    if (error.path.length === 0) {
        return argumentDescription;
    }
    return "key '" + error.path.join('/') + "' in " + argumentDescription;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/context_container.ts
var ContextContainer = /** @class */ (function () {
    function ContextContainer() {
    }
    ContextContainer.prototype.current = function () {
        return this.currentContext;
    };
    ContextContainer.prototype.runWith = function (valueForFunction, fn) {
        var before = this.currentContext;
        try {
            this.currentContext = valueForFunction;
            return fn();
        }
        finally {
            this.currentContext = before;
        }
    };
    return ContextContainer;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/common/deferred.ts

// rejecting promises with plain objects instead of errors
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new ScrivitoPromise(function (resolveFn, rejectFn) {
            _this.resolve = function (value) {
                _this.settled = true;
                resolveFn(value);
            };
            _this.reject = function (error) {
                _this.settled = true;
                rejectFn(error);
            };
        });
    }
    Deferred.prototype.isPending = function () {
        return !this.settled;
    };
    return Deferred;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/common/tcomb_refinements.ts

var PositiveInteger = external_tcomb_validation_.refinement(external_tcomb_validation_.Integer, function (i) { return i > 0; }, 'PositiveInteger');
var NonNegativeInteger = external_tcomb_validation_.refinement(external_tcomb_validation_.Integer, function (i) { return i >= 0; }, 'NonNegativeInteger');

;// CONCATENATED MODULE: ./scrivito_sdk/common/run_and_catch_exception.ts
function runAndCatchException(fn) {
    try {
        return {
            errorThrown: false,
            result: fn(),
        };
    }
    catch (error) {
        return { errorThrown: true, error: error };
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/get_scrivito_version.ts

function getScrivitoVersion() {
    var version = "1.20.0-rc1-4162-g37f1824ec106";
    if (!version) {
        // version info missing
        throw new InternalError();
    }
    return version;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/asset_loading.ts
function loadCss(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var link = targetDocument.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    appendChild(targetDocument.head, link);
}
function loadJs(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var script = targetDocument.createElement('script');
    script.src = url;
    appendChild(targetDocument.head, script);
}
// For test purpose only
function appendChild(head, element) {
    head.appendChild(element);
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/is_present.ts
/** returns true, iff the given value is not null and not undefined.
 * (helps typescript infer the typing when used with higher-order functions)
 */
function isPresent(maybeValue) {
    return maybeValue !== null && maybeValue !== undefined;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/attribute_inflection.ts
var CONVERT_TO_CAMELCASE = /(_+)(\w)/g;
var CONVERT_TO_UNDERSCORE = /([A-Z])/g;
var TEST_ABBR_OR_NUMBER = /[A-Z]+|\d+/g;
var TEST_CAMEL_CASE = /^_?(_+[A-Z0-9]|[^_])+$/;
var TEST_SEPARATOR = /[_\s]+/g;
var TEST_TITLE_CASE_WORD = /[A-Z][a-z]+/g;
var TEST_UNDERSCORE = /^[a-z0-9_:]+$/;
function isUnderscore(name) {
    return TEST_UNDERSCORE.test(name);
}
function isCamelCase(name) {
    return TEST_CAMEL_CASE.test(name);
}
function underscore(name) {
    return name.replace(CONVERT_TO_UNDERSCORE, function (_match, group) { return "_" + group.toLowerCase(); });
}
function camelCase(name) {
    return name.replace(CONVERT_TO_CAMELCASE, function (match, underscores, nextChar, index) {
        if (!index) {
            return match;
        }
        if (nextChar.toUpperCase() === nextChar) {
            return match;
        }
        return "" + underscores.substr(1) + nextChar.toUpperCase();
    });
}
function classify(name) {
    var camelCased = camelCase(name);
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
function sentenceCase(name) {
    return name
        .replace(TEST_SEPARATOR, ' ')
        .replace(TEST_TITLE_CASE_WORD, function (word) { return " " + word.toLowerCase(); })
        .replace(TEST_ABBR_OR_NUMBER, function (word) { return " " + word; })
        .trim()
        .replace(/./, function (c) { return c.toUpperCase(); });
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/input_types.ts

var BlobType = external_tcomb_validation_["interface"]({
    size: external_tcomb_validation_.Number,
    type: external_tcomb_validation_.String,
}, { name: 'Blob', strict: false });
var FileType = BlobType.extend({
    name: external_tcomb_validation_.String,
}, { name: 'File', strict: false });

;// CONCATENATED MODULE: ./scrivito_sdk/common/is_system_attribute.ts
function isSystemAttribute(attributeName) {
    return attributeName[0] === '_';
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/iterable.ts
function extractFromIterator(iterator, size) {
    var result = [];
    while (result.length !== size) {
        var next = iterator.next();
        if (next.done)
            return result;
        result.push(next.value);
    }
    return result;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/random.ts
function randomHex() {
    var hex = Math.floor(Math.random() * Math.pow(16, 8)).toString(16);
    while (hex.length < 8) {
        hex = "0" + hex;
    }
    return hex;
}
function randomId() {
    return randomHex() + randomHex();
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/unique_error_message.ts
var enabled = false;
function enableUniqueErrors() {
    enabled = true;
}
function uniqueErrorMessage(originalMessage) {
    return enabled ? originalMessage + " #HoneybadgerUnique" : originalMessage;
}
function detectUniqueErrorMessage(message) {
    var match = message.match(/^(.*) #HoneybadgerUnique$/);
    return match ? match[1] : undefined;
}
function cleanUniqueErrorMessage(message) {
    var _a;
    return (_a = detectUniqueErrorMessage(message)) !== null && _a !== void 0 ? _a : message;
}
// For test purposes only
function resetUniqueErrors() {
    enabled = false;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/throttle.ts

var shouldBypassThrottle = false;
function throttle(fn, ms, options) {
    return shouldBypassThrottle ? fn : (0,external_underscore_.throttle)(fn, ms, options);
}
function bypassThrottle() {
    shouldBypassThrottle = true;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/types.ts


var INTEGER_RANGE_START = -9007199254740991;
var INTEGER_RANGE_END = 9007199254740991;
var BACKEND_FORMAT_REGEXP = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
function deserializeAsInteger(value) {
    if (typeof value === 'string' && value.match(/^-?\d+$/)) {
        return convertToInteger(value);
    }
    return typeof value === 'number' ? convertToInteger(value) : null;
}
function isValidInteger(value) {
    return (isInteger(value) &&
        INTEGER_RANGE_START <= value &&
        value <= INTEGER_RANGE_END);
}
function isValidFloat(value) {
    return typeof value === 'number' && (0,external_underscore_.isFinite)(value);
}
function deserializeAsDate(value) {
    if (typeof value !== 'string')
        return null;
    if (!isValidDateString(value)) {
        // The value is not a valid ISO date time
        throw new InternalError();
    }
    return parseStringToDate(value);
}
function parseStringToDate(dateString) {
    if (!dateString)
        return null;
    var dateMatch = dateString.match(BACKEND_FORMAT_REGEXP);
    if (!dateMatch)
        return null;
    var yearString = dateMatch[1], monthString = dateMatch[2], dayString = dateMatch[3], hoursString = dateMatch[4], minutesString = dateMatch[5], secondsString = dateMatch[6];
    var year = parseInt(yearString, 10);
    var month = parseInt(monthString, 10);
    var day = parseInt(dayString, 10);
    var hours = parseInt(hoursString, 10);
    var minutes = parseInt(minutesString, 10);
    var seconds = parseInt(secondsString, 10);
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}
function formatDateToString(date) {
    var yearMonth = "" + date.getUTCFullYear() + pad(date.getUTCMonth() + 1);
    var dateHours = "" + pad(date.getUTCDate()) + pad(date.getUTCHours());
    var minutesSeconds = "" + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds());
    return "" + yearMonth + dateHours + minutesSeconds;
}
function isValidDateString(dateString) {
    return typeof dateString === 'string' && !!dateString.match(/^\d{14}$/);
}
function pad(num) {
    return num < 10 ? "0" + num : num;
}
function isInteger(value) {
    return isValidFloat(value) && Math.floor(value) === value;
}
function convertToInteger(valueFromBackend) {
    var intValue = parseInt(valueFromBackend.toString(), 10);
    if (intValue === 0) {
        return 0; // otherwise -0 could be returned.
    }
    else if (isValidInteger(intValue)) {
        return intValue;
    }
    return null;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/wait.ts

function wait(seconds) {
    return waitMs(seconds * 1000);
}
function waitMs(milliseconds) {
    return new ScrivitoPromise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/equals.ts
/** Compares two values as precise as possible.
 * Please use this function if the correctness matters, but the performance does not.
 *
 * * If an object has a method `equals`, then the method `equals` is used for the comparison.
 * * If an object has a method `valueOf`, then the method `valueOf` is used for the comparison.
 * * In large arrays every single element is compared.
 * * Nested arrays are compared deep.
 * */
function equals(a, b) {
    if (a === b)
        return true;
    if (isObjectSupportingEquals(a) && isObjectSupportingEquals(b)) {
        return a.equals(b);
    }
    if (isObjectWithScrivitoPrivateContent(a) &&
        isObjectWithScrivitoPrivateContent(b)) {
        return equals(a._scrivitoPrivateContent, b._scrivitoPrivateContent);
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every(function (v, i) { return equals(v, b[i]); });
    }
    if (isObjectSupportingValueOf(a) && isObjectSupportingValueOf(b)) {
        return a.valueOf() === b.valueOf();
    }
    return false;
}
/** Compares two values best effort.
 * Please use this function if the performance matters, but the correctness does not.
 *
 * * If an object has a method `equals`, then the method `equals` is used for the comparison.
 * * If an object has a method `valueOf`, then the method `valueOf` is used for the comparison.
 * * Arrays with more than 3 elements are skipped and assumed not to be equal.
 * * Nested arrays with more than 3 levels of depth are skipped and assumed not to be equal.
 * */
function equalsBestEffort(a, b) {
    return equalsBestEffortWithDepthLimit(a, b);
}
function equalsBestEffortWithDepthLimit(a, b, currentDepth) {
    if (currentDepth === void 0) { currentDepth = 1; }
    if (a === b)
        return true;
    if (isObjectSupportingEquals(a) && isObjectSupportingEquals(b)) {
        return a.equals(b);
    }
    if (isObjectWithScrivitoPrivateContent(a) &&
        isObjectWithScrivitoPrivateContent(b)) {
        return equalsBestEffortWithDepthLimit(a._scrivitoPrivateContent, b._scrivitoPrivateContent, currentDepth);
    }
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        currentDepth <= 3 &&
        a.length <= 3 &&
        b.length <= 3 &&
        a.length === b.length) {
        return a.every(function (v, i) {
            return equalsBestEffortWithDepthLimit(v, b[i], currentDepth + 1);
        });
    }
    if (isObjectSupportingValueOf(a) && isObjectSupportingValueOf(b)) {
        return a.valueOf() === b.valueOf();
    }
    return false;
}
function isObjectSupportingEquals(object) {
    if (!object)
        return false;
    return typeof object.equals === 'function';
}
function isObjectSupportingValueOf(object) {
    if (!object)
        return false;
    return typeof object.valueOf === 'function';
}
function isObjectWithScrivitoPrivateContent(object) {
    if (!object)
        return false;
    return object.hasOwnProperty('_scrivitoPrivateContent');
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/promise_and_finally.ts
function promiseAndFinally(promise, handler) {
    return promise.then(function (value) {
        handler();
        return value;
    }, function (error) {
        handler();
        throw error;
    });
}

// EXTERNAL MODULE: external "promise-polyfill"
var external_promise_polyfill_ = __webpack_require__(1932);
var external_promise_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_promise_polyfill_);
;// CONCATENATED MODULE: ./scrivito_sdk/common/scrivito_promise.ts

// Scrivito uses the browser's native `Promise` implementation by default (or a polyfill).
var ScrivitoPromise;
if (typeof Promise !== 'undefined') {
    ScrivitoPromise = Promise;
}
else {
    ScrivitoPromise = (external_promise_polyfill_default());
}
// The promise implementation can be switched for unit testing purposes,
function setScrivitoPromise(PromiseClass) {
    ScrivitoPromise = PromiseClass;
}

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
;// CONCATENATED MODULE: ./scrivito_sdk/common/app_url_from_packaged_ui_url.ts

/**
 * Return an app URL, if the original uiUrl references a packaged UI URL.
 * Otherwise return null.
 * */
function appUrlFromPackagedUiUrl(uiUrl) {
    var uri = new URI(uiUrl);
    var segment = uri.segment(0);
    if (!isScrivitoSegment(segment))
        return null;
    while (isScrivitoSegment(segment)) {
        uri.segment(0, '');
        segment = uri.segment(0);
    }
    return uri.toString();
}
function isScrivitoSegment(segment) {
    return (segment === null || segment === void 0 ? void 0 : segment.toLowerCase()) === 'scrivito';
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/batch_retrieval.ts

var BatchRetrieval = /** @class */ (function () {
    function BatchRetrieval(mget, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, batchSize = _b.batchSize;
        this.scheduleItem = collectInListAndSchedule(nextTick, function (items) {
            var nextBatch = items.splice(0, _this.batchSize);
            var keys = nextBatch.map(function (item) { return item.key; });
            _this.mget(keys).then(function (results) {
                nextBatch.forEach(function (_a, index) {
                    var key = _a.key, deferred = _a.deferred;
                    if (index < results.length) {
                        var result = results[index];
                        deferred.resolve(result);
                    }
                    else {
                        _this.retrieve(key).then(deferred.resolve, deferred.reject);
                    }
                });
            }, function (error) {
                nextBatch.forEach(function (item) { return item.deferred.reject(error); });
            });
            return items;
        });
        this.mget = mget;
        this.batchSize = batchSize || 100;
    }
    BatchRetrieval.prototype.retrieve = function (key) {
        var deferred = new Deferred();
        this.scheduleItem({ key: key, deferred: deferred });
        return deferred.promise;
    };
    return BatchRetrieval;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/common/compute_cache_key.ts
function computeCacheKey(data) {
    var normalizedData = normalizeData(data);
    return JSON.stringify(normalizedData);
}
function normalizeData(data) {
    if (Array.isArray(data)) {
        return data.map(normalizeData);
    }
    if (isUnknownObject(data)) {
        return Object.keys(data)
            .sort()
            .map(function (key) { return [key, normalizeData(data[key])]; });
    }
    return data;
}
function isUnknownObject(data) {
    return typeof data === 'object' && data !== null;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/position.ts
function clickPositionWithinElement(clickEvent, element) {
    var mouseX = clickEvent.clientX, mouseY = clickEvent.clientY;
    var _a = element.getBoundingClientRect(), elementX = _a.left, elementY = _a.top;
    return {
        x: mouseX - elementX,
        y: mouseY - elementY,
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/streamable.ts
var streamable_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** A Streamable represents a resource that can be streamed.
 *
 * The resource is streamed, by subscribing the Streamable.
 * The result is a Subscription, which can be used to unsubscribe,
 * thereby closing the stream.
 *
 * Note: It is a very light-weight subset of the Observable pattern,
 * known from RxJs et. al.
 */
var streamable_Streamable = /** @class */ (function () {
    /** create a Streamable from the given subscribeFunction */
    function Streamable(subscribeFunction) {
        this.subscribeFunction = subscribeFunction;
    }
    /** subscribe this Streamable, streaming values into the provided function. */
    Streamable.prototype.subscribe = function (nextOrSubscriber) {
        var intermediary = new Intermediary(typeof nextOrSubscriber === 'object'
            ? nextOrSubscriber
            : { next: nextOrSubscriber });
        var subscriptionOrUnsubscribe = this.subscribeFunction(intermediary);
        intermediary.setUnsubscribeCallback(typeof subscriptionOrUnsubscribe === 'object'
            ? function () { return subscriptionOrUnsubscribe.unsubscribe(); }
            : subscriptionOrUnsubscribe);
        return intermediary;
    };
    Streamable.prototype.map = function (fn) {
        var _this = this;
        return new Streamable(function (subscriber) {
            return _this.subscribe({
                next: function (value) { return subscriber.next(fn(value)); },
                complete: function () { return subscriber.complete(); },
            });
        });
    };
    Streamable.prototype.filter = function (test) {
        var _this = this;
        return new Streamable(function (subscriber) {
            return _this.subscribe({
                next: function (value) {
                    if (test(value)) {
                        subscriber.next(value);
                    }
                },
                complete: function () { return subscriber.complete(); },
            });
        });
    };
    /** Returns a Promise that resolves with the final (=last) value of the stream,
     * when the stream completes.
     * If the stream is empty (i.e. it completes before emitting a value),
     * the Promise resolves with undefined.
     */
    Streamable.prototype.toPromise = function () {
        var _this = this;
        return new ScrivitoPromise(function (resolve) {
            var lastValue;
            _this.subscribe({
                next: function (value) {
                    lastValue = value;
                },
                complete: function () {
                    resolve(lastValue);
                },
            });
        });
    };
    /** Returns a new Streamable, truncated to the first value. */
    Streamable.prototype.takeOne = function () {
        var _this = this;
        return new Streamable(function (subscriber) {
            var subscription = _this.subscribe({
                next: function (value) {
                    if (subscription)
                        subscription.unsubscribe();
                    subscriber.next(value);
                    subscriber.complete();
                },
                complete: function () {
                    subscriber.complete();
                },
            });
            if (subscriber.isClosed())
                subscription.unsubscribe();
            return subscription;
        });
    };
    /** Returns a Promise to the first value that the stream emits.
     * The Promise rejects, if the stream completes before any value is emitted.
     */
    Streamable.prototype.waitForFirst = function () {
        var _this = this;
        return new ScrivitoPromise(function (resolve, reject) {
            var resolved = false;
            _this.takeOne().subscribe({
                next: function (value) {
                    resolved = true;
                    resolve(value);
                },
                complete: function () {
                    if (!resolved)
                        reject(new EndOfStreamError());
                },
            });
        });
    };
    /** Transforms this stream, so that it completes, when the passed-in stream
     * emits its first value or completes.
     */
    Streamable.prototype.takeUntil = function (until) {
        var _this = this;
        return new Streamable(function (subscriber) {
            var untilSubscription;
            var subscription;
            // eslint-disable-next-line prefer-const
            subscription = _this.subscribe({
                next: function (value) {
                    subscriber.next(value);
                },
                complete: function () {
                    completeStream();
                },
            });
            // edge-case: stream that completes immediately
            if (subscription.isClosed())
                return function () { return undefined; };
            // eslint-disable-next-line prefer-const
            untilSubscription = until.subscribe({
                next: function () {
                    completeStream();
                },
                complete: function () {
                    completeStream();
                },
            });
            function completeStream() {
                subscriber.complete();
                cleanup();
            }
            function cleanup() {
                if (subscription)
                    subscription.unsubscribe();
                if (untilSubscription)
                    untilSubscription.unsubscribe();
            }
            return cleanup;
        });
    };
    return Streamable;
}());

var EndOfStreamError = /** @class */ (function (_super) {
    streamable_extends(EndOfStreamError, _super);
    function EndOfStreamError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EndOfStreamError;
}(ScrivitoError));

/** An Intermediary is a proxy between a Streamable and a Subscriber.
 *
 * The Streamable receives the Intermediary as the Subscriber.
 * The Subscriber receives the Intermediary as the Subscription.
 *
 * The purpose of the Intermediary is to normalize the API.
 * It ensures that unsubscribe and complete are always idempotent, for example.
 */
var Intermediary = /** @class */ (function () {
    function Intermediary(subscriber) {
        this.subscriber = subscriber;
    }
    Intermediary.prototype.next = function (value) {
        if (this.subscriber && this.subscriber.next) {
            this.subscriber.next(value);
        }
    };
    Intermediary.prototype.complete = function () {
        if (this.subscriber && this.subscriber.complete) {
            this.subscriber.complete();
        }
        this.subscriber = undefined;
    };
    Intermediary.prototype.unsubscribe = function () {
        if (!this.subscriber)
            return;
        this.subscriber = undefined;
        if (this.unsubscribeCallback) {
            this.unsubscribeCallback.apply(undefined);
        }
    };
    Intermediary.prototype.isClosed = function () {
        return !this.subscriber;
    };
    Intermediary.prototype.setUnsubscribeCallback = function (callback) {
        this.unsubscribeCallback = callback;
    };
    return Intermediary;
}());

;// CONCATENATED MODULE: ./scrivito_sdk/common/anticipated_stream.ts

/** Convert a Promise to a Stream into the promised Stream. */
function anticipatedStream(streamPromise) {
    return new Streamable(function (subscriber) {
        var subscription;
        streamPromise
            .then(function (stream) {
            if (subscriber.isClosed())
                return;
            subscription = stream.subscribe(subscriber);
        })
            .catch(function (error) {
            subscriber.complete();
            throw error;
        });
        return function () {
            if (subscription)
                subscription.unsubscribe();
        };
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/subject.ts
var subject_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** a Subject is a Streamable, into which values can be pushed.
 * It can be used as a way to broadcast values to many subscribers.
 */
var Subject = /** @class */ (function (_super) {
    subject_extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this, function (subscriber) {
            if (_this.isCompleted) {
                subscriber.complete();
                return function () { return undefined; };
            }
            var id = (_this.subscriberIdCounter++).toString();
            _this.subscribers[id] = subscriber;
            _this.onNewSubscriber(subscriber);
            return function () {
                delete _this.subscribers[id];
            };
        }) || this;
        _this.subscribers = {};
        _this.subscriberIdCounter = 1;
        _this.isCompleted = false;
        return _this;
    }
    /** push a value to all subscribers */
    Subject.prototype.next = function (value) {
        var _this = this;
        Object.keys(this.subscribers).forEach(function (id) {
            _this.subscribers[id].next(value);
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        Object.keys(this.subscribers).forEach(function (id) {
            return _this.subscribers[id].complete();
        });
        this.subscribers = {};
        this.isCompleted = true;
    };
    Subject.prototype.subscriberCount = function () {
        return Object.keys(this.subscribers).length;
    };
    Subject.prototype.isClosed = function () {
        return this.isCompleted;
    };
    Subject.prototype.onNewSubscriber = function (_subscriber) {
        // intended to be overwritten in subclasses
    };
    return Subject;
}(streamable_Streamable));

/** a BehaviorSubject keeps track of the current value,
 * and provides it to new Subscribers automatically.
 */
var BehaviorSubject = /** @class */ (function (_super) {
    subject_extends(BehaviorSubject, _super);
    function BehaviorSubject(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    BehaviorSubject.prototype.next = function (value) {
        this.value = value;
        _super.prototype.next.call(this, value);
    };
    BehaviorSubject.prototype.onNewSubscriber = function (subscriber) {
        subscriber.next(this.value);
    };
    return BehaviorSubject;
}(Subject));


;// CONCATENATED MODULE: ./scrivito_sdk/common/extract_title_and_description.ts
function extractTitleAndDescription(text) {
    var match = /^([\s\S]+?[.!?])\s+([\s\S]+)/.exec(text);
    return match ? [match[1], match[2] || undefined] : [text, undefined];
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/never.ts

/** a Promise that never resolves or rejects.
 * Careful! Only use, if you know what you are doing!
 * You need to make sure that this promise will be "forgotten" eventually by your business logic.
 * Otherwise, you could cause a memory leak!
 */
function never() {
    return new ScrivitoPromise(function () { return undefined; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/default_endpoint.ts
var DEFAULT_ENDPOINT = 'api.scrivito.com';

;// CONCATENATED MODULE: ./scrivito_sdk/common/prune_string.ts
var SPACES_REGEX = /\s+/g;
var ONE_SPACE = ' ';
function pruneString(input) {
    return input.trim().replace(SPACES_REGEX, ONE_SPACE);
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/window_proxy.ts
function devicePixelRatio(windowObject) {
    if (windowObject === void 0) { windowObject = window; }
    return windowObject.devicePixelRatio || 1;
}
function currentHref() {
    return windowLocation().href;
}
function windowLocationOrigin() {
    return windowLocation().origin;
}
function currentHash() {
    return windowLocation().hash;
}
function windowName() {
    return window.name;
}
function window_proxy_navigator() {
    return window.navigator;
}
function openWindow(url, target) {
    return window.open(url, target);
}
function reload() {
    windowLocation().reload();
}
function renameTo(newName) {
    window.name = newName;
}
function redirectTo(newLocation) {
    windowLocation().assign(newLocation);
}
function replaceHistoryState(state, title, url) {
    window.history.replaceState(state, title, url);
}
function screen() {
    return window.screen;
}
function getDocument() {
    return document;
}
function window_proxy_innerHeight() {
    return window.innerHeight;
}
function window_proxy_pageXOffset() {
    return window.pageXOffset;
}
function window_proxy_pageYOffset() {
    return window.pageYOffset;
}
function scrollTo(x, y) {
    window.scrollTo(x, y);
}
function getScrollHeight() {
    return getDocument().body.scrollHeight;
}
/** For stubWindowProxyLocation only. Use this if you need to stub a location.
 * See currentHref and currentOrigin to access location data.
 * Use redirectTo and reload for location changes.
 */
function windowLocation() {
    return window.location;
}

;// CONCATENATED MODULE: ./scrivito_sdk/common/index.ts










































/***/ }),

/***/ 1190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hO": function() { return /* reexport */ FacetQuery; },
  "kI": function() { return /* reexport */ IN_MEMORY_TENANT; },
  "kt": function() { return /* reexport */ ObjBackendReplication; },
  "VJ": function() { return /* reexport */ assertNotUsingInMemoryTenant; },
  "gU": function() { return /* reexport */ configureForLazyWidgets; },
  "ZN": function() { return /* reexport */ createObjData; },
  "Qc": function() { return /* reexport */ disableObjReplication; },
  "Id": function() { return /* reexport */ failIfPerformanceConstraint; },
  "uw": function() { return /* reexport */ findWidgetPlacement; },
  "Dk": function() { return /* reexport */ getContentStateId; },
  "Mu": function() { return /* reexport */ getFieldDiff; },
  "L7": function() { return /* reexport */ obj_data_store_getObjData; },
  "N1": function() { return /* reexport */ getObjQuery; },
  "lY": function() { return /* reexport */ getObjVersion; },
  "mG": function() { return /* reexport */ getWidgetModification; },
  "zQ": function() { return /* reexport */ isUsingInMemoryTenant; },
  "P3": function() { return /* reexport */ isWidgetlistDiff; },
  "vr": function() { return /* reexport */ objReplicationPool; },
  "qe": function() { return /* reexport */ runWithPerformanceConstraint; },
  "Bg": function() { return /* reexport */ setContentStateId; },
  "D7": function() { return /* reexport */ suggest; },
  "PD": function() { return /* reexport */ trackContentStateId; },
  "x0": function() { return /* reexport */ updateContent; },
  "c9": function() { return /* reexport */ useInMemoryTenant; },
  "Lo": function() { return /* reexport */ useReplicationStrategy; }
});

// UNUSED EXPORTS: ObjData, ObjStreamReplication, REMOVE_THIS_KEY, ReplicationCache, clearObjDataCache, createObjReplicationProcess, diffObjJson, diffWidgetJson, hasObjContentDiff, isAttributeModified, resetInMemoryTenant, setContentUpdateHandler, setObjStreamReplicationEndpoint

// EXTERNAL MODULE: ./scrivito_sdk/client/index.ts + 22 modules
var client = __webpack_require__(457);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/data/remove_this_key.ts
var RemoveThisKey = /** @class */ (function () {
    function RemoveThisKey() {
    }
    RemoveThisKey.prototype.toJSON = function () {
        return null;
    };
    return RemoveThisKey;
}());

var REMOVE_THIS_KEY = new RemoveThisKey();
function isRemoveThisKey(v) {
    return v === REMOVE_THIS_KEY;
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_patch.ts



function patchObjJson(primitiveObj, patch) {
    if (!primitiveObj)
        return patch;
    return patchJson(primitiveObj, patch);
}
function diffObjJson(fromObjJson, toObjJson) {
    if (!fromObjJson)
        return toObjJson;
    return diffJson(fromObjJson, toObjJson);
}
function diffWidgetJson(fromWidgetJson, toWidgetJson) {
    return diffJson(fromWidgetJson, toWidgetJson);
}
function diffMaybeWidgetJson(fromWidgetJson, toWidgetJson) {
    if (!fromWidgetJson)
        return toWidgetJson || null;
    if (!toWidgetJson)
        return null;
    return diffJson(fromWidgetJson, toWidgetJson);
}
function hasObjContentDiff(objJsonA, objJsonB) {
    var patch = diffObjJson(objJsonA, objJsonB);
    return Object.keys(patch).some(isObjContentAttributeName);
}
function hasWidgetContentDiff(widgetJsonBefore, widgetJsonAfter) {
    var patch = diffWidgetJson(widgetJsonBefore, widgetJsonAfter);
    return Object.keys(patch).some(isContentAttributeName);
}
function isObjContentAttributeName(attributeName) {
    return (isContentAttributeName(attributeName) ||
        attributeName === '_path' ||
        attributeName === '_permalink');
}
function isContentAttributeName(attributeName) {
    return !(0,common/* isSystemAttribute */.mb)(attributeName) || attributeName === '_obj_class';
}
function eachKeyFrom(objectA, objectB, handler) {
    var keysOfA = Object.keys(objectA);
    var keysOfB = Object.keys(objectB);
    var keysOfAOnly = (0,external_underscore_.difference)(keysOfA, keysOfB);
    keysOfAOnly.forEach(function (key) {
        handler(key, objectA[key], objectB[key], false);
    });
    keysOfB.forEach(function (key) {
        handler(key, objectA[key], objectB[key], true);
    });
}
function buildUpdatedWidgetPool(widgetPool, widgetPoolPatch) {
    if (!widgetPoolPatch || (0,external_underscore_.isEmpty)(widgetPoolPatch))
        return widgetPool;
    var updatedWidgetPool = {};
    eachKeyFrom(widgetPool, widgetPoolPatch, function (id, widget, widgetPatch, isKeyOfWidgetPoolPatch) {
        if (isKeyOfWidgetPoolPatch) {
            if (isRemoveThisKey(widgetPatch))
                return;
            if (widgetPatch) {
                if (widget) {
                    updatedWidgetPool[id] = patchWidgetJson(widget, widgetPatch);
                }
                else {
                    if (isWidgetJson(widgetPatch)) {
                        updatedWidgetPool[id] = widgetPatch;
                    }
                }
            }
        }
        else {
            updatedWidgetPool[id] = widget;
        }
    });
    return updatedWidgetPool;
}
function buildPatchEntry(valueA, valueB, fnHandleBoth) {
    // Note: the return type `undefined` is actually impossible,
    // because `valueA` and `valueB` are not both undefined
    if (valueA === undefined)
        return valueB;
    if (valueB === undefined)
        return REMOVE_THIS_KEY;
    return fnHandleBoth();
}
function buildWidgetPoolPatch(widgetPoolA, widgetPoolB) {
    if (widgetPoolA === widgetPoolB)
        return undefined;
    if (!widgetPoolA)
        return widgetPoolB;
    var patch = {};
    eachKeyFrom(widgetPoolA, widgetPoolB || {}, function (widgetId, widgetA, widgetB) {
        var widgetValue = buildPatchEntry(widgetA, widgetB, function () {
            var widgetPatch = diffMaybeWidgetJson(widgetA, widgetB);
            if (!(0,external_underscore_.isEmpty)(widgetPatch))
                return widgetPatch;
        });
        if (widgetValue !== undefined) {
            patch[widgetId] = widgetValue;
        }
    });
    return patch;
}
function diffJson(fromJson, toJson) {
    var patch = {};
    eachKeyFrom(fromJson, toJson, function (attribute, valueInA, valueInB) {
        if (attribute === '_widget_pool') {
            var widgetPoolPatch = buildWidgetPoolPatch(valueInA, valueInB);
            if (!(0,external_underscore_.isEmpty)(widgetPoolPatch)) {
                patch._widget_pool = widgetPoolPatch;
            }
        }
        else {
            var patchValue = buildPatchEntry(valueInA, valueInB, function () {
                if (!(0,external_underscore_.isEqual)(valueInA, valueInB))
                    return valueInB;
            });
            if (patchValue !== undefined) {
                patch[attribute] = patchValue;
            }
        }
    });
    return patch;
}
function patchWidgetJson(primitiveWidget, patch) {
    return patchJson(primitiveWidget, patch);
}
function patchJson(primitiveObj, patch) {
    var updatedPrimitiveObj = {};
    eachKeyFrom(primitiveObj, patch, function (attribute, objValue, patchValue, isAttributeOfPatch) {
        if (attribute === '_widget_pool') {
            updatedPrimitiveObj._widget_pool = buildUpdatedWidgetPool(objValue || {}, patchValue);
        }
        else if (isAttributeOfPatch) {
            var simplePatchValue = patchValue;
            if (isPatchValueToKeep(simplePatchValue)) {
                updatedPrimitiveObj[attribute] = simplePatchValue;
            }
        }
        else {
            updatedPrimitiveObj[attribute] = objValue;
        }
    });
    return updatedPrimitiveObj;
}
function isPatchValueToKeep(v) {
    return v !== undefined && !isRemoveThisKey(v);
}
// This is a minor cheat: we assume that `widgetPatch` does not include any `RemoveThisKey` values
function isWidgetJson(widgetPatch) {
    return typeof widgetPatch._obj_class === 'string';
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/replication_cache.ts
var ReplicationCache = /** @class */ (function () {
    function ReplicationCache(factory) {
        this.factory = factory;
        this.cache = {};
    }
    ReplicationCache.prototype.get = function (objSpaceId, objId) {
        var workspaceCache = this.getObjSpaceCache(objSpaceId);
        var objEntry = workspaceCache[objId];
        if (objEntry)
            return objEntry;
        var newEntry = this.factory(objSpaceId, objId);
        workspaceCache[objId] = newEntry;
        return newEntry;
    };
    ReplicationCache.prototype.clear = function () {
        this.cache = {};
    };
    ReplicationCache.prototype.getObjSpaceCache = function (objSpaceId) {
        var cacheKey = objSpaceId.join(':');
        var existingCache = this.cache[cacheKey];
        if (existingCache)
            return existingCache;
        var newCache = {};
        this.cache[cacheKey] = newCache;
        return newCache;
    };
    return ReplicationCache;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication_pool.ts


var ObjReplicationPool = /** @class */ (function () {
    function ObjReplicationPool() {
        this.replicationCache = new ReplicationCache(function () {
            // forgot to set a strategy?
            throw new common/* InternalError */.AQ();
        });
        this.writeCallbacks = {};
        this.subscriptionToken = 0;
    }
    ObjReplicationPool.prototype.setReplicationStrategy = function (Strategy) {
        this.replicationCache = new ReplicationCache(function (objSpaceId, objId) { return new Strategy(objSpaceId, objId); });
    };
    ObjReplicationPool.prototype.get = function (objSpaceId, objId) {
        return this.replicationCache.get(objSpaceId, objId);
    };
    ObjReplicationPool.prototype.subscribeWrites = function (callback) {
        this.subscriptionToken += 1;
        this.writeCallbacks[this.subscriptionToken] = callback;
        return this.subscriptionToken;
    };
    ObjReplicationPool.prototype.unsubscribeWrites = function (token) {
        delete this.writeCallbacks[token];
    };
    ObjReplicationPool.prototype.writeStarted = function (promise) {
        var _this = this;
        Object.keys(this.writeCallbacks).forEach(function (key) {
            var callback = _this.writeCallbacks[key];
            callback(promise);
        });
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearWriteCallbacks = function () {
        this.writeCallbacks = {};
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearCache = function () {
        this.replicationCache.clear();
    };
    return ObjReplicationPool;
}());
var objReplicationPool = new ObjReplicationPool();
function useReplicationStrategy(Strategy) {
    objReplicationPool.setReplicationStrategy(Strategy);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/performance_constraint.ts

var constraint = new common/* ContextContainer */.AY();
function failIfPerformanceConstraint(message) {
    if (constraint.current())
        throw new common/* InternalError */.AQ(message);
}
function runWithPerformanceConstraint(fn) {
    return constraint.runWith(true, fn);
}

// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









// for test purposes only
function clearObjDataCache() {
    baseCollection.clear();
    widgetCollection.clear();
}
// for test purposes only
function dangerouslyGetRawObjJsons() {
    return baseCollection.dangerouslyGetRawValues();
}
var configuredForLazyWidgets = false;
function configureForLazyWidgets(lazy) {
    configuredForLazyWidgets = lazy;
}
var widgetCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'widgetdata',
    loadElement: function (_a) {
        var objSpaceId = _a[0], objId = _a[1];
        return ({
            loader: function () {
                objReplicationPool.get(objSpaceId, objId).start();
                // the data is actually 'pushed in' via the replication (see above)
                return (0,common/* never */.Fi)();
            },
        });
    },
});
var baseCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'baseobj',
    loadElement: function (_a) {
        var objSpaceId = _a[0], objId = _a[1];
        return ({
            loader: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!configuredForLazyWidgets) return [3 /*break*/, 2];
                            return [4 /*yield*/, (0,loadable/* load */.zD)(function () { return widgetCollection.get([objSpaceId, objId]).get(); })];
                        case 1:
                            _a.sent();
                            // the data is actually 'pushed in' via widgetCollection (see above)
                            return [2 /*return*/, (0,common/* never */.Fi)()];
                        case 2: return [2 /*return*/, (0,client/* retrieveObj */.AL)(objSpaceId, objId, 'widgetless')];
                    }
                });
            }); },
        });
    },
});
var ObjData = /** @class */ (function () {
    function ObjData(_objSpaceId, _id) {
        this._objSpaceId = _objSpaceId;
        this._id = _id;
        this.baseData = baseCollection.get([_objSpaceId, _id]);
        this.widgetData = widgetCollection.get([_objSpaceId, _id]);
    }
    ObjData.prototype.id = function () {
        return this._id;
    };
    ObjData.prototype.get = function () {
        failIfPerformanceConstraint('for performance reasons, avoid this method when rendering');
        var widgetObjJson = this.widgetData.get();
        // don't access baseData before widgetData is loaded
        // this ensures that we don't trigger retrieving widgetless data here
        // (which would be wasteful since we need full data anyway)
        if (!widgetObjJson)
            return;
        var baseObjJson = this.baseData.get();
        if (!baseObjJson)
            return;
        if (!(0,client/* isExistentObjJson */.gg)(baseObjJson))
            return baseObjJson;
        return this.joinDataWithCaching(baseObjJson, widgetObjJson);
    };
    ObjData.prototype.getWidgetPoolWithBadPerformance = function () {
        return getSubReader('_widget_pool', this.widgetData).get();
    };
    ObjData.prototype.getWidget = function (id) {
        failIfPerformanceConstraint('for performance reasons, avoid this method when rendering');
        return getWidgetState(id, this.widgetData).get();
    };
    ObjData.prototype.getWidgetWithBadPerformance = function (widgetId) {
        return getWidgetState(widgetId, this.widgetData).get();
    };
    /** Get a top-level attribute from the Obj.
     *
     * If you are sure that no widgets are involved (key is not a widgetlist attribute),
     * you could use getNonWidgetAttribute instead, which is faster.
     */
    ObjData.prototype.getAttribute = function (key) {
        if ((0,common/* isSystemAttribute */.mb)(key))
            return this.getNonWidgetAttribute(key);
        if (!this.ensureAvailable())
            return;
        var valueFromBase = getSubReader(key, this.baseData).get();
        return valueFromBase !== undefined
            ? valueFromBase
            : getSubReader(key, this.widgetData).get();
    };
    /** Get a top-level attribute from the Obj, which is not a widgetlist */
    ObjData.prototype.getNonWidgetAttribute = function (key) {
        if (key === '_widget_pool') {
            // _widget_pool is not an attribute, use getWidget or getWidgetAttribute
            throw new common/* InternalError */.AQ();
        }
        return getSubReader(key, this.baseData).get();
    };
    ObjData.prototype.getWidgetlistAttribute = function (key) {
        return getSubReader(key, this.widgetData).get();
    };
    ObjData.prototype.getWidgetAttribute = function (id, key) {
        return getWidgetState(id, this.widgetData).subState(key).get();
    };
    ObjData.prototype.getIfExistent = function () {
        if (this.isUnavailable())
            return;
        return this.get();
    };
    ObjData.prototype.isForbidden = function () {
        return !!this.getNonWidgetAttribute('_forbidden');
    };
    ObjData.prototype.isUnavailable = function () {
        return !!this.getNonWidgetAttribute('_deleted');
    };
    // for test purposes only
    ObjData.prototype.setBaseData = function (newState) {
        this.baseData.set(newState);
    };
    ObjData.prototype.set = function (newState) {
        (0,state/* failIfFrozen */.un)('Changing CMS content');
        var _a = divideData(newState), baseObjJson = _a[0], widgetJson = _a[1];
        this.baseData.set(baseObjJson);
        this.widgetData.set(widgetJson);
        this._replication().notifyLocalState(newState);
    };
    ObjData.prototype.ensureAvailable = function () {
        return (this.baseData.ensureAvailable() &&
            (configuredForLazyWidgets || this.widgetData.ensureAvailable()));
    };
    // for test purposes only
    ObjData.prototype.isAvailable = function () {
        return this.baseData.isAvailable();
    };
    ObjData.prototype.update = function (objPatch) {
        // Bang:
        // - If called, the objData to update belongs to an instantiated obj, therefore has been loaded
        // - The data loaded is not a Nullable, therefore `!` removes only the `undefined` introduced
        //   by LoadableData#get
        var newState = patchObjJson(this.get(), objPatch);
        this.set(newState);
    };
    ObjData.prototype.finishSaving = function () {
        return this._replication().finishSaving();
    };
    ObjData.prototype.objSpaceId = function () {
        return this._objSpaceId;
    };
    ObjData.prototype.equals = function (other) {
        if (!(other instanceof ObjData))
            return false;
        return (this._id === other._id && (0,common/* equals */.fS)(this._objSpaceId, other._objSpaceId));
    };
    ObjData.prototype.widgetExists = function (widgetId) {
        // Determine whether a widget exists without loading its actual data
        return !!this.getWidgetAttribute(widgetId, '_obj_class');
    };
    /** for test purposes only */
    ObjData.prototype.isBeingLoaded = function () {
        return (this.baseData.numSubscribers() + this.widgetData.numSubscribers() > 0);
    };
    /** for test purposes only */
    ObjData.prototype.unload = function () {
        this.baseData.reset();
        this.widgetData.reset();
    };
    /** join base Obj and widget data (the opposite of divideData).
     * uses a cache to ensure that each instance of ObjData reuses a returned object, if nothing changed.
     */
    ObjData.prototype.joinDataWithCaching = function (baseObjJson, widgetObjJson) {
        var lastJoin = this.lastJoin;
        if (lastJoin &&
            lastJoin.baseObjJson === baseObjJson &&
            lastJoin.widgetObjJson === widgetObjJson) {
            return lastJoin.joined;
        }
        var joined = __assign(__assign({}, baseObjJson), widgetObjJson);
        this.lastJoin = { baseObjJson: baseObjJson, widgetObjJson: widgetObjJson, joined: joined };
        return joined;
    };
    ObjData.prototype._replication = function () {
        return objReplicationPool.get(this._objSpaceId, this._id);
    };
    return ObjData;
}());

function getWidgetState(id, loadableData) {
    var widgetPoolState = getSubReader('_widget_pool', loadableData);
    return widgetPoolState.subState(id);
}
function getSubReader(key, loadableData) {
    return loadableData.reader().subState(key);
}
function invalidateAllLoadedObjsIn(objSpaceId) {
    var _this = this;
    var reRetrieved = {};
    var fullIds = idsFromCollection(widgetCollection);
    var widgetlessIds = idsFromCollection(baseCollection);
    fullIds.forEach(function (objId) {
        if (reRetrieved[objId])
            return;
        reRetrieved[objId] = true;
        objReplicationPool.get(objSpaceId, objId).start();
    });
    widgetlessIds.forEach(function (objId) { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (reRetrieved[objId])
                        return [2 /*return*/];
                    reRetrieved[objId] = true;
                    _b = (_a = baseCollection
                        .get([objSpaceId, objId]))
                        .set;
                    return [4 /*yield*/, (0,client/* retrieveObj */.AL)(objSpaceId, objId, 'widgetless')];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    }); });
}
function idsFromCollection(collection) {
    return collection
        .dangerouslyGetRawValues()
        .map(function (objJson) { return objJson._id; })
        .filter(common/* isPresent */.EN);
}
function divideData(data) {
    var baseObjJson = {};
    var widgetObjJson = {
        // this ensures that idsFromCollection works
        _id: data._id,
    };
    Object.keys(data).forEach(function (key) {
        var value = data[key];
        var targetData = isWidgetKey(key, value) ? widgetObjJson : baseObjJson;
        targetData[key] = value;
    });
    // all required keys added to baseObjJson, therefore no longer Partial<ObjJson>
    return [baseObjJson, widgetObjJson];
}
function isWidgetKey(key, value) {
    return (key === '_widget_pool' ||
        (!(0,common/* isSystemAttribute */.mb)(key) &&
            Array.isArray(value) &&
            value[0] === 'widgetlist'));
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/workspace_content_updater.ts




var WorkspaceContentUpdater = /** @class */ (function () {
    function WorkspaceContentUpdater(workspaceId, contentState) {
        this.workspaceId = workspaceId;
        this.contentState = contentState;
    }
    WorkspaceContentUpdater.prototype.setContentStateIdOrThrowIfTracking = function (contentStateId) {
        if (this.initialization) {
            // Cannot (re)set content state id after trackContentStateId
            throw new common/* InternalError */.AQ();
        }
        this.setContentStateId(contentStateId);
    };
    WorkspaceContentUpdater.prototype.trackContentStateId = function () {
        if (!this.initialization) {
            this.initialization = this.initializeContentStateId();
        }
        return this.initialization;
    };
    WorkspaceContentUpdater.prototype.updateContent = function () {
        var _this = this;
        if (this.updating)
            return this.updating;
        var from = this.getContentStateId();
        if (!from)
            return common/* ScrivitoPromise.resolve */.s8.resolve();
        this.updating = (0,common/* promiseAndFinally */.sH)((0,client/* getWorkspaceChanges */.H0)(this.workspaceId, from).then(function (_a) {
            var to = _a.to, current = _a.current, objs = _a.objs;
            if (objs === '*' || (to && to !== current)) {
                // the backend was unable to send the complete list of changes
                // (for whatever reason)
                invalidateAllLoadedObjsIn(['workspace', _this.workspaceId]);
            }
            else if (Array.isArray(objs)) {
                _this.applyChanges(objs);
            }
            _this.setContentStateId(current);
        }), function () {
            _this.updating = undefined;
        });
        return this.updating;
    };
    WorkspaceContentUpdater.prototype.applyChanges = function (objs) {
        var _this = this;
        objs.forEach(function (json) {
            var objId = (0,client/* isUnavailableObjJson */.J8)(json) ? json._deleted : json._id;
            var objReplication = objReplicationPool.get(['workspace', _this.workspaceId], objId);
            objReplication.notifyBackendState(json);
        });
    };
    WorkspaceContentUpdater.prototype.initializeContentStateId = function () {
        var _this = this;
        if (this.getContentStateId())
            return common/* ScrivitoPromise.resolve */.s8.resolve();
        return (0,client/* getWorkspaceChanges */.H0)(this.workspaceId).then(function (response) {
            _this.setContentStateId(response.current);
        });
    };
    WorkspaceContentUpdater.prototype.getContentStateId = function () {
        return this.contentState.get();
    };
    WorkspaceContentUpdater.prototype.setContentStateId = function (value) {
        this.contentState.set(value);
    };
    return WorkspaceContentUpdater;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/data/content_updater.ts




var contentUpdateHandler;
var workspaceContentUpdaters = {};
function setContentUpdateHandler(handler) {
    contentUpdateHandler = handler;
}
function getContentStateId(objSpaceId) {
    if ((0,client/* isEmptySpaceId */.P7)(objSpaceId))
        return '';
    var workspaceId = (0,client/* getWorkspaceId */.cm)(objSpaceId);
    var contentStateId = contentUpdateHandler
        ? contentUpdateHandler.getContentStateId(workspaceId)
        : getState(workspaceId).get();
    return contentStateId || '';
}
function setContentStateId(workspaceId, contentStateId) {
    if (contentUpdateHandler)
        return;
    workspaceContentUpdaterFor(workspaceId).setContentStateIdOrThrowIfTracking(contentStateId);
}
function trackContentStateId(workspaceId) {
    if (contentUpdateHandler)
        return common/* ScrivitoPromise.resolve */.s8.resolve();
    return workspaceContentUpdaterFor(workspaceId).trackContentStateId();
}
function updateContent(workspaceId) {
    if (contentUpdateHandler)
        return common/* ScrivitoPromise.resolve */.s8.resolve();
    return workspaceContentUpdaterFor(workspaceId).updateContent();
}
// For test purpose only
function resetContentUpdater() {
    workspaceContentUpdaters = {};
    contentUpdateHandler = undefined;
}
function workspaceContentUpdaterFor(workspaceId) {
    if (!workspaceContentUpdaters[workspaceId]) {
        workspaceContentUpdaters[workspaceId] = new WorkspaceContentUpdater(workspaceId, getState(workspaceId));
    }
    return workspaceContentUpdaters[workspaceId];
}
function getState(workspaceId) {
    return state/* globalState.subState */.n2.subState('contentStateId').subState(workspaceId);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/in_memory_tenant.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IN_MEMORY_TENANT = 'inMemory';
var inMemoryTenant = false;
function isUsingInMemoryTenant() {
    return inMemoryTenant;
}
function useInMemoryTenant() {
    inMemoryTenant = true;
}
function assertNotUsingInMemoryTenant(operationDescription) {
    if (inMemoryTenant) {
        throw new InMemoryTenantUnsupportedOperationError(operationDescription);
    }
}
// For test purpose only.
function resetInMemoryTenant() {
    inMemoryTenant = false;
}
var InMemoryTenantUnsupportedOperationError = /** @class */ (function (_super) {
    __extends(InMemoryTenantUnsupportedOperationError, _super);
    function InMemoryTenantUnsupportedOperationError(description) {
        return _super.call(this, description + " is not supported when using the in-memory tenant") || this;
    }
    return InMemoryTenantUnsupportedOperationError;
}(common/* ScrivitoError */.Ix));


;// CONCATENATED MODULE: ./scrivito_sdk/data/facet_query.ts





var loadableCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'facetquery',
    loadElement: function (_a) {
        var objSpaceId = _a[0], facet = _a[1], query = _a[2];
        return ({
            loader: function () {
                return client/* cmsRetrieval.retrieveFacetQuery */.Qw.retrieveFacetQuery((0,client/* getWorkspaceId */.cm)(objSpaceId), buildRequestParams(facet, query));
            },
            invalidation: function () {
                return (0,loadable/* loadableWithDefault */.qu)(undefined, function () { return getContentStateId(objSpaceId); }) || '';
            },
        });
    },
});
var EMPTY_RESULT = { facets: [[]] };
var FacetQuery = /** @class */ (function () {
    function FacetQuery(objSpaceId, attribute, options, query) {
        if (!(0,client/* isEmptySpaceId */.P7)(objSpaceId)) {
            this.loadableData = getData(objSpaceId, attribute, options, query);
        }
    }
    FacetQuery.prototype.result = function () {
        assertNotUsingInMemoryTenant('Search API');
        var response = this.loadableData ? this.loadableData.get() : EMPTY_RESULT;
        if (!response)
            return [];
        return response.facets[0].map(function (facet) {
            var name = facet.value;
            var count = facet.total;
            var includedObjIds = facet.results.map(function (result) { return result.id; });
            return { name: name, count: count, includedObjIds: includedObjIds };
        });
    };
    return FacetQuery;
}());

// For test purpose only.
function storeFacetQuery(objSpaceId, attribute, options, query, response) {
    if (!isWorkspaceObjSpaceId(objSpaceId)) {
        throw new Error("Cannot store facet data for space id " + JSON.stringify(objSpaceId));
    }
    getData(objSpaceId, attribute, options, query).set(response);
}
function getData(objSpaceId, attribute, options, query) {
    var facet = {
        attribute: attribute,
        include_objs: options.includeObjs || 0,
        limit: options.limit || 10,
    };
    return loadableCollection.get([objSpaceId, facet, query || []]);
}
function buildRequestParams(facet, query) {
    var params = {
        facets: [facet],
        options: { site_aware: true },
        size: 0,
    };
    if (!(0,external_underscore_.isEmpty)(query)) {
        params.query = query;
    }
    return params;
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/suggest.ts



var suggest_loadableCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'suggest',
    loadElement: function (_a) {
        var objSpaceId = _a[0], params = _a[1];
        return ({
            loader: function () {
                return client/* cmsRetrieval.retrieveSuggest */.Qw.retrieveSuggest((0,client/* getWorkspaceId */.cm)(objSpaceId), params);
            },
            invalidation: function () {
                return (0,loadable/* loadableWithDefault */.qu)('', function () { return getContentStateId(objSpaceId); });
            },
        });
    },
});
function suggest(objSpaceId, prefix, options, fromSearch) {
    assertNotUsingInMemoryTenant('Search API');
    var results = [];
    if (!(0,client/* isWorkspaceObjSpaceId */.Hn)(objSpaceId))
        return results;
    var loadableData = getLoadable(objSpaceId, prefix, options, fromSearch);
    return loadableData.getWithDefault({ results: results }).results;
}
// For test purpose only
function storeSuggest(objSpaceId, prefix, options, fromSearch, response) {
    getLoadable(objSpaceId, prefix, options, fromSearch).set(response);
}
function getLoadable(objSpaceId, prefix, _a, fromSearch) {
    var attributes = _a.attributes, limit = _a.limit;
    var backendParams = {
        prefix: prefix,
        options: { site_aware: true },
    };
    if (fromSearch)
        backendParams.from_search = fromSearch;
    if (attributes)
        backendParams.fields = attributes;
    if (typeof limit === 'number')
        backendParams.limit = limit;
    return suggest_loadableCollection.get([objSpaceId, backendParams]);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/find_widget_placement.ts



function findWidgetPlacement(objData, widgetId) {
    var placement = findWidgetPlacementIn(objData, widgetId);
    if (placement)
        return placement;
    (0,external_underscore_.find)(objData._widget_pool, function (parentWidgetData, parentWidgetId) {
        if (parentWidgetData) {
            placement = findWidgetPlacementIn(parentWidgetData, widgetId);
            if (placement) {
                placement.parentWidgetId = parentWidgetId;
                return true;
            }
        }
    });
    return placement;
}
function findWidgetPlacementIn(objOrWidgetData, widgetId) {
    var placement;
    (0,external_underscore_.find)(objOrWidgetData, function (jsonValue, attributeName) {
        if (!jsonValue)
            return;
        if ((0,common/* isSystemAttribute */.mb)(attributeName))
            return;
        // Typescript cannot know that once blank and system attribute entries
        // are excluded, what's left must be a custom attribute entry, and the
        // cast is therefore safe.
        var attributeJson = jsonValue;
        if (!(0,client/* isWidgetlistAttributeJson */.O6)(attributeJson))
            return;
        var widgetIds = attributeJson[1];
        if (!widgetIds)
            return;
        var index = widgetIds.indexOf(widgetId);
        if (index !== -1) {
            placement = { attributeName: attributeName, index: index };
            return true;
        }
    });
    return placement;
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_store.ts



function preloadObjData(objSpaceId, objId) {
    (0,loadable/* load */.zD)(function () { return obj_data_store_getObjData(objSpaceId, objId); });
}
function createObjData(objSpaceId, objId, attributes) {
    var objData = objDataFor(objSpaceId, objId);
    objData.set(attributes);
    return objData;
}
function setObjData(objSpaceId, objId, primitiveObj) {
    objDataFor(objSpaceId, objId).set(primitiveObj);
}
function obj_data_store_getObjData(objSpaceId, objId) {
    var objData = objDataFor(objSpaceId, objId);
    if (!objData.ensureAvailable())
        return;
    return objData;
}
/** get an ObjData instance for the given IDs, even if not yet loaded */
function objDataFor(objSpaceId, objId) {
    return new ObjData(objSpaceId, objId);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/get_obj_version.ts


/** get the version of Obj for the purpose of invalidation */
function getObjVersion(objSpaceId, objId) {
    return (0,loadable/* withoutLoading */.vk)(function () { return objDataFor(objSpaceId, objId).getAttribute('_version') || ''; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/disable_obj_replication.ts
var disabled = false;
function isObjReplicationDisabled() {
    return disabled;
}
function disableObjReplication() {
    disabled = true;
}
// For test purpose only.
function enableObjReplication() {
    disabled = false;
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_backend_replication.ts









var ObjBackendReplication = /** @class */ (function () {
    function ObjBackendReplication(objSpaceId, objId) {
        var _this = this;
        this.objSpaceId = objSpaceId;
        this.objId = objId;
        this.replicationActive = false;
        this.scheduledReplication = false;
        this.performThrottledReplication = (0,common/* throttle */.P2)(function () { return _this.performReplication(); }, 1000);
    }
    ObjBackendReplication.prototype.start = function () {
        var _this = this;
        (0,client/* retrieveObj */.AL)(this.objSpaceId, this.objId, 'full').then(function (data) {
            (0,state/* addBatchUpdate */.NB)(function () {
                _this.notifyBackendState(data);
            });
        });
    };
    ObjBackendReplication.prototype.notifyLocalState = function (localState) {
        if (isObjReplicationDisabled())
            return;
        if (isEqualState(this.localState, localState))
            return;
        this.localState = localState;
        this.startReplication();
    };
    ObjBackendReplication.prototype.notifyBackendState = function (newBackendState) {
        if (!this.localState) {
            this.backendState = newBackendState;
            this.updateLocalState(newBackendState);
            return;
        }
        var newestKnownBackendState = this.bufferedBackendState || this.backendState;
        if (!newestKnownBackendState ||
            compareStates(newBackendState, newestKnownBackendState) > 0) {
            if (this.replicationActive) {
                this.bufferedBackendState = newBackendState;
            }
            else {
                if ((0,client/* isUnavailableObjJson */.J8)(newBackendState)) {
                    this.updateLocalState(newBackendState);
                }
                else {
                    this.updateLocalState(patchObjJson(this.localState, diffObjJson(this.backendState, newBackendState)));
                }
                this.backendState = newBackendState;
            }
        }
    };
    ObjBackendReplication.prototype.finishSaving = function () {
        var finishSavingPromise;
        if (this.nextRequestDeferred) {
            finishSavingPromise = this.nextRequestDeferred.promise;
        }
        else if (this.currentRequestDeferred) {
            finishSavingPromise = this.currentRequestDeferred.promise;
        }
        else {
            return common/* ScrivitoPromise.resolve */.s8.resolve();
        }
        return finishSavingPromise.catch(function () { return common/* ScrivitoPromise.reject */.s8.reject(); });
    };
    ObjBackendReplication.prototype.finishReplicating = function () {
        // this method is intended for stream replication
        // should never be called for instances of this class
        throw new common/* InternalError */.AQ();
    };
    ObjBackendReplication.prototype.replicationMessageStream = function () {
        // this method is intended for stream replication
        // should never be called for instances of this class
        throw new common/* InternalError */.AQ();
    };
    // For test purposes
    ObjBackendReplication.prototype.getLocalState = function () {
        return this.localState;
    };
    // For test purposes
    ObjBackendReplication.prototype.getBackendState = function () {
        return this.backendState;
    };
    ObjBackendReplication.prototype.startReplication = function () {
        var _this = this;
        if (!isEqualState(this.backendState, this.getLocalObjJson())) {
            if (!this.replicationActive) {
                if (!this.scheduledReplication) {
                    this.scheduledReplication = true;
                    this.initDeferredForRequest();
                    objReplicationPool.writeStarted(this.currentRequestDeferred.promise);
                    (0,common/* nextTick */.Y3)(function () { return _this.performThrottledReplication(); });
                }
            }
            else if (!this.nextRequestDeferred) {
                this.nextRequestDeferred = new common/* Deferred */.BH();
            }
        }
        else if (this.nextRequestDeferred) {
            this.nextRequestDeferred.resolve();
            this.nextRequestDeferred = undefined;
        }
    };
    ObjBackendReplication.prototype.performReplication = function () {
        var _this = this;
        var localState = this.getLocalObjJson();
        this.scheduledReplication = false;
        this.replicationActive = true;
        this.replicateLocalStateToBackend(localState).then(function (backendState) {
            _this.handleBackendUpdate(localState, backendState);
            _this.currentRequestDeferred.resolve();
            _this.currentRequestDeferred = undefined;
            _this.replicationActive = false;
            _this.startReplication();
        }, function (error) {
            _this.currentRequestDeferred.reject(error);
            _this.currentRequestDeferred = undefined;
            _this.replicationActive = false;
        });
    };
    ObjBackendReplication.prototype.replicateLocalStateToBackend = function (localState) {
        var patch = diffObjJson(this.backendState, localState);
        return (0,external_underscore_.isEmpty)(patch)
            ? // bang:
                // given the localState is not blank, the diff may be empty only if the
                // backendState is similar (equal?) to the localState, i.e. not blank
                common/* ScrivitoPromise.resolve */.s8.resolve(this.backendState)
            : this.replicatePatchToBackend(patch);
    };
    ObjBackendReplication.prototype.replicatePatchToBackend = function (patch) {
        var id = (0,client/* getWorkspaceId */.cm)(this.objSpaceId);
        if (id === 'published')
            throw new common/* InternalError */.AQ();
        return client/* cmsRestApi.put */.i3.put("workspaces/" + id + "/objs/" + this.objId, {
            obj: patch,
        });
    };
    ObjBackendReplication.prototype.initDeferredForRequest = function () {
        if (this.nextRequestDeferred) {
            var currentDeferred = this.nextRequestDeferred;
            this.nextRequestDeferred = undefined;
            this.currentRequestDeferred = currentDeferred;
        }
        else {
            this.currentRequestDeferred = new common/* Deferred */.BH();
        }
    };
    ObjBackendReplication.prototype.handleBackendUpdate = function (replicatedState, backendState) {
        this.backendState = newerState(backendState, this.bufferedBackendState);
        this.bufferedBackendState = undefined;
        this.updateLocalState(patchObjJson(this.backendState, diffObjJson(replicatedState, this.getLocalObjJson())));
    };
    ObjBackendReplication.prototype.updateLocalState = function (localState) {
        this.localState = localState;
        setObjData(this.objSpaceId, this.objId, localState);
    };
    ObjBackendReplication.prototype.getLocalObjJson = function () {
        if (this.localState === undefined) {
            throw new common/* InternalError */.AQ();
        }
        return this.localState;
    };
    // For test purpose only.
    ObjBackendReplication.prototype.isRequestInFlight = function () {
        return this.replicationActive;
    };
    return ObjBackendReplication;
}());

function isEqualState(stateA, stateB) {
    return (0,external_underscore_.isEmpty)(diffObjJson(stateA, stateB));
}
function newerState(stateA, stateB) {
    if (!stateB)
        return stateA;
    if (compareStates(stateA, stateB) > 0)
        return stateA;
    return stateB;
}
function compareStates(stateA, stateB) {
    return strCompare(stateA._version, stateB._version);
}
function strCompare(str1, str2) {
    if (str1 !== undefined && str2 !== undefined) {
        if (str1 > str2)
            return 1;
        if (str2 > str1)
            return -1;
    }
    return 0;
}

;// CONCATENATED MODULE: ./scrivito_sdk/replication/version_archive.ts
var version_archive_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// avoid 0, which is falsey in JS
var START_VERSION = 1;
var VersionArchive = /** @class */ (function () {
    function VersionArchive() {
        this.archive = {};
    }
    /** get a version number for the given data
     *
     * if data is unchanged from the last call, the same version is returned.
     * otherwise a new version is created.
     */
    VersionArchive.prototype.versionForData = function (data) {
        if (this.currentVersion === undefined) {
            this.currentVersion = START_VERSION;
            this.oldestVersion = START_VERSION;
        }
        else {
            var lastArchivedData = this.archive[this.currentVersion];
            if (data === lastArchivedData)
                return this.currentVersion;
            this.currentVersion++;
        }
        var newVersionNumber = this.currentVersion;
        this.archive[newVersionNumber] = data;
        return newVersionNumber;
    };
    /** find the data for a version */
    VersionArchive.prototype.retrieveVersion = function (version) {
        if (!this.archive.hasOwnProperty(version))
            throw new VersionNotFoundError();
        return this.archive[version];
    };
    VersionArchive.prototype.validVersion = function (version) {
        return (this.currentVersion !== undefined &&
            version >= START_VERSION &&
            version <= this.currentVersion);
    };
    /** for test purposes only */
    VersionArchive.prototype.versionCount = function () {
        return Object.keys(this.archive).length;
    };
    /** remove older versions from the archive, to free memory */
    VersionArchive.prototype.purgeVersionsOlderThan = function (version) {
        if (this.currentVersion === undefined ||
            version > this.currentVersion ||
            this.oldestVersion === undefined ||
            version <= this.oldestVersion) {
            return;
        }
        for (var i = this.oldestVersion; i < version; i++) {
            delete this.archive[i];
        }
        this.oldestVersion = version;
    };
    return VersionArchive;
}());

var VersionNotFoundError = /** @class */ (function (_super) {
    version_archive_extends(VersionNotFoundError, _super);
    function VersionNotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VersionNotFoundError;
}(common/* ScrivitoError */.Ix));

;// CONCATENATED MODULE: ./scrivito_sdk/replication/replication_agent.ts


/** Two connected ReplicationAgents replicate state, by sending messages to each other.
 *
 * The resulting replication allows for state to be written concurrently at both sides.
 * Concurrent changes are resolved using the passed-in three-way-merge function.
 * In order to allow concurrent writing, both agents must be able to perform merging.
 *
 * It is important, that the server ("UI") may improve its merge function,
 * without becoming incompatible with older clients ("SDKs").
 *
 * Therefore, the two connected agents are allowed to use different merge functions,
 * i.e. an agent must make no assumptions about the merge function that the other agent uses.
 *
 * But without knowledge about the other agent's merge function, it is impossible
 * to correctly merge a write conflict, if the conflict also involves the result of a
 * three-way-merge performed by the other side.
 *
 * In short: "concurrent writing" is possible, but "concurrent merging" must be avoided.
 *
 * To achieve this, the two agents take turns:
 * An agent may only merge, when it's the agent's turn.
 *
 * When it's the agent's turn, the agent make a "move" (like in a board game).
 * Each move consist of these steps:
 * 1) accepting (at least) one new remote version of the data from the other agent
 * 2) merging the new remote version(s) into the local state
 * 3) sending a new local version of the data to the other agent
 *
 * As a consequence, step 3) results in a message that
 * a) contains a new senderVersion
 * b) includes a new receiverVersion
 * --> This is said to be "a move made by the agent".
 *
 * As soon as an agent has sent a message containing its move,
 * it is now the other agent's turn again.
 *
 * Note that not every message contains an agent's move:
 * Some messages simply inform the other side about state changes,
 * Messages do not count as "a move", if they don't satisfy the criteria above.
 *
 * Both agents need to agree on who makes the opening move:
 * Connecting two agents that disagree on who goes first, would lead to deadlock.
 */
var ReplicationAgent = /** @class */ (function () {
    function ReplicationAgent(localState, mergeFunction, currentlyMyTurn) {
        this.localState = localState;
        this.mergeFunction = mergeFunction;
        this.currentlyMyTurn = currentlyMyTurn;
        this.outgoingMessages = new common/* Subject */.xQ();
        this.acknowledgedVersions = new common/* Subject */.xQ();
        this.localVersionArchive = new VersionArchive();
    }
    /** Version number for the current state */
    ReplicationAgent.prototype.currentVersion = function () {
        return this.localDataAndVersion().currentVersion;
    };
    /** Stream of version numbers that have been successfully replicated */
    ReplicationAgent.prototype.replicatedVersions = function () {
        return this.acknowledgedVersions;
    };
    /** for test purposes only */
    ReplicationAgent.prototype.myTurn = function () {
        return this.currentlyMyTurn;
    };
    /** for test purposes only */
    ReplicationAgent.prototype.versionArchiveSize = function () {
        return this.localVersionArchive.versionCount();
    };
    /** Tell the agent that the local state has changed */
    ReplicationAgent.prototype.handleLocalChange = function () {
        this.sendCurrentState();
    };
    /** Stream of messages for the remote agent */
    ReplicationAgent.prototype.replicationMessages = function () {
        return this.outgoingMessages;
    };
    /** Pass in a message from the remote agent */
    ReplicationAgent.prototype.handleIncomingMessage = function (message) {
        var containedLocalVersion = message.containedReceiverVersion;
        if (containedLocalVersion !== undefined) {
            if (!this.localVersionArchive.validVersion(containedLocalVersion))
                return;
            this.localVersionArchive.purgeVersionsOlderThan(containedLocalVersion);
            this.acknowledgedVersions.next(containedLocalVersion);
        }
        // if we have yet to make the opening move, we ignore all messages
        if (this.lastRemoteMove === undefined && this.currentlyMyTurn)
            return;
        // sanity check for the remote message
        if (!validSuccessorMessage(this.lastRemoteMove, message))
            return;
        // de-duplicate, i.e. don't process messages that contain nothing new
        if (this.incomingMessageAlreadyContained(message))
            return;
        // ignore messages that are not valid responses to our last move
        if (!isSubsequentMove(this.myLastMove, message))
            return;
        // at this point we are allowed to merge:
        // it just became our turn (or it was our turn already)
        this.performMerge(message);
        this.currentlyMyTurn = true;
        this.lastRemoteMove = message;
        this.sendCurrentState();
    };
    ReplicationAgent.prototype.performMerge = function (incomingMessage) {
        var _a = this.localDataAndVersion(), localData = _a.localData, currentVersion = _a.currentVersion;
        if (incomingMessage.containedReceiverVersion === currentVersion) {
            // fast-forward, like in git
            this.localState.set(incomingMessage.data);
        }
        else {
            this.localState.set(this.threeWayMerge(localData, incomingMessage));
        }
        this.containedRemoteVersion = incomingMessage.senderVersion;
    };
    ReplicationAgent.prototype.threeWayMerge = function (localData, incomingMessage) {
        var localBaseVersion = incomingMessage.containedReceiverVersion;
        if (!localBaseVersion) {
            return this.mergeFunction(localData, incomingMessage.data);
        }
        return this.mergeFunction(localData, incomingMessage.data, this.localVersionArchive.retrieveVersion(localBaseVersion));
    };
    ReplicationAgent.prototype.sendCurrentState = function () {
        var message = this.messageForCurrentState();
        if (this.currentlyMyTurn &&
            isSubsequentMove(this.lastRemoteMove, message)) {
            this.myLastMove = message;
            this.currentlyMyTurn = false;
        }
        this.outgoingMessages.next(message);
    };
    ReplicationAgent.prototype.messageForCurrentState = function () {
        var _a = this.localDataAndVersion(), localData = _a.localData, currentVersion = _a.currentVersion;
        if (!this.containedRemoteVersion) {
            return {
                data: localData,
                senderVersion: currentVersion,
            };
        }
        return {
            data: localData,
            senderVersion: currentVersion,
            containedReceiverVersion: this.containedRemoteVersion,
        };
    };
    ReplicationAgent.prototype.incomingMessageAlreadyContained = function (message) {
        return (this.containedRemoteVersion !== undefined &&
            message.senderVersion <= this.containedRemoteVersion);
    };
    ReplicationAgent.prototype.localDataAndVersion = function () {
        var localData = this.localState.get();
        return {
            localData: localData,
            currentVersion: this.localVersionArchive.versionForData(localData),
        };
    };
    return ReplicationAgent;
}());

/** Checks if potentialNextMove is a valid "next move", given the previousMove.
 *
 * It assumes that previousMove and potentialNextMove are from different agents.
 * (Since the same agent cannot make two subsequent moves)
 */
function isSubsequentMove(previousMove, potentialNextMove) {
    // any message is allowed as the opening move
    if (previousMove === undefined)
        return true;
    var containsPreviousMove = potentialNextMove.containedReceiverVersion !== undefined &&
        potentialNextMove.containedReceiverVersion >= previousMove.senderVersion;
    var hasNewVersion = previousMove.containedReceiverVersion === undefined ||
        previousMove.containedReceiverVersion < potentialNextMove.senderVersion;
    return containsPreviousMove && hasNewVersion;
}
/** Checks if nextMessage is a valid as a successor message to previousMessage.
 * It checks that versions are non-strictly incrementing (= not go down).
 * It assumes that both messages were sent by the same agent.
 */
function validSuccessorMessage(previousMessage, nextMessage) {
    // any message is allowed as the beginning
    if (previousMessage === undefined)
        return true;
    // version may not decrease
    if (nextMessage.senderVersion < previousMessage.senderVersion)
        return false;
    // contained version may not decrease
    if (previousMessage.containedReceiverVersion === undefined)
        return true;
    return (nextMessage.containedReceiverVersion !== undefined &&
        nextMessage.containedReceiverVersion >=
            previousMessage.containedReceiverVersion);
}

;// CONCATENATED MODULE: ./scrivito_sdk/replication/replication_process.ts


/** A replication is achieved by connecting two ReplicationProcesses,
 * one running at each side of the replication.
 *
 * Each process consumes the other's messages and merges the remote changes into
 * its local state. Conversely, each process observes the local state, and sends
 * messages about local changes to the other process.
 *
 * The ReplicationProcesses is mostly responsible for I/O and stream wrangling.
 * The actual replication protocol is implemented by a ReplicationAgent.
 */
var ReplicationProcess = /** @class */ (function () {
    function ReplicationProcess(localState, remoteMessages, merge, active) {
        var _this = this;
        this.localState = localState;
        this.remoteMessages = remoteMessages;
        this.outgoingMessages = new common/* BehaviorSubject */.Xe(undefined);
        this.stateChangeCausedByAgent = new common/* ContextContainer */.AY();
        this.replicatedVersions = new common/* BehaviorSubject */.Xe(undefined);
        this.agent = new ReplicationAgent({
            get: localState.get,
            set: function (newData) {
                _this.stateChangeCausedByAgent.runWith(true, function () {
                    return _this.localState.set(newData);
                });
            },
        }, merge, active);
        // Wrap the agent's messages and version in a BehaviourSubject,
        // to ensure new subscribers get the current state.
        this.agent.replicationMessages().subscribe(this.outgoingMessages);
        this.agent.replicatedVersions().subscribe(this.replicatedVersions);
    }
    /** for test purposes only */
    ReplicationProcess.prototype.myTurn = function () {
        return this.agent.myTurn();
    };
    /** for test purposes only */
    ReplicationProcess.prototype.versionArchiveSize = function () {
        return this.agent.versionArchiveSize();
    };
    /** for test purposes only */
    ReplicationProcess.prototype.subscriberCount = function () {
        return this.outgoingMessages.subscriberCount();
    };
    /** resolves, once the current version of the local state has been replicated */
    ReplicationProcess.prototype.finishReplicating = function () {
        var currentVersion = this.agent.currentVersion();
        return this.replicatedVersions
            .filter(common/* isPresent */.EN)
            .filter(function (version) { return version >= currentVersion; })
            .waitForFirst()
            .then(function () { return undefined; });
    };
    ReplicationProcess.prototype.replicationMessages = function () {
        var _this = this;
        return new common/* Streamable */.fU(function (observer) {
            _this.ensureStarted();
            var subscription = _this.outgoingMessages
                .filter(common/* isPresent */.EN)
                .subscribe(observer);
            return function () {
                subscription.unsubscribe();
                if (_this.outgoingMessages.subscriberCount() === 0)
                    _this.ensureStopped();
            };
        });
    };
    ReplicationProcess.prototype.ensureStarted = function () {
        var _this = this;
        if (this.activeSubscriptions)
            return;
        this.activeSubscriptions = [
            this.localState.changes.subscribe(function () {
                if (_this.stateChangeCausedByAgent.current())
                    return;
                _this.agent.handleLocalChange();
            }),
            this.remoteMessages.subscribe(function (message) {
                return _this.agent.handleIncomingMessage(message);
            }),
        ];
        // since we did not observe local change until now,
        // we tell the agent to handle a local state change, just in case.
        this.agent.handleLocalChange();
    };
    ReplicationProcess.prototype.ensureStopped = function () {
        if (!this.activeSubscriptions)
            return;
        this.activeSubscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
        });
        this.activeSubscriptions = undefined;
    };
    return ReplicationProcess;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/replication/index.ts


;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication_process.ts






/** Create a ReplicationProcess, wired up to the given local Obj and
 * the given stream of incoming replication messages from remote.
 */
function createObjReplicationProcess(objSpaceId, objId, incomingMessages, role) {
    var batchedMessages = new common/* Streamable */.fU(function (subscriber) {
        return incomingMessages.subscribe(function (message) {
            return (0,state/* addBatchUpdate */.NB)(function () { return subscriber.next(message); });
        });
    });
    return new ReplicationProcess(localStateForObj(objSpaceId, objId), batchedMessages, mergeStrategyForRole(role), role === 'source');
}
function mergeStrategyForRole(role) {
    // the consumer is always right :-)
    return role === 'consumer'
        ? assertiveThreeWayMergeObjs
        : humbleThreeWayMergeObjs;
}
function localStateForObj(objSpaceId, objId) {
    var objData = objDataFor(objSpaceId, objId);
    return {
        get: function () { return (0,loadable/* loadableWithDefault */.qu)(undefined, function () { return objData.get(); }); },
        set: function (value) {
            if (value !== undefined)
                objData.set(value);
        },
        changes: (0,loadable/* loadAndObserve */.DU)(function () { return objData.get(); }).map(function () {
            // convert to Streamable<void>
        }),
    };
}
/** given two versions, and a common base version from which both versions
 * are derived, create a merged version that incorporated both changes.
 * if changes cannot be merged, then my version wins.
 */
function assertiveThreeWayMergeObjs(myVersion, otherVersion, baseVersion) {
    if (otherVersion === undefined)
        return myVersion;
    if (myVersion === undefined)
        return otherVersion;
    var primaryChanges = diffObjJson(baseVersion, myVersion);
    return patchObjJson(otherVersion, primaryChanges);
}
/** similar to assertiveThreeWayMergeObjs, but in case of conflict, other version wins. */
function humbleThreeWayMergeObjs(myVersion, otherVersion, baseVersion) {
    return assertiveThreeWayMergeObjs(otherVersion, myVersion, baseVersion);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query_batch.ts






var FALLBACK_RESPONSE = {
    results: [],
    total: 0,
};
var obj_id_query_batch_loadableCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'objquery',
    loadElement: function (key, batchSize) { return ({
        loader: function (api) { return loader(key, api, batchSize); },
        invalidation: function () {
            return (0,loadable/* loadableWithDefault */.qu)(undefined, function () { return getContentStateId(key[0]); }) || '';
        },
    }); },
});
var ObjIdQueryBatch = /** @class */ (function () {
    function ObjIdQueryBatch(objSpaceId, params, batchSize, index) {
        if ((0,client/* isEmptySpaceId */.P7)(objSpaceId))
            return;
        this.data = obj_id_query_batch_loadableCollection.get([objSpaceId, params, index], batchSize);
        if (fakeQuery) {
            this.fakeData = fakeQuery(objSpaceId, params, batchSize, index);
        }
    }
    ObjIdQueryBatch.prototype.objIds = function () {
        return this.response().results;
    };
    ObjIdQueryBatch.prototype.count = function () {
        return this.response().total || 0;
    };
    ObjIdQueryBatch.prototype.continuationForNextBatch = function () {
        return this.response().continuation;
    };
    ObjIdQueryBatch.prototype.response = function () {
        if (!this.data)
            return FALLBACK_RESPONSE;
        if (this.fakeData && !this.data.isAvailable())
            return this.fakeData;
        return this.data.getWithDefault(FALLBACK_RESPONSE);
    };
    return ObjIdQueryBatch;
}());

// For test purposes only
function storeObjIdQueryBatch(objSpaceId, params, index, result) {
    obj_id_query_batch_loadableCollection.get([objSpaceId, params, index]).set(result);
}
var includeObjs = true;
// For test purposes only
function resetIncludeObjs() {
    includeObjs = true;
}
function loader(_a, _b, batchSize) {
    var objSpaceId = _a[0], params = _a[1], index = _a[2];
    var push = _b.push, wasCancelled = _b.wasCancelled;
    return fetchContinuation(objSpaceId, params, batchSize, index).then(function (continuation) {
        if (wasCancelled()) {
            // if the load was cancelled, this error will never surface anywhere
            throw new Error();
        }
        var query = params.query, boost = params.boost, offset = params.offset, orderBy = params.orderBy, includeDeleted = params.includeDeleted, includeEditingAssets = params.includeEditingAssets;
        var requestParams = {
            query: query,
            options: { site_aware: true },
            size: batchSize,
            continuation: continuation,
            include_objs: includeObjs,
            boost: boost,
            offset: offset,
            order_by: orderBy,
        };
        if (includeDeleted)
            requestParams.options.include_deleted = true;
        if (includeEditingAssets) {
            requestParams.options.include_editing_assets = true;
        }
        var workspaceId = (0,client/* getWorkspaceId */.cm)(objSpaceId);
        return client/* cmsRetrieval.retrieveObjQuery */.Qw.retrieveObjQuery(workspaceId, requestParams)
            .then(function (response) {
            // including Objs only makes sense for the first request(s), since
            // afterwards many Objs will already be cached locally.
            includeObjs = false;
            var includedObjs = response.objs;
            push(function () {
                if (includedObjs) {
                    includedObjs.forEach(function (objJson) {
                        objReplicationPool.get(objSpaceId, objJson._id)
                            .notifyBackendState(objJson);
                    });
                }
                response.results.forEach(function (id) { return preloadObjData(objSpaceId, id); });
            });
            return {
                results: response.results,
                total: response.total,
                continuation: response.continuation,
            };
        });
    });
}
function fetchContinuation(objSpaceId, params, batchSize, index) {
    if (index > 0) {
        var previousBatch_1 = new ObjIdQueryBatch(objSpaceId, params, batchSize, index - 1);
        return (0,loadable/* load */.zD)(function () { return previousBatch_1.continuationForNextBatch(); });
    }
    return common/* ScrivitoPromise.resolve */.s8.resolve(undefined);
}
// For test purposes only
function setupFakeObjIdQuery(searchFn) {
    fakeQuery = searchFn;
}
// For test purposes only
function clearFakeObjIdQuery() {
    fakeQuery = undefined;
}
// For test purposes only
function usesFakeObjIdQuery() {
    return !!fakeQuery;
}
var fakeQuery;

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query.ts

var ObjIdQuery = /** @class */ (function () {
    function ObjIdQuery(objSpaceId, params, batchSize) {
        this.objSpaceId = objSpaceId;
        this.params = params;
        this.batchSize = batchSize;
    }
    ObjIdQuery.prototype.count = function () {
        return new ObjIdQueryBatch(this.objSpaceId, this.params, 0, 0).count();
    };
    ObjIdQuery.prototype.iterator = function () {
        return new ObjIdQueryIterator(this.objSpaceId, this.params, this.batchSize);
    };
    ObjIdQuery.prototype.iteratorFromContinuation = function (continuation) {
        return new ObjIdQueryIterator(this.objSpaceId, this.params, this.batchSize, continuation);
    };
    return ObjIdQuery;
}());

var ObjIdQueryIterator = /** @class */ (function () {
    function ObjIdQueryIterator(objSpaceId, params, batchSize, continuation) {
        this.objSpaceId = objSpaceId;
        this.params = params;
        this.batchSize = batchSize;
        this.batchNumber = 0;
        this.currentIndex = 0;
        if (continuation) {
            this.batchNumber = continuation[0], this.currentIndex = continuation[1];
        }
        this.currentBatch = this.getObjIdQueryBatch();
    }
    ObjIdQueryIterator.prototype.next = function () {
        if (!this.currentBatch)
            return { done: true };
        if (!this.currentObjIds)
            this.currentObjIds = this.currentBatch.objIds();
        if (this.currentIndex >= this.currentObjIds.length) {
            this.currentObjIds = undefined;
            this.currentIndex = 0;
            if (this.currentBatch.continuationForNextBatch()) {
                this.batchNumber = this.batchNumber + 1;
                this.currentBatch = this.getObjIdQueryBatch();
            }
            else {
                this.currentBatch = undefined;
            }
            return this.next();
        }
        if (!this.priorObjIndex) {
            var objIndex_1 = {};
            if (this.batchNumber > 0) {
                var previousBatch = this.getObjIdQueryBatch(this.batchNumber - 1);
                previousBatch.objIds().forEach(function (objId) {
                    objIndex_1[objId] = true;
                });
            }
            var thisBatchPreviousIds = this.currentBatch
                .objIds()
                .slice(0, this.currentIndex);
            thisBatchPreviousIds.forEach(function (objId) {
                objIndex_1[objId] = true;
            });
            this.priorObjIndex = objIndex_1;
        }
        var objId = this.currentObjIds[this.currentIndex];
        this.currentIndex++;
        if (this.priorObjIndex[objId])
            return this.next();
        this.priorObjIndex[objId] = true;
        return {
            value: objId,
            done: false,
        };
    };
    ObjIdQueryIterator.prototype.continuation = function () {
        return this.currentBatch
            ? [this.batchNumber, this.currentIndex]
            : undefined;
    };
    ObjIdQueryIterator.prototype.getObjIdQueryBatch = function (batchNumber) {
        if (batchNumber === void 0) { batchNumber = this.batchNumber; }
        return new ObjIdQueryBatch(this.objSpaceId, this.params, this.batchSize, batchNumber);
    };
    return ObjIdQueryIterator;
}());

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_query.ts


var ObjDataQuery = /** @class */ (function () {
    function ObjDataQuery(objSpaceId, params, batchSize) {
        this.objSpaceId = objSpaceId;
        this.idQuery = new ObjIdQuery(objSpaceId, params, batchSize);
    }
    ObjDataQuery.prototype.count = function () {
        return this.idQuery.count();
    };
    ObjDataQuery.prototype.iterator = function () {
        return this.objDataQueryIterator(this.idQuery.iterator());
    };
    ObjDataQuery.prototype.iteratorFromContinuation = function (continuation) {
        var iterator = this.idQuery.iteratorFromContinuation(continuation);
        return this.objDataQueryIterator(iterator);
    };
    ObjDataQuery.prototype.objDataQueryIterator = function (iterator) {
        return new ObjDataQueryIterator(this.objSpaceId, iterator);
    };
    return ObjDataQuery;
}());

var ObjDataQueryIterator = /** @class */ (function () {
    function ObjDataQueryIterator(objSpaceId, iterator) {
        this.objSpaceId = objSpaceId;
        this.iterator = iterator;
    }
    ObjDataQueryIterator.prototype.next = function () {
        if (this.done)
            return this.done;
        var id = this.iterator.next().value;
        if (!id)
            return this.stop();
        var objData = obj_data_store_getObjData(this.objSpaceId, id);
        if (objData === undefined)
            return this.stop();
        if (objData.isUnavailable())
            return this.next();
        return { value: objData, done: false };
    };
    ObjDataQueryIterator.prototype.continuation = function () {
        var _a;
        return (_a = this.iterator) === null || _a === void 0 ? void 0 : _a.continuation();
    };
    ObjDataQueryIterator.prototype.stop = function () {
        this.done = { done: true };
        return this.done;
    };
    return ObjDataQueryIterator;
}());

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_query_store.ts


function getObjQuery(objSpaceId, params, batchSize) {
    assertNotUsingInMemoryTenant('Search API');
    return new ObjDataQuery(objSpaceId, params, batchSize);
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_stream_replication.ts


var objReplicationEndpoint;
/** set the remote endpoint for stream replication
 * (usually, the UiAdapter is used as the endpoint)
 */
function setObjStreamReplicationEndpoint(endpoint) {
    objReplicationEndpoint = endpoint;
}
var ObjStreamReplication = /** @class */ (function () {
    function ObjStreamReplication(objSpaceId, objId) {
        this.objSpaceId = objSpaceId;
        this.objId = objId;
        this.runningEnsured = false;
        this.replicationProcess = createObjReplicationProcess(objSpaceId, objId, getEndpoint().objReplicationMessageStream(objSpaceId, objId), 'consumer');
    }
    /** for test purposes only */
    ObjStreamReplication.prototype.processSubscriberCount = function () {
        return this.replicationProcess.subscriberCount();
    };
    ObjStreamReplication.prototype.notifyLocalState = function () {
        // the replication process monitors local state changes on its own,
        // once it is up and running.
        this.ensureRunning();
    };
    ObjStreamReplication.prototype.notifyBackendState = function (_data) {
        // not concerned with the backend (this class replicates to the UI)
    };
    ObjStreamReplication.prototype.finishReplicating = function () {
        return this.replicationProcess.finishReplicating();
    };
    ObjStreamReplication.prototype.finishSaving = function () {
        var _this = this;
        return this.finishReplicating().then(function () {
            return getEndpoint().finishSavingObj(_this.objSpaceId, _this.objId);
        });
    };
    ObjStreamReplication.prototype.replicationMessageStream = function () {
        return this.replicationProcess.replicationMessages();
    };
    ObjStreamReplication.prototype.start = function () {
        this.ensureRunning();
    };
    ObjStreamReplication.prototype.ensureRunning = function () {
        if (this.runningEnsured)
            return;
        // this ensures that the replication runs and keeps on running,
        // independent of whether anyone else subscribes the replicationMessages.
        // note: an ObjReplication is never stopped, so no need for unsubscribe
        this.replicationProcess.replicationMessages().subscribe(function () { return 0; });
        this.runningEnsured = true;
    };
    return ObjStreamReplication;
}());

function getEndpoint() {
    if (!objReplicationEndpoint) {
        // setObjStreamReplicationEndpoint needs to be called first
        throw new common/* InternalError */.AQ();
    }
    return objReplicationEndpoint;
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/obj_field_diffs_data.ts




var obj_field_diffs_data_loadableCollection = new loadable/* LoadableCollection */.X2({
    loadElement: function (_a) {
        var from = _a[0], to = _a[1], objId = _a[2];
        return ({
            loader: function () { return client/* cmsRetrieval.retrieveObjFieldDiffs */.Qw.retrieveObjFieldDiffs(from, to, objId); },
            invalidation: function () { return getVersion(from, objId) + ":" + getVersion(to, objId); },
        });
    },
});
function getFieldDiff(from, to, attributeName, objId, widgetId) {
    var fieldDiffs = getFieldDiffs(from, to, objId, widgetId);
    var typeAndDiff = fieldDiffs[(0,common/* underscore */.It)(attributeName)];
    if (!typeAndDiff)
        return null;
    return typeAndDiff[1];
}
function getFieldDiffs(from, to, objId, widgetId) {
    if ((0,common/* equals */.fS)(from, to))
        return {};
    var objFieldDiffs = obj_field_diffs_data_loadableCollection
        .get([from, to, objId])
        .getWithDefault({});
    if (widgetId) {
        var widgetPool = objFieldDiffs._widget_pool;
        return (widgetPool && widgetPool[widgetId]) || {};
    }
    return objFieldDiffs;
}
function isWidgetlistDiff(diff) {
    return !!diff && diff.format === 'widgetlist_diff';
}
// For test purpose only.
function storeObjFieldDiffs(diffs, objId, _a) {
    var from = _a[0], to = _a[1];
    obj_field_diffs_data_loadableCollection.get([from, to, objId]).set(diffs);
}
function getVersion(objSpaceId, objId) {
    return (0,client/* isWorkspaceObjSpaceId */.Hn)(objSpaceId)
        ? getObjVersion(objSpaceId, objId)
        : '';
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/get_widget_modification.ts


function getWidgetModification(fromObjSpaceId, toObjSpaceId, objId, widgetId) {
    var objDataBefore = obj_data_store_getObjData(fromObjSpaceId, objId);
    var objDataAfter = obj_data_store_getObjData(toObjSpaceId, objId);
    if (!objDataBefore || !objDataAfter) {
        return null;
    }
    if (objDataBefore.isUnavailable() && objDataAfter.isUnavailable()) {
        return null;
    }
    if (objDataBefore.isUnavailable() && !objDataAfter.isUnavailable()) {
        return 'new';
    }
    if (!objDataBefore.isUnavailable() && objDataAfter.isUnavailable()) {
        return 'deleted';
    }
    return getModificationForWidget(objDataBefore, objDataAfter, widgetId);
}
function getModificationForWidget(objDataBefore, objDataAfter, widgetId) {
    var widgetJsonBefore = objDataBefore.getWidgetWithBadPerformance(widgetId);
    var widgetJsonAfter = objDataAfter.getWidgetWithBadPerformance(widgetId);
    if (widgetJsonBefore) {
        if (widgetJsonAfter) {
            return hasWidgetContentDiff(widgetJsonBefore, widgetJsonAfter)
                ? 'edited'
                : null;
        }
        return 'deleted';
    }
    else {
        return widgetJsonAfter ? 'new' : null;
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/is_attribute_modified.ts


function isAttributeModified(attribute, comparison, objId, widgetId) {
    return widgetId
        ? isWidgetAttributeModified(attribute, comparison, objId, widgetId)
        : isObjAttributeModified(attribute, comparison, objId);
}
function isObjAttributeModified(attribute, _a, objId) {
    var fromObjSpaceId = _a[0], toObjSpaceId = _a[1];
    var objDataBefore = getObjDataIfExistent(fromObjSpaceId, objId);
    var objDataAfter = getObjDataIfExistent(toObjSpaceId, objId);
    if (!objDataBefore || !objDataAfter)
        return false;
    return !isEqual(objDataBefore.getAttribute(attribute), objDataAfter.getAttribute(attribute));
}
function isWidgetAttributeModified(attribute, _a, objId, widgetId) {
    var fromObjSpaceId = _a[0], toObjSpaceId = _a[1];
    var objDataBefore = getObjDataIfExistent(fromObjSpaceId, objId);
    var objDataAfter = getObjDataIfExistent(toObjSpaceId, objId);
    if (!objDataBefore || !objDataAfter)
        return false;
    if (!objDataBefore.widgetExists(widgetId) ||
        !objDataAfter.widgetExists(widgetId)) {
        return false;
    }
    return !isEqual(objDataBefore.getWidgetAttribute(widgetId, attribute), objDataAfter.getWidgetAttribute(widgetId, attribute));
}
function getObjDataIfExistent(objSpaceId, objId) {
    var objData = getObjData(objSpaceId, objId);
    if (objData && !objData.isUnavailable() && !objData.isForbidden()) {
        return objData;
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/data/index.ts























/***/ }),

/***/ 6994:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u$": function() { return /* binding */ importFrom; }
/* harmony export */ });
/* unused harmony exports provideLoadedEditingModule, isEditingModuleBeingLoaded */
/* harmony import */ var scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9679);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9379);


// the modules that can be loaded using importFrom
var moduleLoaders = {
    reactEditing: function () { return __webpack_require__.e(/* import() */ 226).then(__webpack_require__.bind(__webpack_require__, 3466)); },
    editingSupport: function () { return __webpack_require__.e(/* import() */ 226).then(__webpack_require__.bind(__webpack_require__, 4556)); },
};
var loadableModules = new scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_0__/* .LoadableCollection */ .X2({
    loadElement: function (moduleName) { return ({ loader: moduleLoaders[moduleName] }); },
});
/** get the given symbol from the given package, if inside the UI.
 *
 * returns undefined, if not inside the UI, or while loading the module has not yet finished.
 */
function importFrom(moduleName, symbol) {
    if (!scrivito_sdk_app_support_ui_adapter__WEBPACK_IMPORTED_MODULE_1__/* .uiAdapter */ .k)
        return;
    // cast helps TS understand that a specific moduleName leads to a specific module type
    var loadable = loadableModules.get(moduleName);
    var loadedModule = loadable.get();
    if (!loadedModule)
        return;
    // this cast should not be needed, but ts 4.4. seems buggy...
    return loadedModule[symbol];
}
// for test purposes only
function provideLoadedEditingModule(moduleName, editingModule) {
    loadableModules.get(moduleName).set(editingModule);
}
// for test purposes only
function isEditingModuleBeingLoaded(moduleName) {
    return loadableModules.get(moduleName).numSubscribers() > 0;
}


/***/ }),

/***/ 2861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RY": function() { return /* reexport */ OBJ_ID_PATTERN; },
  "gu": function() { return /* reexport */ finishLinkResolutionFor; },
  "fq": function() { return /* reexport */ formatInternalLinks; },
  "J2": function() { return /* reexport */ startLinkResolutionFor; }
});

// UNUSED EXPORTS: setUrlResolutionHandler, setupWriteMonitorNotification

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/format_internal_links.ts

var OBJ_ID_PATTERN = /\bobjid:[a-f0-9]{16}\b/g;
var INTERNAL_LINK_URL_PATTERN = new RegExp(OBJ_ID_PATTERN.source + "[^\"']*", 'g');
function formatInternalLinks(htmlString, format) {
    return htmlString.replace(INTERNAL_LINK_URL_PATTERN, function (internalLinkUrl) { var _a; return (_a = format(parseInternalUrl(internalLinkUrl))) !== null && _a !== void 0 ? _a : internalLinkUrl; });
}
function parseInternalUrl(internalLinkUrl) {
    var uri = new external_urijs_(internalLinkUrl);
    return {
        obj_id: internalLinkUrl.slice(6, 22),
        query: uri.query(),
        hash: uri.fragment(),
    };
}

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/resolve_url.ts

function resolveUrl(url) {
    if (!urlResolutionHandler)
        throw new common/* InternalError */.AQ();
    return urlResolutionHandler(url);
}
var urlResolutionHandler;
function setUrlResolutionHandler(handler) {
    urlResolutionHandler = handler;
}

// EXTERNAL MODULE: ./scrivito_sdk/client/index.ts + 22 modules
var client = __webpack_require__(457);
// EXTERNAL MODULE: ./scrivito_sdk/data/index.ts + 29 modules
var data = __webpack_require__(1190);
// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/content_conversion/resolve_html_url.ts



function resolveHtmlUrl(encodedUrl) {
    var url = (0,external_underscore_.unescape)(encodedUrl);
    var internalUrl = resolveUrl(url);
    if (!internalUrl)
        return null;
    var newUrl = new external_urijs_("objid:" + internalUrl.obj_id);
    if (internalUrl.fragment) {
        newUrl.fragment(internalUrl.fragment);
    }
    if (internalUrl.query) {
        newUrl.query(internalUrl.query);
    }
    return (0,external_underscore_.escape)(newUrl.href());
}

;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/content_conversion.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function convertHtml(input) {
    return convertUrls(convertUrls(input, 'a', 'href'), 'img', 'src');
}
function convertLinklist(primitiveLinks) {
    return primitiveLinks.map(convertLink);
}
function convertLink(primitiveLink) {
    if (!primitiveLink.url)
        return primitiveLink;
    var internalUrl = resolveUrl(primitiveLink.url);
    if (internalUrl === null)
        return primitiveLink;
    return __assign(__assign({}, primitiveLink), { url: null, obj_id: internalUrl.obj_id, fragment: internalUrl.fragment || null, query: internalUrl.query || null });
}
function convertUrls(html, tagName, attribute) {
    // regex was inspired by: https://regex101.com/r/rMAHrE/1
    var regex = new RegExp("<" + tagName + "\\s+(?:[^>]*?\\s+)?" + attribute + "=([\"'])(.*?)\\1", 'gi');
    var convertedHtml = html.replace(regex, function (fullMatch, _subMatch, urlMatch) {
        if (!urlMatch) {
            return fullMatch;
        }
        var firstChar = urlMatch.charAt(0);
        // a link pointing to the same page needs not to be link-resolved
        if (firstChar === '#' || firstChar === '?') {
            return fullMatch;
        }
        // substr is faster than match(/^objid:/)
        // See a63eac6dde8325f2731f447fd4087f2547f2fc46 for benchmark
        if (urlMatch.substr(0, 6) === 'objid:') {
            return fullMatch;
        }
        var newUrl = resolveHtmlUrl(urlMatch);
        if (!newUrl)
            return fullMatch;
        return fullMatch.replace(urlMatch, newUrl);
    });
    return convertedHtml;
}

// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/link_resolution_worker.ts




function isAnyLinkResolutionAttributeJson(attributeData) {
    return (0,external_underscore_.contains)(['html', 'link', 'linklist'], attributeData[0]);
}
function runWorker(attributeDataToConvert, objData, attributeName, widgetId) {
    var convertValue = getConversion(attributeDataToConvert);
    var convertedDataWithoutLoading = (0,loadable/* loadableWithDefault */.qu)(undefined, convertValue);
    if (convertedDataWithoutLoading !== undefined) {
        if (!(0,external_underscore_.isEqual)(convertedDataWithoutLoading, attributeDataToConvert)) {
            update(objData, attributeName, widgetId, convertedDataWithoutLoading);
        }
        return common/* ScrivitoPromise.resolve */.s8.resolve();
    }
    return (0,loadable/* load */.zD)(convertValue).then(function (convertedData) {
        if ((0,external_underscore_.isEqual)(convertedData, attributeDataToConvert))
            return;
        if (hasDataToConvertBeenChangedConcurrently(attributeDataToConvert, objData, attributeName, widgetId)) {
            return;
        }
        update(objData, attributeName, widgetId, convertedData);
    });
}
function hasDataToConvertBeenChangedConcurrently(attributeData, objData, attributeName, widgetId) {
    var currentAttributeData = widgetId
        ? objData.getWidgetAttribute(widgetId, attributeName)
        : objData.getAttribute(attributeName);
    return !(0,external_underscore_.isEqual)(attributeData, currentAttributeData);
}
function update(objData, attributeName, widgetId, newData) {
    var _a, _b;
    var patch = (_a = {}, _a[attributeName] = newData, _a);
    if (widgetId) {
        objData.update({
            _widget_pool: (_b = {},
                _b[widgetId] = patch,
                _b),
        });
    }
    else {
        objData.update(patch);
    }
}
// The precise type is getConversion<T extends_oneof AnyLinkResolutionAttributeJson>(attributeData: T): () => T
// See https://github.com/microsoft/TypeScript/issues/27808
function getConversion(attributeData) {
    switch (attributeData[0]) {
        case 'html': {
            var attributeValue_1 = attributeData[1];
            return function () { return ['html', convertHtml(attributeValue_1)]; };
        }
        case 'link': {
            var attributeValue_2 = attributeData[1];
            return function () { return ['link', convertLink(attributeValue_2)]; };
        }
        case 'linklist': {
            var attributeValue_3 = attributeData[1];
            return function () { return ['linklist', convertLinklist(attributeValue_3)]; };
        }
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/link_resolution.ts





var notifyWriteMonitor;
function setupWriteMonitorNotification(notification) {
    if (notifyWriteMonitor) {
        // Write monitoring notification is already injected
        throw new InternalError();
    }
    notifyWriteMonitor = notification;
}
var linkResolutions = {};
function startLinkResolutionFor(workspaceId, objId) {
    linkResolutionFor(workspaceId).start(objId);
}
function finishLinkResolutionFor(workspaceId, objId) {
    return linkResolutionFor(workspaceId).finish(objId);
}
// For test purpose only.
function link_resolution_reset() {
    notifyWriteMonitor = undefined;
    linkResolutions = {};
}
function linkResolutionFor(workspaceId) {
    if (!linkResolutions[workspaceId]) {
        linkResolutions[workspaceId] = new LinkResolution([
            'workspace',
            workspaceId,
        ]);
    }
    return linkResolutions[workspaceId];
}
var LinkResolution = /** @class */ (function () {
    function LinkResolution(objSpaceId) {
        this.objSpaceId = objSpaceId;
        this.cache = {};
    }
    LinkResolution.prototype.start = function (objId) {
        var _this = this;
        var promise = (0,loadable/* load */.zD)(function () { return (0,data/* getObjData */.L7)(_this.objSpaceId, objId); }).then(performResolution);
        var priorPromise = this.cache[objId];
        var combinedPromise = priorPromise
            ? common/* ScrivitoPromise.all */.s8.all([priorPromise, promise]).then(function () { return undefined; })
            : promise;
        this.cache[objId] = combinedPromise;
        notifyLinkResolutionIsActive(combinedPromise);
    };
    LinkResolution.prototype.finish = function (objId) {
        return this.cache[objId] || common/* ScrivitoPromise.resolve */.s8.resolve();
    };
    return LinkResolution;
}());
function notifyLinkResolutionIsActive(promise) {
    if (!notifyWriteMonitor) {
        // No write monitor notification was set up for link resolution.
        throw new common/* InternalError */.AQ();
    }
    notifyWriteMonitor(promise);
}
function performResolution(objData) {
    if (!objData)
        return;
    var objJson = objData.get();
    if (!objJson)
        return;
    var workers = [];
    (0,client/* withEachAttributeJson */.dx)(objJson, function (attributeJson, attributeName, widgetId) {
        if (!isAnyLinkResolutionAttributeJson(attributeJson))
            return;
        workers.push(runWorker(attributeJson, objData, attributeName, widgetId));
    });
    if (!workers.length)
        return;
    var resolution = common/* ScrivitoPromise.all */.s8.all(workers);
    // don't resolve with Array
    return resolution.then(function () { return undefined; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/link_resolution/index.ts





/***/ }),

/***/ 9379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X2": function() { return /* reexport */ LoadableCollection; },
  "of": function() { return /* reexport */ LoadableData; },
  "aj": function() { return /* reexport */ LoadingSubscriber; },
  "IE": function() { return /* reexport */ load_handler_capture; },
  "oR": function() { return /* reexport */ generateRecording; },
  "_$": function() { return /* reexport */ isCurrentlyCapturing; },
  "zD": function() { return /* reexport */ load_load; },
  "DU": function() { return /* reexport */ loadAndObserve; },
  "Mh": function() { return /* reexport */ loadRecording; },
  "n4": function() { return /* reexport */ loadWithDefault; },
  "wV": function() { return /* reexport */ loadable_function_loadableFunction; },
  "qu": function() { return /* reexport */ loadableWithDefault; },
  "kV": function() { return /* reexport */ reportUsedData; },
  "zL": function() { return /* reexport */ run_and_catch_errors_while_loading_runAndCatchErrorsWhileLoading; },
  "vk": function() { return /* reexport */ withoutLoading; }
});

// UNUSED EXPORTS: CaptureReport, NotLoadedError, flushLoadableStreams, loadAllUntil, loadEntireIterable, loadableMapReduce

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_all_until.ts

function loadAllUntil(iterator, size, objs) {
    if (objs === void 0) { objs = []; }
    var run = runAndCatchErrorsWhileLoading(function () { return iterator.next(); });
    if (!run.allDataLoaded) {
        return { done: false, objs: objs };
    }
    var next = run.result;
    if (next.done || size === 0) {
        return { done: next.done, objs: objs };
    }
    return loadAllUntil(iterator, size - 1, objs.concat([next.value]));
}

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_handler.ts

var captureContextContainer = new common/* ContextContainer */.AY();
var currentCaptureList = function () { return captureContextContainer.current(); };
function load_handler_capture(fn) {
    var captureList = {
        datas: [],
        incomplete: false,
        outdated: false,
    };
    var result = captureContextContainer.runWith(captureList, fn);
    return new CaptureReport(captureList, result);
}
function throwNoLoadingContext() {
    throw new common/* ScrivitoError */.Ix('Content not yet loaded. ' +
        'Forgot to use Scrivito.load or Scrivito.connect? ' +
        'See https://scrivito.com/content-not-yet-loaded-error');
}
function isCurrentlyCapturing() {
    return currentCaptureList() !== undefined;
}
function notifyDataRequired(loadingState, data) {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.datas.push(data);
        if (loadingState === 'outdated')
            captureList.outdated = true;
        else if (loadingState === 'incomplete')
            captureList.incomplete = true;
    }
}
var CaptureReport = /** @class */ (function () {
    function CaptureReport(captureList, result) {
        this.captureList = captureList;
        this.outdated = captureList.outdated;
        this.incomplete = captureList.incomplete;
        this.result = result;
    }
    CaptureReport.prototype.forwardToCurrent = function () {
        var currentList = currentCaptureList();
        if (!currentList) {
            if (this.incomplete) {
                throwNoLoadingContext();
            }
            return;
        }
        extendList(currentList, this.captureList);
    };
    /** get the list of data that was accessed during this capture run.
     *
     * intended for debugging
     */
    CaptureReport.prototype.getRequiredDatas = function () {
        return this.captureList.datas;
    };
    /** returns true iff no data is missing, doesn't care about outdated  */
    CaptureReport.prototype.isAllDataLoaded = function () {
        return !this.incomplete;
    };
    /** returns true iff no data is missing or outdated */
    CaptureReport.prototype.isAllDataUpToDate = function () {
        return !this.incomplete && !this.outdated;
    };
    /** subscribes to the loading of all data that was captured, using the provided subscription.
     * all subscribed data is loaded automatically, and reloaded when outdated.
     * the subscription is automatically updated to reflect the data captured in this report,
     * i.e. any data that is no longer present in the capture is unsubscribed.
     */
    CaptureReport.prototype.subscribeLoading = function (subscriber) {
        var unsubscribes = this.captureList.datas.map(function (data) {
            return data.subscribeLoading();
        });
        subscriber.unsubscribe();
        subscriber.storeUnsubscribe(function () {
            unsubscribes.forEach(function (unsubscribe) { return unsubscribe(); });
        });
    };
    return CaptureReport;
}());

/** keeps track of subscriptions to LoadableData */
var LoadingSubscriber = /** @class */ (function () {
    function LoadingSubscriber() {
    }
    /** used internally, do not call from outside 'loadable' */
    LoadingSubscriber.prototype.storeUnsubscribe = function (unsubscribe) {
        this.unsubscribeCallback = unsubscribe;
    };
    /** unsubscribe any previously subscribed data */
    LoadingSubscriber.prototype.unsubscribe = function () {
        if (this.unsubscribeCallback) {
            this.unsubscribeCallback();
        }
    };
    return LoadingSubscriber;
}());

function extendList(target, source) {
    source.datas.forEach(function (data) { return target.datas.push(data); });
    target.incomplete = target.incomplete || source.incomplete;
    target.outdated = target.outdated || source.outdated;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_state.ts
function getValueOrThrowError(state) {
    throwIfErrorState(state);
    return state.value;
}
function isAvailableState(state) {
    return state.meta.error === undefined;
}
function throwIfErrorState(state) {
    throwIfErrorMeta(state.meta);
}
function throwIfErrorMeta(meta) {
    if (meta.error !== undefined)
        throw meta.error;
}

// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/loadable/observe_and_load.ts



function observeAndLoad(loadableExpression) {
    return new common/* Streamable */.fU(function (observer) {
        var loadingSubscriber = new LoadingSubscriber();
        var subscription = (0,state/* observe */.N7)(function () {
            return load_handler_capture(function () { return (0,common/* runAndCatchException */.fX)(loadableExpression); });
        }).subscribe(function (captured) {
            captured.subscribeLoading(loadingSubscriber);
            var outcome = captured.result;
            observer.next(outcome.errorThrown
                ? {
                    meta: {
                        error: outcome.error,
                        incomplete: captured.incomplete,
                        outdated: captured.outdated,
                    },
                }
                : {
                    value: outcome.result,
                    meta: {
                        incomplete: captured.incomplete,
                        outdated: captured.outdated,
                    },
                });
        });
        return function () {
            subscription.unsubscribe();
            loadingSubscriber.unsubscribe();
        };
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




/** @internal */
function load_load(loadableFunction) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkLoad.apply(void 0, __spreadArray([loadableFunction], excessArgs, false));
    return observeAndLoad(function () {
        return (0,state/* withFrozenState */.sc)({
            contextName: 'Scrivito.load',
            message: 'Use an async callback: Scrivito.load(/* ... */).then(/* ... */).',
        }, loadableFunction);
    })
        .filter(function (observed) { return !observed.meta.incomplete && !observed.meta.outdated; })
        .waitForFirst()
        .then(getValueOrThrowError);
}
var checkLoad = (0,common/* checkArgumentsFor */.PJ)('load', [['loadableFunction', common/* tcomb.Function */.pC.Function]], {
    docPermalink: 'js-sdk/load',
});

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loader_callback_process.ts


var loadIdCounter = 0;
var LoaderCallbackProcess = /** @class */ (function () {
    function LoaderCallbackProcess(stateContainer, loader, invalidation) {
        this.stateContainer = stateContainer;
        this.loader = loader;
        this.invalidation = invalidation;
    }
    LoaderCallbackProcess.prototype.notifyDataRequired = function () {
        this.triggerLoadingIfNeeded();
    };
    LoaderCallbackProcess.prototype.notifyDataNoLongerRequired = function () {
        // don't care
    };
    LoaderCallbackProcess.prototype.notifyDataWasSet = function () {
        // when data was set, discard any loading that may still be ongoing
        this.currentLoad = undefined;
    };
    LoaderCallbackProcess.prototype.setTidyCallback = function () {
        // this process currently never tidies itself up.
        // data loaded via this process is intended to be "cached forever" anyway.
    };
    // trigger loading the data.
    // does nothing if the data is already loading, or no loading is needed.
    LoaderCallbackProcess.prototype.triggerLoadingIfNeeded = function () {
        var _this = this;
        if (this.isLoading())
            return;
        var versionWhenLoadingStarted = versionFromCallback(this.invalidation);
        if (!this.loadingNeeded(versionWhenLoadingStarted))
            return;
        var loadId = loadIdCounter++;
        var isUnchanged = function () { return _this.currentLoad === loadId; };
        var finishLoader = function (effect) {
            if (isUnchanged()) {
                (0,state/* addBatchUpdate */.NB)(function () {
                    effect();
                    _this.currentLoad = undefined;
                    runPushCallbacks();
                });
            }
        };
        var pushCallbacks = [];
        var runPushCallbacks = function () {
            return pushCallbacks.forEach(function (callback) { return callback(); });
        };
        this.loader({
            push: function (callback) { return pushCallbacks.push(callback); },
            wasCancelled: function () { return !isUnchanged(); },
        }).then(function (result) {
            return finishLoader(function () {
                return _this.stateContainer.set({
                    value: result,
                    meta: { version: versionWhenLoadingStarted },
                });
            });
        }, function (error) {
            return finishLoader(function () {
                return _this.stateContainer.set({
                    meta: { error: error, version: versionWhenLoadingStarted },
                });
            });
        });
        this.currentLoad = loadId;
    };
    LoaderCallbackProcess.prototype.loadingNeeded = function (currentVersion) {
        var metaStateContainer = this.stateContainer.subState('meta');
        var meta = metaStateContainer.get();
        // not yet loaded?
        if (meta === undefined)
            return true;
        // no invalidation used (and therefore up-to-date by definition)?
        if (currentVersion === undefined)
            return false;
        // not up-to-date?
        return currentVersion !== meta.version;
    };
    LoaderCallbackProcess.prototype.isLoading = function () {
        return this.currentLoad !== undefined;
    };
    return LoaderCallbackProcess;
}());

function metaHasBeenInvalidated(meta, callback) {
    if (!callback || meta === undefined)
        return false;
    return versionFromCallback(callback) !== meta.version;
}
function versionFromCallback(callback) {
    if (!callback) {
        return;
    }
    var version = callback();
    // protect against "crazy" objects like NaN
    if (typeof version === 'number' && isNaN(version)) {
        // invalidation callback returned unsuitable version
        throw new common/* InternalError */.AQ();
    }
    return version;
}

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/loadable/stream_process.ts



var StreamProcess = /** @class */ (function () {
    function StreamProcess(stateContainer, stream) {
        var _this = this;
        this.stateContainer = stateContainer;
        this.stream = stream;
        this.notifyRequiredCounter = 0;
        this.scheduleNextState = (0,common/* collectAndSchedule */.Xq)(state/* addBatchUpdate */.NB, function (state) {
            if (!_this.isStreamOpen())
                return;
            _this.stateContainer.set(state);
        });
        this.enqueueStreamRequired = (0,common/* collectAndSchedule */.Xq)(common/* nextTick */.Y3, function (streamRequired) {
            return streamRequired ? _this.ensureStreamIsOpen() : _this.ensureStreamIsClosed();
        });
    }
    StreamProcess.prototype.notifyDataRequired = function () {
        this.notifyRequiredCounter++;
        this.enqueueStreamRequired(true);
    };
    StreamProcess.prototype.notifyDataNoLongerRequired = function () {
        var _this = this;
        var counterBefore = this.notifyRequiredCounter;
        enqueueFlush(function () {
            if (counterBefore !== _this.notifyRequiredCounter)
                return;
            _this.enqueueStreamRequired(false);
        });
    };
    StreamProcess.prototype.notifyDataWasSet = function () {
        // don't care
    };
    StreamProcess.prototype.setTidyCallback = function (tidyCallback) {
        this.tidyCallback = tidyCallback;
    };
    StreamProcess.prototype.isStreamOpen = function () {
        return !!this.subscription;
    };
    StreamProcess.prototype.ensureStreamIsOpen = function () {
        var _this = this;
        if (!this.subscription) {
            this.subscription = this.stream.subscribe(function (state) {
                return _this.scheduleNextState(state);
            });
        }
    };
    StreamProcess.prototype.ensureStreamIsClosed = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
            if (this.tidyCallback)
                this.tidyCallback();
        }
        this.stateContainer.set(undefined);
    };
    return StreamProcess;
}());

// exported for test purposes only
var UNSUBSCRIBE_DELAY = 10000;
var flushSubject = new common/* Subject */.xQ();
/** Unsubscribe all streams that are no longer needed, without delay.
 * (for test purposes only)
 */
function flushLoadableStreams() {
    flushSubject.next();
}
function enqueueFlush(callback) {
    var runCallbackOnce = (0,external_underscore_.once)(callback);
    (0,common/* waitMs */.OH)(UNSUBSCRIBE_DELAY).then(runCallbackOnce);
    flushSubject.waitForFirst().then(runCallbackOnce);
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/create_loader_process.ts


function createLoaderProcess(options, stateContainer) {
    if (options.stream) {
        return new StreamProcess(stateContainer, options.stream.map(function (value) { return ({ meta: {}, value: value }); }));
    }
    if (options.loadableStream) {
        return new StreamProcess(stateContainer, options.loadableStream);
    }
    return new LoaderCallbackProcess(stateContainer, options.loader, options.invalidation);
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loading_registry.ts
var processIndex = {};
var loadingSubscriptions = {};
function loading_registry_reset() {
    processIndex = {};
    loadingSubscriptions = {};
}
// for test purposes
function subscriberCountForLoading(dataId) {
    return loadingSubscriptions[dataId] || 0;
}
// for test purposes
function processIndexSize() {
    return Object.keys(processIndex).length;
}
function subscribeLoading(dataId, processFactory) {
    var subscriptionActive = true;
    changeSubscriptionsFor(dataId, 1);
    var processToUse = getOrCreateProcessFor(dataId, processFactory);
    processToUse.notifyDataRequired();
    return function () {
        if (!subscriptionActive) {
            return;
        }
        subscriptionActive = false;
        var numSubscriptions = changeSubscriptionsFor(dataId, -1);
        if (numSubscriptions < 1) {
            processToUse.notifyDataNoLongerRequired();
        }
    };
}
function getOrCreateProcessFor(dataId, processFactory) {
    var existingProcess = processIndex[dataId];
    if (existingProcess)
        return existingProcess;
    var newProcess = processFactory();
    processIndex[dataId] = newProcess;
    newProcess.setTidyCallback(function () {
        if (processIndex[dataId] !== newProcess)
            return;
        delete processIndex[dataId];
    });
    return newProcess;
}
function changeSubscriptionsFor(dataId, amount) {
    var oldNumber = loadingSubscriptions[dataId] || 0;
    var newNumber = oldNumber + amount;
    loadingSubscriptions[dataId] = newNumber;
    return newNumber;
}
function notifyDataWasSet(dataId) {
    var process = processIndex[dataId];
    if (process) {
        process.notifyDataWasSet();
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/not_loaded_error.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A `NotLoadedError` is a legacy technique, only still used by the Scrivito UI.
 * It is thrown when data is accessed in a synchronous fashion but is not yet
 * available locally.
 */
var NotLoadedError = /** @class */ (function (_super) {
    __extends(NotLoadedError, _super);
    function NotLoadedError() {
        return _super.call(this, 'Data is not yet loaded.') || this;
    }
    return NotLoadedError;
}(common/* ScrivitoError */.Ix));


;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_data.ts







// Additionally, it may either be loading or not loading.
// Usually, the value goes through the following transitions:
// (missing, not loading)  -> (missing, loading) -> (available, not loading)
// However when something goes wrong, this transition might occur:
// (missing, not loading)  -> (missing, loading) -> (error, not loading)
//
// Other transitions are also valid,
// i.e. all possible transitions may eventually occur.
var LoadableData = /** @class */ (function () {
    // state is the stateContainer where the LoadableData should store its state.
    function LoadableData(options) {
        var _this = this;
        this.stateContainer = options.state;
        this.id = options.state.id();
        this.affiliation = options.affiliation;
        this.invalidation = options.invalidation;
        this.processFactory = function () {
            return createLoaderProcess(options, _this.stateContainer);
        };
    }
    LoadableData.prototype.ensureAvailable = function () {
        notifyUsage(this.id, this);
        return this.checkIfAvailableMeta(this.getMeta());
    };
    /** Access the LoadableData synchronously, assuming it is available.
     * If the LoadableData is an error, the error is thrown.
     * If the LoadableData is missing or loading, undefined will be returned.
     */
    LoadableData.prototype.get = function () {
        var state = this.stateContainer.get();
        if (!this.checkIfAvailableState(state))
            return undefined;
        notifyUsage(this.id, this);
        return state.value;
    };
    LoadableData.prototype.getAffiliation = function () {
        return this.affiliation;
    };
    LoadableData.prototype.getWithDefault = function (theDefault) {
        var state = this.stateContainer.get();
        if (!this.checkIfAvailableState(state))
            return theDefault;
        notifyUsage(this.id, this);
        return state.value;
    };
    /** Similar to LoadableData#get, but if the data is not available,
     * throws a NotLoadedError (instead of returning undefined).
     */
    LoadableData.prototype.getOrThrow = function () {
        var state = this.stateContainer.get();
        if (!this.checkIfAvailableState(state))
            throw new NotLoadedError();
        notifyUsage(this.id, this);
        return state.value;
    };
    LoadableData.prototype.reader = function () {
        this.ensureAvailable();
        return this.stateContainer.reader().subState('value');
    };
    // set the data to a value. this makes the value available.
    LoadableData.prototype.set = function (value) {
        this.stateContainer.set({
            value: value,
            meta: { version: this.currentVersion() },
        });
        notifyDataWasSet(this.id);
    };
    // set the data to an error.
    LoadableData.prototype.setError = function (error) {
        this.stateContainer.set({
            meta: { error: error, version: this.currentVersion() },
        });
        notifyDataWasSet(this.id);
    };
    // transition back to missing, removes any value or errors.
    LoadableData.prototype.reset = function () {
        this.stateContainer.set(undefined);
    };
    // returns true iff the value is missing
    LoadableData.prototype.isMissing = function () {
        return this.getMeta() === undefined;
    };
    // return true iff value is available.
    LoadableData.prototype.isAvailable = function () {
        var meta = this.getMeta();
        return meta !== undefined && meta.error === undefined;
    };
    // return true iff an error was set.
    LoadableData.prototype.isError = function () {
        var _a;
        return ((_a = this.getMeta()) === null || _a === void 0 ? void 0 : _a.error) !== undefined;
    };
    // for test purposes only
    LoadableData.prototype.numSubscribers = function () {
        return subscriberCountForLoading(this.id);
    };
    // package-private: don't call from outside of 'scrivito_sdk/loadable'
    LoadableData.prototype.subscribeLoading = function () {
        return subscribeLoading(this.id, this.processFactory);
    };
    LoadableData.prototype.getMeta = function () {
        return this.stateContainer.subState('meta').get();
    };
    LoadableData.prototype.checkIfAvailableState = function (state) {
        return this.checkIfAvailableMeta(state === null || state === void 0 ? void 0 : state.meta);
    };
    LoadableData.prototype.checkIfAvailableMeta = function (meta) {
        if (meta === undefined) {
            if (!isCurrentlyCapturing()) {
                // this is only intended for developers working on the console
                // therefore not unsubscribing is okay here
                this.subscribeLoading();
                throwNoLoadingContext();
            }
            notifyDataRequired('incomplete', this);
            return false;
        }
        notifyDataRequired(loadingStateFromMeta(meta, this.invalidation), this);
        throwIfErrorMeta(meta);
        return true;
    };
    LoadableData.prototype.currentVersion = function () {
        return versionFromCallback(this.invalidation);
    };
    return LoadableData;
}());

function loadingStateFromMeta(meta, invalidation) {
    if (metaHasBeenInvalidated(meta, invalidation))
        return 'outdated';
    return meta.incomplete ? 'incomplete' : 'available';
}
var usageContext = new common/* ContextContainer */.AY();
function notifyUsage(id, data) {
    var store = usageContext.current();
    if (store) {
        store[id] = data;
    }
}
/** runs fn(), and reports all LoadableData that is used */
function reportUsedData(fn) {
    var store = {};
    var result = usageContext.runWith(store, fn);
    return {
        result: result,
        usedData: values(store),
    };
}
// Object.values replacement (IE11 doesn't have it)
function values(objekt) {
    return Object.keys(objekt).map(function (key) { return objekt[key]; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_with_default.ts

/** Evaluate the loadableFunction and return its result, if fully loaded.
 * Otherwise, return the default.
 *
 * Must be called with a loading context.
 * Loading of `loadableFunction` is triggered.
 */
function loadWithDefault(theDefault, loadableFunction) {
    var run = run_and_catch_errors_while_loading_runAndCatchErrorsWhileLoading(loadableFunction);
    return run.allDataLoaded ? run.result : theDefault;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_serial.ts

/** run the given functions, loading them serially.
 *
 * both functions are always run, but loading of the second function only starts
 * after loading of the first function has finished.
 */
function load_serial_loadSerial(firstFn, secondFn) {
    var firstCaptured = capture(firstFn);
    firstCaptured.forwardToCurrent();
    var secondCaptured = capture(function () { return secondFn(firstCaptured.result); });
    if (firstCaptured.isAllDataLoaded())
        secondCaptured.forwardToCurrent();
    return secondCaptured.result;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/dejitter_state_stream.ts

function dejitterStateStream(stream) {
    return new common/* Streamable */.fU(function (observer) {
        var isComplete = false;
        return stream.subscribe(function (state) {
            if (state.meta.incomplete === true) {
                // once completed, we only forward complete states
                if (isComplete)
                    return;
            }
            else {
                isComplete = true;
            }
            observer.next(state);
        });
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_function.ts




/** Wrap the given function so that it uses a "loadable" cache.
 *
 * This has several effects:
 * * The function is computed asynchronously ("in the background").
 * * The function is cached, i.e. several consumers can use the function with
 *   the same input, but only one computation takes place for each unique input.
 * * Once completely loaded, the function does not "jitter",
 *   i.e. no temporary incomplete results are shown.
 *
 * While the function is loading, the 'defaultValue' is returned.
 * An 'argsToString' function must be provided, which maps each unique input to a unique string.
 */
function loadable_function_loadableFunction(defaultValue, argsToString, fn) {
    var functionState = (0,state/* createStateContainer */.JH)();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var data = new LoadableData({
            state: functionState.subState(argsToString.apply(void 0, args)),
            loadableStream: dejitterStateStream(observeAndLoad(function () { return fn.apply(void 0, args); })),
        });
        return data.getWithDefault(defaultValue);
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/map_reduce.ts



/** generate a function that applies the given mapper and reducer over the given input.
 *
 * the map-reduce is performed in small batches, in order to avoid blocking
 * the event loop with long-running events.
 *
 * The batches are loaded serially (one after the other), in order to avoid flooding
 * the event loop with too many small events at once.
 * */
function loadableMapReduce(input, mapper, reducer, empty, batchSize) {
    if (batchSize === void 0) { batchSize = 20; }
    /** perform the reduction from the given batch to the last one */
    function computeReductionFrom(batchNumber) {
        return loadSerial(function () { return getReducedBatch(batchNumber); }, function (_a) {
            var value = _a.value, continuation = _a.continuation;
            return !continuation
                ? value
                : reducer(value, computeReductionFrom(batchNumber + 1));
        });
    }
    /** compute the map-reduce for the given batch */
    var getReducedBatch = loadableFunction({ value: empty }, function (batchNumber) { return batchNumber.toString(); }, function (batchNumber) {
        var continueFrom = batchNumber === 0
            ? undefined
            : getReducedBatch(batchNumber - 1).continuation;
        var slice = sliceFromIterable(input, continueFrom, batchSize);
        return {
            value: slice.values.map(mapper).reduce(reducer, empty),
            continuation: slice.continuation,
        };
    });
    return function () { return computeReductionFrom(0); };
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_with_default.ts

/** Evaluate the loadableFunction and return its result, if fully loaded.
 * Otherwise, return the default.
 *
 * You may use this without a loading context, but it will _not_ trigger loading!
 * If you want to be sure, that loading is triggered, prefer `loadWithDefault`.
 */
function loadableWithDefault(theDefault, loadableFunction) {
    var captured = load_handler_capture(function () { return loadWithDefault(theDefault, loadableFunction); });
    if (isCurrentlyCapturing()) {
        captured.forwardToCurrent();
    }
    return captured.result;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/run_and_catch_errors_while_loading.ts


function run_and_catch_errors_while_loading_runAndCatchErrorsWhileLoading(loadableFunction) {
    var captured = load_handler_capture(function () { return (0,common/* runAndCatchException */.fX)(loadableFunction); });
    captured.forwardToCurrent();
    var outcome = captured.result;
    var allDataLoaded = captured.isAllDataLoaded();
    var allDataUpToDate = captured.isAllDataUpToDate();
    if (!outcome.errorThrown) {
        return {
            success: true,
            result: outcome.result,
            allDataLoaded: allDataLoaded,
            allDataUpToDate: allDataUpToDate,
        };
    }
    if (!allDataLoaded) {
        return {
            success: false,
            allDataLoaded: false,
            allDataUpToDate: allDataUpToDate,
        };
    }
    throw outcome.error;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_collection.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/** a collection of LoadableData, indexed by key */
var LoadableCollection = /** @class */ (function () {
    function LoadableCollection(_a) {
        var recordedAs = _a.recordedAs, loadElement = _a.loadElement;
        this.recordedAs = recordedAs;
        this.state = (0,state/* createStateContainer */.JH)();
        this.loadElement = loadElement;
        if (recordedAs)
            register(recordedAs, this);
    }
    /** get a LoadableData instance from this collection */
    LoadableCollection.prototype.get = function (key, loaderHint) {
        var stringifiedKey = stringifyKey(key);
        var loaderOptions = this.loadElement(key, loaderHint);
        var data = new LoadableData(__assign(__assign({}, loaderOptions), { state: this.state.subState(stringifiedKey), affiliation: this.recordedAs
                ? { collectionName: this.recordedAs, key: key }
                : undefined }));
        return data;
    };
    LoadableCollection.prototype.clear = function () {
        this.state.clear();
    };
    /** this method is "dangerous" - it can be very, very bad for performance
     * use with care, and only if you know precisely what you are doing.
     *
     * it returns all current loaded data inside the collection,
     * but does not trigger any loading.
     */
    LoadableCollection.prototype.dangerouslyGetRawValues = function () {
        var currentState = this.state.get();
        if (!currentState)
            return [];
        return Object.keys(currentState)
            .map(function (key) { return currentState[key]; })
            .filter(common/* isPresent */.EN)
            .filter(isAvailableState)
            .map(function (state) { return state.value; });
    };
    return LoadableCollection;
}());

function stringifyKey(key) {
    if (typeof key === 'string') {
        return key;
    }
    return (0,common/* computeCacheKey */.mz)(key);
}
var namedCollections = {};
function register(name, collection) {
    if (namedCollections[name]) {
        // collection name registered twice
        throw new common/* InternalError */.AQ();
    }
    namedCollections[name] = collection;
}
function getCollection(name) {
    var found = namedCollections[name];
    if (!found)
        throw new common/* InternalError */.AQ();
    return found;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/data_recorder.ts



/** load the data stored in the recording */
function loadRecording(recording) {
    (0,state/* withBatchedUpdates */.tH)(function () { return recording.forEach(loadDataFromRecord); });
}
function loadDataFromRecord(_a) {
    var name = _a[0], key = _a[1], value = _a[2];
    var loadableData = getCollection(name).get(key);
    loadableData.set(value);
}
function generateRecording(datas) {
    return datas.map(generateRecord);
}
function generateRecord(data) {
    var affiliation = data.getAffiliation();
    if (!affiliation) {
        // Tried to record a LoadableData without affiliation
        throw new common/* InternalError */.AQ();
    }
    return [affiliation.collectionName, affiliation.key, data.get()];
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_and_observe.ts


function loadAndObserve(fn) {
    return observeAndLoad(fn)
        .filter(function (state) { return !state.meta.incomplete; })
        .map(getValueOrThrowError);
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_entire_iterable.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function loadEntireIterable(iterable) {
    return __awaiter(this, void 0, Promise, function () {
        var result, continuation, batch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = [];
                    _a.label = 1;
                case 1: return [4 /*yield*/, load(function () {
                        return sliceFromIterable(iterable, continuation, 1);
                    })];
                case 2:
                    batch = _a.sent();
                    continuation = batch.continuation;
                    batch.values.forEach(function (value) { return result.push(value); });
                    _a.label = 3;
                case 3:
                    if (continuation) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, result];
            }
        });
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/without_loading.ts

/** Evaluate the loadable function fn, but without causing any loading.
 *
 * You may call with or without a loading context. It does not matter.
 * Even if you call with a loading context, no loading is triggered.
 */
function withoutLoading(fn) {
    return load_handler_capture(fn).result;
}

;// CONCATENATED MODULE: ./scrivito_sdk/loadable/index.ts


















/***/ }),

/***/ 1067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GD": function() { return /* binding */ currentObjSpaceId; },
/* harmony export */   "f$": function() { return /* binding */ isCurrentWorkspacePublished; },
/* harmony export */   "tV": function() { return /* binding */ currentWorkspaceId; }
/* harmony export */ });
/* unused harmony exports setCurrentWorkspaceId, resetCurrentWorkspaceId */
/* harmony import */ var scrivito_sdk_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(457);

var objSpaceId = scrivito_sdk_client__WEBPACK_IMPORTED_MODULE_0__/* .PUBLISHED_SPACE */ .Bm;
function currentObjSpaceId() {
    return objSpaceId;
}
function isCurrentWorkspacePublished() {
    return objSpaceId === scrivito_sdk_client__WEBPACK_IMPORTED_MODULE_0__/* .PUBLISHED_SPACE */ .Bm;
}
/** @public */
function currentWorkspaceId() {
    return objSpaceId[1];
}
function setCurrentWorkspaceId(id) {
    objSpaceId = id === 'published' ? PUBLISHED_SPACE : ['workspace', id];
}
// For test purpose only
function resetCurrentWorkspaceId() {
    objSpaceId = PUBLISHED_SPACE;
}


/***/ }),

/***/ 5912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cO": function() { return /* reexport */ BasicField; },
  "AM": function() { return /* reexport */ BasicLink; },
  "Jj": function() { return /* reexport */ BasicObj; },
  "be": function() { return /* reexport */ BasicObjSearch; },
  "E8": function() { return /* reexport */ basic_widget_BasicWidget; },
  "Kb": function() { return /* reexport */ Binary; },
  "pf": function() { return /* reexport */ BinaryType; },
  "ML": function() { return /* reexport */ Editor; },
  "jS": function() { return /* reexport */ FULL_TEXT_OPERATORS; },
  "eJ": function() { return /* reexport */ FutureBinary; },
  "Un": function() { return /* reexport */ LinkType; },
  "LG": function() { return /* reexport */ MetadataCollection; },
  "fP": function() { return /* reexport */ OPERATORS; },
  "d4": function() { return /* reexport */ ObjSearchType; },
  "Bt": function() { return /* reexport */ ObjType; },
  "AZ": function() { return /* reexport */ ObjUnavailable; },
  "l9": function() { return /* reexport */ WidgetType; },
  "j$": function() { return /* reexport */ Workspace; },
  "T8": function() { return /* reexport */ allSitesAndGlobal; },
  "Yz": function() { return /* reexport */ createObjFromFileIn; },
  "f_": function() { return /* reexport */ createObjIn; },
  "GD": function() { return /* reexport */ current_workspace_id/* currentObjSpaceId */.GD; },
  "tV": function() { return /* reexport */ current_workspace_id/* currentWorkspaceId */.tV; },
  "Ti": function() { return /* reexport */ emptyScope; },
  "E2": function() { return /* reexport */ excludeDeletedObjs; },
  "U2": function() { return /* reexport */ excludeGlobal; },
  "TW": function() { return /* reexport */ getAllObjsByValueFrom; },
  "HG": function() { return /* reexport */ getObjBy; },
  "R2": function() { return /* reexport */ getObjFrom; },
  "nl": function() { return /* reexport */ getObjIncludingUnavailableFrom; },
  "Wd": function() { return /* reexport */ getPlacementModificationInfos; },
  "cS": function() { return /* reexport */ getRootObjFrom; },
  "hA": function() { return /* reexport */ objSpaceScope; },
  "$u": function() { return /* reexport */ objSpaceScopeExcludingDeleted; },
  "Ce": function() { return /* reexport */ restrictToContent; },
  "lD": function() { return /* reexport */ restrictToObjClass; },
  "mz": function() { return /* reexport */ restrictToSite; },
  "L8": function() { return /* reexport */ restrictToSiteAndGlobal; },
  "Nv": function() { return /* reexport */ updateReferences; },
  "OW": function() { return /* reexport */ versionOnSite; },
  "s1": function() { return /* reexport */ versionsOnAllSites; }
});

// UNUSED EXPORTS: BasicObjFacetValue, createObjWithSerializedAttributesIn, isCurrentWorkspacePublished, normalizedRestriction, resetCurrentWorkspaceId, restrictToGlobal, serializeAttributes, setBinaryHandler, setCurrentWorkspaceId

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
// EXTERNAL MODULE: ./scrivito_sdk/client/index.ts + 22 modules
var client = __webpack_require__(457);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/models/exclude_deleted_objs.ts
var excludeDeletedObjs = {
    isInScope: function (obj) {
        return !obj.isDeleted();
    },
    applyToSearch: function (search) {
        return search.excludeDeleted();
    },
    applyToCreate: function (attributes) {
        // a newly created obj is not deleted, by definition.
        // => nothing to do here
        return attributes;
    },
};

// EXTERNAL MODULE: ./scrivito_sdk/data/index.ts + 29 modules
var scrivito_sdk_data = __webpack_require__(1190);
;// CONCATENATED MODULE: ./scrivito_sdk/models/obj_unavailable.ts
var ObjUnavailable = /** @class */ (function () {
    function ObjUnavailable(_id, _reason) {
        this._id = _id;
        this._reason = _reason;
    }
    ObjUnavailable.prototype.id = function () {
        return this._id;
    };
    ObjUnavailable.prototype.isForbidden = function () {
        return this._reason === 'forbidden';
    };
    ObjUnavailable.prototype.isNonexistent = function () {
        return this._reason === 'nonexistent';
    };
    ObjUnavailable.prototype.isNotLoaded = function () {
        return this._reason === 'notLoaded';
    };
    // For test purpose only.
    ObjUnavailable.prototype.reason = function () {
        return this._reason;
    };
    return ObjUnavailable;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/obj_scope.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





function objSpaceScope(objSpaceId) {
    return new ObjSpaceScope(objSpaceId);
}
/** An ObjSpaceScope binds the getting, searching and creating of Objs to the given ObjSpace.
 *
 * ObjSpaceScope is the only Scope that can be constructed directly.
 * All other Scopes are created by chaining transformations onto an initial ObjSpaceScope.
 */
var ObjSpaceScope = /** @class */ (function () {
    function ObjSpaceScope(objSpaceId) {
        this.objSpaceId = objSpaceId;
    }
    ObjSpaceScope.prototype.get = function (id) {
        var objData = (0,scrivito_sdk_data/* getObjData */.L7)(this.objSpaceId, id);
        if (!objData)
            return new ObjUnavailable(id, 'notLoaded');
        if (!objData.isUnavailable())
            return new BasicObj(objData);
        if (objData.isForbidden())
            return new ObjUnavailable(id, 'forbidden');
        return new ObjUnavailable(id, 'nonexistent');
    };
    ObjSpaceScope.prototype.search = function () {
        if ((0,client/* isWorkspaceObjSpaceId */.Hn)(this.objSpaceId) ||
            (0,client/* isEmptySpaceId */.P7)(this.objSpaceId)) {
            return new BasicObjSearch(this.objSpaceId).includeDeleted();
        }
        throw new common/* InternalError */.AQ();
    };
    ObjSpaceScope.prototype.create = function (id, attributes) {
        var objClass = attributes._obj_class;
        // Missing "objClass" attribute
        if (!objClass)
            throw new common/* InternalError */.AQ();
        if ((0,client/* isEmptySpaceId */.P7)(this.objSpaceId)) {
            throw new common/* ScrivitoError */.Ix('Cannot create an obj, because the current site is not yet determined.');
        }
        var objJson = __assign({ _obj_class: objClass, _id: id, _site_id: null }, attributes);
        return new BasicObj((0,scrivito_sdk_data/* createObjData */.ZN)(this.objSpaceId, id, objJson));
    };
    ObjSpaceScope.prototype.and = function (transformation) {
        return new TransformedScope(this, transformation);
    };
    return ObjSpaceScope;
}());
/** A TransformedScope is the result of applying a transformation to an existing scope. */
var TransformedScope = /** @class */ (function () {
    function TransformedScope(originalScope, transformation) {
        this.originalScope = originalScope;
        this.transformation = transformation;
    }
    TransformedScope.prototype.get = function (id) {
        var maybeObj = this.originalScope.get(id);
        if (maybeObj instanceof BasicObj &&
            !this.transformation.isInScope(maybeObj)) {
            return new ObjUnavailable(id, 'nonexistent');
        }
        return maybeObj;
    };
    TransformedScope.prototype.search = function () {
        var search = this.originalScope.search();
        this.transformation.applyToSearch(search);
        return search;
    };
    TransformedScope.prototype.create = function (id, attributes) {
        var obj = this.originalScope.create(id, this.transformation.applyToCreate(attributes));
        return obj;
    };
    TransformedScope.prototype.and = function (anotherTransformation) {
        return new TransformedScope(this, anotherTransformation);
    };
    return TransformedScope;
}());

;// CONCATENATED MODULE: ./scrivito_sdk/models/obj_space_scope_excluding_deleted.ts


function objSpaceScopeExcludingDeleted(objSpaceId) {
    return objSpaceScope(objSpaceId).and(excludeDeletedObjs);
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_deserializer.ts




function deserialize(model, value, typeInfo) {
    switch (typeInfo[0]) {
        case 'binary':
            return deserializeBinaryValue(value, model);
        case 'boolean':
            return deserializeBooleanValue(value);
        case 'date':
            return deserializeDateValue(value);
        case 'datetime':
            return deserializeDateValue(value);
        case 'float':
            return deserializeFloatValue(value);
        case 'enum':
            return deserializeEnumValue(value, typeInfo);
        case 'html':
            return deserializeHtmlOrStringValue(value);
        case 'integer':
            return deserializeIntegerValue(value);
        case 'link':
            return deserializeLinkValue(value);
        case 'linklist':
            return deserializeLinklistValue(value);
        case 'multienum':
            return deserializeMultienumValue(value, typeInfo);
        case 'reference':
            return deserializeReferenceValue(value, model);
        case 'referencelist':
            return deserializeReferencelistValue(value, model);
        case 'string':
            return deserializeHtmlOrStringValue(value);
        case 'stringlist':
            return deserializeStringlistValue(value);
        case 'widgetlist':
            return deserializeWidgetlistValue(value, model);
        default:
            throw new common/* InternalError */.AQ();
    }
}
function deserializeBinaryValue(value, model) {
    if (isBackendValueOfType('binary', value)) {
        return new Binary(value[1].id, model.objSpaceId());
    }
    return null;
}
function deserializeBooleanValue(value) {
    if (isBackendValueOfType('boolean', value)) {
        return value[1];
    }
    return false;
}
function deserializeDateValue(value) {
    if (isBackendValueOfType('date', value)) {
        return (0,common/* deserializeAsDate */.r2)(value[1]);
    }
    return null;
}
function deserializeHtmlOrStringValue(value) {
    if (isBackendValueOfType('html', value) ||
        isBackendValueOfType('string', value)) {
        return value[1];
    }
    return '';
}
function deserializeEnumValue(value, typeInfo) {
    if (isBackendValueOfType('string', value)) {
        var valueFromBackend = value[1];
        var values = typeInfo[1].values;
        if ((0,external_underscore_.contains)(values, valueFromBackend))
            return valueFromBackend;
    }
    return null;
}
function deserializeMultienumValue(value, typeInfo) {
    if (isBackendValueOfType('stringlist', value)) {
        var values = typeInfo[1].values;
        return (0,external_underscore_.intersection)(value[1], values);
    }
    return [];
}
function deserializeFloatValue(value) {
    if (isBackendValueOfType('number', value)) {
        return convertToFloat(value[1].toString());
    }
    if (isBackendValueOfType('string', value)) {
        var valueFromBackend = value[1];
        if (valueFromBackend.match(/^-?\d+(\.\d+)?$/)) {
            return convertToFloat(valueFromBackend);
        }
    }
    return null;
}
function convertToFloat(floatAsString) {
    var floatValue = parseFloat(floatAsString);
    return (0,common/* isValidFloat */.RY)(floatValue) ? floatValue : null;
}
function deserializeIntegerValue(value) {
    if (isBackendValueOfType('number', value) ||
        isBackendValueOfType('string', value)) {
        return (0,common/* deserializeAsInteger */.ld)(value[1]);
    }
    return null;
}
function deserializeLinkValue(value) {
    if (isBackendValueOfType('link', value)) {
        return convertToLink(value[1]);
    }
    return null;
}
function deserializeLinklistValue(value) {
    if (isBackendValueOfType('linklist', value)) {
        return value[1].map(convertToLink);
    }
    return [];
}
function convertToLink(valueFromBackend) {
    var linkParams = (0,external_underscore_.pick)(valueFromBackend, 'query', 'rel', 'target', 'title', 'url');
    if ('fragment' in valueFromBackend) {
        linkParams.hash = valueFromBackend.fragment;
    }
    if ('obj_id' in valueFromBackend) {
        linkParams.objId = valueFromBackend.obj_id;
    }
    return new BasicLink(linkParams);
}
function convertReference(valueFromBackend, model) {
    return getObjIncludingUnavailableFrom(objSpaceScopeExcludingDeleted(model.objSpaceId()), valueFromBackend);
}
function deserializeReferenceValue(value, model) {
    if (isBackendValueOfType('reference', value)) {
        return convertReference(value[1], model);
    }
    return null;
}
function deserializeReferencelistValue(value, model) {
    if (isBackendValueOfType('referencelist', value)) {
        return value[1].map(function (obj) { return convertReference(obj, model); });
    }
    return [];
}
function deserializeStringlistValue(value) {
    if (isBackendValueOfType('stringlist', value)) {
        return value[1];
    }
    return [];
}
function deserializeWidgetlistValue(value, model) {
    if (isBackendValueOfType('widgetlist', value)) {
        return value[1].map(function (widgetId) { return model.widget(widgetId); });
    }
    return [];
}
function isBackendValueOfType(type, value) {
    return Array.isArray(value) && value[0] === type;
}

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
// EXTERNAL MODULE: ./scrivito_sdk/link_resolution/index.ts + 6 modules
var link_resolution = __webpack_require__(2861);
;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_scope_get_methods.ts

function getObjFrom(scope, id) {
    var maybeObj = scope.get(id);
    return maybeObj instanceof BasicObj ? maybeObj : null;
}
function getObjIncludingUnavailableFrom(scope, id) {
    return scope.get(id);
}
/** Returns an Obj with the desired value for the given attribute.
 *
 * If multiple such Objs exist, one of them is chosen in a random, but determistic way.
 * Deleted Objs are avoided: They are only chosen, if no other matching Objs exists.
 */
function getObjBy(scope, attribute, value) {
    var _a;
    var query = scope.search().and(attribute, 'equals', value);
    var foundObj = query.first();
    if (foundObj && foundObj.isDeleted()) {
        return (_a = query.excludeDeleted().first()) !== null && _a !== void 0 ? _a : foundObj;
    }
    return foundObj;
}
function getAllObjsByValueFrom(scope, attribute, value) {
    return scope
        .search()
        .and(attribute, 'equals', value)
        .dangerouslyUnboundedTake();
}
function getRootObjFrom(scope) {
    return getObjBy(scope.and(excludeGlobal), '_path', '/');
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_field.ts






var BasicField = /** @class */ (function () {
    function BasicField(container, attributeName, typeInfo) {
        this.container = container;
        this.attributeName = attributeName;
        this.typeInfo = typeInfo;
        if (container instanceof basic_widget_BasicWidget)
            this.widgetId = container.id();
    }
    BasicField.prototype.get = function () {
        return getContentValue(this.container, this.attributeName, this.typeInfo);
    };
    BasicField.prototype.update = function (newValue) {
        var _a;
        this.container.update((_a = {}, _a[this.attributeName] = [newValue, this.typeInfo], _a));
    };
    BasicField.prototype.getContainer = function () {
        return this.container;
    };
    BasicField.prototype.obj = function () {
        return this.container.obj();
    };
    BasicField.prototype.objSpaceId = function () {
        return this.container.objSpaceId();
    };
    BasicField.prototype.name = function () {
        return this.attributeName;
    };
    BasicField.prototype.type = function () {
        return this.typeInfo[0];
    };
    BasicField.prototype.equals = function (other) {
        if (!(other instanceof BasicField)) {
            return false;
        }
        return (this.container.equals(other.getContainer()) &&
            this.attributeName === other.name());
    };
    BasicField.prototype.validClasses = function () {
        var options = this.typeInfo[1];
        return options === null || options === void 0 ? void 0 : options.validClasses;
    };
    BasicField.prototype.getDiff = function (_a) {
        var from = _a[0], to = _a[1];
        var obj = this.obj();
        return (0,scrivito_sdk_data/* getFieldDiff */.Mu)(from, to, this.attributeName, obj.id(), this.widgetId);
    };
    BasicField.prototype.getHtmlDiffContent = function (range) {
        var diff = this.getDiff(range);
        return (diff === null || diff === void 0 ? void 0 : diff.format) === 'html' ? diff.content : null;
    };
    BasicField.prototype.toString = function () {
        var objId = this.obj().id();
        var name = this.name();
        return this.widgetId
            ? "<BasicField name=" + name + " objId=" + objId + " widgetId=" + this.widgetId + ">"
            : "<BasicField name=" + name + " objId=" + objId + ">";
    };
    BasicField.prototype.id = function () {
        return this.widgetId
            ? this.attributeName + "|" + this.obj().id() + "|" + this.widgetId
            : this.attributeName + "|" + this.obj().id();
    };
    BasicField.prototype.inObjSpace = function (objSpaceId) {
        return this.inObjScope(objSpaceScopeExcludingDeleted(objSpaceId));
    };
    BasicField.prototype.inObjScope = function (scope) {
        var obj = getObjFrom(scope, this.obj().id());
        if (!obj)
            return null;
        var container = this.getContainer() instanceof BasicObj
            ? obj
            : obj.widget(this.getContainer().id());
        if (!container)
            return null;
        return new BasicField(container, this.name(), this.typeInfo);
    };
    return BasicField;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_facet_value.ts



var BasicObjFacetValue = /** @class */ (function () {
    function BasicObjFacetValue(objSpaceId, facet) {
        this.objSpaceId = objSpaceId;
        this.facet = facet;
    }
    BasicObjFacetValue.prototype.name = function () {
        return this.facet.name;
    };
    BasicObjFacetValue.prototype.count = function () {
        return this.facet.count;
    };
    BasicObjFacetValue.prototype.includedObjs = function () {
        var scope = objSpaceScopeExcludingDeleted(this.objSpaceId);
        return (0,external_underscore_.compact)(this.facet.includedObjIds.map(function (id) { return getObjFrom(scope, id); }));
    };
    return BasicObjFacetValue;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_search.ts
var basic_obj_search_assign = (undefined && undefined.__assign) || function () {
    basic_obj_search_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_obj_search_assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var FULL_TEXT_OPERATORS = [
    'contains',
    'containsPrefix',
];
var OPERATORS = [
    'contains',
    'containsPrefix',
    'matches',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
    'linksTo',
    'refersTo',
];
var NEGATABLE_OPERATORS = [
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
];
var BOOSTABLE_OPERATORS = ['contains', 'containsPrefix'];
var BasicObjSearch = /** @class */ (function () {
    function BasicObjSearch(_objSpaceId, params) {
        this._objSpaceId = _objSpaceId;
        this._query = params ? __spreadArray([], params.query, true) : [];
        this._boost = (params === null || params === void 0 ? void 0 : params.boost) || [];
        this._batchSize = params === null || params === void 0 ? void 0 : params.batchSize;
        this._offset = params === null || params === void 0 ? void 0 : params.offset;
        this._orderBy = params === null || params === void 0 ? void 0 : params.orderBy;
        this._includeDeleted = params === null || params === void 0 ? void 0 : params.includeDeleted;
        this._includeEditingAssets = params === null || params === void 0 ? void 0 : params.includeEditingAssets;
    }
    BasicObjSearch.fromParams = function (workspaceId, params) {
        return new BasicObjSearch(['workspace', workspaceId], params);
    };
    BasicObjSearch.prototype.and = function (attributeOrSearch, operator, value, boost) {
        if (attributeOrSearch instanceof BasicObjSearch) {
            this._query = __spreadArray(__spreadArray([], this._query, true), attributeOrSearch._query, true);
        }
        else {
            if (operator === undefined) {
                throw new common/* ArgumentError */.ir('Missing operator to search with');
            }
            if (value === undefined) {
                throw new common/* ArgumentError */.ir('Missing value to search (specify "null" for missing)');
            }
            var field = attributeOrSearch;
            var subQuery = buildSubQuery(field, operator, value);
            if (boost) {
                assertBoostableOperator(operator);
                subQuery.boost = underscoreBoostAttributes(boost);
            }
            this._query.push(subQuery);
        }
        return this;
    };
    BasicObjSearch.prototype.andNot = function (attribute, operator, value) {
        var subQuery = buildSubQuery(attribute, operator, value);
        assertNegatableOperator(operator);
        subQuery.negate = true;
        this._query.push(subQuery);
        return this;
    };
    BasicObjSearch.prototype.boost = function (field, operator, value, factor) {
        var subQuery = buildSubQuery(field, operator, value);
        this._boost.push({ condition: [subQuery], factor: factor });
        return this;
    };
    BasicObjSearch.prototype.offset = function (offset) {
        this._offset = offset || undefined;
        return this;
    };
    BasicObjSearch.prototype.order = function (attributeOrAttributes, direction) {
        var attributes = Array.isArray(attributeOrAttributes)
            ? attributeOrAttributes
            : [[attributeOrAttributes, direction]];
        this._orderBy = attributes.map(function (attr) {
            if (Array.isArray(attr)) {
                var innerAttr = attr[0], innerDirection = attr[1];
                return normalizeOrderByItem(innerAttr, innerDirection);
            }
            return normalizeOrderByItem(attr);
        });
        return this;
    };
    BasicObjSearch.prototype.batchSize = function (batchSize) {
        this._batchSize = batchSize;
        return this;
    };
    BasicObjSearch.prototype.includeDeleted = function () {
        this._includeDeleted = true;
        return this;
    };
    BasicObjSearch.prototype.excludeDeleted = function () {
        this._includeDeleted = undefined;
        return this;
    };
    BasicObjSearch.prototype.includeEditingAssets = function () {
        this._includeEditingAssets = true;
        return this;
    };
    BasicObjSearch.prototype.count = function () {
        return this.getObjDataQuery().count();
    };
    BasicObjSearch.prototype.first = function () {
        return this.take(1)[0] || null;
    };
    BasicObjSearch.prototype.take = function (count) {
        return this.internalTake(count);
    };
    BasicObjSearch.prototype.dangerouslyUnboundedTake = function () {
        return this.internalTake(undefined);
    };
    BasicObjSearch.prototype.iterator = function () {
        return buildBasicObjIterator(this.getObjDataQuery().iterator());
    };
    BasicObjSearch.prototype.iteratorFromContinuation = function (continuation) {
        return buildBasicObjIterator(this.getObjDataQuery().iteratorFromContinuation(continuation));
    };
    BasicObjSearch.prototype.getObjDataQuery = function () {
        return (0,scrivito_sdk_data/* getObjQuery */.N1)(this.objSpaceId(), this.queryParams(), this.getBatchSize());
    };
    BasicObjSearch.prototype.getBatchSize = function () {
        return this._batchSize || 100;
    };
    BasicObjSearch.prototype.suggest = function (prefix, options) {
        var _a = basic_obj_search_assign({ attributes: ['*'], limit: 5 }, options), attributes = _a.attributes, limit = _a.limit;
        return (0,scrivito_sdk_data/* suggest */.D7)(this.objSpaceId(), prefix, { attributes: attributes, limit: limit }, this.queryParams());
    };
    BasicObjSearch.prototype.facet = function (attribute, options) {
        var _this = this;
        var facetOptions;
        if (options === undefined) {
            facetOptions = {};
        }
        else {
            facetOptions = assertValidFacetOptions(options);
        }
        var facetQuery = new scrivito_sdk_data/* FacetQuery */.hO(this.objSpaceId(), underscoreAttribute(attribute), facetOptions, this._query);
        return facetQuery
            .result()
            .map(function (facetData) { return new BasicObjFacetValue(_this.objSpaceId(), facetData); });
    };
    BasicObjSearch.prototype.objSpaceId = function () {
        return this._objSpaceId;
    };
    BasicObjSearch.prototype.params = function () {
        return basic_obj_search_assign(basic_obj_search_assign({}, this.queryParams()), { batchSize: this._batchSize });
    };
    BasicObjSearch.prototype.queryParams = function () {
        var params = { query: this._query };
        if (this._boost !== undefined && this._boost.length) {
            params.boost = this._boost;
        }
        if (this._offset !== undefined)
            params.offset = this._offset;
        if (this._orderBy !== undefined)
            params.orderBy = this._orderBy;
        if (this._includeDeleted !== undefined) {
            params.includeDeleted = this._includeDeleted;
        }
        if (this._includeEditingAssets !== undefined) {
            params.includeEditingAssets = this._includeEditingAssets;
        }
        return params;
    };
    BasicObjSearch.prototype.internalTake = function (count) {
        var oldBatchSize = this._batchSize;
        try {
            this._batchSize = count === undefined ? 1000 : count;
            return (0,common/* extractFromIterator */.W)(this.iterator(), count);
        }
        finally {
            this._batchSize = oldBatchSize;
        }
    };
    return BasicObjSearch;
}());

function buildBasicObjIterator(queryIterator) {
    return {
        next: function () {
            var nextResult = queryIterator.next();
            return nextResult.done
                ? { done: true }
                : { done: false, value: new BasicObj(nextResult.value) };
        },
        continuation: function () {
            return queryIterator.continuation();
        },
    };
}
function buildSubQuery(fieldInput, operatorInput, valueInput) {
    var field = convertAttribute(fieldInput);
    var operator = convertOperator(operatorInput);
    var value = convertValue(valueInput, operator);
    return { field: field, operator: operator, value: value };
}
function assertBoostableOperator(operator) {
    if (!(0,external_underscore_.contains)(BOOSTABLE_OPERATORS, operator)) {
        throw new common/* ArgumentError */.ir("Boosting operator \"" + operator + "\" is invalid. " + explainValidOperators(BOOSTABLE_OPERATORS));
    }
}
function assertNegatableOperator(operator) {
    if (!(0,external_underscore_.contains)(NEGATABLE_OPERATORS, operator)) {
        throw new common/* ArgumentError */.ir("Negating operator \"" + operator + "\" is invalid. " + explainValidOperators(NEGATABLE_OPERATORS));
    }
}
function convertValue(value, operator) {
    if (Array.isArray(value)) {
        return value.map(function (v) { return convertSingleValue(v, operator); });
    }
    return convertSingleValue(value, operator);
}
function convertSingleValue(value, operator) {
    if ((0,external_underscore_.isDate)(value))
        return convertDate(value, operator);
    if (value instanceof BasicObj) {
        return value.id();
    }
    return value;
}
function convertDate(value, operator) {
    if (operator !== 'is_greater_than' && operator !== 'is_less_than') {
        return (0,common/* formatDateToString */.xH)(value);
    }
    var roundedDate = roundToNearestMinute(value);
    var isInCurrentDateRange = Math.abs(Date.now() - value.getTime()) < 30000;
    return (0,common/* formatDateToString */.xH)(isInCurrentDateRange ? roundedDate : value);
}
function roundToNearestMinute(value) {
    var oneMinuteInMs = 60000;
    return new Date(Math.round(value.getTime() / oneMinuteInMs) * oneMinuteInMs);
}
function convertOperator(operator) {
    if (!(0,external_underscore_.contains)(OPERATORS, operator)) {
        throw new common/* ArgumentError */.ir("Operator \"" + operator + "\" is invalid. " + explainValidOperators(OPERATORS));
    }
    return (0,common/* underscore */.It)(operator);
}
function explainValidOperators(operators) {
    return "Valid operators are " + operators.join(', ') + ".";
}
function convertAttribute(attribute) {
    if (Array.isArray(attribute)) {
        return attribute.map(function (a) { return underscoreAttribute(a); });
    }
    return underscoreAttribute(attribute);
}
function underscoreBoostAttributes(boost) {
    var boostWithUnderscoreAttributes = {};
    Object.keys(boost).forEach(function (attributeName) {
        var value = boost[attributeName];
        var underscoredAttributeName = underscoreAttribute(attributeName);
        boostWithUnderscoreAttributes[underscoredAttributeName] = value;
    });
    return boostWithUnderscoreAttributes;
}
function underscoreAttribute(attributeName) {
    if (!(0,common/* isCamelCase */.q2)(attributeName)) {
        throw new common/* ArgumentError */.ir("Attribute name \"" + attributeName + "\" is not camel case.");
    }
    return (0,common/* underscore */.It)(attributeName);
}
function normalizeOrderByItem(attribute, direction) {
    if (direction === void 0) { direction = 'asc'; }
    var sortBy = underscoreAttribute(attribute);
    return [sortBy, direction];
}
var VALID_FACET_OPTIONS = ['limit', 'includeObjs'];
function assertValidFacetOptions(options) {
    var invalidOptions = external_underscore_.without.apply(void 0, __spreadArray([Object.keys(options)], VALID_FACET_OPTIONS, false));
    if (invalidOptions.length) {
        throw new common/* ArgumentError */.ir('Invalid facet options: ' +
            ((0,common/* prettyPrint */.xr)(invalidOptions) + ". Valid options: " + VALID_FACET_OPTIONS));
    }
    return options;
}

// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
;// CONCATENATED MODULE: ./scrivito_sdk/models/model_types.ts






var ObjType = common/* tcomb.irreducible */.pC.irreducible('Obj', function (maybeObj) {
    return isWrapping(maybeObj, BasicObj);
});
var WidgetType = common/* tcomb.irreducible */.pC.irreducible('Widget', function (maybeWidget) {
    return isWrapping(maybeWidget, basic_widget_BasicWidget);
});
var LinkType = common/* tcomb.irreducible */.pC.irreducible('Link', function (maybeLink) {
    return isWrapping(maybeLink, BasicLink);
});
var ObjSearchType = common/* tcomb.irreducible */.pC.irreducible('ObjSearch', function (maybeSearch) { return isWrapping(maybeSearch, BasicObjSearch); });
var BinaryType = common/* tcomb.irreducible */.pC.irreducible('Binary', function (maybeBinary) { return maybeBinary instanceof Binary; });
function isWrapping(maybeWrapped, basicClass) {
    if (!maybeWrapped) {
        return false;
    }
    return (maybeWrapped
        ._scrivitoPrivateContent instanceof basicClass);
}

// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/models/future_binary.ts
var future_binary_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var binaryHandler;
function setBinaryHandler(handler) {
    binaryHandler = handler;
}
/** @public */
var FutureBinary = /** @class */ (function () {
    /** @internal */
    function FutureBinary(sourceSpec, options) {
        if (options === void 0) { options = {}; }
        var filename = options.filename;
        this.contentType = options.contentType;
        if (isIdToCopySource(sourceSpec)) {
            this.idToCopy = sourceSpec.idToCopy;
        }
        else {
            var source = sourceSpec.source;
            this.source = source;
            if (!this.contentType) {
                this.contentType = source.type;
            }
            if (!filename) {
                filename = source.name;
            }
        }
        if (filename) {
            this.filename = filename.replace(/[^\w\-_\.$]/g, '-');
        }
    }
    /** @internal */
    FutureBinary.prototype.into = function (target) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkInto.apply(void 0, future_binary_spreadArray([target], excessArgs, false));
        (0,state/* failIfFrozen */.un)('Changing CMS content');
        return this.intoId(target._scrivitoPrivateContent.id());
    };
    /** @internal */
    FutureBinary.prototype.intoId = function (targetId) {
        if (!binaryHandler)
            throw new common/* InternalError */.AQ();
        var binaryPromise;
        if (this.idToCopy) {
            binaryPromise = binaryHandler.copyBinary(this.idToCopy, targetId, this.filename, this.contentType);
        }
        else {
            if (!this.source)
                throw new common/* InternalError */.AQ();
            binaryPromise = binaryHandler.uploadBinary(targetId, this.source, this.filename, this.contentType);
        }
        return binaryPromise.then(function (_a) {
            var id = _a.id;
            return new Binary(id, (0,current_workspace_id/* currentObjSpaceId */.GD)());
        });
    };
    return FutureBinary;
}());

var checkInto = (0,common/* checkArgumentsFor */.PJ)('FutureBinary#into', [['target', ObjType]], {
    docPermalink: 'js-sdk/FutureBinary-into',
});
function isIdToCopySource(toCheck) {
    return !!toCheck.idToCopy;
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/metadata_collection.ts




var BackendBinaryMetadataType;
(function (BackendBinaryMetadataType) {
    BackendBinaryMetadataType["Date"] = "date";
    BackendBinaryMetadataType["Number"] = "number";
    BackendBinaryMetadataType["String"] = "string";
    BackendBinaryMetadataType["Stringlist"] = "stringlist";
})(BackendBinaryMetadataType || (BackendBinaryMetadataType = {}));
/** @public */
var MetadataCollection = /** @class */ (function () {
    /** @internal */
    function MetadataCollection(
    /** @internal */
    _binaryId, 
    /** @internal */
    objSpaceId) {
        if (objSpaceId === void 0) { objSpaceId = client/* PUBLISHED_SPACE */.Bm; }
        this._binaryId = _binaryId;
        this.objSpaceId = objSpaceId;
        if (this._binaryId) {
            this.loadableData = loadableCollection.get(this._binaryId, this.objSpaceId);
        }
    }
    MetadataCollection.prototype.get = function (key) {
        (0,scrivito_sdk_data/* assertNotUsingInMemoryTenant */.VJ)('MetadataCollection#get');
        assertCamelCase(key);
        var data = this.getData();
        if (data) {
            var underscoredKey = (0,common/* underscore */.It)(key);
            if (data.hasOwnProperty(underscoredKey))
                return data[underscoredKey];
            return null;
        }
        return null;
    };
    /** @internal */
    MetadataCollection.prototype.keys = function () {
        var data = this.getData();
        if (data)
            return Object.keys(data).map(common/* camelCase */.eV);
        return [];
    };
    /** @internal */
    MetadataCollection.prototype.contentLength = function () {
        var length = this.get('contentLength');
        if (typeof length !== 'number')
            return 0;
        return length;
    };
    /** @internal */
    MetadataCollection.prototype.contentType = function () {
        var type = this.get('contentType');
        if (typeof type !== 'string')
            return '';
        return type;
    };
    /**
     * For test purpose only.
     * @internal
     */
    MetadataCollection.prototype.binaryId = function () {
        return this._binaryId;
    };
    /** @internal */
    MetadataCollection.prototype.getData = function () {
        if (this.loadableData) {
            var metadata = this.loadableData.get();
            if (metadata)
                return deserializeMetadata(metadata);
        }
    };
    return MetadataCollection;
}());

// For test purpose only
function storeMetadataCollection(binaryId, response) {
    // deserialize once, as a sanity check
    deserializeMetadata(response);
    loadableCollection.get(binaryId).set(response);
}
var loadableCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'metadata',
    loadElement: function (id, objSpaceId) { return ({
        loader: function () {
            return client/* cmsRetrieval.retrieveBinaryMetadata */.Qw.retrieveBinaryMetadata(id, { accessVia: objSpaceId });
        },
    }); },
});
function deserializeMetadata(response) {
    var backendMetadata = response.meta_data;
    var metadata = {};
    for (var _i = 0, _a = Object.keys(backendMetadata); _i < _a.length; _i++) {
        var key = _a[_i];
        var _b = backendMetadata[key], backendType = _b[0], backendValue = _b[1];
        if (backendValue === null || backendValue === undefined) {
            throw new common/* InternalError */.AQ();
        }
        var value = void 0;
        if (backendType === BackendBinaryMetadataType.Date) {
            if (typeof backendValue === 'string') {
                value = (0,common/* deserializeAsDate */.r2)(backendValue);
            }
            else {
                // Invalid non-string backend value for a date metadata
                throw new common/* InternalError */.AQ();
            }
        }
        else {
            value = backendValue;
        }
        metadata[key] = value;
    }
    return metadata;
}
function assertCamelCase(key) {
    if (!(0,common/* isCamelCase */.q2)(key)) {
        throw new common/* ArgumentError */.ir("Metadata key \"" + key + "\" is not in camel case.");
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/binary.ts
var binary_assign = (undefined && undefined.__assign) || function () {
    binary_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return binary_assign.apply(this, arguments);
};
var binary_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};








var binary_loadableCollection = new loadable/* LoadableCollection */.X2({
    recordedAs: 'binary',
    loadElement: function (_a, objSpaceId) {
        var binaryId = _a[0], transformation = _a[1];
        return ({
            loader: function () {
                return client/* cmsRetrieval.retrieveBinaryUrls */.Qw.retrieveBinaryUrls(binaryId, transformation, {
                    accessVia: objSpaceId,
                });
            },
        });
    },
});
// this is a small, 1x1 pixel, fully transparent GIF image
var PLACEHOLDER_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// For test purpose only.
function storeBinary(binaryId, options, response) {
    var transformation = options.transformation;
    binary_loadableCollection.get([binaryId, transformation]).set(response);
    var raw = new Binary(binaryId, PUBLISHED_SPACE).raw();
    if (transformation) {
        return raw.optimizeFor(transformation);
    }
    return raw;
}
/** @public */
var Binary = /** @class */ (function () {
    /** @internal */
    function Binary(
    /** @internal */
    _id, 
    /** @internal */
    _objSpaceId, transformation) {
        if (_objSpaceId === void 0) { _objSpaceId = client/* PUBLISHED_SPACE */.Bm; }
        if (transformation === void 0) { transformation = {}; }
        this._id = _id;
        this._objSpaceId = _objSpaceId;
        this._transformation = transformation || undefined;
        this._loadableData = binary_loadableCollection.get([this._id, this._transformation], this._objSpaceId);
    }
    /** @internal */
    Binary.upload = function (source, options) {
        var excessArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            excessArgs[_i - 2] = arguments[_i];
        }
        checkUpload.apply(void 0, binary_spreadArray([source, options], excessArgs, false));
        if (!common/* FileType.is */.Tv.is(source)) {
            if (!(options && options.filename)) {
                throw new common/* ArgumentError */.ir('Expected a filename to be passed with Blob as the source.');
            }
        }
        return new FutureBinary({ source: source }, options);
    };
    /** @internal */
    Binary.prototype.id = function () {
        return this._id;
    };
    Binary.prototype.copy = function (options) {
        return new FutureBinary({ idToCopy: this._id }, options);
    };
    Binary.prototype.isPrivate = function () {
        return !(0,common/* equals */.fS)(this._objSpaceId, client/* PUBLISHED_SPACE */.Bm);
    };
    Binary.prototype.optimizeFor = function (transformation) {
        return new Binary(this._id, this._objSpaceId, binary_assign(binary_assign({}, this._transformation), transformation));
    };
    Binary.prototype.original = function () {
        return new Binary(this._id, this._objSpaceId, {});
    };
    Binary.prototype.raw = function () {
        return new Binary(this._id, this._objSpaceId, null);
    };
    /** @internal */
    Binary.prototype.isExplicitlyTransformed = function () {
        return this.isTransformed() && !(0,external_underscore_.isEmpty)(this._transformation);
    };
    /** @internal */
    Binary.prototype.isRaw = function () {
        return !this.isTransformed();
    };
    Binary.prototype.url = function () {
        (0,scrivito_sdk_data/* assertNotUsingInMemoryTenant */.VJ)('Binary#url');
        return this.urlWithoutPlaceholder() || PLACEHOLDER_URL;
    };
    /** @internal */
    Binary.prototype.urlWithoutPlaceholder = function () {
        var data = this._loadableData.get();
        if (!data) {
            return;
        }
        var accessData = data[this.accessType()];
        if (!accessData) {
            // Missing key in binary data
            throw new common/* InternalError */.AQ();
        }
        return accessData.get.url;
    };
    Binary.prototype.filename = function () {
        var url = this.url();
        if (!url || url.match(/^data:/)) {
            return '';
        }
        return external_urijs_(url).path().split('/').pop() || '';
    };
    Binary.prototype.metadata = function () {
        this.assertNotTransformed('Metadata');
        return new MetadataCollection(this._id, this._objSpaceId);
    };
    Binary.prototype.contentType = function () {
        this.assertNotTransformed('Content type');
        return this.metadata().contentType();
    };
    Binary.prototype.contentLength = function () {
        this.assertNotTransformed('Content length');
        return this.metadata().contentLength();
    };
    /** @internal */
    Binary.prototype.extname = function () {
        if (this.raw().filename().indexOf('.') > -1) {
            var matches = /[^.\\]*$/.exec(this.raw().filename());
            if (matches) {
                return matches[0].toLowerCase();
            }
        }
        return '';
    };
    /** @internal */
    Binary.prototype.equals = function (binary) {
        return (this.id() === binary.id() &&
            (0,common/* equals */.fS)(this._objSpaceId, binary.objSpaceId()) &&
            (0,external_underscore_.isEqual)(this.definition(), binary.definition()));
    };
    /** @internal */
    Binary.prototype.isImage = function () {
        var rawContentType = this.raw().contentType();
        if (rawContentType) {
            return rawContentType.split('/')[0] === 'image';
        }
        return false;
    };
    /**
     * For test purpose only.
     * @internal
     */
    Binary.prototype.definition = function () {
        return this._transformation || null;
    };
    /** @internal */
    Binary.prototype.objSpaceId = function () {
        return this._objSpaceId;
    };
    /** @internal */
    Binary.prototype.accessType = function () {
        if (this.isPrivate()) {
            return 'private_access';
        }
        return 'public_access';
    };
    /** @internal */
    Binary.prototype.assertNotTransformed = function (fieldName) {
        if (this.isTransformed()) {
            throw new common/* ScrivitoError */.Ix("\"" + fieldName + "\" is not available for transformed images." +
                ' Use "Scrivito.Binary#raw" to access the untransformed version of the image.');
        }
    };
    /** @internal */
    Binary.prototype.isTransformed = function () {
        return !!this._transformation;
    };
    return Binary;
}());

var BinaryOptionsType = common/* tcomb.interface */.pC["interface"]({
    contentType: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    filename: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
});
var SourceType = common/* tcomb.refinement */.pC.refinement(common/* tcomb.Object */.pC.Object, function (value) { return common/* BlobType.is */.R0.is(value) || common/* FileType.is */.Tv.is(value); }, 'Blob or File');
var checkUpload = (0,common/* checkArgumentsFor */.PJ)('Binary.upload', [
    ['source', SourceType],
    ['options', common/* tcomb.maybe */.pC.maybe(BinaryOptionsType)],
], {
    docPermalink: 'js-sdk/Binary-static-upload',
});

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_scope_create_methods.ts
var basic_scope_create_methods_assign = (undefined && undefined.__assign) || function () {
    basic_scope_create_methods_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_scope_create_methods_assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function createObjIn(scope, attributes) {
    var objId = attributes._id, objClass = attributes._objClass, otherAttributes = __rest(attributes, ["_id", "_objClass"]);
    var maybeObjClass = denormalizeSystemAttributeValue(objClass);
    var maybeObjId = denormalizeSystemAttributeValue(objId);
    return createObj(scope, maybeObjId || BasicObj.generateId(), { _obj_class: maybeObjClass }, otherAttributes);
}
function createObjFromFileIn(scope, file, attributes) {
    var maybeId = denormalizeSystemAttributeValue(attributes._id);
    var objId = maybeId || BasicObj.generateId();
    return Binary.upload(file)
        .intoId(objId)
        .then(function (binary) {
        var basicObj = createObjIn(scope, basic_scope_create_methods_assign(basic_scope_create_methods_assign({}, attributes), { _id: [objId], blob: [binary, ['binary']] }));
        return basicObj.finishSaving().then(function () { return basicObj; });
    });
}
function createObjWithSerializedAttributesIn(scope, serializedAttributes) {
    var _a = extractWidgetlistValues(serializedAttributes), objJson = _a[0], basicAttributes = _a[1];
    return createObj(scope, objJson._id, objJson, basicAttributes);
}
function createObj(scope, id, objJson, basicAttributes) {
    var obj = scope.create(id, objJson);
    obj.update(basicAttributes);
    return obj;
}
function denormalizeSystemAttributeValue(value) {
    var maybeStringValue = Array.isArray(value) ? value[0] : value;
    return typeof maybeStringValue === 'string' ? maybeStringValue : undefined;
}
function extractWidgetlistValues(attributes) {
    var serializedAttributes = basic_scope_create_methods_assign({}, attributes);
    var widgetlistAttributes = {};
    Object.keys(attributes).forEach(function (name) {
        var serializedValue = attributes[name];
        if (isSerializedWidgetlistValue(serializedValue)) {
            var widgets = serializedValue[1].map(function (serializedWidgetAttributes) {
                return BasicWidget.newWithSerializedAttributes(serializedWidgetAttributes);
            });
            var attrName = camelCase(name);
            widgetlistAttributes[attrName] = [widgets, ['widgetlist']];
            delete serializedAttributes[name];
        }
    });
    // serializeAttributes returns ObjJson with widgetlists "inlined"
    // therefore if widgetlists are removed, what's left is pure ObjJson
    return [serializedAttributes, widgetlistAttributes];
}
function isSerializedWidgetlistValue(value) {
    return Array.isArray(value) && value[0] === 'widgetlist';
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/compute_parent_path.ts
function computeParentPath(path) {
    return !path || path === '/' ? null : path.replace(LAST_PATH_COMPONENT, '');
}
var LAST_PATH_COMPONENT = /\b\/?[^/]*$/;

// EXTERNAL MODULE: external "speakingurl"
var external_speakingurl_ = __webpack_require__(2018);
;// CONCATENATED MODULE: ./scrivito_sdk/models/convert_to_slug.ts

function convertToSlug(input) {
    if (typeof input !== 'string') {
        return '';
    }
    return external_speakingurl_(input);
}

// EXTERNAL MODULE: ./scrivito_sdk/models/current_workspace_id.ts
var current_workspace_id = __webpack_require__(1067);
;// CONCATENATED MODULE: ./scrivito_sdk/models/restrict_to_site.ts
var restrict_to_site_assign = (undefined && undefined.__assign) || function () {
    restrict_to_site_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return restrict_to_site_assign.apply(this, arguments);
};
function restrictToSite(siteId) {
    return {
        isInScope: function (obj) {
            return obj.siteId() === siteId;
        },
        applyToSearch: function (search) {
            return search.and('_siteId', 'equals', siteId);
        },
        applyToCreate: function (attributes) {
            return restrict_to_site_assign(restrict_to_site_assign({}, attributes), { _site_id: siteId });
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj.ts
var basic_obj_assign = (undefined && undefined.__assign) || function () {
    basic_obj_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_obj_assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var basic_obj_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var basic_obj_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




















var BasicObj = /** @class */ (function () {
    function BasicObj(objData) {
        this.objData = objData;
    }
    BasicObj.get = function (id) {
        return getObjFrom(currentObjSpaceWithoutDeleted(), id);
    };
    BasicObj.getIncludingDeleted = function (id) {
        return getObjFrom(objSpaceScope((0,current_workspace_id/* currentObjSpaceId */.GD)()), id);
    };
    // Accessible for test purposes only (otherwise better inlined)
    BasicObj.createInObjSpace = function (objSpaceId, attributes) {
        return createObjIn(objSpaceScope(objSpaceId), attributes);
    };
    BasicObj.generateId = function () {
        return (0,common/* randomId */.kb)();
    };
    BasicObj.all = function () {
        return new BasicObjSearch((0,current_workspace_id/* currentObjSpaceId */.GD)()).batchSize(1000);
    };
    BasicObj.where = function (fields, operator, value, boost) {
        return new BasicObjSearch((0,current_workspace_id/* currentObjSpaceId */.GD)()).and(fields, operator, value, boost);
    };
    BasicObj.getByPermalink = function (permalink) {
        return getObjBy(currentObjSpaceWithoutDeleted(), '_permalink', permalink);
    };
    BasicObj.getAllByPermalink = function (permalink) {
        return getAllObjsByValueFrom(currentObjSpaceWithoutDeleted(), '_permalink', permalink);
    };
    // For test purpose only.
    BasicObj.generateWidgetId = function () {
        return (0,common/* randomHex */.Q4)();
    };
    BasicObj.prototype.id = function () {
        return this.objData.id();
    };
    BasicObj.prototype.objClass = function () {
        return this.getAttributeData('_obj_class');
    };
    BasicObj.prototype.obj = function () {
        return this;
    };
    BasicObj.prototype.createdAt = function () {
        return (0,common/* parseStringToDate */.sp)(this.getAttributeData('_created_at'));
    };
    BasicObj.prototype.createdBy = function () {
        return this.getAttributeData('_created_by') || null;
    };
    BasicObj.prototype.lastChanged = function () {
        var data = this.getAttributeData('_last_changed');
        if (!data)
            return null;
        return (0,common/* parseStringToDate */.sp)(data);
    };
    BasicObj.prototype.lastChangedBy = function () {
        return this.getAttributeData('_last_changed_by') || null;
    };
    BasicObj.prototype.firstPublishedAt = function () {
        return (0,common/* parseStringToDate */.sp)(this.getAttributeData('_first_published_at'));
    };
    BasicObj.prototype.publishedAt = function () {
        return (0,common/* parseStringToDate */.sp)(this.getAttributeData('_published_at'));
    };
    BasicObj.prototype.firstPublishedBy = function () {
        return this.getAttributeData('_first_published_by') || null;
    };
    BasicObj.prototype.publishedBy = function () {
        return this.getAttributeData('_published_by') || null;
    };
    BasicObj.prototype.objSpaceId = function () {
        return this.objData.objSpaceId();
    };
    BasicObj.prototype.version = function () {
        return this.getAttributeData('_version');
    };
    BasicObj.prototype.path = function () {
        return this.getAttributeData('_path') || null;
    };
    BasicObj.prototype.permalink = function () {
        return this.getAttributeData('_permalink') || null;
    };
    BasicObj.prototype.siteId = function () {
        var _a;
        return (_a = this.getAttributeData('_site_id')) !== null && _a !== void 0 ? _a : null;
    };
    BasicObj.prototype.language = function () {
        var _a;
        return (_a = this.getAttributeData('_language')) !== null && _a !== void 0 ? _a : null;
    };
    BasicObj.prototype.parentPath = function () {
        return computeParentPath(this.path());
    };
    BasicObj.prototype.parent = function () {
        var parentPath = this.parentPath();
        var siteId = this.siteId();
        if (parentPath === null || siteId === null)
            return null;
        return getObjByPath(this.objSpaceId(), siteId, parentPath);
    };
    BasicObj.prototype.hasConflicts = function () {
        return !!this.getAttributeData('_conflicts');
    };
    BasicObj.prototype.modification = function () {
        if (this.objData.isUnavailable() ||
            this.getAttributeData('_marked_deleted')) {
            return 'deleted';
        }
        return this.getAttributeData('_modification') || null;
    };
    BasicObj.prototype.get = function (attributeName, typeInfo) {
        return getContentValue(this, attributeName, typeInfo);
    };
    BasicObj.prototype.isModified = function () {
        return !!this.modification();
    };
    BasicObj.prototype.isNew = function () {
        return this.modification() === 'new';
    };
    BasicObj.prototype.isEdited = function () {
        return this.modification() === 'edited';
    };
    BasicObj.prototype.isEditingAsset = function () {
        return this.getAttributeData('_editing_asset') === true;
    };
    BasicObj.prototype.isDeleted = function () {
        return this.modification() === 'deleted';
    };
    BasicObj.prototype.contentLength = function () {
        return this.metadata().contentLength();
    };
    BasicObj.prototype.contentType = function () {
        return this.metadata().contentType();
    };
    BasicObj.prototype.contentUrl = function () {
        var _a;
        return ((_a = this.blob()) === null || _a === void 0 ? void 0 : _a.url()) || '';
    };
    BasicObj.prototype.contentId = function () {
        return this.getAttributeData('_content_id') || this.id();
    };
    BasicObj.prototype.metadata = function () {
        var blob = this.blob();
        return blob
            ? new MetadataCollection(blob.id(), this.objSpaceId())
            : new MetadataCollection();
    };
    BasicObj.prototype.children = function () {
        var search = this.getChildrenSearch();
        return search ? search.dangerouslyUnboundedTake() : [];
    };
    BasicObj.prototype.hasChildren = function () {
        var search = this.getChildrenSearch();
        return search ? search.batchSize(0).count() > 0 : false;
    };
    BasicObj.prototype.orderedChildren = function () {
        var children = this.children();
        var childOrder = this.get('childOrder', 'referencelist');
        if (!Array.isArray(childOrder))
            return children;
        var childOrderIds = childOrder.map(function (child) { return child instanceof BasicObj && child.id(); });
        return (0,external_underscore_.sortBy)(children, function (child) {
            var childIndex = childOrderIds.indexOf(child.id());
            return childIndex === -1 ? childOrder.length : childIndex;
        });
    };
    BasicObj.prototype.backlinks = function () {
        return objSpaceScopeExcludingDeleted(this.objSpaceId())
            .search()
            .and('*', 'linksTo', this)
            .dangerouslyUnboundedTake();
    };
    BasicObj.prototype.ancestors = function () {
        var _this = this;
        var parentPath = this.parentPath();
        var siteId = this.siteId();
        if (parentPath === null || siteId === null)
            return [];
        return computeAncestorPaths(parentPath).map(function (ancestorPath) {
            return getObjByPath(_this.objSpaceId(), siteId, ancestorPath);
        });
    };
    BasicObj.prototype.restriction = function () {
        var restrictionAttribute = this.getAttributeData('_restriction');
        return normalizedRestriction(restrictionAttribute);
    };
    BasicObj.prototype.restrict = function (restriction) {
        if (restriction === void 0) { restriction = '_auth'; }
        this.update({
            _restriction: restriction === '_public' ? null : [[restriction]],
        });
    };
    BasicObj.prototype.unrestrict = function () {
        this.restrict('_public');
    };
    BasicObj.prototype.isRestricted = function () {
        return this.restriction() !== '_public';
    };
    BasicObj.prototype.update = function (attributes) {
        var normalizedAttributes = normalizeAttributes(attributes);
        this.updateWithUnknownValues(normalizedAttributes);
    };
    BasicObj.prototype.updateWithUnknownValues = function (attributes) {
        var _this = this;
        if ((0,current_workspace_id/* isCurrentWorkspacePublished */.f$)() && !(0,scrivito_sdk_data/* isUsingInMemoryTenant */.zQ)()) {
            throw new common/* ScrivitoError */.Ix('The published content cannot be modified.');
        }
        (0,state/* withBatchedUpdates */.tH)(function () {
            persistWidgets(_this, attributes);
            var patch = serialize(attributes);
            _this.objData.update(patch);
        });
        this.startLinkResolution();
    };
    BasicObj.prototype.destroy = function () {
        this.update({ _markedDeleted: [true] });
    };
    BasicObj.prototype.insertWidget = function (widget, anchor) {
        var _a;
        var id = widgetIdFromWidgetInsertionAnchor(anchor);
        var placement = this.widgetPlacementFor(id);
        if (placement) {
            var attributeValue = placement.attributeValue, attributeName = placement.attributeName, container = placement.container, index = placement.index;
            var newIndex = anchor.before ? index : index + 1;
            var newAttributeValue = basic_obj_spreadArray(basic_obj_spreadArray(basic_obj_spreadArray([], attributeValue.slice(0, newIndex), true), [
                widget
            ], false), attributeValue.slice(newIndex), true);
            container.update((_a = {},
                _a[attributeName] = [newAttributeValue, ['widgetlist']],
                _a));
        }
    };
    BasicObj.prototype.removeWidget = function (widget) {
        var field = this.fieldContainingWidget(widget);
        if (field) {
            var value = field.get();
            var newValue = (0,external_underscore_.reject)(value, function (curWidget) { return curWidget.equals(widget); });
            field.update(newValue);
        }
    };
    BasicObj.prototype.siblingWidget = function (widget, indexOffset) {
        var placement = this.widgetPlacementFor(widget.id());
        if (placement) {
            var attributeValue = placement.attributeValue, index = placement.index;
            return attributeValue[index + indexOffset];
        }
    };
    BasicObj.prototype.copyAsync = function (_a) {
        if (_a === void 0) { _a = {}; }
        var _id = _a._id, _path = _a._path, attributes = basic_obj_rest(_a, ["_id", "_path"]);
        return __awaiter(this, void 0, Promise, function () {
            var newObjSpaceId, newObjId, newObj;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newObjSpaceId = (0,current_workspace_id/* currentObjSpaceId */.GD)();
                        newObjId = _id
                            ? normalizeStringSystemValue(_id)
                            : BasicObj.generateId();
                        newObj = createObjIn(objSpaceScope(newObjSpaceId), {
                            _id: newObjId,
                            _objClass: this.objClass(),
                        });
                        return [4 /*yield*/, newObj.finishSaving()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, (0,client/* copyObj */.KP)({
                                fromObjSpaceId: this.objSpaceId(),
                                fromObjId: this.id(),
                                toObjSpaceId: newObjSpaceId,
                                toObjId: newObjId,
                            })];
                    case 2:
                        _b.sent();
                        newObj.update(basic_obj_assign(basic_obj_assign({}, attributes), { _path: _path === undefined && this.path()
                                ? this.parentPath() + "/" + newObjId
                                : _path || null }));
                        return [4 /*yield*/, newObj.objData.finishSaving()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, newObj];
                }
            });
        });
    };
    BasicObj.prototype.markResolvedAsync = function () {
        this.update({ _conflicts: [null] });
        return this.finishSaving();
    };
    BasicObj.prototype.finishSaving = function () {
        var _this = this;
        return this.finishLinkResolution().then(function () { return _this.objData.finishSaving(); });
    };
    BasicObj.prototype.equals = function (other) {
        return (other instanceof BasicObj &&
            this.id() === other.id() &&
            (0,common/* equals */.fS)(this.objSpaceId(), other.objSpaceId()));
    };
    BasicObj.prototype.widget = function (id) {
        if (!this.getWidgetAttribute(id, '_obj_class'))
            return null;
        return basic_widget_BasicWidget.build(id, this);
    };
    BasicObj.prototype.getWidgetAttribute = function (id, attributeName) {
        return this.objData.getWidgetAttribute(id, attributeName);
    };
    BasicObj.prototype.widgets = function () {
        var data = this.objData.getIfExistent();
        if (!data)
            return [];
        var widgetPool = data._widget_pool;
        if (!widgetPool)
            return [];
        var widgets = [];
        var visitedWidgetIds = {};
        this.collectWidgets(widgets, data, widgetPool, visitedWidgetIds);
        return widgets;
    };
    BasicObj.prototype.widgetClassNamesWithBadPerformance = function () {
        var widgetPool = this.objData.getWidgetPoolWithBadPerformance();
        if (!widgetPool)
            return [];
        return (0,external_underscore_.uniq)((0,external_underscore_.compact)((0,external_underscore_.values)(widgetPool)).map(function (widgetJson) { return widgetJson._obj_class; }));
    };
    BasicObj.prototype.fieldContainingWidget = function (widget) {
        var widgetId = widget.id();
        var placement = this.widgetPlacementFor(widgetId);
        if (placement) {
            var container = placement.container, attributeName = placement.attributeName;
            return new BasicField(container, attributeName, ['widgetlist']);
        }
    };
    BasicObj.prototype.generateWidgetId = function () {
        for (var i = 0; i < 10; i++) {
            var id = BasicObj.generateWidgetId();
            if (!this.widget(id))
                return id;
        }
        // Could not generate a new unused widget id.
        // (winning the lottery 5 times in a row is more likely)
        throw new common/* InternalError */.AQ();
    };
    BasicObj.prototype.serializeAttributes = function () {
        var _a = serializeAttributes(this), _conflicts = _a._conflicts, _modification = _a._modification, _created_at = _a._created_at, _created_by = _a._created_by, _last_changed = _a._last_changed, _last_changed_by = _a._last_changed_by, serializedAttributes = basic_obj_rest(_a, ["_conflicts", "_modification", "_created_at", "_created_by", "_last_changed", "_last_changed_by"]);
        return serializedAttributes;
    };
    BasicObj.prototype.slug = function () {
        var title = this.get('title', 'string');
        return convertToSlug(title);
    };
    BasicObj.prototype.getWidgetData = function (id) {
        return this.objData.getWidget(id);
    };
    BasicObj.prototype.startLinkResolution = function () {
        if (!(0,scrivito_sdk_data/* isUsingInMemoryTenant */.zQ)()) {
            (0,link_resolution/* startLinkResolutionFor */.J2)((0,current_workspace_id/* currentWorkspaceId */.tV)(), this.id());
        }
    };
    BasicObj.prototype.finishLinkResolution = function () {
        return (0,link_resolution/* finishLinkResolutionFor */.gu)((0,current_workspace_id/* currentWorkspaceId */.tV)(), this.id());
    };
    BasicObj.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\"]";
    };
    BasicObj.prototype.getAttributeData = function (attributeName, type) {
        return type === 'widgetlist'
            ? this.objData.getWidgetlistAttribute(attributeName)
            : this.objData.getNonWidgetAttribute(attributeName);
    };
    BasicObj.prototype.getData = function () {
        return this.objData.get();
    };
    BasicObj.prototype.blob = function () {
        return this.get('blob', ['binary']);
    };
    BasicObj.prototype.collectWidgets = function (memo, objOrWidgetData, widgetPool, visitedWidgetIds) {
        var _this = this;
        Object.keys(objOrWidgetData)
            .map(function (attributeName) {
            var attrDictValue = objOrWidgetData[attributeName];
            if (!attrDictValue)
                return;
            if ((0,common/* isSystemAttribute */.mb)(attributeName))
                return;
            // Typescript cannot know that once blank and system attribute entries
            // are excluded, what's left must be a custom attribute entry, and the
            // cast is therefore safe.
            var attributeJson = attrDictValue;
            if ((0,client/* isWidgetlistAttributeJson */.O6)(attributeJson))
                return attributeJson[1];
        })
            .forEach(function (widgetIds) {
            if (widgetIds) {
                widgetIds.forEach(function (widgetId) {
                    if (visitedWidgetIds[widgetId])
                        return;
                    visitedWidgetIds[widgetId] = true;
                    var widget = _this.widget(widgetId);
                    if (!widget)
                        return;
                    memo.push(widget);
                    var widgetData = widgetPool[widgetId];
                    _this.collectWidgets(memo, widgetData, widgetPool, visitedWidgetIds);
                });
            }
        });
    };
    BasicObj.prototype.widgetPlacementFor = function (widgetId) {
        var data = this.objData.getIfExistent();
        if (!data)
            return;
        var placement = (0,scrivito_sdk_data/* findWidgetPlacement */.uw)(data, widgetId);
        if (!placement)
            return;
        var attributeName = (0,common/* camelCase */.eV)(placement.attributeName);
        var parentWidgetId = placement.parentWidgetId;
        var container;
        if (parentWidgetId) {
            container = this.widget(parentWidgetId);
            if (!container)
                return;
        }
        else {
            container = this;
        }
        return {
            container: container,
            attributeName: attributeName,
            attributeValue: container.get(attributeName, ['widgetlist']),
            index: placement.index,
            parentWidgetId: parentWidgetId,
        };
    };
    BasicObj.prototype.getChildrenSearch = function () {
        var path = this.path();
        var siteId = this.siteId();
        if (!path || siteId === null)
            return;
        return hierarchyObjSpace(this.objSpaceId(), siteId)
            .search()
            .and('_parentPath', 'equals', path);
    };
    return BasicObj;
}());

function computeAncestorPaths(path) {
    var ancestorPaths = ['/'];
    if (path === '/')
        return ancestorPaths;
    var components = path.split('/').slice(1);
    var ancestorPath = '';
    components.forEach(function (component) {
        ancestorPath = ancestorPath + "/" + component;
        ancestorPaths.push(ancestorPath);
    });
    return ancestorPaths;
}
function widgetIdFromWidgetInsertionAnchor(anchor) {
    if (isWidgetInsertionBefore(anchor))
        return anchor.before.id();
    return anchor.after.id();
}
function isWidgetInsertionBefore(anchor) {
    return !!anchor.before;
}
function currentObjSpaceWithoutDeleted() {
    return objSpaceScopeExcludingDeleted((0,current_workspace_id/* currentObjSpaceId */.GD)());
}
function getObjByPath(objSpaceId, siteId, path) {
    return getObjBy(hierarchyObjSpace(objSpaceId, siteId), '_path', path);
}
function hierarchyObjSpace(objSpaceId, siteId) {
    return objSpaceScopeExcludingDeleted(objSpaceId).and(restrictToSite(siteId));
}
function normalizeStringSystemValue(value) {
    return typeof value === 'string' ? value : value[0];
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_link.ts
var basic_link_assign = (undefined && undefined.__assign) || function () {
    basic_link_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_link_assign.apply(this, arguments);
};






var BasicLink = /** @class */ (function () {
    function BasicLink(attributes) {
        this.attributes = basic_link_assign({}, attributes);
    }
    BasicLink.prototype.title = function () {
        return this.attributes.title || null;
    };
    BasicLink.prototype.query = function () {
        return this.attributes.query || null;
    };
    BasicLink.prototype.hash = function () {
        return this.attributes.hash || null;
    };
    BasicLink.prototype.rel = function () {
        return this.attributes.rel || null;
    };
    BasicLink.prototype.target = function () {
        return this.attributes.target || null;
    };
    BasicLink.prototype.url = function () {
        return this.attributes.url || null;
    };
    BasicLink.prototype.objId = function () {
        return this.attributes.objId || null;
    };
    BasicLink.prototype.obj = function () {
        var objId = this.objId();
        if (!objId)
            return null;
        var scope = objSpaceScopeExcludingDeleted((0,current_workspace_id/* currentObjSpaceId */.GD)());
        return getObjIncludingUnavailableFrom(scope, objId);
    };
    BasicLink.prototype.queryParameters = function () {
        return external_urijs_.parseQuery(this.query() || '');
    };
    BasicLink.prototype.isExternal = function () {
        return !!this.url();
    };
    BasicLink.prototype.isInternal = function () {
        return !this.isExternal();
    };
    BasicLink.prototype.equals = function (otherLink) {
        if (!(otherLink instanceof BasicLink)) {
            return false;
        }
        if (this.isExternal()) {
            return (this.hash() === otherLink.hash() &&
                this.query() === otherLink.query() &&
                this.rel() === otherLink.rel() &&
                this.target() === otherLink.target() &&
                this.title() === otherLink.title() &&
                this.url() === otherLink.url());
        }
        return (this.objId() === otherLink.objId() && this.title() === otherLink.title());
    };
    BasicLink.prototype.copy = function (attributes) {
        if (attributes === void 0) { attributes = {}; }
        var newAttributes = basic_link_assign(basic_link_assign({}, this.attributes), attributes);
        if (attributes.objId && attributes.url) {
            throw new common/* ArgumentError */.ir('Link#copy refused: both "objId" and "url" have been' +
                ' specified with truthy values');
        }
        if (attributes.objId) {
            newAttributes.url = null;
        }
        else if (attributes.url) {
            newAttributes.objId = null;
        }
        return new BasicLink(newAttributes);
    };
    BasicLink.prototype.isEmpty = function () {
        return !this.isExternal() && !this.objId();
    };
    /** Destination is to be read with a public API perspective in mind:
     * returns false for an internal link pointing to a forbidden obj
     */
    BasicLink.prototype.hasDestination = function () {
        return this.isExternal() || this.obj() instanceof BasicObj;
    };
    BasicLink.prototype.toPrettyPrint = function () {
        if (this.isInternal()) {
            return "[object Link objId=\"" + this.objId() + "\"]";
        }
        return "[object Link url=\"" + this.url() + "\"]";
    };
    return BasicLink;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_serializer.ts







function serialize(attributes) {
    var serializedAttributes = {};
    Object.keys(attributes).forEach(function (name) {
        var serializedName = convertCamelCasedAttributeName(name);
        if ((0,common/* isSystemAttribute */.mb)(serializedName)) {
            var value = attributes[name][0];
            serializedAttributes[serializedName] = value;
        }
        else {
            var _a = attributes[name], value = _a[0], typeInfo = _a[1];
            serializedAttributes[serializedName] = serializeAttributeEntry(value, name, typeInfo);
        }
    });
    return serializedAttributes;
}
function serializeAttributeEntry(value, name, typeInfo) {
    if (value === null)
        return null;
    var serializedEntry = serializeEntry(value, name, typeInfo);
    if (isEmptyValue(serializedEntry[1]))
        return null;
    return serializedEntry;
}
function serializeEntry(value, name, typeInfo) {
    switch (typeInfo[0]) {
        case 'binary':
            return ['binary', serializeBinaryAttributeValue(value, name)];
        case 'boolean':
            return ['boolean', serializeBooleanAttributeValue(value, name)];
        case 'date':
            return ['date', serializeDateAttributeValue(value, name)];
        case 'datetime':
            return ['date', serializeDateAttributeValue(value, name)];
        case 'enum':
            return ['string', serializeEnumAttributeValue(value, name, typeInfo[1])];
        case 'float':
            return ['number', serializeFloatAttributeValue(value, name)];
        case 'html':
            return ['html', serializeHtmlAttributeValue(value, name)];
        case 'integer':
            return ['number', serializeIntegerAttributeValue(value, name)];
        case 'link':
            return ['link', serializeLinkAttributeValue(value, name)];
        case 'linklist':
            return ['linklist', serializeLinklistAttributeValue(value, name)];
        case 'multienum':
            return [
                'stringlist',
                serializeMultienumAttributeValue(value, name, typeInfo[1]),
            ];
        case 'reference':
            return ['reference', serializeReferenceAttributeValue(value, name)];
        case 'referencelist':
            return [
                'referencelist',
                serializeReferencelistAttributeValue(value, name),
            ];
        case 'string':
            return ['string', serializeStringAttributeValue(value, name)];
        case 'stringlist':
            return ['stringlist', serializeStringlistAttributeValue(value, name)];
        case 'widgetlist':
            return ['widgetlist', serializeWidgetlistAttributeValue(value, name)];
        default:
            throw new common/* ArgumentError */.ir("Attribute \"" + name + "\" is of unsupported type \"" + typeInfo[0] + "\".");
    }
}
function isEmptyValue(value) {
    return ((0,external_underscore_.isString)(value) || Array.isArray(value)) && (0,external_underscore_.isEmpty)(value);
}
function throwInvalidAttributeValue(value, name, expected) {
    throw new common/* ArgumentError */.ir("Unexpected value " + (0,common/* prettyPrint */.xr)(value) + " for" +
        (" attribute \"" + name + "\". Expected: " + expected));
}
function serializeBinaryAttributeValue(value, name) {
    if (value instanceof Binary)
        return { id: value.id() };
    throwInvalidAttributeValue(value, name, 'A Binary.');
}
function serializeBooleanAttributeValue(value, name) {
    if (value === false || value === true)
        return value;
    throwInvalidAttributeValue(value, name, 'A Boolean.');
}
function serializeDateAttributeValue(value, name) {
    if ((0,external_underscore_.isDate)(value))
        return (0,common/* formatDateToString */.xH)(value);
    if ((0,common/* isValidDateString */.ix)(value))
        return value;
    throwInvalidAttributeValue(value, name, 'A Date.');
}
function serializeEnumAttributeValue(value, name, _a) {
    var values = _a.values;
    if ((0,external_underscore_.contains)(values, value))
        return value;
    var e = "Valid attribute values are contained in its \"values\" array [" + values + "].";
    throwInvalidAttributeValue(value, name, e);
}
function serializeFloatAttributeValue(value, name) {
    if ((0,common/* isValidFloat */.RY)(value))
        return value;
    var invalidValue = value;
    if ((0,external_underscore_.isNumber)(value)) {
        invalidValue = String(value);
    }
    throwInvalidAttributeValue(invalidValue, name, 'A Number, that is #isFinite().');
}
function serializeHtmlAttributeValue(value, name) {
    if ((0,external_underscore_.isString)(value))
        return value;
    throwInvalidAttributeValue(value, name, 'A String.');
}
function serializeIntegerAttributeValue(value, name) {
    if ((0,common/* isValidInteger */.eZ)(value))
        return value;
    throwInvalidAttributeValue(value, name, 'A Number, that is #isSafeInteger().');
}
function serializeLinkAttributeValue(value, name) {
    if (isValidLinkInputValue(value))
        return convertLinkToCmsApi(value);
    throwInvalidAttributeValue(value, name, 'A Link instance with a destination.');
}
function serializeLinklistAttributeValue(value, name) {
    if (Array.isArray(value) && value.every(isValidLinkInputValue)) {
        return value.map(convertLinkToCmsApi);
    }
    throwInvalidAttributeValue(value, name, 'An array of Link instances with destinations set.');
}
function serializeMultienumAttributeValue(value, name, _a) {
    var values = _a.values;
    if (!isStringArray(value)) {
        throwInvalidAttributeValue(value, name, "An array with values from " + (0,common/* prettyPrint */.xr)(values) + ".");
    }
    var forbiddenValues = (0,external_underscore_.difference)(value, values);
    if (forbiddenValues.length) {
        throwInvalidAttributeValue(value, name, "An array with values from " + (0,common/* prettyPrint */.xr)(values) + ". Forbidden values: " + (0,common/* prettyPrint */.xr)(forbiddenValues) + ".");
    }
    return value;
}
function serializeReferenceAttributeValue(value, name) {
    if (isValidReference(value))
        return serializeSingleReferenceValue(value);
    throwInvalidAttributeValue(value, name, 'An Obj.');
}
function serializeReferencelistAttributeValue(value, name) {
    if (isValidReferencelistValue(value)) {
        return value.map(serializeSingleReferenceValue);
    }
    throwInvalidAttributeValue(value, name, 'An array with Objs.');
}
function serializeSingleReferenceValue(value) {
    return typeof value === 'string' ? value : value.id();
}
function isValidReference(value) {
    return ((0,external_underscore_.isString)(value) ||
        value instanceof BasicObj ||
        value instanceof ObjUnavailable);
}
function isValidReferencelistValue(value) {
    return Array.isArray(value) && value.every(function (v) { return isValidReference(v); });
}
function serializeStringAttributeValue(value, name) {
    if (isValidString(value))
        return value.toString();
    throwInvalidAttributeValue(value, name, 'A String.');
}
function serializeStringlistAttributeValue(value, name) {
    if (isStringOrNumberArray(value)) {
        return value.map(function (v) { return v.toString(); });
    }
    throwInvalidAttributeValue(value, name, 'An array of strings.');
}
function isValidString(value) {
    return (0,external_underscore_.isString)(value) || (0,external_underscore_.isNumber)(value);
}
function serializeWidgetlistAttributeValue(value, name) {
    if (value instanceof basic_widget_BasicWidget) {
        return serializeWidgetlistAttributeValue([value], name);
    }
    if (Array.isArray(value) && value.every(function (v) { return v instanceof basic_widget_BasicWidget; })) {
        return value.map(function (v) { return v.id(); });
    }
    throwInvalidAttributeValue(value, name, 'An array of BasicWidget instances.');
}
function isStringArray(value) {
    return Array.isArray(value) && value.every(external_underscore_.isString);
}
function isStringOrNumberArray(value) {
    return Array.isArray(value) && value.every(function (v) { return isValidString(v); });
}
function isValidLinkInputValue(value) {
    // check if value is backend compatible
    if (value instanceof BasicLink)
        return !value.isEmpty();
    if (!(0,external_underscore_.isObject)(value))
        return false;
    if ((0,external_underscore_.isEmpty)((0,external_underscore_.compact)((0,external_underscore_.values)(value))))
        return false;
    var invalidKeys = (0,external_underscore_.without)(Object.keys(value), 'hash', 'obj_id', 'query', 'rel', 'target', 'title', 'url');
    return (0,external_underscore_.isEmpty)(invalidKeys);
}
function convertCamelCasedAttributeName(name) {
    if (!(0,common/* isCamelCase */.q2)(name)) {
        throw new common/* ArgumentError */.ir('Attribute names have to be in camel case.');
    }
    return (0,common/* underscore */.It)(name);
}
function convertLinkToCmsApi(value) {
    var cmsApiValue = value instanceof BasicLink
        ? convertBasicLinkToCmsApi(value)
        : convertLinkObjectToCmsApi(value);
    if (!cmsApiValue.rel) {
        delete cmsApiValue.rel;
    }
    return cmsApiValue;
}
function convertBasicLinkToCmsApi(basicLink) {
    return {
        rel: basicLink.rel() || undefined,
        query: basicLink.query(),
        target: basicLink.target(),
        title: basicLink.title(),
        url: basicLink.url(),
        // lowercased property method
        obj_id: basicLink.objId(),
        // different property method
        fragment: basicLink.hash(),
    };
}
function convertLinkObjectToCmsApi(value) {
    return {
        obj_id: value.obj_id || null,
        query: value.query || null,
        rel: value.rel || undefined,
        target: value.target || null,
        title: value.title || null,
        url: value.url || null,
        // different property key
        fragment: value.hash || null,
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_widget.ts
var basic_widget_assign = (undefined && undefined.__assign) || function () {
    basic_widget_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_widget_assign.apply(this, arguments);
};






var basic_widget_BasicWidget = /** @class */ (function () {
    function BasicWidget(_id, _obj, attributesToBeSaved, preserializedAttributes) {
        this._id = _id;
        this._obj = _obj;
        this.preserializedAttributes = preserializedAttributes;
        if (!_obj) {
            if (attributesToBeSaved && isAttributesToBeSaved(attributesToBeSaved)) {
                this.attributesToBeSaved = attributesToBeSaved;
            }
            else {
                throw new common/* ArgumentError */.ir('Please provide a widget class as the "_objClass" property.');
            }
        }
    }
    BasicWidget.build = function (id, obj) {
        return new BasicWidget(id, obj);
    };
    BasicWidget.newWithSerializedAttributes = function (attributes) {
        var unserializedAttributes = {};
        var serializedAttributes = {};
        Object.keys(attributes).forEach(function (name) {
            var value = attributes[name];
            if (name === '_obj_class') {
                unserializedAttributes._objClass = [value];
                return;
            }
            if (Array.isArray(value)) {
                var type = value[0], v = value[1];
                if (type === 'widgetlist') {
                    var widgetData = v;
                    var newWidgets = widgetData.map(function (serializedWidget) {
                        return BasicWidget.newWithSerializedAttributes(serializedWidget);
                    });
                    var attrName = (0,common/* camelCase */.eV)(name);
                    unserializedAttributes[attrName] = [newWidgets, ['widgetlist']];
                    return;
                }
            }
            serializedAttributes[name] = value;
        });
        return new BasicWidget(undefined, undefined, unserializedAttributes, serializedAttributes);
    };
    BasicWidget.create = function (attributes) {
        return new BasicWidget(undefined, undefined, normalizeAttributes(attributes));
    };
    BasicWidget.createWithUnknownValues = function (attributes) {
        return new BasicWidget(undefined, undefined, attributes);
    };
    BasicWidget.prototype.id = function () {
        this.failIfNotPersisted();
        return this._id;
    };
    BasicWidget.prototype.objClass = function () {
        if (this.isPersisted()) {
            return this.getAttributeData('_obj_class');
        }
        var objClass = this.attributesToBeSaved._objClass[0];
        return objClass;
    };
    BasicWidget.prototype.obj = function () {
        this.failIfNotPersisted();
        return this._obj;
    };
    BasicWidget.prototype.objSpaceId = function () {
        return this.obj().objSpaceId();
    };
    BasicWidget.prototype.widget = function (id) {
        return this.obj().widget(id);
    };
    BasicWidget.prototype.modification = function (_a) {
        var from = _a[0], to = _a[1];
        return (0,scrivito_sdk_data/* getWidgetModification */.mG)(from, to, this.obj().id(), this.id());
    };
    BasicWidget.prototype.get = function (attributeName, typeInfo) {
        return getContentValue(this, attributeName, typeInfo);
    };
    BasicWidget.prototype.container = function () {
        (0,scrivito_sdk_data/* failIfPerformanceConstraint */.Id)('for performance reasons, avoid this method when rendering');
        return this.containingField().getContainer();
    };
    BasicWidget.prototype.update = function (attributes) {
        var normalizedAttributes = normalizeAttributes(attributes);
        this.updateWithUnknownValues(normalizedAttributes);
    };
    BasicWidget.prototype.updateWithUnknownValues = function (attributes) {
        var _this = this;
        (0,state/* withBatchedUpdates */.tH)(function () {
            persistWidgets(_this.obj(), attributes);
            var patch = serialize(attributes);
            _this.updateSelf(patch);
        });
    };
    BasicWidget.prototype.insertBefore = function (widget) {
        widget.obj().insertWidget(this, { before: widget });
    };
    BasicWidget.prototype.insertAfter = function (widget) {
        widget.obj().insertWidget(this, { after: widget });
    };
    BasicWidget.prototype.remove = function () {
        this.obj().removeWidget(this);
    };
    BasicWidget.prototype.copy = function () {
        if (this.isPersisted()) {
            return this.copyPersisted();
        }
        return this.copyUnpersisted();
    };
    BasicWidget.prototype.persistInObjIfNecessary = function (obj) {
        if (this.isPersisted())
            return;
        var normalizedAttributes = this.attributesToBeSaved;
        persistWidgets(obj, normalizedAttributes);
        var patch = basic_widget_assign(basic_widget_assign({}, serialize(normalizedAttributes)), this.preserializedAttributes);
        this._obj = obj;
        this._id = obj.generateWidgetId();
        this.updateSelf(patch);
        this.executeDidPersistCallback();
    };
    BasicWidget.prototype.isPersisted = function () {
        return !!this._obj;
    };
    BasicWidget.prototype.onDidPersist = function (callback) {
        if (this.isPersisted()) {
            throw new common/* ScrivitoError */.Ix('Cannot call "onDidPersist" of an already persisted widget');
        }
        this.onDidPersistCallback = callback;
    };
    // For test purpose only.
    BasicWidget.prototype.hasOnDidPersistCallback = function () {
        return !!this.onDidPersistCallback;
    };
    BasicWidget.prototype.finishSaving = function () {
        return this.obj().finishSaving();
    };
    BasicWidget.prototype.equals = function (other) {
        return (other instanceof BasicWidget &&
            this.id() === other.id() &&
            this.obj().equals(other.obj()));
    };
    BasicWidget.prototype.containingField = function () {
        return this.obj().fieldContainingWidget(this);
    };
    BasicWidget.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\" objId=\"" + this.obj().id() + "\"]";
    };
    BasicWidget.prototype.getAttributeData = function (attributeName) {
        return this.obj().getWidgetAttribute(this.id(), attributeName);
    };
    BasicWidget.prototype.getData = function () {
        return this.obj().getWidgetData(this.id());
    };
    BasicWidget.prototype.failIfNotPersisted = function () {
        if (!this.isPersisted()) {
            throw new common/* ScrivitoError */.Ix('Can not access a new widget before it has been saved.');
        }
    };
    BasicWidget.prototype.updateSelf = function (patch) {
        var _a;
        var widgetPoolPatch = { _widgetPool: [(_a = {}, _a[this.id()] = patch, _a)] };
        this.obj().update(widgetPoolPatch);
    };
    BasicWidget.prototype.executeDidPersistCallback = function () {
        if (this.onDidPersistCallback) {
            this.onDidPersistCallback(this);
            delete this.onDidPersistCallback;
        }
    };
    BasicWidget.prototype.copyPersisted = function () {
        var serializedAttributes = serializeAttributes(this);
        return BasicWidget.newWithSerializedAttributes(serializedAttributes);
    };
    BasicWidget.prototype.copyUnpersisted = function () {
        var copy = new BasicWidget(undefined, undefined, (0,external_underscore_.mapObject)(this.attributesToBeSaved, copyNormalizedValue));
        if (this.onDidPersistCallback) {
            copy.onDidPersist(this.onDidPersistCallback);
        }
        return copy;
    };
    return BasicWidget;
}());

function copyNormalizedValue(valueAndType) {
    if (isWidgetlistAttributeValueAndType(valueAndType)) {
        var value = valueAndType[0], typeInfo = valueAndType[1];
        var widgets = Array.isArray(value) ? value : [value];
        return [widgets.map(function (widget) { return widget.copy(); }), typeInfo];
    }
    // typescript doesn't preserve "tuple-ness" for a copied tuple
    return valueAndType.slice(0);
}
function isAttributesToBeSaved(attributes) {
    var value = attributes._objClass;
    if (!value)
        return false;
    var objClass = value[0];
    return typeof objClass === 'string';
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/basic_attribute_content.ts





function getContentValue(content, attributeName, typeInfo) {
    if (typeof typeInfo === 'string') {
        var normalizedTypeInfo = [typeInfo];
        return getContentValue(content, attributeName, normalizedTypeInfo);
    }
    return getContentValueUsingInternalName(content, (0,common/* underscore */.It)(attributeName), typeInfo);
}
function getContentValueUsingInternalName(content, internalAttributeName, typeInfo) {
    var rawValue = content.getAttributeData(internalAttributeName, typeInfo[0]);
    return deserialize(content, rawValue, typeInfo);
}
function serializeAttributes(content) {
    return (0,external_underscore_.mapObject)(content.getData(), function (value, name) {
        if (value && !(0,common/* isSystemAttribute */.mb)(name) && (0,client/* isWidgetlistAttributeJson */.O6)(value)) {
            var widgets = getContentValueUsingInternalName(content, name, [
                'widgetlist',
            ]);
            return ['widgetlist', widgets.map(serializeAttributes)];
        }
        return value;
    });
}
function persistWidgets(obj, attributes) {
    Object.keys(attributes).forEach(function (key) {
        var valueAndType = attributes[key];
        if (isWidgetlistAttributeValueAndType(valueAndType)) {
            var value = valueAndType[0];
            var widgets = Array.isArray(value) ? value : [value];
            widgets.forEach(function (widget) {
                widget.persistInObjIfNecessary(obj);
            });
        }
    });
}
function isWidgetlistAttributeValueAndType(valueAndType) {
    if (valueAndType.length < 2)
        return false;
    var value = valueAndType[0], typeInfo = valueAndType[1];
    var type = typeInfo[0];
    if (type !== 'widgetlist')
        return false;
    if (value instanceof basic_widget_BasicWidget)
        return true;
    if (!Array.isArray(value))
        return false;
    return value.every(function (entry) { return entry instanceof basic_widget_BasicWidget; });
}
function normalizeAttributes(attributes) {
    return (0,external_underscore_.mapObject)(attributes, function (attributeValue, name) {
        // Note: System attribute value normalization for public API input is
        // already performed by unwrapAppAttributes. Therefore this code exists
        // only for internal callers. Which could eventually be changed to
        // specify their values that they don't need to be normalized and
        // therefore avoid this code altogether.
        if ((0,common/* isSystemAttribute */.mb)(name)) {
            if (Array.isArray(attributeValue))
                return attributeValue;
            return [attributeValue];
        }
        if (!Array.isArray(attributeValue)) {
            // Value should be a tuple: [value, typeInfo]
            throw new common/* InternalError */.AQ();
        }
        var value = attributeValue[0], typeInfo = attributeValue[1];
        if (typeof typeInfo === 'string') {
            // Note: This is not a support of an easy public value specification.
            // Instead, only some internal calls can go this way. With the help
            // of typescript and an "Implementation error" thrown here, we might
            // get rid of this special case completely. But since the gain is
            // little, there is some risk that some caller is missed, there are
            // a lot of callers, and it would extend the current PR too much, this
            // is not simplified right now. Stay tuned.
            return [value, [typeInfo]];
        }
        return [value, typeInfo];
    });
}
/** Get the restriction from a _restriction attribute value. */
function normalizedRestriction(restrictionAttribute) {
    return restrictionAttribute ? restrictionAttribute[0] : '_public';
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/all_sites_and_global.ts
var all_sites_and_global_assign = (undefined && undefined.__assign) || function () {
    all_sites_and_global_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return all_sites_and_global_assign.apply(this, arguments);
};
var allSitesAndGlobal = {
    isInScope: function () { return true; },
    applyToSearch: function (search) { return search; },
    applyToCreate: function (attributes) { return (all_sites_and_global_assign({ _site_id: null }, attributes)); },
};

;// CONCATENATED MODULE: ./scrivito_sdk/models/empty_scope.ts

function emptyScope() {
    return objSpaceScope(['empty']);
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/exclude_global.ts

var excludeGlobal = {
    isInScope: function (obj) {
        return obj.siteId() !== null;
    },
    applyToSearch: function (search) {
        return search.andNot('_siteId', 'equals', null);
    },
    applyToCreate: function () {
        // Unsupported create
        throw new common/* InternalError */.AQ();
    },
};

;// CONCATENATED MODULE: ./scrivito_sdk/models/restrict_to_global.ts
var restrict_to_global_assign = (undefined && undefined.__assign) || function () {
    restrict_to_global_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return restrict_to_global_assign.apply(this, arguments);
};
var restrictToGlobal = {
    isInScope: function (obj) {
        return obj.siteId() === null;
    },
    applyToSearch: function (search) {
        return search.and('_siteId', 'equals', null);
    },
    applyToCreate: function (attributes) {
        return restrict_to_global_assign(restrict_to_global_assign({}, attributes), { _site_id: null });
    },
};

;// CONCATENATED MODULE: ./scrivito_sdk/models/restrict_to_site_and_global.ts
var restrict_to_site_and_global_assign = (undefined && undefined.__assign) || function () {
    restrict_to_site_and_global_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return restrict_to_site_and_global_assign.apply(this, arguments);
};
function restrictToSiteAndGlobal(siteId) {
    return {
        isInScope: function (obj) {
            var objSiteId = obj.siteId();
            return objSiteId === siteId || objSiteId === null;
        },
        applyToSearch: function (search) {
            return search.and('_siteId', 'equals', [siteId, null]);
        },
        applyToCreate: function (attributes) {
            return restrict_to_site_and_global_assign(restrict_to_site_and_global_assign({}, attributes), { _site_id: siteId });
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/update_references.ts
var update_references_assign = (undefined && undefined.__assign) || function () {
    update_references_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return update_references_assign.apply(this, arguments);
};
var update_references_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var update_references_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function updateReferences(obj, unsafeMapping) {
    return updateReferencesWithSafeMapping(obj, function (currentId) {
        var newId;
        try {
            newId = (0,loadable/* loadableWithDefault */.qu)(undefined, function () { return unsafeMapping(currentId); });
        }
        catch (error) {
            (0,common/* throwNextTick */.a6)(error);
        }
        if (newId !== undefined) {
            if (typeof newId !== 'string') {
                (0,common/* throwNextTick */.a6)(new common/* ScrivitoError */.Ix("Unexpected result from mapping function passed to updateReferences (must be string or undefined): " + newId));
            }
            else if (!newId.match(/^[a-f0-9]{16}$/)) {
                (0,common/* throwNextTick */.a6)(new common/* ScrivitoError */.Ix("Unexpected result from mapping function passed to updateReferences (not a valid obj id): " + newId));
            }
            else {
                return newId;
            }
        }
        return currentId;
    });
}
function updateReferencesWithSafeMapping(obj, mapping) {
    return update_references_awaiter(this, void 0, void 0, function () {
        var objJson, workers;
        return update_references_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,loadable/* load */.zD)(function () { return obj.getData(); })];
                case 1:
                    objJson = _a.sent();
                    if (!objJson)
                        return [2 /*return*/];
                    workers = getWorkers(objJson, obj, mapping);
                    if (!workers.length)
                        return [2 /*return*/];
                    return [4 /*yield*/, common/* ScrivitoPromise.all */.s8.all(workers)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getWorkers(objJson, obj, fn) {
    var workers = [];
    (0,client/* withEachAttributeJson */.dx)(objJson, function (jsonToUpdate, attributeName, widgetId) {
        var convert = getConversion(jsonToUpdate);
        if (!convert)
            return;
        var worker = (0,loadable/* load */.zD)(function () { return convert(jsonToUpdate, fn); }).then(function (newJson) {
            var _a, _b;
            var currentJson = widgetId
                ? obj.getWidgetAttribute(widgetId, attributeName)
                : obj.getAttributeData(attributeName);
            if (!(0,common/* equals */.fS)(currentJson, jsonToUpdate))
                return;
            var patch = (_a = {}, _a[attributeName] = newJson, _a);
            if (widgetId) {
                obj.objData.update({
                    _widget_pool: (_b = {},
                        _b[widgetId] = patch,
                        _b),
                });
            }
            else {
                obj.objData.update(patch);
            }
        });
        workers.push(worker);
    });
    return workers;
}
function getConversion(json) {
    return CONVERSIONS[json[0]];
}
var CONVERSIONS = {
    html: convertHtml,
    link: convertLink,
    linklist: convertLinklist,
    reference: update_references_convertReference,
    referencelist: convertReferencelist,
};
function convertHtml(attributeJson, mapping) {
    return [
        'html',
        attributeJson[1].replace(link_resolution/* OBJ_ID_PATTERN */.RY, function (internalLinkUrl) { return "objid:" + mapping(internalLinkUrl.slice(6, 22)); }),
    ];
}
function convertLink(attributeJson, mapping) {
    var linkJson = attributeJson[1];
    var obj_id = linkJson.obj_id;
    if (!obj_id)
        return attributeJson;
    return ['link', update_references_assign(update_references_assign({}, linkJson), { obj_id: mapping(obj_id) })];
}
function convertLinklist(attributeJson, mapping) {
    return [
        'linklist',
        attributeJson[1].map(function (linkJson) {
            var obj_id = linkJson.obj_id;
            if (!obj_id)
                return linkJson;
            return update_references_assign(update_references_assign({}, linkJson), { obj_id: mapping(obj_id) });
        }),
    ];
}
function update_references_convertReference(attributeJson, mapping) {
    return ['reference', mapping(attributeJson[1])];
}
function convertReferencelist(attributeJson, mapping) {
    return ['referencelist', attributeJson[1].map(mapping)];
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/restrict_to_obj_class.ts
var restrict_to_obj_class_assign = (undefined && undefined.__assign) || function () {
    restrict_to_obj_class_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return restrict_to_obj_class_assign.apply(this, arguments);
};
function restrictToObjClass(objClassName) {
    return {
        isInScope: function (obj) {
            return obj.objClass() === objClassName;
        },
        applyToSearch: function (search) {
            return search.and('_objClass', 'equals', objClassName);
        },
        applyToCreate: function (attributes) {
            return restrict_to_obj_class_assign(restrict_to_obj_class_assign({}, attributes), { _obj_class: objClassName });
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/get_placement_modification_infos.ts


function getPlacementModificationInfos(field, comparisonRange) {
    var widgets = field.get();
    var diff = field.getDiff(comparisonRange);
    if (!(0,scrivito_sdk_data/* isWidgetlistDiff */.P3)(diff) || !diff.content) {
        return widgets.map(function (widget) { return ({ widget: widget, modification: null }); });
    }
    var infos = [];
    diff.content.forEach(function (_a) {
        var widgetlistModification = _a[0], widgetId = _a[1];
        var info = getPlacementModificationInfo(field, comparisonRange, widgetlistModification, widgetId);
        if (info)
            infos.push(info);
    });
    return infos;
}
function getPlacementModificationInfo(field, comparisonRange, widgetlistModification, widgetId) {
    if (widgetlistModification === '-') {
        var vanishedWidget = getVanishedWidget(comparisonRange, field.obj().id(), widgetId);
        if (!vanishedWidget)
            return null;
        var vanishedModification = field.getContainer() instanceof basic_widget_BasicWidget &&
            field.getContainer().modification(comparisonRange) === 'deleted'
            ? null
            : 'deleted';
        return { modification: vanishedModification, widget: vanishedWidget };
    }
    var widget = field.get().find(function (w) { return w.id() === widgetId; });
    if (!widget)
        return null;
    var modification = widgetlistModification === '=' ? null : 'new';
    return { modification: modification, widget: widget };
}
function getVanishedWidget(_a, objId, widgetId) {
    var from = _a[0], to = _a[1];
    var toObj = getObjFrom(objSpaceScopeExcludingDeleted(to), objId);
    if (toObj) {
        var toWidget = toObj.widget(widgetId);
        if (toWidget)
            return toWidget;
    }
    var fromObj = getObjFrom(objSpaceScopeExcludingDeleted(from), objId);
    return fromObj === null || fromObj === void 0 ? void 0 : fromObj.widget(widgetId);
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/team.ts
/** @public */
var Team = /** @class */ (function () {
    /** @internal */
    function Team(
    /** @internal */
    teamData) {
        this.teamData = teamData;
    }
    Team.prototype.id = function () {
        return this.teamData.id;
    };
    Team.prototype.name = function () {
        return this.teamData.name;
    };
    Team.prototype.description = function () {
        return this.teamData.description || '';
    };
    return Team;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/editor.ts

/** @public */
var Editor = /** @class */ (function () {
    /** @internal */
    function Editor(
    /** @internal */
    editorData, 
    /** @internal */
    teamsData) {
        this.editorData = editorData;
        this.teamsData = teamsData;
    }
    Editor.prototype.id = function () {
        return this.editorData.id;
    };
    Editor.prototype.name = function () {
        return this.editorData.name;
    };
    Editor.prototype.teams = function () {
        return this.teamsData.map(function (teamData) { return new Team(teamData); });
    };
    return Editor;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/content_versions.ts


function versionsOnAllSites(obj) {
    var contentId = obj.contentId();
    if (!contentId)
        return [];
    return versionScope(obj).search().dangerouslyUnboundedTake();
}
function versionOnSite(obj, siteId) {
    var contentId = obj.contentId();
    if (!contentId)
        return null;
    return (versionScope(obj).and(restrictToSite(siteId)).search().take(1)[0] || null);
}
function versionScope(obj) {
    return objSpaceScopeExcludingDeleted(obj.objSpaceId())
        .and(restrictToContent(obj.contentId()))
        .and(excludeGlobal);
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/restrict_to_content.ts
var restrict_to_content_assign = (undefined && undefined.__assign) || function () {
    restrict_to_content_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return restrict_to_content_assign.apply(this, arguments);
};
function restrictToContent(contentId) {
    return {
        isInScope: function (obj) {
            return obj.contentId() === contentId;
        },
        applyToSearch: function (search) {
            return search.and('_contentId', 'equals', contentId);
        },
        applyToCreate: function (attributes) {
            return restrict_to_content_assign(restrict_to_content_assign({}, attributes), { _content_id: contentId });
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/models/workspace.ts
/** @public */
var Workspace = /** @class */ (function () {
    /** @internal */
    function Workspace(
    /** @internal */
    workspaceData) {
        this.workspaceData = workspaceData;
    }
    Workspace.prototype.id = function () {
        return this.workspaceData.id;
    };
    Workspace.prototype.title = function () {
        return this.workspaceData.title;
    };
    return Workspace;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/models/index.ts

































/***/ }),

/***/ 6315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ shouldAlwaysShowOptionMarkers; },
/* harmony export */   "a": function() { return /* binding */ alwaysShowOptionMarkers; }
/* harmony export */ });
// For test purpose only.
// eslint-disable-next-line import/no-mutable-exports
var shouldAlwaysShowOptionMarkers = false;
function alwaysShowOptionMarkers() {
    shouldAlwaysShowOptionMarkers = true;
}


/***/ }),

/***/ 5329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mO": function() { return /* binding */ registerComponentForId; },
/* harmony export */   "$g": function() { return /* binding */ getComponentForId; },
/* harmony export */   "e3": function() { return /* binding */ registerComponentForAppClass; },
/* harmony export */   "YK": function() { return /* binding */ getComponentForAppClass; }
/* harmony export */ });
/* unused harmony export clearComponentRegistry */
var registry = {};
function registerComponentForId(componentId, componentClass) {
    registry[componentId] = componentClass;
}
function getComponentForId(componentId) {
    return registry[componentId] || null;
}
function registerComponentForAppClass(className, componentClass) {
    registerComponentForId(appClassId(className), componentClass);
}
function getComponentForAppClass(className) {
    return getComponentForId(appClassId(className));
}
// For test purpose only.
function clearComponentRegistry() {
    registry = {};
}
function appClassId(className) {
    return "appClass-" + className;
}


/***/ }),

/***/ 1764:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ WidgetContent; },
/* harmony export */   "R": function() { return /* binding */ WidgetTagContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_editing_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6487);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_react_component_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5329);
/* harmony import */ var scrivito_sdk_react_components_widget_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var scrivito_sdk_react_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6320);
/* harmony import */ var scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5285);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;







var WidgetContent = (0,scrivito_sdk_react_connect__WEBPACK_IMPORTED_MODULE_5__/* .connect */ .$)((_a = /** @class */ (function (_super) {
        __extends(WidgetContent, _super);
        function WidgetContent(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                hasError: false,
            };
            return _this;
        }
        WidgetContent.prototype.componentDidCatch = function (e) {
            (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .throwNextTick */ .a6)(e);
            this.setState({ hasError: true });
        };
        WidgetContent.prototype.shouldComponentUpdate = function (nextProps) {
            return this.props.widget.equals(nextProps.widget);
        };
        WidgetContent.prototype.render = function () {
            if (this.state.hasError) {
                var children = void 0;
                if ((0,scrivito_sdk_app_support_editing_context__WEBPACK_IMPORTED_MODULE_1__/* .isInPlaceEditingActive */ .DG)()) {
                    children = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content_error" }, "Widget could not be rendered due to application error."));
                }
                return withWidgetContext(this.props.widget, react__WEBPACK_IMPORTED_MODULE_0__.createElement(scrivito_sdk_react_components_widget_tag__WEBPACK_IMPORTED_MODULE_4__/* .WidgetTag */ .D, { children: children }), this.props.placementModification);
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppWidgetWrapper, { widget: this.props.widget, widgetProps: this.props.widgetProps, placementModification: this.props.placementModification }));
        };
        return WidgetContent;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component)),
    _a.displayName = 'Scrivito.ContentTag.WidgetContent',
    _a));
var AppWidgetWrapper = /** @class */ (function (_super) {
    __extends(AppWidgetWrapper, _super);
    function AppWidgetWrapper(props) {
        return _super.call(this, props) || this;
    }
    AppWidgetWrapper.prototype.render = function () {
        return withWidgetContext(this.props.widget, react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.getAppWidgetComponent(), this.getWidgetComponentProps()), this.props.placementModification);
    };
    AppWidgetWrapper.prototype.getAppWidgetComponent = function () {
        var widgetClass = this.props.widget.objClass();
        var widgetComponent = (0,scrivito_sdk_react_component_registry__WEBPACK_IMPORTED_MODULE_3__/* .getComponentForAppClass */ .YK)(widgetClass);
        if (!widgetComponent) {
            throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir("No component registered for widget class \"" + widgetClass + "\"");
        }
        return widgetComponent;
    };
    AppWidgetWrapper.prototype.getWidgetComponentProps = function () {
        var appWidget = (0,scrivito_sdk_realm__WEBPACK_IMPORTED_MODULE_6__/* .wrapInAppClass */ .pz)(this.props.widget);
        var widgetComponentProps = { widget: appWidget };
        if (this.props.widgetProps &&
            this.props.widgetProps.hasOwnProperty('widget')) {
            (0,scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .throwNextTick */ .a6)(new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir('The prop "widget" is not allowed inside "widgetProps"'));
            var _a = this.props.widgetProps, widget = _a.widget, widgetPropsWithoutWidget = __rest(_a, ["widget"]);
            return __assign(__assign({}, widgetComponentProps), widgetPropsWithoutWidget);
        }
        return __assign(__assign({}, widgetComponentProps), this.props.widgetProps);
    };
    return AppWidgetWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
var WidgetTagContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
function withWidgetContext(widget, reactElement, placementModification) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(WidgetTagContext.Provider, { value: { widget: widget, placementModification: placementModification }, children: reactElement }));
}


/***/ }),

/***/ 313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ WidgetTag; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_import_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6994);
/* harmony import */ var scrivito_sdk_react_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6320);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



/** @public */
var WidgetTag = (0,scrivito_sdk_react_connect__WEBPACK_IMPORTED_MODULE_2__/* .connect */ .$)(function WidgetTag(props) {
    var _a = props.tag, Tag = _a === void 0 ? 'div' : _a, otherProps = __rest(props, ["tag"]);
    var WidgetTagWithEditing = (0,scrivito_sdk_import_from__WEBPACK_IMPORTED_MODULE_1__/* .importFrom */ .u$)('reactEditing', 'WidgetTagWithEditing');
    if (!WidgetTagWithEditing)
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, __assign({}, otherProps));
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(WidgetTagWithEditing, __assign({ tag: Tag }, otherProps));
});


/***/ }),

/***/ 6320:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ connect; },
/* harmony export */   "q": function() { return /* binding */ isClassComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrivito_sdk_app_support_loading_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5712);
/* harmony import */ var scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6958);
/* harmony import */ var scrivito_sdk_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1190);
/* harmony import */ var scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9379);
/* harmony import */ var scrivito_sdk_react_display_name_from_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4644);
/* harmony import */ var scrivito_sdk_react_get_element_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7274);
/* harmony import */ var scrivito_sdk_react_hooks_use_force_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(864);
/* harmony import */ var scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7227);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









/** @internal */
function connect(component) {
    if (typeof component !== 'function') {
        throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .ArgumentError */ .ir('Scrivito.connect expects either a plain function or a subclass of React.Component');
    }
    if (isConnectedComponent(component)) {
        return component;
    }
    return isClassComponent(component)
        ? connectClassComponent(component)
        : connectFunctionComponent(component);
}
function connectClassComponent(classComponent) {
    var _a;
    var connectedComponent = (_a = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this._scrivitoPrivateConnector = new ComponentConnector(_this);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this._scrivitoPrivateConnector.componentDidMount();
                if (_super.prototype.componentDidMount) {
                    _super.prototype.componentDidMount.call(this);
                }
            };
            class_1.prototype.componentWillUnmount = function () {
                this._scrivitoPrivateConnector.componentWillUnmount();
                if (_super.prototype.componentWillUnmount) {
                    _super.prototype.componentWillUnmount.call(this);
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                return this._scrivitoPrivateConnector.render(function () { return _super.prototype.render.call(_this); });
            };
            return class_1;
        }(classComponent)),
        _a._isScrivitoConnectedComponent = true,
        _a);
    connectedComponent.displayName = (0,scrivito_sdk_react_display_name_from_component__WEBPACK_IMPORTED_MODULE_8__/* .displayNameFromComponent */ .r)(classComponent);
    return connectedComponent;
}
function connectFunctionComponent(functionalComponent) {
    var connectedComponent = function (props) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useConnectedRender(function () { return functionalComponent(props); });
    };
    connectedComponent._isScrivitoConnectedComponent = true;
    connectedComponent.displayName = (0,scrivito_sdk_react_display_name_from_component__WEBPACK_IMPORTED_MODULE_8__/* .displayNameFromComponent */ .r)(functionalComponent);
    return connectedComponent;
}
function useConnectedRender(originalRender) {
    var forceUpdate = (0,scrivito_sdk_react_hooks_use_force_update__WEBPACK_IMPORTED_MODULE_6__/* .useForceUpdate */ .N)();
    var connectorRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (!connectorRef.current) {
        connectorRef.current = new ComponentConnector({ forceUpdate: forceUpdate });
    }
    var connector = connectorRef.current;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        connector.componentDidMount();
        return function () { return connector.componentWillUnmount(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return connector.render(originalRender);
}
function isClassComponent(component) {
    return (typeof component === 'function' &&
        component.prototype &&
        component.prototype.isReactComponent);
}
function isConnectedComponent(component) {
    return (component
        ._isScrivitoConnectedComponent === true);
}
var HierarchyLevelContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(0);
var ComponentConnector = /** @class */ (function () {
    function ComponentConnector(component) {
        this.component = component;
        this.isMounted = false;
        this.loadingSubscriber = new scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_4__/* .LoadingSubscriber */ .aj();
    }
    ComponentConnector.prototype.componentDidMount = function () {
        var _this = this;
        if (this.hierachyLevel === undefined) {
            throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .InternalError */ .AQ();
        }
        this.stateSubscriber = (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_7__/* .createSyncSubscriber */ .GS)(function () { return _this.component.forceUpdate(); }, this.hierachyLevel);
        this.isMounted = true;
        if (this.onMount) {
            var onMount = this.onMount.bind(this);
            delete this.onMount;
            onMount();
        }
    };
    ComponentConnector.prototype.componentWillUnmount = function () {
        if (this.stateSubscriber) {
            this.stateSubscriber.unsubscribe();
        }
        this.unregisterLoadingActivity();
        this.isMounted = false;
        this.loadingSubscriber.unsubscribe();
    };
    ComponentConnector.prototype.render = function (originalRender) {
        var _this = this;
        var reactElement = this.renderLoadingAware(originalRender);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HierarchyLevelContext.Consumer, __assign({}, (0,scrivito_sdk_react_get_element_type__WEBPACK_IMPORTED_MODULE_5__/* .forwardElementTypeProps */ .B)(reactElement)), function (level) {
            return _this.grabHierarchyLevel(level, react__WEBPACK_IMPORTED_MODULE_0__.createElement(HierarchyLevelContext.Provider, { value: level + 1 }, reactElement));
        }));
    };
    /* grab hierarchy level as a side-effect of rendering.
     * ugly, but for a better way, React 16.6 would be needed, see:
     * https://reactjs.org/docs/context.html#classcontexttype
     */
    ComponentConnector.prototype.grabHierarchyLevel = function (level, node) {
        this.hierachyLevel = level;
        return node;
    };
    ComponentConnector.prototype.renderLoadingAware = function (originalRender) {
        var _this = this;
        if ((0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_4__/* .isCurrentlyCapturing */ ._$)()) {
            // we are inside a capture - no need to load anything ourselves
            // (this usually means the caller is prerendering, e.g. renderToString)
            return runWithFrozenState(originalRender);
        }
        else {
            var captured_1 = (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_4__/* .capture */ .IE)(function () {
                return (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_7__/* .trackStateAccess */ .cC)(function () {
                    return (0,scrivito_sdk_data__WEBPACK_IMPORTED_MODULE_3__/* .runWithPerformanceConstraint */ .qe)(function () { return runWithFrozenState(originalRender); });
                });
            });
            var _a = captured_1.result, accessedState_1 = _a.accessedState, result = _a.result;
            this.whenMounted(function () {
                if (!_this.stateSubscriber) {
                    throw new scrivito_sdk_common__WEBPACK_IMPORTED_MODULE_2__/* .InternalError */ .AQ();
                }
                _this.stateSubscriber.subscribeChanges(accessedState_1);
                captured_1.subscribeLoading(_this.loadingSubscriber);
                if (captured_1.isAllDataLoaded()) {
                    _this.unregisterLoadingActivity();
                }
                else {
                    if (!_this.unregisterLoadingActivityCallback) {
                        _this.unregisterLoadingActivityCallback = (0,scrivito_sdk_app_support_loading_monitor__WEBPACK_IMPORTED_MODULE_1__/* .registerLoadingActivity */ .YC)();
                    }
                }
            });
            if (!captured_1.isAllDataLoaded()) {
                return this.handleLoading(result);
            }
            return result;
        }
    };
    ComponentConnector.prototype.whenMounted = function (fn) {
        if (this.isMounted) {
            fn();
        }
        else {
            this.onMount = fn;
        }
    };
    ComponentConnector.prototype.handleLoading = function (preliminaryResult) {
        if (this.component._scrivitoRenderWhileLoading) {
            return this.component._scrivitoRenderWhileLoading();
        }
        return preliminaryResult;
    };
    ComponentConnector.prototype.unregisterLoadingActivity = function () {
        var unregister = this.unregisterLoadingActivityCallback;
        if (unregister) {
            delete this.unregisterLoadingActivityCallback;
            unregister();
        }
    };
    return ComponentConnector;
}());
function runWithFrozenState(originalRender) {
    var run = (0,scrivito_sdk_loadable__WEBPACK_IMPORTED_MODULE_4__/* .runAndCatchErrorsWhileLoading */ .zL)(function () {
        return (0,scrivito_sdk_state__WEBPACK_IMPORTED_MODULE_7__/* .withFrozenState */ .sc)({
            contextName: 'React.Component#render',
            message: 'Use one of the React lifecycle hooks.',
        }, originalRender);
    });
    return run.success ? run.result : null;
}


/***/ }),

/***/ 4644:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ displayNameFromComponent; }
/* harmony export */ });
function displayNameFromComponent(component) {
    return component.displayName || component.name;
}


/***/ }),

/***/ 7274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ getElementType; },
/* harmony export */   "B": function() { return /* binding */ forwardElementTypeProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getElementType(node) {
    if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(node)) {
        var forwardedType = node.props
            .__scrivitoForwardElementType;
        return forwardedType || node.type;
    }
}
function forwardElementTypeProps(node) {
    return { __scrivitoForwardElementType: getElementType(node) };
}


/***/ }),

/***/ 864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hook version of `component.forceUpdate()` or `this.forceUpdate()`.
 *
 * Example usage:
 * ```js
 * const forceUpdate = useForceUpdate();
 * ```
 *
 * You can tell React that the component needs re-rendering by calling `forceUpdate()`
 *
 * See https://reactjs.org/docs/react-component.html#forceupdate for more details.
 * */
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), setCounter = _a[1];
    return function () { return setCounter(function (counter) { return counter + 1; }); };
}


/***/ }),

/***/ 4184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": function() { return /* binding */ InPlaceEditingEnabledContextConsumer; },
  "P": function() { return /* binding */ InPlaceEditingEnabledContextProvider; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
// EXTERNAL MODULE: ./scrivito_sdk/react/connect.tsx
var connect = __webpack_require__(6320);
;// CONCATENATED MODULE: ./scrivito_sdk/react/create_connected_context.tsx


function createConnectedContext(value) {
    var _a = external_react_.createContext(value), Provider = _a.Provider, Consumer = _a.Consumer;
    return {
        Provider: Provider,
        Consumer: connectContextConsumer(Consumer),
    };
}
function connectContextConsumer(Consumer) {
    var ConnectedCallback = (0,connect/* connect */.$)(function (_a) {
        var callback = _a.callback, value = _a.value;
        return callback(value);
    });
    return function (_a) {
        var children = _a.children;
        return (external_react_.createElement(Consumer, null, function (value) { return external_react_.createElement(ConnectedCallback, { callback: children, value: value }); }));
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/in_place_editing_enabled_context.ts
var _a;

var InPlaceEditingEnabledContextConsumer = (_a = createConnectedContext(true), _a.Consumer), InPlaceEditingEnabledContextProvider = _a.Provider;


/***/ }),

/***/ 1306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gH": function() { return /* reexport */ AttributeValue; },
  "iX": function() { return /* reexport */ BackgroundImageTag; },
  "H1": function() { return /* reexport */ ChildListTag; },
  "jq": function() { return /* reexport */ ContentTag; },
  "Ck": function() { return /* reexport */ CurrentPage; },
  "Du": function() { return /* reexport */ ImageTag; },
  "ZM": function() { return /* reexport */ InPlaceEditingOff; },
  "IR": function() { return /* reexport */ LinkTag; },
  "zp": function() { return /* reexport */ NotFoundErrorPage; },
  "TE": function() { return /* reexport */ RestoreInPlaceEditing; },
  "xp": function() { return /* reexport */ widget_content/* WidgetContent */.x; },
  "Dc": function() { return /* reexport */ widget_tag/* WidgetTag */.D; },
  "aR": function() { return /* reexport */ always_show_option_markers/* alwaysShowOptionMarkers */.a; },
  "$j": function() { return /* reexport */ connect/* connect */.$; },
  "$g": function() { return /* reexport */ component_registry/* getComponentForId */.$g; },
  "wh": function() { return /* reexport */ provideComponent; },
  "RM": function() { return /* reexport */ registerComponent; }
});

// UNUSED EXPORTS: displayNameFromComponent, memo, propsAreEqual, useForceUpdate

// EXTERNAL MODULE: ./scrivito_sdk/react/connect.tsx
var connect = __webpack_require__(6320);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(8156);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: ./scrivito_sdk/react/component_registry.ts
var component_registry = __webpack_require__(5329);
// EXTERNAL MODULE: ./scrivito_sdk/react/components/widget_tag.tsx
var widget_tag = __webpack_require__(313);
// EXTERNAL MODULE: ./scrivito_sdk/react/display_name_from_component.ts
var display_name_from_component = __webpack_require__(4644);
// EXTERNAL MODULE: ./scrivito_sdk/react/get_element_type.ts
var get_element_type = __webpack_require__(7274);
;// CONCATENATED MODULE: ./scrivito_sdk/react/memo.ts


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function memo(Component) {
    return external_react_.memo(Component, propsAreEqual);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function propsAreEqual(prevProps, nextProps) {
    return Object.keys(prevProps).every(function (key) {
        return (0,common/* equalsBestEffort */.Fe)(prevProps[key], nextProps[key]);
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/provide_component.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








/** @public */
function provideComponent(className, component) {
    assertValidComponent(component);
    if (isComponentMissingName(component)) {
        component.displayName = className;
    }
    var connectedComponent = (0,connect/* connect */.$)(component);
    var wrappedComponent = wrapComponent(connectedComponent);
    (0,component_registry/* registerComponentForAppClass */.e3)(className, wrappedComponent);
}
function assertValidComponent(component) {
    if (typeof component !== 'function') {
        throw new common/* ArgumentError */.ir('Scrivito.provideComponent expected a valid React component' +
            (", but received " + (0,common/* prettyPrint */.xr)(component)));
    }
}
function wrapComponent(component) {
    var wrappedComponent = (0,connect/* isClassComponent */.q)(component)
        ? wrapClassComponent(component)
        : wrapFunctionComponent(component);
    wrappedComponent.displayName = (0,display_name_from_component/* displayNameFromComponent */.r)(component);
    return wrappedComponent;
}
function wrapFunctionComponent(functionComponent) {
    return memo(function (props) {
        return hasWidgetProp(props)
            ? wrapInWidgetTag(functionComponent(props))
            : functionComponent(props);
    });
}
function wrapClassComponent(component) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return hasWidgetProp(this.props)
                ? wrapInWidgetTag(_super.prototype.render.call(this))
                : _super.prototype.render.call(this);
        };
        return class_1;
    }(component));
}
function hasWidgetProp(props) {
    return !!props.widget;
}
function wrapInWidgetTag(rendered) {
    return (0,get_element_type/* getElementType */.F)(rendered) === widget_tag/* WidgetTag */.D
        ? rendered
        : external_react_.createElement(widget_tag/* WidgetTag */.D, { children: rendered });
}
function isComponentMissingName(component) {
    // In some browsers functional components are missing the `name` property.
    // In some other browsers they have that property, but the value is meaningless: `_class`.
    return (!component.displayName &&
        (!component.name ||
            component.name === '_class' ||
            component.name.substring(0, 6) === 'class_'));
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/register_component.ts


/** @public */
function registerComponent(componentId, component) {
    (0,component_registry/* registerComponentForId */.mO)(componentId, (0,connect/* connect */.$)(component));
}

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/draw_img_on_canvas.ts
function drawImgOnCanvas(img) {
    var canvas = document.createElement('canvas');
    canvas.height = img.height;
    canvas.width = img.width;
    var ctx = canvas.getContext('2d');
    drawOnCanvasContext(img, ctx);
    return canvas;
}
// For test purpose only
function drawOnCanvasContext(img, ctx) {
    ctx.drawImage(img, 0, 0);
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/get_css_canvas_context.ts
// currently only supported in safari
function getCSSCanvasContext(contextType, identifier, width, height) {
    if (!documentGetCSSCanvasContext()) {
        throw new Error('Browser does not support getCSSCanvasContext!');
    }
    return documentGetCSSCanvasContext()(contextType, identifier, width, height);
}
function clearGetCSSCanvasContext(identifier) {
    getCSSCanvasContext('2d', identifier, 0, 0);
}
function hasGetCSSCanvasContext() {
    return !!documentGetCSSCanvasContext();
}
// For test purpose only
function documentGetCSSCanvasContext() {
    return (document.getCSSCanvasContext &&
        document.getCSSCanvasContext.bind(document));
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/moz_set_image_element.ts
function mozSetImageElement(imageElementId, canvas) {
    if (!hasMozSetImageElement()) {
        throw new Error('Browser does not support mozSetImageElement!');
    }
    documentMozSetImageElement()(imageElementId, canvas);
}
function clearMozSetImageElement(imageElementId) {
    if (!hasMozSetImageElement()) {
        throw new Error('Browser does not support mozSetImageElement!');
    }
    documentMozSetImageElement()(imageElementId, null);
}
function hasMozSetImageElement() {
    return !!documentMozSetImageElement();
}
// For test purpose only
function documentMozSetImageElement() {
    return (document.mozSetImageElement &&
        document.mozSetImageElement.bind(document));
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/decode_or_load_img.ts

function decodeOrLoadImg(imageUrl) {
    var img = new Image();
    return hasDecodeImg(img) ? decodeImg(img, imageUrl) : loadImg(img, imageUrl);
}
function hasDecodeImg(img) {
    return !!img.decode;
}
// For test purpose only
function decodeImg(img, imageUrl) {
    if (!hasDecodeImg(img)) {
        throw new Error('Browser does not support decode!');
    }
    img.src = imageUrl;
    return imgDecode(img)().then(function () { return img; });
}
// For test purpose only
function imgDecode(img) {
    return img.decode && img.decode.bind(img);
}
// For test purpose only
function loadImg(img, imageUrl) {
    return new common/* ScrivitoPromise */.s8(function (resolve, reject) {
        img.onload = function () { return resolve(img); };
        img.onerror = function (event) { return reject(event); };
        img.src = imageUrl;
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode_background_image.ts




function decodeBackgroundImage(imageUrl) {
    return decodeOrLoadImg(imageUrl)
        .then(function (img) {
        if (hasMozSetImageElement())
            return mozElement(img);
        if (hasGetCSSCanvasContext())
            return webkitCanvas(img);
        if (!hasDecodeImg(img))
            return drawCanvas(img);
        return { decodedBackgroundUrl: "url(" + imageUrl + ")" };
    })
        .catch(function () { return ({ decodedBackgroundUrl: "url(" + imageUrl + ")" }); });
}
function mozElement(img) {
    var canvas = drawImgOnCanvas(img);
    var mozCanvasIdentifier = "ScrivitoBackgroundImage" + nextCounter();
    mozSetImageElement(mozCanvasIdentifier, canvas);
    return {
        decodedBackgroundUrl: "-moz-element(#" + mozCanvasIdentifier + ")",
        clear: function () { return clearMozSetImageElement(mozCanvasIdentifier); },
    };
}
function webkitCanvas(img) {
    var webkitCanvasIdentifier = "ScrivitoBackgroundImage" + nextCounter();
    var ctx = getCSSCanvasContext('2d', webkitCanvasIdentifier, img.width, img.height);
    drawOnCanvasContext(img, ctx);
    return {
        decodedBackgroundUrl: "-webkit-canvas(" + webkitCanvasIdentifier + ")",
        clear: function () { return clearGetCSSCanvasContext(webkitCanvasIdentifier); },
    };
}
function drawCanvas(img) {
    drawImgOnCanvas(img);
    return { decodedBackgroundUrl: "url(" + img.src + ")" };
}
var counter = 0;
function nextCounter() {
    counter += 1;
    return counter;
}
// For test purpose only
function resetCounter() {
    counter = 0;
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/background_image_decoder.ts


var BackgroundImageDecoder = /** @class */ (function () {
    function BackgroundImageDecoder(onUpdateCallback) {
        this.decodedUrls = {};
        this.loadingRegistry = {};
        this.clears = [];
        this.onUpdateCallback = onUpdateCallback;
    }
    BackgroundImageDecoder.prototype.getBackgroundImage = function (imageUrl) {
        var resultUrl = this.decodedUrls[imageUrl];
        if (!resultUrl) {
            this.ensureLoading(imageUrl);
        }
        return resultUrl;
    };
    BackgroundImageDecoder.prototype.clear = function () {
        this.clears.map(function (clear) { return clear(); });
        this.onUpdateCallback = undefined;
    };
    BackgroundImageDecoder.prototype.ensureLoading = function (imageUrl) {
        var _this = this;
        if (this.decodedUrls[imageUrl] || this.loadingRegistry[imageUrl])
            return;
        var promise = decodeBackgroundImage(imageUrl).then(function (_a) {
            var decodedBackgroundUrl = _a.decodedBackgroundUrl, clear = _a.clear;
            if (clear)
                _this.clears.push(clear);
            _this.decodedUrls[imageUrl] = decodedBackgroundUrl;
            _this.onUpdateCallback && _this.onUpdateCallback();
        });
        this.loadingRegistry[imageUrl] = (0,common/* promiseAndFinally */.sH)(promise, function () { return delete _this.loadingRegistry[imageUrl]; });
    };
    return BackgroundImageDecoder;
}());


// EXTERNAL MODULE: ./scrivito_sdk/app_support/scale_down_binary.ts
var scale_down_binary = __webpack_require__(9988);
// EXTERNAL MODULE: ./scrivito_sdk/models/index.ts + 35 modules
var models = __webpack_require__(5912);
// EXTERNAL MODULE: external "tcomb-react"
var external_tcomb_react_ = __webpack_require__(7726);
;// CONCATENATED MODULE: ./scrivito_sdk/react/tcomb.ts


// EXTERNAL MODULE: ./scrivito_sdk/realm/index.ts + 19 modules
var realm = __webpack_require__(5285);
;// CONCATENATED MODULE: ./scrivito_sdk/react/components/background_image_tag.tsx
var background_image_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;











var ValidPlainBackground = common/* tcomb.interface */.pC["interface"]({
    image: common/* tcomb.String */.pC.String,
    attachment: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    clip: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    color: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    origin: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    position: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    repeat: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    size: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
});
var ValidScrivitoBackground = common/* tcomb.interface */.pC["interface"]({
    image: common/* tcomb.union */.pC.union([models/* BinaryType */.pf, models/* ObjType */.Bt, common/* tcomb.String */.pC.String, common/* tcomb.Nil */.pC.Nil]),
    attachment: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['fixed', 'scroll'])),
    clip: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['border-box'])),
    color: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['transparent'])),
    origin: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['padding-box'])),
    position: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['center', 'left', 'right', 'top', 'bottom'])),
    repeat: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['no-repeat'])),
    size: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['contain', 'cover'])),
});
var ValidBackground = common/* tcomb.union */.pC.union([
    ValidPlainBackground,
    ValidScrivitoBackground,
]);
ValidBackground.dispatch = function (background) {
    return isPlainBackground(background)
        ? ValidPlainBackground
        : ValidScrivitoBackground;
};
var ValidBackgroundList = common/* tcomb.list */.pC.list(ValidBackground);
var ValidBackgroundOrBackgroundList = common/* tcomb.union */.pC.union([
    ValidBackground,
    ValidBackgroundList,
]);
ValidBackgroundOrBackgroundList.dispatch = function (background) {
    return Array.isArray(background) ? ValidBackgroundList : ValidBackground;
};
/** @public */
var BackgroundImageTag = (0,connect/* connect */.$)((_a = /** @class */ (function (_super) {
        background_image_tag_extends(BackgroundImageTag, _super);
        function BackgroundImageTag(props) {
            var _this = _super.call(this, props) || this;
            _this.decoder = createBackgroundImageDecoder(function () { return _this.forceUpdate(); });
            _this.binaryToUrl = _this.binaryToUrl.bind(_this);
            return _this;
        }
        BackgroundImageTag.prototype.componentWillUnmount = function () {
            this.decoder.clear();
        };
        BackgroundImageTag.prototype.render = function () {
            var _a = this.props, style = _a.style, tag = _a.tag, passThroughProps = __rest(_a, ["style", "tag"]);
            var Tag = tag;
            assertNoBackgroundRelatedProperties(style);
            return (external_react_.createElement(Tag, __assign({}, passThroughProps, { style: calculateCSSProperties(style, this.binaryToUrl) })));
        };
        BackgroundImageTag.prototype.binaryToUrl = function (binary) {
            var _a = (0,scale_down_binary/* scaleDownBinary */.BN)(binary), initialUrl = _a.initialUrl, highResUrlToDecode = _a.highResUrlToDecode;
            var decodedBackgroundUrl = highResUrlToDecode &&
                this.decoder.getBackgroundImage(highResUrlToDecode);
            return decodedBackgroundUrl || "url(" + initialUrl + ")";
        };
        return BackgroundImageTag;
    }(external_react_.Component)),
    _a.displayName = 'Scrivito.BackgroundImageTag',
    _a.propTypes = (0,external_tcomb_react_.propTypes)({
        tag: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
        style: common/* tcomb.maybe */.pC.maybe(common/* tcomb.interface */.pC["interface"]({
            background: common/* tcomb.maybe */.pC.maybe(ValidBackgroundOrBackgroundList),
        }, { strict: false })),
    }, { strict: false }),
    _a.defaultProps = {
        tag: 'div',
        style: {},
    },
    _a));
// For test purpose only
function createBackgroundImageDecoder(onUpdateCallback) {
    return new BackgroundImageDecoder(onUpdateCallback);
}
function calculateCSSProperties(style, binaryToUrl) {
    if ((0,external_underscore_.isObject)(style)) {
        var _a = style, background = _a.background, otherStyles = __rest(_a, ["background"]);
        return __assign(__assign({}, otherStyles), calculateBackgroundCSSProperties(background, binaryToUrl));
    }
    return {};
}
function calculateBackgroundCSSProperties(background, binaryToUrl) {
    if (background === undefined) {
        return {};
    }
    if (Array.isArray(background)) {
        return mergeBackgroundCSSProperties(background.map(function (b) { return cssPropertiesFor(b, binaryToUrl); }));
    }
    return cssPropertiesFor(background, binaryToUrl);
}
function mergeBackgroundCSSProperties(properties) {
    return {
        backgroundImage: mergeCSSProperty(properties, 'backgroundImage'),
        backgroundAttachment: mergeCSSProperty(properties, 'backgroundAttachment'),
        backgroundClip: mergeCSSProperty(properties, 'backgroundClip'),
        backgroundOrigin: mergeCSSProperty(properties, 'backgroundOrigin'),
        backgroundPosition: mergeCSSProperty(properties, 'backgroundPosition'),
        backgroundRepeat: mergeCSSProperty(properties, 'backgroundRepeat'),
        backgroundSize: mergeCSSProperty(properties, 'backgroundSize'),
        backgroundColor: lastBackgroundColor(properties),
    };
}
function mergeCSSProperty(properties, name) {
    return properties.map(function (property) { return property[name]; }).join(', ');
}
function lastBackgroundColor(properties) {
    var lastBackground = (0,external_underscore_.last)(properties);
    if (lastBackground) {
        return lastBackground.backgroundColor;
    }
}
function cssPropertiesFor(background, binaryToUrl) {
    if (isPlainBackground(background)) {
        return cssPropertiesForPlainBackground(background);
    }
    return cssPropertiesForScrivitoBackground(background, binaryToUrl);
}
function cssPropertiesForPlainBackground(background) {
    return {
        backgroundImage: background.image,
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || '0% 0%',
        backgroundRepeat: background.repeat || 'repeat',
        backgroundSize: background.size || 'auto',
    };
}
function cssPropertiesForScrivitoBackground(background, binaryToUrl) {
    var image = background.image;
    if (image instanceof models/* Binary */.Kb) {
        return cssPropertiesForBinary(image, background, binaryToUrl);
    }
    if (image instanceof realm/* Obj */.eG) {
        var basicObj = (0,realm/* unwrapAppClass */.bM)(image);
        if ((0,realm/* isBinaryBasicObj */.Gf)(basicObj)) {
            var blob = basicObj.get('blob', ['binary']);
            if (blob) {
                return cssPropertiesForBinary(blob, background, binaryToUrl);
            }
        }
    }
    return cssPropertiesForPlainBackground({ image: 'none' });
}
function cssPropertiesForBinary(binary, background, binaryToUrl) {
    return {
        backgroundImage: binaryToUrl(binary),
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || 'center center',
        backgroundRepeat: background.repeat || 'no-repeat',
        backgroundSize: background.size || 'cover',
    };
}
function isPlainBackground(background) {
    return (0,external_underscore_.isString)(background.image);
}
function assertNoBackgroundRelatedProperties(style) {
    if ((0,external_underscore_.isObject)(style)) {
        for (var _i = 0, _a = Object.keys(style); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.match(/^background.+/)) {
                (0,common/* throwNextTick */.a6)(new common/* ArgumentError */.ir("Invalid background related CSS property \"" + key + "\". " +
                    'Expected property "background" alongside with any non-background properties' +
                    'For further details, see https://www.scrivito.com/js-sdk/BackgroundImageTag'));
            }
        }
    }
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_page.ts
var current_page = __webpack_require__(7826);
// EXTERNAL MODULE: ./scrivito_sdk/import_from.ts
var import_from = __webpack_require__(6994);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/basic_url_for.ts
var basic_url_for = __webpack_require__(8333);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/change_location.ts
var change_location = __webpack_require__(4149);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_modifier_click.ts
// IE11 is the only browser triggering a click event on middle click, so we must take care of it.
// Chrome, FF, Edge handle the middle click without triggering an event.
var IE11_MIDDLE_MOUSE_BUTTON = 2;
function isModifierClick(event) {
    return (event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.which === IE11_MIDDLE_MOUSE_BUTTON);
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/navigate_to.ts
var navigate_to = __webpack_require__(4581);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/ui_adapter.ts
var ui_adapter = __webpack_require__(9679);
;// CONCATENATED MODULE: ./scrivito_sdk/react/components/link_tag.tsx
var link_tag_assign = (undefined && undefined.__assign) || function () {
    link_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return link_tag_assign.apply(this, arguments);
};










/** @public */
var LinkTag = (0,connect/* connect */.$)(function LinkTag(props) {
    checkLinkTagProps(props);
    var customProps = link_tag_assign({}, props);
    delete customProps.children;
    delete customProps.to;
    delete customProps.params;
    return (external_react_.createElement("a", link_tag_assign({}, customProps, { href: getHref(), target: getTarget(), rel: getRel(), onClick: onClick }), props.children));
    function getHref() {
        var _a;
        return ((_a = getDestination()) === null || _a === void 0 ? void 0 : _a.href) || '#';
    }
    function getTarget() {
        if (props.target)
            return props.target;
        if (props.to instanceof realm/* Link */.rU) {
            return (0,realm/* unwrapAppClass */.bM)(props.to).target() || undefined;
        }
    }
    function getRel() {
        if ('rel' in props)
            return props.rel;
        if (props.to instanceof realm/* Link */.rU) {
            return (0,realm/* unwrapAppClass */.bM)(props.to).rel() || undefined;
        }
    }
    function onClick(e) {
        if (props.onClick) {
            props.onClick(e);
            if (e.defaultPrevented)
                return;
        }
        e.preventDefault();
        var destination = getDestination();
        if (!destination)
            return;
        var target = getTarget();
        var to = destination.to, href = destination.href, queryParameters = destination.queryParameters;
        if (target === '_blank' || isModifierClick(e)) {
            return (0,change_location/* openInNewWindow */.o)(href);
        }
        if (target === '_top' && ui_adapter/* uiAdapter */.k) {
            return navigateAppTo(to, queryParameters);
        }
        if (target) {
            return (0,common/* openWindow */.xw)(href, target);
        }
        navigateAppTo(to, queryParameters);
    }
    function navigateAppTo(to, params) {
        (0,navigate_to/* navigateTo */.T)(to, params && { params: params });
    }
    function getDestination() {
        if (props.to) {
            var basicObjOrLink = (0,realm/* unwrapAppClass */.bM)(props.to);
            if (basicObjOrLink instanceof models/* BasicLink */.AM ||
                basicObjOrLink instanceof models/* BasicObj */.Jj) {
                var queryParameters = props.params || undefined;
                return {
                    to: props.to,
                    href: (0,basic_url_for/* basicUrlFor */.M)(basicObjOrLink, {
                        queryParameters: queryParameters,
                        withoutOriginIfLocal: true,
                    }),
                    queryParameters: queryParameters,
                };
            }
        }
        return null;
    }
});
var checkLinkTagProps = (0,common/* checkArgumentsFor */.PJ)('Scrivito.LinkTag', [
    [
        'props',
        common/* tcomb.interface */.pC["interface"]({
            to: common/* tcomb.maybe */.pC.maybe(common/* tcomb.union */.pC.union([models/* ObjType */.Bt, models/* LinkType */.Un])),
            params: common/* tcomb.union */.pC.union([
                common/* tcomb.dict */.pC.dict(common/* tcomb.String */.pC.String, common/* tcomb.union */.pC.union([common/* tcomb.Nil */.pC.Nil, common/* tcomb.String */.pC.String, common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)])),
                common/* tcomb.maybe */.pC.maybe(common/* tcomb.irreducible */.pC.irreducible('false', function (v) { return v === false; })),
            ]),
            onClick: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
        }, { strict: false }),
    ],
], { docPermalink: 'js-sdk/LinkTag', severity: 'warning' });

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag/child_item.tsx




var ChildItem = (0,connect/* connect */.$)(function ChildItem(props) {
    var appObj = (0,realm/* wrapInAppClass */.pz)(props.child);
    if (props.renderChild) {
        return props.renderChild(appObj);
    }
    return (external_react_.createElement("li", null,
        external_react_.createElement(LinkTag, { to: appObj }, props.child.get('title', 'string'))));
});
ChildItem.displayName = 'Scrivito.ChildListTag.ChildItem';

;// CONCATENATED MODULE: ./scrivito_sdk/react/with_display_name.ts
function withDisplayName(name, component) {
    component.displayName = name;
    return component;
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag.tsx
var child_list_tag_assign = (undefined && undefined.__assign) || function () {
    child_list_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return child_list_tag_assign.apply(this, arguments);
};
var child_list_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






/** @public */
var ChildListTag = (0,connect/* connect */.$)(withDisplayName('Scrivito.ChildListTag', function (props) {
    var _a = props.parent, parent = _a === void 0 ? (0,current_page/* currentPage */.lo)() : _a, _b = props.tag, Tag = _b === void 0 ? 'ul' : _b, renderChild = props.renderChild, otherProps = child_list_tag_rest(props, ["parent", "tag", "renderChild"]);
    if (!parent)
        return null;
    var basicParent = parent._scrivitoPrivateContent;
    var orderedChildren = basicParent.orderedChildren();
    var childComponents = orderedChildren.map(function (child) { return (external_react_.createElement(ChildItem, { key: child.id(), child: child, renderChild: renderChild })); });
    var ChildListTagWithEditing = (0,import_from/* importFrom */.u$)('reactEditing', 'ChildListTagWithEditing');
    if (!ChildListTagWithEditing) {
        return external_react_.createElement(Tag, child_list_tag_assign({}, otherProps), childComponents);
    }
    return (external_react_.createElement(ChildListTagWithEditing, child_list_tag_assign({ tag: Tag, basicParent: basicParent }, otherProps), childComponents));
}));

// EXTERNAL MODULE: ./scrivito_sdk/app_support/editing_context.ts
var editing_context = __webpack_require__(6487);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/get_comparison_range.ts
var get_comparison_range = __webpack_require__(3647);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/browser_location.ts
var browser_location = __webpack_require__(8251);
// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/routing.ts + 2 modules
var routing = __webpack_require__(9861);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/find_click_target.ts



function isOpenInNewWindow(target) {
    if (target) {
        return !!target.openInNewWindow;
    }
    return false;
}
function findClickTarget(e) {
    var innermostNode = e.target;
    var outermostNode = e.currentTarget;
    var isModifier = isModifierClick(e);
    return findLinkTarget(innermostNode, outermostNode, isModifier);
}
function findLinkTarget(currentNode, outermostNode, isModifier) {
    if (currentNode === outermostNode) {
        return null;
    }
    if (isHTMLAnchorElement(currentNode)) {
        var url = currentNode.href;
        var uri = external_urijs_(url);
        if (!(0,routing/* isLocalUri */.m4)(uri)) {
            return null;
        }
        if (isModifier || currentNode.getAttribute('target') === '_blank') {
            return { openInNewWindow: url };
        }
        return { openInCurrentWindow: uri.resource() };
    }
    if (!currentNode.parentNode) {
        return null;
    }
    return findLinkTarget(currentNode.parentNode, outermostNode, isModifier);
}
function isHTMLAnchorElement(node) {
    return node.nodeName === 'A';
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/replace_internal_links.ts
var replace_internal_links = __webpack_require__(5947);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/scroll_into_view.ts + 2 modules
var scroll_into_view = __webpack_require__(1724);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/can_edit.ts
var can_edit = __webpack_require__(1784);
// EXTERNAL MODULE: ./scrivito_sdk/react/components/content_tag/widget_content.tsx
var widget_content = __webpack_require__(1764);
// EXTERNAL MODULE: ./scrivito_sdk/react/in_place_editing_enabled_context.ts + 1 modules
var in_place_editing_enabled_context = __webpack_require__(4184);
;// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/widgetlist_value.tsx
var widgetlist_value_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var WidgetlistValue = (0,connect/* connect */.$)(/** @class */ (function (_super) {
    widgetlist_value_extends(WidgetlistValue, _super);
    function WidgetlistValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WidgetlistValue.prototype.render = function () {
        var _this = this;
        if ((0,editing_context/* isComparisonActive */.rl)()) {
            return this.widgetlistChildrenForComparison();
        }
        var field = this.props.field;
        if (!(0,editing_context/* isInPlaceEditingActive */.DG)() || !(0,can_edit/* canEditObjWithId */.r)(field.obj().id())) {
            return this.renderWidgets(field, false);
        }
        return (external_react_.createElement(in_place_editing_enabled_context/* InPlaceEditingEnabledContextConsumer */.d, null, function (isInPlaceEditingEnabled) {
            return _this.renderWidgets(field, isInPlaceEditingEnabled);
        }));
    };
    WidgetlistValue.prototype.renderWidgets = function (field, isInPlaceEditingEnabled) {
        var _this = this;
        var widgets = this.props.field.get();
        if (widgets.length) {
            return (external_react_.createElement(external_react_.Fragment, null, widgets.map(function (widget) { return (external_react_.createElement(widget_content/* WidgetContent */.x, { key: widget.id(), widget: widget, widgetProps: _this.props.widgetProps })); })));
        }
        if (!isInPlaceEditingEnabled)
            return null;
        var WidgetlistPlaceholder = (0,import_from/* importFrom */.u$)('reactEditing', 'WidgetlistPlaceholder');
        return WidgetlistPlaceholder ? (external_react_.createElement(WidgetlistPlaceholder, { field: field })) : null;
    };
    WidgetlistValue.prototype.widgetlistChildrenForComparison = function () {
        var _this = this;
        return (0,models/* getPlacementModificationInfos */.Wd)(this.props.field, (0,get_comparison_range/* getComparisonRange */.N)()).map(function (info) { return (external_react_.createElement(widget_content/* WidgetContent */.x, { key: info.widget.id() + "-" + info.modification, widget: info.widget, widgetProps: _this.props.widgetProps, placementModification: info.modification })); });
    };
    return WidgetlistValue;
}(external_react_.Component)));

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/attribute_value.tsx
var attribute_value_assign = (undefined && undefined.__assign) || function () {
    attribute_value_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return attribute_value_assign.apply(this, arguments);
};
var attribute_value_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};













var AttributeValue = (0,connect/* connect */.$)(withDisplayName('Scrivito.ContentTag.AttributeValue', function (props) {
    var element = external_react_.useRef();
    external_react_.useEffect(function () {
        if (!element.current)
            return;
        var objId = props.field.obj().id();
        var attributeName = props.field.name();
        return (0,scroll_into_view/* registerScrollTarget */.aL)({ objId: objId, attributeName: attributeName }, element.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.field.obj().id(), props.field.name(), element.current]);
    var _a = props.customProps, customChildrenFromProps = _a.children, maybeCustomInnerHtml = _a.dangerouslySetInnerHTML, customOnClick = _a.onClick, customProps = attribute_value_rest(_a, ["children", "dangerouslySetInnerHTML", "onClick"]);
    var renderProps = renderPropsForField(props.field, customChildrenFromProps, isCustomInnerHtml(maybeCustomInnerHtml)
        ? maybeCustomInnerHtml
        : undefined, customOnClick, props.widgetProps);
    var editingProps = props.onClick
        ? {
            onClick: props.onClick,
            'data-scrivito-is-clickable': true,
        }
        : {};
    return external_react_.createElement(props.tag, attribute_value_assign(attribute_value_assign(attribute_value_assign(attribute_value_assign({}, customProps), renderProps), editingProps), { ref: function (e) {
            element.current = e;
            if (props.elementCallback)
                props.elementCallback(e);
        } }));
}));
function isCustomInnerHtml(maybeCustomInnerHtml) {
    return ((0,external_underscore_.isObject)(maybeCustomInnerHtml) &&
        typeof maybeCustomInnerHtml.__html === 'string');
}
function renderPropsForField(field, customChildrenFromProps, customInnerHtml, customOnClick, widgetProps) {
    var customChildren = customChildrenFromProps || customInnerHtml
        ? {
            children: customChildrenFromProps,
            dangerouslySetInnerHTML: customInnerHtml
                ? { __html: (0,replace_internal_links/* replaceInternalLinks */.q)(customInnerHtml.__html) }
                : undefined,
        }
        : undefined;
    switch (field.type()) {
        case 'html':
            return renderPropsForHtml(field, customChildren, customOnClick);
        case 'string':
            return renderPropsForString(field, customChildren);
        case 'float':
        case 'integer':
            return customChildren !== null && customChildren !== void 0 ? customChildren : renderPropsForNumber(field);
        case 'widgetlist': {
            return {
                children: (external_react_.createElement(WidgetlistValue, { field: field, widgetProps: widgetProps })),
            };
        }
        default:
            return customChildren !== null && customChildren !== void 0 ? customChildren : {};
    }
}
function renderPropsForHtml(field, customChildren, customOnClick) {
    var diffContent = (0,editing_context/* isComparisonActive */.rl)()
        ? field.getHtmlDiffContent((0,get_comparison_range/* getComparisonRange */.N)())
        : undefined;
    if (customChildren && !diffContent) {
        return attribute_value_assign(attribute_value_assign({}, customChildren), { onClick: customOnClick || handleClickOnHtml });
    }
    return {
        dangerouslySetInnerHTML: {
            __html: (0,replace_internal_links/* replaceInternalLinks */.q)(diffContent || field.get()),
        },
        onClick: handleClickOnHtml,
    };
}
function renderPropsForString(field, customChildren) {
    if ((0,editing_context/* isComparisonActive */.rl)()) {
        var diffContent = field.getHtmlDiffContent((0,get_comparison_range/* getComparisonRange */.N)());
        if (diffContent) {
            return { dangerouslySetInnerHTML: { __html: diffContent } };
        }
    }
    return customChildren !== null && customChildren !== void 0 ? customChildren : { children: field.get() };
}
function renderPropsForNumber(field) {
    var value = field.get();
    var parsedValue = value === 0 ? '0' : value;
    return { children: parsedValue };
}
function handleClickOnHtml(e) {
    var linkTarget = findClickTarget(e);
    if (!linkTarget)
        return;
    if (isOpenInNewWindow(linkTarget)) {
        handleOpenInNewWindow(e, linkTarget);
    }
    else {
        handleOpenInCurrentWindow(e, linkTarget);
    }
}
function handleOpenInNewWindow(e, _a) {
    var url = _a.openInNewWindow;
    if (ui_adapter/* uiAdapter */.k) {
        e.preventDefault();
        (0,change_location/* openInNewWindow */.o)(url);
    }
}
function handleOpenInCurrentWindow(e, _a) {
    var resource = _a.openInCurrentWindow;
    e.preventDefault();
    browser_location/* push */.VF(resource);
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag.tsx
var content_tag_assign = (undefined && undefined.__assign) || function () {
    content_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return content_tag_assign.apply(this, arguments);
};
var content_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








/** @public */
var ContentTag = (0,connect/* connect */.$)(render);
ContentTag.displayName = 'Scrivito.ContentTag';
var ContentTagWithCallback = (0,connect/* connect */.$)(function (_a) {
    var elementCallback = _a.elementCallback, props = content_tag_rest(_a, ["elementCallback"]);
    return render(props, elementCallback);
});
function render(_a, elementCallback) {
    var content = _a.content, attribute = _a.attribute, tag = _a.tag, widgetProps = _a.widgetProps, customProps = content_tag_rest(_a, ["content", "attribute", "tag", "widgetProps"]);
    if (!content)
        return null;
    var field = realm/* Schema.basicFieldFor */.V_.basicFieldFor(content, attribute);
    if (!field) {
        (0,common/* throwNextTick */.a6)(new common/* ArgumentError */.ir('Component "Scrivito.ContentTag" received prop "attribute" with invalid value: ' +
            ("Attribute \"" + attribute + "\" is not defined for content specified in prop \"content\".")));
        return null;
    }
    if ((0,editing_context/* isComparisonActive */.rl)()) {
        var _b = (0,get_comparison_range/* getComparisonRange */.N)(), from = _b[0], to = _b[1];
        field = field.inObjSpace(to) || field.inObjSpace(from);
        if (!field)
            return null;
    }
    if (widgetProps && field.type() !== 'widgetlist') {
        (0,common/* throwNextTick */.a6)(new common/* ArgumentError */.ir('The prop "widgetProps" is only allowed for widgetlist attributes'));
    }
    var contentTagProps = {
        elementCallback: elementCallback,
        field: field,
        tag: tag || 'div',
        customProps: customProps,
        widgetProps: widgetProps,
    };
    var AttributeValueWithEditing = (0,import_from/* importFrom */.u$)('reactEditing', 'AttributeValueWithEditing');
    if (AttributeValueWithEditing) {
        return external_react_.createElement(AttributeValueWithEditing, content_tag_assign({}, contentTagProps));
    }
    return external_react_.createElement(AttributeValue, content_tag_assign({}, contentTagProps));
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_page_data.ts
var current_page_data = __webpack_require__(9507);
;// CONCATENATED MODULE: ./scrivito_sdk/react/scroll_window.ts



var previousNavigationState;
function notifyScrollWindow(navigationState) {
    if (!(0,browser_location/* isCurrentHistoryState */.XB)(navigationState.historyState))
        return;
    if (shouldScroll(navigationState))
        (0,common/* scrollTo */.X5)(0, 0);
    previousNavigationState = navigationState;
}
function shouldScroll(currentNavigationState) {
    if (currentNavigationState.historyState.isRevisit)
        return false;
    var hasFragment = currentNavigationState.historyState.location.indexOf('#') !== -1;
    if (hasFragment)
        return false;
    var route = currentNavigationState.locationRoute;
    if ((0,routing/* isObjNotFoundRoute */.Kh)(route))
        return true;
    if ((0,routing/* isNotResponsibleRoute */.QF)(route))
        return false;
    return (currentNavigationState.historyState.historyChangesCount !==
        (previousNavigationState === null || previousNavigationState === void 0 ? void 0 : previousNavigationState.historyState.historyChangesCount));
}
// For test purpose only
function scroll_window_reset() {
    previousNavigationState = undefined;
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/page_scroll.tsx
var page_scroll_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PageScroll = /** @class */ (function (_super) {
    page_scroll_extends(PageScroll, _super);
    function PageScroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageScroll.prototype.componentDidMount = function () {
        this.notifyScrollWindow();
    };
    PageScroll.prototype.componentDidUpdate = function () {
        this.notifyScrollWindow();
    };
    PageScroll.prototype.render = function () {
        return null;
    };
    PageScroll.prototype.notifyScrollWindow = function () {
        notifyScrollWindow(this.props.navigationState);
    };
    return PageScroll;
}(external_react_.Component));


;// CONCATENATED MODULE: ./scrivito_sdk/react/get_component_for_page_class.ts


function getComponentForPageClass(pageClassName) {
    var pageComponent = (0,component_registry/* getComponentForAppClass */.YK)(pageClassName);
    if (!pageComponent) {
        throw new common/* ArgumentError */.ir("No component registered for obj class \"" + pageClassName + "\"");
    }
    return pageComponent;
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/current_page.tsx







/** @public */
var CurrentPage = (0,connect/* connect */.$)(function CurrentPage() {
    var _a, _b;
    var pageData = (0,current_page_data/* getCurrentPageData */["if"])();
    if (!pageData)
        return null;
    var currentPage = pageData.currentPage, navigationState = pageData.navigationState;
    if (!currentPage)
        return null;
    var pageElement = external_react_.createElement(getComponentForPageClass(currentPage.objClass()), {
        page: (0,realm/* wrapInAppClass */.pz)(currentPage),
        params: external_urijs_.parseQuery((_b = (_a = navigationState === null || navigationState === void 0 ? void 0 : navigationState.locationRoute) === null || _a === void 0 ? void 0 : _a.query) !== null && _b !== void 0 ? _b : ''),
    });
    return (external_react_.createElement(external_react_.Fragment, null,
        external_react_.createElement(PageScroll, { navigationState: navigationState }),
        pageElement));
});
CurrentPage.displayName = 'Scrivito.CurrentPage';

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode_image.ts


function decodeImage(imageUrl) {
    return decodeOrLoadImg(imageUrl)
        .then(function (img) {
        if (!hasDecodeImg(img))
            drawImgOnCanvas(img);
        return imageUrl;
    })
        .catch(function () { return imageUrl; });
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/image_decoder.ts


var ImageDecoder = /** @class */ (function () {
    function ImageDecoder(onUpdateCallback) {
        this.decodedUrls = {};
        this.loadingRegistry = {};
        this.onUpdateCallback = onUpdateCallback;
    }
    ImageDecoder.prototype.getImage = function (imageUrl) {
        var resultUrl = this.decodedUrls[imageUrl];
        if (!resultUrl) {
            this.ensureLoading(imageUrl);
        }
        return resultUrl;
    };
    ImageDecoder.prototype.cancelUpdateCallback = function () {
        this.onUpdateCallback = undefined;
    };
    ImageDecoder.prototype.ensureLoading = function (imageUrl) {
        var _this = this;
        if (this.decodedUrls[imageUrl] || this.loadingRegistry[imageUrl])
            return;
        var promise = decodeImage(imageUrl).then(function (url) {
            _this.decodedUrls[imageUrl] = url;
            _this.onUpdateCallback && _this.onUpdateCallback();
        });
        this.loadingRegistry[imageUrl] = (0,common/* promiseAndFinally */.sH)(promise, function () { return delete _this.loadingRegistry[imageUrl]; });
    };
    return ImageDecoder;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/react/image_placeholder.ts
/*
 * This is a base64 placeholder for the image component.
 *
 * The image component is actually styled via CSS in order to provide a scalable placeholder.
 * However, in order to set a background image, the tag must have content. In this case a
 * transparent image of an appropriate size.
 */
var imagePlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwYEAAAAAw6D5U1/hAFUBAAAAAHwGFFAAAQCfIxUAAAAASUVORK5CYII';

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/image_tag.tsx
var image_tag_assign = (undefined && undefined.__assign) || function () {
    image_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return image_tag_assign.apply(this, arguments);
};
var image_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










/** @public */
var ImageTag = (0,connect/* connect */.$)(function ImageTag(_a) {
    var content = _a.content, _b = _a.attribute, attribute = _b === void 0 ? 'blob' : _b, width = _a.width, onLoad = _a.onLoad, htmlOptions = image_tag_rest(_a, ["content", "attribute", "width", "onLoad"]);
    var _c = external_react_.useState(htmlOptions.loading === 'lazy'), isLazy = _c[0], setIsLazy = _c[1];
    var load = external_react_.useCallback(function (event) {
        setIsLazy(false);
        return onLoad === null || onLoad === void 0 ? void 0 : onLoad.call(null, event);
    }, [onLoad]);
    var setEagerIfComplete = external_react_.useCallback(function (node) {
        if (isComplete(node))
            setIsLazy(false);
    }, []);
    var _d = external_react_.useState(0), setImageDecoderUpdateCounter = _d[1];
    var decoder = external_react_.useMemo(function () {
        return isLazy
            ? undefined
            : new ImageDecoder(function () {
                return setImageDecoderUpdateCounter(function (counter) { return counter + 1; });
            });
    }, [isLazy]);
    external_react_.useEffect(function () { return function () { return decoder === null || decoder === void 0 ? void 0 : decoder.cancelUpdateCallback(); }; }, [decoder]);
    if (!content)
        return null;
    if (content instanceof models/* Binary */.Kb) {
        var fullWidth_1 = getFullWidth(content, width, isLazy);
        return fullWidth_1 === null ? null : (external_react_.createElement("img", image_tag_assign({ src: scaledSrc(decoder, content), width: fullWidth_1 }, htmlOptions, { onLoad: load, ref: setEagerIfComplete })));
    }
    var binary = getBinary(content, attribute);
    if (binary === undefined)
        return null;
    if (binary === null) {
        return (external_react_.createElement(ContentTag, image_tag_assign({ attribute: attribute, content: content, tag: 'img', src: imagePlaceholder, "data-scrivito-image-placeholder": true, width: width }, htmlOptions)));
    }
    var fullWidth = getFullWidth(binary, width, isLazy);
    return fullWidth === null ? null : (external_react_.createElement(ContentTagWithCallback, image_tag_assign({ attribute: attribute, content: content, width: fullWidth, tag: 'img', src: scaledSrc(decoder, binary) }, htmlOptions, { onLoad: load, elementCallback: setEagerIfComplete })));
});
function scaledSrc(decoder, binary) {
    var _a = (0,scale_down_binary/* scaleDownBinary */.BN)(binary), initialUrl = _a.initialUrl, highResUrlToDecode = _a.highResUrlToDecode;
    var decodedImg = highResUrlToDecode && (decoder === null || decoder === void 0 ? void 0 : decoder.getImage(highResUrlToDecode));
    return decodedImg || initialUrl;
}
// return value:
// * number, string or undefined => render with this width
// * null => render null (since width is not yet loaded)
function getFullWidth(binary, width, isLazy) {
    if (isLazy && !(0,scale_down_binary/* isInitialUrlAvailable */.kY)(binary))
        return null;
    if (width !== undefined)
        return width;
    if (binary.isRaw() || binary.isExplicitlyTransformed())
        return;
    var metadata = binary.raw().metadata();
    if (metadata.contentType() === 'image/svg+xml')
        return;
    var metadataWidth = metadata.get('width');
    return (0,external_underscore_.isNumber)(metadataWidth) ? metadataWidth : null;
}
function getBinary(content, attribute) {
    var field = realm/* Schema.basicFieldFor */.V_.basicFieldFor(content, attribute);
    if (!field) {
        if (realm/* Schema.forInstance */.V_.forInstance(content)) {
            (0,common/* throwNextTick */.a6)(new common/* ArgumentError */.ir('Component "Scrivito.ImageTag" received prop "content"' +
                (" with an object missing attribute \"" + attribute + "\".")));
        }
        return;
    }
    var attributeType = field.type();
    if (attributeType === 'binary')
        return field.get();
    if (attributeType === 'reference') {
        var referenced = field.get();
        if (!(referenced instanceof models/* BasicObj */.Jj))
            return null;
        return referenced.get('blob', 'binary') || null;
    }
    (0,common/* throwNextTick */.a6)(new common/* ArgumentError */.ir('Component "Scrivito.ImageTag" received prop "content"' +
        (" with an object, whose attribute \"" + attribute + "\"") +
        (" is of unexpected type \"" + attributeType + "\".") +
        ' Valid attribute types are "binary" and "reference".'));
}
function isComplete(node) {
    // Type cast is OK assuming we're dealing with `img` elements in this module
    return node && node.complete;
}

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/in_place_editing.tsx



/** @public */
var InPlaceEditingOff = function (_a) {
    var children = _a.children;
    return (0,editing_context/* isInPlaceEditingActive */.DG)() ? (external_react_.createElement(in_place_editing_enabled_context/* InPlaceEditingEnabledContextProvider */.P, { children: children, value: false })) : children;
};
/** @public */
var RestoreInPlaceEditing = function (_a) {
    var children = _a.children;
    return (0,editing_context/* isInPlaceEditingActive */.DG)() ? (external_react_.createElement(in_place_editing_enabled_context/* InPlaceEditingEnabledContextProvider */.P, { children: children, value: true })) : children;
};

;// CONCATENATED MODULE: ./scrivito_sdk/react/components/not_found_error_page.tsx





/** @public */
var NotFoundErrorPage = (0,connect/* connect */.$)(function NotFoundErrorPage(_a) {
    var children = _a.children;
    var navigationState = (0,current_page_data/* getNotFoundErrorPageState */.fW)();
    if (!navigationState)
        return null;
    if (!(0,browser_location/* isCurrentHistoryState */.XB)(navigationState.historyState))
        return null;
    return (external_react_.createElement("div", null,
        external_react_.createElement(PageScroll, { navigationState: navigationState }),
        children || (external_react_.createElement(external_react_.Fragment, null,
            external_react_.createElement("h1", null, "The page you were looking for doesn't exist."),
            external_react_.createElement("p", null, "You may have mistyped the address or the page may have moved.")))));
});
NotFoundErrorPage.displayName = 'Scrivito.NotFoundErrorPage';

// EXTERNAL MODULE: ./scrivito_sdk/react/always_show_option_markers.ts
var always_show_option_markers = __webpack_require__(6315);
// EXTERNAL MODULE: ./scrivito_sdk/react/hooks/use_force_update.ts
var use_force_update = __webpack_require__(864);
;// CONCATENATED MODULE: ./scrivito_sdk/react/index.ts





















/***/ }),

/***/ 5285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rU": function() { return /* reexport */ Link; },
  "eG": function() { return /* reexport */ Obj; },
  "JB": function() { return /* reexport */ ObjFacetValue; },
  "d_": function() { return /* reexport */ ObjSearch; },
  "V_": function() { return /* reexport */ Schema; },
  "$L": function() { return /* reexport */ Widget; },
  "Cn": function() { return /* reexport */ allObjClasses; },
  "OY": function() { return /* reexport */ allWidgetClasses; },
  "r$": function() { return /* reexport */ createObjClass; },
  "Zv": function() { return /* reexport */ createWidgetClass; },
  "pw": function() { return /* reexport */ enableStrictSearchOperators; },
  "ll": function() { return /* reexport */ getClass; },
  "Gf": function() { return /* reexport */ isBinaryBasicObj; },
  "Je": function() { return /* reexport */ provideObjClass; },
  "We": function() { return /* reexport */ provideWidgetClass; },
  "cv": function() { return /* reexport */ schemaFromBasicObjOrWidget; },
  "RO": function() { return /* reexport */ setCurrentSiteIdHandler; },
  "dz": function() { return /* reexport */ unwrapAppAttributes; },
  "bM": function() { return /* reexport */ unwrapAppClass; },
  "pz": function() { return /* reexport */ wrapInAppClass; }
});

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
// EXTERNAL MODULE: ./scrivito_sdk/models/index.ts + 35 modules
var models = __webpack_require__(5912);
// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/realm/assert_valid_attribute_name.ts

function assertValidAttributeName(attributeName) {
    if (!(0,common/* isCamelCase */.q2)(attributeName)) {
        throw new common/* ArgumentError */.ir('Attribute names have to be in camel case.');
    }
    if ((0,common/* isSystemAttribute */.mb)(attributeName)) {
        throw new common/* ArgumentError */.ir("Attribute name \"" + attributeName + "\" is not a valid custom attribute name.");
    }
}

// EXTERNAL MODULE: ./scrivito_sdk/realm/initial_content_registry.ts
var initial_content_registry = __webpack_require__(1109);
;// CONCATENATED MODULE: ./scrivito_sdk/realm/initial_attributes_for.ts

function initialAttributesFor(providedAttributes, schema, appClassName) {
    var initialAttributes = {};
    Object.keys(schema.attributes).forEach(function (attributeName) {
        if (!Object.prototype.hasOwnProperty.call(providedAttributes, attributeName)) {
            var initialValue = (0,initial_content_registry/* initialContentFor */.W)(appClassName, attributeName);
            if (initialValue !== undefined) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    return initialAttributes;
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/schema.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var Schema = /** @class */ (function () {
    function Schema(definition, parent) {
        var privateSchema = parent._scrivitoPrivateSchema;
        var attributes = privateSchema
            ? __assign({}, privateSchema.attributes) : {};
        var definitionAttributes = definition.attributes;
        if (definitionAttributes) {
            Object.keys(definitionAttributes).forEach(function (name) {
                var attrDefinition = definitionAttributes[name];
                attributes[name] = normalizeAttributeDefinition(attrDefinition);
            });
        }
        var rawOnlyInside = definition.onlyInside, rawOnlyChildren = definition.onlyChildren, otherDefinitions = __rest(definition, ["onlyInside", "onlyChildren"]);
        var onlyChildren = normalizeToStringArray(rawOnlyChildren);
        var onlyInside = normalizeToStringArray(rawOnlyInside);
        if (onlyChildren) {
            this.definition = __assign(__assign({}, otherDefinitions), { attributes: attributes, onlyChildren: onlyChildren, onlyInside: onlyInside });
        }
        else {
            this.definition = __assign(__assign({}, otherDefinitions), { attributes: attributes, onlyInside: onlyInside });
        }
    }
    Schema.forInstance = function (model) {
        return Schema.forClass(model.constructor);
    };
    Schema.forClass = function (klass) {
        return klass._scrivitoPrivateSchema;
    };
    Schema.basicFieldFor = function (model, attributeName) {
        var schema = Schema.forInstance(model);
        if (!schema)
            return null;
        var typeInfo = schema.attribute(attributeName);
        if (!typeInfo)
            return null;
        return new models/* BasicField */.cO(model._scrivitoPrivateContent, attributeName, typeInfo);
    };
    Object.defineProperty(Schema.prototype, "attributes", {
        get: function () {
            return this.definition.attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "extractTextAttributes", {
        get: function () {
            return this.definition.extractTextAttributes || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "name", {
        get: function () {
            return this.definition.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyInside", {
        get: function () {
            return this.definition.onlyInside;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyChildren", {
        get: function () {
            return this.definition.onlyChildren;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "validAsRoot", {
        get: function () {
            return this.definition.validAsRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyAsRoot", {
        get: function () {
            return this.definition.onlyAsRoot;
        },
        enumerable: false,
        configurable: true
    });
    Schema.prototype.attribute = function (name) {
        return this.attributes[name];
    };
    Schema.prototype.isBinary = function () {
        var blobDefinition = this.attribute('blob');
        if (!blobDefinition)
            return false;
        return blobDefinition[0] === 'binary';
    };
    return Schema;
}());

function isAppClass(object) {
    return !!(object && object._scrivitoPrivateSchema);
}
function normalizeAttributeDefinition(attrDefinition) {
    if (typeof attrDefinition === 'string') {
        return [attrDefinition];
    }
    if (attrDefinition[0] === 'enum' || attrDefinition[0] === 'multienum') {
        return [attrDefinition[0], attrDefinition[1]];
    }
    var _a = attrDefinition[1], only = _a.only, otherOptions = __rest(_a, ["only"]);
    var validClasses = typeof only === 'string' ? [only] : only;
    return [attrDefinition[0], __assign(__assign({}, otherOptions), { validClasses: validClasses })];
}
function normalizeToStringArray(value) {
    if (typeof value === 'string')
        return [value];
    if (value === null || value === void 0 ? void 0 : value.length)
        return value;
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/widget.ts
var widget_assign = (undefined && undefined.__assign) || function () {
    widget_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return widget_assign.apply(this, arguments);
};








/** @public */
var Widget = /** @class */ (function () {
    function Widget(attributes) {
        if (attributes === void 0) { attributes = {}; }
        var appClassName = objClassNameFor(this.constructor);
        if (!appClassName) {
            throw new common/* ArgumentError */.ir('Use a specific class (like TextWidget or ImageWidget) to create a Widget.');
        }
        assertValidAttributes(attributes);
        var schema = Schema.forInstance(this);
        // schema should exist, if objClassNameFor can find something
        if (!schema)
            throw new common/* InternalError */.AQ();
        var basicAttributes = unwrapAppAttributes(widget_assign(widget_assign({}, attributes), { _objClass: appClassName }), schema, appClassName);
        var basicWidget = models/* BasicWidget.createWithUnknownValues */.E8.createWithUnknownValues(basicAttributes);
        basicWidget.onDidPersist(function (copiedWidget) {
            var appWidget = wrapInAppClass(copiedWidget);
            var initialAttributes = initialAttributesFor(basicAttributes, schema, appClassName);
            updateAppAttributes(appWidget, initialAttributes);
        });
        this._scrivitoPrivateContent = basicWidget;
    }
    Widget.prototype.id = function () {
        return this._scrivitoPrivateContent.id();
    };
    Widget.prototype.objClass = function () {
        return this._scrivitoPrivateContent.objClass();
    };
    Widget.prototype.get = function (attributeName) {
        assertValidAttributeName(attributeName);
        return readAppAttribute(this, attributeName);
    };
    Widget.prototype.update = function (attributes) {
        updateAppAttributes(this, attributes);
    };
    Widget.prototype.obj = function () {
        var basicObj = this._scrivitoPrivateContent.obj();
        return wrapInAppClass(basicObj);
    };
    Widget.prototype.copy = function () {
        var basicWidget = this._scrivitoPrivateContent.copy();
        return wrapInAppClass(basicWidget);
    };
    Widget.prototype.destroy = function () {
        this._scrivitoPrivateContent.remove();
    };
    Widget.prototype.container = function () {
        var container = this._scrivitoPrivateContent.container();
        return wrapInAppClass(container);
    };
    return Widget;
}());

function assertValidAttributes(attributes) {
    if (attributes.constructor !== Object) {
        throw new common/* ArgumentError */.ir('The provided attributes are invalid. They have ' +
            'to be an Object with valid Scrivito attribute values.');
    }
    if (attributes._objClass) {
        throw new common/* ArgumentError */.ir('Invalid attribute "_objClass". ' +
            ("\"new " + attributes._objClass + "\" will automatically set the CMS object class correctly."));
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/registry.ts



var mapping = {};
function registerClass(name, klass) {
    mapping[name] = klass;
}
/** @public */
function getClass(name) {
    return mapping[name] || null;
}
function objClassNameFor(modelClass) {
    return (0,external_underscore_.findKey)(mapping, function (klass) { return klass === modelClass; }) || null;
}
function appClassFor(name, baseClass) {
    var appClass = getClass(name);
    return appClass && baseClass.isPrototypeOf(appClass) ? appClass : baseClass;
}
// For test purpose only
function resetRegistry() {
    mapping = {};
}
function allObjClasses() {
    return (0,external_underscore_.pick)(mapping, function (modelClass) { return Obj.isPrototypeOf(modelClass); });
}
function allWidgetClasses() {
    return (0,external_underscore_.pick)(mapping, function (modelClass) {
        return Widget.isPrototypeOf(modelClass);
    });
}
function objClassFor(name) {
    return appClassFor(name, Obj);
}
function widgetClassFor(name) {
    return appClassFor(name, Widget);
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/wrap_in_app_class.ts





function wrapInAppClass(internalValue) {
    if (Array.isArray(internalValue)) {
        return internalValue
            .map(function (value) { return wrapInAppClass(value); })
            .filter(function (value) { return value !== null; });
    }
    if (internalValue instanceof models/* BasicObj */.Jj) {
        return buildAppClassInstance(internalValue, objClassFor(internalValue.objClass()));
    }
    if (internalValue instanceof models/* BasicWidget */.E8) {
        return buildAppClassInstance(internalValue, widgetClassFor(internalValue.objClass()));
    }
    if (internalValue instanceof models/* BasicLink */.AM) {
        if (!internalValue.hasDestination())
            return null;
        return buildAppClassInstance(internalValue, Link);
    }
    if (internalValue instanceof models/* ObjUnavailable */.AZ)
        return null;
    return internalValue;
}
function unwrapAppClass(value) {
    if (Array.isArray(value))
        return value.map(function (v) { return unwrapAppClass(v); });
    if (hasPrivateContent(value))
        return value._scrivitoPrivateContent;
    return value;
}
function unwrapAppAttributes(appAttributes, schema, appClassName) {
    return (0,external_underscore_.mapObject)(appAttributes, function (value, name) {
        if ((0,common/* isSystemAttribute */.mb)(name))
            return [value];
        var normalizedTypeInfo = schema.attribute(name);
        if (!normalizedTypeInfo) {
            throw new common/* ArgumentError */.ir("Attribute \"" + name + "\" is not defined for CMS object " +
                ("class \"" + appClassName + "\"."));
        }
        var unwrappedValue = unwrapAppClass(value);
        return [unwrappedValue, normalizedTypeInfo];
    });
}
function buildAppClassInstance(internalValue, appClass) {
    var externalValue = Object.create(appClass.prototype);
    externalValue._scrivitoPrivateContent = internalValue;
    return externalValue;
}
function hasPrivateContent(value) {
    return !!value && !!value._scrivitoPrivateContent;
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/app_model_accessor.ts




function readAppAttribute(model, attributeName) {
    var basicField = Schema.basicFieldFor(model, attributeName);
    return basicField && wrapInAppClass(basicField.get());
}
function updateAppAttributes(model, attributes) {
    var appClassName = objClassNameFor(model.constructor);
    if (!appClassName) {
        var baseClass = void 0;
        if (model.constructor === Obj) {
            baseClass = 'Obj';
        }
        else {
            baseClass = 'Widget';
        }
        throw new common/* ArgumentError */.ir("Updating is not supported on the base class \"" + baseClass + "\".");
    }
    if (attributes.constructor !== Object) {
        throw new common/* ArgumentError */.ir('The provided attributes are invalid. They have ' +
            'to be an Object with valid Scrivito attribute values.');
    }
    // Bang: truthy appClassName implies that model is neither Obj nor Widget itself.
    // Every Subclass of Obj and Widget has a Schema.
    var schema = Schema.forInstance(model);
    var attributesWithTypeInfo = unwrapAppAttributes(attributes, schema, appClassName);
    model._scrivitoPrivateContent.updateWithUnknownValues(attributesWithTypeInfo);
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_facet_value.ts

/** @public */
var ObjFacetValue = /** @class */ (function () {
    /** @internal */
    function ObjFacetValue(basicObjFacetValue) {
        this._basicObjFacetValue = basicObjFacetValue;
    }
    ObjFacetValue.prototype.name = function () {
        return this._basicObjFacetValue.name();
    };
    ObjFacetValue.prototype.count = function () {
        return this._basicObjFacetValue.count();
    };
    ObjFacetValue.prototype.includedObjs = function () {
        var response = this._basicObjFacetValue.includedObjs();
        return wrapInAppClass(response);
    };
    return ObjFacetValue;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/realm/strict_search_operators.ts
var strictSearchOperators = false;
function enableStrictSearchOperators() {
    strictSearchOperators = true;
}
function areStrictSearchOperatorsEnabled() {
    return strictSearchOperators;
}
// For test purposes only
function resetStrictSearchOperators() {
    strictSearchOperators = false;
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_search.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





/** @public */
var ObjSearch = /** @class */ (function () {
    /** @internal */
    function ObjSearch(basicSearch) {
        this._scrivitoPrivateContent = basicSearch;
    }
    /** @internal */
    ObjSearch.prototype.and = function (fieldOrSearchToExtendBy, operator, value, boost) {
        if (fieldOrSearchToExtendBy instanceof ObjSearch) {
            var search = fieldOrSearchToExtendBy;
            this._scrivitoPrivateContent.and(search._scrivitoPrivateContent);
        }
        else {
            if (operator === undefined) {
                throw new common/* ArgumentError */.ir('Missing operator to search with');
            }
            if (value === undefined) {
                throw new common/* ArgumentError */.ir('Missing value to search (specify "null" for missing)');
            }
            if (areStrictSearchOperatorsEnabled()) {
                checkNonFullTextSearchOperator('objSearch.and', operator, 'js-sdk/ObjSearch-and');
            }
            var field = fieldOrSearchToExtendBy;
            var unwrappedValue = unwrapAppClassValue(value);
            this._scrivitoPrivateContent.and(field, operator, unwrappedValue, boost);
        }
        return this;
    };
    ObjSearch.prototype.andFullTextOf = function (field, operator, value, boost) {
        checkFullTextSearchOperator('objSearch.andFullTextOf', operator, 'js-sdk/ObjSearch-andFullTextOf');
        var unwrappedValue = unwrapAppClassValue(value);
        this._scrivitoPrivateContent.and(field, operator, unwrappedValue, boost);
        return this;
    };
    ObjSearch.prototype.andNot = function (field, operator, value) {
        var unwrappedValue = unwrapAppClassValue(value);
        this._scrivitoPrivateContent.andNot(field, operator, unwrappedValue);
        return this;
    };
    ObjSearch.prototype.boost = function (field, operator, value, factor) {
        this._scrivitoPrivateContent.boost(field, operator, unwrapAppClassValue(value), factor);
        return this;
    };
    ObjSearch.prototype.facet = function (attribute, options) {
        var basicFacets = this._scrivitoPrivateContent.facet(attribute, options);
        return basicFacets.map(function (facetValue) { return new ObjFacetValue(facetValue); });
    };
    ObjSearch.prototype.suggest = function (prefix, options) {
        return this._scrivitoPrivateContent.suggest(prefix, options);
    };
    ObjSearch.prototype.first = function () {
        var basicObj = this._scrivitoPrivateContent.first();
        if (!basicObj)
            return null;
        return wrapInAppClass(basicObj);
    };
    /** @internal */
    ObjSearch.prototype.take = function (count) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkTakeArguments.apply(void 0, __spreadArray([count], excessArgs, false));
        var basicObjs = count === undefined
            ? this._scrivitoPrivateContent.dangerouslyUnboundedTake()
            : this._scrivitoPrivateContent.take(count);
        return basicObjs.map(function (obj) { return wrapInAppClass(obj); });
    };
    ObjSearch.prototype.toArray = function () {
        var basicObjs = this._scrivitoPrivateContent.dangerouslyUnboundedTake();
        return basicObjs.map(function (obj) { return wrapInAppClass(obj); });
    };
    ObjSearch.prototype.offset = function (offset) {
        this._scrivitoPrivateContent.offset(offset);
        return this;
    };
    /** @internal */
    ObjSearch.prototype.order = function (attributeOrAttributes, direction) {
        if (Array.isArray(attributeOrAttributes)) {
            if (direction !== undefined) {
                throw new common/* ArgumentError */.ir('Direction can not be set independent of attributes.');
            }
            this._scrivitoPrivateContent.order(attributeOrAttributes);
            return this;
        }
        this._scrivitoPrivateContent.order(attributeOrAttributes, direction);
        return this;
    };
    ObjSearch.prototype.count = function () {
        return this._scrivitoPrivateContent.count();
    };
    return ObjSearch;
}());

// check if the environment supports ES6 iterables
// (either native or through some kind of polyfill)
// if yes, make ObjSearch an ES6 iterable.
if (typeof Symbol === 'function') {
    var iteratorSymbol = Symbol.iterator;
    if (iteratorSymbol) {
        // type 'ObjSearch' has no index signature
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var proto = ObjSearch.prototype;
        // public API
        proto[iteratorSymbol] = function iterator() {
            var basicObjsIterator = this._scrivitoPrivateContent.iterator();
            return {
                next: function () {
                    var iteratorResult = basicObjsIterator.next();
                    if (iteratorResult.done) {
                        return { done: iteratorResult.done };
                    }
                    return {
                        done: iteratorResult.done,
                        value: wrapInAppClass(iteratorResult.value),
                    };
                },
            };
        };
    }
}
// A direct call to `unwrapAppClass` is unable to infer a correct return value type for input `Obj[]`
function unwrapAppClassValue(value) {
    if (Array.isArray(value))
        return value.map(function (v) { return unwrapAppClass(v); });
    return unwrapAppClass(value);
}
var OperatorAllowedInNonFullTextSearch = common/* tcomb.refinement */.pC.refinement(common/* tcomb.String */.pC.String, function (searchOperator) {
    return searchOperator !== 'contains' && searchOperator !== 'containsPrefix';
}, 'Search operators except "contains" and "containsPrefix"');
function checkNonFullTextSearchOperator(functionName, operator, docPermalink) {
    return (0,common/* checkArgumentsFor */.PJ)(functionName, [['operator', common/* tcomb.maybe */.pC.maybe(OperatorAllowedInNonFullTextSearch)]], {
        docPermalink: docPermalink,
    })(operator);
}
function checkFullTextSearchOperator(functionName, operator, docPermalink) {
    return (0,common/* checkArgumentsFor */.PJ)(functionName, [['operator', common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(models/* FULL_TEXT_OPERATORS */.jS))]], {
        docPermalink: docPermalink,
    })(operator);
}
var checkTakeArguments = (0,common/* checkArgumentsFor */.PJ)('objSearch.take', [['count', common/* tcomb.maybe */.pC.maybe(common/* NonNegativeInteger */.tT)]], {
    docPermalink: 'js-sdk/ObjSearch-take',
});

;// CONCATENATED MODULE: ./scrivito_sdk/realm/basic_site_context.ts
var basic_site_context_assign = (undefined && undefined.__assign) || function () {
    basic_site_context_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_site_context_assign.apply(this, arguments);
};







var BasicSiteContext = /** @class */ (function () {
    function BasicSiteContext(objClass, scopeIncludingDeletedObjs) {
        this.objClass = objClass;
        this.scopeIncludingDeletedObjs = scopeIncludingDeletedObjs;
    }
    BasicSiteContext.prototype.get = function (id) {
        return this.getObj(id, this.scope());
    };
    BasicSiteContext.prototype.getIncludingDeleted = function (id) {
        return this.getObj(id, this.scopeIncludingDeletedObjs);
    };
    BasicSiteContext.prototype.getByPath = function (path) {
        var obj = (0,models/* getObjBy */.HG)(this.scope().and(models/* excludeGlobal */.U2), '_path', path);
        return wrapInAppClass(obj);
    };
    BasicSiteContext.prototype.getByPermalink = function (permalink) {
        var obj = (0,models/* getObjBy */.HG)(this.scope(), '_permalink', permalink);
        return wrapInAppClass(obj);
    };
    BasicSiteContext.prototype.root = function () {
        return wrapInAppClass((0,models/* getRootObjFrom */.cS)(this.scope()));
    };
    BasicSiteContext.prototype.all = function () {
        return this.getSearch(1000);
    };
    BasicSiteContext.prototype.where = function (attribute, operator, value, boost) {
        return this.getSearch().and(attribute, operator, value, boost);
    };
    BasicSiteContext.prototype.whereFullTextOf = function (attribute, operator, value, boost) {
        return this.getSearch().andFullTextOf(attribute, operator, value, boost);
    };
    BasicSiteContext.prototype.create = function (attributes) {
        if (attributes === void 0) { attributes = {}; }
        var objClassName = this.objClassNameForCreate();
        assertValidCreateAttributes(attributes);
        var attributesForCreate = prepareAttributesForCreate(attributes, objClassName, 
        // Bang: objClassNameForCreate above ensures that it's a subclass of Obj
        Schema.forClass(this.objClass));
        var basicObj = (0,models/* createObjIn */.f_)(this.scope().and((0,models/* restrictToObjClass */.lD)(objClassName)), attributesForCreate);
        return wrapInAppClass(basicObj);
    };
    BasicSiteContext.prototype.createFromFile = function (file, attributes) {
        if (attributes === void 0) { attributes = {}; }
        var objClassName = this.objClassNameForCreate();
        assertValidFile(file);
        assertValidCreateAttributes(attributes);
        if (Object.prototype.hasOwnProperty.call(attributes, 'blob')) {
            throw new common/* ArgumentError */.ir('Setting attribute "blob" is not allowed when creating CMS objects from file, ' +
                'because the file will be assigned to that attribute');
        }
        // Bang: objClassNameForCreate above ensures that it's a subclass of Obj
        var schema = Schema.forClass(this.objClass);
        if (!schema.isBinary()) {
            throw new common/* ArgumentError */.ir('Creating CMS objects from file is only available for classes with a binary attribute "blob"');
        }
        var attributesForCreate = prepareAttributesForCreate(attributes, objClassName, schema);
        return (0,models/* createObjFromFileIn */.Yz)(this.scope().and((0,models/* restrictToObjClass */.lD)(objClassName)), file, attributesForCreate).then(function (basicObj) { return wrapInAppClass(basicObj); });
    };
    BasicSiteContext.prototype.toSiteContext = function () {
        return {
            get: this.get.bind(this),
            getIncludingDeleted: this.getIncludingDeleted.bind(this),
            getByPath: this.getByPath.bind(this),
            getByPermalink: this.getByPermalink.bind(this),
            root: this.root.bind(this),
            all: this.all.bind(this),
            where: this.where.bind(this),
            whereFullTextOf: this.where.bind(this),
            create: this.create.bind(this),
            createFromFile: this.createFromFile.bind(this),
        };
    };
    BasicSiteContext.prototype.getObj = function (id, scope) {
        return wrapInAppClass((0,models/* getObjFrom */.R2)(this.getScopeRestrictedToSameClass(scope), id));
    };
    BasicSiteContext.prototype.getSearch = function (batchSize) {
        var search = this.getScopeRestrictedToSameClass(this.scope()).search();
        if (batchSize !== undefined)
            search.batchSize(batchSize);
        return new ObjSearch(search);
    };
    BasicSiteContext.prototype.getScopeRestrictedToSameClass = function (scope) {
        var objClassName = this.objClassName();
        return objClassName ? scope.and((0,models/* restrictToObjClass */.lD)(objClassName)) : scope;
    };
    BasicSiteContext.prototype.objClassName = function () {
        return objClassNameFor(this.objClass);
    };
    BasicSiteContext.prototype.objClassNameForCreate = function () {
        var objClassName = this.objClassName();
        if (!objClassName) {
            throw new common/* ArgumentError */.ir('Use a specific class (like Page or Image) in order to create an Obj.');
        }
        return objClassName;
    };
    BasicSiteContext.prototype.scope = function () {
        return this.scopeIncludingDeletedObjs.and(models/* excludeDeletedObjs */.E2);
    };
    return BasicSiteContext;
}());

function prepareAttributesForCreate(appAttributes, appClassName, schema) {
    var initialAttributes = initialAttributesFor(appAttributes, schema, appClassName);
    var createAttributes = basic_site_context_assign(basic_site_context_assign({}, appAttributes), initialAttributes);
    return unwrapAppAttributes(createAttributes, schema, appClassName);
}
function assertValidCreateAttributes(attributes) {
    if (attributes.constructor !== Object) {
        throw new common/* ArgumentError */.ir('The provided attributes are invalid. They have ' +
            'to be an Object with valid Scrivito attribute values.');
    }
    if (attributes._objClass) {
        throw new common/* ArgumentError */.ir('Invalid attribute "_objClass". ' +
            ("\"" + attributes._objClass + ".create\" will automatically set the CMS object class ") +
            'correctly.');
    }
}
function assertValidFile(file) {
    if (!common/* FileType.is */.Tv.is(file)) {
        if (common/* BlobType.is */.R0.is(file)) {
            throw new common/* ArgumentError */.ir('Creating CMS objects from file is only available with instances of "File", ' +
                'but an instance of "Blob" is given');
        }
        throw new common/* ArgumentError */.ir('Creating CMS objects from file is only available with instances of "File"');
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/current_site_id.ts
var siteIdHandler;
/** returns the id of the current site.
 * `null` indicates "site not found".
 * Needs loading context.
 */
function currentSiteId() {
    return siteIdHandler();
}
function setCurrentSiteIdHandler(handler) {
    siteIdHandler = handler;
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/obj.ts
var obj_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};










function currentSiteContext(objClass) {
    var siteId = currentSiteId();
    if (!siteId)
        return new BasicSiteContext(objClass, (0,models/* emptyScope */.Ti)());
    return getBasicSiteContext(objClass, (0,models/* restrictToSiteAndGlobal */.L8)(siteId));
}
function getSiteContext(objClass, transformation) {
    return getBasicSiteContext(objClass, transformation).toSiteContext();
}
function getBasicSiteContext(objClass, transformation) {
    var scope = (0,models/* objSpaceScope */.hA)((0,models/* currentObjSpaceId */.GD)()).and(transformation);
    return new BasicSiteContext(objClass, scope);
}
/** @public */
var Obj = /** @class */ (function () {
    function Obj() {
    }
    Obj.get = function (id) {
        return currentSiteContext(this).get(id);
    };
    /** @internal */
    Obj.getIncludingDeleted = function (id) {
        return currentSiteContext(this).getIncludingDeleted(id);
    };
    Obj.getByPath = function (path) {
        return currentSiteContext(this).getByPath(path);
    };
    Obj.getByPermalink = function (permalink) {
        return currentSiteContext(this).getByPermalink(permalink);
    };
    Obj.all = function () {
        return currentSiteContext(this).all();
    };
    Obj.root = function () {
        return currentSiteContext(this).root();
    };
    Obj.where = function (attribute, operator, value, boost) {
        if (areStrictSearchOperatorsEnabled()) {
            checkNonFullTextSearchOperator('Obj.where', operator, 'js-sdk/Obj-where');
        }
        return currentSiteContext(this).where(attribute, operator, value, boost);
    };
    Obj.whereFullTextOf = function (attribute, operator, value, boost) {
        checkFullTextSearchOperator('Obj.whereFullTextOf', operator, 'js-sdk/Obj-whereFullTextOf');
        return currentSiteContext(this).whereFullTextOf(attribute, operator, value, boost);
    };
    Obj.create = function (attributes) {
        return currentSiteContext(this).create(attributes);
    };
    Obj.createFromFile = function (file, attributes) {
        return currentSiteContext(this).createFromFile(file, attributes);
    };
    Obj.onAllSites = function () {
        return getSiteContext(this, models/* allSitesAndGlobal */.T8);
    };
    Obj.onSite = function (siteId) {
        checkObjOnSite(siteId);
        return getSiteContext(this, (0,models/* restrictToSiteAndGlobal */.L8)(siteId));
    };
    Obj.prototype.id = function () {
        return this._scrivitoPrivateContent.id();
    };
    Obj.prototype.objClass = function () {
        return this._scrivitoPrivateContent.objClass();
    };
    Obj.prototype.get = function (attributeName) {
        assertValidAttributeName(attributeName);
        return readAppAttribute(this, attributeName);
    };
    Obj.prototype.update = function (attributes) {
        updateAppAttributes(this, attributes);
    };
    Obj.prototype.versionsOnAllSites = function () {
        return wrapInAppClass((0,models/* versionsOnAllSites */.s1)(this._scrivitoPrivateContent));
    };
    Obj.prototype.versionOnSite = function (siteId) {
        checkVersionOnSite(siteId);
        return wrapInAppClass((0,models/* versionOnSite */.OW)(this._scrivitoPrivateContent, siteId));
    };
    Obj.prototype.createdAt = function () {
        return this._scrivitoPrivateContent.createdAt();
    };
    Obj.prototype.firstPublishedAt = function () {
        return this._scrivitoPrivateContent.firstPublishedAt();
    };
    Obj.prototype.publishedAt = function () {
        return this._scrivitoPrivateContent.publishedAt();
    };
    Obj.prototype.lastChanged = function () {
        return this._scrivitoPrivateContent.lastChanged();
    };
    Obj.prototype.path = function () {
        return this._scrivitoPrivateContent.path();
    };
    Obj.prototype.parent = function () {
        return wrapInAppClass(this._scrivitoPrivateContent.parent());
    };
    Obj.prototype.ancestors = function () {
        return this._scrivitoPrivateContent
            .ancestors()
            .map(function (maybeObj) { return wrapInAppClass(maybeObj); });
    };
    /**
     * Resolves when all previous updates have been persisted.
     * If an update fails the promise is rejected.
     */
    Obj.prototype.finishSaving = function () {
        return this._scrivitoPrivateContent.finishSaving();
    };
    Obj.prototype.modification = function () {
        return this._scrivitoPrivateContent.modification();
    };
    Obj.prototype.backlinks = function () {
        return wrapInAppClass(this._scrivitoPrivateContent.backlinks());
    };
    Obj.prototype.children = function () {
        return wrapInAppClass(this._scrivitoPrivateContent.children());
    };
    Obj.prototype.permalink = function () {
        return this._scrivitoPrivateContent.permalink();
    };
    Obj.prototype.siteId = function () {
        return this._scrivitoPrivateContent.siteId();
    };
    Obj.prototype.language = function () {
        return this._scrivitoPrivateContent.language();
    };
    Obj.prototype.slug = function () {
        return this._scrivitoPrivateContent.slug();
    };
    Obj.prototype.isBinary = function () {
        var schema = Schema.forInstance(this);
        if (!schema)
            return false;
        return schema.isBinary();
    };
    Obj.prototype.isRestricted = function () {
        return this._scrivitoPrivateContent.isRestricted();
    };
    Obj.prototype.contentLength = function () {
        if (this.isBinary())
            return this._scrivitoPrivateContent.contentLength();
        return 0;
    };
    Obj.prototype.contentType = function () {
        if (this.isBinary())
            return this._scrivitoPrivateContent.contentType();
        return '';
    };
    Obj.prototype.contentUrl = function () {
        if (this.isBinary())
            return this._scrivitoPrivateContent.contentUrl();
        return '';
    };
    Obj.prototype.contentId = function () {
        return this._scrivitoPrivateContent.contentId();
    };
    Obj.prototype.metadata = function () {
        if (this.isBinary())
            return this._scrivitoPrivateContent.metadata();
        return new models/* MetadataCollection */.LG();
    };
    Obj.prototype.restrict = function () {
        this._scrivitoPrivateContent.restrict();
    };
    Obj.prototype.unrestrict = function () {
        this._scrivitoPrivateContent.unrestrict();
    };
    /** @internal */
    Obj.prototype.updateReferences = function (mapping) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkUpdateReferences.apply(void 0, obj_spreadArray([mapping], excessArgs, false));
        return (0,models/* updateReferences */.Nv)(this._scrivitoPrivateContent, mapping);
    };
    Obj.prototype.widget = function (id) {
        var maybeWidget = this._scrivitoPrivateContent.widget(id);
        return maybeWidget && wrapInAppClass(maybeWidget);
    };
    Obj.prototype.widgets = function () {
        return wrapInAppClass(this._scrivitoPrivateContent.widgets());
    };
    Obj.prototype.copy = function () {
        return this._scrivitoPrivateContent
            .copyAsync({ _path: null })
            .then(function (obj) { return wrapInAppClass(obj); });
    };
    Obj.prototype.destroy = function () {
        this._scrivitoPrivateContent.destroy();
    };
    return Obj;
}());

var checkObjOnSite = (0,common/* checkArgumentsFor */.PJ)('Obj.onSite', [['siteId', common/* tcomb.String */.pC.String]], {
    docPermalink: 'js-sdk/Obj-static-onSite',
});
var checkUpdateReferences = (0,common/* checkArgumentsFor */.PJ)('obj.updateReferences', [['mapping', common/* tcomb.Function */.pC.Function]], {
    docPermalink: 'js-sdk/Obj-updateReferences',
});
var checkVersionOnSite = (0,common/* checkArgumentsFor */.PJ)('obj.versionOnSite', [['siteId', common/* tcomb.String */.pC.String]], {
    docPermalink: 'js-sdk/Obj-versionOnSite',
});

;// CONCATENATED MODULE: ./scrivito_sdk/realm/link.ts
var link_assign = (undefined && undefined.__assign) || function () {
    link_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return link_assign.apply(this, arguments);
};
var link_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




/** @public */
var Link = /** @class */ (function () {
    function Link(attributes) {
        var basicAttributes = toBasicAttributes(attributes);
        this._scrivitoPrivateContent = new models/* BasicLink */.AM(basicAttributes);
    }
    Link.prototype.title = function () {
        return this._scrivitoPrivateContent.title();
    };
    Link.prototype.query = function () {
        return this._scrivitoPrivateContent.query();
    };
    Link.prototype.hash = function () {
        return this._scrivitoPrivateContent.hash();
    };
    Link.prototype.rel = function () {
        return this._scrivitoPrivateContent.rel();
    };
    Link.prototype.target = function () {
        return this._scrivitoPrivateContent.target();
    };
    Link.prototype.url = function () {
        return this._scrivitoPrivateContent.url();
    };
    Link.prototype.obj = function () {
        var obj = this._scrivitoPrivateContent.obj();
        return obj instanceof models/* BasicObj */.Jj ? wrapInAppClass(obj) : null;
    };
    Link.prototype.queryParameters = function () {
        return this._scrivitoPrivateContent.queryParameters();
    };
    Link.prototype.copy = function (attributes) {
        var basicLink = this._scrivitoPrivateContent.copy(toBasicAttributes(attributes));
        var link = Object.create(Link.prototype);
        link._scrivitoPrivateContent = basicLink;
        return link;
    };
    Link.prototype.isExternal = function () {
        return this._scrivitoPrivateContent.isExternal();
    };
    Link.prototype.isInternal = function () {
        return this._scrivitoPrivateContent.isInternal();
    };
    return Link;
}());

var ALLOWED_ATTRIBUTES = [
    'hash',
    'obj',
    'query',
    'rel',
    'target',
    'title',
    'url',
];
function assertValidPublicAttributes(attributes) {
    var unknownAttrs = external_underscore_.without.apply(void 0, link_spreadArray([Object.keys(attributes)], ALLOWED_ATTRIBUTES, false));
    if (!(0,external_underscore_.isEmpty)(unknownAttrs)) {
        throw new common/* ArgumentError */.ir("Unexpected attributes " + (0,common/* prettyPrint */.xr)(unknownAttrs) + "." +
            (" Available attributes: " + (0,common/* prettyPrint */.xr)(ALLOWED_ATTRIBUTES)));
    }
}
function toBasicAttributes(attributes) {
    assertValidPublicAttributes(attributes);
    if ((0,external_underscore_.has)(attributes, 'obj')) {
        return link_assign(link_assign({}, attributes), { objId: objIdFromObjValue(attributes.obj) });
    }
    return attributes;
}
function objIdFromObjValue(obj) {
    if (!obj)
        return null;
    return unwrapAppClass(obj).id();
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/app_class_api_check.ts
var _a;


var noop = function () { };
var checkCreateWidgetClass = (_a = (function () {
    if (process.env.NODE_ENV !== 'development') {
        return {
            checkCreateWidgetClass: noop,
            checkCreateObjClass: noop,
            checkProvideObjClass: noop,
            checkProvideWidgetClass: noop,
        };
    }
    var ObjClassType = common/* tcomb.refinement */.pC.refinement(common/* tcomb.Function */.pC.Function, isAppClass, 'ObjClass');
    var ObjClassDefinitionType = common/* tcomb.interface */.pC["interface"]({
        attributes: common/* tcomb.maybe */.pC.maybe(common/* tcomb.dict */.pC.dict(common/* tcomb.refinement */.pC.refinement(common/* tcomb.String */.pC.String, isCustomAttributeName, 'String (alphanumeric, starting with a lower-case character)'), common/* tcomb.union */.pC.union([
            common/* tcomb.enums.of */.pC.enums.of([
                'binary',
                'boolean',
                'date',
                'datetime',
                'float',
                'html',
                'integer',
                'link',
                'linklist',
                'reference',
                'referencelist',
                'string',
                'stringlist',
                'widgetlist',
            ]),
            common/* tcomb.tuple */.pC.tuple([
                common/* tcomb.enums.of */.pC.enums.of(['enum', 'multienum']),
                common/* tcomb.interface */.pC["interface"]({
                    values: common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String),
                }),
            ]),
            common/* tcomb.tuple */.pC.tuple([
                common/* tcomb.enums.of */.pC.enums.of(['reference', 'referencelist']),
                common/* tcomb.interface */.pC["interface"]({
                    only: common/* tcomb.union */.pC.union([common/* tcomb.String */.pC.String, common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)]),
                }),
            ]),
            common/* tcomb.tuple */.pC.tuple([
                common/* tcomb.enums.of */.pC.enums.of(['widgetlist']),
                common/* tcomb.interface */.pC["interface"]({
                    only: common/* tcomb.union */.pC.union([common/* tcomb.String */.pC.String, common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)]),
                }),
            ]),
        ]), 'Attributes Specification')),
        extractTextAttributes: common/* tcomb.maybe */.pC.maybe(common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)),
        extend: common/* tcomb.maybe */.pC.maybe(ObjClassType),
        onlyAsRoot: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
        onlyChildren: common/* tcomb.maybe */.pC.maybe(common/* tcomb.union */.pC.union([common/* tcomb.String */.pC.String, common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)])),
        onlyInside: common/* tcomb.maybe */.pC.maybe(common/* tcomb.union */.pC.union([common/* tcomb.String */.pC.String, common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)])),
        validAsRoot: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
    });
    var WidgetClassType = common/* tcomb.refinement */.pC.refinement(common/* tcomb.Function */.pC.Function, isAppClass, 'WidgetClass');
    var WidgetClassDefinitionType = common/* tcomb.interface */.pC["interface"]({
        attributes: ObjClassDefinitionType.meta.props.attributes,
        extractTextAttributes: common/* tcomb.maybe */.pC.maybe(common/* tcomb.list */.pC.list(common/* tcomb.String */.pC.String)),
        extend: common/* tcomb.maybe */.pC.maybe(WidgetClassType),
        onlyInside: common/* tcomb.maybe */.pC.maybe(common/* tcomb.union */.pC.union([common/* tcomb.String */.pC.String, common/* tcomb.Array */.pC.Array])),
    });
    return {
        checkCreateObjClass: (0,common/* checkArgumentsFor */.PJ)('createObjClass', [['definition', ObjClassDefinitionType]], {
            docPermalink: 'js-sdk/createObjClass',
        }),
        checkCreateWidgetClass: (0,common/* checkArgumentsFor */.PJ)('createWidgetClass', [['definition', WidgetClassDefinitionType]], {
            docPermalink: 'js-sdk/createWidgetClass',
        }),
        checkProvideObjClass: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            checkProvideClass('objClass', ObjClassType, ObjClassDefinitionType, args);
        },
        checkProvideWidgetClass: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            checkProvideClass('widgetClass', WidgetClassType, WidgetClassDefinitionType, args);
        },
    };
})(), _a.checkCreateWidgetClass), checkCreateObjClass = _a.checkCreateObjClass, checkProvideObjClass = _a.checkProvideObjClass, checkProvideWidgetClass = _a.checkProvideWidgetClass;
function checkProvideClass(name, classType, definitionType, args) {
    var className = (0,common/* classify */.xk)(name);
    var classOrDefinition = args[1];
    var check = (0,common/* checkArgumentsFor */.PJ)("provide" + className, [
        ['name', common/* tcomb.String */.pC.String],
        typeof classOrDefinition === 'function' && isAppClass(classOrDefinition)
            ? ['class', classType]
            : typeof classOrDefinition === 'object' && classOrDefinition !== null
                ? ['definition', definitionType]
                : [
                    name + "OrDefinition",
                    common/* tcomb.union */.pC.union([classType, definitionType], className),
                ],
    ], {
        docPermalink: "js-sdk/provide" + className,
    });
    check.apply(void 0, args);
}
function isCustomAttributeName(name) {
    return /^[a-z](_+[A-Z0-9]|[A-Za-z0-9])*$/.test(name);
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/assert_valid_extract_text_attributes.ts


var ATTRIBUTE_TYPES_WHITELIST = ['string', 'html', 'widgetlist'];
function assertValidObjExtractTextAttributes(schema) {
    schema.extractTextAttributes.forEach(function (attribute) {
        if (attribute.substring(0, 5) === 'blob:') {
            return assertValidBinaryAttribute(schema, attribute);
        }
        assertValidExtractTextAttribute(attribute, schema.attribute(attribute));
    });
}
function assertValidWidgetExtractTextAttributes(schema) {
    schema.extractTextAttributes.forEach(function (attribute) {
        if (attribute.substring(0, 5) === 'blob:') {
            throw new common/* ArgumentError */.ir("Invalid value for \"extractTextAttributes\": " + attribute + " is not supported.");
        }
        assertValidExtractTextAttribute(attribute, schema.attribute(attribute));
    });
}
function assertValidBinaryAttribute(schema, extractTextAttribute) {
    if (extractTextAttribute === 'blob:text') {
        if (schema.isBinary())
            return;
        throw new common/* ArgumentError */.ir('Invalid value for "extractTextAttributes": blob:text is only supported for binary objs.');
    }
    throw new common/* ArgumentError */.ir("Invalid value for \"extractTextAttributes\": " + extractTextAttribute + " is not supported.");
}
function assertValidExtractTextAttribute(attribute, definition) {
    if (!definition) {
        throw new common/* ArgumentError */.ir("Invalid value for \"extractTextAttributes\": Attribute " + attribute + " is not defined.");
    }
    var attributeType = definition[0];
    if ((0,external_underscore_.contains)(ATTRIBUTE_TYPES_WHITELIST, attributeType))
        return;
    throw new common/* ArgumentError */.ir("Invalid value for \"extractTextAttributes\": Attribute " + attribute + " of type " + attributeType + " is not supported.");
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/realm.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var realm_assign = (undefined && undefined.__assign) || function () {
    realm_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return realm_assign.apply(this, arguments);
};
var realm_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







/** @internal */
function provideObjClass(name, definition) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    checkProvideObjClass.apply(void 0, realm_spreadArray([name, definition], excessArgs, false));
    var appClass = isAppClass(definition)
        ? definition
        : createAppObjClass(realm_assign(realm_assign({}, definition), { name: name }));
    registerClass(name, appClass);
    return appClass;
}
/** @internal */
function provideWidgetClass(name, definition) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    checkProvideWidgetClass.apply(void 0, realm_spreadArray([name, definition], excessArgs, false));
    var appClass = isAppClass(definition)
        ? definition
        : createAppWidgetClass(realm_assign(realm_assign({}, definition), { name: name }));
    registerClass(name, appClass);
    return appClass;
}
/** @internal */
function createObjClass(definition) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkCreateObjClass.apply(void 0, realm_spreadArray([definition], excessArgs, false));
    return createAppObjClass(definition);
}
/** @internal */
function createWidgetClass(definition) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkCreateWidgetClass.apply(void 0, realm_spreadArray([definition], excessArgs, false));
    return createAppWidgetClass(definition);
}
function createAppObjClass(definition) {
    if (definition.extend && !isOrExtends(definition.extend, Obj)) {
        throw new common/* ArgumentError */.ir('Invalid value for "extend": not a Scrivito Obj class');
    }
    if (definition.onlyInside && isBinary(definition)) {
        throw new common/* ArgumentError */.ir('onlyInside must not be specified for binary object classes.');
    }
    if (definition.onlyChildren && isBinary(definition)) {
        throw new common/* ArgumentError */.ir('onlyChildren must not be specified for binary object classes.');
    }
    if (definition.onlyAsRoot === true && definition.validAsRoot === false) {
        throw new common/* ArgumentError */.ir('validAsRoot must not be set to false for an object class permitted onlyAsRoot.');
    }
    if (definition.onlyAsRoot && isBinary(definition)) {
        throw new common/* ArgumentError */.ir('onlyAsRoot must not be specified for binary object classes.');
    }
    if (definition.validAsRoot && isBinary(definition)) {
        throw new common/* ArgumentError */.ir('validAsRoot must not be specified for binary object classes.');
    }
    var baseClass = definition.extend || Obj;
    var schema = new Schema(definition, baseClass);
    assertValidObjExtractTextAttributes(schema);
    // we can only use the non-specific names `Obj` or `Widget` for AppClasses.
    // it's not possible to dynamically name a class in ES5 (or anything transpiled to ES5)
    // compare: // https://stackoverflow.com/questions/5871040
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return /** @class */ (function (_super) {
        __extends(Obj, _super);
        function Obj() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Obj, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: false,
            configurable: true
        });
        return Obj;
    }(baseClass));
}
function createAppWidgetClass(definition) {
    if (definition.extend && !isOrExtends(definition.extend, Widget)) {
        throw new common/* ArgumentError */.ir('Invalid value for "extend": not a Scrivito Widget class');
    }
    var baseClass = definition.extend || Widget;
    var schema = new Schema(definition, baseClass);
    assertValidWidgetExtractTextAttributes(schema);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return /** @class */ (function (_super) {
        __extends(Widget, _super);
        function Widget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Widget, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: false,
            configurable: true
        });
        return Widget;
    }(baseClass));
}
function isOrExtends(maybeClass, klass) {
    if (!maybeClass)
        return false;
    if (maybeClass === klass)
        return true;
    return maybeClass.prototype instanceof klass;
}
function isBinary(definition) {
    var _a;
    return ((_a = definition.attributes) === null || _a === void 0 ? void 0 : _a.blob) === 'binary';
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/schema_from_basic_obj_or_widget.ts

function schemaFromBasicObjOrWidget(objOrWidget) {
    var className = objOrWidget.objClass();
    if (!className)
        return;
    var widgetClass = getClass(className);
    if (!widgetClass)
        return;
    return Schema.forClass(widgetClass);
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/is_binary_basic_obj.ts

function isBinaryBasicObj(basicObj) {
    var schema = schemaFromBasicObjOrWidget(basicObj);
    return !!schema && schema.isBinary();
}

;// CONCATENATED MODULE: ./scrivito_sdk/realm/index.ts















/***/ }),

/***/ 1109:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ setInitialContentFor; },
/* harmony export */   "W": function() { return /* binding */ initialContentFor; }
/* harmony export */ });
var initialContentForFn = function () { return undefined; };
function setInitialContentFor(value) {
    initialContentForFn = value;
}
function initialContentFor(className, attributeName) {
    return initialContentForFn(className, attributeName);
}


/***/ }),

/***/ 7227:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NB": function() { return /* reexport */ addBatchUpdate; },
  "dF": function() { return /* reexport */ createAsyncSubscriber; },
  "JH": function() { return /* reexport */ createStateContainer; },
  "GS": function() { return /* reexport */ createSyncSubscriber; },
  "un": function() { return /* reexport */ failIfFrozen; },
  "n2": function() { return /* reexport */ globalState; },
  "N7": function() { return /* reexport */ observe; },
  "M5": function() { return /* reexport */ observeSync; },
  "cC": function() { return /* reexport */ trackStateAccess; },
  "tH": function() { return /* reexport */ withBatchedUpdates; },
  "sc": function() { return /* reexport */ withFrozenState; }
});

// UNUSED EXPORTS: StateChangePreventedError, StateReference, createNotificationCounter, listenerCount, resetGlobalState

// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/state/primitive_value.ts
function isPrimitiveObject(value) {
    return (value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !instanceOfClass(value));
}
function instanceOfClass(object) {
    // Instances of class have a prototype chain of length 2 or more, e.g.
    // Instance --> SomeClass --> Object
    //
    // A primitive object has a prototype chain of length 1:
    // Instance --> Object
    //
    // Note that it would be unwise to hardcode a check for `Object`, as there are
    // multiple `Object` classes, one for each iFrame.
    var proto = Object.getPrototypeOf(object);
    if (proto === null) {
        // no prototype chain? does not happen usually, but who knows...
        return false;
    }
    // if prototype chain has length 1,
    // we assume that it's a direct instance of Object and not from some class.
    return Object.getPrototypeOf(proto) !== null;
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/conservative_update.ts

// Given a primitive value `current` and a primitive value `next`,
// this method produces a result primitive value, which is
// * equal to next
// * independent from `next`
//   -> it does not reuse any Objects or Arrays from `next`
// * as identical to `current` as possible
//   -> it reuses as many Objects and Arrays of `current` as possible
//   -> but it mutates neither `current` nor `next`
// * frozen (as in Object.freeze)
//   -> Any newly created Objects and Arrays are frozen, so the result is deep-frozen,
//      assuming that all Objects and Arrays inside `current` are frozen already.
function conservativeUpdate(current, next) {
    // this method works on the assumption that you pass in primitive data, i.e.
    // * plain Objects, not instances of classes
    // * plain Arrays, not some crazy subtypes of Array
    //
    // TS, however, cannot express that effectively,
    // therefore using `any` to turn off type check.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return updateValue(current, next);
}
function updateValue(current, next) {
    if (current === next) {
        // performance optimization, avoid deep comparison
        return next;
    }
    if (isPrimitiveObject(next)) {
        return updateObject(isPrimitiveObject(current) ? current : undefined, next);
    }
    if (Array.isArray(next)) {
        return updateArray(Array.isArray(current) ? current : undefined, next);
    }
    return next;
}
function updateObject(current, next) {
    var updated = {};
    var foundDiff = false;
    if (current === undefined) {
        foundDiff = true;
    }
    var nextKeys = Object.keys(next);
    var currentKeys = new Set();
    if (current) {
        Object.keys(current).forEach(function (key) { return currentKeys.add(key); });
    }
    if (currentKeys.size !== nextKeys.length) {
        foundDiff = true;
    }
    nextKeys.forEach(function (key) {
        if (!currentKeys.has(key)) {
            foundDiff = true;
        }
        var currentValue = current ? current[key] : undefined;
        var updatedValue = updateValue(currentValue, next[key]);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        updated[key] = updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result has every key in next, it is now T, not just Partial<T>
    // (assuming that T is a primitive Object, not some subtype of Object)
    return result;
}
function updateArray(current, next) {
    var foundDiff = false;
    if (current === undefined || current.length !== next.length) {
        foundDiff = true;
    }
    var updated = next.map(function (nextValue, index) {
        var currentValue = current ? current[index] : undefined;
        var updatedValue = updateValue(currentValue, nextValue);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        return updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result now has the same content as `next`, it is T
    // (assuming that T is a primitive Array, not some subtype of Array)
    return result;
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/frozen.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var frozenContextContainer = new common/* ContextContainer */.AY();
function withFrozenState(frozenContext, fn) {
    return frozenContextContainer.runWith(frozenContext, fn);
}
function failIfFrozen(operationName) {
    var frozenContext = frozenContextContainer.current();
    if (frozenContext) {
        var message = operationName + " is not permitted " +
            ("inside '" + frozenContext.contextName + "'. ") +
            (frozenContext.message || '');
        throw new StateChangePreventedError(message);
    }
}
var StateChangePreventedError = /** @class */ (function (_super) {
    __extends(StateChangePreventedError, _super);
    function StateChangePreventedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateChangePreventedError;
}(common/* ScrivitoError */.Ix));


// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(4952);
;// CONCATENATED MODULE: ./scrivito_sdk/state/copy_on_write_store.ts

var CopyOnWriteStore = /** @class */ (function () {
    function CopyOnWriteStore(value, copy) {
        this.value = value;
        this.copy = copy;
        this.valueForReading = new common/* ContextContainer */.AY();
    }
    /** run some code that needs to read the value.
     * the passed-in `value` is guaranteed not to change, i.e.
     * any concurrent writes won't become visible.
     */
    CopyOnWriteStore.prototype.read = function (fn) {
        var currentValue = this.value;
        return this.valueForReading.runWith(currentValue, function () { return fn(currentValue); });
    };
    /** run some code that modifies the value.
     * the modifications will not become visible to concurrent readers.
     */
    CopyOnWriteStore.prototype.write = function (fn) {
        if (this.valueForReading.current() === this.value) {
            // if there's currently someone reading the value,
            // make a copy before writing it
            this.value = this.copy(this.value);
        }
        fn(this.value);
    };
    return CopyOnWriteStore;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/state/subscriber_set.ts



var SubscriberSet = /** @class */ (function () {
    function SubscriberSet() {
        this.subscribersStore = new CopyOnWriteStore([], function (subscribers) { return subscribers.slice(); });
    }
    /** This method is exposed to other packages as
     * `createSyncSubscriber` and `createAsyncSubscriber`.
     */
    SubscriberSet.prototype.create = function (listener, rank) {
        if (rank === void 0) { rank = 0; }
        return new Subscriber(this, listener, rank);
    };
    SubscriberSet.prototype.count = function () {
        return this.subscribersStore.read(function (subscribers) { return subscribers.length; });
    };
    SubscriberSet.prototype.reset = function () {
        this.subscribersStore.write(function (subscribers) {
            subscribers.length = 0;
        });
    };
    SubscriberSet.prototype.forEach = function (fn) {
        this.subscribersStore.read(function (subscribers) { return subscribers.forEach(fn); });
    };
    SubscriberSet.prototype.add = function (subscriber) {
        this.subscribersStore.write(function (subscribers) {
            var index = (0,external_underscore_.sortedIndex)(subscribers, subscriber, 'rank');
            subscribers.splice(index, 0, subscriber);
        });
    };
    SubscriberSet.prototype.remove = function (subscriber) {
        this.subscribersStore.write(function (subscribers) {
            var index = subscribers.indexOf(subscriber);
            if (index >= 0) {
                subscribers.splice(index, 1);
            }
        });
    };
    return SubscriberSet;
}());

/** Subscriber is the internal implementation of the StateSubscriber interface. */
var Subscriber = /** @class */ (function () {
    function Subscriber(subscriberSet, listener, rank) {
        var _this = this;
        if (rank === void 0) { rank = 0; }
        this.subscriberSet = subscriberSet;
        this.listener = listener;
        this.rank = rank;
        this.scheduleNotify = (0,common/* collectAndSchedule */.Xq)(common/* nextTick */.Y3, function () { return _this.notify(); });
    }
    /** This method is exposed to other packages as
     * part of the StateSubscriber interface.
     */
    Subscriber.prototype.subscribeChanges = function (stateReference) {
        if (!this.activeReference)
            this.subscriberSet.add(this);
        this.activeReference = stateReference;
        if (this.hasChanges())
            this.listener();
    };
    /** This method is exposed to other packages as
     * part of the StateSubscriber interface.
     */
    Subscriber.prototype.unsubscribe = function () {
        if (!this.activeReference)
            return;
        this.subscriberSet.remove(this);
        this.activeReference = undefined;
    };
    Subscriber.prototype.notify = function () {
        if (this.activeReference)
            this.listener();
    };
    Subscriber.prototype.hasChanges = function () {
        var _a;
        return !!((_a = this.activeReference) === null || _a === void 0 ? void 0 : _a.hasChanges());
    };
    return Subscriber;
}());

;// CONCATENATED MODULE: ./scrivito_sdk/state/subscribers.ts



var syncSubscribers = new SubscriberSet();
var asyncSubscribers = new SubscriberSet();
/** create a new StateSubscriber that will invoke listeners _asynchronously_,
 * when changes happen to subscribed state.
 */
function createAsyncSubscriber(listener) {
    return asyncSubscribers.create(listener);
}
/** create a new StateSubscriber that will invoke listeners _synchronously_,
 * when changes happen to subscribed state.
 * You can pass in a `rank`, which influences the order, in which listeners are notified:
 * listeners with lower rank are notified before listeners with higher rank.
 */
function createSyncSubscriber(listener, rank) {
    if (rank === void 0) { rank = 0; }
    return syncSubscribers.create(listener, rank);
}
var batchUpdates = new common/* ContextContainer */.AY();
var notifiedDuringBatchUpdates = false;
function withBatchedUpdates(fn) {
    try {
        batchUpdates.runWith(true, fn);
    }
    finally {
        if (!batchUpdates.current() && notifiedDuringBatchUpdates) {
            notifiedDuringBatchUpdates = false;
            notifySubscribers();
        }
    }
}
var notificationCounter = 0;
// for test purposes
function createNotificationCounter() {
    var startedAt = notificationCounter;
    return function () { return notificationCounter - startedAt; };
}
// for test purposes only
function listenerCount() {
    return syncSubscribers.count() + asyncSubscribers.count();
}
function notifySubscribers() {
    if (batchUpdates.current()) {
        notifiedDuringBatchUpdates = true;
        return;
    }
    notificationCounter++;
    // listeners should not change state, at least not synchronously,
    // since that would create chaos, e.g. race condition between listeners,
    // breaking the one-way-flow of a reactive application, stack overflow etc.
    // you may use nextTick to make a state change asynchronously, though.
    withFrozenState({ contextName: 'state listeners' }, function () {
        notifySyncSubscribers();
        notifyAsyncSubscribers();
    });
}
function subscribers_resetSubscribers() {
    syncSubscribers.reset();
    asyncSubscribers.reset();
}
function notifySyncSubscribers() {
    syncSubscribers.forEach(function (subscriber) {
        if (subscriber.hasChanges())
            subscriber.notify();
    });
}
var notifyAsyncSubscribers = (0,common/* collectAndSchedule */.Xq)(common/* nextTick */.Y3, function () {
    return asyncSubscribers.forEach(function (subscriber) {
        if (subscriber.hasChanges())
            subscriber.scheduleNotify();
    });
});

;// CONCATENATED MODULE: ./scrivito_sdk/state/track_state_access.ts

var StateReference = /** @class */ (function () {
    function StateReference(detector) {
        this.detector = detector;
    }
    /** package private: don't call this from outside the 'state' package. */
    StateReference.prototype.hasChanges = function () {
        return this.detector();
    };
    return StateReference;
}());

/**
 * Executes the given function and tracks read access to state.
 * All state that is accessed while the function runs is considered "relevant".
 *
 * Returns a StateReference that can be used to subscribe to changes to the accessed state.
 */
function trackStateAccess(fn) {
    var _a = trackChanges(fn), detector = _a.detector, result = _a.result, accessCount = _a.accessCount;
    return {
        result: result,
        accessedState: new StateReference(detector),
        accessCount: accessCount,
    };
}
var detectorRecording = new common/* ContextContainer */.AY();
function recordDetector(detector) {
    var recording = detectorRecording.current();
    if (recording !== undefined) {
        recording.push(detector);
    }
}
function trackChanges(fn) {
    var _a = recordDetectors(fn), result = _a.result, detectors = _a.detectors;
    return {
        result: result,
        detector: function () { return detectors.some(function (detector) { return detector(); }); },
        accessCount: detectors.length,
    };
}
function recordDetectors(fn) {
    var detectors = [];
    var result = detectorRecording.runWith(detectors, fn);
    var outerRecording = detectorRecording.current();
    if (outerRecording !== undefined) {
        detectors.forEach(function (detector) { return outerRecording.push(detector); });
    }
    return { result: result, detectors: detectors };
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/state_tree.ts
var state_tree_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





// abstract interface for managing state
var AbstractStateStore = /** @class */ (function () {
    function AbstractStateStore() {
    }
    // return current state
    AbstractStateStore.prototype.get = function () {
        var _this = this;
        var valueWhenAccessed = this.untrackedGet();
        recordDetector(function () { return valueWhenAccessed !== _this.untrackedGet(); });
        return valueWhenAccessed;
    };
    AbstractStateStore.prototype.set = function (newState) {
        var currentState = this.untrackedGet();
        var updatedState = conservativeUpdate(currentState, newState);
        if (updatedState === currentState) {
            return;
        }
        this.uncheckedSet(updatedState);
    };
    // reset the state back to undefined
    AbstractStateStore.prototype.clear = function () {
        this.set(undefined);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.subState = function (key) {
        return new StateTreeNode(this, key);
    };
    AbstractStateStore.prototype.reader = function () {
        // identical implementation, different type
        return this;
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional (= may be undefined).
    AbstractStateStore.prototype.setSubState = function (key, newSubState) {
        var _a;
        var priorState = this.untrackedGet();
        if (priorState === undefined) {
            var newState = Object.freeze((_a = {}, _a[key] = newSubState, _a));
            // Since StateType is fully partial, newState is a valid StateType.
            // No way to tell TypeScript this, though.
            this.uncheckedSet(newState);
            return;
        }
        if (newSubState === undefined) {
            var priorKeys = Object.keys(priorState);
            if (priorKeys.length === 1 && priorKeys[0] === key) {
                // remove empty objects, avoid memory leak
                this.uncheckedSet(undefined);
                return;
            }
        }
        if (priorState === null) {
            // if StateType includes null, then it is not fully partial
            // and this methods should not be used!
            throw new common/* InternalError */.AQ();
        }
        var duplicate = __assign({}, priorState);
        // We know that duplicate isn't null or undefined
        var duplicateAsNonNull = duplicate;
        if (newSubState === undefined) {
            // remove undefined keys, avoid memory leak
            delete duplicateAsNonNull[key];
        }
        else {
            // Since StateType is fully partial, this is true:
            // (SubType<StateType, K> | undefined) == SubType<StateType, K>
            duplicateAsNonNull[key] = newSubState;
        }
        this.uncheckedSet(Object.freeze(duplicate));
    };
    AbstractStateStore.prototype.getSubState = function (key) {
        var state = this.untrackedGet();
        if (state !== undefined && state !== null) {
            // we know that state is neither null or undefined
            var nonNullState = state;
            var subState = nonNullState[key];
            // if T includes undefined, it is equal to (NotUndefined<T> | undefined)
            // if T does not include undefined, it is equal to NotUndefined<T>
            return subState;
        }
    };
    return AbstractStateStore;
}());
// a state tree, which can be used to store state.
// this is the root of the tree, which keeps the state of the entire tree.
var StateTree = /** @class */ (function (_super) {
    state_tree_extends(StateTree, _super);
    function StateTree() {
        return _super.call(this) || this;
    }
    StateTree.prototype.untrackedGet = function () {
        return this.state;
    };
    StateTree.prototype.uncheckedSet = function (newState) {
        failIfFrozen('Changing state');
        this.state = newState;
        notifySubscribers();
    };
    StateTree.prototype.id = function () {
        return '';
    };
    return StateTree;
}(AbstractStateStore));

// a node of a state tree.
// does not actually keep state, but provides
// access scoped to a subtree of a StateTree.
var StateTreeNode = /** @class */ (function (_super) {
    state_tree_extends(StateTreeNode, _super);
    function StateTreeNode(parentState, key) {
        var _this = _super.call(this) || this;
        _this.parentState = parentState;
        _this.key = key;
        return _this;
    }
    StateTreeNode.prototype.untrackedGet = function () {
        return this.parentState.getSubState(this.key);
    };
    StateTreeNode.prototype.uncheckedSet = function (newState) {
        this.parentState.setSubState(this.key, newState);
    };
    StateTreeNode.prototype.id = function () {
        if (this.cachedId === undefined) {
            // first convert backslash to double-backslash
            // then convert slash to backslash-slash
            var escapedKey = this.key.replace(/\\/g, '\\\\').replace(/\//g, '\\/');
            this.cachedId = this.parentState.id() + "/" + escapedKey;
        }
        return this.cachedId;
    };
    return StateTreeNode;
}(AbstractStateStore));

;// CONCATENATED MODULE: ./scrivito_sdk/state/global_state.ts


var stateTree = new StateTree();
var globalState = stateTree;
// for test purposes only
function resetGlobalState() {
    resetSubscribers();
    stateTree.clear();
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/batched_state_updater.ts


var addBatchUpdate = (0,common/* collectInListAndSchedule */.W0)(common/* nextTick */.Y3, function (callbacks) {
    withBatchedUpdates(function () { return callbacks.forEach(function (callback) { return callback(); }); });
    return [];
});

;// CONCATENATED MODULE: ./scrivito_sdk/state/observe.ts


/**
 * observe an expression, which calculates a value based on state.
 *
 * `observedExpression` will be executed once initially
 * and re-executed whenever the global state changes in a relevant way.
 *
 * `observedExpression` is expected to be a pure function,
 * i.e. it should be deterministic and not have side-effects.
 *
 * whenever `observedExpression` is executed,
 * the returned value is emitted into the returned Streamable.
 */
function observe(observedExpression) {
    return new common/* Streamable */.fU(function (observer) {
        var active = true;
        var lastResult;
        var lastResultInitialized = false;
        var stateSubscriber = createAsyncSubscriber(run);
        function run() {
            if (!active) {
                return;
            }
            var report = trackStateAccess(function () {
                return withFrozenState({
                    contextName: 'observe',
                    message: 'Extract all side-effects into the listener function',
                }, observedExpression);
            });
            stateSubscriber.subscribeChanges(report.accessedState);
            var nextResult = report.result;
            if (lastResultInitialized && (0,common/* equalsBestEffort */.Fe)(nextResult, lastResult)) {
                return;
            }
            observer.next(nextResult);
            lastResult = nextResult;
            lastResultInitialized = true;
        }
        (0,common/* nextTick */.Y3)(run);
        return function () {
            active = false;
            stateSubscriber.unsubscribe();
        };
    });
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/observe_sync.ts


/**
 * observe an expression, synchronously.
 *
 * for most cases, the normal, async `observe` is better, faster and more stable.
 * use `observeSync` only if you know what you are doing.
 *
 * Notable differences from async `observe`:
 * * You may not alter state anywhere, not even in the listener.
 * * A slow listener has a much more severe impact on the overall application responsiveness.
 * * The result of the first run is not provided to the listener, but returned as `initialValue`
 *
 */
function observeSync(observedExpression, listener) {
    var firstReport = trackStateAccess(function () {
        return withFrozenState({
            contextName: 'observeSync',
            message: 'Use non-sync observe or nextTick',
        }, observedExpression);
    });
    var lastResult = firstReport.result;
    var stateSubscriber = createSyncSubscriber(function () {
        var report = trackStateAccess(observedExpression);
        stateSubscriber.subscribeChanges(report.accessedState);
        var nextResult = report.result;
        if (!(0,common/* equalsBestEffort */.Fe)(nextResult, lastResult)) {
            listener(nextResult);
            lastResult = nextResult;
        }
    });
    stateSubscriber.subscribeChanges(firstReport.accessedState);
    return {
        initialValue: lastResult,
        unsubscribe: function () {
            stateSubscriber.unsubscribe();
        },
    };
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/create_state_container.ts

var counter = 0;
function createStateContainer() {
    counter++;
    var newState = globalState.subState('dynamic').subState(counter.toString());
    return newState;
}

;// CONCATENATED MODULE: ./scrivito_sdk/state/index.ts










/***/ }),

/***/ 7428:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7428__;

/***/ }),

/***/ 6556:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6556__;

/***/ }),

/***/ 1932:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1932__;

/***/ }),

/***/ 8156:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8156__;

/***/ }),

/***/ 7111:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7111__;

/***/ }),

/***/ 2018:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2018__;

/***/ }),

/***/ 7726:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7726__;

/***/ }),

/***/ 5807:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5807__;

/***/ }),

/***/ 4952:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4952__;

/***/ }),

/***/ 8842:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8842__;

/***/ }),

/***/ 3747:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3747__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "scrivito_editing" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "scrivito:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			458: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : global)["webpackChunkscrivito"] = (typeof self !== 'undefined' ? self : global)["webpackChunkscrivito"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ArgumentError": function() { return /* reexport */ common/* ArgumentError */.ir; },
  "BackgroundImageTag": function() { return /* reexport */ react/* BackgroundImageTag */.iX; },
  "Binary": function() { return /* reexport */ models/* Binary */.Kb; },
  "ChildListTag": function() { return /* reexport */ react/* ChildListTag */.H1; },
  "ContentTag": function() { return /* reexport */ react/* ContentTag */.jq; },
  "CurrentPage": function() { return /* reexport */ react/* CurrentPage */.Ck; },
  "FutureBinary": function() { return /* reexport */ models/* FutureBinary */.eJ; },
  "ImageTag": function() { return /* reexport */ react/* ImageTag */.Du; },
  "InPlaceEditingOff": function() { return /* reexport */ react/* InPlaceEditingOff */.ZM; },
  "Link": function() { return /* reexport */ realm/* Link */.rU; },
  "LinkTag": function() { return /* reexport */ react/* LinkTag */.IR; },
  "NotFoundErrorPage": function() { return /* reexport */ react/* NotFoundErrorPage */.zp; },
  "Obj": function() { return /* reexport */ realm/* Obj */.eG; },
  "ObjFacetValue": function() { return /* reexport */ realm/* ObjFacetValue */.JB; },
  "ObjSearch": function() { return /* reexport */ realm/* ObjSearch */.d_; },
  "RestoreInPlaceEditing": function() { return /* reexport */ react/* RestoreInPlaceEditing */.TE; },
  "ScrivitoError": function() { return /* reexport */ common/* ScrivitoError */.Ix; },
  "Widget": function() { return /* reexport */ realm/* Widget */.$L; },
  "WidgetTag": function() { return /* reexport */ react/* WidgetTag */.Dc; },
  "_internal": function() { return /* reexport */ infopark_integration_test_support_namespaceObject; },
  "canEdit": function() { return /* reexport */ can_edit/* canEdit */.J; },
  "canWrite": function() { return /* reexport */ canWrite; },
  "configure": function() { return /* reexport */ configure; },
  "configureContentBrowser": function() { return /* reexport */ configure_content_browser/* configureContentBrowser */.Zh; },
  "configureObjClassForContentType": function() { return /* reexport */ configure_obj_class_for_content_type/* configureObjClassForContentType */.h; },
  "configurePreviewSizes": function() { return /* reexport */ preview_sizes/* configurePreviewSizes */.E; },
  "connect": function() { return /* reexport */ react/* connect */.$j; },
  "createObjClass": function() { return /* reexport */ realm/* createObjClass */.r$; },
  "createWidgetClass": function() { return /* reexport */ realm/* createWidgetClass */.Zv; },
  "currentEditor": function() { return /* reexport */ currentEditor; },
  "currentPage": function() { return /* reexport */ current_page/* currentPage */.lo; },
  "currentPageParams": function() { return /* reexport */ current_page/* currentPageParams */.WX; },
  "currentSiteId": function() { return /* reexport */ current_page/* currentSiteId */.lx; },
  "currentWorkspace": function() { return /* reexport */ currentWorkspace; },
  "currentWorkspaceId": function() { return /* reexport */ current_workspace_id/* currentWorkspaceId */.tV; },
  "extendMenu": function() { return /* reexport */ extendMenu; },
  "extractText": function() { return /* reexport */ extractText; },
  "finishLoading": function() { return /* reexport */ loading_monitor/* finishLoading */.kU; },
  "getClass": function() { return /* reexport */ realm/* getClass */.ll; },
  "isComparisonActive": function() { return /* reexport */ editing_context/* isComparisonActive */.rl; },
  "isEditorLoggedIn": function() { return /* reexport */ isEditorLoggedIn; },
  "isInPlaceEditingActive": function() { return /* reexport */ editing_context/* isInPlaceEditingActive */.DG; },
  "load": function() { return /* reexport */ loadable/* load */.zD; },
  "navigateTo": function() { return /* reexport */ navigate_to/* navigateTo */.T; },
  "openDialog": function() { return /* reexport */ openDialog; },
  "preload": function() { return /* reexport */ preload; },
  "provideAuthGroups": function() { return /* reexport */ auth_groups/* provideAuthGroups */.t; },
  "provideComponent": function() { return /* reexport */ react/* provideComponent */.wh; },
  "provideEditingConfig": function() { return /* reexport */ editing_config/* provideEditingConfig */.uD; },
  "provideObjClass": function() { return /* reexport */ realm/* provideObjClass */.Je; },
  "provideWidgetClass": function() { return /* reexport */ realm/* provideWidgetClass */.We; },
  "registerComponent": function() { return /* reexport */ react/* registerComponent */.RM; },
  "renderPage": function() { return /* reexport */ renderPage; },
  "resolveHtmlUrls": function() { return /* reexport */ replace_internal_links/* resolveHtmlUrls */.y; },
  "setVisitorIdToken": function() { return /* reexport */ setVisitorIdToken; },
  "uiContext": function() { return /* reexport */ uiContext; },
  "unstable_selectSiteId": function() { return /* reexport */ unstable_multi_site_mode/* unstable_selectSiteId */.gq; },
  "updateContent": function() { return /* reexport */ updateContent; },
  "updateMenuExtensions": function() { return /* reexport */ menu/* updateMenuExtensions */.ff; },
  "urlFor": function() { return /* reexport */ urlFor; },
  "useHistory": function() { return /* reexport */ browser_location/* useHistory */.k6; },
  "validationResultsFor": function() { return /* reexport */ validationResultsFor; }
});

// NAMESPACE OBJECT: ./scrivito_sdk/infopark_integration_test_support.ts
var infopark_integration_test_support_namespaceObject = {};
__webpack_require__.r(infopark_integration_test_support_namespaceObject);
__webpack_require__.d(infopark_integration_test_support_namespaceObject, {
  "alwaysShowOptionMarkers": function() { return react/* alwaysShowOptionMarkers */.aR; },
  "currentPublicAuthorizationState": function() { return currentPublicAuthorizationState; },
  "enableForceVerification": function() { return enableForceVerification; },
  "isFetchingActive": function() { return client/* isFetchingActive */.MD; }
});

// EXTERNAL MODULE: external "w3c-xmlhttprequest"
var external_w3c_xmlhttprequest_ = __webpack_require__(3747);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_origin.ts
var current_origin = __webpack_require__(2644);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_page.ts
var current_page = __webpack_require__(7826);
// EXTERNAL MODULE: ./scrivito_sdk/common/index.ts + 38 modules
var common = __webpack_require__(6958);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/remove_html_tags.ts


var htmlToText;
function setHtmlToTextConverter(converter) {
    htmlToText = converter;
}
function removeHtmlTags(html) {
    if (!htmlToText)
        throw new common/* InternalError */.AQ();
    if (html === '')
        return '';
    var text = htmlToText(html);
    return (0,common/* pruneString */.o8)(text);
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/initialize_content.ts
var initialize_content = __webpack_require__(1919);
// EXTERNAL MODULE: ./scrivito_sdk/client/index.ts + 22 modules
var client = __webpack_require__(457);
// EXTERNAL MODULE: ./scrivito_sdk/data/index.ts + 29 modules
var data = __webpack_require__(1190);
// EXTERNAL MODULE: external "html-to-text"
var external_html_to_text_ = __webpack_require__(6556);
;// CONCATENATED MODULE: ./scrivito_sdk/node_support/html_to_text_for_node.ts

function htmlToTextForNode(html) {
    return (0,external_html_to_text_.htmlToText)(html, htmlToTextOptions);
}
var htmlToTextOptions = {
    tags: {
        '': { format: 'block' },
        a: { format: 'inline' },
        h1: { format: 'block' },
        h2: { format: 'block' },
        h3: { format: 'block' },
        h4: { format: 'block' },
        h5: { format: 'block' },
        h6: { format: 'block' },
        img: { format: 'skip' },
        table: { format: 'block' },
        ul: { format: 'block' },
    },
    wordwrap: false,
};

// EXTERNAL MODULE: ./scrivito_sdk/realm/index.ts + 19 modules
var realm = __webpack_require__(5285);
// EXTERNAL MODULE: ./scrivito_sdk/realm/initial_content_registry.ts
var initial_content_registry = __webpack_require__(1109);
;// CONCATENATED MODULE: ./scrivito_sdk/initialize_sdk_for_node.ts










function initializeSdk() {
    (0,current_origin/* setOriginProvider */.k)(function () { return undefined; });
    (0,realm/* setCurrentSiteIdHandler */.RO)(current_page/* currentSiteId */.lx);
    (0,data/* useReplicationStrategy */.Lo)(data/* ObjBackendReplication */.kt);
    setHtmlToTextConverter(htmlToTextForNode);
    (0,client/* useXmlHttpRequest */.kq)(external_w3c_xmlhttprequest_.XMLHttpRequest);
    (0,client/* useDefaultPriority */._i)('background');
    (0,initial_content_registry/* setInitialContentFor */.T)(initialize_content/* initialContentFor */.WS);
}

// EXTERNAL MODULE: ./scrivito_sdk/loadable/index.ts + 23 modules
var loadable = __webpack_require__(9379);
// EXTERNAL MODULE: ./scrivito_sdk/models/index.ts + 35 modules
var models = __webpack_require__(5912);
// EXTERNAL MODULE: ./scrivito_sdk/react/index.ts + 30 modules
var react = __webpack_require__(1306);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/can_edit.ts
var can_edit = __webpack_require__(1784);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/ui_adapter.ts
var ui_adapter = __webpack_require__(9679);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/can_write.ts


/** @public */
function canWrite() {
    if (!ui_adapter/* uiAdapter */.k)
        return false;
    return ui_adapter/* uiAdapter.canWrite */.k.canWrite((0,models/* currentWorkspaceId */.tV)()) || false;
}

// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(8842);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/asset_url_base.ts

var current;
var deferred = new common/* Deferred */.BH();
function getAssetUrlBase() {
    // asset url base accessed before configured?
    if (!current)
        throw new common/* InternalError */.AQ();
    return current;
}
function assetLoadingReady() {
    return deferred.promise;
}
function configureAssetUrlBase(assetUrlBase) {
    // asset url base configured twice?
    if (current)
        throw new common/* InternalError */.AQ();
    current = assetUrlBase;
    __webpack_require__.p = current + "/";
    deferred.resolve();
}
function initializeAssetUrlBase() {
    current = undefined;
    // No dynamic import should happen, before configureAssetUrlBase has been
    // called (via Scrivito.configure), since the SDK does not know the
    // ASSET_URL_BASE until then.
    //
    // Configure webpack to an invalid URL to help debugging.
    __webpack_require__.p = 'https://example.org/scrivito-internal-error/';
}
// For test purpose only
function resetAssetUrlBase() {
    initializeAssetUrlBase();
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/cdn_asset_url_base.ts

function cdnAssetUrlBase() {
    return "https://assets.scrivito.com/sjs/" + (0,common/* getScrivitoVersion */.ux)();
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_app_space.ts
var current_app_space = __webpack_require__(811);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/forced_editor_language.ts
var forced_editor_language = __webpack_require__(1120);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/load_editing_assets.ts



function loadEditingAssetsForCloudUi() {
    loadEditingCss();
    importEditors().then(function (_a) {
        var initializeEditorsForCloudUi = _a.initializeEditorsForCloudUi;
        return initializeEditorsForCloudUi();
    });
}
function loadEditingAssetsForPackagedUi() {
    loadEditingCss();
    importEditors().then(function (_a) {
        var initializeEditorsForPackagedUi = _a.initializeEditorsForPackagedUi;
        return initializeEditorsForPackagedUi();
    });
}
function loadEditingCss() {
    (0,common/* loadCss */.Yc)(getAssetUrlBase() + "/scrivito_editing.css", (0,common/* getDocument */.Me)());
}
/** exported for test purposes only */
function importEditors() {
    return __webpack_require__.e(/* import() */ 226).then(__webpack_require__.bind(__webpack_require__, 6473));
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/routing.ts + 2 modules
var routing = __webpack_require__(9861);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/unstable_multi_site_mode.ts
var unstable_multi_site_mode = __webpack_require__(2640);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/visitor_authentication.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var DOC_LINK = 'js-sdk/setVisitorIdToken';
var provider;
var cancelMissingTokenNotification;
function getVisitorAuthenticationProvider(visitorAuthentication) {
    if (!ui_adapter/* uiAdapter */.k && visitorAuthentication) {
        return enableVisitorAuthentication();
    }
}
function enableVisitorAuthentication() {
    provider = new client/* VisitorAuthenticationProvider */.h_();
    var timeoutId = setTimeout(function () {
        throw new common/* ScrivitoError */.Ix('Scrivito.setVisitorIdToken was not called within 30 seconds.' +
            (" Visit " + (0,common/* docUrl */.m0)(DOC_LINK) + " for more information."));
    }, 30000);
    cancelMissingTokenNotification = function () { return clearTimeout(timeoutId); };
    return provider;
}
/** @internal */
function setVisitorIdToken(token) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (ui_adapter/* uiAdapter */.k)
        return;
    checkSetVisitorIdToken.apply(void 0, __spreadArray([token], args, false));
    if (!provider) {
        throw new common/* ScrivitoError */.Ix('Scrivito needs to be configured to use visitor authentication before' +
            ' Scrivito.setVisitorIdToken can be called.' +
            (" Visit " + (0,common/* docUrl */.m0)('js-sdk/configure')) +
            (" and " + (0,common/* docUrl */.m0)(DOC_LINK) + " for more information."));
    }
    cancelAndForgetMissingTokenNotification();
    provider.setToken(token);
}
function isVisitorAuthenticationEnabled() {
    return !!provider;
}
var checkSetVisitorIdToken = (0,common/* checkArgumentsFor */.PJ)('setVisitorIdToken', [['idToken', common/* tcomb.String */.pC.String]], {
    docPermalink: DOC_LINK,
});
function cancelAndForgetMissingTokenNotification() {
    if (cancelMissingTokenNotification) {
        cancelMissingTokenNotification();
        cancelMissingTokenNotification = undefined;
    }
}
// For test purpose only
function resetVisitorAuthentication() {
    cancelAndForgetMissingTokenNotification();
    provider = undefined;
}

// EXTERNAL MODULE: ./scrivito_sdk/bridge/index.ts + 13 modules
var bridge = __webpack_require__(4999);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/constraints_validation_callback.ts
var constraints_validation_callback = __webpack_require__(4155);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/configure.ts
var configure_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



















var OriginValue = common/* tcomb.refinement */.pC.refinement(common/* tcomb.String */.pC.String, function (v) { return external_urijs_(v).origin() === v; }, 'Origin String');
var AllowedConfiguration = common/* tcomb.interface */.pC["interface"]({
    tenant: common/* tcomb.String */.pC.String,
    adoptUi: common/* tcomb.maybe */.pC.maybe(common/* tcomb.union */.pC.union([common/* tcomb.Boolean */.pC.Boolean, OriginValue])),
    baseUrlForSite: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
    constraintsValidation: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
    endpoint: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    homepage: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
    origin: common/* tcomb.maybe */.pC.maybe(OriginValue),
    routingBasePath: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    siteForUrl: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Function */.pC.Function),
    visitorAuthentication: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
    unstable: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Object */.pC.Object),
    priority: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['foreground', 'background'])),
    editorLanguage: common/* tcomb.maybe */.pC.maybe(common/* tcomb.enums.of */.pC.enums.of(['en', 'de'])),
    strictSearchOperators: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
    optimizedWidgetLoading: common/* tcomb.maybe */.pC.maybe(common/* tcomb.Boolean */.pC.Boolean),
});
var PUBLIC_FUNCTION_NAME = 'configure';
var CHECK_ARGUMENTS_OPTIONS = { docPermalink: 'js-sdk/configure' };
var checkConfigure = (0,common/* checkArgumentsFor */.PJ)(PUBLIC_FUNCTION_NAME, [['configuration', AllowedConfiguration]], CHECK_ARGUMENTS_OPTIONS);
var configDeferred = new common/* Deferred */.BH();
/** @internal */
function configure(configuration) {
    var _a;
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkConfigure.apply(void 0, configure_spreadArray([configuration], excessArgs, false));
    var routingConfiguration = getCheckedRoutingConfiguration(configuration);
    setConfiguration(configuration);
    var inofficialConfiguration = configuration.unstable;
    var getUnstableSiteIdForObj = inofficialConfiguration === null || inofficialConfiguration === void 0 ? void 0 : inofficialConfiguration.getSiteIdForObj;
    if (getUnstableSiteIdForObj) {
        (0,unstable_multi_site_mode/* setUnstableMultiSiteMode */.NV)(getUnstableSiteIdForObj);
    }
    if (configuration.tenant === data/* IN_MEMORY_TENANT */.kI) {
        (0,data/* useInMemoryTenant */.c9)();
        (0,realm/* setCurrentSiteIdHandler */.RO)(function () { return data/* IN_MEMORY_TENANT */.kI; });
        (0,data/* disableObjReplication */.Qc)();
    }
    else {
        var tenant = configuration.tenant;
        var endpoint = configuration.endpoint || common/* DEFAULT_ENDPOINT */.Am;
        configureAssetUrlBase((_a = inofficialConfiguration === null || inofficialConfiguration === void 0 ? void 0 : inofficialConfiguration.assetUrlBase) !== null && _a !== void 0 ? _a : cdnAssetUrlBase());
        if (ui_adapter/* uiAdapter */.k) {
            configureForUi(endpoint, tenant, ui_adapter/* uiAdapter */.k, inofficialConfiguration);
            if (configuration.adoptUi)
                loadEditingAssetsForCloudUi();
            else
                loadEditingAssetsForPackagedUi();
        }
        else {
            if (configuration.optimizedWidgetLoading)
                (0,data/* configureForLazyWidgets */.gU)(true);
            configureCmsRestApi(endpoint, tenant, configuration.visitorAuthentication, configuration.priority);
        }
    }
    (0,routing/* initRouting */.ZK)(routingConfiguration);
    configureConstraintsValidationCallback(configuration);
    if (configuration.strictSearchOperators)
        (0,realm/* enableStrictSearchOperators */.pw)();
    (0,forced_editor_language/* setForcedEditorLanguage */.n)(configuration.editorLanguage || null);
}
function getConfiguration() {
    return configDeferred.promise;
}
// exported for test purpose only
function setConfiguration(configuration) {
    if (!configDeferred.isPending()) {
        throw new common/* ScrivitoError */.Ix('Scrivito.configure has already been called.');
    }
    configDeferred.resolve(configuration);
}
// For test purpose only
function resetConfiguration() {
    configDeferred = new Deferred();
}
function configureForUi(endpoint, tenant, uiAdapterClient, inofficialConfiguration) {
    uiAdapterClient.configureTenant({
        tenant: tenant,
        endpoint: endpoint,
        useRailsAuth: inofficialConfiguration === null || inofficialConfiguration === void 0 ? void 0 : inofficialConfiguration.useRailsAuth,
    });
    if ((0,unstable_multi_site_mode/* useUnstableMultiSiteMode */.Ly)())
        warnIfNoSiteIdSelection();
    setAppAdapter(uiAdapterClient);
}
function configureCmsRestApi(endpoint, tenant, visitorAuthentication, priority) {
    var provider = getVisitorAuthenticationProvider(visitorAuthentication);
    if (provider)
        client/* cmsRestApi.setAuthProvider */.i3.setAuthProvider(provider);
    if (priority)
        client/* cmsRestApi.setPriority */.i3.setPriority(priority);
    client/* cmsRestApi.init */.i3.init(endpoint, tenant);
}
function getCheckedRoutingConfiguration(_a) {
    var homepage = _a.homepage, origin = _a.origin, routingBasePath = _a.routingBasePath, baseUrlForSite = _a.baseUrlForSite, siteForUrl = _a.siteForUrl;
    var homepageCallback = homepage
        ? function () { return (0,realm/* unwrapAppClass */.bM)(homepage()); }
        : function () { return (0,models/* getRootObjFrom */.cS)((0,current_app_space/* currentAppSpace */.q)().and((0,models/* restrictToSite */.mz)('default'))); };
    if (baseUrlForSite && siteForUrl) {
        if (routingBasePath || origin) {
            var presentKey = routingBasePath ? 'routingBasePath' : 'origin';
            (0,common/* throwInvalidArgumentsError */.dg)(PUBLIC_FUNCTION_NAME, "The '" + presentKey + "' cannot be combined with the \"baseUrlForSite\" option", CHECK_ARGUMENTS_OPTIONS);
        }
        return {
            homepageCallback: homepageCallback,
            baseUrlForSite: baseUrlForSite,
            siteForUrl: siteForUrl,
        };
    }
    if (baseUrlForSite || siteForUrl) {
        var presentKey = siteForUrl ? 'siteForUrl' : 'baseUrlForSite';
        var missingKey = siteForUrl ? 'baseUrlForSite' : 'siteForUrl';
        (0,common/* throwInvalidArgumentsError */.dg)(PUBLIC_FUNCTION_NAME, "Unexpected value for argument 'configuration': a value for '" + missingKey + "' is required if '" + presentKey + "' is present.", CHECK_ARGUMENTS_OPTIONS);
    }
    return { homepageCallback: homepageCallback, origin: origin, routingBasePath: routingBasePath };
}
function configureConstraintsValidationCallback(configuration) {
    var constraintsValidationCallback = configuration.constraintsValidation;
    if (constraintsValidationCallback) {
        (0,constraints_validation_callback/* setConstraintsValidationCallback */.a3)(constraintsValidationCallback);
    }
}
function setAppAdapter(uiAdapterClient) {
    importUiInterface().then(function (_a) {
        var startAppAdapter = _a.startAppAdapter;
        var channel = new MessageChannel();
        startAppAdapter((0,bridge/* linkViaPort */.oc)(channel.port1));
        uiAdapterClient.setAppAdapter(channel.port2);
    });
}
/** exported for test purposes only */
function importUiInterface() {
    return __webpack_require__.e(/* import() */ 226).then(__webpack_require__.bind(__webpack_require__, 2854));
}
function warnIfNoSiteIdSelection() {
    var timeout = setTimeout(function () {
        return (0,loadable/* load */.zD)(current_page/* currentSiteId */.lx).then(function (siteId) {
            if (siteId === 'default') {
                (0,common/* logError */.H)('Warning: No site ID was selected within 30 seconds.' +
                    ' In the multi-site mode a site ID must be selected before Scrivito can render content.' +
                    ' Forgot to use Scrivito.unstable_selectSiteId?');
            }
        });
    }, 30000);
    (0,loadable/* load */.zD)(unstable_multi_site_mode/* getUnstableSelectedSiteId */.IN).then(function () { return clearTimeout(timeout); });
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/configure_content_browser.ts
var configure_content_browser = __webpack_require__(9102);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/configure_obj_class_for_content_type.ts
var configure_obj_class_for_content_type = __webpack_require__(9504);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/preview_sizes.ts
var preview_sizes = __webpack_require__(4709);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_editor.ts


/** @public */
function currentEditor() {
    if (!ui_adapter/* uiAdapter */.k)
        return null;
    var editorData = ui_adapter/* uiAdapter.currentEditor */.k.currentEditor();
    var teamsData = ui_adapter/* uiAdapter.currentEditorTeams */.k.currentEditorTeams();
    return editorData && teamsData ? new models/* Editor */.ML(editorData, teamsData) : null;
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_workspace.ts


/** @public */
function currentWorkspace() {
    var _a;
    return new models/* Workspace */.j$((_a = ui_adapter/* uiAdapter */.k === null || ui_adapter/* uiAdapter */.k === void 0 ? void 0 : ui_adapter/* uiAdapter.currentWorkspace */.k.currentWorkspace()) !== null && _a !== void 0 ? _a : { id: (0,models/* currentWorkspaceId */.tV)(), title: '' });
}

// EXTERNAL MODULE: ./scrivito_sdk/models/current_workspace_id.ts
var current_workspace_id = __webpack_require__(1067);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/menu.ts + 2 modules
var menu = __webpack_require__(3301);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/menu/menu_registry.ts
var menu_registry = __webpack_require__(6260);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extend_menu.ts
var extend_menu_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




/** @internal */
function extendMenu(menuCallback) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkExtendMenuArguments.apply(void 0, extend_menu_spreadArray([menuCallback], excessArgs, false));
    if (!ui_adapter/* uiAdapter */.k)
        return;
    (0,menu_registry/* registerMenuCallback */.Lg)(menuCallback);
    (0,menu/* updateMenuExtensions */.ff)();
}
var checkExtendMenuArguments = (0,common/* checkArgumentsFor */.PJ)('extendMenu', [['menuCallback', common/* tcomb.Function */.pC.Function]], {
    docPermalink: 'js-sdk/extendMenu',
});

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_collector.ts
var ExtractCollector = /** @class */ (function () {
    function ExtractCollector(maxLength) {
        this.maxLength = maxLength;
        this.currentLength = 0;
        this.extracts = [];
    }
    ExtractCollector.prototype.isMaxLengthReached = function () {
        return this.currentLength >= this.maxLength;
    };
    ExtractCollector.prototype.push = function (extract) {
        if (!extract)
            return;
        this.currentLength += extract.length + (this.extracts.length ? 1 : 0);
        this.extracts.push(extract);
    };
    ExtractCollector.prototype.toString = function () {
        var extractedText = this.extracts.join(' ');
        var shortenedText = extractedText.substring(0, this.maxLength);
        return shortenedText.replace(/ $/, '');
    };
    return ExtractCollector;
}());


;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_blob_text.ts


function extractBlobText(objOrWidget) {
    if (objOrWidget instanceof models/* BasicWidget */.E8)
        return '';
    var text = objOrWidget.metadata().get('text');
    if (typeof text !== 'string')
        return '';
    return (0,common/* pruneString */.o8)(text);
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_widgetlist.ts

function extractWidgetlist(widgetlist, collector) {
    for (var _i = 0, widgetlist_1 = widgetlist; _i < widgetlist_1.length; _i++) {
        var widget = widgetlist_1[_i];
        extractTextFromBasicObjOrWidget(widget, collector);
        if (collector.isMaxLengthReached())
            break;
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_attribute.ts




function extractAttribute(objOrWidget, schema, attribute, collector) {
    if (attribute === 'blob:text') {
        return collector.push(extractBlobText(objOrWidget));
    }
    var definition = schema.attribute(attribute);
    if (!definition)
        return;
    var attributeType = definition[0];
    switch (attributeType) {
        case 'html':
            return collector.push(removeHtmlTags(objOrWidget.get(attribute, 'html')));
        case 'string':
            return collector.push((0,common/* pruneString */.o8)(objOrWidget.get(attribute, 'string')));
        case 'widgetlist':
            return extractWidgetlist(objOrWidget.get(attribute, 'widgetlist'), collector);
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_text_from_basic_obj_or_widget.ts


function extractTextFromBasicObjOrWidget(objOrWidget, collector) {
    var schema = (0,realm/* schemaFromBasicObjOrWidget */.cv)(objOrWidget);
    if (!schema)
        return;
    for (var _i = 0, _a = schema.extractTextAttributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        extractAttribute(objOrWidget, schema, attribute, collector);
        if (collector.isMaxLengthReached())
            break;
    }
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text_from_basic_obj.ts


function extractTextFromBasicObj(obj, maxLength) {
    var collector = new ExtractCollector(maxLength);
    extractTextFromBasicObjOrWidget(obj, collector);
    return collector.toString();
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text.ts




/** @public */
function extractText(obj, options) {
    checkExtractText(obj, options);
    var basicObj = (0,realm/* unwrapAppClass */.bM)(obj);
    var maxLength = options && options.length ? options.length : 1000000000;
    return extractTextFromBasicObj(basicObj, maxLength);
}
var checkExtractText = (0,common/* checkArgumentsFor */.PJ)('extractText', [
    ['obj', models/* ObjType */.Bt],
    ['options', common/* tcomb.maybe */.pC.maybe(common/* tcomb.interface */.pC["interface"]({ length: common/* tcomb.maybe */.pC.maybe(common/* PositiveInteger */.nH) }))],
], { docPermalink: 'js-sdk/extractText' });

// EXTERNAL MODULE: ./scrivito_sdk/app_support/loading_monitor.ts
var loading_monitor = __webpack_require__(5712);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/editing_context.ts
var editing_context = __webpack_require__(6487);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_editor_logged_in.ts

/** @public */
function isEditorLoggedIn() {
    return !!ui_adapter/* uiAdapter */.k;
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/navigate_to.ts
var navigate_to = __webpack_require__(4581);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/open_dialog.ts
var open_dialog_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


/** @internal */
function openDialog(name) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkOpenDialogArguments.apply(void 0, open_dialog_spreadArray([name], excessArgs, false));
    if (ui_adapter/* uiAdapter */.k) {
        ui_adapter/* uiAdapter.openCustomDialog */.k.openCustomDialog(name);
    }
}
var checkOpenDialogArguments = (0,common/* checkArgumentsFor */.PJ)('openDialog', [['name', common/* tcomb.String */.pC.String]], {
    docPermalink: 'js-sdk/openDialog',
});

// EXTERNAL MODULE: ./scrivito_sdk/state/index.ts + 13 modules
var state = __webpack_require__(7227);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/content_dump.ts





/** dump the content of all provided LoadableData instances */
function generateContentDump(data, contentStateId) {
    return stringify({
        version: (0,common/* getScrivitoVersion */.ux)(),
        csid: contentStateId,
        recording: (0,loadable/* generateRecording */.oR)(data),
    });
}
/** load the data from the content dump string into the SDK */
function loadContentDump(contentDump) {
    var parsed = parse(contentDump);
    if (!parsed) {
        (0,common/* logError */.H)('could not preload: parsing dump failed');
        return;
    }
    if (!isContentDumpFromThisVersion(parsed)) {
        (0,common/* logError */.H)('could not preload: ' +
            ("dump is from version " + parsed.version) +
            (", this is version " + (0,common/* getScrivitoVersion */.ux)()));
        return;
    }
    (0,state/* withBatchedUpdates */.tH)(function () {
        (0,data/* setContentStateId */.Bg)((0,models/* currentWorkspaceId */.tV)(), parsed.csid);
        (0,loadable/* loadRecording */.Mh)(parsed.recording);
    });
}
function stringify(contentDump) {
    return JSON.stringify(contentDump);
}
function parse(stringifiedContentDump) {
    var parsed = parseJsonObject(stringifiedContentDump);
    if (parsed && isMaybeContentDump(parsed))
        return parsed;
}
function parseJsonObject(text) {
    if (text.charAt(0) !== '{')
        return;
    try {
        return JSON.parse(text);
    }
    catch (error) {
        return;
    }
}
function isMaybeContentDump(parsed) {
    return !!parsed.version;
}
function isContentDumpFromThisVersion(dump) {
    return dump.version === (0,common/* getScrivitoVersion */.ux)();
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/preload.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var preload_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






/** @internal */
function preload(preloadDump) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, Promise, function () {
        var dumpLoaded;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkPreload.apply(void 0, preload_spreadArray([preloadDump], excessArgs, false));
                    dumpLoaded = false;
                    if (isVisitorAuthenticationEnabled())
                        return [2 /*return*/, { dumpLoaded: dumpLoaded }];
                    if (!ui_adapter/* uiAdapter */.k) {
                        loadContentDump(preloadDump);
                        dumpLoaded = true;
                    }
                    return [4 /*yield*/, preloadCurrentPage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { dumpLoaded: dumpLoaded }];
            }
        });
    });
}
function preloadCurrentPage() {
    return (0,loadable/* load */.zD)(function () {
        (0,current_page/* currentPage */.lo)();
    });
}
var checkPreload = (0,common/* checkArgumentsFor */.PJ)('preload', [['preloadDump', common/* tcomb.String */.pC.String]], {
    docPermalink: 'js-sdk/preload',
});

// EXTERNAL MODULE: ./scrivito_sdk/app_support/auth_groups.ts
var auth_groups = __webpack_require__(2358);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/current_page_data.ts
var current_page_data = __webpack_require__(9507);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/scale_down_binary.ts
var scale_down_binary = __webpack_require__(9988);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/site_mapping.ts
var site_mapping = __webpack_require__(317);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/render_page.ts
var render_page_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};











/** @internal */
function renderPage(obj, render) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    (0,data/* assertNotUsingInMemoryTenant */.VJ)('Scrivito.renderPage');
    checkRenderPage.apply(void 0, render_page_spreadArray([obj, render], excessArgs, false));
    var objSpaceId = (0,models/* currentObjSpaceId */.GD)();
    var page = (0,realm/* unwrapAppClass */.bM)(obj);
    var workspaceId = (0,client/* getWorkspaceId */.cm)(objSpaceId);
    ensureSiteIsPresent(page, common/* ArgumentError */.ir);
    return (0,data/* trackContentStateId */.PD)(workspaceId).then(function () {
        var contentStateId = (0,data/* getContentStateId */.Dk)(objSpaceId);
        var siteId = ensureSiteIsPresent(page);
        return (0,loadable/* load */.zD)(function () {
            return (0,loadable/* reportUsedData */.kV)(function () {
                var baseUrl = (0,site_mapping/* baseUrlForSite */.XY)(siteId);
                if (!baseUrl) {
                    throw new common/* ScrivitoError */.Ix("The obj \"" + page.id() + "\" cannot be rendered because the baseUrlForSite callback did not return a URL for its site \"" + siteId + "\".");
                }
                // ID is currently good enough.
                // no need for a vanity path with slug or permalink
                var sitePath = "/" + page.id();
                return (0,current_page_data/* withCurrentPageContext */.Mw)({ page: page, siteId: siteId, baseUrl: baseUrl, sitePath: sitePath }, function () {
                    (0,routing/* ensureRoutingDataAvailable */.kx)(page);
                    return (0,scale_down_binary/* usePrerenderScaling */.R4)(render);
                });
            });
        }).then(function (_a) {
            var result = _a.result, usedData = _a.usedData;
            return {
                result: result,
                preloadDump: generateContentDump(usedData, contentStateId),
            };
        });
    });
}
function ensureSiteIsPresent(page, errorClass) {
    if (errorClass === void 0) { errorClass = common/* ScrivitoError */.Ix; }
    var siteId = page.siteId();
    if (siteId)
        return siteId;
    throw new errorClass("The obj \"" + page.id() + "\" cannot be rendered because it does not have a site ID.");
}
var checkRenderPage = (0,common/* checkArgumentsFor */.PJ)('renderPage', [
    ['page', models/* ObjType */.Bt],
    ['render', common/* tcomb.Function */.pC.Function],
], {
    docPermalink: 'js-sdk/renderPage',
});

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/update_content.ts


/** @public */
function updateContent() {
    (0,data/* updateContent */.x0)((0,models/* currentWorkspaceId */.tV)());
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/basic_url_for.ts
var basic_url_for = __webpack_require__(8333);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/url_for.ts
var url_for_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





/** @internal */
function urlFor(target, options) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    (0,data/* assertNotUsingInMemoryTenant */.VJ)('Scrivito.urlFor');
    checkUrlFor.apply(void 0, url_for_spreadArray([target, options], excessArgs, false));
    var query;
    var hash;
    if (options) {
        query = options.query;
        hash = options.hasOwnProperty('hash') ? options.hash : options.fragment;
    }
    return (0,basic_url_for/* basicUrlFor */.M)((0,realm/* unwrapAppClass */.bM)(target), { query: query, hash: hash });
}
var TargetType = common/* tcomb.union */.pC.union([models/* ObjType */.Bt, models/* LinkType */.Un, models/* BinaryType */.pf]);
var OptionsType = common/* tcomb.interface */.pC["interface"]({
    query: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    hash: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String),
    fragment: common/* tcomb.maybe */.pC.maybe(common/* tcomb.String */.pC.String), // deprecated
});
var checkUrlFor = (0,common/* checkArgumentsFor */.PJ)('urlFor', [
    ['target', TargetType],
    ['options', common/* tcomb.maybe */.pC.maybe(OptionsType)],
], {
    docPermalink: 'js-sdk/urlFor',
});

// EXTERNAL MODULE: ./scrivito_sdk/app_support/browser_location.ts
var browser_location = __webpack_require__(8251);
// EXTERNAL MODULE: ./scrivito_sdk/import_from.ts
var import_from = __webpack_require__(6994);
;// CONCATENATED MODULE: ./scrivito_sdk/app_support/validation_results_stub.ts

/** @public */
function validationResultsFor(model, attributeName) {
    var loadedFn = (0,import_from/* importFrom */.u$)('editingSupport', 'validationResultsFor');
    if (!loadedFn)
        return [];
    return loadedFn(model, attributeName);
}

;// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_context.ts

/** @public */
function uiContext() {
    return ui_adapter/* uiAdapter */.k === null || ui_adapter/* uiAdapter */.k === void 0 ? void 0 : ui_adapter/* uiAdapter.getUiContext */.k.getUiContext();
}

// EXTERNAL MODULE: ./scrivito_sdk/app_support/replace_internal_links.ts
var replace_internal_links = __webpack_require__(5947);
// EXTERNAL MODULE: ./scrivito_sdk/app_support/editing_config.ts
var editing_config = __webpack_require__(7401);
;// CONCATENATED MODULE: ./scrivito_sdk/infopark_integration_test_support.ts



function enableForceVerification() {
    client/* cmsRestApi.enableForceVerification */.i3.enableForceVerification();
}
function currentPublicAuthorizationState() {
    return client/* cmsRestApi.currentPublicAuthorizationState */.i3.currentPublicAuthorizationState();
}

;// CONCATENATED MODULE: ./scrivito_sdk/public_api.ts
// If imported, this file provides a namespace object for the public API, e.g.:
//
//   import * as Scrivito from 'scrivito_sdk/public_api';
//
//   Scrivito.configure({ ... });
//   Scrivito.provideComponent({ ... });
// Client





// App support






























/** @internal */


/**
 * public for tests
 * @internal
 */


;// CONCATENATED MODULE: ./sdk_for_node.ts


initializeSdk();

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});