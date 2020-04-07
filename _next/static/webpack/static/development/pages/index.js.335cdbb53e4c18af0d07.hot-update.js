webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/JamPreview.js":
/*!**********************************!*\
  !*** ./components/JamPreview.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JamPreview; });
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
/* harmony import */ var _util_humanReadableTimeAgo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/humanReadableTimeAgo */ "./util/humanReadableTimeAgo.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/web/react-draggable.min.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util_fetchApiHelpers_editThread__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/fetchApiHelpers/editThread */ "./util/fetchApiHelpers/editThread.js");








var _jsxFileName = "/Users/danigrant/Projects/jam-plugin-nextjs/components/JamPreview.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var JamPreview = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(JamPreview, _React$Component);

  var _super = _createSuper(JamPreview);

  function JamPreview(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JamPreview);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "createMessagePreview", function () {
      var thread = _this.props.thread;
      var jsonifiedCommentMessage = JSON.parse(thread.comments[thread.comments.length - 1].message);
      var messageConvertedFromRaw = Object(draft_js__WEBPACK_IMPORTED_MODULE_10__["convertFromRaw"])(jsonifiedCommentMessage);
      var tempEditorState = draft_js__WEBPACK_IMPORTED_MODULE_10__["EditorState"].createWithContent(messageConvertedFromRaw);
      var commentText = tempEditorState.getCurrentContent().getPlainText("\x01");
      return commentText.replace("\x01", ' ');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "createAvatarsArray", function () {
      var thread = _this.props.thread;
      var authorsArray = [];
      thread.comments.forEach(function (comment) {
        // if not alreadt in the authors aray, add it
        if (!authorsArray.some(function (author) {
          return author.name === comment.author.name;
        }) && authorsArray.length < 6) {
          authorsArray.push(comment.author);
        }
      });
      return authorsArray.map(function (author) {
        return __jsx("img", {
          key: author._id,
          src: author.avatar,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 45
          }
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDragStart", function () {
      _this.props.toggleDragStatus(true);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDragEnd", function _callee(e) {
      var _this$props, thread, updateThread, toggleDragStatus, handlePreviewClick, updateThreadPosition, _this$getMousePosWith, x, y, updatedThread;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, thread = _this$props.thread, updateThread = _this$props.updateThread, toggleDragStatus = _this$props.toggleDragStatus, handlePreviewClick = _this$props.handlePreviewClick, updateThreadPosition = _this$props.updateThreadPosition;
              console.log(e);
              toggleDragStatus(false);

              if (!(!e.target.className.includes('preview-dragger') && e.type !== "mouseup")) {
                _context.next = 8;
                break;
              }

              console.log('not a real click, opening the preview'); // not a real drag just open the preview    

              handlePreviewClick(e);
              _context.next = 15;
              break;

            case 8:
              _this$getMousePosWith = _this.getMousePosWithinElement(e), x = _this$getMousePosWith.x, y = _this$getMousePosWith.y;
              updateThreadPosition(x, y);
              _context.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_util_fetchApiHelpers_editThread__WEBPACK_IMPORTED_MODULE_12__["default"])(x, y, thread._id));

            case 12:
              updatedThread = _context.sent;
              _context.next = 15;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(updateThread(updatedThread, false));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleOnDrag", function (e) {
      var updateThreadPosition = _this.props.updateThreadPosition;

      if (e.type === 'mousemove') {// e.target.className.includes('preview-dragger')            
        // updateThreadPosition(e.pageX, e.pageY)
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "stopImageFromDragging", function (e) {
      e.preventDefault();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getMousePosWithinElement", function (e) {
      console.log(e.target.parentNode);
      var element = e.target.parentNode.getBoundingClientRect();
      console.log(element);
      var x = e.clientX - (e.clientX - element.left);
      var y = e.clientY - (e.clientY - element.top);
      return {
        x: x,
        y: y
      };
    });

    var _thread = props.thread;
    _this.avatars = _this.createAvatarsArray();
    _this.previewText = _this.createMessagePreview();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(JamPreview, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          thread = _this$props2.thread,
          handlePreviewClick = _this$props2.handlePreviewClick;
      var _this$props3 = this.props,
          threadX = _this$props3.threadX,
          threadY = _this$props3.threadY;
      return (// <Draggable handle=".preview-dragger" onStart={this.handleDragStart} onStop={this.handleDragEnd} onDrag={this.handleOnDrag}>
        __jsx("div", {
          onClick: handlePreviewClick,
          key: "jam-preview-".concat(thread._id),
          style: {
            top: "".concat(threadY ? threadY : thread.y, "px"),
            left: "".concat(threadX ? threadX : thread.x, "px")
          },
          id: "preview-thread-".concat(thread._id),
          className: "jam-preview ".concat(thread._id),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "preview-container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }
        }, __jsx("img", {
          onDragStart: this.stopImageFromDragging,
          className: "preview-dragger",
          src: "/img/icons/draggable.svg",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }
        }), __jsx("div", {
          className: "preview-avatars",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }
        }, this.avatars), __jsx("div", {
          className: "preview-num-comments",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }
        }, "".concat(thread.comments.length, " ").concat(thread.comments.length > 1 ? "replies" : "comment")), __jsx("p", {
          className: "preview-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }
        }, this.previewText), __jsx("div", {
          className: "preview-reply-date",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }
        }, Object(_util_humanReadableTimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"])(thread.comments[thread.comments.length - 1]._id)))) // </Draggable>

      );
    }
  }]);

  return JamPreview;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.335cdbb53e4c18af0d07.hot-update.js.map