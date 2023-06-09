/*! For license information please see ApplicationModel-Components-Sidebar-PageNavigation-docs-mdx.890e2bd5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklogousek=self.webpackChunklogousek||[]).push([[8480],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/ApplicationModel/Components/Sidebar/PageNavigation/docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),mdx_mermaid_Mermaid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/mdx-mermaid/lib/Mermaid.mjs"),_styles_ts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/ApplicationModel/styles.ts"),_Components_properties_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/Components/properties-table/index.tsx"),_Components_reference_list__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/Components/reference-list/index.tsx"),_Components_component_info_table__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./stories/Components/component-info-table/index.tsx");__webpack_require__("./stories/Components/component-render/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)(),props.components);return _styles_ts__WEBPACK_IMPORTED_MODULE_3__||_missingMdxReference("S",!1),_styles_ts__WEBPACK_IMPORTED_MODULE_3__.MermaidWrapper||_missingMdxReference("S.MermaidWrapper",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_9__.h_,{title:"ApplicationModel/Components/Sidebar/PageNavigation/docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pagenavigation",children:"PageNavigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_component_info_table__WEBPACK_IMPORTED_MODULE_6__.Z,{name:"PageNavigation",description:"This is a page navigation.",source:"components/side-bar/page-navigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_properties_table__WEBPACK_IMPORTED_MODULE_4__.Z,{tableRows:[{name:"pageNav",type:"{\n              name: string;\n              icon: string;\n              title: string;\n              onClick: () => void;\n            }",defaultValue:"",description:"This is the menu configuration of the current page menu.",required:!0},{name:"setIsMenuShow",type:"(value: boolean) => void",defaultValue:"",description:"A callback that sets the isMenuShow.",required:!0},{name:"isMenuShow",type:"boolean",defaultValue:"",description:"Indicates whether the menu is open.",required:!0}]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_ts__WEBPACK_IMPORTED_MODULE_3__.MermaidWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(mdx_mermaid_Mermaid__WEBPACK_IMPORTED_MODULE_2__.G,{chart:'\n     classDiagram\n     direction RL\n     PageNavigation "1" <-- "1" PageNavigationWrapper\n     PageNavigationWrapper "1" <-- "1" H4\n     PageNavigationWrapper "1" <-- "1" ItemListWrapper\n     ItemListWrapper "1" <-- "1" ItemList\n\n     class PageNavigation:::green\n     class PageNavigationWrapper\n     class H4:::blue\n     class ItemListWrapper\n     class ItemList:::blue\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_reference_list__WEBPACK_IMPORTED_MODULE_5__.Z,{tableRows:[{name:"H4",description:"It is a Level 4 Header component"},{name:"ItemList",description:"It is a list of items."}]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"./stories/ApplicationModel/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MermaidWrapper:()=>MermaidWrapper});var _templateObject,dist=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/@storybook/theming/dist/index.mjs"),colors=__webpack_require__("./styles/colors/index.ts"),MermaidWrapper=dist.zo.div(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  // background: red;\n\n.nodes g > line {\ndisplay: none !important;\n}\n\n.label .classTitle > div {\nmargin-top: 12px !important;\n}\n\n.classTitle {\nheight: 48px !important;\n}\n\nrect {\n    fill: "," !important;\n    stroke: "," !important;\n}\n\n.green > rect {\n    fill: "," !important;\n    stroke: "," !important;\n}\n\n.blue > rect {\n    fill: "," !important;\n    stroke: "," !important;\n}\n\n.oval > rect {\n    rx: 50%;\n    ry: 50%;\n}\n\n.edgeLabels > .edgeTerminals > foreignObject {\n    overflow: visible;\n}\n\n"])),colors.C0.lightGrey,colors.C0.lightGrey,colors.C0.lightGreen,colors.C0.lightGreen,colors.C0.blue,colors.C0.blue)},"./stories/Components/component-info-table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ComponentInfoTable=function ComponentInfoTable(_ref){var name=_ref.name,description=_ref.description,source=_ref.source;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",null,"Basic Info"),__jsx("table",{style:{width:"100%"}},__jsx("tr",null,__jsx("th",null,"Name"),__jsx("td",null,name)),__jsx("tr",null,__jsx("th",null,"Description"),__jsx("td",null,description)),__jsx("tr",null,__jsx("th",null,"Source"),__jsx("td",null,source))))};ComponentInfoTable.__docgenInfo={description:"",methods:[],displayName:"ComponentInfoTable"};const __WEBPACK_DEFAULT_EXPORT__=ComponentInfoTable;try{componentinfotable.displayName="componentinfotable",componentinfotable.__docgenInfo={description:"",displayName:"componentinfotable",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Components/component-info-table/index.tsx#componentinfotable"]={docgenInfo:componentinfotable.__docgenInfo,name:"componentinfotable",path:"stories/Components/component-info-table/index.tsx#componentinfotable"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Components/component-render/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ComponentRenderTable=function ComponentRenderTable(_ref){var tableRows=_ref.tableRows;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",null,"Component Render"),__jsx("table",{style:{width:"100%"}},__jsx("tr",null,__jsx("th",null,"Name"),__jsx("th",null,"Rules")),Array.isArray(tableRows)&&tableRows.length?tableRows.map((function(tableRow){return __jsx("tr",{key:"table_row".concat(tableRow.name)},__jsx("td",null,tableRow.name),__jsx("td",null,tableRow.rules))})):"No rules"))};ComponentRenderTable.__docgenInfo={description:"",methods:[],displayName:"ComponentRenderTable"};const __WEBPACK_DEFAULT_EXPORT__=ComponentRenderTable;try{componentrender.displayName="componentrender",componentrender.__docgenInfo={description:"",displayName:"componentrender",props:{tableRows:{defaultValue:null,description:"",name:"tableRows",required:!0,type:{name:"[{ name: string; rules: string; }]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Components/component-render/index.tsx#componentrender"]={docgenInfo:componentrender.__docgenInfo,name:"componentrender",path:"stories/Components/component-render/index.tsx#componentrender"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Components/properties-table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PropertiesTable=function PropertiesTable(_ref){var tableRows=_ref.tableRows;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",null,"Properities"),__jsx("table",{style:{width:"100%"}},__jsx("tr",null,__jsx("th",null,"Name"),__jsx("th",null,"type"),__jsx("th",null,"Default value"),__jsx("th",null,"Description"),__jsx("th",null,"Required")),Array.isArray(tableRows)&&tableRows.length?tableRows.map((function(tableRow){return __jsx("tr",{key:"table_row".concat(tableRow.name)},__jsx("td",null,tableRow.name),__jsx("td",null,tableRow.type),__jsx("td",null,tableRow.defaultValue),__jsx("td",null,tableRow.description),__jsx("td",null,tableRow.required?"Yes":"No"))})):"No properties"))};PropertiesTable.__docgenInfo={description:"",methods:[],displayName:"PropertiesTable"};const __WEBPACK_DEFAULT_EXPORT__=PropertiesTable;try{propertiestable.displayName="propertiestable",propertiestable.__docgenInfo={description:"",displayName:"propertiestable",props:{tableRows:{defaultValue:null,description:"",name:"tableRows",required:!0,type:{name:"[{ name: string; type: string; defaultValue: string; description: string; required?: boolean | undefined; }]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Components/properties-table/index.tsx#propertiestable"]={docgenInfo:propertiestable.__docgenInfo,name:"propertiestable",path:"stories/Components/properties-table/index.tsx#propertiestable"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Components/reference-list/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ReferenceList=function ReferenceList(_ref){var tableRows=_ref.tableRows;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("h2",null,"Reference List"),__jsx("table",{style:{width:"100%"}},__jsx("tr",null,__jsx("th",null,"Name"),__jsx("th",null,"Description")),Array.isArray(tableRows)&&tableRows.length?tableRows.map((function(tableRow){return __jsx("tr",{key:"table_row".concat(tableRow.name)},__jsx("td",null,tableRow.name),__jsx("td",null,tableRow.description))})):"No references"))};ReferenceList.__docgenInfo={description:"",methods:[],displayName:"ReferenceList"};const __WEBPACK_DEFAULT_EXPORT__=ReferenceList;try{referencelist.displayName="referencelist",referencelist.__docgenInfo={description:"",displayName:"referencelist",props:{tableRows:{defaultValue:null,description:"",name:"tableRows",required:!0,type:{name:"[{ name: string; description: string; }]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Components/reference-list/index.tsx#referencelist"]={docgenInfo:referencelist.__docgenInfo,name:"referencelist",path:"stories/Components/reference-list/index.tsx#referencelist"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/mdx-mermaid/lib/Mermaid.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Mermaid});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),mermaid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/mermaid/dist/mermaid-ddfd1cde.js");const Mermaid=({chart,config:configSrc})=>{if("undefined"==typeof window)return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mermaid","data-mermaid-src":chart},chart);const config=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>"string"==typeof configSrc?JSON.parse(configSrc):configSrc),[configSrc]),html=document.querySelector("html"),[rerender,setRerender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),theme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function getTheme(html,config){let htmlTheme=html.getAttribute("data-theme")??"light";"light"!==htmlTheme&&"dark"!==htmlTheme&&(htmlTheme="light");const defaultTheme="light"===htmlTheme?"default":"dark";return config?.theme?.[htmlTheme]??config?.mermaid?.theme??defaultTheme}(html,config)),[config,rerender]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const observer=new MutationObserver((mutations=>{for(const mutation of mutations)if("attributes"===mutation.type&&"data-theme"===mutation.attributeName){setRerender((cur=>!cur));break}}));return observer.observe(html,{attributes:!0}),()=>{try{observer.disconnect()}catch{}}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{config&&(config.mermaid?mermaid__WEBPACK_IMPORTED_MODULE_1__.K.initialize({startOnLoad:!0,...config.mermaid,theme}):mermaid__WEBPACK_IMPORTED_MODULE_1__.K.initialize({startOnLoad:!0,theme}),document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((v=>{v.removeAttribute("data-processed"),v.innerHTML=v.getAttribute("data-mermaid-src")})),mermaid__WEBPACK_IMPORTED_MODULE_1__.K.contentLoaded())}),[config,theme]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{document.querySelectorAll('div.mermaid[data-processed="true"]').forEach((v=>{v.removeAttribute("data-processed"),v.innerHTML=v.getAttribute("data-mermaid-src")})),setTimeout(mermaid__WEBPACK_IMPORTED_MODULE_1__.K.contentLoaded,0)}),[chart]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mermaid","data-mermaid-src":chart},chart)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);