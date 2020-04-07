webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/JamThread.js":
/*!*********************************!*\
  !*** ./components/JamThread.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JamThread; });
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
/* harmony import */ var _JamPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JamPreview */ "./components/JamPreview.js");
/* harmony import */ var _util_humanReadableTimeAgo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/humanReadableTimeAgo */ "./util/humanReadableTimeAgo.js");
/* harmony import */ var _util_fetchApiHelpers_resolveThreadById__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/fetchApiHelpers/resolveThreadById */ "./util/fetchApiHelpers/resolveThreadById.js");
/* harmony import */ var _JamThreadEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JamThreadEditor */ "./components/JamThreadEditor.js");
/* harmony import */ var _JamEditorDisplayMode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JamEditorDisplayMode */ "./components/JamEditorDisplayMode.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_fetchApiHelpers_editThread__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/fetchApiHelpers/editThread */ "./util/fetchApiHelpers/editThread.js");








var _jsxFileName = "/Users/danigrant/Projects/jam-plugin-nextjs/components/JamThread.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var JamThread = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(JamThread, _React$Component);

  var _super = _createSuper(JamThread);

  function JamThread(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JamThread);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      threadOpen: false,
      dragging: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handlePreviewClick", function (e) {
      var _this$props = _this.props,
          threadOpen = _this$props.threadOpen,
          threadIndex = _this$props.threadIndex,
          updateWhichThreadIsOpen = _this$props.updateWhichThreadIsOpen; // when one thread opens, other threads must close

      if (!e.target.className.includes('preview-dragger')) updateWhichThreadIsOpen(!threadOpen ? threadIndex : -1);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleThreadClick", function (e) {
      var changeState = _this.props.changeState;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleResolve", function _callee(e) {
      var _this$props2, thread, deleteThread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props2 = _this.props, thread = _this$props2.thread, deleteThread = _this$props2.deleteThread;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_resolveThreadById__WEBPACK_IMPORTED_MODULE_11__["default"])(thread._id));

            case 3:
              deleteThread(thread._id);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDragStart", function () {
      _this.setState({
        dragging: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDragEnd", function _callee2(e) {
      var _this$props3, thread, updateThread, updatedThread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props3 = _this.props, thread = _this$props3.thread, updateThread = _this$props3.updateThread;

              _this.setState({
                threadX: e.pageX,
                threadY: e.pageY,
                dragging: false
              });

              _context2.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_editThread__WEBPACK_IMPORTED_MODULE_15__["default"])(e.pageX, e.pageY, thread._id));

            case 4:
              updatedThread = _context2.sent;
              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(updateThread(updatedThread));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleOnDrag", function _callee3(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                threadX: e.pageX,
                threadY: e.pageY
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "toggleDragStatus", function (status) {
      var dragging = _this.state.dragging;

      _this.setState({
        dragging: status
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateThreadPosition", function (x, y) {
      _this.setState({
        threadX: x,
        threadY: y
      });
    });

    var _thread = props.thread;
    console.log('in the jamthread constructor');

    _this.setState({
      threadX: _thread.x,
      threadY: _thread.y
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(JamThread, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          thread = _this$props4.thread,
          threadOpen = _this$props4.threadOpen,
          updateThread = _this$props4.updateThread,
          loggedInUser = _this$props4.loggedInUser;
      var _this$state = this.state,
          threadX = _this$state.threadX,
          threadY = _this$state.threadY;

      if (threadOpen) {
        return (// <Draggable handle=".thread-header-container" onStop={this.handleDragEnd} onDrag={this.handleOnDrag} >
          __jsx("div", {
            style: {
              top: "".concat(threadY ? threadY : thread.y, "px"),
              left: "".concat(threadX ? threadX : thread.x, "px"),
              zIndex: "".concat(threadOpen ? 1000001 : 1000000)
            },
            id: "thread-container-".concat(thread._id),
            className: "thread-container ".concat(thread._id),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }
          }, __jsx("div", {
            className: "thread-header-container ".concat(thread._id),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 21
            }
          }, __jsx("div", {
            style: {
              display: 'flex'
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 25
            }
          }, __jsx("img", {
            className: "thread-header-author-avatar",
            src: thread.author.avatar,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }
          }), __jsx("div", {
            className: "thread-header-author-name",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }
          }, thread.author.name), __jsx("div", {
            className: "thread-header-created-at",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }
          }, Object(_util_humanReadableTimeAgo__WEBPACK_IMPORTED_MODULE_10__["default"])(thread._id))), __jsx("div", {
            onClick: this.handleResolve,
            className: "thread-header-resolve-button jam---button",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }
          }, "Resolve")), thread.comments.map(function (comment, index) {
            var rawMessageBlocks;

            try {
              rawMessageBlocks = JSON.parse(comment.message);
            } catch (e) {
              rawMessageBlocks = false;
            }

            if (index == 0) {
              return __jsx("div", {
                id: "thread-message-".concat(thread._id),
                key: "thread-message-".concat(thread._id),
                className: "thread-message first-comment",
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 29
                }
              }, __jsx(_JamEditorDisplayMode__WEBPACK_IMPORTED_MODULE_13__["default"], {
                rawMessageBlocks: rawMessageBlocks,
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 33
                }
              }));
            } else {
              return __jsx("div", {
                key: "thread-comment-".concat(index, "-").concat(thread._id),
                className: "comment-container ".concat(thread._id),
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 29
                }
              }, __jsx("div", {
                className: "comment-header",
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 33
                }
              }, __jsx("img", {
                className: "comment-avatar",
                src: comment.author.avatar,
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 37
                }
              }), __jsx("div", {
                className: "comment-author",
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }
              }, comment.author.name), __jsx("div", {
                className: "comment-time",
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }
              }, Object(_util_humanReadableTimeAgo__WEBPACK_IMPORTED_MODULE_10__["default"])(comment._id))), __jsx(_JamEditorDisplayMode__WEBPACK_IMPORTED_MODULE_13__["default"], {
                rawMessageBlocks: rawMessageBlocks,
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 33
                }
              }));
            }
          }), __jsx(_JamThreadEditor__WEBPACK_IMPORTED_MODULE_12__["default"], {
            loggedInUser: loggedInUser,
            thread: thread,
            updateThread: updateThread,
            mentions: this.props.mentions,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 21
            }
          })) // </Draggable>

        );
      } else {
        return __jsx(_JamPreview__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handlePreviewClick: this.handlePreviewClick,
          thread: thread,
          updateThread: updateThread,
          toggleDragStatus: this.toggleDragStatus,
          updateThreadPosition: this.updateThreadPosition,
          threadX: threadX,
          threadY: threadY,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }
        });
      }
    }
  }]);

  return JamThread;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b95edac68e04eb317833.hot-update.js.map