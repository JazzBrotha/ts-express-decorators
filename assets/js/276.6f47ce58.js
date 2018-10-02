(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{674:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated","aria-hidden":"true"}},[t._v("#")]),t._v(" Deprecated "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Deprecated } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/core"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v4.32.0/packages/core/src/decorators/deprecated.ts#L0-L0"}},[t._v("/packages/core/src/decorators/deprecated.ts")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"typescript-lang "},[t._v("function "),a("span",{staticClass:"token function"},[t._v("Deprecated")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("message"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("string")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),a("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{pre:!0},[a("p",[t._v("The "),a("code",[t._v("@Deprecated()")]),t._v(" decorators wraps the given method in such a way that it is marked as deprecated.")]),t._v(" "),a("div",{attrs:{class:"language-typescript extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[t._v("provide Foo "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n@"),a("span",{attrs:{class:"token function"}},[t._v("Deprecated")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Foo.method: Use Foo.method2 instead"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("method")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("When called, @Deprecated() will return a function that will emit a "),a("code",[t._v("DeprecationWarning")]),t._v(" using the "),a("code",[t._v("process.on('warning')")]),t._v(" event.\nBy default, this warning will be emitted and printed to "),a("code",[t._v("stderr")]),t._v(" exactly once, the first time it is called. After the warning is emitted, the wrapped method is called.")]),t._v(" "),a("p",[t._v("If either the "),a("code",[t._v("--no-deprecation")]),t._v(" or "),a("code",[t._v("--no-warnings")]),t._v(" command line flags are used, or if the "),a("code",[t._v("process.noDeprecation")]),t._v("\nproperty is set to "),a("code",[t._v("true")]),t._v(" prior to the first deprecation warning, the "),a("code",[t._v("@Deprecated()")]),t._v(" decorators does nothing.")]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("--trace-deprecation")]),t._v(" or "),a("code",[t._v("--trace-warnings")]),t._v(" command line flags are set, or the "),a("code",[t._v("process.traceDeprecation")]),t._v("\nproperty is set to "),a("code",[t._v("true")]),t._v(", a warning and a stack trace are printed to stderr the first time the deprecated function is called.")]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("--throw-deprecation")]),t._v(" command line flag is set, or the "),a("code",[t._v("process.throwDeprecation")]),t._v(" property is set to "),a("code",[t._v("true")]),t._v(",\nthen an exception will be thrown when the deprecated function is called.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("--throw-deprecation")]),t._v(" command line flag and "),a("code",[t._v("process.throwDeprecation")]),t._v(" property take precedence over "),a("code",[t._v("--trace-deprecation")]),t._v("\nand "),a("code",[t._v("process.traceDeprecation")]),t._v(".")])])}],!1,null,null,null);n.options.__file="Deprecated.md";e.default=n.exports}}]);