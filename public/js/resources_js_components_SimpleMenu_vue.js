(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SimpleMenu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SimpleMenu",
  components: {
    IconSlot: function IconSlot() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_IconSlotComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./IconSlotComponent */ "./resources/js/components/IconSlotComponent.vue"));
    }
  },
  data: function data() {
    return {
      selectedItemId: 1,
      isOpen: false
    };
  },
  props: {
    textDirection: {
      type: String,
      "default": 'ltr'
    },
    menu: {
      type: Object,
      required: true,
      "default": function _default() {
        return {
          id: 0,
          title: '',
          icon: null,
          url: '#',
          subLinks: [{
            id: 0,
            title: '',
            icon: '',
            url: null
          }]
        };
      }
    }
  },
  computed: {
    selectedItem: function selectedItem() {
      var _this = this;

      return this.menu.subLinks.filter(function (item) {
        return item.id === _this.selectedItemId;
      })[0];
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    selectLanguage: function selectLanguage(item) {
      this.selectedItemId = item.id;
      this.$i18n.locale = item.code;
      document.querySelector('html').setAttribute('dir', item.dir);
      this.toggleMenu();
    }
  },
  created: function created() {
    var _this2 = this;

    document.addEventListener('click', function (event) {
      if (!event.target.closest('#menu-' + _this2.menu.id)) _this2.isOpen = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-container[data-v-a2e88348] {\n  color: #999999;\n  font-size: 12px;\n}\n.menu-container:hover .menu-selected-item[data-v-a2e88348] {\n  color: #E42C2E;\n}\n.menu-container .menu-item[data-v-a2e88348]:hover, .menu-container .hover-selected[data-v-a2e88348] {\n  color: white;\n  background-color: #E42C2E;\n}\n.menu-container .drop-down-menu[data-v-a2e88348] {\n  top: 27px;\n  max-height: 0;\n  transition: max-height 0.5s ease-in-out;\n}\n.menu-container .menu-item[data-v-a2e88348] {\n  border: 1px solid #EBEBEB;\n}\n.menu-container a[data-v-a2e88348] {\n  text-decoration: none;\n  color: inherit;\n  font-size: 12px;\n}\n.menu-selected-item[data-v-a2e88348]:hover {\n  color: inherit;\n}\n.open[data-v-a2e88348] {\n  max-height: var(--menu-height) !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_style_index_0_id_a2e88348_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_style_index_0_id_a2e88348_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_style_index_0_id_a2e88348_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/SimpleMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/SimpleMenu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true& */ "./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true&");
/* harmony import */ var _SimpleMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _SimpleMenu_vue_vue_type_style_index_0_id_a2e88348_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& */ "./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SimpleMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a2e88348",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SimpleMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimpleMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_style_index_0_id_a2e88348_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=style&index=0&id=a2e88348&lang=sass&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleMenu_vue_vue_type_template_id_a2e88348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SimpleMenu.vue?vue&type=template&id=a2e88348&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "span",
    {
      staticClass:
        "menu-container position-relative d-inline-flex justify-content-center",
      attrs: { id: "menu-" + _vm.menu.id }
    },
    [
      _c(
        "span",
        { staticClass: "menu-selected-item", on: { click: _vm.toggleMenu } },
        [
          _vm.selectedItem.icon
            ? _c("IconSlot", {
                attrs: { IconName: _vm.selectedItem.icon, IconSize: "sm" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedItem.url
            ? _c("a", { attrs: { href: _vm.selectedItem.url } }, [
                _vm._v(_vm._s(_vm._f("capfw")(_vm.$t(_vm.selectedItem.title))))
              ])
            : _c("span", [
                _vm._v(_vm._s(_vm._f("capfw")(_vm.$t(_vm.selectedItem.title))))
              ]),
          _vm._v(" "),
          _c("IconSlot", { attrs: { IconName: "caret-down", IconSize: "sm" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "drop-down-menu position-absolute overflow-hidden",
          class: { open: _vm.isOpen },
          style: { "--menu-height": 38 * _vm.menu.subLinks.length + "px" },
          attrs: { id: "drop-down-menu" }
        },
        [
          _vm.menu.subLinks && _vm.menu.subLinks.length > 0
            ? _vm._l(_vm.menu.subLinks, function(item) {
                return _c(
                  "div",
                  {
                    key: item.id,
                    staticClass: "menu-item px-3 py-2",
                    class: { "hover-selected": item.id === _vm.selectedItemId },
                    on: {
                      click: function($event) {
                        return _vm.selectLanguage(item)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      [
                        item.icon
                          ? _c("IconSlot", {
                              attrs: { IconName: item.icon, IconSize: "sm" }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "item-hover",
                            attrs: { href: item.url }
                          },
                          [_vm._v(_vm._s(_vm._f("capfw")(_vm.$t(item.title))))]
                        )
                      ],
                      1
                    )
                  ]
                )
              })
            : _vm._e()
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