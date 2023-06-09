"use strict";(self.webpackChunklogousek=self.webpackChunklogousek||[]).push([[8368],{"./node_modules/mermaid/dist/journeyDiagram-b5476ffb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mermaid/dist/mermaid-ddfd1cde.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),_svgDrawCommon_f26cad39_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/mermaid/dist/svgDrawCommon-f26cad39.js"),parser=(__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js"),function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[1,2],$V1=[1,5],$V2=[6,9,11,17,18,20,22,23,24,26],$V3=[1,15],$V4=[1,16],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[1,24],$Va=[4,6,9,11,17,18,20,22,23,24,26],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1];case 3:case 7:case 8:this.$=[];break;case 4:$$[$0-1].push($$[$0]),this.$=$$[$0-1];break;case 5:case 6:this.$=$$[$0];break;case 11:yy.setDiagramTitle($$[$0].substr(6)),this.$=$$[$0].substr(6);break;case 12:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 13:case 14:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 15:yy.addSection($$[$0].substr(8)),this.$=$$[$0].substr(8);break;case 16:yy.addTask($$[$0-1],$$[$0]),this.$="task";break;case 18:yy.parseDirective("%%{","open_directive");break;case 19:yy.parseDirective($$[$0],"type_directive");break;case 20:$$[$0]=$$[$0].trim().replace(/'/g,'"'),yy.parseDirective($$[$0],"arg_directive");break;case 21:yy.parseDirective("}%%","close_directive","journey")}},table:[{3:1,4:$V0,7:3,12:4,26:$V1},{1:[3]},o($V2,[2,3],{5:6}),{3:7,4:$V0,7:3,12:4,26:$V1},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:$V3,18:$V4,20:$V5,22:$V6,23:$V7,24:$V8,26:$V1},{1:[2,2]},{14:22,15:[1,23],29:$V9},o([15,29],[2,19]),o($V2,[2,8],{1:[2,1]}),o($V2,[2,4]),{7:21,10:25,12:4,17:$V3,18:$V4,20:$V5,22:$V6,23:$V7,24:$V8,26:$V1},o($V2,[2,6]),o($V2,[2,7]),o($V2,[2,11]),{19:[1,26]},{21:[1,27]},o($V2,[2,14]),o($V2,[2,15]),{25:[1,28]},o($V2,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},o($V2,[2,5]),o($V2,[2,12]),o($V2,[2,13]),o($V2,[2,16]),o($Va,[2,9]),{14:32,29:$V9},{29:[2,20]},{11:[1,33]},o($Va,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,TERROR=2,EOF=1,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;function lex(){var token;return"number"!=typeof(token=tstack.pop()||lexer2.lex()||EOF)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),token}"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(symbol=lex()),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>TERROR&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==EOF?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:case 6:case 8:case 9:break;case 7:return 11;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}());parser.parser=parser;const parser$1=parser;let currentSection="";const sections=[],tasks=[],rawTasks=[],compileTasks=function(){let allProcessed=!0;for(const[i,rawTask]of rawTasks.entries())rawTasks[i].processed,allProcessed=allProcessed&&rawTask.processed;return allProcessed},db={parseDirective:function(statement,context,type){_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.m.parseDirective(this,statement,context,type)},getConfig:()=>(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey,clear:function(){sections.length=0,tasks.length=0,currentSection="",rawTasks.length=0,(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.v)()},setDiagramTitle:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.r,getDiagramTitle:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.t,setAccTitle:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.s,getAccTitle:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.g,setAccDescription:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.b,getAccDescription:_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.a,addSection:function(txt){currentSection=txt,sections.push(txt)},getSections:function(){return sections},getTasks:function(){let allItemsProcessed=compileTasks();let iterationCount=0;for(;!allItemsProcessed&&iterationCount<100;)allItemsProcessed=compileTasks(),iterationCount++;return tasks.push(...rawTasks),tasks},addTask:function(descr,taskData){const pieces=taskData.substr(1).split(":");let score=0,peeps=[];1===pieces.length?(score=Number(pieces[0]),peeps=[]):(score=Number(pieces[0]),peeps=pieces[1].split(","));const peopleList=peeps.map((s=>s.trim())),rawTask={section:currentSection,type:currentSection,people:peopleList,task:descr,score};rawTasks.push(rawTask)},addTaskOrg:function(descr){const newTask={section:currentSection,type:currentSection,description:descr,task:descr,classes:[]};tasks.push(newTask)},getActors:function(){return function(){const tempActors=[];return tasks.forEach((task=>{task.people&&tempActors.push(...task.people)})),[...new Set(tempActors)].sort()}()}},styles=options=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${options.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${options.textColor}\n  }\n\n  .legend {\n    fill: ${options.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${options.textColor}\n  }\n\n  .face {\n    ${options.faceColor?`fill: ${options.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${options.mainBkg};\n    stroke: ${options.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${options.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${options.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${options.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${options.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${options.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${options.tertiaryColor};\n    border: 1px solid ${options.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${options.fillType0?`fill: ${options.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${options.fillType0?`fill: ${options.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${options.fillType0?`fill: ${options.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${options.fillType0?`fill: ${options.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${options.fillType0?`fill: ${options.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${options.fillType0?`fill: ${options.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${options.fillType0?`fill: ${options.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${options.fillType0?`fill: ${options.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${options.actor0?`fill: ${options.actor0}`:""};\n  }\n  .actor-1 {\n    ${options.actor1?`fill: ${options.actor1}`:""};\n  }\n  .actor-2 {\n    ${options.actor2?`fill: ${options.actor2}`:""};\n  }\n  .actor-3 {\n    ${options.actor3?`fill: ${options.actor3}`:""};\n  }\n  .actor-4 {\n    ${options.actor4?`fill: ${options.actor4}`:""};\n  }\n  .actor-5 {\n    ${options.actor5?`fill: ${options.actor5}`:""};\n  }\n`,drawRect=function(elem,rectData){return(0,_svgDrawCommon_f26cad39_js__WEBPACK_IMPORTED_MODULE_5__.d)(elem,rectData)},drawCircle=function(element,circleData){const circleElement=element.append("circle");return circleElement.attr("cx",circleData.cx),circleElement.attr("cy",circleData.cy),circleElement.attr("class","actor-"+circleData.pos),circleElement.attr("fill",circleData.fill),circleElement.attr("stroke",circleData.stroke),circleElement.attr("r",circleData.r),void 0!==circleElement.class&&circleElement.attr("class",circleElement.class),void 0!==circleData.title&&circleElement.append("title").text(circleData.title),circleElement},drawText=function(elem,textData){return(0,_svgDrawCommon_f26cad39_js__WEBPACK_IMPORTED_MODULE_5__.f)(elem,textData)};let taskCount=-1;const _drawTextCandidateFunc=function(){function byText(content,g,x,y,width,height,textAttrs,colour){_setTextAttrs(g.append("text").attr("x",x+width/2).attr("y",y+height/2+5).style("font-color",colour).style("text-anchor","middle").text(content),textAttrs)}function byTspan(content,g,x,y,width,height,textAttrs,conf2,colour){const{taskFontSize,taskFontFamily}=conf2,lines=content.split(/<br\s*\/?>/gi);for(let i=0;i<lines.length;i++){const dy=i*taskFontSize-taskFontSize*(lines.length-1)/2,text=g.append("text").attr("x",x+width/2).attr("y",y).attr("fill",colour).style("text-anchor","middle").style("font-size",taskFontSize).style("font-family",taskFontFamily);text.append("tspan").attr("x",x+width/2).attr("dy",dy).text(lines[i]),text.attr("y",y+height/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),_setTextAttrs(text,textAttrs)}}function byFo(content,g,x,y,width,height,textAttrs,conf2){const body=g.append("switch"),text=body.append("foreignObject").attr("x",x).attr("y",y).attr("width",width).attr("height",height).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");text.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(content),byTspan(content,body,x,y,width,height,textAttrs,conf2),_setTextAttrs(text,textAttrs)}function _setTextAttrs(toText,fromTextAttrsDict){for(const key in fromTextAttrsDict)key in fromTextAttrsDict&&toText.attr(key,fromTextAttrsDict[key])}return function(conf2){return"fo"===conf2.textPlacement?byFo:"old"===conf2.textPlacement?byText:byTspan}}(),svgDraw_drawCircle=drawCircle,svgDraw_drawSection=function(elem,section,conf2){const g=elem.append("g"),rect=(0,_svgDrawCommon_f26cad39_js__WEBPACK_IMPORTED_MODULE_5__.g)();rect.x=section.x,rect.y=section.y,rect.fill=section.fill,rect.width=conf2.width*section.taskCount+conf2.diagramMarginX*(section.taskCount-1),rect.height=conf2.height,rect.class="journey-section section-type-"+section.num,rect.rx=3,rect.ry=3,drawRect(g,rect),_drawTextCandidateFunc(conf2)(section.text,g,rect.x,rect.y,rect.width,rect.height,{class:"journey-section section-type-"+section.num},conf2,section.colour)},svgDraw_drawText=drawText,svgDraw_drawTask=function(elem,task,conf2){const center=task.x+conf2.width/2,g=elem.append("g");taskCount++;g.append("line").attr("id","task"+taskCount).attr("x1",center).attr("y1",task.y).attr("x2",center).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(element,faceData){const circleElement=element.append("circle").attr("cx",faceData.cx).attr("cy",faceData.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),face=element.append("g");face.append("circle").attr("cx",faceData.cx-5).attr("cy",faceData.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),face.append("circle").attr("cx",faceData.cx+5).attr("cy",faceData.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),faceData.score>3?function smile(face2){const arc$1=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Nb1)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(15/2.2);face2.append("path").attr("class","mouth").attr("d",arc$1).attr("transform","translate("+faceData.cx+","+(faceData.cy+2)+")")}(face):faceData.score<3?function sad(face2){const arc$1=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Nb1)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(15/2.2);face2.append("path").attr("class","mouth").attr("d",arc$1).attr("transform","translate("+faceData.cx+","+(faceData.cy+7)+")")}(face):function ambivalent(face2){face2.append("line").attr("class","mouth").attr("stroke",2).attr("x1",faceData.cx-5).attr("y1",faceData.cy+7).attr("x2",faceData.cx+5).attr("y2",faceData.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(face)}(g,{cx:center,cy:300+30*(5-task.score),score:task.score});const rect=(0,_svgDrawCommon_f26cad39_js__WEBPACK_IMPORTED_MODULE_5__.g)();rect.x=task.x,rect.y=task.y,rect.fill=task.fill,rect.width=conf2.width,rect.height=conf2.height,rect.class="task task-type-"+task.num,rect.rx=3,rect.ry=3,drawRect(g,rect);let xPos=task.x+14;task.people.forEach((person=>{const colour=task.actors[person].color,circle={cx:xPos,cy:task.y,r:7,fill:colour,stroke:"#000",title:person,pos:task.actors[person].position};drawCircle(g,circle),xPos+=10})),_drawTextCandidateFunc(conf2)(task.task,g,rect.x,rect.y,rect.width,rect.height,{class:"task"},conf2,task.colour)},svgDraw_initGraphics=function(graphics){graphics.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},actors={};const conf=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey,LEFT_MARGIN=conf.leftMargin,bounds={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(obj,key,val,fun){void 0===obj[key]?obj[key]=val:obj[key]=fun(val,obj[key])},updateBounds:function(startx,starty,stopx,stopy){const conf2=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey,_self=this;let cnt=0;this.sequenceItems.forEach(function updateFn(type){return function updateItemBounds(item){cnt++;const n=_self.sequenceItems.length-cnt+1;_self.updateVal(item,"starty",starty-n*conf2.boxMargin,Math.min),_self.updateVal(item,"stopy",stopy+n*conf2.boxMargin,Math.max),_self.updateVal(bounds.data,"startx",startx-n*conf2.boxMargin,Math.min),_self.updateVal(bounds.data,"stopx",stopx+n*conf2.boxMargin,Math.max),"activation"!==type&&(_self.updateVal(item,"startx",startx-n*conf2.boxMargin,Math.min),_self.updateVal(item,"stopx",stopx+n*conf2.boxMargin,Math.max),_self.updateVal(bounds.data,"starty",starty-n*conf2.boxMargin,Math.min),_self.updateVal(bounds.data,"stopy",stopy+n*conf2.boxMargin,Math.max))}}())},insert:function(startx,starty,stopx,stopy){const _startx=Math.min(startx,stopx),_stopx=Math.max(startx,stopx),_starty=Math.min(starty,stopy),_stopy=Math.max(starty,stopy);this.updateVal(bounds.data,"startx",_startx,Math.min),this.updateVal(bounds.data,"starty",_starty,Math.min),this.updateVal(bounds.data,"stopx",_stopx,Math.max),this.updateVal(bounds.data,"stopy",_stopy,Math.max),this.updateBounds(_startx,_starty,_stopx,_stopy)},bumpVerticalPos:function(bump){this.verticalPos=this.verticalPos+bump,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},fills=conf.sectionFills,textColours=conf.sectionColours,drawTasks=function(diagram2,tasks2,verticalPos){const conf2=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey;let lastSection="";const taskPos=verticalPos+(2*conf2.height+conf2.diagramMarginY);let sectionNumber=0,fill="#CCC",colour="black",num=0;for(const[i,task]of tasks2.entries()){if(lastSection!==task.section){fill=fills[sectionNumber%fills.length],num=sectionNumber%fills.length,colour=textColours[sectionNumber%textColours.length];let taskInSectionCount=0;const currentSection2=task.section;for(let taskIndex=i;taskIndex<tasks2.length&&tasks2[taskIndex].section==currentSection2;taskIndex++)taskInSectionCount+=1;const section={x:i*conf2.taskMargin+i*conf2.width+LEFT_MARGIN,y:50,text:task.section,fill,num,colour,taskCount:taskInSectionCount};svgDraw_drawSection(diagram2,section,conf2),lastSection=task.section,sectionNumber++}const taskActors=task.people.reduce(((acc,actorName)=>(actors[actorName]&&(acc[actorName]=actors[actorName]),acc)),{});task.x=i*conf2.taskMargin+i*conf2.width+LEFT_MARGIN,task.y=taskPos,task.width=conf2.diagramMarginX,task.height=conf2.diagramMarginY,task.colour=colour,task.fill=fill,task.num=num,task.actors=taskActors,svgDraw_drawTask(diagram2,task,conf2),bounds.insert(task.x,task.y,task.x+task.width+conf2.taskMargin,450)}},renderer={setConf:function(cnf){Object.keys(cnf).forEach((function(key){conf[key]=cnf[key]}))},draw:function(text,id,version,diagObj){const conf2=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey;diagObj.db.clear(),diagObj.parser.parse(text+"\n");const securityLevel=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("body");bounds.init();const diagram2=root.select("#"+id);svgDraw_initGraphics(diagram2);const tasks2=diagObj.db.getTasks(),title=diagObj.db.getDiagramTitle(),actorNames=diagObj.db.getActors();for(const member in actors)delete actors[member];let actorPos=0;actorNames.forEach((actorName=>{actors[actorName]={color:conf2.actorColours[actorPos%conf2.actorColours.length],position:actorPos},actorPos++})),function drawActorLegend(diagram2){const conf2=(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.c)().journey;let yPos=60;Object.keys(actors).forEach((person=>{const colour=actors[person].color,circleData={cx:20,cy:yPos,r:7,fill:colour,stroke:"#000",pos:actors[person].position};svgDraw_drawCircle(diagram2,circleData);const labelData={x:40,y:yPos+7,fill:"#666",text:person,textMargin:5|conf2.boxTextMargin};svgDraw_drawText(diagram2,labelData),yPos+=20}))}(diagram2),bounds.insert(0,0,LEFT_MARGIN,50*Object.keys(actors).length),drawTasks(diagram2,tasks2,0);const box=bounds.getBounds();title&&diagram2.append("text").text(title).attr("x",LEFT_MARGIN).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const height=box.stopy-box.starty+2*conf2.diagramMarginY,width=LEFT_MARGIN+box.stopx+2*conf2.diagramMarginX;(0,_mermaid_ddfd1cde_js__WEBPACK_IMPORTED_MODULE_4__.i)(diagram2,height,width,conf2.useMaxWidth),diagram2.append("line").attr("x1",LEFT_MARGIN).attr("y1",4*conf2.height).attr("x2",width-LEFT_MARGIN-4).attr("y2",4*conf2.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const extraVertForTitle=title?70:0;diagram2.attr("viewBox",`${box.startx} -25 ${width} ${height+extraVertForTitle}`),diagram2.attr("preserveAspectRatio","xMinYMin meet"),diagram2.attr("height",height+extraVertForTitle+25)}},diagram={parser:parser$1,db,renderer,styles,init:cnf=>{renderer.setConf(cnf.journey),db.clear()}}},"./node_modules/mermaid/dist/svgDrawCommon-f26cad39.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>drawBackgroundRect,b:()=>drawEmbeddedImage,c:()=>drawImage,d:()=>drawRect,e:()=>getTextObj,f:()=>drawText,g:()=>getNoteRect});var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js");const drawRect=function(elem,rectData){const rectElem=elem.append("rect");if(rectElem.attr("x",rectData.x),rectElem.attr("y",rectData.y),rectElem.attr("fill",rectData.fill),rectElem.attr("stroke",rectData.stroke),rectElem.attr("width",rectData.width),rectElem.attr("height",rectData.height),rectElem.attr("rx",rectData.rx),rectElem.attr("ry",rectData.ry),"undefined"!==rectData.attrs&&null!==rectData.attrs)for(let attrKey in rectData.attrs)rectElem.attr(attrKey,rectData.attrs[attrKey]);return"undefined"!==rectData.class&&rectElem.attr("class",rectData.class),rectElem},drawBackgroundRect=function(elem,bounds){drawRect(elem,{x:bounds.startx,y:bounds.starty,width:bounds.stopx-bounds.startx,height:bounds.stopy-bounds.starty,fill:bounds.fill,stroke:bounds.stroke,class:"rect"}).lower()},drawText=function(elem,textData){const nText=textData.text.replace(/<br\s*\/?>/gi," "),textElem=elem.append("text");textElem.attr("x",textData.x),textElem.attr("y",textData.y),textElem.attr("class","legend"),textElem.style("text-anchor",textData.anchor),void 0!==textData.class&&textElem.attr("class",textData.class);const span=textElem.append("tspan");return span.attr("x",textData.x+2*textData.textMargin),span.text(nText),textElem},drawImage=function(elem,x,y,link){const imageElem=elem.append("image");imageElem.attr("x",x),imageElem.attr("y",y);var sanitizedLink=(0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__.N)(link);imageElem.attr("xlink:href",sanitizedLink)},drawEmbeddedImage=function(elem,x,y,link){const imageElem=elem.append("use");imageElem.attr("x",x),imageElem.attr("y",y);const sanitizedLink=(0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__.N)(link);imageElem.attr("xlink:href","#"+sanitizedLink)},getNoteRect=function(){return{x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}},getTextObj=function(){return{x:0,y:0,width:100,height:100,fill:void 0,anchor:void 0,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0,valign:void 0}}}}]);