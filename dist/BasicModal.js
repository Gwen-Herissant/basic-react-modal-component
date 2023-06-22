"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicModal;
var _react = _interopRequireDefault(require("react"));
require("./BasicModal.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BasicModal(_ref) {
  var isOpen = _ref.isOpen,
    closeModal = _ref.closeModal,
    _ref$textContent = _ref.textContent,
    textContent = _ref$textContent === void 0 ? '' : _ref$textContent;
  return /*#__PURE__*/_react.default.createElement("div", null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-btn",
    type: "buton",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark,
    size: "xl"
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-text"
  }, textContent))));
}
BasicModal.propTypes = {
  isOpen: _propTypes.default.func,
  closeModal: _propTypes.default.func,
  textContent: _propTypes.default.string.isRequired
};
BasicModal.defaultProps = {
  isOpen: false,
  closeModal: true
};