"use strict";(self.webpackChunklogousek=self.webpackChunklogousek||[]).push([[9029],{"./node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addHtmlLabel});var _util_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre-js/util.js");function addHtmlLabel(root,node){var fo=root.append("foreignObject").attr("width","100000"),div=fo.append("xhtml:div");div.attr("xmlns","http://www.w3.org/1999/xhtml");var label=node.label;switch(typeof label){case"function":div.insert(label);break;case"object":div.insert((function(){return label}));break;default:div.html(label)}_util_js__WEBPACK_IMPORTED_MODULE_0__.bg(div,node.labelStyle),div.style("display","inline-block"),div.style("white-space","nowrap");var client=div.node().getBoundingClientRect();return fo.attr("width",client.width).attr("height",client.height),fo}},"./node_modules/dagre-d3-es/src/dagre-js/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$p:()=>applyClass,O1:()=>edgeToId,WR:()=>applyTransition,bF:()=>isSubgraph,bg:()=>applyStyle});var lodash_es__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isPlainObject.js"),lodash_es__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/isFunction.js");function isSubgraph(g,v){return!!g.children(v).length}function edgeToId(e){return escapeId(e.v)+":"+escapeId(e.w)+":"+escapeId(e.name)}var ID_DELIM=/:/g;function escapeId(str){return str?String(str).replace(ID_DELIM,"\\:"):""}function applyStyle(dom,styleFn){styleFn&&dom.attr("style",styleFn)}function applyClass(dom,classFn,otherClasses){classFn&&dom.attr("class",classFn).attr("class",otherClasses+" "+dom.attr("class"))}function applyTransition(selection,g){var graph=g.graph();if(lodash_es__WEBPACK_IMPORTED_MODULE_0__.Z(graph)){var transition=graph.transition;if(lodash_es__WEBPACK_IMPORTED_MODULE_1__.Z(transition))return transition(selection)}return selection}},"./node_modules/mermaid/dist/flowDiagram-v2-8e52592d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/mermaid/dist/flowDb-52e24d17.js"),_styles_26373982_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/mermaid/dist/styles-26373982.js"),_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/mermaid/dist/commonDb-573409be.js");__webpack_require__("./node_modules/d3/src/index.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js"),__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/json.js"),__webpack_require__("./node_modules/@khanacademy/simple-markdown/dist/es/index.js"),__webpack_require__("./node_modules/dayjs/dayjs.min.js");const diagram={parser:_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_8__.p,db:_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_8__.f,renderer:_styles_26373982_js__WEBPACK_IMPORTED_MODULE_9__.f,styles:_styles_26373982_js__WEBPACK_IMPORTED_MODULE_9__.a,init:cnf=>{cnf.flowchart||(cnf.flowchart={}),cnf.flowchart.arrowMarkerAbsolute=cnf.arrowMarkerAbsolute,(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_10__.h)({flowchart:{arrowMarkerAbsolute:cnf.arrowMarkerAbsolute}}),_styles_26373982_js__WEBPACK_IMPORTED_MODULE_9__.f.setConf(cnf.flowchart),_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_8__.f.clear(),_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_8__.f.setGen("gen-2")}}},"./node_modules/mermaid/dist/styles-26373982.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>flowStyles,f:()=>flowRendererV2});var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),d3__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3/src/index.js"),_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/mermaid/dist/flowDb-52e24d17.js"),_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/mermaid/dist/commonDb-573409be.js"),_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/mermaid/dist/utils-d622194a.js"),_index_5219d011_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/mermaid/dist/index-5219d011.js"),dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js");const conf={},addVertices=function(vert,g,svgId,root,doc,diagObj){const svg=root.select(`[id="${svgId}"]`);Object.keys(vert).forEach((function(id){const vertex=vert[id];let classStr="default";vertex.classes.length>0&&(classStr=vertex.classes.join(" ")),classStr+=" flowchart-label";const styles=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.n)(vertex.styles);let vertexNode,vertexText=void 0!==vertex.text?vertex.text:vertex.id;if(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("vertex",vertex,vertex.labelType),"markdown"===vertex.labelType)_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("vertex",vertex,vertex.labelType);else if((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.k)((0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.htmlLabels)){const node={label:vertexText.replace(/fa[blrs]?:fa-[\w-]+/g,(s=>`<i class='${s.replace(":"," ")}'></i>`))};vertexNode=(0,dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__.a)(svg,node).node(),vertexNode.parentNode.removeChild(vertexNode)}else{const svgLabel=doc.createElementNS("http://www.w3.org/2000/svg","text");svgLabel.setAttribute("style",styles.labelStyle.replace("color:","fill:"));const rows=vertexText.split(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.e.lineBreakRegex);for(const row of rows){const tspan=doc.createElementNS("http://www.w3.org/2000/svg","tspan");tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),tspan.setAttribute("dy","1em"),tspan.setAttribute("x","1"),tspan.textContent=row,svgLabel.appendChild(tspan)}vertexNode=svgLabel}let radious=0,_shape="";switch(vertex.type){case"round":radious=5,_shape="rect";break;case"square":case"group":default:_shape="rect";break;case"diamond":_shape="question";break;case"hexagon":_shape="hexagon";break;case"odd":case"odd_right":_shape="rect_left_inv_arrow";break;case"lean_right":_shape="lean_right";break;case"lean_left":_shape="lean_left";break;case"trapezoid":_shape="trapezoid";break;case"inv_trapezoid":_shape="inv_trapezoid";break;case"circle":_shape="circle";break;case"ellipse":_shape="ellipse";break;case"stadium":_shape="stadium";break;case"subroutine":_shape="subroutine";break;case"cylinder":_shape="cylinder";break;case"doublecircle":_shape="doublecircle"}g.setNode(vertex.id,{labelStyle:styles.labelStyle,shape:_shape,labelText:vertexText,labelType:vertex.labelType,rx:radious,ry:radious,class:classStr,style:styles.style,id:vertex.id,link:vertex.link,linkTarget:vertex.linkTarget,tooltip:diagObj.db.getTooltip(vertex.id)||"",domId:diagObj.db.lookUpDomId(vertex.id),haveCallback:vertex.haveCallback,width:"group"===vertex.type?500:void 0,dir:vertex.dir,type:vertex.type,props:vertex.props,padding:(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.padding}),_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("setNode",{labelStyle:styles.labelStyle,labelType:vertex.labelType,shape:_shape,labelText:vertexText,rx:radious,ry:radious,class:classStr,style:styles.style,id:vertex.id,domId:diagObj.db.lookUpDomId(vertex.id),width:"group"===vertex.type?500:void 0,type:vertex.type,dir:vertex.dir,props:vertex.props,padding:(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.g)().flowchart.padding})}))},addEdges=function(edges,g,diagObj){_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 edges = ",edges);let defaultStyle,defaultLabelStyle,cnt=0,linkIdCnt={};if(void 0!==edges.defaultStyle){const defaultStyles=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.n)(edges.defaultStyle);defaultStyle=defaultStyles.style,defaultLabelStyle=defaultStyles.labelStyle}edges.forEach((function(edge){cnt++;var linkIdBase="L-"+edge.start+"-"+edge.end;void 0===linkIdCnt[linkIdBase]?(linkIdCnt[linkIdBase]=0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new entry",linkIdBase,linkIdCnt[linkIdBase])):(linkIdCnt[linkIdBase]++,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new entry",linkIdBase,linkIdCnt[linkIdBase]));let linkId=linkIdBase+"-"+linkIdCnt[linkIdBase];_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("abc78 new link id to be used is",linkIdBase,linkId,linkIdCnt[linkIdBase]);var linkNameStart="LS-"+edge.start,linkNameEnd="LE-"+edge.end;const edgeData={style:"",labelStyle:""};switch(edgeData.minlen=edge.length||1,"arrow_open"===edge.type?edgeData.arrowhead="none":edgeData.arrowhead="normal",edgeData.arrowTypeStart="arrow_open",edgeData.arrowTypeEnd="arrow_open",edge.type){case"double_arrow_cross":edgeData.arrowTypeStart="arrow_cross";case"arrow_cross":edgeData.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":edgeData.arrowTypeStart="arrow_point";case"arrow_point":edgeData.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":edgeData.arrowTypeStart="arrow_circle";case"arrow_circle":edgeData.arrowTypeEnd="arrow_circle"}let style="",labelStyle="";switch(edge.stroke){case"normal":style="fill:none;",void 0!==defaultStyle&&(style=defaultStyle),void 0!==defaultLabelStyle&&(labelStyle=defaultLabelStyle),edgeData.thickness="normal",edgeData.pattern="solid";break;case"dotted":edgeData.thickness="normal",edgeData.pattern="dotted",edgeData.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":edgeData.thickness="thick",edgeData.pattern="solid",edgeData.style="stroke-width: 3.5px;fill:none;";break;case"invisible":edgeData.thickness="invisible",edgeData.pattern="solid",edgeData.style="stroke-width: 0;fill:none;"}if(void 0!==edge.style){const styles=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.n)(edge.style);style=styles.style,labelStyle=styles.labelStyle}edgeData.style=edgeData.style+=style,edgeData.labelStyle=edgeData.labelStyle+=labelStyle,void 0!==edge.interpolate?edgeData.curve=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.o)(edge.interpolate,d3__WEBPACK_IMPORTED_MODULE_1__.c_6):void 0!==edges.defaultInterpolate?edgeData.curve=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.o)(edges.defaultInterpolate,d3__WEBPACK_IMPORTED_MODULE_1__.c_6):edgeData.curve=(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.o)(conf.curve,d3__WEBPACK_IMPORTED_MODULE_1__.c_6),void 0===edge.text?void 0!==edge.style&&(edgeData.arrowheadStyle="fill: #333"):(edgeData.arrowheadStyle="fill: #333",edgeData.labelpos="c"),edgeData.labelType=edge.labelType,edgeData.label=edge.text.replace(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.e.lineBreakRegex,"\n"),void 0===edge.style&&(edgeData.style=edgeData.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),edgeData.labelStyle=edgeData.labelStyle.replace("color:","fill:"),edgeData.id=linkId,edgeData.classes="flowchart-link "+linkNameStart+" "+linkNameEnd,g.setEdge(edge.start,edge.end,edgeData,cnt)}))},flowRendererV2={setConf:function(cnf){const keys=Object.keys(cnf);for(const key of keys)conf[key]=cnf[key]},addVertices,addEdges,getClasses:function(text,diagObj){_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Extracting classes"),diagObj.db.clear();try{return diagObj.parse(text),diagObj.db.getClasses()}catch(e){return}},draw:function(text,id,_version,diagObj){_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Drawing flowchart"),diagObj.db.clear(),_flowDb_52e24d17_js__WEBPACK_IMPORTED_MODULE_5__.f.setGen("gen-2"),diagObj.parser.parse(text);let dir=diagObj.db.getDirection();void 0===dir&&(dir="TD");const{securityLevel,flowchart:conf2}=(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.g)(),nodeSpacing=conf2.nodeSpacing||50,rankSpacing=conf2.rankSpacing||50;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_1__.Ys)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_1__.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_1__.Ys)("body"),doc="sandbox"===securityLevel?sandboxElement.nodes()[0].contentDocument:document,g=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__.k({multigraph:!0,compound:!0}).setGraph({rankdir:dir,nodesep:nodeSpacing,ranksep:rankSpacing,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let subG;const subGraphs=diagObj.db.getSubGraphs();_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Subgraphs - ",subGraphs);for(let i2=subGraphs.length-1;i2>=0;i2--)subG=subGraphs[i2],_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Subgraph - ",subG),diagObj.db.addVertex(subG.id,{text:subG.title,type:subG.labelType},"group",void 0,subG.classes,subG.dir);const vert=diagObj.db.getVertices(),edges=diagObj.db.getEdges();_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Edges",edges);let i=0;for(i=subGraphs.length-1;i>=0;i--){subG=subGraphs[i],(0,d3__WEBPACK_IMPORTED_MODULE_1__.td_)("cluster").append("text");for(let j=0;j<subG.nodes.length;j++)_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_3__.l.info("Setting up subgraphs",subG.nodes[j],subG.id),g.setParent(subG.nodes[j],subG.id)}addVertices(vert,g,id,root,doc,diagObj),addEdges(edges,g);const svg=root.select(`[id="${id}"]`),element=root.select("#"+id+" g");if((0,_index_5219d011_js__WEBPACK_IMPORTED_MODULE_6__.r)(element,g,["point","circle","cross"],"flowchart",id),_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.u.insertTitle(svg,"flowchartTitleText",conf2.titleTopMargin,diagObj.db.getDiagramTitle()),(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_2__.s)(g,svg,conf2.diagramPadding,conf2.useMaxWidth),diagObj.db.indexNodes("subGraph"+i),!conf2.htmlLabels){const labels=doc.querySelectorAll('[id="'+id+'"] .edgeLabel .label');for(const label of labels){const dim=label.getBBox(),rect=doc.createElementNS("http://www.w3.org/2000/svg","rect");rect.setAttribute("rx",0),rect.setAttribute("ry",0),rect.setAttribute("width",dim.width),rect.setAttribute("height",dim.height),label.insertBefore(rect,label.firstChild)}}Object.keys(vert).forEach((function(key){const vertex=vert[key];if(vertex.link){const node=(0,d3__WEBPACK_IMPORTED_MODULE_1__.Ys)("#"+id+' [id="'+key+'"]');if(node){const link=doc.createElementNS("http://www.w3.org/2000/svg","a");link.setAttributeNS("http://www.w3.org/2000/svg","class",vertex.classes.join(" ")),link.setAttributeNS("http://www.w3.org/2000/svg","href",vertex.link),link.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===securityLevel?link.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):vertex.linkTarget&&link.setAttributeNS("http://www.w3.org/2000/svg","target",vertex.linkTarget);const linkNode=node.insert((function(){return link}),":first-child"),shape=node.select(".label-container");shape&&linkNode.append((function(){return shape.node()}));const label=node.select(".label");label&&linkNode.append((function(){return label.node()}))}}}))}},flowStyles=options=>`.label {\n    font-family: ${options.fontFamily};\n    color: ${options.nodeTextColor||options.textColor};\n  }\n  .cluster-label text {\n    fill: ${options.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${options.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${options.nodeTextColor||options.textColor};\n    color: ${options.nodeTextColor||options.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${options.mainBkg};\n    stroke: ${options.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${options.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${options.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${options.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${options.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${options.edgeLabelBackground};\n      fill: ${options.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${options.clusterBkg};\n    stroke: ${options.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${options.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${options.titleColor};\n  }\n  /* .cluster div {\n    color: ${options.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${options.fontFamily};\n    font-size: 12px;\n    background: ${options.tertiaryColor};\n    border: 1px solid ${options.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${options.textColor};\n  }\n`}}]);