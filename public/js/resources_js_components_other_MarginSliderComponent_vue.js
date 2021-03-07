(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_other_MarginSliderComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MarginSliderComponent",
  data: function data() {
    return {
      activeImg: 0
    };
  },
  props: {
    slider: {
      type: Object,
      "default": function _default() {
        return {
          name: 'image-slide',
          images: [{
            id: 'imgOne',
            alt: '',
            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider22-635.jpg',
            content: {
              side: 'left',
              title: {
                active: true,
                content: ''
              },
              body: {
                active: true
              },
              button: {
                id: '',
                active: true,
                text: ''
              }
            }
          }, {
            id: 'imgTwo',
            alt: '',
            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider23-625.jpg',
            content: {
              side: 'left',
              title: {
                active: true,
                content: ''
              },
              body: {
                active: true
              },
              button: {
                id: '',
                active: true,
                text: ''
              }
            }
          }, {
            id: 'imgThree',
            alt: '',
            imgPath: 'https://demo.fieldthemes.com/techo/home2/modules/fieldslideshow/images/slider21-528.jpg',
            content: {
              side: 'left',
              title: {
                active: true,
                content: ''
              },
              body: {
                active: true
              },
              button: {
                id: '',
                active: true,
                text: ''
              }
            }
          }]
        };
      }
    }
  },
  methods: {
    isChecked: function isChecked(sel) {
      return this.slider.images.findIndex(function (el) {
        return el.id === sel;
      }) === this.activeImg;
    },
    slide: function slide(img) {
      this.activeImg = this.slider.images.findIndex(function (el) {
        return el.id === img.id;
      });
    }
  },
  computed: {},
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      if (_this.activeImg >= _this.slider.images.length - 1) _this.activeImg = 0;else _this.activeImg++;
    }, 5000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slider-container[data-v-47b85134] {\n  position: relative;\n  width: 100%;\n  height: calc(100vw/3);\n  overflow: hidden;\n}\n.slider-container .controls[data-v-47b85134] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 20px;\n}\n.slider-container .controls input[data-v-47b85134] {\n  display: none;\n}\n.slider-container .controls input:checked + label[data-v-47b85134] {\n  background-color: #E42C2E;\n}\n.slider-container .controls label[data-v-47b85134] {\n  display: inline-block;\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  border-width: 1px;\n  border-radius: 50%;\n  background-color: #202020;\n  transition: 1s;\n}\n.slider-container .controls label[data-v-47b85134]:not(:last-child) {\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n}\n.slider-container .controls label[data-v-47b85134]:hover {\n  background-color: #E42C2E;\n}\n.slider-container .slider[data-v-47b85134] {\n  transition: 1s;\n  display: flex;\n  width: calc(100%*var(--img-c));\n  height: inherit;\n}\n.slider-container .slider .content[data-v-47b85134] {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  inset-inline-start: 10%;\n  inset-block-start: 40%;\n}\n.slider-container .slider img[data-v-47b85134] {\n  width: calc(100%/var(--img-c));\n  height: inherit;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_style_index_0_id_47b85134_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_style_index_0_id_47b85134_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_style_index_0_id_47b85134_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/other/MarginSliderComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/other/MarginSliderComponent.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true& */ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true&");
/* harmony import */ var _MarginSliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarginSliderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _MarginSliderComponent_vue_vue_type_style_index_0_id_47b85134_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& */ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MarginSliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47b85134",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other/MarginSliderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarginSliderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_style_index_0_id_47b85134_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=style&index=0&id=47b85134&lang=sass&scoped=true&");


/***/ }),

/***/ "./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarginSliderComponent_vue_vue_type_template_id_47b85134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/MarginSliderComponent.vue?vue&type=template&id=47b85134&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "slider-container",
      style: { "--img-c": _vm.slider.images.length }
    },
    [
      _c(
        "span",
        { ref: "controls", staticClass: "controls" },
        [
          _vm._l(_vm.slider.images, function(img) {
            return [
              _c("input", {
                attrs: { type: "radio", name: _vm.slider.name, id: img.id },
                domProps: { checked: _vm.isChecked(img.id) }
              }),
              _vm._v(" "),
              _c("label", {
                attrs: { for: img.id },
                on: {
                  click: function($event) {
                    return _vm.slide(img)
                  }
                }
              })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slider",
          style: { marginInlineStart: -(_vm.activeImg * 100) + "%" }
        },
        [
          _vm._l(_vm.slider.images, function(img) {
            return [
              _c("img", {
                staticClass: "slided",
                attrs: { src: img.imgPath, alt: img.alt }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content" })
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);