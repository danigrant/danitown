webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_JamButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/JamButton */ "./components/JamButton.js");
/* harmony import */ var _components_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/KeyboardShortcuts */ "./components/KeyboardShortcuts.js");
/* harmony import */ var _util_isAuthenticated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/isAuthenticated */ "./util/isAuthenticated.js");
/* harmony import */ var _util_isPermissioned__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/isPermissioned */ "./util/isPermissioned.js");
/* harmony import */ var _util_logInUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/logInUser */ "./util/logInUser.js");
/* harmony import */ var _util_getUserIdFromJamFilledCookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/getUserIdFromJamFilledCookie */ "./util/getUserIdFromJamFilledCookie.js");
/* harmony import */ var _util_fetchApiHelpers_getUserByIdInJamFilledStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/fetchApiHelpers/getUserByIdInJamFilledStorage */ "./util/fetchApiHelpers/getUserByIdInJamFilledStorage.js");
/* harmony import */ var _util_getUserFromLocalStorage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util/getUserFromLocalStorage */ "./util/getUserFromLocalStorage.js");
/* harmony import */ var _util_fetchApiHelpers_getThreads__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../util/fetchApiHelpers/getThreads */ "./util/fetchApiHelpers/getThreads.js");
/* harmony import */ var _components_JamThread__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/JamThread */ "./components/JamThread.js");
/* harmony import */ var _components_JamCreateNewComment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/JamCreateNewComment */ "./components/JamCreateNewComment.js");
/* harmony import */ var _components_ClickCollectorOverlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ClickCollectorOverlay */ "./components/ClickCollectorOverlay.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _components_TypeJamToEnableJamBanner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/TypeJamToEnableJamBanner */ "./components/TypeJamToEnableJamBanner.js");
/* harmony import */ var _util_getPeopleInTheJam__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../util/getPeopleInTheJam */ "./util/getPeopleInTheJam.js");
/* harmony import */ var _util_demoUsers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../util/demoUsers */ "./util/demoUsers.js");
/* harmony import */ var _util_fetchApiHelpers_clickIsNotOnJamElement__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../util/fetchApiHelpers/clickIsNotOnJamElement */ "./util/fetchApiHelpers/clickIsNotOnJamElement.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../util/config */ "./util/config.js");








var _jsxFileName = "/Users/danigrant/Projects/jam-plugin-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


















 // pull in config vars



