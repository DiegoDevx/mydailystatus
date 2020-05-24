module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-b984d\",\"private_key_id\":\"c7eec545fafca5e0ab6b90d894bf8da81e4c51ce\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPd05Lm/CU6FhB\\nLemYabTPq+NE0OUqdbqANS5DNtE/qItR4ixKYw7yPFnTkuT84LWTwQ+2sNIp1/q7\\nYfp4sIKBnhO36enP2oF+sTZRnzrscFCzAW5PNxerLiYPCfUd+2xd5wmZ8ZQZzzXw\\nribi1WMuMTQDzDwP2atZ3gG3O+DDh07KpzNygVA4umqDoMK/LOQ6MpfpMpXDF14A\\nLiUPGcuxb8iJGNavPOlBQkJ/LZ9wR9Jw6C/4m0uCJkU9NeaTjk5CPZ2L+GKRKQqb\\nEVJFzitBIpES5xN1GhmKaTrXgxbAzFmCDkssAmX1AM3cTNJa0IT2VnswGNq/kYqu\\nTWmoyqzFAgMBAAECggEAIcMi8to06OYw9s3WPl8KBSFfb691buOby1Y4l+rLnZ6N\\nguymHa9oMguP3CGir/w13xq9FvJP0zcXs4dgSYzIebZ4z3xF4Pt8JBOSQ+0kEcZw\\nx1+b1RqTAF7w5/Mg8zhbDVI0yTy37Mb927EwR4uONq2vnwEuVVCVaaW8Y6G8yGay\\nJ5yZr2sEEUCO7RMqc3R6CylQbrzmSUlP9F1obxUL9EVoKy5TiA5Gevsd64GVt639\\nBEorPgptUW5YCrMtz8tlVheRf05UmKRR7oPjYUg4owEjyF7fNdJxPYhUO/IotSxq\\n6ueusokpvPyYOlx/bMcgz6IljcYR4oPhyiNTi8dLlQKBgQDCMJocwYZTZjnNfe3J\\ndcFSnRP/sAcAvOzO3WyznTPS3ggAziSSmgeDSD20XavTZSTrMxQRRpgvhVl9wfBV\\nAiM8btatVZV8KoK9dXDORKYKL6PPD43hLqCLTNiqEMA+/Qk5IvEWDo9cbKxOYAYb\\nGH8Xi/z3vbe+Y4ikuhoqpZWJswKBgQC9IYQpdsptvO4xvC61H2kN3DRtsmabNleN\\ny/BjJTiy38PtobdSGjD9pXeaBZAvLrZFRJTFV3jrjiBLo4UIexK2k0RJjFHwGFKA\\njje7AmiENTxRN5tEBjX7U6ohmDIPIc7G8xjdgQsPI++w8zFsZRU7LOtDNip5UYgf\\nEb5lt/xDpwKBgAzUfTotJxzXgjYrfcxztUQqEKoyDSRlVxgL1STA3C2wccLr28q7\\n1oc7/KewEKw04I2RoF/L1D4/hzwh1iknrQBPKmvlXa0Ief7ehYd7TaUapK4Hjw4z\\nsHPDrgT+elUvDq7xuhAFAj/PBktfWMfthGgf3aTYqg0wMlT/3r62lfy1AoGBAIL7\\nz1gYGSHfEugG+CIgWtVqiDTgtQcRn5logFdp09at+jd9JEUMNpm0GxzkdXL32uwm\\nDxKM/gXFLMC1wtCYy+D+JPD66VRqw9icpiQyCshlRhzJchKuanxg+RbDHQg11csb\\nWUEuucYGkV3vT29OomGVPmoR/WCAAtHhrAcuYNtJAoGAGJusrUeJwozPgKao17P+\\np78zakn2QmHmZ/EPfQ4+1pjzc7+iLFjUwtvWvHBnF348EZCUkLRcRBy/zqIfHQOc\\nZnmDLdmkjO2VLfXwoFdfWeDGYVXOMWQwA0a1XpS1bDU2Ru93ypdIRyOdF71ba35e\\n5NbIQIDvg/Zu7rX7Yp/R9Zw=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-3wcco@mydailystatus-b984d.iam.gserviceaccount.com\",\"client_id\":\"117949087190999083722\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3wcco%40mydailystatus-b984d.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

console.log(process.env.VAR1);
/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
// alert(calcCrow(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));
function toRad(Value) {
  return Value * Math.PI / 180;
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; //km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "D:\\AMBDEV\\MYDAILYSTATUS\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Status pr\xF3ximos a voc\xEA"), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.checkins.map(checkin => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }, checkin.id === props.user.sub && 'Seu status'), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, checkin.status), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }, checkin.distance));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);

  if (session) {
    const today = new Date();
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').doc(session.user.sub).get();
    const todaysData = todaysCheckin.data();
    let forceCreate = true;

    if (todaysData) {
      // pode ver os outros checkins
      forceCreate = false;
      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').near({
        center: todaysData.coordinates,
        radius: 1000
      }).get();
      const checkinsList = [];
      checkins.docs.forEach(doc => {
        checkinsList.push({
          id: doc.id,
          status: doc.data().status,
          coords: {
            lat: doc.data().coordinates.latitude,
            long: doc.data().coordinates.longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(todaysData.coordinates.latitude, todaysData.coordinates.longitude, doc.data().coordinates.latitude, doc.data().coordinates.longitude)
        });
      });
      return {
        props: {
          isAuth: true,
          user: session.user,
          forceCreate: false,
          checkins: checkinsList
        }
      };
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        forceCreate
      }
    };
  }

  console.log(session);
  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AMBDEV\MYDAILYSTATUS\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map