var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      ready: false,
      jamFilledCookie: '',
      clickX: null,
      clickY: null,
      jamTime: false,
      newCommentEditorOpen: false,
      threads: [],
      whichThreadIsOpen: -1,
      // thread index with open preview since only one can be open at a time. -1 is all closed
      hasPermission: false,
      // check for permission for user to jam on this Jam
      hasShownDoubleClickToCommentBanner: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentDidMount", function _callee() {
      var _this$state, jamTime, jamFilledCookie, selectedDemoUserIndex;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, jamTime = _this$state.jamTime, jamFilledCookie = _this$state.jamFilledCookie; // if cookie is in the query param, save it as a cookie and in local storage 

              if (!jamFilledCookie) {
                _context.next = 6;
                break;
              }

              document.cookie = "jam_filled_cookie=".concat(jamFilledCookie, ", domain=").concat(window.location.host);
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_getUserByIdInJamFilledStorage__WEBPACK_IMPORTED_MODULE_16__["default"])());

            case 5:
              window.location.search = '';

            case 6:
              // if demo, load in demo users
              if (window.location.host == 'letsjam.xyz' || window.location.host == '127.0.0.1:3001') {
                // choose a demo user
                selectedDemoUserIndex = Math.floor(Math.random() * 10);
                document.cookie = "jam_filled_cookie=".concat(_util_demoUsers__WEBPACK_IMPORTED_MODULE_25__["default"][selectedDemoUserIndex].token);
                localStorage.setItem('jamUser', JSON.stringify(_util_demoUsers__WEBPACK_IMPORTED_MODULE_25__["default"][selectedDemoUserIndex]));
              }

              if (!jamTime) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.fetchInitialJamTimeData());

            case 10:
              // some toast configuration
              if (react_toastify__WEBPACK_IMPORTED_MODULE_22__["toast"]) react_toastify__WEBPACK_IMPORTED_MODULE_22__["toast"].configure({
                autoClose: 5000,
                position: "top-center",
                pauseOnHover: true,
                hideProgressBar: true,
                transition: react_toastify__WEBPACK_IMPORTED_MODULE_22__["Slide"],
                toastClassName: 'jam---toast'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "fetchInitialJamTimeData", function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.handleAuthentication());

            case 2:
              _context2.t0 = _this;
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_getThreads__WEBPACK_IMPORTED_MODULE_18__["default"])());

            case 5:
              _context2.t1 = _context2.sent;
              _context2.t2 = {
                threads: _context2.t1
              };

              _context2.t3 = function () {
                _this.setState({
                  ready: true
                });
              };

              _context2.t0.setState.call(_context2.t0, _context2.t2, _context2.t3);

              _context2.t4 = _this;
              _context2.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_getPeopleInTheJam__WEBPACK_IMPORTED_MODULE_24__["default"])());

            case 12:
              _context2.t5 = _context2.sent;
              _context2.t6 = {
                mentions: _context2.t5
              };

              _context2.t4.setState.call(_context2.t4, _context2.t6);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClick", function (e) {
      var _this$state2 = _this.state,
          whichThreadIsOpen = _this$state2.whichThreadIsOpen,
          newCommentEditorOpen = _this$state2.newCommentEditorOpen;

      if (Object(_util_fetchApiHelpers_clickIsNotOnJamElement__WEBPACK_IMPORTED_MODULE_26__["default"])(e)) {
        // if editor is open, close it
        if (newCommentEditorOpen) {
          _this.setState({
            newCommentEditorOpen: false
          });
        } else if (whichThreadIsOpen > -1) {
          // else if a thread is open, close it
          _this.setState({
            whichThreadIsOpen: -1
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDoubleClick", function (e) {
      var _this$state3 = _this.state,
          whichThreadIsOpen = _this$state3.whichThreadIsOpen,
          newCommentEditorOpen = _this$state3.newCommentEditorOpen;

      if (Object(_util_fetchApiHelpers_clickIsNotOnJamElement__WEBPACK_IMPORTED_MODULE_26__["default"])(e)) {
        // if editor is open, close it
        if (newCommentEditorOpen) {
          _this.setState({
            newCommentEditorOpen: false
          });
        } else if (whichThreadIsOpen > -1) {
          // else if a thread is open, close it
          _this.setState({
            whichThreadIsOpen: -1
          });
        } else {
          // else create a new commment
          _this.createNewComment(e);
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "toggleJamMode", function _callee3() {
      var newJamMode;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newJamMode = !_this.state.jamTime;

              _this.setState({
                jamTime: newJamMode
              }); //  if jam time, make sure user is authed and has permissions


              if (!newJamMode) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.handleAuthentication().then(function () {
                // tell the user how to jam
                if (!_this.state.hasShownDoubleClickToCommentBanner) _this.notify("Hey! You’re in 🍓jam mode. Double click to add a comment.");
              }));

            case 5:
              if (!(newJamMode && !_this.state.threads.length)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.fetchInitialJamTimeData());

            case 8:
              // click event handler
              if (newJamMode) {
                document.addEventListener('click', _this.handleClick);
                document.addEventListener('dblclick', _this.handleDoubleClick);
              } else {
                document.removeEventListener('click', _this.handleClick);
                document.removeEventListener('dblclick', _this.handleDoubleClick);
              }

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleAuthentication", function _callee4() {
      var authenticated, permissioned, loginSuccess;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              authenticated = Object(_util_isAuthenticated__WEBPACK_IMPORTED_MODULE_12__["default"])(); // check if jam_filled_cookie present        

              if (!authenticated) {
                _context4.next = 13;
                break;
              }

              if (Object(_util_getUserFromLocalStorage__WEBPACK_IMPORTED_MODULE_17__["default"])()) {
                _context4.next = 5;
                break;
              }

              _context4.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_getUserByIdInJamFilledStorage__WEBPACK_IMPORTED_MODULE_16__["default"])());

            case 5:
              // then get user from local storage
              _this.setState({
                loggedInUser: Object(_util_getUserFromLocalStorage__WEBPACK_IMPORTED_MODULE_17__["default"])()
              }); // check permissions - can they access this jam?


              _context4.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_isPermissioned__WEBPACK_IMPORTED_MODULE_13__["default"])());

            case 8:
              permissioned = _context4.sent;

              _this.setState({
                hasPermission: permissioned
              }); // if no, need to redirect them to request permission


              if (!permissioned) window.open("".concat(_util_config__WEBPACK_IMPORTED_MODULE_27__["API_HOSTNAME"], "?state=request-access&jamId=").concat(_util_config__WEBPACK_IMPORTED_MODULE_27__["JAM_ID"], "&userId=").concat(_util_getUserIdFromJamFilledCookie__WEBPACK_IMPORTED_MODULE_15__["default"]), '_blank');
              _context4.next = 17;
              break;

            case 13:
              _context4.next = 15;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_logInUser__WEBPACK_IMPORTED_MODULE_14__["default"])());

            case 15:
              loginSuccess = _context4.sent;
              // sets user to local storage
              // set user to state
              if (loginSuccess) _this.setState({
                loggedInUser: Object(_util_getUserFromLocalStorage__WEBPACK_IMPORTED_MODULE_17__["default"])()
              });else {
                console.log('failed to login');
              }

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "createNewComment", function (e) {
      _this.setState({
        newCommentEditorOpen: true
      });

      _this.setState({
        clickX: e.pageX,
        clickY: e.pageY
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateThread", function (newThread) {
      var keepThreadOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // this is called after a comment is posted, when thread is moved, and when thread is resolved, to update the thread in the ui
      var threads = _this.state.threads;
      var tempThreads = threads;
      var index = threads.findIndex(function (thread) {
        return thread._id == newThread._id;
      });
      index > -1 ? tempThreads[index] = newThread : tempThreads.push(newThread);

      _this.setState({
        threads: tempThreads,
        tempThreadIndexForUpdateThreadFunction: index
      }, function () {
        // to keep the thread open after commenting
        if (keepThreadOpen) {
          var _this$state4 = _this.state,
              tempThreadIndexForUpdateThreadFunction = _this$state4.tempThreadIndexForUpdateThreadFunction,
              _threads = _this$state4.threads;
          if (tempThreadIndexForUpdateThreadFunction == -1) _this.updateWhichThreadIsOpen(_threads.length - 1);else _this.updateWhichThreadIsOpen(tempThreadIndexForUpdateThreadFunction);
        }
      });

      if (keepThreadOpen) {
        // if newComment open, close it
        _this.setState({
          newCommentEditorOpen: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "deleteThread", function (threadId) {
      try {
        var threads = _this.state.threads;
        var tempThreads = threads;
        var index = threads.findIndex(function (thread) {
          return thread._id == threadId;
        });
        tempThreads.splice(index, 1);

        _this.setState({
          threads: tempThreads
        });

        _this.updateWhichThreadIsOpen(-1);
      } catch (e) {
        console.log(e);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateWhichThreadIsOpen", function (threadId) {
      _this.setState({
        whichThreadIsOpen: threadId
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "notify", function (msg) {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_22__["toast"])(msg);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          ready = _this$state5.ready,
          jamTime = _this$state5.jamTime,
          loggedInUser = _this$state5.loggedInUser,
          threads = _this$state5.threads,
          whichThreadIsOpen = _this$state5.whichThreadIsOpen,
          newCommentEditorOpen = _this$state5.newCommentEditorOpen,
          clickX = _this$state5.clickX,
          clickY = _this$state5.clickY,
          mentions = _this$state5.mentions;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 17
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "jam.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "jam-comment.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "thread.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "thread-editor.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.11.5/Draft.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "jamDraftJsMentionsStyles.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/react-toastify@5.5.0/dist/ReactToastify.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }
      })), __jsx(_components_JamButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        toggleJamMode: this.toggleJamMode,
        jamTime: jamTime,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 17
        }
      }), __jsx(_components_TypeJamToEnableJamBanner__WEBPACK_IMPORTED_MODULE_23__["default"], {
        jamTime: jamTime,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 17
        }
      }), ready && jamTime && threads.map(function (thread, index) {
        return __jsx(_components_JamThread__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: thread._id,
          thread: thread,
          loggedInUser: loggedInUser,
          updateThread: _this2.updateThread,
          threadOpen: whichThreadIsOpen == index ? true : false,
          updateWhichThreadIsOpen: _this2.updateWhichThreadIsOpen,
          threadIndex: index,
          deleteThread: _this2.deleteThread,
          mentions: mentions,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 69
          }
        });
      }), ready && jamTime && newCommentEditorOpen && __jsx(_components_JamCreateNewComment__WEBPACK_IMPORTED_MODULE_20__["default"], {
        loggedInUser: loggedInUser,
        x: clickX,
        y: clickY,
        updateThread: this.updateThread,
        mentions: mentions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 62
        }
      }), __jsx(_components_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        toggleJamMode: this.toggleJamMode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, "getInitialProps", function (_ref) {
  var query = _ref.query;
  return {
    jamFilledCookie: query['jam_filled_cookie']
  };
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, "getDerivedStateFromProps", function (props, state) {
  // if cookie is in the query param, save it as a cookie
  return {
    jamFilledCookie: props.jamFilledCookie
  };
});



/***/ })

})
//# sourceMappingURL=index.js.e865e37ab205aebaa26c.hot-update.js.map