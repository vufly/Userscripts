// ==UserScript==
// @name         SearchJumper
// @namespace    hoothin
// @version      1.9.33
// @author       hoothin
// @license      MPL-2.0
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAD+/v7////+/v7+/v7////+/v79/f3////////+/v7////////////+/v79/f3////+/v7/rP8zMzP/2f/R0dHAwMD/zf+vr69ZWVlKSkry8vL/vv/+5/7r6+uRkZGcnJx8fHxwcHD+7/7f39+kpKTMxXKjAAAAEXRSTlMA4wrL9ICvkxk56nVVI9WgZNxdEUkAAAE2SURBVDjLfdPZloMgDAZgFtHR2uU3LnWrXd//FUfIHKRT7XfhUYIkhINYqPyoM0SZTnIlPu2PEbwo2f8LqwTvIvMW/9H4oH+WeCqxQu79/xKr5N8aSmOD5gkGm3YuQYRNkU3CG+ynCYH6VsEycwW8wJXoDK8narlOIXI4Z6IKi47ucNI5A6vCOC41mBEaX8VCAuVQFEXzQODRzENDaVsRoSwYAgUrIecJI38MCAw8NkLaFCibphyDMusKox0DoJci+6615fcA2q5fikz8b/QC0HWuKTX8NnM/wbWSyL86qW01u1D3xEQ04dLSE0z6w3ILz9rWPq/hefslUN3uL+B6v/kKMiVmO2w6CSfGhqNg6oBVWvlbxTO+XAy1kiVWInTK8EZyfQFlZBDeKbEiNfFBSh2bNBj8BZ8mNsZysMSsAAAAAElFTkSuQmCC
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM.deleteValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @grant        GM.openInTab
// @grant        GM_openInTab
// @grant        GM.info
// @grant        GM_info
// @grant        unsafeWindow
// @compatible   edge tested with tm
// @compatible   Chrome tested with tm
// @compatible   Firefox tested with tm
// @compatible   Opera untested
// @compatible   Safari untested
// @compatible   ios tested with userscript
// @compatible   android tested with kiwi
// @supportURL   https://github.com/hoothin/SearchJumper/issues
// @homepage     https://github.com/hoothin/SearchJumper
// @require      https://update.greasyfork.org/scripts/484118/searchJumperDefaultConfig.js
// @connect      global.bing.com
// @connect      suggestqueries.google.com
// @connect      api.bing.com
// @connect      suggestion.baidu.com
// @connect      webdav.hoothin.com
// @connect      search.hoothin.com
// @connect      *
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SearchJumper.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/SearchJumper.meta.js
// ==/UserScript==
(async function(){"use strict";const Te=typeof unsafeWindow>"u"?window:unsafeWindow;if(Te.searchJumperInited)return;Te.searchJumperInited=!0;const lr=navigator&&navigator.clipboard,It=window.top!==window.self;if(It)try{if(window.name==="pagetual-iframe"||window.frameElement&&window.frameElement.name==="pagetual-iframe")return;if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(qe=>{window.addEventListener("load",Wi=>{setTimeout(()=>{qe(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Bi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Ai="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",nt="https://search.hoothin.com/",cr="https://hoothin.github.io/SearchJumper",pr=nt+"firstRun";let it=nt+"config/",rt=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!0,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function $i(){let Re=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,qe={};function Wi(){switch(Re){case"zh-CN":case"zh-SG":qe={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u7D22\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A\u641C\u7D22\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A\uFF0C\u53F3\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0A\u4E00\u4E2A`,inPagePlaceholder:"\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8F66\u8FDB\u884C\u9875\u5185\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u8FDE\u7EED\u6293\u53D6",editBtn:"\u7F16\u8F91\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u590D\u5236\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u5355\u8BCD\u6A21\u5F0F",copyEleBtn:"\u590D\u5236\u9009\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u5F00\u9009\u4E2D\u94FE\u63A5",maxEleBtn:"\u5C55\u5F00\u9009\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9009\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u5F00",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u590D\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6807\u7B7E\u9875\u4E2D\u641C\u7D22",locBtn:"\u5B9A\u4F4D\u4FA7\u8FB9\u680F",filterSites:"\u641C\u7D22\u5F15\u64CE",searchInPage:"\u9875\u5185\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u7D22\u8BCD",saveRuleBtn:"\u4FDD\u5B58\u5F53\u524D\u7AD9\u70B9\u7684\u641C\u7D22\u8BCD",wordContent:"\u641C\u7D22\u8BCD\u5185\u5BB9",wordHide:"\u9690\u85CF\u7236\u7EA7\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u4E3A\u5F53\u524D\u7236\u7EA7",wordStyle:"\u641C\u7D22\u8BCD\u6837\u5F0F",wordTitle:"\u641C\u7D22\u8BCD\u6CE8\u91CA",re:"\u6B63\u5219",ignoreCase:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filterLink:"\u7B5B\u9009\u94FE\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9875\u5185\u641C\u7D22\u8BCD",addSearchEngine:"\u6DFB\u52A0\u641C\u7D22\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52A8\u7F16\u8F91\u89C4\u5219\u5E76\u6DFB\u52A0\uFF1F",expand:"\u5C55\u5F00\u5269\u4F59\u7AD9\u70B9",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8BCD\u8BED",wordRange:"\u751F\u6548\u8303\u56F4",customInputFrame:"\u81EA\u5B9A\u4E49\u641C\u7D22\u53C2\u6570",customSubmit:"\u63D0\u4EA4\u641C\u7D22",finalSearch:"\u76EE\u6807\u641C\u7D22\u5B57\u4E32",search:"\u641C\u7D22\u6B64\u9879",siteKeywords:"\u5173\u952E\u8BCD(\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u70B9 URL \u5339\u914D\u6B63\u5219",openSelect:"\u6253\u5F00\u9009\u9879",openInDefault:"\u9ED8\u8BA4",openInNewTab:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00",openInCurrent:"\u5F53\u524D\u9875\u6253\u5F00",currentType:"\u5F53\u524D\u5206\u7C7B",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8FD8\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u62DF\u8F93\u5165\u641C\u7D22",inputAction:"\u8F93\u5165",clickAction:"\u70B9\u51FB",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u590D\u5236\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5185\u8F93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70B9\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53CC\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u590D\u5236\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8BF7\u8F93\u5165\u65B0\u503C",deleteConfirm:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417\uFF1F",sleepPrompt:"\u7B49\u5F85\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",startCache:"\u5F00\u59CB\u7F13\u5B58\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7F13\u5B58\u5B8C\u6BD5\uFF0C\u52FF\u5173\u95ED\u914D\u7F6E\u9875\uFF01",cacheOver:"\u6240\u6709\u56FE\u6807\u90FD\u5DF2\u7F13\u5B58\u5B8C\u6BD5\uFF01",cspDisabled:"\u811A\u672C\u6837\u5F0F\u88AB\u5F53\u524D\u7AD9\u70B9\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 Allow CSP: Content-Security-Policy \u6269\u5C55\u83B7\u53D6\u6743\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8BF7\u8BBE\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u5F55\u5236\u64CD\u4F5C",startRecord:"\u5F00\u59CB\u5F55\u5236\u64CD\u4F5C\uFF0C\u6309\u56DE\u8F66\u952E\u7ED3\u675F\u5F55\u5236",loopAction:"\u{1F501}\u5F00\u59CB\u5FAA\u73AF",loopActionEnd:"\u23F9\uFE0F\u5FAA\u73AF\u7ED3\u675F",loopStart:'\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E3A<span title="#t#">#t#</span>',loopEnd:"\u7ED3\u675F\u5FAA\u73AF",loopTimes:"\u5FAA\u73AF\u6B21\u6570\uFF0C\u5C06\u904D\u5386\u6240\u6709\u5339\u914D\u5143\u7D20\u5E76\u987A\u5E8F\u6267\u884C",loadingCollection:"\u6B63\u5728\u52A0\u8F7D\u5408\u96C6\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F93\u5165\u6846\uFF09\u5185\u8F93\u5165\u641C\u7D22\u8BCD",emuClickTips:"\u5355\u51FB\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u94AE\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C\uFF0C\u5F53\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\u5F88\u6709\u7528",emuCopyTips:"\u590D\u5236\u6307\u5B9A\u5143\u7D20\u7684\u6587\u672C\u5230\u526A\u8D34\u677F",emuRecordTips:"\u5F55\u5236\u63A5\u4E0B\u6765\u7684\u70B9\u51FB\u548C\u8F93\u5165\u64CD\u4F5C",emuLoopTips:"\u5F00\u59CB\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5C06\u904D\u5386\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u5E76\u4E14\u91CD\u590D\u6307\u5B9A\u6B21\u6570",emuStopTips:"\u7ED3\u675F\u64CD\u4F5C\u5E76\u751F\u6210\u89C4\u5219"};break;case"zh":case"zh-TW":case"zh-HK":qe={import:"\u5C0E\u5165",filter:"\u7BE9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662F\u5426\u5C0E\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u958B",batchOpenConfirm:"\u78BA\u5B9A\u8981\u6279\u91CF\u6253\u958B\u55CE\uFF1F",postOver:"\u767C\u9001\u6210\u529F\uFF1A",postError:"\u767C\u9001\u5931\u6557\uFF1A",copyOver:"\u8907\u88FD\u6210\u529F",keywords:"\u8ACB\u8F38\u5165\u641C\u5C0B\u8A5E",targetUrl:"\u8ACB\u8F38\u5165\u641C\u5C0BURL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6A19",siteTest:"\u6E2C\u8A66",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u985E",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u898F\u5247\uFF0C\u662F\u5426\u6DFB\u52A0\u70BA\u514B\u9686\u9805\uFF1F",siteAddOver:"\u7AD9\u9EDE\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u63DB\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u5C0B\uFF1F",multilineTooMuch:"\u884C\u6578\u8D85\u904E10\u884C\uFF0C\u662F\u5426\u7E7C\u7E8C\u641C\u5C0B\uFF1F",inputPlaceholder:"\u7BE9\u9078\u5F15\u64CE",inputTitle:"\u7BE9\u9078\u5F15\u64CE\uFF0C\u652F\u63F4 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u958B\u982D\uFF0C\u5206\u7D44**\u7AD9\u9EDE \u53EF\u7BE9\u9078\u6307\u5B9A\u5206\u7D44\uFF0C\u4F8B\u5982 \u5716\u7247**google\uFF0Ctab \u4E0B\u4E00\u9805",inputKeywords:"\u8F38\u5165\u641C\u5C0B\u95DC\u9375\u8A5E",inPageTips:`\u81EA\u5B9A\u7FA9\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8A8D\u7A7A\u683C\u4F5C\u70BA\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5247\u8868\u9054\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u5C0B\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u7FA9\u6A23\u5F0F\uFF1A\u641C\u5C0B\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0B\u4E00\u500B\uFF0C\u53F3\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0A\u4E00\u500B`,inPagePlaceholder:"\u8F38\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9032\u884C\u9801\u5167\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u9023\u7E8C\u6293\u53D6",editBtn:"\u7DE8\u8F2F\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u8907\u88FD\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u55AE\u8A5E\u6A21\u5F0F",copyEleBtn:"\u8907\u88FD\u9078\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u958B\u9078\u4E2D\u9023\u7D50",maxEleBtn:"\u5C55\u958B\u9078\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9078\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u958B",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u5FA9\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6A19\u7C64\u9801\u4E2D\u641C\u5C0B",locBtn:"\u5B9A\u4F4D\u5074\u908A\u6B04",filterSites:"\u641C\u5C0B\u5F15\u64CE",searchInPage:"\u9801\u5167\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u5C0B\u8A5E",saveRuleBtn:"\u4FDD\u5B58\u7576\u524D\u7AD9\u9EDE\u7684\u641C\u5C0B\u8A5E",wordContent:"\u641C\u5C0B\u8A5E\u5167\u5BB9",wordHide:"\u96B1\u85CF\u7236\u7D1A\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u70BA\u7576\u524D\u7236\u7D1A",wordStyle:"\u641C\u5C0B\u8A5E\u6A23\u5F0F",wordTitle:"\u641C\u5C0B\u8A5E\u6CE8\u91CB",re:"\u6B63\u5247",ignoreCase:"\u4E0D\u5340\u5206\u5927\u5C0F\u5BEB",filterLink:"\u7BE9\u9078\u93C8\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9801\u5167\u641C\u5C0B\u8A5E",addSearchEngine:"\u6DFB\u52A0\u641C\u5C0B\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52D5\u7DE8\u8F2F\u898F\u5247\u4E26\u6DFB\u52A0\uFF1F",expand:"\u5C55\u958B\u5269\u9918\u7AD9\u9EDE",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8A5E\u8A9E",wordRange:"\u751F\u6548\u7BC4\u570D",customInputFrame:"\u81EA\u5B9A\u7FA9\u641C\u5C0B\u53C3\u6578",customSubmit:"\u63D0\u4EA4\u641C\u5C0B",finalSearch:"\u76EE\u6A19\u641C\u5C0B\u5B57\u4E32",search:"\u641C\u5C0B\u6B64\u9805",siteKeywords:"\u95DC\u9375\u8A5E(\u591A\u500B\u95DC\u9375\u8A5E\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u9EDE URL \u5339\u914D\u6B63\u5247",openSelect:"\u6253\u958B\u9078\u9805",openInDefault:"\u9ED8\u8A8D",openInNewTab:"\u65B0\u6A19\u7C64\u9801\u6253\u958B",openInCurrent:"\u7576\u524D\u9801\u6253\u958B",currentType:"\u7576\u524D\u5206\u985E",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u64EC\u8F38\u5165\u641C\u5C0B",inputAction:"\u8F38\u5165",clickAction:"\u9EDE\u64CA",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u8907\u88FD\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5167\u8F38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9EDE\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96D9\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u8907\u88FD\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8ACB\u8F38\u5165\u65B0\u503C",deleteConfirm:"\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u9805\u55CE\uFF1F ",sleepPrompt:"\u7B49\u5F85\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",startCache:"\u958B\u59CB\u7DE9\u5B58\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\u7DE9\u5B58\u5B8C\u7562\uFF0C\u52FF\u95DC\u9589\u914D\u7F6E\u9801\uFF01",cacheOver:"\u6240\u6709\u5716\u6A19\u90FD\u5DF2\u7DE9\u5B58\u5B8C\u7562\uFF01",cspDisabled:"\u8173\u672C\u6A23\u5F0F\u88AB\u7576\u524D\u7AD9\u9EDE\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u7121\u6CD5\u986F\u793A\uFF0C\u8ACB\u5617\u8A66\u5B89\u88DD Allow CSP: Content-Security-Policy \u64F4\u5C55\u7372\u53D6\u6B0A\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8ACB\u8A2D\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u9304\u88FD\u52D5\u4F5C",startRecord:"\u958B\u59CB\u9304\u88FD\u64CD\u4F5C\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9375\u7D50\u675F\u9304\u88FD",loopAction:"\u{1F501}\u958B\u59CB\u5FAA\u74B0",loopActionEnd:"\u23F9\uFE0F\u5FAA\u74B0\u7D50\u675F",loopStart:'\u958B\u59CB\u5FAA\u74B0\uFF0C\u5FAA\u74B0\u6B21\u6578\u70BA<span title="#t#">#t#</span>',loopEnd:"\u7D50\u675F\u5FAA\u74B0",loopTimes:"\u5FAA\u74B0\u6B21\u6578\uFF0C\u5C07\u904D\u6B77\u6240\u6709\u5339\u914D\u5143\u7D20\u4E26\u9806\u5E8F\u57F7\u884C",loadingCollection:"\u6B63\u5728\u8F09\u5165\u5408\u96C6\uFF0C\u8ACB\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F38\u5165\u6846\uFF09\u5167\u8F38\u5165\u641C\u5C0B\u5B57\u8A5E",emuClickTips:"\u9EDE\u64CA\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u9215\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u6642\u9593\u5F8C\u7E7C\u7E8C\u57F7\u884C\uFF0C\u7576\u67D0\u500B\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u5B8C\u6210\u6642\u5F88\u6709\u7528",emuCopyTips:"\u8907\u88FD\u6307\u5B9A\u5143\u7D20\u7684\u6587\u5B57\u5230\u526A\u8CBC\u7C3F",emuRecordTips:"\u9304\u88FD\u63A5\u4E0B\u4F86\u7684\u9EDE\u64CA\u548C\u8F38\u5165\u64CD\u4F5C",emuLoopTips:"\u958B\u59CB\u5FAA\u74B0\uFF0C\u63A5\u4E0B\u4F86\u7684\u64CD\u4F5C\u5C07\u904D\u6B77\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u4E26\u4E14\u91CD\u8907\u6307\u5B9A\u6B21\u6578",emuStopTips:"\u7D50\u675F\u64CD\u4F5C\u4E26\u7522\u751F\u898F\u5247"};break;case"ja":qe={import:"\u30A4\u30F3\u30DD\u30FC\u30C8",filter:"\u30D5\u30A3\u30EB\u30BF\u30FC",selectAll:"\u3059\u3079\u3066\u9078\u629E",importOrNot:"\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B? ",settings:"\u69CB\u6210\u30B9\u30AF\u30EA\u30D7\u30C8",batchOpen:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3",batchOpenConfirm:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",postOver:"\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F:",postError:"\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F:",copyOver:"\u30B3\u30D4\u30FC\u306B\u6210\u529F\u3057\u307E\u3057\u305F",keywords:"\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",targetUrl:"\u691C\u7D22 URL \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",siteName:"\u30B5\u30A4\u30C8\u540D",siteDesc:"\u8AAC\u660E",siteUrl:"\u30A2\u30C9\u30EC\u30B9",siteIcon:"\u30A2\u30A4\u30B3\u30F3",siteTest:"\u30C6\u30B9\u30C8",siteCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",siteAdd:"\u8FFD\u52A0",siteType:"\u30AB\u30C6\u30B4\u30EA",siteExist:"\u540C\u3058\u30EB\u30FC\u30EB\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u30AF\u30ED\u30FC\u30F3\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",siteAddOver:"\u30B5\u30A4\u30C8\u306F\u6B63\u5E38\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F",multiline:"\u8907\u6570\u884C\u306E\u691C\u7D22\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3079\u304D\u3067\u3059\u304B? ",multilineTooMuch:"\u884C\u6570\u304C 10 \u884C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D9A\u3051\u307E\u3059\u304B? ",inputPlaceholder:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3",inputTitle:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3\u3001*? \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3001$ \u306F\u7D42\u308F\u308A\u3092\u8868\u3057\u3001^ \u306F\u59CB\u307E\u308A\u3092\u8868\u3057\u307E\u3059\u3001\u30B0\u30EB\u30FC\u30D7 ** \u30B5\u30A4\u30C8\u306F\u5199\u771F\u306A\u3069\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059 ** Google\u3001\u6B21\u306E\u9805\u76EE\u3092\u30BF\u30D6\u3057\u307E\u3059",inputKeywords:"\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",inPageTips:`\u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57: $c \u3068\u533A\u5207\u308A\u6587\u5B57 ($c| \u691C\u7D22 | \u30B8\u30E3\u30F3\u30D1\u30FC\u306A\u3069)\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528
\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u5206\u96E2\u3055\u308C\u3066\u3044\u307E\u305B\u3093: $o \u3068\u6587\u5B57 (\u30D2\u30FC\u30ED\u30FC\u304C\u597D\u3093\u3060 $oopai \u306A\u3069)
\u6B63\u898F\u8868\u73FE \uFF1A/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306A\u3069
\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $t{\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8}\u3001\u305F\u3068\u3048\u3070 linux$t{Linux \u306F Unix \u3067\u306F\u3042\u308A\u307E\u305B\u3093}
\u30AB\u30B9\u30BF\u30E0 \u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $s{\u80CC\u666F;other}\u3001\u4F8B: google$s{#333333;color:red;}
\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5DE6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524D\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059`,inPagePlaceholder:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22\u3059\u308B\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066 Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",pickerBtn:"\u8981\u7D20\u306E\u53D6\u5F97",multiPickerBtn:"\u8981\u7D20\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Ctrl \u307E\u305F\u306F Command \u3092\u62BC\u3057\u305F\u307E\u307E\u7D99\u7D9A\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059",editBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",emptyBtn:"\u7A7A\u306E\u691C\u7D22\u30C6\u30AD\u30B9\u30C8",copyInPageBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",wordModeBtn:"\u30EF\u30FC\u30C9\u30E2\u30FC\u30C9",copyEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u30B3\u30D4\u30FC",openLinkBtn:"\u9078\u629E\u3057\u305F\u30EA\u30F3\u30AF\u3092\u958B\u304F",maxEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u5C55\u958B",minEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u6298\u308A\u305F\u305F\u3080",expandAll:"\u3059\u3079\u3066\u5C55\u958B",collapseAll:"\u3059\u3079\u3066\u6298\u308A",rename:"\u540D\u524D\u3092\u5909\u66F4",reverseBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u5FA9\u5143",pinBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u4FEE\u6B63\u3001\u3059\u3079\u3066\u306E\u30BF\u30D6\u3067\u691C\u7D22",locBtn:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u691C\u7D22",filterSites:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3",searchInPage:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22",removeBtn:"\u691C\u7D22\u8A9E\u3092\u524A\u9664",saveRuleBtn:"\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u8A9E\u3092\u4FDD\u5B58",wordContent:"\u5358\u8A9E\u306E\u5185\u5BB9\u3092\u691C\u7D22",wordHide:"\u89AA\u8981\u7D20\u3092\u975E\u8868\u793A",wordHideTips:"\u8981\u7D20\u306E\u6DF1\u3055\u30010 \u304C\u73FE\u5728\u306E\u89AA",wordStyle:"\u691C\u7D22\u30EF\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",wordTitle:"\u691C\u7D22\u5358\u8A9E\u306E\u6CE8\u91C8",re:"RegExp",ignoreCase:"\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093",filterLink:"\u30D5\u30A3\u30EB\u30BF\u30FC\u30EA\u30F3\u30AF",modify:"\u5909\u66F4",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",modifyWord:"\u30DA\u30FC\u30B8\u4E0A\u306E\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059",addSearchEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u8FFD\u52A0",noValidItemAsk:"\u6709\u52B9\u306A\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30EB\u30FC\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",expand:"\u6B8B\u308A\u306E\u30B5\u30A4\u30C8\u3092\u5C55\u958B\u3057\u307E\u3059",add:"\u8FFD\u52A0",addWord:"\u65B0\u3057\u3044\u5358\u8A9E\u3092\u8FFD\u52A0",wordRange:"\u6709\u52B9\u7BC4\u56F2",customInputFrame:"\u30AB\u30B9\u30BF\u30E0\u691C\u7D22\u30D1\u30E9\u30E1\u30FC\u30BF",customSubmit:"\u691C\u7D22\u3092\u9001\u4FE1",finalSearch:"\u5BFE\u8C61\u306E\u691C\u7D22\u6587\u5B57\u5217",search:"\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u691C\u7D22",siteKeywords:"\u30AD\u30FC\u30EF\u30FC\u30C9 (| \u3067\u533A\u5207\u3089\u308C\u305F\u8907\u6570\u306E\u30AD\u30FC\u30EF\u30FC\u30C9)",siteMatch:"\u901A\u5E38\u306E\u30B5\u30A4\u30C8 URL \u3068\u4E00\u81F4",openSelect:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u958B\u304F",openInDefault:"\u30C7\u30D5\u30A9\u30EB\u30C8",openInNewTab:"\u65B0\u3057\u3044\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059",openInCurrent:"\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304C\u958B\u3044\u3066\u3044\u307E\u3059",currentType:"\u73FE\u5728\u306E\u30AB\u30C6\u30B4\u30EA",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5FA9\u5143",addAction:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",rollInfo:"\u5165\u529B\u691C\u7D22\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8",inputAction:"\u5165\u529B",clickAction:"\u30AF\u30EA\u30C3\u30AF",sleepAction:"\u5F85\u6A5F",copyAction:"\u{1F4C4}\u8981\u7D20\u306E\u30B3\u30D4\u30FC",submitCrawl:"\u2611\uFE0F\u64CD\u4F5C\u3092\u5B8C\u4E86",inputOutput:'\u8981\u7D20 <span title="#t1#" class="element">#t1#</span> \u5185\u306B <span title="#t2#">#t2#</span> \u3092\u5165\u529B\u3057\u307E\u3059',clickOutput:'\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',copyOutput:'\u30B3\u30D4\u30FC\u8981\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30B9\u30EA\u30FC\u30D7<span title="#t#">#t#</span> \u30DF\u30EA\u79D2',inputNewValue:"\u65B0\u3057\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",deleteconfirm:"\u3053\u306E\u9805\u76EE\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",sleepPrompt:"\u5F85\u6A5F\u6642\u9593 (\u30DF\u30EA\u79D2)",startCache:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u8F9B\u62B1\u5F37\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u8A2D\u5B9A\u30DA\u30FC\u30B8\u306F\u9589\u3058\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3057\u305F! ",cspDisabled:"\u30B9\u30AF\u30EA\u30D7\u30C8 \u30B9\u30BF\u30A4\u30EB\u306F\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E CSP \u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u8A31\u53EF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Allow CSP: Content-Security-Policy \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044",Sunday:"\u65E5\u66DC\u65E5",Monday:"\u6708\u66DC\u65E5",Tuesday:"\u706B\u66DC\u65E5",Wednesday:"\u6C34\u66DC\u65E5",Thursday:"\u6728\u66DC\u65E5",Friday:"\u91D1\u66DC\u65E5",Saturday:"\u571F\u66DC\u65E5",template:"[#t#]\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",recordAction:"\u23FA\uFE0F\u8A18\u9332\u64CD\u4F5C",startRecord:"\u8A18\u9332\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u8A18\u9332\u3092\u7D42\u4E86\u3059\u308B\u306B\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",loopAction:"\u{1F501}\u30EB\u30FC\u30D7\u306E\u958B\u59CB",loopActionEnd:"\u23F9\uFE0F\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopStart:'\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3002\u30EB\u30FC\u30D7\u6570\u306F <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopTimes:"\u30EB\u30FC\u30D7\u306E\u6570\u3002\u4E00\u81F4\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u8D70\u67FB\u3055\u308C\u3001\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059",loadingCollection:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",emuInputTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u306A\u3069) \u306B\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u307E\u3059",emuClickTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u30DC\u30BF\u30F3\u306A\u3069) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059",emuWaitTips:"\u7D9A\u884C\u3059\u308B\u524D\u306B\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059",emuCopyTips:"\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059",emuRecordTips:"\u6B21\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u5165\u529B\u64CD\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059",emuLoopTips:"\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u6B21\u306E\u64CD\u4F5C\u306F\u898B\u3064\u304B\u3063\u305F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u8D70\u67FB\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3057\u307E\u3059",emuStopTips:"\u64CD\u4F5C\u3092\u7D42\u4E86\u3057\u3066\u30EB\u30FC\u30EB\u3092\u751F\u6210"};break;case"ru":qe={import:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",filter:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C",selectAll:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",importOrNot:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E?",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",batchOpen:"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u043F\u043E\u0438\u0441\u043A",batchOpenConfirm:"\u0418\u0441\u043A\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E",keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",siteDesc:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043A\u043E\u043D\u043A\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",siteAdd:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",siteType:"\u0413\u0440\u0443\u043F\u043F\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u043B\u043E\u043D?",siteAddOver:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",multiline:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A?",multilineTooMuch:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 10. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A?",inputPlaceholder:"\u0424\u0438\u043B\u044C\u0442\u0440\u044B",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"\u0414\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C",multiPickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Ctrl \u0438\u043B\u0438 Command",editBtn:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u0441\u043A\u0430",emptyBtn:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",copyInPageBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u043A\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C. \u0412 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",copyEleBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",openLinkBtn:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",minEleBtn:"\u0421\u0436\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u043E \u0432\u0441\u0435\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",locBtn:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438",filterSites:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u043A\u0438",searchInPage:"\u0418\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430",saveRuleBtn:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, 0 - \u044D\u0442\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",wordStyle:"\u0421\u0442\u0438\u043B\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432\u0430",wordTitle:"\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u0438\u0441\u043A\u043E\u043C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",modify:"\u0413\u043E\u0442\u043E\u0432\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",modifyWord:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",addSearchEngine:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0432\u0438\u0436\u043E\u043A",noValidItemAsk:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0425\u043E\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442?",expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B",add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",addWord:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",wordRange:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430",customInputFrame:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430",customSubmit:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C",finalSearch:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",search:"\u0418\u0441\u043A\u0430\u0442\u044C \u044D\u0442\u043E",siteKeywords:"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C |)",siteMatch:"Regexp \u0434\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F URL \u0441\u0430\u0439\u0442\u0430",openSelect:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432",openInDefault:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",openInNewTab:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",openInCurrent:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",addAction:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",crawlInfo:"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043E\u0434",clickAction:"\u041A\u043B\u0438\u043A \u043C\u044B\u0448\u0438",sleepAction:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",copyAction:"\u{1F4C4}\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",submitCrawl:"\u2611\uFE0F\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043E\u0434 <span title="#t2#">#t2#</span> \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041A\u043B\u0438\u043A \u043F\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 <span title="#t#" class="element">#t#</span>',dblclickOutput:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u041F\u041A\u041C <span title="#t#" class="element">#t#</span>',copyOutput:'\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044C <span title="#t#">#t#</span> \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434',inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",deleteConfirm:"\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F (\u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445)",startCache:"\u041D\u0430\u0447\u0430\u043B\u043E\u0441\u044C \u043A\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!",cacheOver:"\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u044B!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "#t#"',recordAction:"\u23FA\uFE0F\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043E\u043A\u043D\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",loopAction:"\u{1F501}\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B",loopActionEnd:"\u23F9\uFE0F\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopStart:'\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopTimes:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u043A\u043B\u043E\u0432, \u0432\u0441\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430).",emuClickTips:"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435)",emuWaitTips:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C. \u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",emuCopyTips:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",emuRecordTips:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043E\u0434\u0430",emuLoopTips:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0438\u043A\u043B, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437",emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"};break;default:qe={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"Enter search keywords",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function N(l,e){return qe[l]?e?qe[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):qe[l]:l}const Jt="ontouchstart"in document.documentElement;var hr=!0,he=(l,e)=>{hr&&console.log(`%c\u3010SearchJumper v.${dt.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},Ge=!1,ot=!1,oi;function ie(l=""){return zt?zt.createHTML(l):l}var $e,lt,ke,Fe,me,Ne,dt,Ve;if(typeof GM_xmlhttpRequest<"u")$e=GM_xmlhttpRequest,Ve=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")$e=GM.xmlHttpRequest,Ve=!0;else{let l;$e=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let i=document.implementation.createHTMLDocument("");i.documentElement.innerHTML=ie(t),e.onload&&e.onload({status:l.status,response:t,responseXML:i})}).catch(t=>e.onerror&&e.onerror(t))}}Ve?Ve=async(l,e)=>l?(oi=l,new Promise((t,i)=>{let r=e&&/^post$/i.test(e.method),s={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":r?"application/x-www-form-urlencoded":"","X-Requested-With":r?"XMLHttpRequest":""},onload:function(n){if(oi!=l)return;let a=n.response;(n.status>=400||!a)&&(a=""),t({text:()=>new Promise(u=>{u(a)}),json:()=>new Promise(u=>{try{u(JSON.parse(a))}catch{u(null)}}),finalUrl:n.finalUrl||l})},onerror:function(n){he(n),i(n)},ontimeout:function(n){he(n),i(n)}};e&&e.body&&(s.data=e.body),e&&e.responseType==="stream"&&(s.responseType="stream",delete s.onload,s.onloadstart=n=>{if(!n||!n.response||!n.response.getReader)return;let a=[],o,p;const u=n.response.getReader();let h=()=>{let m="";try{return p&&(m=p.trim(),/^data:/.test(m)?m="["+m.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(d=>d.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(m)?m=m.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(m)&&(m=m+"]")),JSON.parse(m)}catch{return null}};u.read().then(function m({done:d,value:f}){if(oi==l){if(d){t({text:p,json:h,finalUrl:n.finalUrl||l});return}a=e.streamMode==="standalone"?Array.from(f):a.concat(Array.from(f));try{p=new TextDecoder("utf-8").decode(new Uint8Array(a)),e.onstream({text:p,json:h,finalUrl:n.finalUrl||l})}catch(y){console.log(y)}return u.read().then(m)}})}),$e(s)})):null:Ve=fetch,It?lt=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?lt=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?lt=GM.registerMenuCommand:lt=(l,e)=>{},typeof GM_openInTab<"u"?me=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?me=GM.openInTab:me=(l,e)=>{window.open(l)},typeof GM_notification<"u"?ke=l=>GM_notification({text:l,onclick:e=>me(it,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?ke=l=>GM.notification({text:l,onclick:e=>me(it,{active:!0})}):ke=l=>{},typeof GM_setClipboard<"u"?Fe=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?Fe=GM.setClipboard:Fe=(l,e)=>{try{lr.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Ne=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return e.innerHTML=ie(l),document.head.appendChild(e),e}},typeof GM_info<"u"?dt=GM_info:typeof GM<"u"&&typeof GM.info<"u"?dt=GM.info:dt={script:{name:"SearchJumper",version:0}},Te.searchJumperAddons||(Te.searchJumperAddons=[]);const Rt=document.referrer;let de=location.href.slice(0,500);var K={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:(function(){try{return window.external.mxGetRuntime().storage}catch{}})(),operaUJSStorage:(function(){try{return window.opera.scriptStorage}catch{}})(),setItem:function(l,e){this.supportGMPromise?(GM.setValue(l,e),e===""&&typeof GM<"u"&&typeof GM.deleteValue<"u"&&GM.deleteValue(l)):this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var i=0;i<t.length;i++){let r=t[i];if(r.k==e)return r.v}return null},setListItem:async function(l,e,t){var i=this.listItemCache[l];typeof i>"u"&&(i=await this.getItem(l)),i||(i=[]),i=i.filter(r=>r&&r.k!=e),t&&(i.unshift({k:e,v:t}),i.length>50&&i.pop()),this.setItem(l,i),this.listItemCache[l]=i}};class ur{constructor(e,t,i){this.webDAVUrl=e,this.username=t,this.password=i}init(){this.inited||(this.inited=!0,this.auth=btoa(`${this.username}:${this.password}`))}request(e,t,i,r,s,n){{this.init();let a=this.webDAVUrl+i,o={referer:a,origin:a,"Content-Type":"text/xml; charset=UTF-8",Authorization:`Basic ${this.auth}`};for(let p in n)o[p]=n[p];$e({method:e,url:a,data:t,headers:o,onload:function(p){let u=p.response;if((p.status>=400||!u)&&(u=""),r=="xml"){var h=p.responseXML;h&&(u=h.firstChild.nextSibling?h.firstChild.nextSibling:h.firstChild)}s&&s(u)},onerror:function(p){he(p),s&&s(p)},ontimeout:function(p){he(p),s&&s(p)}})}}GET(e,t){return this.request("GET",null,e,"text",t,{})}PROPFIND(e,t){return this.request("PROPFIND",null,e,"xml",t,{Depth:"1"})}MKCOL(e,t){return this.request("MKCOL",null,e,"text",t,{})}DELETE(e,t){return this.request("DELETE",null,e,"text",t,{})}PUT(e,t,i){return this.request("PUT",t,e,"text",i,{})}async read(e){let t=this;return new Promise(i=>{t.GET(e,i)})}async write(e,t){let i=this;return new Promise(r=>{i.PUT(e,t,r)})}async rm(e){let t=this;return new Promise(i=>{t.DELETE(e,i)})}}var ct;async function Ht(l,e){if(Ie)return;let t=await K.getItem("searchData");if(t&&(c=t),!ct)return l&&l();if(!e){let i=await ct.read("lastModified");if(i&&(i=parseFloat(i)),i&&(!c.lastModified||i>c.lastModified)){c.lastModified=i,Pt=c.lastModified;let r=await ct.read("sitesConfig.json");if(r)try{r=JSON.parse(r),c.sitesConfig=r}catch(n){he(n)}let s=await ct.read("inPageRule.json");if(s)try{s=JSON.parse(s),c.prefConfig.inPageRule=s}catch(n){he(n)}}}l&&l(),await ct.write("lastModified",""+c.lastModified),await ct.write("sitesConfig.json",JSON.stringify(c.sitesConfig)),await ct.write("inPageRule.json",JSON.stringify(c.prefConfig.inPageRule))}function Di(l){const e=new Set;let t=!1,i=!1;const r=/trusted-types\s+([^;]+)/gi;let s;for(;(s=r.exec(l))!==null;){i=!0;const n=s[1].trim().split(/\s+/);for(const a of n)a==="'allow-duplicates'"?t=!0:a!=="'none'"&&e.add(a.replace(/'/g,""))}return{names:e,allowDuplicates:t,ttDirectiveFound:i}}async function dr(){const l=new Set;let e=!1,t=!1;const i=document.querySelector('meta[http-equiv="Content-Security-Policy"]');if(i){const r=Di(i.content);r.names.forEach(s=>l.add(s)),r.allowDuplicates&&(e=!0),r.ttDirectiveFound&&(t=!0)}return new Promise(r=>{GM_xmlhttpRequest({method:"HEAD",url:window.location.href,onload:function(s){const n=s.responseHeaders.split(`\r
`).filter(o=>o.toLowerCase().startsWith("content-security-policy:")).map(o=>o.substring(26).trim()).join("; "),a=Di(n);a.names.forEach(o=>l.add(o)),a.allowDuplicates&&(e=!0),a.ttDirectiveFound&&(t=!0),r({names:l,allowDuplicates:e,ttDirectiveFound:t})},onerror:function(s){r({names:l,allowDuplicates:e,ttDirectiveFound:t})}})})}function fr(){try{return document.createElement("div").innerHTML="",!1}catch{return!0}}async function mr(){if(!(Te.trustedTypes&&Te.trustedTypes.createPolicy&&fr()))return;const{names:l,allowDuplicates:e,ttDirectiveFound:t}=await dr();if(t&&!e){he("CSP Trusted Types is enforced without 'allow-duplicates'. Skipping policy creation to avoid conflicts with the page.");return}const i="pvcep_default";try{zt=Te.trustedTypes.createPolicy(i,{createHTML:(s,n)=>s,createScriptURL:s=>s,createScript:s=>s});return}catch{}const r=new Set(Te.trustedTypes.getPolicyNames());for(const s of l)if(!(s==="*"||r.has(s)))try{zt=Te.trustedTypes.createPolicy(s,{createHTML:(n,a)=>n,createScriptURL:n=>n,createScript:n=>n});return}catch{he(`create '${s}' failed, trying next...`)}he("Could not create any trusted types policy.")}var zt;const li=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function Z(l){return l.body||l.querySelector("body")}function ft(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function mt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function gr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function yr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function br(l,e,t){t=t||document,e=e||t;var i=[];try{for(var r=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),s=0;s<r.snapshotLength;s++){var n=r.snapshotItem(s);n.nodeType===1&&i.push(n)}}catch{he(`Invalid xpath: ${l}`)}return i}function xr(l,e,t){t=t||document,e=e||t;try{let i=(s,n,a)=>{let o=n.evaluate(s,a,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},r=l.split(" =>> ");if(r.length===2){let s=i(r[0],t,e);if(s&&s.shadowRoot)return i(r[1],s.shadowRoot,s.shadowRoot)}else return i(l,t,e)}catch{return he(`Invalid xpath: ${l}`),!1}}function Ji(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function ci(l,e,t){e||(e=document);try{if(!Ji(l))return e.querySelectorAll(l)}catch(i){he(i,"Error selector")}return br(l,t,e)}function Ct(l,e){e||(e=document);try{if(!Ji(l)){let t=l.split(" =>> ");if(t.length===2){let i=e.querySelector(t[0]);return i&&i.shadowRoot&&i.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){he(t)}return xr(l,e,e)}function vr(l,e){for(var t=l.offsetTop,i=l.offsetParent;i;)t+=i.offsetTop,i=i.offsetParent;if(e){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;try{let r=e.contentWindow.parent;for(e=r.frameElement;e;){for(i=e;i;)t+=i.offsetTop,i=i.offsetParent;r=r.parent,e=r.frameElement}}catch{}}return t}function Zr(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let i=document.getElementsByTagName("iframe");for(let r=0;r<i.length;r++){let s=i[r],n;try{n=s.contentDocument||s.contentWindow.document}catch{break}if(n.isSameNode(l.ownerDocument)){for(t=s;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function pi(l){const e=l.activeElement;return e?e.shadowRoot?pi(e.shadowRoot):e:null}function wr(l,e){let t=new Image;const i=()=>{t.onload=null,t.onerror=null,t=null};t.onload=function(){typeof e=="function"&&e(),i()},t.onerror=function(){i()},t.src=l}function Ri(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function jt(l){let e=pi(l);return Ri(e)}async function Cr(l){for(;document.hidden;)await We(500);var e=100,t="\uF0C8",i=function(){var r,s;e-=1,r=document.createElement("canvas"),r.width=20,r.height=20,s=r.getContext("2d",{willReadFrequently:!0}),s.fillStyle="rgba(0,0,0,1.0)",s.fillRect(0,0,20,20),s.font="16pt FontAwesome",s.textAlign="center",s.fillStyle="rgba(255,255,255,1.0)",s.fillText(t,10,18);var n=s.getImageData(2,10,1,1).data;n[0]==0&&n[1]==0&&n[2]==0?(s.font='16pt "Font Awesome 6 Free"',s.fillText(t,10,18),n=s.getImageData(2,10,1,1).data,n[0]==0&&n[1]==0&&n[2]==0?e>0&&setTimeout(i,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(i,100)}var pt,E,Se=[],ce=!1,hi=!1,Be,ht,st,Ue,Et,Ye,ye,_e,Lt,Pe,Me,He=[],Ot=[],gt,Ae,Ze,Ft,ui,Ut,Hi,di,zi=!1,Pt=0,Xe;const fi=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${dt.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,Sr='<svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 52.966 52.966"><path d="M51.704 51.273L36.844 35.82c3.79-3.8 6.14-9.04 6.14-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.082 0 9.747-1.817 13.383-4.832l14.895 15.49c.196.206.458.308.72.308.25 0 .5-.093.694-.28.398-.382.41-1.015.028-1.413zM21.984 40c-10.478 0-19-8.523-19-19s8.522-19 19-19 19 8.523 19 19-8.525 19-19 19z"></path></svg>',yt="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",Tr="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiPjxwYXRoIGQ9Ik00MjkuMDEzMzMzIDY0MEEzMiAzMiAwIDAgMSAzODQgNTk0Ljk4NjY2N2wzNy43Ni0zNy43Ni0yMi44MjY2NjctMjIuNjEzMzM0LTEzNS42OCAxMzUuNjggOTAuNDUzMzM0IDkwLjQ1MzMzNCAxMzUuNjgtMTM1LjY4LTIyLjYxMzMzNC0yMi42MTMzMzR6TTUzNC42MTMzMzMgMzk4LjkzMzMzM2wyMi42MTMzMzQgMjIuNjEzMzM0TDU5NC45ODY2NjcgMzg0QTMyIDMyIDAgMCAxIDY0MCA0MjkuMDEzMzMzbC0zNy43NiAzNy43NiAyMi42MTMzMzMgMjIuNjEzMzM0IDEzNS42OC0xMzUuNjgtOTAuNDUzMzMzLTkwLjQ1MzMzNHoiIGZpbGw9IiNhMGEwYTAiLz48cGF0aCBkPSJNNTEyIDIxLjMzMzMzM2E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAxIDAgNDkwLjY2NjY2NyA0OTAuNjY2NjY3QTQ5MC42NjY2NjcgNDkwLjY2NjY2NyAwIDAgMCA1MTIgMjEuMzMzMzMzeiBtMzE2LjggMzU0Ljk4NjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMEw1NTcuMjI2NjY3IDUxMiA1MTIgNTU3LjIyNjY2N2w0NS4yMjY2NjcgNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3bC0xODEuMTIgMTgxLjEyYTMyIDMyIDAgMCAxLTQ1LjIyNjY2NyAwbC0xMzUuNjgtMTM1LjY4YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBMNDY2Ljc3MzMzMyA1MTIgNTEyIDQ2Ni43NzMzMzNsLTQ1LjIyNjY2Ny00NS4yMjY2NjZhMzIgMzIgMCAwIDEgMC00NS4yMjY2NjdsMTgxLjEyLTE4MS4xMmEzMiAzMiAwIDAgMSA0NS4yMjY2NjcgMGwxMzUuNjggMTM1LjY4YTMyIDMyIDAgMCAxIDAgNDUuMjI2NjY3eiIgZmlsbD0iI2EwYTBhMCIvPjwvc3ZnPg==",Oi='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',mi="%s[lurest]?\\b",bt=new RegExp(mi);var B,gi,Mt,Qe,Fi=!1;function kr(l,e,t){if(!l&&!e&&!t){let W=new Date,x=W.getFullYear(),P=W.getMonth(),J=W.getDate();l=W.getFullYear(),e=W.getMonth()+1,t=W.getDate()}let i=2e3,r=2,s=5,n=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],a="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",u="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",h="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function m(W,x,P){x-=1;let J=(Date.UTC(W,x,P)-Date.UTC(i,r-1,s))/(1440*60*1e3)+1,$,F,A,b;for(let w=0;w<n.length;w++)if(J-=y(n[w]),J<=0){$=i+w,b=n[w],J+=y(b);break}if(!b)return null;for(let w=0;w<I(b).length;w++)if(J-=I(b)[w],J<=0){d(b)&&d(b)<=w?d(b)<w?F=w:d(b)===w?F="\u95F0"+w:F=w+1:F=w+1,J+=I(b)[w];break}return A=J,d(b)&&typeof F=="string"&&F.indexOf("\u95F0")>-1?F=`\u95F0${a[/\d/.exec(F)-1]}`:F=a[F-1],$=T($)+O($),A<11?A=`${o[10]}${o[A-1]}`:A>10&&A<20?A=`${o[9]}${o[A-11]}`:A===20?A=`${o[1]}${o[9]}`:A>20&&A<30?A=`${o[11]}${o[A-21]}`:A===30&&(A=`${o[2]}${o[9]}`),{lunarYear:$,lunarMonth:F,lunarDay:A}}function d(W){return W&15?W&15:!1}function f(W){return d(W)?W&983040?30:29:0}function y(W){let x=0;for(let P=32768;P>8;P>>=1){let J=W&P?30:29;x+=J}return d(W)&&(x+=f(W)),x}function I(W){let x=[];for(let P=32768;P>8;P>>=1)x.push(W&P?30:29);return d(W)&&x.splice(d(W),0,f(W)),x}function T(W){let x=(W-3)%10;return x===0&&(x=10),p[x-1]}function O(W){let x=(W-3)%12;return x===0&&(x=12),x--,u[x]+` (${h[x]}) `}return m(l,e,t)}class Ir{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Mt=`
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper-root {
                     font-size: initial;
                 }
                 #search-jumper.search-jumper-showall {
                     overflow-y: hidden;
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     flex-direction: unset;
                     max-width: unset;
                     max-height: unset;
                     text-align: center;
                     top: 0;
                     bottom: unset;
                     height: 100%;
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-searchBar {
                     display: none;
                 }
                 #search-jumper>.search-jumper-searchBar.grabbing>.search-jumper-type {
                     display: none!important;
                 }
                 #search-jumper.search-jumper-showall #filterSites {
                     background-color: #f5f5f5e0;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: #ddd 0px 0px 3px;
                     outline: none;
                     box-sizing: border-box;
                     cursor: default;
                     user-select: none;
                     -webkit-user-select: none;
                     -moz-user-select: none;
                     -khtml-user-select: none;
                     -ms-user-select: none;
                     position: fixed;
                     width: 80%;
                     left: calc(10% - 10px);
                     top: 1%;
                     border-radius: 20px;
                     pointer-events: all;
                 }
                 #search-jumper.search-jumper-showall #filterSites>input,
                 #search-jumper.search-jumper-showall #filterSites>textarea {
                     background-color: white;
                     color: black;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 20px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 110px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon>p {
                     pointer-events: all;
                     cursor: pointer;
                     margin: 0 auto;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist .sitelist>.sitelistCon a {
                     display: flex!important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall.search-jumper-searchBarCon {
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                     overflow: hidden;
                 }
                 #search-jumper-alllist {
                     display: none;
                     top: 101px;
                     position: absolute;
                     width: 100%;
                     overflow-x: auto;
                     overflow-y: hidden;
                     height: calc(100% - 101px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper-alllist>.search-jumper-btn {
                     position: fixed;
                     top: 1%;
                     right: 10%;
                     filter: drop-shadow(1px 1px 3px #00000060);
                     cursor: pointer;
                     pointer-events: all;
                     z-index: 1;
                     width: 32px;
                     height: 32px;
                 }
                 #search-jumper-alllist>.search-jumper-btn>svg {
                     cursor: pointer;
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-showallBg {
                     display: none;
                     position: fixed;
                     left: 0;
                     top: 0;
                     width: 100%;
                     height: 100%;
                     z-index: -1;
                     transform: translateZ(0);
                     ${c.prefConfig.noAni?"background-color: rgba(0, 0, 0, 0.6);":"background-color: rgba(0, 0, 0, 0.6);transition:background-color .6s ease;"}
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist:hover~.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode>.sitelistBox:hover .sitelist {
                     opacity: 0.5;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode>.sitelistBox .sitelist:hover {
                     opacity: 1;
                     backdrop-filter: blur(5px);
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     display: block;
                 }
                 #search-jumper>.groupTab {
                     position: fixed;
                     background: #ffffffee !important;
                     left: 0;
                     top: 0;
                     overflow: hidden;
                     height: 100%;
                     overflow: auto;
                     scrollbar-width: none;
                     padding: 20px 0;
                     box-sizing: border-box;
                     display: none;
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                     display: block;
                 }
                 #search-jumper.search-jumper-showall>.groupTab::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span {
                     display: block;
                     width: ${42*this.scale}px;
                     transition: all 0.25s ease;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span>span.search-jumper-word {
                     opacity: 0.8;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span {
                     width: ${42*this.scale+150}px;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span:hover{
                     background: #f5f7fa !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                     content: attr(data-type);
                     color: #6b6e74;
                     position: absolute;
                     margin-top: -${21*this.scale+10}px;
                     left: ${42*this.scale+5}px;
                     white-space: nowrap;
                     font-weight: bold;
                 }
                 .search-jumper-historylistcon {
                     display: flex;
                     position: fixed;
                     width: 100%;
                     max-width: 100%;
                     overflow: auto;
                     justify-content: center;
                     left: 0;
                     top: 60px;
                     background: #ffffffdd;
                     border-bottom: 1px solid #ddd;
                     pointer-events: all;
                     min-height: 40px;
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                 }
                 .search-jumper-historylistcon::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-historylist {
                     display: flex;
                     max-width: 100%;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist {
                     display: block;
                 }
                 #search-jumper-alllist>.sitelistBox {
                     display: inline-flex;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                     transition: all 0.3s ease;
                 }
                 #search-jumper-alllist>.timeInAll,
                 #search-jumper-alllist>.dayInAll {
                     position: fixed;
                     bottom: 0;
                     line-height: 1.5;
                     color: white;
                     opacity: 0.45;
                     font-weight: bold;
                     font-family: Arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     overflow-wrap: normal;
                     white-space: nowrap;
                     margin: 20px;
                     pointer-events: none;
                     text-shadow: 0 0 5px black;
                     background-image: initial;
                 }
                 #search-jumper-alllist>.dayInAll {
                     left: 50px;
                     font-size: ${Re.indexOf("zh")==0||Re.indexOf("ja")==0?"1.5":"2"}vw;
                 }
                 #search-jumper-alllist>.timeInAll {
                     right: 50px;
                     font-size: 2vw;
                 }
                 #search-jumper-alllist>.modeSwitch {
                     position: fixed;
                     top: 5px;
                     right: 5px;
                     width: 45px;
                     height: 45px;
                     border-radius: 50%;
                     box-shadow: 0px 0px 5px 0px #7a7a7a;
                     cursor: pointer;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper-alllist>.modeSwitch>* {
                     pointer-events: none;
                 }
                 #search-jumper-alllist>.modeSwitch:hover {
                     transform: scale(1.1);
                 }
                 #search-jumper-alllist.new-mode {
                     overflow-x: hidden;
                     overflow-y: auto;
                     scrollbar-width: none;
                 }
                 #search-jumper-alllist.new-mode>.sitelistBox {
                     flex-wrap: wrap;
                     flex-direction: column;
                     align-items: center;
                     justify-content: flex-start;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                     width: 78%;
                     max-height: unset;
                     height: auto !important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                     display: flex;
                     flex-wrap: wrap;
                     padding: 0;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                     text-align: left;
                     font-size: large;
                     padding: 15px 30px;
                     display: table-caption;
                     width: 100%;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                     width: 240px;
                     height: 100px;
                     display: block!important;
                     padding: 10px 8%;
                     box-sizing: border-box;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist.new-mode .sitelist>.sitelistCon a {
                     display: block!important;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                     border-radius: 5px;
                     transition: transform 0.25s ease, box-shadow 0.25s ease;
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #9e9e9e1a, 0 1px 2px -1px #9e9e9e1a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:hover {
                     transform: translateY(-6px);
                     -webkit-transform: translateY(-6px);
                     -moz-transform: translateY(-6px);
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #0000001a, 0 1px 2px -1px #0000001a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                     content: attr(title);
                     margin-left: 41px;
                     color: #93959a;
                     font-size: 12px;
                     height: 3em;
                     line-height: 1.5em;
                     overflow: hidden;
                     display: -webkit-box;
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     margin-left: 62px;
                     margin-top: 35px;
                     width: 185px;
                     position: absolute;
                     pointer-events: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>div>img {
                     width: 38px;
                     height: 38px;
                     transform: scale(1);
                     border-radius: 10%;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>div {
                     content: '';
                     position: absolute;
                     width: 38px;
                     height: 38px;
                     float: left;
                     margin-left: -20px;
                     margin-top: -5px;
                     background: #ffffff30;
                     border-radius: 50%;
                     padding: 10px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     display: block;
                     font-weight: bold;
                     height: 21px;
                     line-height: 21px;
                     margin-bottom: 8px;
                     margin-top: 0px;
                     margin-left: 45px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     transition: color 0.25s ease;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>p {
                     color: #f1404b;
                 }
                 #search-jumper .sitelist a+p {
                     display: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                     position: absolute;
                     margin-top: -28px;
                     color: white;
                     width: 250px;
                     max-width: calc(100% - 20px);
                     display: flex;
                     justify-content: space-evenly;
                     overflow: hidden;
                     opacity: 0;
                     transition: .3s;
                     border-top: 1px solid rgba(136,136,136,.2);
                     padding-top: 3px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span {
                     flex-shrink: 0;
                     font-size: 12px;
                     padding: 2px 6px;
                     background: rgb(160 160 160 / 10%);
                     color: #888;
                     border-radius: 5px;
                     transition: .3s;
                     cursor: pointer;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span:hover {
                     background: rgb(160 160 160 / 20%);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>div>img {
                     transform: scale(1.1);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelistCon>div:hover>p {
                     opacity: 1;
                 }
                 #search-jumper #search-jumper-alllist.showbg>.inputGroup,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-btn,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-historylistcon,
                 #search-jumper #search-jumper-alllist.showbg+.groupTab,
                 #search-jumper #search-jumper-alllist.showbg>.sitelistBox {
                     transition: .3s;
                     opacity: 0;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.showbg:hover~.search-jumper-showallBg {
                     background: unset;
                 }
                 .search-jumper-searchBarCon {
                     all: unset;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     z-index: 2147483646;
                     pointer-events: none;
                     text-align: center;
                     overflow: scroll;
                     display: block;
                     -ms-overflow-style: none;
                     scrollbar-width: none;
                     box-sizing: border-box;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483646;
                     overflow-wrap: break-word;
                     background: #505050cc;
                     border-radius: ${this.scale*21}px!important;
                     border: 1px solid #b3b3b3;
                     display: inline-flex;
                     pointer-events: all;
                     margin-top: -${this.scale*25}px;
                     vertical-align: top;
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                     ${c.prefConfig.noAni?"":"transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;"}
                     user-select: none;
                     text-align: center;
                     position: relative;
                     box-sizing: border-box;
                 }
                 .hideAll>.search-jumper-searchBar {
                     margin-top: -${this.scale*40}px;
                 }
                 .search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll>.search-jumper-searchBar {
                     pointer-events: all;
                 }
                 .search-jumper-scroll.search-jumper-bottom {
                     overflow-y: hidden;
                 }
                 .search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
                     position: absolute !important;
                     top: 0;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-searchBar:hover {
                     margin-top: 0;
                     opacity: 1;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.1s ease, margin-left 0.1s, right 0.1s, opacity 0.1s, transform 0.1s;"}
                 }
                 .search-jumper-searchBar.initShow,
                 .resizePage>.search-jumper-searchBar {
                     margin-top: 0;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.25s ease, margin-left 0.25s, right 0.25s, opacity 0.25s, transform 0.25s;"}
                 }
                 .funcKeyCall>.search-jumper-searchBar.initShow {
                     ${c.prefConfig.noAni?"":"transition:opacity 0.15s ease-out, transform 0.25s ease;"}
                 }
                 #search-jumper.funcKeyCall {
                     overflow: visible;
                     position: absolute;
                     max-width: 100%;
                     width: 100%;
                     top: 0;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     position: absolute!important;
                     background: none;
                     border: none;
                     max-width: unset!important;
                     margin: unset;
                     ${c.prefConfig.minPopup&&!c.prefConfig.noAni?"transition: transform 0.25s ease;":""}
                     ${c.prefConfig.minPopup?"transform: scale(0.7);":""}
                 }
                 .funcKeyCall>.search-jumper-searchBar:hover {
                     ${c.prefConfig.minPopup?"transform: scale(1);":""}
                 }
                 .in-input>.search-jumper-searchBar,
                 .funcKeyCall>.search-jumper-searchBar {
                     opacity: 1;
                     display: inline-flex!important;
                 }
                 .in-input.in-find {
                     pointer-events: none;
                 }
                 .in-input.in-find>.searchJumperNavBar,
                 .in-input.in-find>.search-jumper-input {
                     pointer-events: all;
                 }
                 .in-input.in-find>.search-jumper-searchBar, .in-input>.rectSelecting.search-jumper-searchBar {
                     opacity: 0!important;
                     pointer-events: none;
                     transition: none;
                 }
                 .in-input.in-find>.search-jumper-searchBar:hover {
                     opacity: 1!important;
                 }
                 .in-input.in-find>.search-jumper-input {
                     opacity: 0.6;
                     transition:opacity 0.25s ease;
                 }
                 .in-input.in-find>.search-jumper-input:hover,
                 .in-input.in-find>.search-jumper-input.active {
                     opacity: 1;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     flex-direction: column;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type {
                     height: ${c.prefConfig.minPopup?24*this.tilesZoom+"px":"auto"}!important;
                     max-width: ${c.prefConfig.minPopup?24*this.tilesZoom:40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                     width: auto!important;
                     width: max-content!important;
                     max-height: ${108*this.tilesZoom+10}px;
                     flex-wrap: wrap!important;
                     flex-direction: row;
                     padding: 5px;
                     box-shadow: #000000 0px 0px 10px;
                     overflow: auto;
                     scrollbar-width: none;
                     transition: none;
                     background: #d0d0d0d0;
                     box-sizing: content-box;
                 }
                 ${c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:before {
                     content: attr(data-type);
                     position: absolute;
                     background: #ffffffd0;
                     color: black;
                     margin-top: -${22*this.tilesZoom}px;
                     line-height: 1.2;
                     font-size: ${13*this.tilesZoom}px;
                     font-weight: bold;
                     border-radius: ${20*this.tilesZoom}px;
                     padding: 3px 6px;
                     box-shadow: #000000 0px 0px 10px;
                     opacity: 0;
                     pointer-events: none;
                     transition: all 0.5s ease;
                     left: 50%;
                     transform: translate(-50%, 0);
                     z-index: 1;
                     max-width: 100%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>span.search-jumper-btn:first-child {
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${(c.prefConfig.expandTypeLength||12)+1}) {
                     display: grid!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover:before {
                     opacity: 1;
                 }
                 `:""}
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overflow: visible;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: fit-content!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open:not(.not-expand) {
                     overflow: auto;
                 }
                 #search-jumper.search-jumper-left>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover,
                 #search-jumper.search-jumper-right>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: 100%!important;
                     height: fit-content!important;
                 }
                 #search-jumper.search-jumper-bottom>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     align-items: flex-end;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     overflow: auto;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist {
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon {
                     margin: 0;
                     padding: 5px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>p {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon a>div>img {
                     width: 20px;
                     height: 20px;
                 }
                 ${c.prefConfig.minPopup&&!c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.searchJumperExpand {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>.searchJumperExpand {
                     display: grid;
                 }
                 input#search-jumper-tileInput {
                     opacity: 0;
                 }
                 `:""}
                 ${c.prefConfig.minPopup==2?`
                 .funcKeyCall:not(.targetInput)>.search-jumper-searchBar {
                     transform: scale(1);
                 }
                 #search-jumper.funcKeyCall:not(.targetInput)>.search-jumper-searchBar>.search-jumper-type {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: grid;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: none;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     display: grid;
                 }
                 `:""}
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-left,
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right .search-jumper-type,
                 .search-jumper-right>.search-jumper-searchBar {
                     flex-direction: column;
                     max-width: ${42*this.scale}px;
                     max-height: unset;
                 }
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-right .search-jumper-type {
                     max-width: ${40*this.scale}px;
                 }
                 .search-jumper-left,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right>.search-jumper-searchBar {
                     max-width: 100%;
                 }
                 .search-jumper-searchBar.grabbing {
                     max-width: ${42*this.scale}px;
                 }
                 .search-jumper-right .search-jumper-type {
                     align-items: flex-end;
                 }
                 .search-jumper-left {
                     height: 100%;
                     text-align: initial;
                 }
                 .search-jumper-left:not(.search-jumper-showall) {
                     width: initial;
                     width: -webkit-fill-available;
                 }
                 .search-jumper-right {
                     left: unset;
                     right: 0;
                     height: 100%;
                 }
                 .searchJumperExpand {
                     opacity: 0.8;
                 }
                 .search-jumper-type.not-expand:not(.search-jumper-open)>.searchJumperExpand {
                     display: none;
                 }
                 .searchJumperExpand:hover {
                     opacity: 1;
                 }
                 .searchJumperExpand>svg {
                     transform: rotate(-90deg);
                     border-radius: 20px;
                     filter: drop-shadow(0px 0px 2px black);
                     width: unset;
                     height: unset;
                     color: black;
                     fill: black;
                 }
                 .search-jumper-type.search-jumper-open>span.search-jumper-word,
                 #search-jumper.funcKeyCall .search-jumper-type>span.search-jumper-word {
                     filter: drop-shadow(0px 0px 2px black);
                 }
                 .search-jumper-left .searchJumperExpand>svg,
                 .search-jumper-right .searchJumperExpand>svg {
                     transform: unset;
                 }
                 .search-jumper-bottom {
                     top: unset;
                     bottom: 0;
                     height: ${this.scale*42*2}px;
                     max-height: ${this.scale*43*2}px;
                     overflow-y: hidden;
                 }
                 .search-jumper-left>.search-jumper-searchBar {
                     width: fit-content;
                     margin-top: 0;
                     margin-left: -${this.scale*20}px;
                 }
                 .hideAll.search-jumper-left>.search-jumper-searchBar {
                     margin-left: -${this.scale*40}px;
                 }
                 .search-jumper-right>.search-jumper-searchBar {
                     margin-top: 0;
                     right: -${this.scale*20}px;
                     position: fixed;
                 }
                 .hideAll.search-jumper-right>.search-jumper-searchBar {
                     right: -${this.scale*40}px;
                 }
                 .search-jumper-left>.search-jumper-searchBar:hover,
                 .search-jumper-left>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-left.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
                     margin-top: unset;
                     margin-left: 0;
                     opacity: 1;
                 }
                 .search-jumper-right>.search-jumper-searchBar:hover,
                 .search-jumper-right>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-right>.search-jumper-searchBar,
                 .search-jumper-right.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
                     margin-top: unset;
                     right: 0;
                     opacity: 1;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar {
                     position: relative;
                     margin-top: 0px;
                     top: ${this.scale*42}px;
                 }
                 .hideAll.search-jumper-bottom>.search-jumper-searchBar {
                     opacity: 0;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                     opacity: 1;
                 }
                 .search-jumper-btn {
                     position: relative;
                     display: grid;
                     --scale: 1;
                     padding: ${1*this.scale}px!important;
                     margin: ${3*this.scale}px!important;
                     cursor: pointer;
                     box-sizing: content-box;
                     ${c.prefConfig.noAni?"":"transition:margin-left 0.25s ease, width 0.25s, height 0.25s, transform 0.25s, background 0.25s;"}
                     width: calc(${32*this.scale}px * var(--scale));
                     height: calc(${32*this.scale}px * var(--scale));
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     text-decoration:none;
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     text-align: center;
                     background-image: initial;
                     filter: drop-shadow(1px 1px 3px #00000030);
                 }
                 .search-jumper-btn[data-disable] {
                     opacity: 0.5;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn {
                     padding: ${1*this.tilesZoom}px!important;
                     margin: ${3*this.tilesZoom}px!important;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     filter: drop-shadow(1px 1px 3px #00000060);
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-btn:not(.search-jumper-word)>span {
                     position: absolute;
                     text-align: center;
                     width: 100%;
                     bottom: 0px;
                     color: black!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-shadow: 0 1px white, 1px 0 white, -1px 0 white, 0 -1px white;
                     font-size: ${12*this.scale}px;
                     font-weight: normal;
                     opacity: 0.8;
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: ${12*this.tilesZoom}px;
                 }
                 .search-jumper-type>a.search-jumper-btn.historySite {
                     box-shadow: 0px 0px 6px 0px #00000099;
                 }
                 .search-jumper-btn>img {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     border: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     border-radius: unset;
                 }
                 .search-jumper-btn>b {
                     line-height: ${32*this.scale}px;
                     font-size: ${14*this.scale}px;
                     letter-spacing: 0;
                     color: white;
                     opacity: 0.9;
                     text-shadow: 0 0 1px #d9d9d9cc;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>b {
                     line-height: ${32*this.tilesZoom}px;
                     font-size: ${14*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover>b {
                     opacity: 1;
                 }
                 .search-jumper-btn>div {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     line-height: ${32*this.scale}px;
                     background: black;
                     border-radius: ${20*this.scale}px;
                     font-size: ${30*this.scale}px;
                     color: wheat;
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>div {
                     line-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     font-size: ${30*this.tilesZoom}px;
                 }
                 .search-jumper-isInPage .search-jumper-btn>div,
                 .search-jumper-isTargetImg .search-jumper-btn>div,
                 .search-jumper-isTargetAudio .search-jumper-btn>div,
                 .search-jumper-isTargetVideo .search-jumper-btn>div,
                 .search-jumper-isTargetLink .search-jumper-btn>div,
                 .search-jumper-isTargetPage .search-jumper-btn>div {
                     animation-name: changeOpacity;
                     animation-duration: 2s;
                     animation-iteration-count: 3;
                     animation-delay: 0.1s;
                     display: block;
                     opacity: 0;
                 }
                 @keyframes changeOpacity {
                     0%   {opacity: 0;}
                     10%  {opacity: 0;}
                     50%  {opacity: 0.75;}
                     80%  {opacity: 0;}
                     100% {opacity: 0;}
                 }
                 @-webkit-keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 @keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 .search-jumper-tips>.loader {
                     border-width: 5px;
                     border-style: solid;
                     border-color: gainsboro gainsboro dodgerblue gainsboro;
                     border-radius: 50%;
                     display: block;
                     width: 25px;
                     float: left;
                     height: 25px;
                     margin-right: 10px;
                     margin-top: 5px;
                     -webkit-animation: loader-rotate 1.5s linear infinite;
                     animation: loader-rotate 1.5s linear infinite;
                 }
                 .search-jumper-tips>.loader+font {
                     font-size: 25px;
                     line-height: 40px;
                 }
                 .search-jumper-tips>div {
                     font-size: initial;
                     line-height: initial;
                     font-weight: normal;
                     padding: 5px;
                     cursor: initial;
                 }
                 .search-jumper-tips>div [data-read],
                 .search-jumper-tips>div [data-close],
                 .search-jumper-tips>div [data-paste],
                 .search-jumper-tips>div [data-copy] {
                     cursor: pointer;
                 }
                 .search-jumper-tips>div [data-search] {
                     cursor: help;
                 }
                 .search-jumper-tips>div [data-close] {
                     position: absolute;
                     top: 0px;
                     right: 0px;
                     width: 20px;
                     height: 20px;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-close]:hover {
                     color: red;
                 }
                 .search-jumper-tips>div [data-read] {
                     color: #f9690e;
                 }
                 .search-jumper-tips>div [data-drag] {
                     cursor: grab;
                 }
                 .search-jumper-tips>div [data-copy] {
                     display: inline-block;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-copy]:hover {
                     -webkit-transform: scale(1.1);
                     -moz-transform: scale(1.1);
                     transform: scale(1.1);
                 }
                 .search-jumper-tips.draging {
                     cursor: grabbing;
                     transition: none;
                 }
                 .search-jumper-tips.draging * {
                     pointer-events: none;
                 }
                 .search-jumper-tips .showTips-inputGroup {
                     display: flex;
                     flex-wrap: wrap;
                     text-align: left;
                     justify-content: center;
                 }
                 .search-jumper-tips .showTips-input-title {
                     font-size: 9pt;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     display: inline-block;
                     background-color: white;
                     position: relative;
                     left: 20px;
                     padding: 0px 4px;
                     text-align: left;
                     color: #646464;
                     word-break: break-all;
                     max-width: 85%;
                     z-index: 1;
                 }
                 .search-jumper-tips .showTips-inputGroup .select {
                     resize: both;
                     font-size: 11pt;
                     font-weight: normal;
                     border-radius: 4px;
                     border: 1px solid rgba(0, 0, 0, 0.23);
                     margin: 4px;
                     font-family: inherit;
                     background-color: #FFF;
                     width: calc(100% - 8px);
                     color: #4A4A4A;
                     margin-top: -8px;
                     padding: 4px;
                     padding-top: 8px;
                     box-sizing: border-box;
                     height: 30px;
                     position: relative;
                 }
                 .search-jumper-tips .showTips-inputGroup .searchBtn {
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                     cursor: pointer;
                     margin-bottom: 5px;
                 }
                 .search-jumper-tips .showTips-inputGroup * {
                     margin-left: 2px;
                     margin-right: 2px;
                 }
                 .search-jumper-tips .showTips-inputGroup .searchBtn:hover {
                     -webkit-transform: scale(1.1);
                     -moz-transform: scale(1.1);
                     transform: scale(1.1);
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-tips .showTips-inputGroup .select>input[type=text] {
                     top: -8px;
                     left: 0px;
                     position: relative;
                     border: unset!important;
                     width: calc(100% - 25px);
                     padding-bottom: 3px;
                     margin-bottom: -30px;
                     float: left;
                     background: unset;
                     height: 24px;
                     outline: unset;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>p {
                     padding: 0;
                     margin: 0;
                     position: absolute;
                     pointer-events: none;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options {
                     position: fixed;
                     visibility: hidden;
                     opacity: 0;
                     transition: opacity .1s;
                     background-color: #FFF;
                     color: #4A4A4A;
                     border: 1px solid rgba(0, 0, 0, 0.23);
                     border-radius: 4px;
                     z-index: 10;
                     width: auto;
                     max-width: 35%;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>input:focus+p {
                     display: none;
                 }
                 .search-jumper-tips .showTips-inputGroup .select:hover>.options {
                     visibility: visible;
                     opacity: 1;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options>p {
                     cursor: pointer;
                     min-height: 20px;
                     padding: 3px 0;
                     margin: 0;
                 }
                 .search-jumper-tips .showTips-inputGroup .select>.options>p:hover {
                     background: aliceblue;
                 }
                 .search-jumper-tips .showTips-inputGroup div.select:after {
                     content: "\u25BC";
                     position: absolute;
                     right: 6px;
                     top: 8px;
                     font-size: 9px;
                 }
                 @media (prefers-color-scheme: dark) {
                     .search-jumper-tips .showTips-input-title,
                     .search-jumper-tips .showTips-inputGroup input,
                     .search-jumper-tips .showTips-inputGroup textarea,
                     .search-jumper-tips .showTips-inputGroup .select {
                         background-color: black!important;
                         color: #d5d5d5!important;
                     }
                     .search-jumper-tips .showTips-inputGroup input:focus,
                     .search-jumper-tips .showTips-inputGroup textarea:focus,
                     .search-jumper-tips .showTips-inputGroup .select:focus {
                         background-color: #1e1e1e!important;
                     }
                     .search-jumper-tips .showTips-inputGroup input,
                     .search-jumper-tips .showTips-inputGroup textarea,
                     .search-jumper-tips .showTips-inputGroup .select {
                         border: 1px solid rgb(255 255 255 / 36%)!important;
                         background-color: #0c0c0c!important;
                     }
                     .search-jumper-tips .showTips-inputGroup .select>.options {
                         border: 1px solid rgb(255 255 255 / 36%)!important;
                         background-color: black;
                         color: #d5d5d5;
                     }
                     .search-jumper-tips .showTips-inputGroup .select>.options>p:hover {
                         background: #1e1e1e;
                     }
                 }
                 .search-jumper-logoBtnSvg {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     overflow: hidden;
                     vertical-align: top;
                     cursor: grab;
                 }
                 #search-jumper.funcKeyCall .search-jumper-logoBtnSvg {
                     height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                 }
                 .search-jumper-type.search-jumper-targetImg,
                 .search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-type.search-jumper-targetLink,
                 .search-jumper-type.search-jumper-targetPage,
                 .search-jumper-isTargetImg>.search-jumper-type,
                 .search-jumper-isTargetAudio>.search-jumper-type,
                 .search-jumper-isTargetVideo>.search-jumper-type,
                 .search-jumper-isTargetLink>.search-jumper-type,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
                     display: none;
                 }
                 #search-jumper.in-input .search-jumper-type.search-jumper-open {
                     width: auto!important;
                     height: auto!important;
                 }
                 #search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
                     display: flex!important;
                 }
                 #search-jumper .input-hide,
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist.input-hide {
                     display: none!important;
                 }
                 #search-jumper.in-input .search-jumper-type:not(.input-hide) {
                     display: inline-flex!important;
                     flex-wrap: nowrap!important;
                 }
                 #search-jumper.in-input .search-jumper-btn:not(.input-hide) {
                     display: grid!important;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-logo {
                     display: inline-flex;
                     background: unset;
                     padding: 0px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
                     display: none;
                 }
                 .search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
                     display: inline-flex;
                 }
                 .search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-isTargetPage>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
                     display: inline-flex;
                 }
                 .search-jumper-type,
                 .search-jumper-logo {
                     display: inline-flex;
                     box-sizing: border-box;
                     background: #d0d0d0;
                     border-radius: ${20*this.scale}px!important;
                     overflow: hidden;
                     padding: 0.2px;
                     height: ${40*this.scale}px;
                     width: ${40*this.scale}px;
                     max-height: ${this.scale*40}px;
                     min-height: ${this.scale*40}px;
                     min-width: ${this.scale*40}px;
                     ${c.prefConfig.noAni?"":`transition:width ${c.prefConfig.typeOpenTime}ms ease, height ${c.prefConfig.typeOpenTime}ms;`}
                 }
                 #search-jumper.funcKeyCall .search-jumper-type,
                 #search-jumper.funcKeyCall .search-jumper-logo {
                     border-radius: ${20*this.tilesZoom}px!important;
                     height: ${40*this.tilesZoom}px;
                     width: ${40*this.tilesZoom}px;
                     max-height: ${this.tilesZoom*40}px;
                     min-height: ${this.tilesZoom*40}px;
                     min-width: ${this.tilesZoom*40}px;
                 }
                 #search-jumper-tileInput {
                     display: none;
                     opacity: 0.2;
                     user-select: all;
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 12px;
                     margin-bottom: 3px;
                     padding: 5px;
                     border-radius: 10px;
                     box-shadow: #adadad 0px 0px 2px;
                     width: 100%;
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                     -moz-transition: opacity 0.3s ease;
                     -webkit-transition: opacity 0.3s ease;
                     transition: opacity 0.3s ease;
                 }
                 #search-jumper-tileInput:hover {
                     opacity: 0.5;
                 }
                 #search-jumper-tileInput:focus {
                     opacity: 0.95;
                 }
                 #search-jumper.funcKeyCall #search-jumper-tileInput {
                     display: block;
                 }
                 .search-jumper-right>.searchJumperNavBar {
                     right: unset;
                     left: 0;
                 }
                 .search-jumper-right>.searchJumperNavBar>#navMarks+div.navPointer {
                     right: unset;
                     left: 20px;
                     transform: rotate(180deg);
                 }
                 .search-jumper-bottom>.search-jumper-input {
                     bottom: unset;
                     top: 80px;
                 }
                 #search-jumper .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${c.prefConfig.expandTypeLength||12})~a {
                     display: none!important;
                 }
                 #search-jumper .sitelist {
                     position: fixed;
                     text-align: left;
                     background: #00000000;
                     max-height: calc(100vh - ${this.scale*42}px);
                     overflow: scroll;
                     border: 0;
                     pointer-events: none;
                     opacity: 0;
                     ${c.prefConfig.noAni?"":"transition:opacity 0.5s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     z-index: 1;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                     padding: 0 0 10px 0;
                     background-color: #ffffffbb;
                     -moz-transition: background-color 0.3s ease;
                     -webkit-transition: background-color 0.3s ease;
                     transition: background-color 0.3s ease;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelistBox:hover>.sitelist>.sitelistCon {
                     background-color: rgba(255, 255, 255, 0.8);
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                 }
                 #search-jumper .sitelist>.sitelistCon>div:hover {
                     background: #f5f7fa;
                 }
                 #search-jumper .sitelist a {
                     display: flex;
                     align-items: center;
                     text-decoration: none;
                     cursor: pointer;
                 }
                 #search-jumper .sitelist a>div>img {
                     width: 20px;
                     height: 20px;
                     margin-right: 10px;
                     margin-top: unset;
                     max-width: unset;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a>p {
                     display: inline-block;
                     font-size: 15px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     line-height: 25px;
                     margin: 5px auto;
                     color: #282a2d;
                     flex: 1;
                     text-align: left;
                     white-space: nowrap;
                     transform-origin: left;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a.dragTarget>img {
                     -webkit-transform:scale(1.5);
                     -moz-transform:scale(1.5);
                     transform:scale(1.5);
                 }
                 #search-jumper .sitelist a.dragTarget>p {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform: scale(1.2);
                 }
                 #search-jumper .sitelist a * {
                     pointer-events: none;
                 }
                 #search-jumper .sitelist>.sitelistCon>p {
                     color: #282a2d;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: bold;
                     border-bottom: 1px solid #9e9e9e1a;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                     padding: 3px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                     margin: -1px 0 0 0;
                     backdrop-filter: blur(5px);
                 }
                 .search-jumper-searchBar.disable-pointer>.search-jumper-type {
                     pointer-events: none;
                 }
                 .search-jumper-word {
                     background: black;
                     color: #ffffff!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: 500;
                     font-size: ${13*this.scale}px;
                     line-height: calc(${32*this.scale}px * var(--scale));
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     letter-spacing: 0px;
                     text-shadow: unset;
                     text-decoration: none;
                 }
                 span.search-jumper-word {
                     border-radius: ${20*this.scale}px!important;
                 }
                 a.search-jumper-word>span {
                     border-radius: 50%!important;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     background: white;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word {
                     border-radius: ${10*this.tilesZoom}px!important;
                     font-size: ${14*this.tilesZoom}px;
                     line-height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word>span {
                     background: unset;
                 }
                 .search-jumper-word:hover {
                     font-weight: bold;
                     text-shadow: 0px 0px 5px #d0d0d0;
                 }
                 a.search-jumper-word {
                     color: #111111!important;
                     background: unset;
                 }
                 .funcKeyCall a.search-jumper-word {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-word>span {
                     color: #222!important;
                     border-radius: 20px;
                     line-height: unset;
                     text-align: center;
                     text-shadow: 0 0 0.7px #787878dd;
                     background-image: initial;
                 }
                 .search-jumper-type img {
                     width: 100%;
                     height: 100%;
                     margin-top: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                 }
                 .funcKeyCall>.search-jumper-tips {
                     position: absolute;
                 }
                 .search-jumper-tips {
                     z-index: 2147483646;
                     pointer-events: none;
                     position: fixed;
                     font-size: ${35*this.tipsZoom}px;
                     background: #f5f5f5f0;
                     border-radius: ${10*this.tipsZoom}px!important;
                     padding: 6px;
                     box-shadow: 0px 0px 10px 0px #000;
                     font-weight: bold;
                     ${c.prefConfig.noAni?"":"transition: all 0.2s ease;"}
                     color: black;
                     white-space: normal;
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     width: max-content;
                     line-height: ${35*this.tipsZoom}px;
                     word-break: break-all;
                     text-align: center;
                     box-sizing: content-box;
                     overflow: hidden;
                     scrollbar-width: none;
                     font-family: Roboto,arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     cursor: grab;
                     max-height: 80vh;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-tips::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-tips:hover {
                     overflow: auto;
                 }
                 .search-jumper-tips * {
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     margin: auto;
                 }
                 .search-jumper-tips .markdown {
                     white-space: pre-wrap;
                     line-height: 1.2;
                     text-align: initial;
                     margin: 10px;
                     display: block;
                     user-select: text;
                     cursor: auto;
                 }
                 .search-jumper-tips iframe {
                     border: unset;
                     display: block;
                 }
                 .search-jumper-searchBar>.search-jumper-type {
                     padding: 0px;
                     ${c.prefConfig.disableTypeOpen?"background: unset;":""}
                 }
                 .search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     background: unset;
                     border-radius: unset!important;
                 }
                 .minSizeMode.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open),
                 .minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                 }
                 .minSizeModeClose.minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-targetImg,.search-jumper-targetLink,.search-jumper-targetPage,.search-jumper-targetVideo,.search-jumper-targetAudio) {
                     display: inline-flex;
                 }
                 .funcKeyCall>.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                     border-radius: ${20*this.tilesZoom}px!important;
                 }
                 span.search-jumper-word>img {
                     width: ${20*this.scale}px;
                     height: ${20*this.scale}px;
                     margin: auto;
                 }
                 #search-jumper.funcKeyCall span.search-jumper-word>img {
                     width: ${20*this.tilesZoom}px;
                     height: ${20*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     color: white;
                     text-decoration:none;
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-btn:active {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     transition:unset;
                     filter: drop-shadow(1px 1px 5px #000000a0);
                 }
                 .search-jumper-searchBar .search-jumper-btn.current {
                     overflow: visible;
                 }
                 .search-jumper-searchBar .search-jumper-btn.current::before {
                     content: '';
                     position: absolute;
                     right: -2px;
                     top: -2px;
                     border: 1px solid #00000099;
                     display: inline-block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: white;
                     box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                 }
                 .in-input .search-jumper-input {
                     display: block;
                     box-sizing: content-box;
                 }
                 .lock-input .search-jumper-lock-input {
                     float: left;
                     font-size: 20px;
                     top: 14px;
                     left: 25px;
                     color: darkgrey;
                     position: absolute;
                     border-right: 2px solid #32373a;
                     padding-right: 10px;
                     display: block;
                 }
                 .search-jumper-input {
                     width: 50%;
                     min-width: 500px;
                     bottom: 2%;
                     left: 50%;
                     margin: 0 0 0 -25%;
                     margin-left: min(-25%, -250px);
                     position: fixed;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-align: left;
                     box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 10%);
                     border-radius: 28px;
                     background-color: rgb(51 56 59 / 90%);
                     padding: 5px;
                     display: none;
                     z-index: 2139999999;
                     font-size: 20px;
                     height: 36px;
                     touch-action: none;
                 }
                 .inputGroup {
                     cursor: grab;
                     display: flex;
                 }
                 .inputGroup * {
                     cursor: default;
                 }
                 .search-jumper-input input,
                 .search-jumper-input textarea {
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 16px;
                     height: 35px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     border-radius: 3px;
                     box-shadow: #333 0px 0px 2px;
                     width: calc(100% - 20px);
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                 }
                 #searchJumperInput,
                 #searchJumperInputKeyWords {
                     width: calc(100% - 11px);
                     float: left;
                     transition: 0.25s width ease;
                 }
                 #searchJumperInput {
                     margin: 0 5px 0 10px;
                 }
                 #searchJumperInputKeyWords {
                     margin: 0 10px 0 1px;
                 }
                 #searchJumperInputKeyWords:disabled {
                     opacity: 0.5;
                     max-width: 20%;
                     min-width: 20%;
                 }
                 #filterSites>input:focus,
                 #filterSites>textarea:focus {
                     width: calc(400% - 20px);
                     color: white;
                 }
                 .search-jumper-input * {
                     box-sizing: border-box;
                 }
                 .search-jumper-input input[type="radio"] {
                     display: none;
                 }
                 .search-jumper-input input:checked + label {
                     background: #3a444add;
                     opacity: 0.9;
                     color: white;
                     font-size: 14px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .line {
                     left: 27px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .line {
                     left: 233px;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input label {
                     display: inline-block;
                     font-size: 12px;
                     height: 32px;
                     line-height: 32px;
                     width: 200px;
                     text-align: center;
                     background: #2a343acc;
                     color: #959595;
                     position: relative;
                     transition: 0.25s background ease, 0.25s opacity ease;
                     cursor: pointer;
                     position: relative;
                     top: -38px;
                     left: 22px;
                     border-radius: 5px 5px 0 0;
                     user-select: none;
                     pointer-events: all;
                     max-width: 40%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     opacity: 0.6;
                 }
                 .search-jumper-input input:checked + label:hover,
                 .search-jumper-input label:hover {
                     background: #3a444a;
                     opacity: 1;
                 }
                 .search-jumper-input label::after {
                     content: "";
                     height: 1px;
                     width: 100%;
                     position: absolute;
                     display: block;
                     background: #ccc;
                     bottom: 0;
                     opacity: 0;
                     left: 0;
                     transition: 0.25s ease;
                 }
                 .search-jumper-input label:hover::after {
                     opacity: 1;
                 }
                 .search-jumper-input .line {
                     background: #1E88E5;
                     width: 200px;
                     height: 1px;
                     top: -2px;
                     left: 0;
                     transition: 0.25s ease;
                     position: absolute;
                 }
                 .inputGroup>.svgBtns {
                     right: 16px;
                     top: 5px;
                     height: 35px;
                     position: absolute;
                     user-select: none;
                     background: #212022;
                     white-space: nowrap;
                     overflow: hidden;
                     display: flex;
                     align-items: center;
                 }
                 .inputGroup>#addons {
                     position: absolute;
                     bottom: 41px;
                     right: 110px;
                     display: none;
                     flex-direction: column;
                     background: #212022;
                     border-radius: 10px;
                     opacity: 0;
                     transition: 0.5s opacity ease;
                 }
                 .inputGroup>#addons>div {
                     padding: 10px;
                 }
                 .inputGroup>#addons>div>input {
                     float: left;
                     width: 20px;
                     height: 20px;
                     margin: 0 10px 0 0;
                     cursor: pointer;
                 }
                 .inputGroup:hover>#addons {
                     display: flex;
                 }
                 .inputGroup>#addons:hover {
                     opacity: 1;
                 }
                 .inputGroup>.svgBtns:hover+#addons {
                     opacity: 1;
                 }
                 .inputGroup>#addons>div>label {
                     color: white;
                     display: inline;
                     background: none;
                     top: unset;
                     left: unset;
                     font-size: unset;
                     line-height: 20px;
                     max-width: unset;
                 }
                 .inputGroup>.svgBtns:hover {
                     width: auto;
                 }
                 .inputGroup>.svgBtns>svg {
                     margin: 0 2px;
                 }
                 .inputGroup svg.checked {
                     fill: #1E88E5;
                 }
                 @media screen and (max-width: 2048px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1580px;
                     }
                 }
                 @media screen and (max-width: 1920px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1320px;
                     }
                 }
                 @media screen and (max-width: 1600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1060px;
                     }
                 }
                 @media screen and (max-width: 1300px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 800px;
                     }
                 }
                 @media screen and (max-width: 900px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 540px;
                     }
                 }
                 @media screen and (max-width: 600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 95vw;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                         width: calc(100% - 20px);
                     }
                     #search-jumper-alllist>.timeInAll, #search-jumper-alllist>.dayInAll {
                         margin: 10px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(50vw - 45px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: 100px;
                         margin-left: 68px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>div>img {
                         margin-left: 0;
                     }
                 }
                 @media screen and (max-width: 380px) {
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(100vw - 60px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: calc(100vw - 150px);
                         margin-left: 85px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                         width: calc(100vw - 60px);
                     }
                 }
                 @media screen and (max-width: 800px) {
                     .search-jumper-input .line {
                         display: none;
                     }
                     .search-jumper-input {
                         min-width: 300px;
                         margin-left: min(-25%, -150px);
                     }
                     .inputGroup>.svgBtns {
                         width: 25px;
                     }
                     #search-jumper-alllist>.modeSwitch {
                         width: 36px;
                         height: 36px;
                         right: 2px;
                         top: 10px;
                     }
                 }
                 @media screen and (max-width: 650px) {
                     #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                         display: none;
                     }
                 }
                 .search-jumper-input .content-container {
                     background: #eee;
                     position: static;
                     font-size: 16px;
                 }
                 .search-jumper-input .content-container .inputGroup {
                     position: absolute;
                     padding: 5px;
                     width: 100%;
                     top: 0;
                     left: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s ease;
                     color: #333;
                 }
                 .search-jumper-input svg,
                 .searchJumperNavBar svg {
                     width: 25px;
                     height: 25px;
                     fill: white;
                     cursor: pointer;
                     opacity: 0.8;
                     transition: 0.25s all ease;
                     font-size: 0px;
                 }
                 .search-jumper-input .inputGroup:hover svg,
                 .searchJumperNavBar.sjNavShow svg {
                     pointer-events: all;
                 }
                 .search-jumper-input svg *,
                 .searchJumperNavBar svg * {
                     cursor: pointer;
                 }
                 .search-jumper-input svg:hover,
                 .searchJumperNavBar svg:hover,
                 .search-jumper-input>.closeBtn:hover,
                 .searchJumperNavBar>div.minNavBtn:hover,
                 .searchJumperNavBar>div.maxNavBtn:hover {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform:scale(1.2);
                     opacity: 1;
                 }
                 #search-jumper.selectedEle #filterSites>.svgBtns>svg {
                     display: inline-block!important;
                 }
                 .search-jumper-input>.closeBtn {
                     position: absolute;
                     right: 0px;
                     top: -35px;
                     width: 30px;
                     height: 30px;
                     vertical-align: middle;
                     overflow: hidden;
                     background: rgb(51 56 59 / 90%);
                     color: white;
                     text-align: center;
                     line-height: 30px;
                     border-radius: 20px;
                     pointer-events: all;
                     transition: 0.25s all ease;
                     opacity: 0.6;
                     font-size: 26px;
                     box-shadow: 0px 0px 2px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 20%);
                     cursor: pointer;
                     user-select: none;
                 }
                 #searchInPage>.lockWords {
                     max-width: 50%;
                     position: absolute;
                     bottom: 4px;
                     left: 16px;
                     color: white;
                     font-size: 18px;
                     display: flex;
                     flex-wrap: wrap-reverse;
                     max-height: 38px;
                     overflow: hidden;
                 }
                 #searchInPage>.lockWords:hover {
                     overflow-y: auto;
                     height: auto;
                     max-height: 90vh;
                 }
                 #searchInPage>.lockWords>span {
                     position: relative;
                     padding: 5px;
                     cursor: pointer;
                     user-select: none;
                     background: yellow;
                     color: black;
                     border: 1px solid;
                     margin: 2px;
                     display: flex;
                     align-items: center;
                     white-space: nowrap;
                     max-width: 100%;
                     line-height: initial;
                 }
                 #searchInPage>.lockWords>span>em {
                     cursor: alias;
                 }
                 #searchInPage>.lockWords .lockWordTool {
                     position: absolute;
                     right: 0;
                     top: 0;
                     display: none;
                     opacity: 0.3;
                     height: 15px;
                     width: 15px;
                     text-align: center;
                     line-height: 15px;
                     border-radius: 50%;
                     background: black;
                     color: white;
                 }
                 #searchInPage>.lockWords .lockWordTool>span {
                     cursor: pointer;
                     font-size: 15px;
                 }
                 #searchInPage>.lockWords .modifyBtn {
                     top: unset;
                     bottom: 0;
                 }
                 #searchInPage>.lockWords .lockWordTool:hover {
                     opacity: 1;
                 }
                 #searchInPage>.lockWords>span:hover .lockWordTool {
                     display: block;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords .lockWordTool>svg {
                     width: 15px;
                     height: 15px;
                     fill: black;
                     color: black;
                     border: 1px solid white;
                     border-radius: 10px;
                     background: white;
                 }
                 #searchInPage>.lockWords>span>em {
                     font-size: 12px;
                     margin-right: 5px;
                     color: unset;
                 }
                 .searchJumperNavBar {
                     all: unset;
                     top: 0px;
                     bottom: 0px;
                     right: 0px;
                     position: fixed;
                     width: 20px;
                     z-index: 2147483647;
                     background: #00000026;
                     text-align: center;
                     pointer-events: none;
                     font-size: 0px;
                     opacity: 0;
                     transition: width 0.3s, background 0.3s;
                 }
                 .searchJumperNavBar:hover {
                     width: 25px;
                     background: #00000066;
                 }
                 .searchJumperNavBar.sjNavShow {
                     pointer-events: all;
                     opacity: 1;
                 }
                 .search-jumper-showall > .searchJumperNavBar.sjNavShow {
                     opacity: 0;
                 }
                 .searchJumperNavBar>.closeNavBtn {
                     width: 16px;
                     height: 16px;
                     fill: white;
                     cursor: pointer;
                     display: inline-block;
                 }
                 .searchJumperNavBar>.minNavBtn,
                 .searchJumperNavBar>.maxNavBtn {
                     font-size: 12px;
                     font-weight: bold;
                     font-family: system-ui;
                     line-height: 16px;
                     opacity: 0.1;
                     background: white;
                     color: black;
                     border-radius: 10px;
                     width: 16px;
                     height: 16px;
                     display: inline-block;
                     cursor: pointer;
                     transition: 0.25s opacity ease, 0.25s transform ease;
                 }
                 .searchJumperNavBar:hover>.minNavBtn,
                 .searchJumperNavBar:hover>.maxNavBtn {
                     opacity: 0.8;
                 }
                 #search-jumper>.searchJumperNavBar.minimize {
                     background: transparent;
                     pointer-events: none;
                 }
                 .searchJumperNavBar.minimize>.closeNavBtn,
                 .searchJumperNavBar.minimize>.navPointer,
                 .searchJumperNavBar.minimize>.maxNavBtn,
                 .searchJumperNavBar.minimize>#navMarks {
                     display: none;
                 }
                 .searchJumperNavBar.minimize>.minNavBtn {
                     opacity: 1;
                     box-shadow: 0px 0px 3px 1px #000;
                     margin-left: -50px;
                     margin-top: 5px;
                     pointer-events: all;
                 }
                 .search-jumper-right>.searchJumperNavBar.minimize>.minNavBtn {
                     margin-left: unset;
                     margin-right: -50px;
                 }
                 #navMarks+.navPointer {
                     pointer-events: none;
                     position: absolute;
                     right: 20px;
                     text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
                     font-size: 30px;
                     font-family: system-ui;
                     line-height: 0px;
                     border: 0;
                     margin-top: 0;
                     opacity: 0.8;
                     color: black;
                     transition: top 0.25s ease;
                     animation-name: changeHor;
                     animation-duration: 1s;
                     animation-iteration-count: infinite;
                     animation-timing-function: ease-in-out;
                 }
                 @keyframes changeHor {
                     0%   {right: 20px;}
                     10%  {right: 18px;}
                     80%  {right: 25px;}
                     100% {right: 20px;}
                 }
                 #navMarks {
                     height: calc(100% - 50px);
                     width: 100%;
                     position: relative;
                 }
                 #navMarks>span {
                     height: 0.5vh;
                     width: 100%;
                     position: absolute;
                     border: 1px solid #cccccc;
                     min-height: 5px;
                     box-sizing: border-box;
                     left: 0;
                     border-radius: 0px!important;
                     cursor: alias;
                 }
                 .searchJumperPosBar {
                     background: rgba(29, 93, 163, 0.3);
                     position: absolute;
                     min-height: 10px;
                     min-width: 10px;
                     animation-duration: 2s;
                     z-index: 2147483647;
                     margin: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s all ease;
                 }
                 .searchJumperPosBar.searchJumperPosW {
                     width: 100%;
                     left: 0;
                 }
                 .searchJumperPosBar.searchJumperPosH {
                     height: 100%;
                     top: 0;
                     position: fixed;
                 }
                 @keyframes fadeit {
                     0% {opacity: 1;}
                     50% {opacity: 0.8;}
                     100% {opacity: 0;}
                 }
                 #rightSizeChange {
                     top: 0;
                     opacity: 0;
                     height: 45px;
                     width: 15px;
                     position: absolute;
                     cursor: e-resize;
                     right: 0;
                     pointer-events: all;
                 }
                 .searchJumper-hide {
                     display: none!important;
                 }
                 .search-jumper-historylist>a.search-jumper-btn {
                     filter: drop-shadow(0px 0px 3px #00000050);
                     width: 32px;
                     height: 32px;
                     line-height: 32px;
                     min-width: auto;
                     min-height: auto;
                     flex-shrink: 0;
                 }
                 .search-jumper-historylist>a.search-jumper-btn>img {
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-historylist>a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: 12px;
                     line-height: normal;
                 }
                 #search-jumper .listArrow {
                     width: 0;
                     height: 0;
                     border: 10px solid transparent;
                     pointer-events: none;
                     border-bottom-color: white;
                     position: fixed;
                     opacity: 0;
                     visibility: hidden;
                     z-index: 2147483647;
                     transition: opacity .3s ease, top .15s, bottom .15s, left .15s, right .15s;
                 }
                 #search-jumper.search-jumper-left .listArrow {
                     border-bottom-color: transparent;
                     border-right-color: white;
                 }
                 #search-jumper.search-jumper-right .listArrow {
                     border-bottom-color: transparent;
                     border-left-color: white;
                 }
                 #search-jumper.search-jumper-bottom .listArrow {
                     border-bottom-color: transparent;
                     border-top-color: white;
                 }
                 @media (prefers-color-scheme: dark) {
                     #search-jumper.search-jumper-showall #filterSites {
                         background-color: #2a282cc0;
                     }
                     #search-jumper.search-jumper-showall #filterSites>input,
                     #search-jumper.search-jumper-showall #filterSites>textarea {
                         background-color: #000000;
                         color: white;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127ee !important;
                         box-shadow: 0px 0px 10px 0px #1c1c1c;
                     }
                     #search-jumper.search-jumper-showall .sitelist > .sitelistCon {
                         background-color: #1C212760 !important;
                     }
                     #search-jumper.search-jumper-showall .sitelist > .sitelistCon:hover {
                         background-color: #1C2127dd !important;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon:hover {
                         background-color: #1C212788 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #b4b8bf !important;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a:hover>p {
                         color: #f1404b !important;
                     }
                     #search-jumper .listArrow {
                         border-bottom-color: #1C2127;
                     }
                     #search-jumper.search-jumper-left .listArrow {
                         border-bottom-color: transparent;
                         border-right-color: #1C2127;
                     }
                     #search-jumper.search-jumper-right .listArrow {
                         border-bottom-color: transparent;
                         border-left-color: #1C2127;
                     }
                     #search-jumper.search-jumper-bottom .listArrow {
                         border-bottom-color: transparent;
                         border-top-color: #1C2127;
                     }

                     /* \u5386\u53F2\u5217\u8868 */
                     .search-jumper-historylistcon {
                         background-color: #181C2060 !important;
                         border-bottom: 1px solid #252b32;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 2px #ffffff80);
                     }

                     .search-jumper-tips {
                         background-color: #3F4042f0;
                         color: #DADADA;
                     }
                     .search-jumper-tips>*:not(font) {
                         color: white;
                     }

                     .search-jumper-showall .search-jumper-word:hover {
                         text-shadow: 0px 0px 5px #2374FF !important;
                     }

                     /* \u7C7B\u522B */
                     .search-jumper-showall .search-jumper-type,
                     .search-jumper-showall .search-jumper-logo {
                         background-color: #181C20 !important;
                     }

                     #search-jumper.search-jumper-showall>.groupTab {
                         background: #1C2127ee !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab>span:hover{
                         background: #283C57 !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                         color: white;
                     }
                 }
                 `,this.inPageCss=`
                 mark.searchJumper,
                 a.searchJumper {
                     visibility: inherit;
                     font-style: inherit;
                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
                     border-radius: 3px;
                     text-decoration: none;
                     padding: 1px 0;
                     -webkit-text-fill-color: initial;
                     text-shadow: initial;
                     min-width: initial;
                     display: inline;
                     margin: initial;
                 }
                 mark.searchJumper:before,
                 a.searchJumper:before,
                 mark.searchJumper:after,
                 a.searchJumper:after {
                     all: unset;
                     content: none!important;
                 }
                 mark.searchJumper[data-current=true],
                 a.searchJumper[data-current=true] {
                     border-bottom: 0.2em solid;
                     border-bottom-left-radius: 0;
                     border-bottom-right-radius: 0;
                     animation: 0.5s linear 0s 5 normal none running currentMark;
                 }
                 @keyframes currentMark {
                     from {border-color: unset}
                     to {border-color: transparent;}
                 }
                `,c.prefConfig.cssText&&(Mt+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-searchBar";let i=document.createElement("input");i.id="search-jumper-tileInput",i.addEventListener("mousedown",b=>{b&&b.stopPropagation&&b.stopPropagation()},!0);let r;i.addEventListener("input",b=>{clearTimeout(r),r=setTimeout(()=>{let w=e.bar.querySelector(".search-jumper-open>span:first-child");w&&w.dispatchEvent(new CustomEvent("checkSites",{detail:i.value}))},500)},!0),this.tileInput=i;let s=document.createElement("span");s.className="search-jumper-logo",pt=document.createElement("span"),pt.innerHTML=ie(fi),pt.className="search-jumper-btn",s.addEventListener("mouseenter",b=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),s.appendChild(pt),t.appendChild(s);let n=document.createElement("div");n.id="search-jumper",n.style.display="none",n.className="search-jumper-searchBarCon",n.appendChild(t),n.setAttribute("translate","no");let a=document.createElement("div");a.id="search-jumper-alllist",n.appendChild(a),this.alllist=a;let o=document.createElement("span");o.className="groupTab",n.appendChild(o),this.groupTab=o;let p=document.createElement("div");p.className="search-jumper-showallBg",n.appendChild(p);let u=document.createElement("div");u.className="sitelistBox",a.appendChild(u),this.sitelistBox=u;const h=/#[^\s#]+/g;u.addEventListener("mouseover",b=>{if(!a.classList.contains("new-mode"))return;let w=b.target;w.parentNode&&w.parentNode.dataset.name&&(w=w.parentNode);let M=w.title;if(!w.dataset.name||!M||w.initedTag)return;let L=document.createElement("p"),U=M.match(h);U&&(U.forEach(Q=>{let ne=document.createElement("span");ne.innerText=Q.slice(1),ne.addEventListener("click",ae=>{e.searchInput.value=Q,e.searchInput.dispatchEvent(new CustomEvent("input"))}),L.appendChild(ne)}),w.appendChild(L)),w.initedTag=!0});let m=document.createElement("span");m.className="timeInAll",a.appendChild(m),this.timeInAll=m,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",this.modeSwitch.innerHTML=ie('<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),a.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation(),a.classList.toggle("new-mode"),a.classList.remove("showbg"),K.setItem("allPageNewMode",a.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",b=>{Xe&&(b.preventDefault(),b.stopPropagation(),a.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",b=>{Xe&&(b.preventDefault(),b.stopPropagation(),a.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",b=>{Xe&&(b.preventDefault(),b.stopPropagation(),a.classList.remove("showbg"),me(Xe,{active:!0,insert:!0}))}),zi&&a.classList.add("new-mode");let d=document.createElement("span");d.className="dayInAll",a.appendChild(d),this.dayInAll=d,a.addEventListener(At(),b=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!a.classList.contains("new-mode")){var w,M;if(b.type!=="wheel"){var L=0,U=0;typeof b.axis=="number"?b.axis==2?U=b.detail:L=b.detail:typeof b.wheelDeltaY>"u"||b.wheelDeltaY!=0?U=-b.wheelDelta/40:L=-b.wheelDelta/40,M=U,w=L}else w=b.deltaX,M=b.deltaY;b.target!=a&&b.target!=p&&b.target!=u&&M||(b.preventDefault(),b.stopPropagation(),a.scrollLeft+=w||M)}},{passive:!1,capture:!1});let f=document.createElement("span");f.innerHTML=ie(fi),f.className="search-jumper-btn",f.addEventListener("click",b=>{me(it,{active:!0,insert:!0})}),a.appendChild(f);let y=document.createElement("div");y.className="search-jumper-historylistcon",a.appendChild(y);let I=document.createElement("div");if(I.className="search-jumper-historylist",y.appendChild(I),this.historylist=I,t.addEventListener("mouseenter",b=>{t.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&t.classList.remove("initShow"))},!1),t.addEventListener("mouseleave",b=>{if(c.prefConfig.mouseLeaveToHide){if(t.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?t.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(t.classList.add("minSizeMode"),t.classList.add("minSizeModeClose")),Jt&&!c.prefConfig.resizePage){let b=M=>{this.touched=!1,t.classList.remove("initShow")},w=M=>{this.touched||this.funcKeyCall||(this.touched=!0,t.classList.add("disable-pointer"),M.stopPropagation(),setTimeout(()=>{t.classList.remove("disable-pointer")},250))};Z(document).addEventListener("touchstart",b,{passive:!0,capture:!1}),t.addEventListener("touchstart",w,{passive:!1,capture:!0})}this.bar=t,this.con=n;let T=document.createElement("span");T.className="search-jumper-tips",T.style.opacity=0,n.appendChild(T),T.addEventListener("mouseenter",b=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),T.addEventListener("click",b=>{let w=b.target.dataset,M=b.target.innerText;if(w){if(typeof w.read<"u"){let L=new SpeechSynthesisUtterance("");L.volume=w.volume||1,L.rate=w.rate||1,L.pitch=w.pitch||1,L.lang=w.lang||"",L.text=w.read||M,window.speechSynthesis.speak(L)}typeof w.copy<"u"&&Fe(w.copy||M),w.search&&(St=M,e.searchBySiteName(w.search)),typeof w.paste<"u"&&B&&(/INPUT|TEXTAREA/i.test(B.nodeName)&&B.getAttribute("aria-readonly")!="true"||B.contentEditable=="true")&&qt(B,w.paste||M),typeof w.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",e.tips.innerHTML=ie(""))}},!1);let O,W,x=b=>{let w=ft(b)-O.x,M=mt(b)-O.y;Math.abs(w)+Math.abs(M)<5||(T.style.right===""?T.style.setProperty("left",W.left+w+"px","important"):T.style.setProperty("right",W.right-w+"px","important"),T.style.bottom===""?T.style.setProperty("top",W.top+M+"px","important"):T.style.setProperty("bottom",W.bottom-M+"px","important"),T.classList.add("draging"))},P=b=>{document.removeEventListener("mouseup",P,!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("touchend",P,!1),document.removeEventListener("touchmove",x,!1),T.classList.remove("draging")},J=(b,w)=>{if(!b.target||b.target!==T&&typeof b.target.dataset.drag>"u")return;b.preventDefault(),b.stopPropagation(),O={x:ft(b),y:mt(b)};let M=getComputedStyle(T);W={left:parseFloat(M.left),right:parseFloat(M.right),top:parseFloat(M.top),bottom:parseFloat(M.bottom)},w&&w()};T.addEventListener("mousedown",b=>{J(b,()=>{document.addEventListener("mouseup",P,!1),document.addEventListener("mousemove",x,!1)})},!1),T.addEventListener("touchstart",b=>{J(b,()=>{document.addEventListener("touchend",P,!1),document.addEventListener("touchmove",x,!1)})},{passive:!1,capture:!1}),this.tips=T;let $=document.createElement("div");$.className="searchJumperNavBar",$.style.display="none",$.innerHTML=ie(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${Oi}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${yt}" /></div>
                  <div class="navPointer">></div>
                `),n.appendChild($);let F=document.createElement("span");F.title=N("expand"),F.className="searchJumperExpand search-jumper-btn",F.innerHTML=ie(`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=F,this.navMarks=$.querySelector("#navMarks"),this.closeNavBtn=$.querySelector(".closeNavBtn"),this.minNavBtn=$.querySelector(".minNavBtn"),this.maxNavBtn=$.querySelector(".maxNavBtn"),this.searchJumperNavBar=$,this.navPointer=$.querySelector(".navPointer"),this.navPointer.style.display="none";let A=document.createElement("div");A.className="search-jumper-input",A.innerHTML=ie(`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${N("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${N("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${N("inputTitle")}" placeholder="${N("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${N("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${N("inPageTips")}" placeholder="${N("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),n.appendChild(A),this.searchInputDiv=A,this.searchInput=A.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=A.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=A.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=A.querySelector("#searchJumperInPageInput"),this.pickerBtn=A.querySelector("#pickerBtn"),this.minEleBtn=A.querySelector("#minEleBtn"),this.maxEleBtn=A.querySelector("#maxEleBtn"),this.copyEleBtn=A.querySelector("#copyEleBtn"),this.openLinkBtn=A.querySelector("#openLinkBtn"),this.editBtn=A.querySelector("#editBtn"),this.addWord=A.querySelector("#addWord"),this.recoverBtn=A.querySelector("#recoverBtn"),this.wordModeBtn=A.querySelector("#wordModeBtn"),this.saveRuleBtn=A.querySelector("#saveRuleBtn"),this.pinBtn=A.querySelector("#pinBtn"),this.locBtn=A.querySelector("#locBtn"),this.emptyBtn=A.querySelector("#emptyBtn"),this.copyInPageBtn=A.querySelector("#copyInPageBtn"),this.closeBtn=A.querySelector(".closeBtn"),this.filterSites=A.querySelector("#filterSites"),this.filterSitesTab=A.querySelector("#filterSitesTab"),this.searchInPageTab=A.querySelector("#searchInPageTab"),this.searchInPageLockWords=A.querySelector("#searchInPage>.lockWords"),this.contentContainer=A.querySelector(".content-container"),this.rightSizeChange=A.querySelector("#rightSizeChange"),this.filterGlob=A.querySelector("#filterGlob"),this.suggestDatalist=A.querySelector("#suggest"),this.addonsList=A.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=De()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||Ke();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||Ae,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let i=this,r=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let n=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(n).sort((a,o)=>o.length-a.length).forEach(a=>{let o=a;if(a=a.trim(),!a||t&&(a.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(a.toLowerCase())))return;let p="",u="",h=!1,m,d,f,y=!1,I="",T=/\$t{(.*?)}($|\$)/,O=a.match(T),W=0;if(O)if(p=O[1],a=a.replace(T,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let M=p.match(/^[\$@]popup(\((.*)\))?$/);M&&(p="",h=!0,M[1]&&(W=M[2]||"1"))}let x=/\$p{(.*?)}($|\$)/,P=a.match(x);P&&(m=parseInt(P[1])||0,a=a.replace(x,"$2"));let J=/\$in{(.*?)}($|\$)/,$=a.match(J);$&&(f=$[1]||"",a=a.replace(J,"$2"));let F=/\$s{(.*?)}($|\$)/,A=a.match(F);if(A){let M=A[1],L="";A=A[1].match(/(.*?);(.*)/),A&&(M=A[1],L=A[2]),u=i.getHighlightStyle(i.curWordIndex,M,L),a=a.replace(F,"$2")}else u=i.getHighlightStyle(i.curWordIndex,"","");let b="";if(a.indexOf("@")===0){b=a;let M=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[a];M&&(a=M)}else a=a.replace(/^\\@/,"@");let w=a.match(/^\/(.*)\/([il]*)($|\$)/);w&&(y=!0,a=w[1],I=w[2].indexOf("i")!=-1?"i":"",d=w[2].indexOf("l")!=-1),b||(b=a),!i.highlightSpans[b]&&(r.push({content:a,showWords:b,isRe:y,link:d,reCase:I,title:p,style:u,oriWord:o,hideParent:m,inRange:f,popup:h,showTips:W,init:t}),i.curWordIndex++)})}else{this.curWordIndex=0;let s=(this.lockWords||"").replace(/^\$o/,"")+e;r=[{content:s,showWords:s,isRe:!1,reCase:"",title:"",style:i.getHighlightStyle(i.curWordIndex,"",""),init:t}]}return r}submitInPageWords(e){let t=this,i=this.searchJumperInPageInput.value,r=[];if(!i){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let n in this.highlightSpans){let a=this.highlightSpans[n],o=this.marks[n];this.setHighlightSpan(a,0,o)}}return r}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(i.indexOf("$c")===0&&i.length>2?this.splitSep=i.substr(2,1):i.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let s=this.anylizeInPageWords(i,this.initHighlight);return!s||s.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+i:this.lockWords=i,this.splitSep||(this.searchInPageLockWords.innerHTML=ie(),this.highlight("")),this.highlight(s),s.forEach(n=>{if(!n)return;let a=document.createElement("span");a.innerHTML=ie(n.showWords),a.title=n.title?JSON.parse('"'+n.title+'"'):n.showWords;let o=n.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(a.style.background=o[1]);let p=n.style.match(/color: *(#?\w+)/);p&&(a.style.color=p[1]),a.addEventListener("click",f=>(f.stopPropagation(),f.preventDefault(),!1)),a.oncontextmenu=f=>{f.preventDefault()},a.addEventListener("dblclick",f=>{f.stopPropagation(),f.preventDefault(),f.target.nodeName.toUpperCase()!=="EM"&&(f.ctrlKey||f.shiftKey||f.altKey||f.metaKey||this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,a))},!0),a.addEventListener("mousedown",f=>{f.button===0?this.focusHighlightByText(n.showWords,!0,a):f.button===2&&this.focusHighlightByText(n.showWords,!1,a)});let u=!1;a.addEventListener(At(),f=>{if(f.preventDefault(),f.stopPropagation(),u)return;u=!0,setTimeout(()=>{u=!1},100);let y;if(f.type!=="wheel"){let I=0;typeof f.axis=="number"?f.axis==2&&(I=f.detail):(typeof f.wheelDeltaY>"u"||f.wheelDeltaY!=0)&&(I=-f.wheelDelta/40),y=I}else y=f.deltaY;this.focusHighlightByText(n.showWords,y>0,a)},{passive:!1,capture:!1}),a.addEventListener("editword",f=>{a.parentNode.removeChild(a),this.removeHighlightWord(n),this.searchJumperInPageInput.value=n.content});let h=document.createElement("div");h.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),a.parentNode.removeChild(a),this.removeHighlightWord(n)}),h.className="lockWordTool",h.innerHTML=ie(`<span title="${N("removeBtn")}">\xD7</span>`),a.appendChild(h);let m=document.createElement("div");m.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,a)}),m.className="lockWordTool modifyBtn",m.innerHTML=ie("<span>+</span>"),a.appendChild(m);let d=this.marks[n.showWords];this.setHighlightSpan(a,-1,d),this.highlightSpans[n.showWords]=a,this.searchInPageLockWords.appendChild(a),r.push(a)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),r}async showCustomInputWindow(e,t){return new Promise(i=>{this.customInputCallback=t;let r=()=>{let p=this.finalSearch.dataset.url,u=0;[].forEach.call(this.customGroup.children,h=>{let m=h.value;if(h.className=="select")m=h.children[0].value;else if(/^DIV$/i.test(h.nodeName))return;p=p.replaceAll("\u25CE"+u,m||""),u++}),this.finalSearch.value=p};if(!this.customInputFrame){let u=Ne(`
                         .customInputFrame-body {
                             width: 300px;
                             min-height: 200px;
                             position: fixed;
                             text-align: left;
                             left: 50%;
                             top: 50%;
                             margin-top: -160px;
                             margin-left: -150px;
                             z-index: 2147483647;
                             background-color: #ffffff;
                             border: 1px solid #afb3b6;
                             border-radius: 10px;
                             opacity: 0.95;
                             filter: alpha(opacity=95);
                             box-shadow: 5px 5px 20px 0px #000;
                             color: #6e7070;
                             font-size: initial;
                         }
                         .customInputFrame-body #customGroup {
                             max-height: 50vh;
                             overflow: auto;
                             scrollbar-width: none;
                         }
                         .customInputFrame-body #customGroup::-webkit-scrollbar {
                             width: 0 !important;
                             height: 0 !important;
                         }
                         .customInputFrame-title {
                             background: #458bd1!important;
                             display: flex!important;
                             align-items: center!important;
                             justify-content: center!important;
                             color: white!important;
                             font-weight: bold;
                             font-size: 18px!important;
                             border-radius: 10px 10px 0 0!important;
                         }
                         .customInputFrame-title>img {
                             margin: 5px;
                             height: 32px;
                             width: 32px;
                         }
                         .customInputFrame-input-title {
                             font-size: 9pt;
                             font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                             display: inline-block;
                             background-color: white;
                             position: relative;
                             left: 20px;
                             padding: 0px 4px;
                             text-align: left;
                             color: #646464;
                             word-break: break-all;
                             max-width: 85%;
                             z-index: 1;
                         }
                         .customInputFrame-body input[type=text],
                         .customInputFrame-body input[type=number],
                         .customInputFrame-body textarea,
                         .customInputFrame-body .select {
                             resize: both;
                             font-size: 11pt;
                             font-weight: normal;
                             border-radius: 4px;
                             border: 1px solid rgba(0, 0, 0, 0.23);
                             margin: 4px;
                             font-family: inherit;
                             background-color: #FFF;
                             width: calc(100% - 8px);
                             color: #4A4A4A;
                             margin-top: -8px;
                             padding: 4px;
                             padding-top: 8px;
                             box-sizing: border-box;
                         }
                         .customInputFrame-buttons {
                             text-align: center;
                             margin-bottom: 5px;
                             display: flex;
                             justify-content: space-evenly;
                         }
                         .customInputFrame-buttons>button {
                             width: 32%;
                             font-size: 16px;
                             cursor: pointer;
                             border: 1px solid #1976d2;
                             border-radius: 4px;
                             transition: all .3s;
                             color: #fff;
                             background-color: #458bd1;
                             line-height: 25px;
                         }
                         .customInputFrame-buttons>button:hover {
                             color: #e3f2fd;
                         }
                         .customInputFrame-body .select {
                             height: 30px;
                             position: relative;
                         }
                         .customInputFrame-body .select>input[type=text] {
                             top: 0px;
                             left: -7px;
                             position: relative;
                             border: unset!important;
                             width: calc(100% - 25px);
                             padding-bottom: 3px;
                             margin-bottom: -30px;
                             float: left;
                             background: unset;
                             height: 28px;
                             outline: unset;
                         }
                         .customInputFrame-body .select>p {
                             padding: 0;
                             margin: 0;
                             position: absolute;
                             pointer-events: none;
                         }
                         .customInputFrame-body .select>.options {
                             position: absolute;
                             visibility: hidden;
                             opacity: 0;
                             transition: opacity .1s;
                             background-color: #FFF;
                             color: #4A4A4A;
                             border: 1px solid rgba(0, 0, 0, 0.23);
                             border-radius: 4px;
                             z-index: 10;
                             width: auto;
                             max-width: 35%;
                             right: calc(50% - 147px);
                             margin-top: -10px;
                             position: fixed;
                         }
                         .customInputFrame-body .select>input:focus+p {
                             display: none;
                         }
                         .customInputFrame-body .select:hover>.options {
                             visibility: visible;
                             opacity: 1;
                         }
                         .customInputFrame-body .select>.options>p {
                             cursor: pointer;
                             min-height: 20px;
                             padding: 3px 0;
                             margin: 0;
                         }
                         .customInputFrame-body .select>.options>p:hover {
                             background: aliceblue;
                         }
                         .customInputFrame-body div.select:after {
                             content: "\u25BC";
                             position: absolute;
                             right: 6px;
                             top: 8px;
                             font-size: 9px;
                         }
                         @media (prefers-color-scheme: dark) {
                           .customInputFrame-body,
                           .customInputFrame-input-title,
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             background-color: black!important;
                             color: #d5d5d5!important;
                           }
                           .customInputFrame-body input:focus,
                           .customInputFrame-body textarea:focus,
                           .customInputFrame-body .select:focus {
                             background-color: #1e1e1e!important;
                           }
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: #0c0c0c!important;
                           }
                           .customInputFrame-title,
                           .customInputFrame-buttons>button {
                             background: #245d8f!important;
                           }
                           .customInputFrame-body .select>.options {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: black;
                             color: #d5d5d5;
                           }
                           .customInputFrame-body .select>.options>p:hover {
                             background: #1e1e1e;
                           }
                         }
                        `),h=document.createElement("div");this.customInputFrame=h,h.innerHTML=ie(`
                         <div class="customInputFrame-body">
                             <a href="${nt}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${yt}" />${N("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${N("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${N("cancel")}</button>
                                 <button id="customSubmit" type="button">${N("customSubmit")}</button>
                             </div>
                         </div>
                        `),Ge||h.appendChild(u),h.querySelector("#cancel").addEventListener("click",I=>{h.parentNode&&h.parentNode.removeChild(h),i("")}),h.addEventListener("keydown",I=>{I.keyCode==13&&y.click()});let d=this.customInputFrame.querySelector("#customGroup");this.customGroup=d;let f=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=f,f.addEventListener("click",I=>{r()});let y=h.querySelector("#customSubmit");y.addEventListener("click",I=>{r(),f.value&&this.customInputCallback&&this.customInputCallback(f.value),i(f.value),h.parentNode&&h.parentNode.removeChild(h)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),this.customGroup.innerHTML=ie();let s=e,n=s.match(/%input{(.*?[^\\])}/),a=0;for(;n;){let p=document.createElement("div");p.className="customInputFrame-input-title";let u=n[1];if(/^".*","/.test(u)?u=u.substr(1,u.length-2).split('","'):u=u.replace(/\\,/g,"\u25CESJ").split(",").map(h=>h.replace(/◎SJ/g,",")),u.length===1){u=u[0].replace(/\\\|/g,"\u25CESJ").split("|").map(m=>m.replace(/◎SJ/g,"|")),p.innerText=u[0],this.customGroup.appendChild(p);let h=document.createElement("input");h.type="text",u.length>1&&(h.title=u[1]),this.customGroup.appendChild(h)}else if(u.length>=2){let h=u[0].replace(/\\}/g,"}");/^'.*'\/'/.test(h)?h=h.substr(1,h.length-2).split("'/'"):h=h.replace(/\\\//g,"\u25CESJ").split("/").map(W=>W.replace(/◎SJ/g,"/"));let m=u.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(W=>W.replace(/◎SJ/g,"/"));let d=h.length===m.length+1;p.innerText=h[0],this.customGroup.appendChild(p);let f=document.createElement("input");f.type="text";let y=document.createElement("div");y.className="select",y.appendChild(f);let I=document.createElement("p");I.innerText="Select option",y.appendChild(I);let T=document.createElement("div");T.className="options",y.appendChild(T);let O=document.createElement("p");O.setAttribute("value",""),O.innerHTML=ie("<b>Select option</b>"),T.appendChild(O),O.addEventListener("click",W=>{T.style.visibility="hidden",setTimeout(()=>{T.style.visibility=""},0),f.value="",I.innerText="Select option",r()});for(let W=0;W<m.length;W++){let x=m[W],P=document.createElement("p");if(P.setAttribute("value",x),d){let J=h[W+1];J=J.replace(/\\\|/g,"\u25CESJ").split("|").map($=>$.replace(/◎SJ/g,"|")),P.innerText=J[0],J.length>1&&(P.title=J[1])}else P.innerText=x;P.addEventListener("click",J=>{T.style.visibility="hidden",setTimeout(()=>{T.style.visibility=""},0),f.value=P.getAttribute("value"),I.innerText="",r()}),T.appendChild(P)}f.addEventListener("change",W=>{I.innerText=""}),y.addEventListener("mouseenter",W=>{y.focus(),T.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(y)}s=s.replace(n[0],"\u25CE"+a).replaceAll(`input{${p.innerText}}`,"\u25CE"+a),a++,n=s.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=s,this.finalSearch.value=s.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let o=this.customInputFrame.children[0];o.style.marginTop=-o.offsetHeight/2+"px"})}showModifyWindow(e,t){let i;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(i=e.oriWord,!i)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let d=Ne(`
                    .searchJumperModify-body {
                        width: 300px;
                        min-height: 200px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 50%;
                        margin-top: -160px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                    }
                    .searchJumperModify-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperModify-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperModify-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperModify-body>input[type=text],
                    .searchJumperModify-body>input[type=number],
                    .searchJumperModify-body>textarea {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                    }
                    .searchJumperModify-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperModify-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                    }
                    .searchJumperModify-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    #rangePickerBtn {
                        width: 28px;
                        float: right;
                        margin-top: -33px;
                        margin-right: 6px;
                        position: sticky;
                        display: block;
                        cursor: pointer;
                        background: rgb(255 255 255 / 80%);
                    }
                    .searchJumperModify-checkGroup {
                        margin: 5px;
                    }
                    #searchJumperModify-re + label ~ * {
                        display: none;
                    }
                    #searchJumperModify-re:checked + label ~ * {
                        display: inline;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperModify-body,
                      .searchJumperModify-input-title,
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea,
                      .searchJumperModify-body>select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperModify-body>input:focus,
                      .searchJumperModify-body>textarea:focus,
                      .searchJumperModify-body>select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea {
                        border: 1px solid rgb(255 255 255 / 36%)!important;
                      }
                      .searchJumperModify-title,
                      .searchJumperModify-buttons>button {
                        background: #245d8f!important;
                      }
                      #rangePickerBtn {
                        background: rgb(0 0 0 / 80%);
                        fill: white;
                      }
                    }
                    `),f=document.createElement("div");this.modifyFrame=f,f.id="searchJumperModifyWord",f.innerHTML=ie(`
                     <div class="searchJumperModify-body">
                         <a href="${nt}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${yt}" />${N("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${N("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${N("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${N("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${N("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${N("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${N("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${N("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${N("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${N("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${N("cancel")}</button>
                             <button id="modify" type="button">${N("modify")}</button>
                         </div>
                     </div>
                    `),Ge||f.appendChild(d),f.querySelector("#cancel").addEventListener("click",O=>{f.parentNode&&f.parentNode.removeChild(f)}),f.querySelector("#rangePickerBtn").addEventListener("click",O=>{je.getSelector(W=>{a.value=W,f.style.display=""}),f.style.display="none"});let T=f.querySelector("#modify");this.modifyBtn=T,T.addEventListener("click",O=>{let W=r.value;if(this.splitSep&&(W=W.replaceAll(this.splitSep,"")),!W)return;let x=W!==this.modifyWord.showWords||u.checked!==this.modifyWord.isRe||h.checked!==this.modifyWord.link;p.checked&&W.indexOf("@")!==0&&(W=`/${W}/${u.checked?"i":""}${h.checked?"l":""}`);let P=o.value;P&&(this.splitSep&&(P=P.replaceAll(this.splitSep,"")),P=P>=0?P:0,W+=`$p{${P}}`);let J=s.value;J&&(this.splitSep&&(J=J.replaceAll(this.splitSep,"")),W+=`$s{${J}}`);let $=JSON.stringify(n.value).replace(/^"|"$/g,"");$&&(this.splitSep&&($=$.replaceAll(this.splitSep,"")),W+=`$t{${$}}`);let F=a.value;F&&(this.splitSep&&(F=F.replaceAll(this.splitSep,"")),F!==this.modifyWord.inRange&&(x=!0),W+=`$in{${F}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=W,this.submitInPageWords()):this.replaceWord(this.modifyWord,W,this.modifySpan,x),f.parentNode&&f.parentNode.removeChild(f)}),f.addEventListener("keydown",O=>{O.keyCode==13&&O.target&&O.target.nodeName=="INPUT"&&T.click()})}let r=this.modifyFrame.querySelector("[name='wordContent']"),s=this.modifyFrame.querySelector("[name='wordStyle']"),n=this.modifyFrame.querySelector("[name='wordTitle']"),a=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),u=this.modifyFrame.querySelector("#searchJumperModify-case"),h=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)r.value="",s.value="",a.value="",o.value="",n.value="",p.checked=!1,u.checked=!1,h.checked=!1,this.modifyBtn.innerText=N("add");else{this.modifyBtn.innerText=N("modify");let m="",d=/\$s{(.*?)}($|\$)/,f=i.match(d);f&&(m=f[1]),r.value=e.showWords||"",s.value=m||"",a.value=e.inRange||"",p.checked=!!e.isRe,u.checked=!!e.reCase,h.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(n.value="@popup",e.showTips&&(n.value=`@popup(${e.showTips})`)):n.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(y){he(y)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,i,r){if(r)i.parentNode&&i.parentNode.removeChild(i),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let s="",n="",a=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(s=p[1],s=JSON.parse('"'+s+'"')),e.title=s,i.title=s;let u=/\$s{(.*?)}($|\$)/,h=t.match(u);if(h){let y=h[1],I="";h=h[1].match(/(.*?);(.*)/),h&&(y=h[1],I=h[2]),n=this.getHighlightStyle(this.curWordIndex,y,I),e.style=n,i.style=n}let m=!1,d=/\$p{(.*?)}($|\$)/,f=t.match(d);f?(a=parseInt(f[1])||0,m=a!=e.hideParent):m=typeof e.hideParent<"u",m&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),y=>{y.dataset.content===e.showWords&&(y.classList.remove("searchJumper-hide"),y.style.display="",y.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(y=>{if(y&&(y.title=s,n&&(y.style=n),m&&a!=-1)){let I=a,T=y.parentElement;for(;I-- >0&&T;)T=T.parentElement;T&&(T.dataset.content=e.showWords,T.classList.add("searchJumper-hide"),T.innerHTML=ie(""))}}),a==-1?delete e.hideParent:e.hideParent=a,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),i,r=0;t=t?t[0]:"";let s=this.lockWords.replace(t,"").split(this.splitSep);if(i=s.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){i!=-1&&(s.splice(i,1),r=1);for(let a=0;a<s.length;a++){let o=s[a].split(/[ ]/);if(i=o.indexOf(e.oriWord),i!=-1)if(r++,r==1)o.splice(i,1),s[a]=o.join(" ");else break}this.lockWords=t+s.join(this.splitSep)}else{if(i<0)return;s.splice(i,1),r=s.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+s.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],i=this.curHighlightWords.indexOf(e),i<0||(this.curHighlightWords.splice(i,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",r>1))return;this.marks[e.showWords].forEach(a=>{if(a.parentNode)if(a.dataset.block)a.parentNode&&a.parentNode.removeChild(a);else if(!/^MARK$/i.test(a.nodeName))a.classList.remove("searchJumper"),a.style.cssText=a.dataset.css||"",delete a.dataset.css;else{let o=document.createTextNode(a.firstChild.data);a.parentNode.replaceChild(o,a),o.parentNode.normalize()}}),delete this.marks[e.showWords];let n=[].slice.call(this.navMarks.children);[].forEach.call(n,a=>{a.dataset.content==e.showWords&&a.parentNode.removeChild(a)})}emptyInPageWords(){this.searchInPageLockWords.innerHTML=ie(),this.highlight("")}focusHighlightByText(e,t,i){let r=this.marks[e];if(!r||r.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=r.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=r.length-1;let s=this.focusIndex;if(s>=r.length&&(s=0),t)for(;(!r[s].offsetParent||r[s].dataset.type)&&(s!=r.length-1?s=s+1:s=0,s!=this.focusIndex););else for(;(!r[s].offsetParent||r[s].dataset.type)&&(s!=0?s=s-1:s=r.length-1,s!=this.focusIndex););this.focusIndex=s,this.focusHighlight(r[this.focusIndex]),this.setHighlightSpan(i,this.focusIndex,r)}getRect(e){let t=e.getBoundingClientRect(),i={left:t.left,top:t.top,width:t.width,height:t.height},r=e.ownerDocument&&e.ownerDocument.defaultView,s=r&&r.frameElement;for(;s;){const n=s.getBoundingClientRect();i.left+=n.left,i.top+=n.top,r=r.parent,s=r.frameElement}return i}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+Z(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let i=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,i.wPosBar.style.animationName="fadeit",i.hPosBar.style.animationName="fadeit",i.fixTimes=0;let r=window.innerHeight||document.documentElement.clientHeight;function s(){if(i.focusMark!=e)return;let n=i.getRect(e);if(i.wPosBar.style.top=n.top+document.documentElement.scrollTop+Z(document).scrollTop+"px",i.hPosBar.style.left=n.left+"px",!(i.fixTimes>0&&n.top>r/3&&n.top<r/3*2)){if(++i.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(i.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),i.wPosBar.style.animationName="",i.hPosBar.style.animationName="";return}setTimeout(()=>{s()},200)}}s()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,i){if(!e)return;let r=e.querySelector("em");r||(r=document.createElement("em"),e.insertBefore(r,e.firstChild)),t++;let s=0;i&&i.length&&(s=0,i.forEach(n=>{n.dataset.type||s++})),r.innerHTML=ie("["+t+"/"+s+"]")}getHighlightStyle(e,t,i){if(!t&&!i){let n=c.prefConfig.inPageWordsStyles[e];if(n)return n}i=i||"";function r(){let n,a,o;return n=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),n=n.toString(16),n.length===1&&(n="0"+n),a=a.toString(16),a.length===1&&(a="0"+a),o=o.toString(16),o.length===1&&(o="0"+o),"#"+n+a+o}function s(n){if(n.indexOf("#")!==0)return"";if(n==="#ffff00")return"black";n=n.substr(1);let a,o,p;a=parseInt(n.substr(0,2),16),o=parseInt(n.substr(2,2),16),p=parseInt(n.substr(4,2),16);let u=a*.299+o*.587+p*.114;a=255-a,o=255-o,p=255-p;let h=a*.299+o*.587+p*.114;return Math.abs(h-u)<=128?u>158?"#000000":"#FFFFFF":(a=a.toString(16),a.length===1&&(a="0"+a),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+a+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=r();break}if(t){let n=s(t);n&&(n="color:"+n+"!important;"),t=`background:${t}!important;${n}`}return`${t}${i}`}createNavMark(e,t,i,r,s){let n=this,a=document.createElement("span"),o=vr(e,n.targetIframe);a.title=t.title||t.showWords,a.dataset.top=o,a.dataset.content=t.showWords,a.style.top=o/s*100+"%",a.style.background=e.style.background||"yellow",a.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),n.focusIndex=i,n.focusHighlight(e),n.setHighlightSpan(n.getHighlightSpanByText(t.showWords),i,r),n.navPointer.style.display="",n.navPointer.style.top=a.offsetTop+33+"px",!1),!0),n.navMarks.appendChild(a)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:[]}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(i=>{if(i.classList&&i.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(i.nodeName)){const r=t.text.length;t.text+=`
`,t.data.push({index:r,node:i,text:`
`})}else if(i.offsetParent||i.offsetHeight||i.firstElementChild&&i.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(i.nodeName)){let r=t.text.length;t.text+=`
`,t.data.push({index:r,node:{},text:`
`}),t=this.anylizeDomWithTextPos(i,t),r=t.text.length,t.text+=`
`,t.data.push({index:r,node:{},text:`
`})}else t=this.anylizeDomWithTextPos(i,t);else if(i.nodeType===3){let r;if(i.parentNode.nodeType==1&&i.parentNode.childNodes.length==1?r=i.parentNode.innerText||i.data:r=i.data,!r||!r.trim())return;const s=t.text.length;t.text+=r,t.data.push({index:t.text.length-1,node:i,text:r})}}),t}highlightPopup(e,t){let i=this,r,s=n=>{r&&i.clingPos(e,i.tips)};e.addEventListener("mouseenter",n=>{if(e.addEventListener("mousemove",s),B!=e||!i.funcKeyCall){if(r=null,B=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=i.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;r=o[p]}else r=i.getTargetSitesByName([t.showTips])[0];i.setFuncKeyCall(!0),r?(i.bar.style.setProperty("display","none","important"),r.dispatchEvent(new CustomEvent("showTips"))):i.showInPage(!0,n)}}),e.addEventListener("mouseleave",n=>{e.removeEventListener("mousemove",s)})}createHighlightMark(e,t,i){let r=this,s=document.createElement("mark");s.className="searchJumper",e.title&&(s.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(s,e),s.style.cssText=e.style,s.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),s.dataset.content=e.showWords;let n,a=()=>{clearTimeout(n),n=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);Te.history.replaceState("","",o)},800)};return s.addEventListener("mousedown",o=>{if(a(),!o.altKey)return;let p,u=t;for(;(!p||p.dataset.type)&&(o.button===0?u!=i.length-1?(u++,r.focusIndex=u):r.focusIndex=0:o.button===2&&(u!=0?(u--,r.focusIndex=u):r.focusIndex=i.length-1),p=i[r.focusIndex],u!=t););r.focusHighlight(p),r.setHighlightSpan(r.getHighlightSpanByText(e.showWords),r.focusIndex,i),r.focusText=e.showWords}),s.addEventListener("mouseup",o=>{clearTimeout(n)}),s}createAddonSpan(e,t){let i="addon_"+this.addonsList.children.length,r=this,s=document.createElement("div"),n=document.createElement("input");n.type="checkbox",n.id=i,n.checked=!t.disable,n.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!n.checked,t.disable=!n.checked,n.checked&&r.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let u=p.name||"addon"+i++;r.addonCheckboxDict[u].checked=!1,c.prefConfig.disableAddon[u]=!0}}),K.setItem("searchData",c),r.lockWords&&r.refreshPageWords(r.lockWords)}),s.appendChild(n),s.title=t.title||"";let a=document.createElement("label");a.setAttribute("for",i),a.innerText=e,s.appendChild(a),this.addonCheckboxDict[e]=n,this.addonsList.appendChild(s)}findAccentedWord(e,t,i){const r=t.length;let s=0,n=-1;for(let a=0;a<e.length;a++){const o=i[a];if(o!=="")if(o===t[s]){if(s===0&&(n=a),s++,s===r)return{pos:n,len:a-n+1}}else s=0,n=-1,o===t[0]&&(n=a,s=1)}return n=e.indexOf(t),{len:t.length,pos:n}}findPosInStr(e,t,i,r,s){if(!e)return{len:0,pos:-1};let n=0,a=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let u=this.findInpageAddons[p];if(!u||!u.run||u.disable)continue;o=!0;let h=u.run(e,t);if(h&&h.matched){n=h.len,a=h.pos;break}}return a==-1&&!o?this.findAccentedWord(i,r,s):{len:n,pos:a}}highlight(e,t,i,r){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,Z(document),i);return}if([].forEach.call(t.getElementsByTagName("iframe"),d=>{if(!d.offsetParent||d.offsetHeight<100||d.offsetWidth<100)return;let f;try{f=d.contentDocument||d.contentWindow.document}catch{return}f&&Z(f)&&this.highlight(e,Z(f),i,d)}),this.targetIframe=r||!1,t.id=="searchJumperModifyWord")return;t=t||Z(document);let s=this.wordModeBtn.classList.contains("checked"),n=[],a=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async d=>{if(!d)return;let f=new Set;for(let y of d)if(y.parentNode)if(y.dataset.block)y.parentNode&&y.parentNode.removeChild(y);else if(!/^MARK$/i.test(y.nodeName))y.classList.remove("searchJumper"),y.style.cssText=y.dataset.css||"",delete y.dataset.css;else{let I=document.createTextNode(y.firstChild.data);y.parentNode.replaceChild(I,y);const T=I.parentNode;if(T&&T.nodeName==="SPAN"&&T.style.cssText==="all: unset;"){const O=T.parentNode;if(O){const W=document.createDocumentFragment();W.append(...T.childNodes),O.replaceChild(W,T)}}f.add(I.parentNode)}f.forEach(y=>{y.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),d=>{d.classList.remove("searchJumper-hide"),d.style.display="",d.removeAttribute("data-content")}),this.navMarks.innerHTML=ie(),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Ne(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let u=Math.max(document.documentElement.scrollHeight,Z(document).scrollHeight);this.navMarks.style.display="none";let h=[];function m(d,f,y){let I,T=-1,O,W,x,P;O=0;let J=d.parentNode;if(d.nodeType==1&&d.className&&d.className.indexOf&&d.className.indexOf("searchJumper")!=-1)return 0;if(y&&(d.nodeType==1||d.nodeType==11)){let S=function(R,Y,_){let oe=[],v=Y,C="",j="",g="";for(const k of U){const z=k.index;if(R>z)continue;let D=R-(z-k.text.length)-1,q="full";if(D<0?k.text.length<v?q="middle":q="end":k.text.length-D<v&&(q="start"),q==="full"&&(_=""),ae&&(q=="full"?(C=D==0?`
`:k.text[D-1],j=D+v==k.text.length?`
`:k.text[D+v],j!==`
`&&(g=D+v+1==k.text.length?`
`:k.text[D+v+1])):q=="start"&&!C?C=D==0?`
`:k.text[D-1]:(q=="end"||q=="full")&&!j&&(j=D+v==k.text.length?`
`:k.text[D+v],j!==`
`&&(g=D+v+1==k.text.length?`
`:k.text[D+v+1])),C&&j&&(/[a-z]/i.test(C)||/[a-rt-z]/i.test(j)||j.toLowerCase()=="s"&&/[a-z]/i.test(g))))break;D<0&&(D=0);let ee=Math.min(v,k.text.length-D);if(v-=ee,!k.text.trim()){q==="start"&&(R+=k.text.length);continue}let re;for(let se=0;se<ne.length;se++)if(ne[se].node==k.node){re=ne[se];break}if(re?re.match.push({pos:D,len:ee,type:q,matched:_}):ne.push({node:k.node,text:k.text,match:[{pos:D,len:ee,type:q,matched:_}]}),v<=0)break}},H=function(){if(T=-1,f.isRe){let R=b.match(new RegExp(f.content,f.reCase));R&&(I=R[0].length,T=R.index)}else{let R=o.findPosInStr(b,f.content,w,L,M);I=R.len,T=R.pos}if(T>-1){let R=b.slice(T,T+I);b=b.slice(T+I),w=w.slice(T+I),M=M.slice(T+I),T+=Q,Q=T+I,S(T,I,R),H()}},A=o.anylizeDomWithTextPos(d),b=A.text,w=b.toUpperCase(),M=[];for(let R=0;R<w.length;R++){const Y=w[R].normalize("NFD").replace(/[\u0300-\u036f]/g,"");M.push(Y)}let L=f.content.toUpperCase(),U=A.data,Q=0,ne=[],ae=(f.init||s)&&/^[a-z]+$/i.test(f.content);H(),ne.length&&ne.forEach(R=>{if(typeof f.hideParent<"u"){let Y=f.hideParent,_=R.node.parentElement;for(;Y-- >0&&_;)_=_.parentElement;_&&_.classList&&!_.classList.contains("searchJumper-hide")&&(_.innerHTML=ie(""),_.dataset.content=f.showWords,_.classList.add("searchJumper-hide"))}else{let Y=o.marks[f.showWords],_=Y.length,oe;const v=document.createElement("span");v.style.all="unset";let C=document.createTextNode(R.text);v.appendChild(C);let j=R.match.reverse(),g=[],k=j.length-1;j.forEach(z=>{switch(oe=o.createHighlightMark(f,_+k,Y),z.type){case"start":oe.style.borderTopRightRadius=0,oe.style.borderBottomRightRadius=0,k--;break;case"middle":oe.style.borderRadius=0;break;case"end":oe.style.borderTopLeftRadius=0,oe.style.borderBottomLeftRadius=0;break;default:k--;break}x=C.splitText(z.pos),z.type!="start"&&z.type!="middle"&&x.data.length&&x.splitText(z.len),P=x.cloneNode(!0),oe.appendChild(P),z.type!="full"&&z.type!="start"&&(oe.dataset.type=z.type),z.matched&&(oe.dataset.matched=z.matched),v.replaceChild(oe,x),g.unshift(oe)}),R.node.parentNode.replaceChild(v,R.node),o.marks[f.showWords].push(...g),g.forEach(z=>{z.dataset.type||h.push([z,f,_,Y,u])})}})}let $=!0;if(f.link){if(d.nodeType==1&&d.href&&d.href.match&&($=!1,d.href.match(new RegExp(f.content,f.reCase))))if(typeof f.hideParent<"u"){let b=f.hideParent,w=d;for(;b-- >0&&w;)w=w.parentElement;if(w)return w.innerHTML=ie(""),w.dataset.content=f.showWords,w.classList.add("searchJumper-hide"),0}else{let b=o.marks[f.showWords],w=b.length;d.classList.add("searchJumper"),f.title&&(d.title=JSON.parse('"'+f.title+'"')),f.popup&&o.highlightPopup(d,f),d.dataset.css||(d.dataset.css=d.style.cssText),f.style&&(d.style.cssText+=f.style),d.addEventListener("click",M=>{if(M.altKey)return M.stopPropagation(),M.preventDefault(),!1}),d.dataset.content=f.showWords,d.addEventListener("mousedown",M=>{if(!M.altKey)return;let L;M.button===0?w!=b.length-1?o.focusIndex=w+1:o.focusIndex=0:M.button===2&&(w!=0?o.focusIndex=w-1:o.focusIndex=b.length-1),L=b[o.focusIndex],o.focusHighlight(L),o.setHighlightSpan(o.getHighlightSpanByText(f.showWords),o.focusIndex,b),o.focusText=f.showWords}),o.marks[f.showWords].push(d),h.push([d,f,w,b,u])}}else{let A="";if(d.nodeType==1&&d.value&&(d.offsetParent||d.offsetHeight)&&!f.init&&/^(button|select|input|textarea)$/i.test(d.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(d.type)&&(A=d.value),A){let H=function(R,Y){if(R){if(!M){M=document.createElement("pre"),M.className="searchJumper";let v=document.createTextNode(A);M.appendChild(v);let C,j=/^(number|string)$/,g=[],k=d.style;for(C in k)if(!/^(content|outline|outlineWidth)$/.test(C)){let z=L[C];z!==""&&j.test(typeof z)&&(C=C.replace(/([A-Z])/g,"-$1").toLowerCase(),g.push(C),g.push(":"),g.push(z),g.push(";"))}g=g.join(""),M.style.cssText=g,M.style.position="fixed",M.style.left="0px",M.style.top="0px",M.style.margin="0",d.nodeName&&d.nodeName.toLowerCase&&d.nodeName.toLowerCase()!=="textarea"&&(M.style.display="inline-grid",M.style.lineHeight=M.style.height,M.style.boxSizing=="border-box"&&(M.style.paddingTop=0)),o.fakeTextareas.set(d,M)}document.body.appendChild(M);let _=document.createRange();_.setStart(M.firstChild,Math.min(M.firstChild.length,Y)),_.setEnd(M.firstChild,Math.min(M.firstChild.length,Y+1));let oe=_.getBoundingClientRect();if(document.body.removeChild(M),typeof f.hideParent<"u"){let v=f.hideParent,C=d.parentElement;for(;v-- >0&&C;)C=C.parentElement;if(C)return C.innerHTML=ie(""),C.dataset.content=f.showWords,C.classList.add("searchJumper-hide"),0}else{let v=o.marks[f.showWords],C=v.length,j=document.createElement("mark");j.className="searchJumper",j.dataset.block=!0,f.title&&(j.title=JSON.parse('"'+f.title+'"')),j.style.cssText=f.style,j.dataset.content=f.showWords,j.innerText=R,j.style.padding="0",j.style.position="absolute",j.style.fontSize=M.style.fontSize,j.style.fontFamily=M.style.fontFamily,j.style.lineHeight="1",j.style.pointerEvents="none",d.parentNode.appendChild(j);let g=oe.left+U,k=oe.top+Q;if(j.style.left=g+"px",j.style.top=k+"px",o.marks[f.showWords].push(j),h.push([j,f,C,v,u]),d.nodeName&&d.nodeName.toLowerCase&&d.nodeName.toLowerCase()=="textarea"){let z=D=>{j.parentNode?(j.style.left=g-d.scrollLeft+"px",j.style.top=k-d.scrollTop+"px"):(j.parentNode.removeChild(j),d.removeEventListener("scroll",z))};d.addEventListener("scroll",z)}}}};$=!1;let b=!1,w=0,M=o.fakeTextareas.get(d);if(p&&M)return 0;let L=getComputedStyle(d),U=d.offsetLeft,Q=d.offsetTop,ne=A.toUpperCase(),ae=[];for(let R=0;R<ne.length;R++){const Y=ne[R].normalize("NFD").replace(/[\u0300-\u036f]/g,"");ae.push(Y)}let S=f.content.toUpperCase();for(;;){if(f.isRe)b=A.match(new RegExp(f.content,f.reCase)),b&&(T=b.index,b=b[0]);else{let R=o.findPosInStr(A,f.content,ne,S,ae);I=R.len,T=R.pos,(f.init||s)&&T>=0&&/^[a-z]+$/i.test(f.content)&&(T!==0&&/[a-z]/i.test(A[T-1])&&(T=-1),T+f.content.length!==A.length&&/[a-z]/i.test(A[T+I])&&(T=-1)),b=T>=0?A.slice(T,T+I):!1}if(b)H(b,w+T),w+=T+b.length,A=A.slice(T+b.length),ne=ne.slice(T+b.length),ae=ae.slice(T+b.length);else break}}}if($&&(!i||d===t)&&(d.nodeType==1||d.nodeType==11)&&d.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(d.nodeName)&&(!f.init||d.ariaHidden!="true"&&d.role!="search"&&(!d.hasAttribute||d.hasAttribute("jsname")==!1)))if(!a&&/^(PRE|CODE)$/i.test(d.nodeName))n.push(d);else{for(var F=0;F<d.childNodes.length;++F)F=F+m(d.childNodes[F],f);try{d.shadowRoot&&(F=F+m(d.shadowRoot,f,!0))}catch(A){he(A)}}return O}e.forEach(d=>{if(o.marks[d.showWords]||(o.marks[d.showWords]=[]),d.inRange){let f=t;t.parentNode&&(f=t.parentNode),[].forEach.call(f.querySelectorAll(d.inRange),y=>{(y==t||t.contains(y))&&m(y,d,!0)})}else m(t,d,!0)}),h.forEach(d=>{o.createNavMark(...d)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",h=[],a=!0,e.forEach(d=>{o.marks[d.showWords]||(o.marks[d.showWords]=[]),n.forEach(f=>{m(f,d,!0)})}),h.forEach(d=>{o.createNavMark(...d)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),Ze&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ie(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||Ae;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(Ze)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,Z(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,i=this.marks[t];if(!i)return;var r=i.indexOf(e);if(r===-1)return;i.splice(r,1),this.marks[t]=i;let s=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[r];s&&this.navMarks.removeChild(s)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||rt)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",this.historylist.innerHTML=ie(),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),this.filterGlob.innerHTML=ie();let e=this,t=this.tileInput.value;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];window.innerWidth<1e3?(e.timeInAll.style.fontSize="15px",e.dayInAll.style.fontSize="15px"):(e.timeInAll.style.fontSize="",e.dayInAll.style.fontSize="");let r=new Date,s=r.getFullYear(),n=r.getMonth(),a=r.getDate(),o=N(i[r.getDay()])+"<br/>"+s+"-"+(++n<10?"0"+n:n)+"-"+(a<10?"0"+a:a);if(Re.indexOf("zh")==0||Re.indexOf("ja")==0){let h=kr(s,n,a);if(h){let m=`${h.lunarYear}\u5E74${h.lunarMonth}\u6708${h.lunarDay}`;o=o+"<br/>"+m}}e.dayInAll.innerHTML=ie(o);let p=()=>{let h=new Date,m=h.getHours(),d=h.getMinutes(),f=h.getSeconds();e.timeInAll.innerText=(m<10?"0"+m:m)+":"+(d<10?"0"+d:d)+":"+(f<10?"0"+f:f)};this.showAllTimeTimer=setInterval(p,1e3),p(),Se.forEach(h=>{if(h.style.display!="none"){let m=h.querySelector(".sitelist");m&&e.sitelistBox.appendChild(m)}}),[].forEach.call(e.sitelistBox.querySelectorAll(".sitelist"),h=>{h.style.opacity="",h.style.height="",e.initList(h)}),this.historySiteBtns.slice(0,20).forEach(h=>{let m=h.querySelector("img");m&&m.dataset.src&&(m.src=m.dataset.src,delete m.dataset.src),e.historylist.appendChild(h)});let u="";B&&(B.nodeName.toUpperCase()=="A"||B.parentNode&&B.parentNode.nodeName.toUpperCase()=="A")&&(u=B.textContent.trim()),t=t||Ke()||u||Be,this.searchJumperInputKeyWords.value=t,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=h=>{(h.isTrusted==!1||h.target.className==="sitelistBox"||h.target.className==="search-jumper-showallBg"||h.target.id==="search-jumper-alllist")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=h=>{h.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),ht?(this.searchInput.value=ht,this.searchInput.dispatchEvent(new Event("input")),this.searchInput.focus(),this.searchInput.select()):this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!ce||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=De();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=Ke());let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmouseup)t.onmouseup();else{let i=new PointerEvent("mouseup");t.dispatchEvent(i)}ht&&(this.searchInput.value=ht,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Be&&this.lockWords!==Be&&(this.searchJumperInPageInput.value=Be,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,je.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,je.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=r=>{!r.violatedDirective||r.violatedDirective.indexOf("style-src")==-1||(Ge=!0)};window.addEventListener("securitypolicyviolation",t);let i=Ne("html {color: #000;}");this.addToShadow(i),await We(0),window.removeEventListener("securitypolicyviolation",t),i.parentNode&&i.parentNode.removeChild(i)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(Ie?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(Ge){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let i=Ne(`
                         .search-jumper-shadow {
                          display: block !important;
                          width: 0px !important;
                          height: 0px !important;
                          margin: 0px !important;
                          padding: 0px !important;
                          border-width: initial !important;
                          border-style: none !important;
                          border-color: initial !important;
                          border-image: initial !important;
                          outline: none !important;
                          position: unset !important;
                         }
                        `);this.shadowContainer.appendChild(i);let r=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let s=document.createElement("style");s.innerHTML=ie("#search-jumper-root{display: block!important;}"),t.appendChild(s),r.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!Qe||!Qe.parentNode)&&(Qe=Ne(Mt),Ge||this.addToShadow(Qe)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){Ie?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!rt&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483646"&&(this.removeBar(),Ge?he(N("cspDisabled")):(Ge=!0,Qe=Ne(Mt),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,i){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[r,s]of this.allSiteBtns)if(r.dataset.name==e){if(r.dataset.showTips){r.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(r,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let n=/^(https?|ftp):/.test(r.href);n&&r.setAttribute("target",i?"_self":"_blank"),r.click(),n&&r.setAttribute("target",r.dataset.target==1?"_blank":"_self");return}for(let r=Se.length-1;r>=0;r--){let s=Se[r];if(s.dataset.type==e){s.firstChild.onmouseup&&s.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let i=Se[t];if(i.dataset.type==e){i.firstChild.onmouseup&&i.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){B||(B=Z(document));let e;switch(B.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":De()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:De()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):B.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mouseup");e.classList.contains("search-jumper-open")&&(e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)),e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let i=this.autoGetFirstType();if(!i)return;let r=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<r.length){let s=r[e];this.searchBySiteName(s.dataset.name,t)}}setNav(e,t){!t&&Ze!=e&&(K.setItem("navEnable",e||""),Ze=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=N("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,i=[];this.checkSelHandler=S=>{S.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let r=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let S=this.lockWords.trim();if(!S){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(S+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=S,this.searchInPageLockWords.innerHTML=ie(),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",S=>{S.keyCode===27&&(rt?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",this.searchInPageLockWords.innerHTML=ie(),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",S=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",S=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",S=>{switch(S.stopPropagation(),S.keyCode){case 8:if(!this.searchJumperInPageInput.value){let H=this.searchInPageLockWords.lastChild;H&&(H.dispatchEvent(new CustomEvent("editword")),S.preventDefault())}break;case 9:S.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let H=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(H&&H.length>0){let R=H.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=R;let Y=new PointerEvent("mousedown",{button:S.shiftKey?2:0});R.dispatchEvent(Y)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let R=new PointerEvent("mousedown",{button:S.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(R)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",S=>{r()}),this.addWord.addEventListener("click",S=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",S=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",S=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),Ae?(this.recoverBtn.addEventListener("click",S=>{this.lockWords="",this.searchJumperInPageInput.value=Ae,this.searchInPageLockWords.innerHTML=ie(),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",S=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?(Ae="",this.pinBtn.classList.remove("checked")):this.lockWords&&(Ae=this.lockWords,this.pinBtn.classList.add("checked")),K.setItem("globalInPageWords",Ae)}),this.wordModeBtn.addEventListener("click",S=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",S=>{this.lockWords&&(Ie||Ht(()=>{let H=c.prefConfig.inPageRule||{};H[this.inPageRuleKey||de.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=H,c.lastModified=new Date().getTime(),Pt=c.lastModified,K.setItem("searchData",c),ke(N("save completed"))}))}),this.emptyBtn.addEventListener("click",S=>{this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ie(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",S=>{this.lockWords&&(Fe(this.lockWords.replace(/◎/g,`
`)),ke("Copied successfully!"))}),this.setNav(Ze),this.locBtn.addEventListener("click",S=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",S=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",this.searchInPageLockWords.innerHTML=ie(),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),K.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",S=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let H=this.lockWords.trim();if(!H)return;this.searchJumperInPageInput.value&&(H+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=H,this.searchInPageLockWords.innerHTML=ie(),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",S=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",S=>{let H=S.offsetY/this.navMarks.clientHeight*100,R=[].slice.call(this.navMarks.querySelectorAll("span"));R.sort((_,oe)=>(_=parseFloat(_.style.top),oe=parseFloat(oe.style.top),_>oe?1:_<oe?-1:0));let Y;for(let _=0;_<R.length;_++){Y=R[_];let oe=parseFloat(Y.style.top);if(oe>H){if(_>0){let v=R[_-1],C=parseFloat(v.style.top);oe-H>H-C&&(Y=v)}break}}Y&&Y.click()}),this.bar.addEventListener("mousedown",S=>{S&&S.stopPropagation&&S.stopPropagation(),S&&S.preventDefault&&S.preventDefault()}),this.con.addEventListener("dblclick",S=>{S.stopPropagation(),S.preventDefault()});let s=S=>{S.stopPropagation(),S.preventDefault();let H=e.searchJumperExpand.parentNode;if(!H||!H.classList.contains("not-expand"))return;H.classList.remove("not-expand"),H.classList.remove("search-jumper-move");let R=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");H.removeChild(e.searchJumperExpand);let Y=Math.max(H.scrollWidth,H.scrollHeight)+5+"px";R?(H.style.height=Y,H.style.width=""):(H.style.width=Y,H.style.height=""),setTimeout(()=>{e.checkScroll(),H.classList.add("search-jumper-move")},251)},n;this.searchJumperExpand.addEventListener("click",s,!0),this.searchJumperExpand.addEventListener("contextmenu",s,!0),this.searchJumperExpand.addEventListener("mouseenter",S=>{c.prefConfig.overOpen&&(clearTimeout(n),n=setTimeout(()=>{s(S)},500));let H=new CustomEvent("sitelist",{detail:{bind:S.currentTarget}});S.currentTarget.parentNode.dispatchEvent(H)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",S=>{clearTimeout(n)},!1),this.pickerBtn.addEventListener("click",S=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",S=>{je.expand()}),this.minEleBtn.addEventListener("click",S=>{je.collapse()}),this.copyEleBtn.addEventListener("click",S=>{je.copy()}),this.openLinkBtn.addEventListener("click",S=>{je.openLinks()});let a=document.createElement("div");a.className="listArrow",this.listArrow=a,this.con.appendChild(a);for(let S of c.sitesConfig){if(S.bookmark||S.sites.length>100||/^BM/.test(S.type)&&S.icon==="bookmark"){i.push(S);continue}await this.createType(S),t+=S.sites.length,t>100&&(await We(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),ce&&bt.test(ce.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!It&&!ot&&(this.bar.style.display="",this.initPos(),this.appendBar()),Et&&(B=Et.target,this.batchOpen(Et.sites,{button:2})),Et=!1,Ye&&(this.submitAction(Ye),setTimeout(()=>{K.setListItem("inPagePostParams",location.hostname,"")},1e4));let o=S=>{clearTimeout(p);let H,R="";ce&&!e.searchInput.value?(H=e.con.querySelector(".search-jumper-btn.current"),R="_self"):(H=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),R="_blank"),H&&e.openSiteBtn(H,R,!S.ctrlKey)},p,u=!1;this.inInput=!1;let h=()=>{ht!==e.searchInput.value&&(ht=e.searchInput.value,K.setItem("cacheFilter",ht))};this.searchInput.addEventListener("input",S=>{clearTimeout(p),p=setTimeout(()=>{u||e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("compositionstart",function(){u=!0}),this.searchInput.addEventListener("compositionend",function(){u=!1}),this.searchInput.addEventListener("click",S=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",S=>{h()}),this.searchInput.addEventListener("keydown",S=>{switch(S.stopPropagation(),S.keyCode){case 9:S.shiftKey&&(S.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let H,R="";ce&&!e.searchInput.value?(H=e.con.querySelector(".search-jumper-btn.current"),R="_self"):(H=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),R="_blank"),H&&e.openSiteBtn(H,R,!S.ctrlKey)}else this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.value,h();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",S=>{clearTimeout(p),p=setTimeout(()=>{u||e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("compositionstart",function(){u=!0}),this.searchJumperInputKeyWords.addEventListener("compositionend",function(){u=!1}),this.searchJumperInputKeyWords.addEventListener("keydown",S=>{switch(S.keyCode!==27&&S.stopPropagation(),S.keyCode){case 9:this.inInput?S.shiftKey||(S.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(S.preventDefault(),this.searchInput.focus());break;case 13:o(S);break;default:break}},!0),this.con.addEventListener("keypress",S=>{S.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",S=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",e.searchInPageLockWords.innerHTML=ie(),e.setNav(!1,!0))});let m=window.innerWidth/2,d,f,y,I,T=S=>S.type.indexOf("mouse")===0?S.clientX:S.changedTouches[0].clientX,O=S=>S.type.indexOf("mouse")===0?S.clientY:S.changedTouches[0].clientY,W=S=>{let H=.25*window.innerWidth,R=m+T(S)-y;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=R+"px",e.searchInputDiv.style.bottom=d-(O(S)-I)+"px",R>window.innerWidth/2){let Y=window.innerWidth-R+H-50;e.searchInputDiv.style.maxWidth=Y+"px"}else{let Y=R+H;R<H&&(R+=H-R,e.searchInputDiv.style.left=R+"px"),e.searchInputDiv.style.maxWidth=Y+"px"}S.stopPropagation(),S.preventDefault()},x=S=>{document.removeEventListener("mouseup",x),document.removeEventListener("mousemove",W),document.removeEventListener("touchend",x),document.removeEventListener("touchmove",W),f.style.cursor="",m+=T(S)-y,d-=O(S)-I},P=()=>{d||(d=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},J=!1;this.searchInputDiv.addEventListener("touchstart",S=>{J=!0,(S.target.className==="inputGroup"||S.target.nodeName.toUpperCase()==="LABEL")&&(P(),f=S.target,f.style.cursor="grabbing",y=T(S),I=O(S),document.addEventListener("touchend",x),document.addEventListener("touchmove",W))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",S=>{if(J){J=!1;return}(S.target.className==="inputGroup"||S.target.nodeName.toUpperCase()==="LABEL")&&(P(),f=S.target,f.style.cursor="grabbing",y=S.clientX,I=S.clientY,document.addEventListener("mouseup",x),document.addEventListener("mousemove",W),S.stopPropagation(),S.preventDefault())});let $,F,A=S=>{let H=S.clientX-F+$-10;this.searchInputDiv.style.width=H+"px"},b=S=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",b)};this.rightSizeChange.addEventListener("mousedown",S=>{F=S.clientX,$=this.searchInputDiv.clientWidth,document.addEventListener("mousemove",A),document.addEventListener("mouseup",b),S.stopPropagation(),S.preventDefault()});let w,M=S=>{if(!this.contains(S.target)){let H=/^(https?|ftp):/.test(w.href);H&&w.setAttribute("target","_blank"),H?me(w.href,{active:!1,insert:!0}):w.click(),H&&w.setAttribute("target",w.dataset.target==1?"_blank":"_self")}Z(document).removeEventListener("dragover",L),document.removeEventListener("drop",M),document.removeEventListener("dragover",L)},L=S=>{S.preventDefault()},U=S=>{Z(document).removeEventListener("dragover",L),document.removeEventListener("drop",M),document.removeEventListener("dragover",L)};this.bar.addEventListener("dragstart",S=>{let H=S.target,R=H.parentNode;H.nodeName.toUpperCase()!=="IMG"&&H.nodeName.toUpperCase()!=="A"||(H.classList&&H.classList.contains("search-jumper-btn")?(w=H,Z(document).addEventListener("dragover",L),document.addEventListener("drop",M),document.addEventListener("dragend",U)):R&&R.classList&&R.classList.contains("search-jumper-btn")&&(w=R,Z(document).addEventListener("dragover",L),document.addEventListener("drop",M),document.addEventListener("dragend",U)))},!0),t=0;let Q=ce!==!1;for(let S of i)await this.createType(S),t+=S.sites.length,t>200&&(await We(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=Te.searchJumperAddons.filter(Y=>Y.type=="findInPage").sort((Y,_)=>(Y.sort||0)-(_.sort||0));let S=this,H=0,R={};this.findInpageAddons.forEach(Y=>{let _=Y.name||"addon"+H++;R[Y.sort]||c.prefConfig.disableAddon[_]===!0?Y.disable=!0:(c.prefConfig.disableAddon[_],Y.disable=!1),R[Y.sort]=!0,S.createAddonSpan(_,Y)})}if(this.fontPool.length>0||ot){let S=document.createElement("link");S.rel="stylesheet",S.href=c.prefConfig.fontAwesomeCss||"https://lib.baomitu.com/font-awesome/6.1.2/css/all.css",document.documentElement.insertBefore(S,document.documentElement.children[0]),this.addToShadow(S.cloneNode()),Cr(()=>{let H=!1;this.fontPool.forEach(R=>{R.innerText="",R.style.fontSize="",R.style.color="",H=!0,Ot.unshift(R)}),H&&ot&&setTimeout(()=>{_i()},500),this.buildAllPageGroupTab()})}else this.buildAllPageGroupTab();if(rt)return;Ut&&Ut!=location.hostname&&window.top==window.self&&K.setItem("disableHighlight",""),await this.testCSP();let ne=ce&&bt.test(ce.url);if(!Q&&ne?this.inSearchEngine():!ce&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let S=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),H=S[1],R=parseInt(S[3]||1)-1;try{H=decodeURIComponent(H)}catch(Y){console.log(Y)}this.setInPageWords(H,()=>{let _=document.querySelectorAll("mark.searchJumper")[R];_&&_.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else this.checkDiscussions();let ae=this.initInPageWords&&this.initInPageWords.length;(Fi||this.bar.style.display==="none"&&(!Ze||!ae))&&this.removeBar()}checkDiscussions(){if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let e=c.sitesConfig.filter(t=>t&&!(/^BM/.test(t.type)&&t.icon==="bookmark"));Ki('textarea[name="discussion[body]"]',"```json\n"+JSON.stringify(e,null,2)+"\n```")}}buildAllPageGroupTab(){let e=this;this.groupTab.innerHTML=ie(),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let i=t.dataset.type,r=t.firstElementChild.cloneNode(!0);r.children.length>1&&(r.children[0].style.display="none",r.children[1].style.display="");let s=document.createElement("span");s.appendChild(r),s.dataset.type=i,s.addEventListener("click",n=>{let a=e.sitelistBox.querySelector(`[data-type="${i}"]`);a&&a.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(s)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),Pt=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),rt&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing")||this.hiding)return;e===0&&(this.hiding=!0,setTimeout(()=>{t.hiding=!1},500)),this.touched=!1;var i=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",t.tips.innerHTML=ie(""),t.funcKeyCall)if(t.setFuncKeyCall(!1),ce&&!ce.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let s=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(s&&!s.classList.contains("search-jumper-open"))if(s.onmouseup)s.onmouseup();else{let n=new PointerEvent("mouseup");s.dispatchEvent(n)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let r=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;r?this.hideTimeout=setTimeout(i,r):i(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,i,r,s)=>`\u25CE${i}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,i){this.initInPageWords.push(e),this.con.classList.add("in-find");let r=()=>{setTimeout(async()=>{if(Z(document).style.display==="none"&&(Z(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await We(1e3);K.setItem("lastHighlight",location.hostname);let s=this.initInPageWords.shift();for(;s;)this.searchJumperInPageInput.value=s,this.submitInPageWords(!!i),s=this.initInPageWords.shift()}t&&t(),await We(100),K.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let s=n=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",s),window.removeEventListener("load",s),r())};document.addEventListener("readystatechange",s),window.addEventListener("load",s)}else r()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let i=e[t],r=!1;if(i.indexOf("/")===0){let s=i.match(/^\/(.*)\/([igm]*)$/);s&&(r=new RegExp(s[1],s[2]).test(de))}else r=this.globMatch(i,de);if(r){this.disableAutoHighlight=!0;return}}}if(Hi===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let i=e[t];if(!i)continue;let r=!1;if(i.indexOf("/")===0){let s=i.match(/^\/(.*)\/([igm]*)$/);s&&(r=new RegExp(s[1],s[2]).test(de))}else r=this.globMatch(i,de);if(r){let s=c.prefConfig.inPageRule[i];if(!s)continue;this.inPageRuleKey=i,this.disableAutoHighlight=!0,this.setInPageWords(s);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&Ft&&!Ut){let t=!Rt&&ui&&location.href.indexOf(ui)!=-1;if(t&&K.setItem("clickLink",""),Rt&&Rt.indexOf(Ft)!=-1||t){Be&&this.wordModeBtn.classList.add("checked"),e=Be;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}}if(e=e||Ae,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&Rt.indexOf(Ft)!=-1&&Be){e=Be,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!ce||It||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(ce.url)||ce.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(Ue):Ae;e&&this.setInPageWords(e,null,!0)}getSuggest(e){let t=this.suggestDatalist;if(t.innerHTML=ie(),!e)return;let i=(r,s,n)=>{$e({method:"GET",url:r,responseType:n?"blob":"",headers:{referer:r,origin:r},onload:function(a){let o=a.response;if(!(a.status>=400||!o))if(n){let p=new FileReader;p.onload=()=>{s(p.result)},p.readAsText(o,n)}else s(o)},onerror:function(a){he(a)},ontimeout:function(a){he(a)}})};switch(c.prefConfig.suggestType){case"google":i("https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s",e),r=>{if(r=r.match(/window.google.ac.h\((.*)\)$/,"$1"),r){r=JSON.parse(r[1])[1];for(let s in r){let n=document.createElement("option");n.value=r[s][0],t.appendChild(n)}}});break;case"baidu":i("https://suggestion.baidu.com/su?wd=%s&cb=".replace("%s",e),r=>{if(r=r.match(/.*,s:(.*)}\);$/,"$1"),r){r=JSON.parse(r[1]);for(let s in r){let n=document.createElement("option");n.value=r[s],t.appendChild(n)}}},"GBK");break;case"bing":i("https://api.bing.com/qsonhs.aspx?type=json&q=%s".replace("%s",e),r=>{if(r){r=JSON.parse(r).AS.Results;for(let s in r){let n=r[s].Suggests;for(let a in n){let o=document.createElement("option");o.value=n[a].Txt,t.appendChild(o)}}}});break;default:break}}searchSiteBtns(e){let t=e.indexOf("**"),i="",r=!1;t>0&&(i=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?r=!0:(i=i.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let s=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let n=0;this.filterGlob.innerHTML=ie(),this.allSiteBtns.forEach(o=>{let p=o[0],u=o[1],h=p.parentNode,m=p.dataset.type,d=p.dataset.name,f=p.title;r||(m=m.toLowerCase(),d=d.toLowerCase(),f=f.toLowerCase());let y="";if(i){if(!this.globMatch(i,m))return;y=p.dataset.type+"**"}let I=!1;if(p.dataset.clone||(this.globMatch(e,d)?(I=!0,y+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,f)&&(I=!0,y+="^"+p.title+"$")),!I){if(s){if(!p.dataset.host){let T=/^https?:\/\/([^\/]*)\/[\s\S]*$/,O=u.url,W=T.test(O)?O.replace(T,"$1"):O;p.dataset.host=W&&W.split(`
`)[0].toLowerCase()}I=this.globMatch(e,p.dataset.host)}I?p.dataset.isPage&&(y+="^"+p.dataset.host+"$"):p.classList.add("input-hide")}if(I){p.classList.remove("input-hide"),h&&h.classList.remove("input-hide");let T;for(let O=0;O<this.allListBtns.length;O++)if(this.allListBtns[O].id=="list"+p.dataset.id){T=this.allListBtns[O];break}if(T&&T.classList.remove("input-hide"),n<50&&e&&this.searchInput.value!==y&&!this.filterGlob.querySelector(`option[value="${y}"]`)){n++;let W=document.createElement("option");W.value=y,this.filterGlob.appendChild(W)}}}),Se.forEach(o=>{let p;for(let u=0;u<this.allLists.length;u++)if(this.allLists[u].dataset.type==o.dataset.type){p=this.allLists[u];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let a=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(a){if(!a.classList.contains("search-jumper-open")){let o=a.querySelector("span.search-jumper-btn");if(o.onmouseup)o.onmouseup();else{let p=new PointerEvent("mouseup");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==a){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,i){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!i)if(i=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!i);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!i)||this.globMatch(e,t&&t.substring(1),!!i)}catch(r){he(r)}return!1}setCurrentSite(e,t){ce=e,t.classList.add("current"),Ue="",!/#p{|^(showTips|find)/.test(e.url)&&bt.test(e.url)&&(this.updateCacheKeywords(),K.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=Ke();e&&e!=Be&&(Be=e,K.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{if(this.bar.style.display=="none"){ce=null;let t;for(let i in c.sitesConfig){if(ce)break;if(t=c.sitesConfig[i],!t)continue;let r=t.sites;for(let s in r){if(ce)break;let n=r[s];if(!n||!n.url)continue;let a;if(n.match!=="0"){if(n.match)new RegExp(n.match).test(de)&&(a=n);else if(n.url.indexOf(location.hostname)!=-1){if(n.url.indexOf("site")!=-1){let o=n.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&de.indexOf(o[2])!=-1&&n.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(a=n)}else if(!ce&&n.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=n.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(de)&&(a=n))}}}if(a){let o=this.getTargetSitesByName([a.name])[0];this.currentType=o.parentNode,this.setCurrentSite(a,o)}}}if(ce&&bt.test(ce.url)&&(!/#p{/.test(ce.url)||ce.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let i=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(i&&!i.classList.contains("search-jumper-open")&&(this.bar.insertBefore(i.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(i.onmouseup)i.onmouseup();else{let r=new PointerEvent("mouseup");i.dispatchEvent(r)}}}let e=this.curHighlightWords;if(this.highlight(""),ce&&c.prefConfig.showInSearchEngine){let t=this.lastSearchEngineWords,i=this.searchEngineWords(Ke());if(i&&t!=i){let r=this.anylizeInPageWords(i,!0);this.highlight(r)}else e&&this.highlight(e)}else e&&this.highlight(e)},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(ce?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((r,s)=>{let n=Pe[r.dataset.type]||0;return(Pe[s.dataset.type]||0)-n});let t=!1,i=!e.bar.children[0].classList.contains("search-jumper-open");for(let r=Se.length-1;r>=0;r--){let s=Se[r],n=Pe[s.dataset.type]||0;if(r==Se.length-1)n>0&&(t=!0,Pe[s.dataset.type]=0);else{let a=Pe[Se[r+1].dataset.type]||0;n-a>10&&(t=!0,Pe[s.dataset.type]=a+10)}e.bar.insertBefore(s,e.bar.children[i?0:1])}t&&K.setItem("sortTypeNames",Pe)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;_e.forEach(async t=>{for(let i of c.sitesConfig){let r=!1,s=i.bookmark||i.sites.length>100||/^BM/.test(i.type)&&i.icon==="bookmark";for(let n=0;n<i.sites.length;n++){let a=i.sites[n];if(a.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":a.icon,a,!0,s,i,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!i.selectImg&&!i.selectLink&&!i.selectPage&&!i.selectVideo&&!i.selectAudio&&e.txtHistorySiteBtns.push(o),i.selectImg&&e.imgHistorySiteBtns.push(o),(i.selectLink||i.selectPage)&&e.linkHistorySiteBtns.push(o),i.selectVideo&&e.videoHistorySiteBtns.push(o),i.selectAudio&&e.audioHistorySiteBtns.push(o),r=!0;break}}if(r)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let i=this;this.historyInserted=!0;let r=0,s=!t&&c.prefConfig.historyInsertFirst,n=!1,a=0;s||(n=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,n&&(a=(c.prefConfig.numPerLine||7)-1,a=c.prefConfig.historyLength<a?a+a-c.prefConfig.historyLength:a,c.prefConfig.hideTileType&&a++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let u=o[p];if(u.style.display=="none")continue;let h=u.querySelector("img");if(h&&h.dataset.src&&(h.src=h.dataset.src,delete h.dataset.src),u.parentNode!=e){let m=e.querySelectorAll("a.search-jumper-btn"),d=!1;for(let f=0;f<m.length;f++){let y=m[f];if((y.dataset.oriName||y.dataset.name)==(u.dataset.oriName||u.dataset.name)){d=!0;break}}if(d)continue;if(s)e.children.length>1?e.insertBefore(u,e.children[1]):e.appendChild(u);else if(n){let f=e.querySelectorAll("a.search-jumper-btn");f.length>a?e.insertBefore(u,f[a]):e.insertBefore(u,i.searchJumperExpand)}else e.appendChild(u);if(++r>=c.prefConfig.historyLength)break}else s&&(e.children.length>1?e.insertBefore(u,e.children[1]):e.appendChild(u))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let i=0;i<this.historySiteBtns.length;i++){let r=this.historySiteBtns[i];r.classList.contains("historySite")&&(t=r.parentNode,this.siteBtnReturnHome(r))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let i=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.addEventListener("mousedown",async r=>{t.dataset.showTips?(i.con.classList.contains("search-jumper-showall")?B=e.parentNode:i.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips",{detail:e}))):(await i.siteSetUrl(t,{button:r.button,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey,metaKey:r.metaKey}),t.href&&(e.href=t.href),e.setAttribute("target",t.target)),e.onclick||(e.onclick=s=>(t.dataset.showTips||t.click(),s.stopPropagation(),s.preventDefault(),!1))},!1),e.addEventListener("dragover",r=>{r.preventDefault()},!0),e.addEventListener("dragenter",r=>{i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.dragTarget=e,i.dragTarget.classList.add("dragTarget"),clearTimeout(i.dragTimer),i.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",r=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",r=>{clearTimeout(i.dragTimer),i.dragTarget&&i.dragTarget.classList.remove("dragTarget"),i.searchBySiteName(t.dataset.name,r)},!0)}async createList(e,t,i){let r=this,s=document.createElement("div");s.className="sitelist",s.style.visibility="hidden";let n=document.createElement("div");n.className="sitelistCon",s.appendChild(n),s.addEventListener("mouseenter",p=>{r.listArrow.style.cssText=""});let a=document.createElement("p");a.innerText=t.dataset.title,a.title=N("batchOpen"),a.addEventListener("click",p=>{r.batchOpen(i,{ctrlKey:p.ctrlKey,shiftKey:p.shiftKey,altKey:p.altKey,metaKey:p.metaKey,button:p.ctrlKey||p.shiftKey||p.altKey||p.metaKey?0:2})}),s.dataset.type=t.dataset.type,n.appendChild(a);function o(p,u){let h=document.createElement("div");h.id="list"+u;let m=p.querySelector("img"),d=document.createElement("a");if(d.setAttribute("ref","noopener noreferrer"),r.bindSite(d,p),h.appendChild(d),r.allListBtns.push(h),m&&!c.prefConfig.noIcons){let y=m.src||m.dataset.src,I=document.createElement("img"),T=document.createElement("div");T.appendChild(I),d.appendChild(T),I.src=Tr,y&&(I.dataset.src=y)}let f=document.createElement("p");f.innerText=p.dataset.name,h.title=p.title,h.dataset.name=p.dataset.name,d.appendChild(f),n.appendChild(h)}try{for(let[p,u]of e.entries())o(u,u.dataset.id),p%50===49&&await We(1)}catch{for(let u=0;u<e.length;u++){let h=e[u];o(h,h.dataset.id)}}return this.allLists.push(s),s}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>div>img"),t=>{if(t.dataset.src){const i=t.dataset.src;wr(i,()=>{t.src=i}),delete t.dataset.src}}),await We(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let i=e.clientWidth,r=e.clientHeight,s=e.offsetLeft+i/2-this.con.scrollLeft,n=e.offsetTop+r/2-this.con.scrollTop,a=e.offsetParent;for(;a!==null;)s+=a.offsetLeft,n+=a.offsetTop,a=a.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,u=this.listArrow.style;if(u.visibility="visible",u.opacity=1,this.funcKeyCall){t.style.display="block",u.opacity=0;const h=e.getBoundingClientRect();s=h.x+i/2-this.con.scrollLeft,n=h.y+r/2-this.con.scrollTop,s-=t.clientWidth/2;let m=e.getBoundingClientRect().top;m>p/2?(m<t.clientHeight+10&&(t.style.height=m-20+"px"),n-=t.clientHeight+r/2+5):(n+=r/2+5,m+t.clientHeight+r+10>p&&(t.style.height=p-m-r-20+"px")),s<20&&(s=20);let d=o-t.clientWidth-30;s>d&&(s=d),t.style.left=s+"px",t.style.top=n+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let h=s;s<30?h=30:s>o-40&&(h=o-40),u.left=h-10+"px",n-r/2<100?(t.style.top=this.bar.clientHeight+"px",u.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",u.bottom=this.bar.clientHeight-9+"px"),s-=t.scrollWidth/2,s>o-t.scrollWidth-10&&(s=o-t.scrollWidth-10),s<0&&(s=0),t.style.left=s+"px"}else{let h=n;n<30?h=30:n>p-30&&(h=p-30),u.top=h-10+"px",s-i/2<100?(t.style.left=this.bar.clientWidth+"px",u.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",u.right=this.bar.clientWidth-9+"px"),n-=t.scrollHeight/2,n>p-t.scrollHeight&&(n=p-t.scrollHeight),n<0&&(n=0),t.style.top=n+"px",t.style.maxHeight="100vh"}}clingPos(e,t,i){let r=e.clientWidth||e.offsetWidth,s=e.clientHeight||e.offsetHeight;const n=e.getBoundingClientRect();let a,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),u=window.innerWidth||document.documentElement.clientWidth,h=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",t.style.position="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(u-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)a=n.x+r/2,o=n.y+s/2,a-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>h/2?o-=t.clientHeight+s/2+10:o+=s/2+10,t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px";else if(this.funcKeyCall||!e.classList.contains("search-jumper-btn")){t.style.position="absolute";let m=window.pageYOffset||document.documentElement.scrollTop||Z(document).scrollTop,d=window.pageXOffset||document.documentElement.scrollLeft||Z(document).scrollLeft;a=n.x+r/2-(this.funcKeyCall?this.con.scrollLeft-d:0),o=n.y+s/2-(this.funcKeyCall?this.con.scrollTop-m:0),a-=t.clientWidth/2;let f=e.getBoundingClientRect().top;f>h/2?(f<t.clientHeight+10&&(t.style.height=f-20+"px"),o-=t.clientHeight+s/2+5):(o+=s/2+5,f+t.clientHeight+s+10>h&&(t.style.height=h-f-s-20+"px")),a<20&&(a=20);let y=u+d-t.clientWidth-30;a>y&&(a=y),t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px"}else{a=e.offsetLeft+r/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+s/2-this.con.scrollTop-e.parentNode.scrollTop;let m=e.offsetParent;for(;m!==null;)a+=m.offsetLeft,o+=m.offsetTop,m=m.offsetParent;o<s?(a-=t.clientWidth/2,o+=t.clientHeight/2,a<5?(a=5,t.style.left="5px",t.style.right="",t.style.bottom=""):a>u-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=a+"px",t.style.right="",t.style.bottom=""),t.style.top=(i?s:s+20)+"px"):o>h-s-10?(a-=t.clientWidth/2,a<5?(t.style.left="5px",t.style.right="",t.style.top=""):a>u-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=a+"px",t.style.right="",t.style.top=""),t.style.bottom=(i?s:s+20)+"px"):a>u-r-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(i?r:r+20)+"px",t.style.top=o+"px"):a<r?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(i?r:r+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=a+"px",t.style.top=o+"px")}}tipsPos(e,t,i){this.tips.innerHTML=ie(t);let r=this.tips.querySelector("div");if(r&&!this.tips.querySelector("[data-close]")){let n=document.createElement("span");n.dataset.close=!0,n.innerText="\xD7",r.appendChild(n)}i&&this.tips.insertBefore(i,this.tips.firstChild),location.protocol==="https:"&&[].forEach.call(this.tips.querySelectorAll("[src^='http:']"),n=>{n.src=n.src.replace("http:","https:")}),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let s=this;[].forEach.call(this.tips.querySelectorAll("iframe"),n=>{let a=n.innerHTML;if(a)if(n.innerHTML=ie(),n.src)n.addEventListener("load",o=>{try{if(!n||!n.parentNode)return;let p=n.contentDocument||n.contentWindow.document,u=p.createElement("div");p.body.appendChild(u),u.outerHTML=ie(a)}catch{}});else try{let o=n.contentDocument||n.contentWindow.document;o.open(),o.write(a),o.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),n=>{n.addEventListener("load",a=>{s.clingPos(e,s.tips)})}),window.markdownit&&(s.md||(s.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),n=>{n.innerHTML=ie(s.md.render(n.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let i=e.match(/^@{(.*?)}/);if(i){if(!B)return!1;let n=i[1];if(![].some.call(ci(n,document),o=>o===B))return!1;e=e.replace(i[0],"")}let r,s=e.match(/^\/(.*)\/(\w*)$/);return s?r=new RegExp(s[1],s[2]):r=new RegExp(e,"i"),r.test(t||"")}async createType(e){let t=this,i=e.type,r=e.icon,s=e.selectTxt,n=e.selectImg,a=e.selectAudio,o=e.selectVideo,p=e.selectLink,u=e.selectPage,h=e.sites,m=!1,d=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,f=[],y=document.createElement("span");y.className="search-jumper-type",!c.prefConfig.expandType&&h.length>10&&y.classList.add("not-expand"),e.match==="0"?(y.style.display="none",y.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(de)==!1?(y.style.display="none",y.classList.add("notmatch")):m=!0),typeof e.description<"u"?y.dataset.title=i+" - "+e.description:y.dataset.title=i,y.dataset.type=i;let I=document.createElement("span"),T=document.createElement("img"),O=document.createElement("b");i.length>=3?(O.innerText=i.trim().substr(0,4),/^[\w \-]+$/.test(O.innerText.substr(0,3))||(O.innerText=O.innerText.substr(0,2))):O.innerText=i,I.appendChild(O),T.style.display="none",y.appendChild(I),I.classList.add("search-jumper-word"),I.classList.add("search-jumper-btn"),I.classList.add("noIcon");let W=/^BM/.test(i)&&e.icon==="bookmark";if(r){I.classList.remove("noIcon");let v=/^[a-z\- ]+$/.test(r);if(T.onload=C=>{T.style.display="",O.innerText="",O.style.display="none",v||I.classList.remove("search-jumper-word")},v){let C=ye[r.trim().replace(/ /g,"_")];C==="fail"||!C?(O.className=r.indexOf("fa")===0?r:"fa fa-"+r,this.fontPool.push(O)):(T.src=C,T.style.width="100%",T.style.height="100%",I.appendChild(T))}else{if(/^data:/.test(r))T.src=r;else{let j=c.prefConfig.cacheSwitch&&ye[r];j==="fail"||(j?T.src=j:(T.src=r,!ye[r]&&!W&&He.push(T)))}I.appendChild(T)}}y.addEventListener("mouseleave",v=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(C=>{C.style.setProperty("--scale",1)})});let x=[],P=v=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(N("batchOpenConfirm"))&&t.batchOpen(x,v);break;case 2:t.batchOpen(x,v);break;default:(y.classList.contains("search-jumper-open")||v.shiftKey||v.altKey||v.ctrlKey||v.metaKey||window.confirm(N("batchOpenConfirm")))&&t.batchOpen(x,v);break}};if(c.prefConfig.shortcut&&e.shortcut&&!y.classList.contains("notmatch")){let v=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();v.length==1&&(y.dataset.title+=` (${v})`),document.addEventListener("keydown",C=>{if(!(c.prefConfig.shortcut==2&&!ce)&&C.target.id!=="searchJumperInput"&&!(!e.ctrl==C.ctrlKey||!e.alt==C.altKey||!e.shift==C.shiftKey||!e.meta==C.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&jt(document))){var j=(C.key||String.fromCharCode(C.keyCode)).toLowerCase();(e.shortcut==C.code||e.shortcut==j)&&(P(C),C.stopPropagation())}})}let J=0,$=this.scale*40,F=(v,C)=>{if(c.prefConfig.staticPosition){C?delete v.dataset.disable:v.dataset.disable="true";return}C?(v.style.display="",y.children.length>2&&y.insertBefore(v,y.children[2])):(v.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(v,t.searchJumperExpand):y.appendChild(v))},A=(v,C)=>{let j=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right"),g=!1;B&&(g=Ri(B));let k=B&&(B.href||B.src);J=0,f.forEach((D,q)=>{let ee=h[q],re=!0;if(ee.kwFilter){let be;D.dataset.link?be=k||v:be=D.dataset.txt?v||B&&B.innerText||"":k||v||location.href,re=t.checkKwFilter(ee.kwFilter,be)}re&&D.dataset.paste?(re=g,F(D,re)):ee.kwFilter&&F(D,re);let se=D.querySelector("img");D.style.display!="none"&&J++,se&&!se.src&&se.dataset.src&&(se.src=se.dataset.src,delete se.dataset.src)}),J>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let z=Math.max(y.scrollWidth,y.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(z=$+"px",C&&t.listPos(y.children[0],ae)),j?(y.style.height=z,y.style.width=""):(y.style.width=z,y.style.height="")};I.addEventListener("checkSites",v=>{A(v.detail)},!1);let b=v=>{if(v){if(v.button===2)return P(v),!1;if(v.button===0&&(v.shiftKey||v.altKey||v.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let C=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),y.classList.remove("search-jumper-move"),y.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),y.classList.remove("search-jumper-open"),C?(y.style.height=$+"px",y.style.width=""):(y.style.height="",y.style.width=$+"px"),y.style.flexWrap="",c.prefConfig.disableTypeOpen&&(ae.style.visibility="hidden");else{t.recoveHistory(),y.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let j=Ke();A(j,v),setTimeout(()=>{y.classList.contains("search-jumper-open")&&(y.style.flexWrap="nowrap",y.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(g=>{y!=g&&(g.classList.remove("search-jumper-open"),g.style.width=$+"px",g.style.height=$+"px",g.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},w=!1,M,L,U=v=>{document.removeEventListener("mouseup",U),document.removeEventListener("mousemove",Q),w||b(v),w=!1},Q=v=>{w?(t.bar.style.left=L.x+v.clientX-M.x+"px",t.bar.style.top=L.y+v.clientY-M.y+"px"):(t.tips.style.opacity=0,t.tips.style.pointerEvents="",w=!0,M={x:v.clientX,y:v.clientY},L={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};I.onmouseup=function(v){if(v&&t.funcKeyCall&&v.button===0&&!(v.shiftKey||v.altKey||v.ctrlKey)){w=!1,v.preventDefault&&v.preventDefault(),document.addEventListener("mouseup",U),document.addEventListener("mousemove",Q);return}b(v)},I.oncontextmenu=function(v){v.preventDefault()},I.addEventListener("click",v=>(t.batchOpen(x,v),!1),!1),I.addEventListener("dblclick",v=>{v.stopPropagation(),v.preventDefault()},!0);let ne,ae,S=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,H=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,R=!Jt||S>600&&H>600;y.addEventListener("sitelist",async v=>{y.appendChild(ae),await t.listPos(v.detail.bind,ae),ae.style.display="block"},!1),I.addEventListener("mouseenter",v=>{if(!w&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!y.classList.contains("search-jumper-open"))?(y.appendChild(ae),t.listPos(y.children[0],ae)):R&&t.tipsPos(I,y.dataset.title),c.prefConfig.overOpen)){if(y.classList.contains("search-jumper-open"))return;clearTimeout(ne),ne=setTimeout(()=>{b(v)},500)}},!1),I.addEventListener("mouseleave",v=>{t.tips.style.opacity=0,t.tips.style.pointerEvents="",c.prefConfig.overOpen&&clearTimeout(ne)},!1);let Y=!1,_=h&&h.length>200;y.dataset.id=t.siteIndex,t.stopInput=!1;async function oe(v,C){if(!v.name)return;let j=await t.createSiteBtn(_||c.prefConfig.noIcons?"0":v.icon,v,d,W,e);j&&(j.classList.contains("notmatch")||J++,j.dataset.type=i,j.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([j,v]),y.appendChild(j),f.push(j),!v.nobatch&&v.match!=="0"&&x.push(v.name),!Y&&!ce&&(j.dataset.current||m)&&!y.classList.contains("notmatch")&&(Y=!0,j.dataset.current&&(c.prefConfig.showCurrent||(j.style.display="none"),t.setCurrentSite(v,j)),t.currentType=y))}try{for(let[v,C]of h.entries())await oe(C,v),v%100===99&&await We(1)}catch{for(let C=0;C<h.length;C++)oe(h[C],C);await We(1)}if(c.prefConfig.sortSite&&y.children.length>1){f.sort((C,j)=>{let g=Me[C.dataset.name]||0;return(Me[j.dataset.name]||0)-g});let v=!1;for(let C=f.length-1;C>=0;C--){let j=f[C],g=Me[j.dataset.name]||0;if(C==f.length-1)g>0&&(v=!0,Me[j.dataset.name]=0);else{let k=Me[f[C+1].dataset.name]||0;g-k>10&&(v=!0,Me[j.dataset.name]=k+10)}y.insertBefore(j,y.children[1])}v&&K.setItem("sortSiteNames",Me)}if(f.forEach(v=>{v.classList.contains("notmatch")&&y.appendChild(v)}),ae=await t.createList(f,y,x),Y){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(y,t.bar.children[0]):t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){y.classList.add("search-jumper-open"),y.classList.add("search-jumper-move"),J>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let v=-1,C=[];if(document.readyState!=="complete"){v=3;let j=g=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",j),window.removeEventListener("load",j),C.forEach(k=>{k&&!k.src&&k.dataset.src&&(k.src=k.dataset.src,delete k.dataset.src)}),C=[])};document.addEventListener("readystatechange",j),window.addEventListener("load",j)}f.forEach((j,g)=>{let k=j.querySelector("img"),z=h[g];if(z&&Ue&&z.kwFilter){let D=t.checkKwFilter(z.kwFilter,Ue);F(j,D)}if(j.style.display!="none"&&k&&!k.src&&k.dataset.src){if(v>=0&&!/^data/.test(k.dataset.src))if(v!==0)v--;else{C.push(k);return}k.src=k.dataset.src,delete k.dataset.src}})}}else t.historyTypeEle||Lt==i&&(t.historyTypeEle=y),t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]);return y.style.width=y.scrollHeight+"px",y.style.height=y.scrollHeight+"px",ae.style.display="none",y.appendChild(ae),s&&n&&a&&o&&p&&u?y.classList.add("search-jumper-targetAll"):(s&&y.classList.add("search-jumper-needInPage"),n&&y.classList.add("search-jumper-targetImg"),a&&y.classList.add("search-jumper-targetAudio"),o&&y.classList.add("search-jumper-targetVideo"),p&&y.classList.add("search-jumper-targetLink"),u&&y.classList.add("search-jumper-targetPage")),Se.push(y),y}async openSiteBtn(e,t,i=!1){this.lastTips=null;let r=new CustomEvent("mouseenter");e.dispatchEvent(r),await this.siteSetUrl(e);let s=e.dataset.isPage;t||(t="_blank"),s&&e.setAttribute("target",t),s&&t=="_blank"&&e.href?me(e.href,{active:i,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async batchOpen(e,t,i){let r=this;if(r.batchOpening=!0,r.customInput=!1,t.altKey&&t.shiftKey){let s=r.getTargetSitesByName(e),n=window.innerWidth||document.documentElement.clientWidth,a="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",o=window.open("","_blank"),p=1;for(let u of s)if(u.dataset.isPage){if(await r.siteSetUrl(u),r.stopInput)return;if(!u.href)continue;let h=document.createElement("iframe");h.width=s.length<=2||n<=1280?"50%":"33%",h.height="100%",h.frameBorder="0",h.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",h.id="searchJumper"+p++,h.style.display="none",a+=h.outerHTML,$e({method:"GET",url:u.href,headers:{referer:u.href,origin:u.href,"User-Agent":navigator.userAgent},onload:function(m){let d=o.document.querySelector("iframe#"+h.id),f=()=>{let y=d.contentDocument||d.contentWindow&&d.contentWindow.document;if(y)try{d.style.display="",d.src=u.href;let I=`<base href="${u.href.replace(/[^\/]*$/,"")}" />`,T=m.response.indexOf("<head")!==-1?m.response.replace(/(\<head.*?\>)/,"$1"+I):I+m.response;y.write(T)}catch{}else setTimeout(()=>{f()},500)};d&&f()},onerror:function(m){he(m)},ontimeout:function(m){he(m)}})}o.document.write(a),o.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey){let s=r.getTargetSitesByName(e);for(let n of s){if(await r.siteSetUrl(n),r.stopInput)return;if(n.dataset.isPage&&n.href){let a={};B&&(a={src:B.src||B.href||"",title:B.title||B.alt}),e=e.filter(o=>o!==n.dataset.name),K.setItem("lastSign",{target:a,sites:e}),setTimeout(()=>{me(n.href,{incognito:!0})},300),setTimeout(()=>{K.setItem("lastSign",!1)},2e3);break}}}else if(t.altKey){let s=r.getTargetSitesByName(e),n=[];for(let m of s)if(m.dataset.isPage){if(await r.siteSetUrl(m),r.stopInput)return;if(!m.href)continue;n.push(m.href)}let a=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,o=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,p=parseInt(a/800);p>n.length&&(p=n.length);let u=parseInt(a/p),h=o/(parseInt((n.length-1)/p)+1)-65;for(let m=0;m<n.length;m++){let d=m%p*u,f=parseInt(m/p)*(h+70);window.open(n[m]+"#searchJumperMin","_blank",`width=${u-10}, height=${h}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${d}, top=${f}`)}}else if(t.shiftKey){let s=r.getTargetSitesByName(e);for(let n of s){if(await r.siteSetUrl(n),r.stopInput)return;if(n.dataset.isPage&&n.href){let a={};B&&(a={src:B.src||B.href||"",title:B.title||B.alt}),e=e.filter(o=>o!==n.dataset.name),K.setItem("lastSign",{target:a,sites:e}),window.open(n.href,"_blank"),setTimeout(()=>{K.setItem("lastSign",!1)},2e3);break}}}else if(t.ctrlKey||t.metaKey){let s=r.getTargetSitesByName(e).reverse();for(let n of s){if(await r.siteSetUrl(n),n.dataset.isPage&&n.href){me(n.href,{active:!1,insert:!0});continue}if(r.stopInput)return;n.click()}}else t.button===2&&r.getTargetSitesByName(e).reverse().forEach(n=>{n.dataset.current||r.openSiteBtn(n,"_blank",!!i)});r.batchOpening=!1}async siteSetUrl(e,t){return new Promise(i=>{let r=n=>{e.removeEventListener("actionOver",r),i(!0)};e.addEventListener("actionOver",r);let s=new PointerEvent("mousedown",t);e.dispatchEvent(s)})}getTargetSitesByName(e,t){let i=this,r=[];return e.forEach(s=>{for(let n=0;n<i.allSiteBtns.length;n++){let a=i.allSiteBtns[n][0];if(a.dataset.name==s){if(!t&&a.dataset.pointer){if(a.dataset.oriName){let o=i.getTargetSitesByName([a.dataset.oriName],!0);if(o.length){r.push(...o);break}}}else r.push(a);break}}}),r}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive"){await We(300),this.submitAction(e);return}let t,i,r=!1,s=this,n=!1,a=0,o=[],p=!1,u=[],h=await K.getItem("copyStore");h&&(u=JSON.parse(h));let m=async(d,f)=>{let y=!0;if(d[0]==="sleep"||d[0]==="@sleep")await We(d[1]),he(`sleep ${d[1]}`);else if(d[0]==="@click")r=!0,await qi(d[1],f)||(y=!1);else if(d[0]==="@dblclick")r=!0,await Pr(d[1],f)||(y=!1);else if(d[0]==="@rclick")r=!0,await Mr(d[1],f)||(y=!1);else if(d[1]==="click"&&d[0].indexOf("@")===0)r=!0,await qi(d[0].substr(1),f)||(y=!1);else if(d[0]==="@copy"){let I=await Nt(d[1],f);I&&I!==!0&&(u.push(I.innerText),ut||(y=!1))}else if(d[0]==="@call"){let I=s.getTargetSitesByName([d[1]])[0];if(I)St=St||Ke()||Be,await s.siteSetUrl(I),I.click();else{let T=window[d[1]]||new li('"use strict";'+d[1]);T&&await T()}}else if(d[0]==="@open"){let I=await Kt(d[1]);p?me(I.href):(p=!0,setTimeout(()=>{location.href=I.href},50))}else if(d[0]!=="@reload")if(d[0]==="@wait")d[1].indexOf("!")===0?await Lr(d[1].slice(1)):await Kt(d[1]);else{let I=d[1];if(Ue||(Ue=I),I.indexOf("%input{")!==-1){let O=await s.showCustomInputWindow(I);if(O)I=O;else return K.setListItem("inPagePostParams",location.hostname,""),!0}await Ki(d[0],I,f)||(y=!1),d[0]!=="@"&&(i=Ct(d[0]))}return y};for(let d of e){if(d[0]==="@loopStart")n=!0,o=[],a=parseInt(d[1])||1;else if(d[0]==="@loopEnd")for(n=!1;a-- >0;){let f=!1,y=0;for(;!f;){f=!0;for(let I of o)await m(I,y)||(f=!1);y++}}else n?o.push(d):await m(d);if(Ye&&(Ye.shift(),Ye&&Ye.length?(K.setListItem("inPagePostParams",location.hostname,Ye),u&&u.length&&K.setItem("copyStore",JSON.stringify(u))):(K.setListItem("inPagePostParams",location.hostname,""),K.setItem("copyStore",""),u&&u.length&&Fe(u.join(`
`))),d[0]==="@reload")){location.reload(!!d[1]);return}}if(n)for(n=!1;a-- >0;){let d=!1,f=0;for(;!d;){d=!0;for(let y of o)await m(y,f)||(d=!1);f++}}if(!r&&i){for(t=i.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let d=t.querySelector("[type=submit]");d?d.click():t.submit()}else Er()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t];for(let r=0;r<i.sites.length;r++){let s=i.sites[r];if(!/^\[/.test(s.url)&&s.name==e)return s}}return null}async switchChinese(e,t){const i=e==="sc"?Te.tc2sc:Te.sc2tc;if(i)return i(t);let r=this;return r.switchChineseResolve||window.addEventListener("message",function(s){if(s.data&&s.data.type==="switchChineseResult"){const n=s.data.payload;r.switchChineseResolve(n)}}),new Promise(s=>{r.switchChineseResolve=s,window.postMessage({type:"switchChineseRequest",payload:{target:e,str:t}},"*"),setTimeout(()=>{s("")},300)})}async createSiteBtn(e,t,i,r,s,n){let a=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,u=t.match,h=!1,m,d=!r&&/^\[/.test(t.url),f=t.description,y=t.shortcut;if(typeof t.openInNewTab<"u"&&(i=t.openInNewTab),d){o.dataset.pointer=!0;let g=JSON.parse(t.url);if(g.length===1){o.dataset.clone=!0;let k=this.getCloneData(g[0]);k&&(o.dataset.oriName=k.name,t=k,t.icon&&e!=="0"&&(e=t.icon),t.description&&(f=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(h=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let I=/^(https?|ftp):/.test(t.url);I&&(o.dataset.isPage=I),o.className="search-jumper-btn",typeof f<"u"&&(o.title=f),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let T=o.dataset.inPagePost==="t";if(u==="0")o.style.display="none",o.classList.add("notmatch");else if(!r&&(!ce||t.hideNotMatch)&&window.top==window.self){if(u){let g,k=u.match(/^\/(.*)\/(\w*)$/);k?g=new RegExp(k[1],k[2]):g=new RegExp(u,"i"),g.test(de)&&(o.dataset.current=!0)}else if(!d&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let g=t.url.match(this.inSiteMatch);if(g)de.indexOf(g[2])!=-1&&t.url.replace(g[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let k=t.url.match(this.paramMatch);k?(k=k.join(".*"),new RegExp(k).test(de)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(de)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let O=document.createElement("span");!r&&p.length>=3?(O.innerText=p.substr(0,4),/^[\w \-]+$/.test(O.innerText.substr(0,3))||(O.innerText=O.innerText.substr(0,2))):O.innerText=p,o.appendChild(O);let W=document.createElement("img");if(W.style.display="none",o.appendChild(W),!n&&c.prefConfig.shortcut&&y&&!o.dataset.clone&&!o.classList.contains("notmatch")){let g=document.createElement("div"),k=y.replace("Key","").replace("Digit","").toUpperCase();k.length==1&&(g.innerText=k,o.appendChild(g)),document.addEventListener("keydown",async z=>{if(!(c.prefConfig.shortcut==2&&!ce)&&z.target.id!=="searchJumperInput"&&!(!a.hideTimeout&&(!t.ctrl==z.ctrlKey||!t.alt==z.altKey||!t.shift==z.shiftKey||!t.meta==z.metaKey))&&a.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&jt(document))){var D=(z.key||String.fromCharCode(z.keyCode)).toLowerCase();(y==z.code||y==D)&&(z.stopPropagation(),gi&&(B=gi),h?o.dispatchEvent(new CustomEvent("showTips")):await ne()!==!1&&!a.customInput&&o.click())}})}let x;if(e=="0"||(e?x=e:!r&&I?x=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&(x=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),x)if(W.onload=k=>{o.classList.remove("search-jumper-word"),O.parentNode&&!c.prefConfig.showEngineWords&&O.parentNode.removeChild(O),W.style.display=""},/^data:/.test(x))W.dataset.src=x;else{let k=c.prefConfig.cacheSwitch&&ye[x];k==="fail"?o.dataset.current&&x.indexOf(location.host)!=-1&&(W.dataset.src=x,ye[x]="",r||setTimeout(()=>{yi(W)},0)):k?W.dataset.src=k:(W.dataset.src=x,!r&&!ye[x]&&He.push(W))}I&&(i?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let P=t.url,J=/%s[st]\b/.test(P),$=bt.test(P);$&&(o.dataset.txt=!0),/%[tb]\b/i.test(P)&&(o.dataset.link=!0);let F,A=async g=>{a.customInput=!1,P=t.url,F="";let k=g||a.searchJumperInputKeyWords.value||De()||a.tileInput.value;!k&&!xt&&!a.bar.classList.contains("search-jumper-isTargetLink")&&(k=Ke()),k&&!g&&(k!=Be&&(a.keywordIndex=0,I&&(Be=k,K.setItem("cacheKeywords",k))),F=k);let z;(T||/^c(opy)?:|^paste:/.test(P))&&(P.indexOf("%input{")!==-1&&(P=await new Promise(X=>{a.showCustomInputWindow(P,V=>{X(V)})}),o.dataset.url=""),z=P.match(/#p{([\s\S]*[^\\])}/));let D=location.host,q=location.href,ee,re=(X,V,G,pe)=>{if(X.indexOf(V+"[")!==-1){let Ce=X.match(Yt(V,"","\\[(.*?)(\\|(.+))?\\]")),ue;if(Ce){switch(Ce[3]?ue=G.split(Ce[3]):(ue=G.split(/[\n\r]/),ue.length===1&&(ue=G.split(" "))),a.keywordIndex||(a.keywordIndex=0),Ce[1]){case"all":F=ue.join(`
`);break;case"":G=ue[a.keywordIndex],++a.keywordIndex>=ue.length&&(a.keywordIndex=0);break;case"-1":--a.keywordIndex<0&&(a.keywordIndex=ue.length-1),G=ue[a.keywordIndex];break;default:G=ue[parseInt(Ce[1])||0];break}X=X.replace(Ce[0],V)}}return bi(X,V,G,pe)},se=!/^showTips:h/i.test(P)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(P),be="",xe="",ge="",Li="",Pi="",Mi=X=>{let V=X;if(V=re(V,"%n",ee),V=re(V,"%su",be),V=re(V,"%sl",xe),V=re(V,"%sr",h?ge.replace(/\n/g,"\u3010SearchJumperBreak\u3011"):ge),V=re(V,"%S",Be||ge),V=re(V,"%ss",Li),V=re(V,"%st",Pi),V=re(V,"%se",escape?escape(ge):ge),V=re(V,"%s",ge,G=>se?G:encodeURIComponent(G)),/%bd\b/.test(V))try{let G=atob(ge);V=re(V,"%bd",G)}catch{console.log("No standard base64")}if(/%be\b/.test(V))try{let G=btoa(ge);V=re(V,"%be",G)}catch(G){console.log(G)}return V},Yr=X=>{let V=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/),G=0;for(;V&&!(G++>100);){let Ce=V[1],ue=V[3],fe="";if(Ce){let at=Ct(Ce);at&&(ue?fe=at.getAttribute(ue)||at[ue]:fe=at.innerText)}else try{let at=window.getSelection(),or=je.getElements(),tt=document.createElement("div");if(or)or.forEach(we=>{tt.appendChild(we.cloneNode(!0))});else for(let we=0,Le=at.rangeCount;we<Le;++we)tt.appendChild(at.getRangeAt(we).cloneContents());if([].forEach.call(tt.querySelectorAll("style,script,svg,canvas"),we=>{let Le=document.createTextNode("");we.parentNode.replaceChild(Le,we)}),document.body.appendChild(tt),ue)for(let we=0;we<tt.childNodes.length;we++){let Le=tt.childNodes[we];Le.nodeType==3?(fe+=Le.nodeValue,fe+=`
`):Le.nodeType==1&&(fe+=Le.getAttribute(ue)||Le[ue]||"",fe+=`
`)}else[].forEach.call(tt.querySelectorAll("img"),we=>{if(!we.src)return;let Le=document.createTextNode(` ![${(we.alt||"").replace(/[\n\r]/g," ").trim()}](${we.src||""}) `);we.parentNode.replaceChild(Le,we)}),[].forEach.call(tt.querySelectorAll("a"),we=>{if(!we.href)return;let Le=(we.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!Le)return;Le=` [${Le}](${we.href||""}) `;let ni;Le.indexOf(`
`)==-1?ni=document.createTextNode(Le):(ni=document.createElement("pre"),ni.innerHTML=ie(Le)),we.parentNode.replaceChild(ni,we)}),fe=tt.innerText;fe&&(fe=fe.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(tt)}catch(at){console.error(at)}X=re(X,V[0],se?fe:encodeURIComponent(fe)),V=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}V=X.match(/%date({(.*?)})?/),G=0;let pe=new Date().getTime();for(;V&&!(G++>100);){let Ce=V[2],ue=pe;if(Ce){Ce=Ce.replace(/\s/g,"");let fe=Ce.match(/(\D*)?(\d+)/);for(;fe;){switch(fe[1]){case"-":ue-=parseInt(fe[2]);break;case"*":ue*=parseInt(fe[2]);break;case"/":fe[2]&&fe[2]!="0"&&(ue=parseInt(ue/parseInt(fe[2])));break;default:ue+=parseInt(fe[2]);break}Ce=Ce.replace(fe[0],""),fe=Ce.match(/(\D*)?(\d+)/)}}else ue=pe;X=X.replace(V[0],ue),V=X.match(/%date({(.*?)})?/)}return X};if(!o.dataset.url){let X=P;T&&(X=X.replace(z[0],"")),o.dataset.url=X.replace(/%e\b/g,document.characterSet).replace(/%c\b/g,Jt?"mobile":"pc")}let ve="",Tt="";ee=F||document.title;let et="",le=Yr(o.dataset.url);if(B&&B.nodeName){if(ve=B.href||B.parentNode&&B.parentNode.href||"",Tt=ve||B.parentNode&&B.parentNode.parentNode&&B.parentNode.parentNode.href||"",(s.selectImg||s.selectAudio||s.selectVideo)&&B.src&&(ve=B.src),B.nodeName.toUpperCase()=="VIDEO"||B.nodeName.toUpperCase()=="AUDIO"){if(!ve){let X=B.querySelector("source");X&&(ve=X.src)}ve&&(ve=ve.replace(/^blob:/,""))}ee=B.title||B.alt||document.title,B.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(P)?B.src&&(/^data/.test(B.src)?et=B.src:(a.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),et=await Vi(B)),le=le.replace(/%i\b/g,et)):(B.nodeName.toUpperCase()=="A"||B.parentNode&&B.parentNode.nodeName.toUpperCase()=="A")&&$&&!k&&B.textContent.trim()&&(k=B.textContent.trim())}for(;le.indexOf("%template{")!==-1;){let X=le.match(/%template{(.*?[^\\])}/);if(!X)return!1;let V=X[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let G=c.prefConfig.templateData[V];if(!G){if(a.stopInput)return!1;if(G=window.prompt(N("template",V))||"",G)c.prefConfig.templateData[V]=G,K.setItem("searchData",c);else return!1}le=le.replace(X[0],G)}for(;le.indexOf("%input{")!==-1;){let X=le.match(/%input{(.*?[^\\])}/);if(!X||(a.customInput=!0,a.stopInput))return!1;if(a.batchOpening){let V;if(X[1].indexOf('"')===0&&X[1].indexOf('","')!==-1?V=X[1].substr(1,X[1].length-2).split('","'):V=X[1].split(","),V.length===2?V=window.prompt(V[0],V[1]):V=window.prompt(X[1]),V===null)return!1;le=le.replace(X[0],V)}else break}ve&&(ve=ve.replace(/%(\w{2})/g,(X,V)=>`%${V.toUpperCase()}`)),Tt&&(Tt=Tt.replace(/%(\w{2})/g,(X,V)=>`%${V.toUpperCase()}`));let kt=ve.replace(/^https?:\/\//i,"");k||(k=ce&&Be);try{if(typeof navigator.clipboard.readText<"u"&&(!k&&$&&(k=await navigator.clipboard.readText(),k&&!g&&(F=k)),!et&&/%i\b/.test(P))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const V=await navigator.clipboard.read();for(const G of V)if(G.types.includes("image/png")){const pe=await G.getType("image/png");et=await new Promise(Ce=>{const ue=new FileReader;ue.onload=function(fe){Ce(fe.target&&fe.target.result)},ue.readAsDataURL(pe)}),et&&(le=le.replace(/%i\b/g,et))}}if(!et){a.customInput=!0;let V=window.prompt(N("targetUrl"),"https://www.google.com/favicon.ico");if(V)a.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),et=await Vt(V);else return!1}}}catch(X){console.error(X.message)}if(!k&&$){if(a.customInput=!0,a.con.classList.contains("search-jumper-showall")||a.inInput||h||a.stopInput)return!1;let X=window.prompt(N("keywords"));if(X===null)return!1;Ue=X,setTimeout(()=>{Ue=""},1),k=X,ge=k,be=ge.toUpperCase(),xe=ge.toLowerCase(),J&&(Li=await a.switchChinese("sc",ge),Pi=await a.switchChinese("tc",ge)),se||(k=encodeURIComponent(k)),le=Mi(le)}else k&&!be&&!xe&&!ge&&(ge=k,be=ge.toUpperCase(),xe=ge.toLowerCase(),J&&(Li=await a.switchChinese("sc",ge),Pi=await a.switchChinese("tc",ge)),se||(k=encodeURIComponent(k)));if(ve===""){let X=De()||a.searchJumperInputKeyWords.value||a.tileInput.value;if(!$&&X&&/^(http|ftp)/i.test(X))ve=X,ve=ve.replace(/%(\w{2})/g,(V,G)=>`%${G.toUpperCase()}`);else{let V=!1,G=()=>!(a.stopInput||h||(V===!1&&(V=window.prompt(N("targetUrl"),"https://www.google.com/favicon.ico"),V&&(V=V.replace(/%(\w{2})/g,(pe,Ce)=>`%${Ce.toUpperCase()}`),B={src:V})),V===null));if(/%t\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=re(le,"%t",V)}if(/%T\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=le.replace(/%T\b/g,encodeURIComponent(V))}if(/%τ\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=le.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(V)))}if(/%b\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=le.replace(/%b\b/g,V.replace(/^https?:\/\//i,""))}if(/%B\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=le.replace(/%B\b/g,encodeURIComponent(V.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(le)){if(a.customInput=!0,G()===!1)return!1;le=le.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(V.replace(/^https?:\/\//i,""))))}}}let Ni=D;if((Tt||ve)&&!o.dataset.link&&(q=Tt||ve,Ni=q.replace(/^\w+:\/\/([^\/]+).*/,"$1")),T){let X=[],V=!1;if(z[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(G=>{if(G=G.trim(),/^loopStart\(\d+\)$/.test(G)){let pe=G.match(/loopStart\((.*)\)/);X.push(["@loopStart",pe[1]])}else if(G=="loopEnd")X.push(["@loopEnd",""]);else if(G.startsWith("click(")&&G.endsWith(")")){let pe=G.slice(6,G.length-1);pe&&X.push(["@click",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("dblclick(")&&G.endsWith(")")){let pe=G.slice(9,G.length-1);pe&&X.push(["@dblclick",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("rclick(")&&G.endsWith(")")){let pe=G.slice(7,G.length-1);pe&&X.push(["@rclick",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("copy(")&&G.endsWith(")")){let pe=G.slice(5,G.length-1);pe&&X.push(["@copy",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("call(")&&G.endsWith(")")){let pe=G.slice(5,G.length-1);pe&&(X.push(["@call",pe.replace(/\\([\=&])/g,"$1").trim()]),V=!0)}else if(G.startsWith("reload(")&&G.endsWith(")")){let pe=G.slice(7,G.length-1);X.push(["@reload",pe.trim()])}else if(G.startsWith("wait(")&&G.endsWith(")")){let pe=G.slice(5,G.length-1);X.push(["@wait",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("open(")&&G.endsWith(")")){let pe=G.slice(5,G.length-1);pe&&X.push(["@open",pe.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(G)){let pe=G.match(/sleep\((.*)\)/);pe&&X.push(["@sleep",pe[1]])}else{G=G.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let pe=G.split("SJ^PARAM");if(pe.length===2){let Ce=pe[0],ue=Mi(pe[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,et).replace(/%c\b/g,Jt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(q)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(q))).replace(/%h\b/g,Ni).replace(/%T\b/g,encodeURIComponent(ve)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(ve))).replace(/%b\b/g,kt).replace(/%B\b/g,encodeURIComponent(kt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(kt))));ue=re(ue,"%t",ve),ue=re(ue,"%u",q),X.push([Ce,ue])}else(G.endsWith(".click()")||G.endsWith(".click"))&&X.push(["@"+G.replace(/\.click(\(\))?$/,""),"click"])}}),V&&a.updateCacheKeywords(),le===""||le===location.href)return Ye=X,this.submitAction(X),!1;K.setListItem("inPagePostParams",le.replace(/^https?:\/\/([^\/:]+).*/,"$1"),X)}return le=re(le,"%h",Ni),le=re(le,"%t",ve),le=re(le,"%u",q),le=Mi(le.replace(/%U\b/g,encodeURIComponent(q)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(q))).replace(/%T\b/g,encodeURIComponent(ve)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(ve))).replace(/%b\b/g,kt).replace(/%B\b/g,encodeURIComponent(kt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(kt)))),i&&/^(https?|ftp):/.test(le)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,le},b,w=!1,M,L,U,Q,ne=async g=>{if(!o.dataset.disable){if(delete o.href,g||(g={}),M=g.altKey,L=g.ctrlKey,U=g.metaKey,Q=g.shiftKey,!M&&!L&&!U&&!Q&&(g.button==1||g.button==2?(M=!1,L=!0,U=!1,Q=!1):i===2?(M=!1,L=!0,U=!1,Q=!0):i===3?(M=!0,L=!1,U=!1,Q=!1):i===4&&(M=!1,L=!0,U=!1,Q=!1)),h){o.removeAttribute("target"),m&&(/^(https?|ftp):/.test(m)?(b=m,o.href=b,i?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(m)&&(m=m.replace(/^copy:/,"")),Fe(m))),o.dispatchEvent(new Event("actionOver"));return}if(w=!1,b="",b=await A(),/^(https?|ftp):/.test(b)&&g.stopPropagation&&g.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(g.button==1||g.button==2)&&(w=!0);else{if(!b){a.stopInput||(a.stopInput=!0,setTimeout(()=>{a.stopInput=!1},1));return}o.href=b}a.customInput&&b&&(w=!0),o.dispatchEvent(new Event("actionOver")),w&&(g.preventDefault&&g.preventDefault(),o.click())}},ae=()=>{let g=Math.max(c.prefConfig.historyLength,20),k=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&u!=="0"&&g&&!k&&K.getItem("historySites",z=>{_e=z||[],_e=_e.filter(D=>D&&D!=p),_e.unshift(p),_e.length>g&&(_e=_e.slice(0,g)),K.setItem("historySites",_e)}),c.prefConfig.shiftLastUsedType&&!k){let z=o.parentNode;!(z&&(z.classList.contains("search-jumper-targetAll")||z.classList.contains("search-jumper-targetImg")||z.classList.contains("search-jumper-targetAudio")||z.classList.contains("search-jumper-targetVideo")||z.classList.contains("search-jumper-targetLink")||z.classList.contains("search-jumper-targetPage")||z.classList.contains("search-jumper-needInPage")))&&Lt!=o.dataset.type&&(Lt=o.dataset.type,K.setItem("historyType",Lt))}c.prefConfig.sortType&&K.getItem("sortTypeNames",z=>{Pe=z||{},Pe[o.dataset.type]?Pe[o.dataset.type]=Pe[o.dataset.type]+1:Pe[o.dataset.type]=1,K.setItem("sortTypeNames",Pe)}),c.prefConfig.sortSite&&K.getItem("sortSiteNames",z=>{Me=z||{},Me[o.dataset.name]?Me[o.dataset.name]=Me[o.dataset.name]+1:Me[o.dataset.name]=1,K.setItem("sortSiteNames",Me)})},S=(g,k)=>{Fe(k);let z=o;g||(a.appendBar(),a.closeOpenType(),a.con.style.display="",a.setFuncKeyCall(!0),window.getSelection().toString()?z=B||o:z=Z(document),a.tileInput.parentNode&&a.tileInput.parentNode.removeChild(a.tileInput)),a.tipsPos(z,N("copyOver")),clearTimeout(a.hideTips),a.hideTips=setTimeout(()=>{a.tips.style.opacity=="1"&&(a.tips.style.opacity=0,a.tips.style.pointerEvents="")},1500)},H=g=>{if(g&&g.stopPropagation&&g.stopPropagation(),o.dataset.disable)return;if(B&&B.focus&&B.focus(),h&&a.waitForShowTips)return v(o,0),g&&g.preventDefault&&g.preventDefault(),!1;if(w=!0,!b)return g&&g.preventDefault&&g.preventDefault(),!1;g||(g={});let k=/^(https?|ftp):/.test(b);if(!a.batchOpening&&!r&&ae(),(c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&F&&bt.test(o.dataset.url)&&F.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(N("multiline")))){let D=F.split(`
`);if(D.length>10&&!confirm(N("multilineTooMuch")))return;let q=0,ee=o.target;o.target="_blank";let re=async()=>{b=await A(D[q++]),o.href=b,o.click(),q<D.length?setTimeout(()=>{re()},c.prefConfig.multilineGap||1e3):o.target=ee};return re(),o.href="",g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}if(b.indexOf("%input{")!==-1){a.showCustomInputWindow(b,D=>{b=D,o.href=D,o.click()}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();return}let z=b.match(/^find(\.addto\((.*?)\))?:(.*)/);if(z){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();let D=z[2],q=z[3];if(q)D&&c.prefConfig.inPageRule&&D.indexOf("@")!==0&&(D="@"+D),q.indexOf("%input{")!==-1?a.showCustomInputWindow(q,ee=>{D?a.addToHighlightGroup(ee,D):(a.searchJumperInPageInput.value=ee,a.submitInPageWords(),a.waitForHide(0))}):D?a.addToHighlightGroup(q,D):(a.searchJumperInPageInput.value=q,a.submitInPageWords(),a.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),Te.targetElement=B,Te.keywords=Ke(),b=b.replace(/^javascript:/,"");try{b=decodeURIComponent(b)}catch{}let D=/^[_a-zA-Z0-9]+$/.test(b)&&Te[b]||new li(b);return D&&D(),!1}else if(/^c(opy)?:/.test(t.url)){if(g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),b)b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,D=>{S(!0,D.replace(/^c(opy)?:/,""))}):S(g.isTrusted,b.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let D=!1;if(B&&/INPUT|TEXTAREA/i.test(B.nodeName)&&B.getAttribute("aria-readonly")!="true")D=!0;else{let q=B;for(;q&&(D=q.contentEditable=="true",!(D||q.nodeName.toUpperCase()=="BODY"));)q=q.parentNode}if(D){if(!b)return!1;b=b.replace(/^paste:/,""),b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,q=>{qt(B,q)}):b?qt(B,b):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then(q=>{qt(B,q)})}}else if(/^\[/.test(t.url)){g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();let D=JSON.parse(t.url);return a.batchOpen(D,{button:2,altKey:M||g.altKey,ctrlKey:L||g.ctrlKey,shiftKey:Q||g.shiftKey,metaKey:U||g.metaKey},i===1),!1}else if(/[:%]P{/.test(t.url)){if(g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),b===!1)return!1;let D=q=>{let ee=q.match(/[:%]P{(.*)}/),re="";if(ee)if(q=q.replace(ee[0],""),ee=ee[1],ee.charAt(0)==='"'&&ee.charAt(ee.length-1)==='"')re=ee.substring(1,ee.length-1);else{ee=new URLSearchParams(ee);let se={};ee.forEach((be,xe)=>{se[xe]=be}),re=JSON.stringify(se)}$e({method:"POST",url:q,data:re,onload:se=>{he(se)},onerror:se=>{ke(N("postError")+(se.statusText||se.error))},ontimeout:se=>{ke(N("postError")+(se.statusText||se.error))}})};return b.indexOf("%input{")!==-1?a.showCustomInputWindow(b,q=>{D(q)}):D(b),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(b===!1)return!1;let D=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),q=ee=>{if(D){if(D=D[3],D==="")return Gt(t.charset,ee,"_self"),"";K.setItem("postUrl",[ee,t.charset]),D.indexOf("http")!==0&&(D=ee.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+D)),ee=D}else K.setItem("postUrl",[ee,t.charset]),ee=ee.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"");return ee};if(b.indexOf("%input{")!==-1){a.showCustomInputWindow(b,ee=>{ee=q(ee),ee&&(o.href=ee,o.target==="_blank"?me(o.href,{active:!0,insert:!0}):location.href=o.href)}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation();return}else{if(b=q(b),!b)return;o.href=b}}if(!(Q&&!L&&!U&&!M&&g.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(b))return g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),L?me(b,{active:!1,insert:!0}):me(b,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((M||L||U||Q)&&k){if((L||U)&&Q)me(b,{incognito:!0});else if(L||U)me(b,{active:!1,insert:!0});else if(M){if(t.match){let xe=t.match.replace(/\\/g,""),ge=xe.match(/\((www)\|([^\)\|]+)/);for(;ge;)b=b.replace(ge[1],ge[2]),xe=xe.replace(ge[0],""),ge=xe.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let D=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,q=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,ee=c.prefConfig.popupWidth,re=c.prefConfig.popupHeight,se=c.prefConfig.popupLeft,be=c.prefConfig.popupTop;re?(re=parseFloat(re),re=q/100*re):re=Math.max(q/3*2,q-250),ee?(ee=parseFloat(ee),ee=D/100*ee):ee=Math.min(D,650),se?(se=parseFloat(se),se=D/100*se-ee/2):se=D-ee-30,be?(be=parseFloat(be),be=q/100*be-re/2):be=(q-re)/2,a.closePopupWindow(),a.popupWindow=window.open(b+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${ee}, height=${re}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${se}, top=${be}`)}else Q&&me(b,{active:!0,insert:!0});return g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}else if(k&&o.getAttribute("target")==="_blank"&&!(M||L||U||Q)&&g.button===0)return me(b,{active:!0,insert:!0}),g.preventDefault&&g.preventDefault(),g.stopPropagation&&g.stopPropagation(),!1}};o.addEventListener("mousedown",ne,!0),o.addEventListener("mouseup",g=>{g.stopPropagation&&g.stopPropagation()},!0),o.addEventListener("click",H,!0),o.addEventListener("auxclick",g=>{if(w&&g.preventDefault)return g.preventDefault(),!1},!0),o.addEventListener("contextmenu",g=>{if(w&&g.preventDefault)return g.preventDefault(),!1},!0);let R=o.dataset.name;y&&(R+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${y.replace("Key","")})`);let Y=!1,_=!1,oe=async(g,k,z)=>{if(a.tipsPos(g,'<span class="loader"></span><font>Loading...</font>'),_=!1,k)try{k=k.replace(/^showTips:/,""),Y=!0;let D,q=async(ee,re)=>{let se=await a.anylizeShowTips(ee,o.dataset.name,g,D);if(Y=!1,!re&&(a.tips.style.opacity==0||a.tips.innerHTML.indexOf('<span class="loader">')!==0)){_=!0;return}Array&&Array.isArray&&Array.isArray(se)&&(m=se[1],se=se[0]),se&&(se!="null"&&se!="No result"&&(se=`<div>${se}</div>`,_=!0),a.tipsPos(g,se,D),ae(),setTimeout(()=>{a.tips.style.pointerEvents="all"},100))};if(/%input{/.test(k))if(D=this.createShowTipsInput(k,async ee=>{a.tipsPos(g,'<span class="loader"></span><font>Loading...</font>'),await q(ee,!0)}),/%input{[^},]*}/.test(k)){if(k=await this.showCustomInputWindow(k),!k)return}else{let ee;for(;ee=k.match(/%input{([^},]+),\s*([^}/]*).*?}/);){let re=ee[1],se=ee[2];k=k.replace(ee[0],se).replaceAll(`input{${re}}`,se),ee=k.match(/%input{([^},]+),\s*([^}/]*).*?}/)}}await q(k)}catch(D){he(D)}},v=async(g,k=1e3)=>{if(!o.dataset.disable&&!(!g||g.nodeType!==1)&&(a.preList&&(a.preList.style.visibility="hidden",a.listArrow.style.cssText=""),m=null,clearTimeout(a.requestShowTipsTimer),a.waitForShowTips=!1,a.tipsPos(g,R),h)){a.stopInput=!0;let z=await A();a.stopInput=!1,z&&a.lastUrl===z?Y?a.tipsPos(g,"<span class='loader'></span><font>Loading...</font>"):oe(g,z):(a.waitForShowTips=!0,a.requestShowTipsTimer=setTimeout(async()=>{z=z||await A(),z&&(a.lastUrl=z,oe(g,z),a.waitForShowTips=!1)},k))}},C=!1;o.addEventListener("touchend",g=>{g.stopPropagation&&g.stopPropagation(),h&&(C=!0,a.waitForShowTips=!0)},!1);let j=g=>{if(a.funcKeyCall||c.prefConfig.noAni)return;let k=a.con.classList.contains("search-jumper-left")||a.con.classList.contains("search-jumper-right"),z=[],D=o.getBoundingClientRect(),q=k?Math.abs(g.clientY-D.top)/D.height:Math.abs(g.clientX-D.left)/D.width,ee=.1,re=.1;o.style.setProperty("--scale",1+ee+re),z.push(o);let se=o.previousElementSibling;if(se&&/^A$/i.test(se.nodeName)){se.style.setProperty("--scale",1+re+ee*(1-q)),z.push(se);let xe=se.previousElementSibling;xe&&/^A$/i.test(xe.nodeName)&&(xe.style.setProperty("--scale",1+re*(1-q)),z.push(xe))}let be=o.nextElementSibling;if(be&&/^A$/i.test(be.nodeName)){be.style.setProperty("--scale",1+re+ee*q),z.push(be);let xe=be.nextElementSibling;xe&&/^A$/i.test(xe.nodeName)&&(xe.style.setProperty("--scale",1+re*q),z.push(xe))}a.dockerScaleBtns.forEach(xe=>{z.indexOf(xe)===-1&&xe.style.setProperty("--scale",1)}),a.dockerScaleBtns=z};return o.addEventListener("mouseenter",g=>{if(g.stopPropagation&&g.stopPropagation(),!o.dataset.disable&&!(_&&a.lastTips===o&&a.tips.style.opacity==1)){if(a.lastTips=o,h){if(C){C=!1;return}if($&&!(a.searchJumperInputKeyWords.value||a.tileInput.value||Ke())){a.waitForShowTips=!0,a.tipsPos(o,R);return}}v(o)}},!0),o.addEventListener("mousemove",g=>{o.dataset.disable||(j(g),a.clingPos(o,a.tips))},!1),o.addEventListener("showTips",g=>{o.dataset.disable||(a.waitForHide(0),a.appendBar(),a.closeOpenType(),a.con.style.display="",v(g.detail||B,0))},!1),o.addEventListener("mouseleave",g=>{o.dataset.disable||_||(a.tips.style.opacity=0,a.tips.style.pointerEvents="",clearTimeout(a.requestShowTipsTimer))},!1),o.addEventListener("drop",g=>{a.searchBySiteName(p,g)},!1),o.addEventListener("dragover",g=>{g.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let i=c.prefConfig.inPageRule[t];if(i){let r=i.match(/^\/(.*)\/([il]*)$/);r?i=`/${r[1]}|${e}/${r[2]||""}`:i=`/${i}|${e}/`}else i=`/${e}/`;c.prefConfig.inPageRule[t]=i,K.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}createShowTipsInput(e,t){let i=document.createElement("div");i.className="showTips-inputGroup";let r=e,s=[],n=()=>{let p=r,u=0;[].forEach.call(s,h=>{let m;h.className=="select"?m=h.children[0].value:m=h.value,p=p.replaceAll("\u25CE"+u,m||""),u++}),t(p)},a=r.match(/%input{(.*?[^\\])}/),o=0;for(;a;){let p=a[1],u=document.createElement("div");if(u.className="showTips-input-title",/^".*","/.test(p)?p=p.substr(1,p.length-2).split('","'):p=p.replace(/\\,/g,"\u25CESJ").split(",").map(h=>h.replace(/◎SJ/g,",")),p.length===1){p=p[0].replace(/\\\|/g,"\u25CESJ").split("|").map(d=>d.replace(/◎SJ/g,"|"));let h=document.createElement("div");u.innerText=p[0],h.appendChild(u);let m=document.createElement("input");m.type="text",p.length>1&&(m.title=p[1]),h.appendChild(m),i.appendChild(h),s.push(m)}else if(p.length>=2){let h=p[0].replace(/\\}/g,"}");/^'.*'\/'/.test(h)?h=h.substr(1,h.length-2).split("'/'"):h=h.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let m=p.slice(1).join(",");/^'.*'\/'/.test(m)?m=m.substr(1,m.length-2).split("'/'"):m=m.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let d=h.length===m.length+1,f=document.createElement("div");u.innerText=h[0],f.appendChild(u);let y=document.createElement("input");y.type="text",y.value=m[0];let I=document.createElement("div");I.className="select",I.appendChild(y);let T=document.createElement("p");T.innerText="",I.appendChild(T);let O=document.createElement("div");O.className="options",I.appendChild(O);let W=document.createElement("p");W.setAttribute("value",""),W.innerHTML=ie("<b>Select option</b>"),O.appendChild(W),W.addEventListener("click",x=>{O.style.visibility="hidden",setTimeout(()=>{O.style.visibility=""},0),y.value="",T.innerText="Select option"});for(let x=0;x<m.length;x++){let P=m[x],J=document.createElement("p");if(J.setAttribute("value",P),d){let $=h[x+1];$=$.replace(/\\\|/g,"\u25CESJ").split("|").map(F=>F.replace(/◎SJ/g,"|")),J.innerText=$[0],$.length>1&&(J.title=$[1])}else J.innerText=P;J.addEventListener("click",$=>{O.style.visibility="hidden",setTimeout(()=>{O.style.visibility=""},0),y.value=J.getAttribute("value"),T.innerText=""}),O.appendChild(J)}y.addEventListener("change",x=>{T.innerText=""}),I.addEventListener("mouseenter",x=>{I.focus();const P=I.getBoundingClientRect();O.style.top=`${P.bottom}px`,O.style.left=`${P.left}px`,O.style.width=`${P.width}px`}),f.appendChild(I),i.appendChild(f),s.push(I)}r=r.replace(a[0],"\u25CE"+o).replaceAll(`input{${u.innerText}}`,"\u25CE"+o),o++,a=r.match(/%input{(.*?[^\\])}/)}if(i.children.length){let p=document.createElement("div");p.className="searchBtn",p.innerHTML=ie(Sr),p.addEventListener("click",u=>{n()}),i.appendChild(p)}return i}async anylizeShowTips(e,t,i,r){let s,n=this;try{const a=/([^\\]|^)([\+\-*/])([\d\.]+)$/,o=/\|cache\=(\d+)$/,p=/%p(\{+)/,u=/#headers({.*?})/,h=/#stream({(.*?)})?/,m=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let d=e.split(`
`);d.length==1&&(d=e.split(" ")),d=d[0].replace(/【SearchJumperBreak】/g,`
`),e=e.replace(/【SearchJumperBreak】/g,`
`).replace(d,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let f=d.match(o);f?(f=parseInt(f[1]),d=d.replace(o,"")):f=7200;let y=Date.now()/1e3,I=st.filter(x=>y<x.time?(!s&&x.url==d&&(s=x.data),!0):!1);I.length!=st.length&&(st=I,K.setItem("tipsStorage",st));let T=[],O=(x,P)=>{let J=e,$=!0;for(;P;){let F=P[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),A=F[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),b=x,w=null;if(A.shift(),A.forEach(M=>{if(w){let L=[];for(let U=0;U<w.length;U++){let Q=w[U];Q&&(Array.isArray(Q)?Q=Q.at?Q.at(M):Q[M]:Q=Q[M]),L.push(Q)}w=L}else if(b&&(Array.isArray(b)?M==="all"?w=b:b=b.at?b.at(M):b[M]:b=b[M]),!b)return null}),w&&(b=w.join("")),F.length!=1){let M=F[1],L=M.match(a);if(L){let U=[];for(;L;)M=M.replace(a,"$1"),U.unshift([L[2],L[3]]),L=M.match(a);U.forEach(Q=>{let ne=parseFloat(Q[1]);switch(Q[0]){case"+":b+=ne;break;case"-":b-=ne;break;case"*":b*=ne;break;case"/":b/=ne;break}}),b=b.toFixed(2)}else{let U=M.match(/^\/(.*)\/(\w?)$/),Q=U?new RegExp(U[1],U[2]):new RegExp(M),ne=b.match(Q);ne&&(b=ne[1])}}b?$=!1:b="",T.push(b),J=J.replace(P[0],b),P=J.match(/{(.*?)}/)}return $&&console.log("Error:",x),J=J.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),J},W=e.match(/{(.*?)}/);if(s)W&&W[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,d),s=O(s,W),s=[s,`
`+T.join(",")]);else{let x,P=d.match(p),J={},$=d;if(P){let L=P[1].length;if(P=d.match(new RegExp(`%p\\{+([\\s\\S]*?)\\}{${L}}`)),P){let U=P[1].replace(/\n/g,"\\n");if(U.indexOf("%")===0)try{U=decodeURIComponent(U)}catch{}J.body=U,J.method="POST",$=$.replace(P[0],"")}}let F=d.match(u);if(F){let L=F[1];if(L.indexOf("%")===0||L.indexOf("%")===1)try{L=decodeURIComponent(L)}catch{}J.headers=JSON.parse(L),$=$.replace(F[0],"")}let A=!1,b,w=W&&W[1].indexOf("json")===0,M=d.match(h);if(M)J.responseType="stream",J.streamMode=M[2]||"concat",$=$.replace(M[0],""),s=await new Promise(L=>{J.onstream=U=>{let Q;if(w){if(Q=U.json(),!Q)return;Q=O(Q,W)}else Q=U.text;n.tipsPos(i,Q,r),n.tips.style.pointerEvents="all",L&&L(Q)},b=Ve($,J).then(U=>(e=e.replace(/【SEARCHJUMPERURL】/g,U.finalUrl),w?U.json():U.text)),b.then(U=>{let Q=w?U&&O(U,W):U;Q&&(n.tipsPos(i,Q,r),L&&L(Q))})}),s||(s="No result",A=!0);else if(w){let L=[];b=Ve($,J).then(U=>(e=e.replace(/【SEARCHJUMPERURL】/g,U.finalUrl),U.json())),s=await b.then(U=>U?(x=U,O(U,W)):null),s||(s="No result",A=!0),s=[s,`
`+L.join(",")]}else{let L=!1,U=$.match(m),Q=[];for(;U;){let ae=U[1];Q.push(ae),$=$.replace(U[0],""),U=$.match(m)}for(b=Ve($,J).then(ae=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,ae.finalUrl),L=!0),ae.text()));Q.length;){let ae=Q.shift(),S=await b.then(H=>{let R=document.implementation.createHTMLDocument("");R.documentElement.innerHTML=ie(H);let Y=Ct(ae,R);if(!Y)return null;let _=R.querySelector("base");return Xi(Y.getAttribute("href"),_?_.href:$)});if(S)b=Ve(S).then(H=>H.text());else return"No result"}let ne;s=await b.then(ae=>{if(!e)return ae;let S=document.implementation.createHTMLDocument("");S.documentElement.innerHTML=ie(ae),ne=S.title;let H=e;for(;W;){let R="";if(W[1]=="title")R=S.title;else{let Y=W[1].split("|"),_=ci(Y[0],S);if(_&&_.length)if(L=!0,Y.length==1)R=_[0].innerText;else{let oe=Y[1],v=oe.match(/\(.*?\)/g);v?[].forEach.call(_,C=>{let j=Y[1];v.forEach(g=>{g==="()"?j=j.replace(g,C.innerText):(oe=g.match(/\((.*)\)/)[1],j=j.replace(g,C.getAttribute(oe)||C[oe]))}),R+=j}):R=_[0].getAttribute(oe)||_[0][oe]}}H=H.replace(W[0],R),W=H.match(/{(.*?)}/)}return L?(H=H.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),H):null}),s?this.insertHistoryUrl(d,ne):(s="No result",A=!0),s=[s,d],x=s}A||(s=this.calcResult(s),st.push({url:d,data:x,time:Date.now()/1e3+f}),st.length>50&&st.shift(),K.setItem("tipsStorage",st))}}else if(e=e.replace(/【SearchJumperBreak】/g,`
`),s=/\breturn\b/.test(e)?await new li("fetch","storage","name",'"use strict";'+e)(Ve,K,t):e,s=this.calcResult(s),B&&B.href){let d=B.title||B.alt||B.innerText;this.insertHistoryUrl(B.href,d)}}catch(a){he(a)}return s}calcResult(e){let t=typeof e=="string",i=t?e:e[0];const r=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,s=/([\+\-*/])([\d\.]+)/;let n=i.match(r);if(n){let a=[],o=n[0],p=parseFloat(n[1]),u=n[2];for(n=u.match(s);n;)u=u.replace(n[0],""),a.push([n[1],n[2]]),n=u.match(s);a.forEach(h=>{let m=parseFloat(h[1]);switch(h[0]){case"+":p+=m;break;case"-":p-=m;break;case"*":p*=m;break;case"/":p/=m;break}}),p=p.toFixed(2),i=i.replace(o,p)}return t?e=i:e[0]=i,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let i=location.href,r=document.title;Te.history.pushState("",t,e),document.title=t,Te.history.replaceState("",r,i),document.title=r}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let i=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>i||this.bar.scrollHeight>r?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let s=this.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.width==="0px"&&(s.style.width="auto"),s.style.height==="0px"&&(s.style.height="auto"),s!=this.bar.firstElementChild&&setTimeout(()=>{s.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains(B)||this.inInput&&Qe||!e&&this.funcKeyCall)return;(!Qe||!Qe.parentNode)&&(Qe=Ne(Mt),Ge||this.addToShadow(Qe));let i=De();if(e&&i&&i.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!B)B=Z(document);else if(!i&&B!=Z(document)&&(B.className!="searchJumper"||!/^MARK$/i.test(B.nodeName))){let h=B,m;for(;h&&h.nodeName&&!/^(img|audio|video|a)$/i.test(h.nodeName);){if(h.parentNode){if(/^(img|audio|video|a)$/i.test(h.parentNode.nodeName)){h=h.parentNode;break}if(m=h.parentNode.querySelectorAll("audio,video"),m&&m.length!==1&&(m=h.parentNode.querySelectorAll("img")),m&&m.length!==1&&(m=h.parentNode.querySelectorAll("a")),m&&m.length===1){m[0].scrollHeight&&h.scrollHeight/m[0].scrollHeight<2&&(h=m[0]);break}}h=h.parentNode}h&&(B=h)}this.appendBar();let r=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var s=c.prefConfig.autoDelay||1e3,n=()=>{r.bar.classList.remove("search-jumper-isInPage"),r.bar.classList.remove("search-jumper-isTargetImg"),r.bar.classList.remove("search-jumper-isTargetAudio"),r.bar.classList.remove("search-jumper-isTargetVideo"),r.bar.classList.remove("search-jumper-isTargetLink"),r.bar.classList.remove("search-jumper-isTargetPage"),r.bar.classList.remove("initShow"),r.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(n,s)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",this.tips.innerHTML=ie(""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let a="",o="";if(i)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)a="needInPage";else{let h=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!h||h.classList.contains("notmatch")||h.classList.contains("search-jumper-targetPage")||h.classList.contains("search-jumper-targetImg")||h.classList.contains("search-jumper-targetAudio")||h.classList.contains("search-jumper-targetVideo")||h.classList.contains("search-jumper-targetLink"))&&(a="needInPage")}else{switch(B.children.length==1&&B.children[0].nodeName.toUpperCase()==="A"&&(B=B.children[0]),B.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),a="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),a="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),a="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),a="targetLink";break;default:break}let h=B.parentNode;h&&h.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),a?o="targetLink":a="targetLink"),a||(this.bar.classList.add("search-jumper-isTargetPage"),a="targetPage"),a||(a="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,u;if(a&&(p=this.bar.querySelector(`.search-jumper-${a}:not(.notmatch)>span`),u=this.bar.querySelectorAll(`.search-jumper-${a}:not(.notmatch)>a>img`)),r.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let h=this.bar.querySelectorAll(`.search-jumper-${a}:not(.notmatch)>span:first-child`);[].forEach.call(h,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p),r.insertHistory(p.parentNode),o&&(h=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(h,m=>{m!==p&&r.reopenType(m)}),r.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),r.setFuncKeyCall(e),e){u&&[].forEach.call(u,T=>{T.parentNode.style.display!="none"&&T.dataset.src&&(T.src=T.dataset.src,delete T.dataset.src)}),r.allLists.forEach(T=>{T.style.visibility="hidden"}),r.con.classList.remove("search-jumper-scroll"),r.bar.style.cssText="",r.con.style.cssText="";let h=window.innerWidth||document.documentElement.clientWidth,m=document.documentElement.scrollLeft||document.body.scrollLeft,d=window.innerHeight||document.documentElement.clientHeight,f=c.prefConfig.tileOffset||0,y=gr(t)-r.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);y<0?y=5:y+r.bar.clientWidth>h+m&&(y=h+m-r.bar.clientWidth-20);let I=yr(t);mt(t)>d/5?I-=r.bar.clientHeight+20+f:I+=20+f,ft(t)<h/2?(r.bar.style.left=y+m+"px",r.bar.style.transformOrigin="0 0"):(r.bar.style.right=h-y-r.bar.clientWidth-15+"px",r.bar.style.transformOrigin="100% 0"),r.bar.style.top=I+"px",r.removeBar(),r.bar.style.opacity=0,setTimeout(()=>{r.appendBar(),setTimeout(()=>{r.bar.style.opacity=1,setTimeout(()=>{let T=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(T){let O=T.shadowRoot.querySelector(".saladbowl");O.style.transform=O.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else r.bar.style.display="",r.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?(this.tileInput.value=Ke(),this.con.classList.add("funcKeyCall"),this.bar.insertBefore(this.tileInput,this.bar.firstChild)):(this.tileInput.value="",this.con.classList.remove("funcKeyCall"),this.tileInput.parentNode&&this.tileInput.parentNode.removeChild(this.tileInput)))}initPos(e,t,i,r){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof i>"u"&&(i=c.prefConfig.offset.x),typeof r>"u"&&(r=c.prefConfig.offset.y);let s=this,n=a=>{if(s.bar.style.cssText="",s.con.style.cssText="",s.con.className="search-jumper-searchBarCon "+a,c.prefConfig.resizePage)switch(typeof s.initBodyStyle>"u"?s.initBodyStyle=Z(document).style.cssText:Z(document).style.cssText=s.initBodyStyle,s.con.classList.add("resizePage"),Z(document).style.position="absolute",a){case"search-jumper-left":Z(document).style.width=`calc(100vw - ${s.scale*42}px)`,Z(document).style.right="0px";break;case"search-jumper-right":Z(document).style.width=`calc(100vw - ${s.scale*42}px)`,Z(document).style.left="0px";break;case"search-jumper-bottom":Z(document).style.width="100%",Z(document).style.height=`calc(100vh - ${s.scale*42}px)`,Z(document).style.top="0px",Z(document).style.overflow="auto";break;default:Z(document).style.width="100%",Z(document).style.height=`calc(100vh - ${s.scale*42}px)`,Z(document).style.bottom="0px",Z(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&s.con.classList.add("hideAll");let o=s.scale*40;setTimeout(()=>{let p=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right");Se.forEach(u=>{if(!u.classList.contains("search-jumper-open"))p?(u.style.width="",u.style.height=o+"px"):(u.style.width=o+"px",u.style.height="");else{let h=Math.max(u.scrollWidth,u.scrollHeight);h&&(h+="px",p?(u.style.width="",u.style.height=h):(u.style.width=h,u.style.height=""))}})},1)};i<0&&(i=0),r<0&&(r=0),e=="center"&&t=="top"?(n(""),s.bar.style.position="relative"):e=="left"&&t=="top"?i>r?(n(""),s.bar.style.position="fixed",s.bar.style.left=i+"px"):(n("search-jumper-left"),s.bar.style.position="fixed",s.bar.style.top=r+"px"):e=="right"&&t=="top"?i>r?(n(""),s.bar.style.position="fixed",s.bar.style.right=i+"px"):(n("search-jumper-right"),s.bar.style.position="fixed",s.bar.style.top=r+"px"):e=="center"&&t=="bottom"?(n("search-jumper-bottom"),s.bar.style.position="relative"):e=="left"&&t=="bottom"?i>r?(n("search-jumper-bottom"),s.bar.style.position="fixed",s.bar.style.left=i+"px",s.bar.style.bottom="0px",s.bar.style.top="unset"):(n("search-jumper-left"),s.bar.style.position="fixed",s.bar.style.bottom=r+"px"):e=="right"&&t=="bottom"?i>r?(n("search-jumper-bottom"),s.bar.style.position="fixed",s.bar.style.right=i+"px",s.bar.style.bottom="0px",s.bar.style.top="unset"):(n("search-jumper-right"),s.bar.style.position="fixed",s.bar.style.bottom=r+"px"):e=="left"&&t=="center"?(n("search-jumper-left"),s.bar.style.position="relative",s.bar.style.marginTop=r+"px",s.con.style.display="flex",s.con.style.justifyContent="center"):e=="right"&&t=="center"&&(n("search-jumper-right"),s.bar.style.position="absolute",s.bar.style.marginTop=r+"px",s.con.style.display="flex",s.con.style.justifyContent="center",s.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=i,c.prefConfig.offset.y=r,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?s.checkScroll(!1,!0):setTimeout(()=>{let a=s.bar.querySelector(".search-jumper-type.search-jumper-open");a&&(a.style.transition="none",a.style.width="auto",a.style.height="auto",setTimeout(()=>{a.style.width=a.scrollWidth+"px",a.style.height=a.scrollHeight+"px",setTimeout(()=>{a.style.transition=""},1),s.checkScroll(!1,!0)},0))},251)}}class jr{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Ne(`
                 body.searchJumper-picker,
                 body.searchJumper-picker *:hover,
                 body.searchJumper-picker a:hover {
                   cursor: crosshair !important;
                 }
                 .select-rect {
                   position: fixed;
                   z-index: 2147483647;
                   background: none;
                   border: 1px dashed rgba(120, 170, 210, 0.8);
                 }
                 .select-rect>.dot {
                   width: 10px;
                   height: 10px;
                   border: 2px solid #000;
                   border-radius: 50%;
                   background-color: white;
                   position: absolute;
                 }
                 .select-rect>.top-left {
                   top: -5px;
                   left: -5px;
                 }
                 .select-rect>.top-right {
                   top: -5px;
                   right: -5px;
                 }
                 .select-rect>.bottom-left {
                   bottom: -5px;
                   left: -5px;
                 }
                 .select-rect>.bottom-right {
                   bottom: -5px;
                   right: -5px;
                 }
                 .select-rect>.top {
                   top: -5px;
                   left: calc(50% - 5px);
                 }
                 .select-rect>.right {
                   top: calc(50% - 5px);
                   right: -5px;
                 }
                 .select-rect>.left {
                   top: calc(50% - 5px);
                   left: -5px;
                 }
                 .select-rect>.bottom {
                   bottom: -5px;
                   left: calc(50% - 5px);
                 }
                `);let i=s=>{if(!s)return;if(e.callback){if(s){let a=e.geneSelector(s,e.exact);e.callback(a),e.close()}return}let n=e.createSignDiv();e.clickedEles[e.clickedIndex]=s,e.appendSign(n,s,e.clickedIndex),e.clickedIndex++,E.con.classList.add("selectedEle")},r;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=s=>{if(s.target!==document)if(e.inPicker&&s.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||Z(document).appendChild(e.selectRect),e.createSelectRect({x:s.clientX,y:s.clientY});else{if(e.creatingRect)return;{let n=e.getTarget(s.target);e.mainSignDiv.parentNode!==n.parentNode&&n.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,n),(s.ctrlKey||s.metaKey)&&(clearTimeout(r),r=setTimeout(()=>{let a=e.cleanTarget(s.target);i(a)},5))}}},this.leaveHandler=s=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=s=>{if(e.inPicker&&(s.stopPropagation(),s.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,E.bar.classList.remove("rectSelecting");return}let n=e.getTarget(s.target);i(n)},this.mouseDownHandler=s=>{e.rectSelecting=!0,E.bar.classList.add("rectSelecting"),e.rectInitPos={x:s.clientX,y:s.clientY},s.stopPropagation(),s.preventDefault()},this.mouseUpHandler=s=>{e.rectSelecting=!1,E.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),s&&s.stopPropagation&&s.stopPropagation(),s&&s.preventDefault&&s.preventDefault())},this.wheelHandler=s=>{if(s.preventDefault(),s.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let n;if(s.type!=="wheel"){let o=0;typeof s.axis=="number"?s.axis==2&&(o=s.detail):(typeof s.wheelDeltaY>"u"||s.wheelDeltaY!=0)&&(o=-s.wheelDelta/40),n=o}else n=s.deltaY;n>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let a=e.getTarget(s.target);e.mainSignDiv.parentNode!==a.parentNode&&a.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,a)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");e.innerHTML=ie(`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?E.con.classList.add("selectedEle"):E.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let i=t[0];if(i.dataset.recttemp)return;let r=i.getBoundingClientRect(),s=e.selectRect.getBoundingClientRect();e.compareRect(r,s)?(i.style.opacity="0",e.waitToRemoveSigns.push(i)):i.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let i=0;i<e.children.length;i++){let r=e.children[i];this.compareDomWithRect(r)&&t++}if(t===e.children.length){let i=e.target.getBoundingClientRect();if(i.width&&i.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.signDomWithRect(i)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let i=this.clickedEles[t];try{if(i==e||i.contains(e)||e.contains(i))return null}catch{return null}}return e}appendSign(e,t,i){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=i,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let s=0;s<this.signList.length;s++)if(this.signList[s][0]===e){this.signList.splice(s,1);break}let t=e.dataset.target,i=this.clickedEles[t];if(!i)return;let r=parseInt(i.dataset.signNum||0)-1;i.dataset.signNum=r,r<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let i=e.parentNode;if(!i)break;e=i,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),Z(document).classList.remove("searchJumper-picker"),E.con.classList.remove("selectedEle"),E.con.removeEventListener("mouseenter",this.leaveHandler,!0),Z(document).removeEventListener("mousemove",this.moveHandler,!0),Z(document).removeEventListener("click",this.clickHandler,!0),Z(document).removeEventListener("mousedown",this.mouseDownHandler,!0),Z(document).removeEventListener("mouseup",this.mouseUpHandler,!0),Z(document).removeEventListener(At(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,i){e.style.setProperty(t,i,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let i=t.offsetLeft,r=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let s=e.offsetParent.getBoundingClientRect(),n=t.offsetParent.getBoundingClientRect();i+=n.left-s.left,r+=n.top-s.top}this.setImportant(e,"left",i+"px"),this.setImportant(e,"top",r+"px")}geneSelector(e,t){let i=e.nodeName.toLowerCase();if(i!=="html"&&i!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))i="#"+e.id;else{if(e.className){let s=e.classList.length;i+=[].map.call(e.classList,n=>/^[a-z][\w]+$/i.test(n)||s<3&&/^[a-z\-_][\w\-_]+$/i.test(n)?"."+n:"").join("")}let r=e.parentElement;if(r&&(i=this.geneSelector(r,!!t)+" > "+i,t&&r.children.length>1&&!/^HTML$/i.test(r.nodeName))){let s,n=0,a=0;for(s=0;s<r.children.length&&!(r.children[s].nodeName==e.nodeName&&(a++,r.children[s]==e&&(n=a),n>0&&a>1));s++);i+=a==1?"":`:nth-of-type(${n})`}}return i}copy(){let e=this,t="",i="";this.signList.forEach(n=>{i+=`
`+n[1].innerText,t+=n[1].outerHTML}),i=i.trim();const r=new Blob([t],{type:"text/html"}),s=new Blob([i],{type:"text/plain"});try{const n=new ClipboardItem({"text/html":r,"text/plain":s});navigator.clipboard.write([n]).then(()=>{ke("Copied successfully!")},a=>{Fe(i),console.log(a)})}catch{Fe(i)}}getElements(){return!this.inPicker||!this.signList||this.signList.length===0?null:this.signList.map(e=>e[1])}openLinks(){if(!window.confirm(N("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let i=t[1];i.href?/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href):i.parentNode&&i.parentNode.href?/^(http|ftp)/i.test(i.parentNode.href)&&e.indexOf(i.parentNode.href)===-1&&e.push(i.parentNode.href):i.querySelectorAll&&[].forEach.call(i.querySelectorAll("a[href]"),r=>{/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href)})}),e.forEach(t=>{me(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t],r=e.geneSelector(i);i.dataset.signNum=0,[].forEach.call(document.querySelectorAll(r),s=>{let n=e.createSignDiv();Z(document).appendChild(n),e.appendSign(n,s,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let i=e.clickedEles[t];i.dataset.signNum=0;let r=e.createSignDiv();Z(document).appendChild(r),e.appendSign(r,i,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const i={};if(i.target=e,i.children=[],e.nodeType===Node.ELEMENT_NODE){const s=window.getComputedStyle(e);if(s.display==="none"&&s.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const r=e.childNodes;if(r.length>0){i.target=e,t.children.push(i);for(const s of r)(s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE)&&this.processNode(s,i)}else if(e.nodeType===Node.TEXT_NODE){const s=e.textContent.split(`
`),n=document.createRange();n.selectNodeContents(e);let a=0,o=e.parentNode,p=o.getBoundingClientRect();for(const u of s){if(u.trim()===""){a+=u.length+1;continue}n.setStart(e,a),a+=u.length,n.setEnd(e,a),a++;const h=n.getBoundingClientRect();let m=h.left-p.left,d=h.top-p.top,f=h.width,y=h.height,I={target:{innerText:u,outerHTML:u,parentNode:o,offsetLeft:m+o.offsetLeft,offsetTop:d+o.offsetTop,offsetWidth:f,offsetHeight:y,getBoundingClientRect:()=>{let T=o.getBoundingClientRect();return{left:T.left+m,top:T.top+d,right:T.left+m+f,bottom:T.top+d+y,width:f,height:y}}}};t.children.push(I)}}else e.nodeType===Node.ELEMENT_NODE&&(i.target=e,t.children.push(i));return i}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(Z(document),{children:[]}),Z(document).addEventListener("mousedown",this.mouseDownHandler,!0),Z(document).addEventListener("mouseup",this.mouseUpHandler,!0)):Z(document).addEventListener(At(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,Z(document).classList.add("searchJumper-picker"),E.con.addEventListener("mouseenter",this.leaveHandler,!0),Z(document).addEventListener("mousemove",this.moveHandler,!0),Z(document).addEventListener("click",this.clickHandler,!0)}}const je=new jr;function Er(l){if(!B)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);B.dispatchEvent(t),t=new KeyboardEvent("keyup",e),B.dispatchEvent(t),t=new KeyboardEvent("keypress",e),B.dispatchEvent(t),he(B,`press ${l||"Enter"}`)}async function Kt(l){return new Promise(e=>{let t=setInterval(()=>{let i=null;if(l?l==="@"?i=B:i=Ct(l):i=document.readyState==="complete",i===!1)return null;i&&(clearInterval(t),e(i))},100)})}async function Lr(l){return l?new Promise(e=>{let t=setInterval(()=>{Ct(l)||(clearInterval(t),e(null))},100)}):null}let ut=!1;async function Ui(l,e){if(!l)return!0;B=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const i=window.getSelection(),r=i.rangeCount?i.getRangeAt(0):new Range;r.selectNode(l),i.removeAllRanges(),i.addRange(r),await We(1),l.type!=="file"&&l.click&&l.click();let s=l.value;if(l.type=="file"){let h=e;if(h.indexOf("data:")==0)h=Gi(h);else{let d=new Blob([h],{type:"text/plain"});h=new File([d],"noname.txt",{type:d.type})}let m=new DataTransfer;m.items.add(h),l.files=m.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;n.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var a=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;a.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let h=l;for(;h&&h.contentEditable!=="true";)h=h.parentNode;if(h)h.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await We(1),l.innerText!==e&&(l.innerHTML=ie(e));else{let m=e;if(m.indexOf("data:")==0)m=Gi(m);else{let d=new Blob([m],{type:"text/plain"});m=new File([d],"noname.txt",{type:d.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(m),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let u=l._valueTracker;u&&u.setValue(s),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),he(l,"input")}async function Nt(l,e=-1){ut=!1;let t;if(e>=0){e===0&&await Kt(l);let i=ci(l);if(i.length===0)return!0;if(i.length===1)t=i[0],ut=!0;else{if(i.length<=e)return!0;t=i[e],i.length===e+1&&(ut=!0)}}else if(t=await Kt(l),!t)return!0;return t}async function Ki(l,e,t=-1){let i=await Nt(l,t);return i===!0?!0:(await Ui(i,e),ut)}async function qi(l,e=-1){let t=await Nt(l,e);if(t===!0)return!0;if(B=t,!PointerEvent)return t.click();let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r);let s=(n,a)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(a,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(a,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(a,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}n.dispatchEvent(o)};return s(t,"touchstart"),s(t,"touchend"),t.click(),he(t,`click ${l}`),ut}async function Pr(l,e=-1){let t=await Nt(l,e);if(t===!0)return!0;B=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),t.click(),t.click(),r=new MouseEvent("dblclick",{...i,view:Te}),t.dispatchEvent(r),he(t,`dblclick ${l}`),ut}async function Mr(l,e=-1){let t=await Nt(l,e);if(t===!0)return!0;B=t;let i={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var r=new PointerEvent("mouseover",i);return t.dispatchEvent(r),r=new PointerEvent("pointerover",i),t.dispatchEvent(r),r=new PointerEvent("mousedown",i),t.dispatchEvent(r),r=new PointerEvent("pointerdown",i),t.dispatchEvent(r),r=new PointerEvent("mouseup",i),t.dispatchEvent(r),r=new PointerEvent("pointerup",i),t.dispatchEvent(r),r=new PointerEvent("contextmenu",i),t.dispatchEvent(r),he(t,`rclick ${l}`),ut}async function qt(l,e){if(B)if(B.focus(),typeof l.value<"u"){const t=l.selectionStart,i=l.selectionEnd;let r=l.value.substring(0,t)+e+l.value.substring(i,l.value.length);await Ui(l,r),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),i=t.getRangeAt(0);t.toString()||i.selectNode(l.childNodes.length===1?l.firstChild:l),i.deleteContents(),i.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(i)}}function Gt(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),gt={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){gt={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},er();return}const i="searchJumper_form";var r=document.getElementById(i);r||(r=document.createElement("form"),r.id=i,r.style.display="none",document.documentElement.appendChild(r));var s;let n=e.match(/[:%]p{(.*?)}/),a=e;return n?(a=e.replace(n[0],""),n=n[1],r.method="post",s=new URLSearchParams(n)):(r.method="get",s=new URLSearchParams(new URL(a).search)),l&&(r.acceptCharset=l),r.innerHTML=ie(),r.target=t,r.action=a,s.forEach((o,p)=>{let u=document.createElement("input");u.name=p,u.value=o,r.appendChild(u)}),r.submit()}function Gi(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],i=atob(e[1]),r=i.length,s=new Uint8Array(r);r--;)s[r]=i.charCodeAt(r)}catch(a){he(a)}let n=t.split("/");return n=n.length>1?n[1]:n[0],new File([s],"image."+n,{type:t})}async function Vi(l){if(!l||(l.dataset.src&&(l.src=l.dataset.src),!l.src))return null;if(l.src.split("/")[2]==document.domain){let r=getComputedStyle(l);var t=document.createElement("canvas"),i=t.getContext("2d");if(l.complete){t.width=l.naturalWidth||l.width||parseInt(r.width),t.height=l.naturalHeight||l.height||parseInt(r.height),i.drawImage(l,0,0);try{return t.toDataURL("image/png")}catch{return await Vt(l.src)}}else return await new Promise(s=>{l.addEventListener("load",async n=>{t.width=l.naturalWidth||l.width||parseInt(r.width),t.height=l.naturalHeight||l.height||parseInt(r.height),i.drawImage(l,0,0);try{s(t.toDataURL("image/png"))}catch{s(await Vt(l.src))}})})}else return await Vt(l.src)}async function Vt(l){let e=l.split("/");return new Promise(t=>{$e({method:"GET",url:l,responseType:"blob",headers:{origin:e[0]+"//"+e[2],referer:location.href,accept:"*/*"},onload:function(i){try{var r=i.response,s=new FileReader;s.readAsDataURL(r),s.onload=function(n){t(n.target.result)}}catch{t(null)}},onerror:function(){t(null)},ontimeout:function(){t(null)}})})}function Nr(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var i=document.createElement("canvas");i.width=l.clientWidth||parseInt(e.lineHeight),i.height=l.clientHeight||parseInt(e.lineHeight);var r=i.getContext("2d");r.font=e.font,r.strokeStyle=e.color||"black",r.fillStyle=e.color||"black",r.textBaseline="top";let s=r.measureText(t);return r.fillText(t,(i.width-s.width)/2,(i.height-parseInt(e.fontSize))/2),i.toDataURL("image/png")}function Br(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(ye[e])return;let t=Nr(l);t=="data:,"||!t||(ye[e]=t,K.setItem("cacheIcon",ye))}async function yi(l){if(l.nodeName.toUpperCase()=="IMG"){let e=l.src||l.dataset.src;if(e){if(ye[e])return;let t=await Vi(l);(t=="data:,"||!t)&&(t="fail"),ye[e]=t,K.setItem("cacheIcon",ye),he(e+" cached, left "+He.length+" icons")}}else Br(l);await new Promise(e=>{setTimeout(()=>{e(!0)},1)})}async function Bt(){for(;He.length>0;)await yi(He.shift())}async function Yi(l){if(c.prefConfig.cacheSwitch){let e=He.length>0;await Promise.all([Bt(),Bt(),Bt(),Bt(),Bt()]),e&&(l&&ke(N("cacheOver")),he(N("cacheOver")))}}async function _i(l){if(!rt){E.con.classList.add("in-input"),E.con.style.visibility="hidden",E.con.style.display="",E.appendBar(),await We(2e3);let e=Ot.length>0;for(;Ot.length>0;)await yi(Ot.shift());e&&he("All font icons cached!")}}function De(){let l=St||je.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{St=""},1),!l){let e=window.getSelection();e&&e.rangeCount&&(e=e.getRangeAt(0),e&&(e=e.cloneContents(),e&&(l=e.textContent)))}if(!l){let e=pi(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,i=e.selectionEnd;(t||i)&&(l=e.value.substring(t,i))}}if(l){if(l=l.trim(),l)return l}else if(B&&B.className==="searchJumper"&&/^MARK$/i.test(B.nodeName))return B.dataset.matched||B.innerText;return""}function Yt(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function bi(l,e,t,i){if(l.indexOf(e+".replace(/")!==-1){let r=l.match(Yt(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return r?(t=t.replace(new RegExp(r[1],r[2]),r[3]||""),l=l.replace(r[0],e),bi(l,e,t,i)):l.replace(Yt(e,"g"),i?i(t):t)}else return l.replace(Yt(e,"g"),i?i(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function Ke(){let l=De();if(l)return l;if(!ce)return Ue||"";let e,t="",i=!ce.charset||ce.charset=="UTF-8";try{if(ce.keywords){let r=ce.keywords.split(`
`);for(let s=0;s<r.length;s++){let n=r[s];if(!n||!n.trim())continue;let a=r[s].match(/^(.*?)\.replace\(\//);if(a&&(n=a[1]),i){if(/^\w[\w\|]*$/.test(n)){let o=n.split("|"),p=new URLSearchParams(location.search);for(let u=0;u<o.length&&(t=p.get(o[u]),!t);u++);}else if(/\(.+\)/.test(n)&&n.indexOf("@")!==0)try{e=de.match(new RegExp(n)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&Z(document))try{let o=Ct(n);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&a&&(t=bi(r[s],n,t)),t)break}}else if(i&&bt.test(ce.url)&&!/[#:%]p{/.test(ce.url)&&(de.indexOf("?")!=-1&&(e=ce.url.match(new RegExp(`[\\?&]([^&]*?)=${mi}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=ce.url.match(new RegExp(`https?://[^/]*/(.*)${mi}`)),e&&(e=de.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&Z(document)){let r=Z(document).querySelector("input[type=text]:not([readonly]),input:not([type])");r&&(t=r.value)}t&&(Ue=t)}catch(r){he(r)}return Ue||"";//!localKeywords ? cacheKeywords : localKeywords;
}function Zi(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var i;e.hasAttribute(l)||(i=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",i&&e.removeAttribute(l)}return t}function At(){var l="DOMMouseScroll";return Zi("wheel")?l="wheel":Zi("mousewheel")&&(l="mousewheel"),l}let xt=!1,St="";function Ar(){lt(N("settings"),()=>{me(it,{active:!0,insert:!0})}),lt(N("searchInPage"),()=>{E.showInPage(),E.showInPageSearch()}),lt(N("search"),()=>{E.searchAuto(0,{})}),lt(N("addSearchEngine"),()=>{let x=document.head.querySelector('[rel="search"]');if(x)ar(x.href,(P,J)=>{if(P!="load"){J&&he(J.statusText||J.error||J.response||J);let $=Z(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||Z(document).querySelector("textarea");xi($)}});else{let P=Z(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||Z(document).querySelector("textarea");xi(P)}}),document.addEventListener("searchJumper",x=>{switch(x.detail.action){case"search":x.detail.query&&(St=x.detail.query),x.detail.name?E.searchBySiteName(x.detail.name,x.detail.key||{}):E.searchAuto(x.detail.index,x.detail.key||{});break;case"show":E.setFuncKeyCall(!1),E.showInPage(),(!c.prefConfig.disableInputOnWords||E.inInput||!De())&&E.showSearchInput();break;case"showAll":E.appendBar(),E.showAllSites();break}}),B=Z(document);let l=pt.children[0],e=0,t,i=!1,r=x=>{if(clearTimeout(t),E.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",n,!1),E.bar.style.marginLeft="",E.bar.style.marginTop="",E.bar.style.transform="",e===1){e=0,E.showAllSites();return}e=0;let P=window.innerWidth||document.documentElement.clientWidth,J=window.innerHeight||document.documentElement.clientHeight,$=P/3,F=J/3,A,b,w,M,L=ft(x),U=mt(x);L<$?(A="left",w=parseInt(E.bar.style.left)>0?parseInt(E.bar.style.left):0):L<$*2?(A="center",w=parseInt(E.bar.style.left)-P/2):(A="right",w=P-parseInt(E.bar.style.left)-E.bar.scrollWidth),U<J/2?(b="top",M=parseInt(E.bar.style.top)):(b="bottom",M=J-parseInt(E.bar.style.top)-E.bar.scrollHeight,M<0&&(M=0)),l.style.cursor="",E.closeOpenType(),E.initPos(A,b,w,M),K.setItem("searchData",c)},s={x:0,y:0},n=x=>{let P=ft(x),J=mt(x);Math.abs(s.x-P)+Math.abs(s.y-J)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",E.bar.style.position="fixed",E.bar.style.marginLeft="0",E.bar.style.marginTop="0",E.bar.style.right="",E.bar.style.bottom="",E.bar.style.transform="unset",E.con.classList.remove("search-jumper-scroll"),E.bar.className="search-jumper-searchBar grabbing"),e=2,E.bar.style.left=P-E.bar.scrollWidth+20+"px",E.bar.style.top=J-E.bar.scrollHeight+20+"px")};if(pt.oncontextmenu=function(x){E.bar.style.display="none",x.preventDefault()},pt.addEventListener("mousedown",x=>{if(i){i=!1;return}if(x.button===2){c.prefConfig.resizePage&&(typeof E.initBodyStyle<"u"&&(Z(document).style.cssText=E.initBodyStyle),E.con.classList.remove("resizePage")),document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",n,!1);return}if(x.preventDefault(),x.stopPropagation(),E.inInput||x.button===1||x.altKey||x.ctrlKey||x.shiftKey||x.metaKey){me(it,{active:!0,insert:!0});return}e=1,s={x:ft(x),y:mt(x)},document.addEventListener("mouseup",r,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",n,!1)},100),t=setTimeout(()=>{E.bar.style.display="none",document.removeEventListener("mouseup",r,!1),document.removeEventListener("mousemove",n,!1)},2e3)},!1),pt.addEventListener("touchstart",x=>{x.preventDefault(),x.stopPropagation(),i=!0,e=1,s={x:ft(x),y:mt(x)},document.addEventListener("touchend",r,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",n,!1)},100),t=setTimeout(()=>{E.bar.style.display="none",c.prefConfig.resizePage&&(typeof E.initBodyStyle<"u"&&(Z(document).style.cssText=E.initBodyStyle),E.con.classList.remove("resizePage")),document.removeEventListener("touchend",r,!1),document.removeEventListener("touchmove",n,!1)},1500)},{passive:!1,capture:!1}),E.bar.addEventListener(At(),x=>{if(x.stopPropagation(),x.target.parentNode&&(x.target.parentNode.className=="sitelistCon"||x.target.parentNode.parentNode&&x.target.parentNode.parentNode.className=="sitelistCon"))return;let P=E.con.classList;if(P.contains("search-jumper-scroll")&&!(P.contains("search-jumper-left")||P.contains("search-jumper-right"))){var J,$;if(x.type!=="wheel"){var F=0,A=0;typeof x.axis=="number"?x.axis==2?A=x.detail:F=x.detail:typeof x.wheelDeltaY>"u"||x.wheelDeltaY!=0?A=-x.wheelDelta/40:F=-x.wheelDelta/40,$=A,J=F}else J=x.deltaX,$=x.deltaY;x.preventDefault(),E.con.scrollLeft+=$}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let x=-1,P=!1,J=($,F,A,b,w,M)=>F&&!$.altKey||A&&!$.ctrlKey||b&&!$.shiftKey||w&&!$.metaKey||(P||(P=($.key||String.fromCharCode($.keyCode)).toLowerCase()),M!=P&&M!=$.code)||!c.prefConfig.enableInInput&&x==-1&&(x=1,!A&&!F&&!b&&!w&&jt(document))?!1:(x=0,$.preventDefault(),$.stopPropagation(),!0);document.addEventListener("mouseenter",$=>{$.target&&!E.contains($.target)&&(gi=$.target)},!0),document.addEventListener("keydown",$=>{if($.target.id!=="searchJumperInput"&&(x=-1,P=!1,c.prefConfig.shortcutKey&&J($,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(E.setFuncKeyCall(!1),E.showInPage(),(!c.prefConfig.disableInputOnWords||E.inInput||!De())&&E.showSearchInput()),x!=1&&(c.prefConfig.showAllShortcutKey&&J($,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(E.appendBar(),E.showAllSites()),ce&&E.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&J($,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){E.switchSite();return}c.prefConfig.switchSitesNextKey&&J($,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&E.switchSite(!0)}},!0)}let a;if(c.prefConfig.enableInPage){let A=function(w){let M=!1;if(jt(document))M=!0;else{let L=!1,U=w;for(;U&&(L=U.contentEditable=="true",!(L||U.nodeName.toUpperCase()=="BODY"));)U=U.parentNode;L&&(M=!0)}return M},x=!1,P,J=!1,$;document.addEventListener("selectionchange",w=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?$=window.getSelection().getRangeAt(0).getBoundingClientRect():$=null)});let F=!1;a=w=>{x&&w.preventDefault(),x=!1,document.removeEventListener("click",a,!0)};let b=w=>{if(F&&w.type==="mousedown"&&w.button===0||w.target.classList&&w.target.classList.contains("search-jumper-btn")||E.contains(w.target)||E.bar.classList.contains("grabbing"))return;let M=A(w.target),L=!c.prefConfig.enableInInput&&M;if(L&&w.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(M?E.con.classList.add("targetInput"):E.con.classList.remove("targetInput")),w.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{De()?E.showInPage(!0,w):E.waitForHide(0)},0);return}F=!0,setTimeout(()=>{F=!1},500),x=!1,B=w.target,E.closePopupWindow();let U=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!w.altKey||c.prefConfig.ctrlKey&&!w.ctrlKey||c.prefConfig.shiftKey&&!w.shiftKey||c.prefConfig.metaKey&&!w.metaKey)&&(U=!0),!c.prefConfig.selectToShow&&(w.button===0&&!c.prefConfig.leftMouse||w.button===1&&!c.prefConfig.middleMouse)){E.waitForHide(0);return}let Q=w.clientX,ne=w.clientY,ae=!1,S=_=>{Math.abs(Q-_.clientX)+Math.abs(ne-_.clientY)>2&&(clearTimeout(P),document.removeEventListener("mousemove",S,!0),_.target.removeEventListener("scroll",H),ae=!0)},H=_=>{clearTimeout(P),document.removeEventListener("mousemove",S,!0),_.target.removeEventListener("scroll",H)},R=_=>{xt=!1,E.contains(_.target)||x?_.preventDefault():setTimeout(()=>{x||/^pv-/.test(_.target.className)||(M=A(_.target),L=!c.prefConfig.enableInInput&&M,!L&&(U&&_.button===2||(ae||J)&&_.button===0&&c.prefConfig.selectToShow&&De())?E.showInPage(!0,_):(F=!1,E.waitForHide(0)))},0),clearTimeout(P),document.removeEventListener("mouseup",R,!0),document.removeEventListener("mousemove",S,!0),_.target.removeEventListener("scroll",H)};if(w.type==="dblclick"){De()!==""?(x=!0,xt=!1,document.removeEventListener("mouseup",R,!0),document.removeEventListener("mousemove",S,!0),w.target.removeEventListener("scroll",H),clearTimeout(P),setTimeout(()=>{E.showInPage(!0,w)},200)):(J=!0,setTimeout(()=>{J=!1},200));return}P&&clearTimeout(P),P=setTimeout(()=>{xt||B==w.target&&(w.button===1&&!c.prefConfig.middleMouse||w.button===2&&!c.prefConfig.rightMouse||w.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?E.showInPage(!0,w):(E.setFuncKeyCall(!1),E.showInPage()),x=!0))},parseInt(c.prefConfig.longPressTime));let Y=!1;if(w.button===2?U&&(Y=!0):(w.button===0?c.prefConfig.leftMouse&&(Y=!0):w.button===1&&c.prefConfig.middleMouse&&(Y=!0),Y&&(L?Y=!1:$?(w.clientX<$.left||w.clientX>$.left+$.width||w.clientY<$.top||w.clientY>$.top+$.height)&&(Y=!1):Y=!1)),Y)return setTimeout(()=>{xt||E.showInPage(!0,w),document.removeEventListener("mousemove",S,!0),w.target.removeEventListener("scroll",H)},200),x=!0,document.addEventListener("mouseup",R,!0),document.addEventListener("click",a,!0),!1;document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",R,!0),w.target.addEventListener("scroll",H)};if(document.addEventListener("mousedown",b,!0),document.addEventListener("dblclick",b,!0),c.prefConfig.selectToShow){let w,M,L=U=>{clearTimeout(w),w=setTimeout(()=>{window.getSelection().toString()&&(b(M),document.removeEventListener("selectionchange",L))},300)};document.addEventListener("touchstart",U=>{U.isTrusted!==!1&&(M=U,document.addEventListener("selectionchange",L))})}document.addEventListener("contextmenu",w=>{x&&w.preventDefault(),x=!1})}c.prefConfig.dragToSearch&&!ot&&Z(document).addEventListener("dragstart",x=>{!x.isTrusted||c.prefConfig.dragAlt&&!x.altKey||c.prefConfig.dragCtrl&&!x.ctrlKey||c.prefConfig.dragShift&&!x.shiftKey||c.prefConfig.dragMeta&&!x.metaKey||!c.prefConfig.enableInInput&&!x.altKey&&!x.ctrlKey&&!x.shiftKey&&!x.metaKey&&jt(document)||(B=x.target,B.nodeType!==1&&(B=B.parentNode),B.shadowRoot&&(B=B.shadowRoot.activeElement||B),!(B.getAttribute&&B.getAttribute("draggable")=="true")&&(B.parentNode&&B.parentNode.getAttribute&&B.parentNode.getAttribute("draggable")=="true"||(E.funcKeyCall=!0,E.waitForHide(0),setTimeout(()=>{Rr(x.clientX,x.clientY)},2),a&&document.removeEventListener("click",a,!0),xt=!0)))}),c.prefConfig.quickAddRule&&document.addEventListener("click",x=>{((x.ctrlKey||x.metaKey)&&x.shiftKey||(x.ctrlKey||x.metaKey)&&x.altKey||x.altKey&&x.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(x.target.nodeName)&&(/^INPUT$/i.test(x.target.nodeName)&&x.target.type&&x.target.type!="text"&&x.target.type!="search"||xi(x.target))},!0);let o,p=x=>{clearTimeout(o),o=setTimeout(()=>{E.refresh()},100)};document.addEventListener("fullscreenchange",x=>{document.fullscreenElement&&(E.bar.style.display="none")});let u=!1,h=x=>{if(u)return;u=!0,setTimeout(()=>{u=!1},300);let P=x.target;if(ce&&P)if(P.nodeName&&P.nodeName.toLowerCase&&P.nodeName.toLowerCase()=="a")E.updateCacheKeywords(),K.setItem("clickLink",P.href);else{let J=P.parentNode;J&&J.nodeName&&J.nodeName.toLowerCase&&J.nodeName.toLowerCase()=="a"&&(E.updateCacheKeywords(),K.setItem("clickLink",P.href))}};Z(document).addEventListener("auxclick",h,!0),Z(document).addEventListener("click",h,!0);let m=function(x){var P=history[x];return function(){var J=P.apply(this,arguments);let $=location.href.slice(0,500);if(de!=$){de=$;var F=new Event("sj_"+x);F.arguments=arguments,window.dispatchEvent(F)}return J}};window.addEventListener("sj_pushState",p),window.addEventListener("sj_replaceState",p),window.addEventListener("yt-navigate-finish",p),window.addEventListener("securitypolicyviolation",x=>{x.violatedDirective==="form-action"&&er()});let d=window.location.href,f=x=>E.removeMark(x),y=(x,P)=>E.highlight(x,P),I=()=>E.appendBar(),T={childList:!0,characterData:!0,subtree:!0},O=0;new MutationObserver((x,P)=>{if(x.some(F=>F.type==="childList"||F.type==="attributes")){const F=window.location.href;F!==d&&(d=F,p(),E.checkDiscussions())}if(E.lockWords){if(E.initHighlight&&O>100)return;for(let F of x){if(F.type==="characterData"){let A=F.target.parentNode;if(!A)return;let b=F.target.previousElementSibling;if(b&&!b.dataset.inited&&b.className==="searchJumper"){b.dataset.inited=!0;return}if(b=F.target.nextElementSibling,b&&!b.dataset.inited&&b.className==="searchJumper"){b.dataset.inited=!0;return}E.checkCharacterData(A),E.initHighlight&&O++}if(F.removedNodes.length&&[].forEach.call(F.removedNodes,A=>{A.nodeType===1&&(A.classList&&A.classList.contains("searchJumper")?f(A):A.children.length&&[].forEach.call(A.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),b=>{f(b)}))}),F.addedNodes.length)for(let A=0;A<F.addedNodes.length;A++){let b=F.addedNodes[A],w;if(b.nodeType===1){if(/^searchJumper$/.test(b.className))continue;w=b}else{if(b.previousElementSibling&&/^searchJumper$/.test(b.previousElementSibling.className))continue;if(b.nextElementSibling&&/^searchJumper$/.test(b.nextElementSibling.className))continue;w=b.parentNode}w&&(setTimeout(()=>{y("insert",w)},0),E.initHighlight&&O++)}}I()}}).observe(Z(document),T)}function Xi(l,e){if(!l)return"";let t,i;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),i=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");i=o?o.href:location.href}let r=i||t;r=r.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(r)&&(r=r+"/"),r.indexOf("http")!==0&&(r=t+r);var s=/^[^\?#]*\//.exec(r)[0],n=/^\w+\:\/\/\/?[^\/]+/.exec(s)[0],a=/^\w+\:\/\//;for(l=l.replace(/^\/(\.\.\/)+/,"/");l.indexOf("../")===0;)l=l.substr(3),s=s.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),a.test(l)?l:(l.charAt(0)=="/"?n:s)+l}function xi(l){if(Ie)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let s=e.target;if(s&&typeof s=="string"&&s!="_blank"&&s!="_self"&&s!="_parent"&&s!="_top"&&!Z(document).querySelector(s)){e=null;break}break}e=e.parentNode}let i=()=>!window.confirm(N("noValidItemAsk"));if(e){t=Xi(e.getAttribute("action")||t);let s=[],n=new FormData(e);for(let[a,o]of n)l.name===a?o="%s":o=encodeURIComponent(o),s.push(a+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+s.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let a=t.match(/\?(.*)/);a&&(t=t.replace(a[0],""),a[1].split("&").forEach(o=>{let p=o.split("="),u=p[0];if(s.findIndex(m=>m.indexOf(u+"=")===0)!==-1)return;let h=p[1];h==l.value&&(h="%s"),s.push(u+"="+h)})),t+="?"+s.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let s=encodeURIComponent(l.value);if(location.pathname.indexOf(s)!==-1||location.search.indexOf(s)!==-1)t=location.origin+location.pathname.replace(s,"%s")+location.search.replace(s,"%s");else if(s=escape&&escape(l.value),s&&location.pathname.indexOf(s)!==-1||location.search.indexOf(s)!==-1)t=location.origin+location.pathname.replace(s,"%se")+location.search.replace(s,"%se");else if(i())return}else if(i())return;let r=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),s=>{r.indexOf&&r.indexOf(s.href)!==-1||r.push(s.href)}),si(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,r,document.characterSet)}const Qi="https://hoothin.github.io/SearchJumper/jump.html";function er(){if(!gt||!gt.url)return;let l=`${Qi}#jump{url=${encodeURIComponent(gt.url)}&charset=${gt.charset}}`;gt.target=="_self"?location.href=l:me(l,{active:!0,insert:!0})}function $r(){if(de.indexOf(Qi)!=-1){let l=de.match(/#jump{url=(.*)&charset=(.*)}/);l&&Gt(l[2],decodeURIComponent(l[1]),"_self")}}var Ie;async function Wr(){if(de.indexOf(it)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){Ie=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(Ie)try{if(Ie=Ie.getAttribute("content"),Ie.indexOf("http")===0){if(l){const i=N("loadingCollection");l.innerText=i,l.setAttribute("spotlight",i)}let t=await new Promise(i=>{$e({method:"GET",url:Ie,onload:function(r){var s=null;try{s=JSON.parse(r.responseText),i(s)}catch(n){console.log(n),i(!1)}},onerror:function(r){console.log(r),i(!1)},ontimeout:function(r){console.log(r),i(!1)}})});t?(c.sitesConfig=t,Ie=!0):Ie=!1}else c.sitesConfig=JSON.parse(decodeURI(Ie)),Ie=!0}catch{Ie=!1}let e=de.indexOf(it.replace(/\/config.*/,""))===0||de.indexOf(nt)===0||de.indexOf(cr)===0||location.hostname==="localhost";return e&&(rt=!!Ie||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e}return!1}async function Dr(){if(ot=await Wr(),!ot&&c.webdavConfig&&(ct=new ur(c.webdavConfig.host+"/SearchJumper"+(c.webdavConfig.path||"").replace(/^\/*/,"/").replace(/\/*$/,"/"),c.webdavConfig.username,c.webdavConfig.password)),ot&&!rt){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({searchData:c,cacheIcon:ye,version:dt.script.version||0,command:"loadConfig"},"*")},i=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",n=>{e=!0,clearTimeout(l),clearTimeout(i),He.length>0&&c.prefConfig.cacheSwitch&&(he(`Start cache ${He.length} icons!`),Yi())}),document.addEventListener("downloadCache",n=>{Hr()}),document.addEventListener("importCache",n=>{let a=n.detail?n.detail.cacheData:n.cacheData;zr(a),ke("Cache imported successfully!")}),document.addEventListener("showSiteAdd",n=>{let a=n.detail?n.detail.site:n.site;a&&(a.url?si(a.name,a.description,a.url,a.icon?[a.icon]:[],a.charset,a.kwFilter,a.match,a.hideNotMatch):tr.open(a))}),t(),document.addEventListener("dataChanged",n=>{t()});let r=(n,a,o,p)=>{window.postMessage({url:n,name:a,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",n=>{let a=n.detail?n.detail.url:n.url,o=n.detail?n.detail.name:n.name;$e({method:"GET",url:a,headers:{referer:a,"User-Agent":navigator.userAgent},onload:function(p){r(a,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){r(a,o,"error","")},ontimeout:function(p){r(a,o,"timeout","")}})});let s=c.prefConfig.cacheSwitch;document.addEventListener("saveConfig",n=>{c=(n.detail?n.detail.searchData:n.searchData)||Te.searchData,K.setItem("searchData",c);let a={},o=ye?Object.keys(ye).length:0;s==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let u=p.icon.trim().replace(/ /g,"_"),h=ye[u];h&&(a[u]=h)}p.sites.forEach(u=>{let h=u.icon;if(h||(h=u.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(h)){let m=ye[h];m&&(a[h]=m)}})}),o!==Object.keys(a).length&&(ye=a,K.setItem("cacheIcon",a))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let u=ye[p.icon];if(u)if(u==="fail"){let h=document.createElement("img");h.src=p.icon,He.push(h)}else a[p.icon]=u}p.sites.forEach(u=>{let h=u.icon;if(h||(h=u.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(h)){let m=ye[h];if(m)if(m==="fail"){let d=document.createElement("img");d.src=h,He.push(d)}else a[h]=m}})}),K.setItem("cacheIcon",a),c.prefConfig.cacheSwitch&&(He.length>0&&(ke(N("startCache")),Yi(!0)),_i())),s=c.prefConfig.cacheSwitch,(n.notification||n.detail&&n.detail.notification)&&ke("Configuration imported successfully!")}),document.addEventListener("copyConfig",n=>{let a=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));Fe(JSON.stringify(a,null,2)),ke("Configuration copied successfully!")})}else if(Bi.test(de)){let l=Ne(`
                    #import-btns-con {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                    }
                    #import-btns-con.hide {
                        pointer-events: none;
                    }
                    #import-btns-con>button {
                        opacity: 0.5;
                    }
                    #import-btns-con>button:hover {
                        opacity: 0.9;
                    }
                    #import-btn {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        right: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    #filter-btn {
                        position: absolute;
                        display: none;
                        font-size: 20px;
                        left: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    .filter>#filter-btn {
                        display: block;
                    }
                    #import-btns-con>h3 {
                        float: left;
                        margin-left: 20px;
                    }
                    #import-btns-con.hide>h3 {
                        display: none;
                    }
                `),e,t=0,i=document.createElement("button");i.id="import-btn",i.className="btn Button--secondary Button";let r=document.createElement("button");r.id="filter-btn",r.className="btn Button--secondary Button";let s=document.createElement("h3"),n=document.createElement("div");n.id="import-btns-con",n.appendChild(l),n.appendChild(i),n.appendChild(r),n.appendChild(s),n.addEventListener("click",o=>{e&&(e.style.filter=""),n.classList.add("hide")}),i.innerText=N("import"),i.addEventListener("click",o=>{if(Ie||!e)return;let p=e.innerText.trim(),u;if(p){try{u=JSON.parse(p)}catch(h){ke(h.toString());return}switch(t){case 0:window.confirm(N("importOrNot"))&&(n.parentNode&&n.parentNode.removeChild(n),Ht(()=>{c.sitesConfig=u,c.lastModified=new Date().getTime(),K.setItem("searchData",c),ke(N("siteAddOver")),E.refreshEngines()},!0));break;case 1:si(u.name,"",u.url,u.icon?[u.icon]:[],u.charset,u.kwFilter,u.match,u.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(u).forEach(h=>{let m=u[h];if(!m)return;if(h.indexOf("@")===0){c.prefConfig.inPageRule[h]=m;return}if(!m.words||m.words.length===0)return;let d="",f=m.sep||"";f?d="$c"+f:(f=" ",m.words.length===1&&m.words[0].indexOf(" ")!==-1&&(f="",d="$o")),c.prefConfig.inPageRule[h]=d+m.words.join(f)}),K.setItem("searchData",c),ke("Over!");break}}}),r.innerText=N("filter"),r.addEventListener("click",o=>{if(e){n.parentNode&&n.parentNode.removeChild(n);let p=e.innerText.trim(),u;if(!p||p.indexOf("[")!==0)return;try{u=JSON.parse(p),tr.open(u)}catch(h){ke(h.toString())}}});let a=o=>{if(o==e&&n.parentNode)return;let p=o.offsetTop+"px",u=o.innerText.trim();if(u){if(s.innerText="",/^\[/.test(u))t=0,n.style.top=p,n.classList.add("filter");else if(/^\{\s*"name"/.test(u))t=1,n.style.top=p,n.classList.remove("filter"),s.innerText=u.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(u))t=2,n.style.top=p,n.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(n),o.style.filter="blur(5px)",e=o,n.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&a(p)}}),document.addEventListener("mouseover",o=>{if(Bi.test(de))if(o.target.nodeName==="PRE")a(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&a(p)}})}}class Jr{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
                    #searchJumperFilter {
                        width: 100%;
                        height: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 100000;
                        background-color: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(5px);
                        transform: translateZ(0);
                    }
                    .searchJumperFrame-body {
                        width: 350px;
                        text-align: left;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-body>.sitesCon {
                        max-height: 70vh;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                        padding: 5px;
                        user-select: none;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>span,
                    .searchJumperFrame-body>.sitesCon>details>div>span {
                        line-height: 25px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 180px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>button {
                        display: none;
                        position: absolute;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary:hover>button {
                        display: inline-block;
                    }
                    .searchJumperFrame-body>.sitesCon input {
                        margin: 2px 5px;
                        width: 20px;
                        height: 20px;
                        vertical-align: sub;
                    }
                    .searchJumperFrame-body>.sitesCon div {
                        margin-left: 32px;
                    }
                    .searchJumperFrame-body>.sitesCon div.exist {
                        text-decoration:line-through;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black;
                        color: #d5d5d5;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                    }
                `,this.filterCssEle=Ne(this.filterCss),this.filterFrame=document.createElement("div"),this.filterFrame.id="searchJumperFilter",this.filterFrame.innerHTML=ie(`
                <div class="searchJumperFrame-body">
                    <a href="${nt}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${yt}" />${N("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${N("expandAll")}</button>
                        <button id="collapseAll" type="button">${N("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${N("siteCancel")}</button>
                        <button id="selectAll" type="button">${N("selectAll")}</button>
                        <button id="add" type="button">${N("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),i=this.filterFrame.querySelector("#selectAll"),r=this.filterFrame.querySelector("#expandAll"),s=this.filterFrame.querySelector("#collapseAll"),n=!1;r.addEventListener("click",a=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),s.addEventListener("click",a=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),i.addEventListener("click",a=>{n=!n,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=n})}),t.addEventListener("click",a=>{Ie||Ht(()=>{let o=!1;[].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let u=p.children[0].children[0],h=e.typeDict[u.title];if(h.type=u.innerText.trim(),h.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),m=>{if(m.checked){o=!0;let d=e.siteDict[m.parentNode.title],f=m.nextElementSibling;if(!d||!f)return;if(f.value==="0")h.sites.push(d);else{let y=e.searchType(f.value);c.sitesConfig[y].sites.push(d)}}}),h.sites.length){let m=e.searchType(h.type);m===!1?c.sitesConfig.push(h):c.sitesConfig[m].sites=c.sitesConfig[m].sites.concat(h.sites)}}),o&&(c.lastModified=new Date().getTime(),K.setItem("searchData",c),ke(N("siteAddOver")),E.refreshEngines(),this.close())})}),this.filterFrame.addEventListener("click",a=>{(a.target.id=="searchJumperFilter"||a.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let i=c.sitesConfig[t].sites;for(let r=0;r<i.length;r++)if(i[r].name==e){let s=e+"_1";return this.searchName(s)}}return e}anylizeType(e){let t=this,i=document.createElement("details"),r=document.createElement("summary"),s=document.createElement("span");s.title=e.type,s.innerText=e.type,r.appendChild(s);let n=document.createElement("input");n.type="checkbox",r.appendChild(n);let a=document.createElement("button");a.innerText=N("rename"),a.addEventListener("click",p=>{let u=window.prompt(N("rename"),s.innerText);u&&(s.innerText=u)}),r.appendChild(a),i.appendChild(r);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){i.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let u=document.createElement("div"),h=document.createElement("span");if(h.innerText=p.name,p.name=t.searchName(p.name),u.appendChild(h),u.title=p.url,i.appendChild(u),t.searchUrl(p.url)){u.classList.add("exist");return}let m=document.createElement("input");m.type="checkbox",m.onclick=y=>{if(!m.checked)n.checked=!1;else{let I=!0;for(let T=0;T<o.length;T++)if(!o[T].checked){I=!1;break}I&&(n.checked=!0)}},u.appendChild(m),u.addEventListener("click",y=>{y.target.nodeName.toUpperCase()=="SPAN"&&m.click()});let d=document.createElement("select"),f=document.createElement("option");f.value=0,f.innerText=N("currentType"),d.appendChild(f);for(let y=0;y<c.sitesConfig.length;y++){let I=c.sitesConfig[y];if(I.type!=e.type){let T=document.createElement("option");T.value=I.type,T.innerText=I.type,d.appendChild(T)}}u.appendChild(d),t.siteDict[p.url]=p,o.push(m)}),o.length==0&&(n.style.display="none",a.style.display="none"),n.addEventListener("click",p=>{o.forEach(u=>{u.checked=n.checked})}),this.sitesCon.appendChild(i)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Ne(this.filterCss)),document.documentElement.appendChild(this.filterFrame),this.sitesCon.innerHTML=ie(""),e.forEach(i=>{t.anylizeType(i)})}}const tr=new Jr;var Ee,Je,vi,wi,Ci,Si,_t,Zt,Xt,Qt;function Rr(l,e){if(!E||!E.bar)return;let t=E.bar.querySelector(".search-jumper-type.search-jumper-open"),i=()=>{if(document.removeEventListener("dragend",Ci,!0),document.removeEventListener("dragenter",Si,!0),Je.parentNode&&(Je.parentNode.removeChild(Je),Ee.style.opacity="",Ee.style.transform=""),xt=!1,clearTimeout(_t),ce&&!ce.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||E.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmouseup)t.children[0].onmouseup();else{let m=new PointerEvent("mouseup");t.children[0].dispatchEvent(m)}}else E.bar.style.display="none"};if(!Zt&&!Xt&&(Qt=(c.prefConfig.zoomDrag||100)/100,Zt=Qt*190,Xt=Qt*190),!Ee){let m=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${Qt});
                      z-index: 2147483647;
                      -moz-transition:left 0.3s ease, top 0.3s;
                      -webkit-transition:left 0.3s ease, top 0.3s;
                      transition:left 0.3s ease, top 0.3s;
                    }
                    #searchJumperWrapper * {
                      margin: 0;
                      padding: 0;
                      border: none;
                      outline: none;
                      user-select: none;
                      box-sizing: content-box;
                      font-size: 12px;
                      line-height: normal;
                      overflow: visible;
                      background-image: initial;
                      float: initial;
                    }
                    #searchJumperWrapper {
                      position: fixed;
                      height: 300px;
                      width: 300px;
                      padding: 20px;
                      margin: 20px;
                      background-color: #000000${c.prefConfig.hideDragHistory?"10":"9e"};
                      box-shadow: #000000 0px 0px 10px;
                      border-radius: 50%;
                      z-index: 2147483647;
                      box-sizing: content-box;
                      opacity: 0;
                      transform: scale(.5);
                      -moz-transition:opacity 0.3s ease, transform 0.15s;
                      -webkit-transition:opacity 0.3s ease, transform 0.15s;
                      transition:opacity 0.3s ease, transform 0.15s;
                    }
                    #searchJumperWrapper>.panel {
                      position: relative;
                    }
                    #searchJumperWrapper .sector:nth-child(2n+1) .sector-inner {
                      background: #454545;
                      color: white;
                    }
                    #searchJumperWrapper .sector:nth-child(2n) .sector-inner {
                      background: #ffffff;
                      color: black;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n+1) .sector-inner {
                      background: #353535;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n) .sector-inner {
                      background: #eeeeee;
                    }
                    #searchJumperWrapper .sector {
                      position: absolute;
                      left: 150px;
                      top: 50px;
                      width: 100px;
                      height: 200px;
                      font-size: 14px;
                      border-radius: 0px 100px 100px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 1;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                      pointer-events: none;
                    }
                    #searchJumperWrapper .sector.out {
                      left: 150px;
                      top: 0px;
                      width: 150px;
                      height: 300px;
                      font-size: 14px;
                      border-radius: 0px 150px 150px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 0;
                      ${c.prefConfig.hideDragHistory?"display: none;":""}
                    }
                    #searchJumperWrapper .sector-inner {
                      text-align: center;
                      display: block;
                      width: 40px;
                      padding: 5px 3px 0 57px;
                      height: 195px;
                      transform: translateX(-100px) rotate(60deg);
                      transform-origin: right center;
                      border-radius: 100px 0 0 100px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner {
                      text-align: center;
                      display: block;
                      width: 90px;
                      height: 295px;
                      transform: translateX(-150px) rotate(36deg);
                      transform-origin: right center;
                      border-radius: 150px 0 0 150px;
                    }
                    #searchJumperWrapper .sector-inner span {
                      transform-origin: center;
                      padding: 20px 0;
                      pointer-events: all;
                      opacity: 0.8;
                      word-break: break-word;
                      height: 55px;
                      font-size: 12px;
                      font-weight: bold;
                      font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                    }
                    #searchJumperWrapper .sector-inner span {
                      width: 70px;
                      margin-left: -15px;
                    }
                    #searchJumperWrapper .sector-inner span>p {
                      max-width: 58px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner span {
                      width: unset;
                      margin-left: unset;
                    }
                    #searchJumperWrapper .over>.sector-inner span {
                      opacity: 1;
                    }
                    #searchJumperWrapper .sector-inner span>img {
                      width: 25px;
                      height: 25px;
                    }
                    #searchJumperWrapper .sector-inner span:hover {
                      opacity: 1;
                    }
                    #searchJumperWrapper .dragLogo {
                      position: absolute;
                      left: 150px;
                      top: 150px;
                      border-radius: 50%;
                      box-shadow: #000000 0px 0px 10px;
                      z-index: 10;
                      font-size: 0;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                    }
                    .dragLogo>svg {
                      width: 40px;
                      height: 40px;
                      pointer-events: none;
                    }
                `,d=Ne(m);vi=[],wi=[],Ee=document.createElement("div"),Ee.id="searchJumperWrapper",Ee.innerHTML=ie(`
                <div class="panel"></div>
                <div class="dragLogo">${fi}</div>
                `),Ge||Ee.appendChild(d);const f=6,y=10;let I=Ee.querySelector(".panel"),T=360/f,O=360/y,W=-T/2,x=-O/2,P,J=Ee.querySelector(".dragLogo"),$;J.addEventListener("dragover",L=>{L.preventDefault()},!0),J.addEventListener("dragenter",L=>{clearTimeout($),P&&(P.style.transform=`rotate(${P.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,P.classList.remove("over")),P=null,J.style.transform="scale(1.35)",L.preventDefault(),clearTimeout(_t),_t=setTimeout(()=>{i(),E.appendBar(),E.showAllSites()},1e3)},!0);let F=(L,U,Q)=>{let ne=document.createElement("div");ne.className=L;let ae=document.createElement("div");ae.className="sector-inner";let S=document.createElement("span");ae.appendChild(S),ne.appendChild(ae);let H=`rotate(${U}deg)`;return S.style.transform=Q,ne.style.transform=H+(c.prefConfig.hideDragHistory?"scale(1.2)":""),ne.dataset.deg=U,I.appendChild(ne),S.addEventListener("dragover",R=>{R.clientX<50?Je.style.left="0px":R.clientX>document.documentElement.clientWidth-50&&(Je.style.left=document.documentElement.clientWidth-(Zt<<1)+"px"),R.clientY<50?Je.style.top="0px":R.clientY>document.documentElement.clientHeight-50&&(Je.style.top=document.documentElement.clientHeight-(Xt<<1)+"px"),R.preventDefault()},!0),S.addEventListener("dragenter",R=>{clearTimeout($),S.innerText&&(P&&(P.style.transform=`rotate(${P.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,P.classList.remove("over")),J.style.transform="",ne.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${H}`,ne.classList.add("over"),P=ne,clearTimeout(_t))},!0),S};for(let L=0;L<f;L++){let U=F("sector",W+T*L,`translateX(-10px) translateY(-10px) rotate(${W-T*L}deg)`);vi.push(U)}for(let L=0;L<y;L++){let U=F("sector out",x+O*L,`translateX(12px) translateY(-15px) rotate(${x-O*L}deg)`);wi.push(U)}Ci=L=>{i()},Ee.addEventListener("click",L=>{i()}),Ee.addEventListener("drop",L=>{L.target===J?(E.setFuncKeyCall(!1),E.showInPage()):P&&(i(),E.searchBySiteName(P.children[0].dataset.name,L),P.style.transform=`rotate(${P.dataset.deg}deg)`,P.classList.remove("over"),P=null),L.preventDefault()});let A,b,w,M;Si=L=>{clearTimeout($),Ee.contains(L.target)||($=setTimeout(()=>{i()},300))},Je=document.createElement("div"),Je.id="dragCon",Je.appendChild(Ee)}E.recoveHistory();let r=E.autoGetFirstType(),s=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),n=0,a=()=>{let m=null;for(let d=n;d<s.length;d++){let f=s[d];if(f.style.display!=="none"){m=f,n=d+1;break}}return m};const o=(m,d)=>{m.parentNode.dataset.name=d.dataset.name;let f=document.createElement("p");if(f.innerText=d.dataset.name.substr(0,10).trim(),!/^\w+$/.test(f.innerText)){let T="",O=0;for(let W of f.innerText)if(T+=W,/^\w+$/.test(W)?O++:O+=2,O>10){T+="...";break}f.innerText=T}let y=document.createElement("img");y.style.display="none",m.appendChild(y),m.appendChild(f),y.onload=T=>{y.style.display=""};let I=d.querySelector("img");if(I){let T=I.src||I.dataset.src;T&&(y.src=T)}};vi.forEach((m,d)=>{m.innerHTML=ie();let f=a();if(!f){m.parentNode.parentNode.style.filter="contrast(0.5)";return}m.parentNode.parentNode.style.filter="",o(m,f)});let p=0,u;r.classList.contains("search-jumper-needInPage")?u=E.txtHistorySiteBtns:r.classList.contains("search-jumper-targetImg")?u=E.imgHistorySiteBtns:r.classList.contains("search-jumper-targetAudio")?u=E.audioHistorySiteBtns:r.classList.contains("search-jumper-targetVideo")?u=E.videoHistorySiteBtns:(r.classList.contains("search-jumper-targetLink")||r.classList.contains("search-jumper-targetPage"))&&(u=E.linkHistorySiteBtns),u?(u=u.concat(E.historySiteBtns),u=u.filter((m,d,f)=>f.indexOf(m)===d)):u=E.historySiteBtns;let h=()=>{if(c.prefConfig.reuseDragHistory)return a();if(c.prefConfig.hideDragHistory)return!1;let m=null;for(let d=p;d<u.length;d++){let f=u[d];if(f.style.display!=="none"){m=f,p=d+1;break}}return m};wi.forEach((m,d)=>{let f=new DragEvent("dragleave");m.dispatchEvent(f),m.innerHTML=ie(),m.parentNode.parentNode.style.opacity=.6;let y=h();if(!y)return;let I=y.querySelector("img");I&&I.dataset.src&&(I.src=I.dataset.src,delete I.dataset.src),m.parentNode.parentNode.style.opacity=1,o(m,y)}),Je.style.left=l-Zt+"px",Je.style.top=e-Xt+"px",Ee.style.opacity="",Ee.style.transform="",setTimeout(()=>{document.addEventListener("dragend",Ci,!0),E.addToShadow(Je),setTimeout(()=>{Ee.style.opacity=1,Ee.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(Ee).zIndex!="2147483647"?i():document.addEventListener("dragenter",Si,!0)},100)},0)}var te,ei,$t,ze,vt,Oe,Wt,Dt,ir,rr,Ti,ti,ii,ri,sr;function si(l,e,t,i,r,s,n,a){if(self.kwFilter=s,self.charset=r,self.hideNotMatch=a,self.match=n,!te){let p=Ne(`
                    .searchJumperFrame-body,
                    .searchJumperFrame-crawlBody {
                        width: 300px;
                        min-height: 300px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 45%;
                        margin-top: -250px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .draging .searchJumperFrame-body,
                    .draging .searchJumperFrame-crawlBody {
                        transition: none;
                        pointer-events: none;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperFrame-inputs>input,
                    .searchJumperFrame-inputs>textarea,
                    .searchJumperFrame-inputs>select,
                    .searchJumperFrame-body select {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        min-width: calc(100% - 8px);
                        max-width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                        height: 36px;
                        word-break: break-all;
                    }
                    .searchJumperFrame-inputs>input:focus,
                    .searchJumperFrame-inputs>textarea:focus,
                    .searchJumperFrame-inputs>select:focus,
                    .searchJumperFrame-body select:focus {
                        background-color: #FFF;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-inputs>.sideIcon {
                        float: right;
                        margin-top: -38px;
                        position: relative;
                        right: 20px;
                        opacity: 0.8;
                        background: rgb(0 0 0 / 50%);
                        border-radius: 5px;
                        pointer-events: none;
                        width: 27px;
                        height: 27px;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon {
                        fill: white;
                        pointer-events: all;
                        cursor: pointer;
                        transition: transform 0.25s ease;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon:hover {
                        transform: scale(1.2);
                        opacity: 1;
                        background: rgb(0 0 0);
                    }
                    .searchJumperFrame-body>.iconsCon {
                        max-height: 150px;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                    }
                    .searchJumperFrame-body>.iconsCon>img {
                        margin: 5px;
                        cursor: pointer;
                        max-width: 120px;
                        border: 2px solid #ffffff;
                        box-sizing: border-box;
                        background: #80808030;
                        transition: background 0.25s ease;
                    }
                    .searchJumperFrame-body>.iconsCon>img:hover {
                        border: 2px solid #4e91d3;
                        background: gray;
                    }
                    .maxContent .searchJumperFrame-inputs {
                        width: 50%;
                        float: left;
                    }
                    .searchJumperFrame-body>.moreItem {
                        display: none;
                    }
                    .maxContent>.searchJumperFrame-body>.moreItem {
                        display: block;
                    }
                    .maxContent>.searchJumperFrame-body {
                        width: 600px;
                        margin-left: -300px;
                    }
                    .searchJumperFrame-maxBtn,
                    .searchJumperFrame-closeBtn {
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: white;
                        width: 25px;
                        cursor: pointer;
                        transition:transform 0.25s ease;
                    }
                    .searchJumperFrame-maxBtn:hover,
                    .searchJumperFrame-closeBtn:hover {
                        transform: scale(1.2);
                    }
                    .searchJumperFrame-maxBtn>#maxBtn {
                        display: block;
                    }
                    .searchJumperFrame-maxBtn>#minBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#maxBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#minBtn {
                        display: block;
                    }
                    .crawling>.searchJumperFrame-body {
                        display: none;
                    }
                    .searchJumperFrame-crawlBody {
                        display: none;
                    }
                    .crawling>.searchJumperFrame-crawlBody {
                        display: block;
                    }
                    .searchJumperFrame-buttons>button#submitCrawl,
                    .searchJumperFrame-buttons>button#record,
                    .searchJumperFrame-buttons>button#copy,
                    .searchJumperFrame-buttons>button#loop {
                        width: 100%;
                        margin: 0 3px;
                    }
                    .searchJumperFrame-crawlBody>.actionCon {
                        height: 200px;
                        background: gray;
                        border-radius: 10px;
                        margin: 10px;
                        padding: 0 10px 10px 10px;
                        resize: auto;
                        box-sizing: border-box;
                        overflow: auto;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div {
                        width: 100%;
                        font-size: 16px;
                        background: #000000cc;
                        border-radius: 8px;
                        color: white;
                        margin: 3px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div>span {
                        background: #275f90;
                        border-radius: 5px;
                        max-width: 40px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        margin: 0 3px;
                        white-space: nowrap;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperFrame-inputs>input:focus,
                      .searchJumperFrame-inputs>textarea:focus,
                      .searchJumperFrame-inputs>select:focus,
                      .searchJumperFrame-body select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                      .searchJumperFrame-body>.iconsCon>img {
                        border: 2px solid #000000;
                      }
                    }
                    @media screen and (max-height: 600px) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody {
                        top: 10px;
                        margin-top: 0px;
                      }
                    }
                `);te=document.createElement("div"),te.innerHTML=ie(`
                <div class="searchJumperFrame-body">
                    <a href="${nt}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${yt}" />${N("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${N("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${N("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${N("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${N("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${N("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${N("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${N("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${N("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${N("openInDefault")}</option>
                            <option value="true">${N("openInNewTab")}</option>
                            <option value="false">${N("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${N("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${N("siteTest")}</button>
                        <button id="cancel" type="button">${N("siteCancel")}</button>
                        <button id="add" type="button">${N("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${nt}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${yt}" />${N("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${Oi}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${N("emuInputTips")}">${N("inputAction")}</button>
                        <button id="click" type="button" title="${N("emuClickTips")}">${N("clickAction")}</button>
                        <button id="sleep" type="button" title="${N("emuWaitTips")}">${N("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${N("emuCopyTips")}">${N("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${N("emuRecordTips")}">${N("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${N("emuLoopTips")}">${N("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${N("emuStopTips")}">${N("submitCrawl")}</button>
                    </div>
                </div>
                `),Ge||te.appendChild(p);let u=te.children[0];ei=te.querySelector("[name='siteName']"),$t=te.querySelector("[name='description']"),ze=te.querySelector("[name='url']"),vt=te.querySelector("[name='icon']"),Oe=te.querySelector(".searchJumperFrame-inputs>img"),Wt=te.querySelector(".iconsCon"),ir=te.querySelector("#test"),rr=te.querySelector("#cancel"),Ti=te.querySelector("#add"),Dt=te.querySelector("select[name='typeSelect']"),ti=te.querySelector("[name='siteKeywords']"),ii=te.querySelector("[name='siteMatch']"),ri=te.querySelector("select[name='openSelect']");let h=te.querySelector(".searchJumperFrame-title"),m,d,f=!1,y=v=>{f||(te.classList.add("draging"),f=!0);let C=v.clientX-m.x+d.x,j=v.clientY-m.y+d.y;u.style.marginLeft=C+"px",u.style.marginTop=j+"px"},I=v=>{v.preventDefault(),v.stopPropagation(),te.classList.remove("draging"),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",I)};h.addEventListener("mousedown",v=>{v.preventDefault(),v.stopPropagation(),f=!1,m={x:v.clientX,y:v.clientY};let C=getComputedStyle(u);d={x:parseInt(C.marginLeft||0),y:parseInt(C.marginTop||0)},document.addEventListener("mousemove",y),document.addEventListener("mouseup",I)}),Oe.onload=v=>{Oe.style.display=""},te.querySelector("#maxBtn").addEventListener("click",v=>{te.classList.add("maxContent")}),te.querySelector("#minBtn").addEventListener("click",v=>{te.classList.remove("maxContent")});for(let v=0;v<c.sitesConfig.length;v++){let C=c.sitesConfig[v],j=document.createElement("option");j.value=v,di!==""&&di==v&&(j.selected="selected"),j.innerText=C.type,Dt.appendChild(j)}ir.addEventListener("click",v=>{if(/#p{/.test(ze.value)){let C=ze.value.match(/#p{(.*)}/);if(!C)return;let j=[];C[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(g=>{if(g=g.trim(),/^loopStart\(\d+\)$/.test(g)){let k=g.match(/loopStart\((.*)\)/);j.push(["@loopStart",k[1]])}else if(g=="loopEnd")j.push(["@loopEnd",""]);else if(g.startsWith("click(")&&g.endsWith(")")){let k=g.slice(6,g.length-1);k&&j.push(["@click",k.replace(/\\([\=&])/g,"$1").trim()])}else if(g.startsWith("dblclick(")&&g.endsWith(")")){let k=g.slice(9,g.length-1);k&&j.push(["@dblclick",k.replace(/\\([\=&])/g,"$1").trim()])}else if(g.startsWith("rclick(")&&g.endsWith(")")){let k=g.slice(7,g.length-1);k&&j.push(["@rclick",k.replace(/\\([\=&])/g,"$1").trim()])}else if(g.startsWith("copy(")&&g.endsWith(")")){let k=g.slice(5,g.length-1);k&&j.push(["@copy",k.replace(/\\([\=&])/g,"$1").trim()])}else if(g.startsWith("call(")&&g.endsWith(")")){let k=g.slice(5,g.length-1);k&&j.push(["@call",k.replace(/\\([\=&])/g,"$1").trim()])}else if(g.startsWith("wait(")&&g.endsWith(")")){let k=g.slice(5,g.length-1);j.push(["@wait",k.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(g)){let k=g.match(/sleep\((.*)\)/);k&&j.push(["@sleep",k[1]])}else if(/^reload\(\d?\)$/.test(g)){let k=g.match(/reload\((.*)\)/);j.push(["@reload",k[1]])}else{g=g.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let k=g.split("SJ^PARAM");if(k.length===2){let z=k[0],D=k[1].replace(/\\([\=&])/g,"$1");j.push([z,D])}else(g.endsWith(".click()")||g.endsWith(".click"))&&j.push(["@"+g.replace(/\.click(\(\))?$/,""),"click"])}}),Ye=j,E.submitAction(j)}else/[:%]p{/.test(ze.value)||r&&r.toLowerCase()!="utf-8"?Gt(r,ze.value.replace(/%se?\b/g,"searchJumper"),"_blank"):me(ze.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),rr.addEventListener("click",v=>{te.parentNode&&te.parentNode.removeChild(te)}),Ti.addEventListener("click",v=>{Ie||Ht(()=>{let C=null;for(let j=0;j<c.sitesConfig.length;j++){let g=c.sitesConfig[j];for(let k=0;k<g.sites.length;k++){let z=g.sites[k];if(z.url==ze.value){if(j==parseInt(Dt.value)){alert("Already added!");return}if(window.confirm(N("siteExist")))C={name:z.name+" - "+g.type,url:`["${z.name}"]`};else return}}}C==null&&(C={name:ei.value,url:ze.value},vt.value&&vt.value!=ze.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(C.icon=vt.value),$t.value&&$t.value!=ei.value&&(C.description=$t.value),ti.value&&(C.keywords=ti.value),ii.value&&(C.match=ii.value),ri.value&&ri.value!="-1"&&(C.openInNewTab=ri.value==="true"),self.charset&&r.toLowerCase()!="utf-8"&&(C.charset=self.charset),self.kwFilter&&(C.kwFilter=self.kwFilter),self.match&&(C.match=self.match),self.hideNotMatch&&(C.hideNotMatch=self.hideNotMatch)),c.sitesConfig[Dt.value].sites.push(C),c.lastModified=new Date().getTime(),K.setItem("lastAddType",Dt.value),K.setItem("searchData",c),ke(N("siteAddOver")),te.parentNode&&te.parentNode.removeChild(te),window.postMessage({searchData:c,version:dt.script.version||0,command:"loadConfig"},"*"),E.refreshEngines()})}),sr=te.querySelector("#crawlBtn");let W=te.querySelector(".searchJumperFrame-closeBtn"),x=te.querySelector(".actionCon"),P=te.querySelector("#input"),J=te.querySelector("#click"),$=te.querySelector("#sleep"),F=te.querySelector("#copy"),A=te.querySelector("#submitCrawl"),b=te.querySelector("#record"),w=te.querySelector("#loop"),M,L=(v,C="",j="")=>{let g=document.createElement("div"),k=v;switch(v){case"input":k=N("inputOutput",[C,j]);break;case"click":k=N("clickOutput",C);break;case"dblclick":k=N("dblclickOutput",C);break;case"rclick":k=N("rclickOutput",C);break;case"copy":k=N("copyOutput",C);break;case"loopStart":k=N("loopStart",j);break;case"loopEnd":k=N("loopEnd");break;case"sleep":k=N("sleepOutput",j);break;default:break}k&&(g.innerHTML=ie(k),g.dataset.type=v,g.dataset.sel=C,g.dataset.val=j,g.draggable="true",g.ondragover=z=>{z.preventDefault()},g.ondragstart=z=>{M=g},g.ondrop=z=>{x.insertBefore(M,g)},g.onclick=z=>{let D=z.target;if(D.nodeName.toUpperCase()=="SPAN")if(D.className=="element")je.getSelector(q=>{D.innerText=q,D.title=q,te.style.display="",g.dataset.sel=q}),te.style.display="none";else{let q=prompt(N("inputNewValue"),D.innerText);q&&(D.innerText=q,D.title=q,g.dataset.val=q)}else confirm(N("deleteConfirm"))&&x.removeChild(g)},g.oncontextmenu=z=>{let D=z.target;if(D.nodeName.toUpperCase()=="SPAN")if(z.preventDefault(),D.className=="element"){let q=prompt("Selector",D.innerText);q&&(D.innerText=q,D.title=q,g.dataset.sel=q)}else{let q=prompt(N("inputNewValue"),D.innerText);q&&(D.innerText=q,D.title=q,g.dataset.val=q)}},x.appendChild(g))},U=()=>{x.innerHTML=ie();let v=ze.value.match(/#p{(.*)}/);v&&v[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(C=>{if(C=C.trim(),/^loopStart\(\d+\)$/.test(C)){let j=C.match(/loopStart\((.*)\)/);L("loopStart","",j[1])}else if(C=="loopEnd")L("loopEnd");else if(C.startsWith("click(")&&C.endsWith(")")){let j=C.slice(6,C.length-1);j&&L("click",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("dblclick(")&&C.endsWith(")")){let j=C.slice(9,C.length-1);j&&L("dblclick",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("rclick(")&&C.endsWith(")")){let j=C.slice(7,C.length-1);j&&L("rclick",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("copy(")&&C.endsWith(")")){let j=C.slice(5,C.length-1);j&&L("copy",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("call(")&&C.endsWith(")")){let j=C.slice(5,C.length-1);j&&L("call","",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("wait(")&&C.endsWith(")")){let j=C.slice(5,C.length-1);j&&L("wait","",j.replace(/\\([\=&])/g,"$1").trim())}else if(C.startsWith("open(")&&C.endsWith(")")){let j=C.slice(5,C.length-1);j&&L("open","",j.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(C)){let j=C.match(/sleep\((.*)\)/);j&&L("sleep","",j[1])}else if(/^reload\(\d?\)$/.test(C)){let j=C.match(/reload\((.*)\)/);L("reload","",j[1])}else{C=C.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let j=C.split("SJ^PARAM");j.length===2?L("input",j[0],j[1].replace(/\\([\=&])/g,"$1")):(C.endsWith(".click()")||C.endsWith(".click"))&&L("click",C.replace(/\.click(\(\))?$/,""))}})},Q=()=>{let v=[];return[].forEach.call(x.children,C=>{if(!C)return;let j=C.dataset.sel,g=C.dataset.val||"";switch(C.dataset.type){case"click":v.push(`click(${j.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":v.push(`dblclick(${j.replace(/([=&])/g,"\\$1")})`);break;case"rclick":v.push(`rclick(${j.replace(/([=&])/g,"\\$1")})`);break;case"copy":v.push(`copy(${j.replace(/([=&])/g,"\\$1")})`);break;case"input":v.push(`${j.replace(/([=&])/g,"\\$1")}=${g}`);break;case"sleep":v.push(`sleep(${g})`);break;case"loopEnd":v.push("loopEnd");break;default:v.push(`${C.dataset.type}(${g.replace(/([=&])/g,"\\$1")})`);break}}),v.join("&")};sr.addEventListener("click",v=>{U(),te.classList.add("crawling")}),W.addEventListener("click",v=>{te.classList.remove("crawling")});let ne,ae,S=v=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(clearTimeout(ae),ae=setTimeout(()=>{L("click",je.geneSelector(v.target,!0))},300)))},H=v=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(clearTimeout(ae),L("dblclick",je.geneSelector(v.target,!0))))},R=v=>{te.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(v.preventDefault(),clearTimeout(ae),L("rclick",je.geneSelector(v.target,!0))))},Y=v=>{te.style.display!==""&&L("input",je.geneSelector(v.target,!0),v.target.value)},_=v=>{if(te.style.display==="")return;let C=!1;v.keyCode==27?C=!0:v.keyCode==13&&(v.preventDefault(),v.stopPropagation(),v.target&&v.target.blur&&v.target.blur(),C=!0),C&&(te.style.display="",document.removeEventListener("keydown",_,!0),document.removeEventListener("click",S),document.removeEventListener("dblclick",H),document.removeEventListener("contextmenu",R),document.removeEventListener("change",Y))};b.addEventListener("click",v=>{alert(N("startRecord")),te.style.display="none",setTimeout(()=>{document.addEventListener("keydown",_,!0),document.addEventListener("click",S),document.addEventListener("dblclick",H),document.addEventListener("contextmenu",R),document.addEventListener("change",Y)},100)});let oe=!1;w.addEventListener("click",v=>{if(oe)L("loopEnd"),w.innerText=N("loopAction");else{let C=prompt(N("loopTimes"),1);if(!C)return;L("loopStart","",C||"1"),w.innerText=N("loopActionEnd")}oe=!oe}),P.addEventListener("click",v=>{je.getSelector(C=>{L("input",C,"%s"),te.style.display=""},!oe),te.style.display="none"}),F.addEventListener("click",v=>{je.getSelector(C=>{L("copy",C,"%s"),te.style.display=""},!oe),te.style.display="none"}),J.addEventListener("dblclick",v=>{clearTimeout(ae),v.preventDefault(),v.stopPropagation(),je.getSelector(C=>{L("dblclick",C),te.style.display=""},!oe),te.style.display="none"}),J.addEventListener("contextmenu",v=>{clearTimeout(ae),v.preventDefault(),v.stopPropagation(),je.getSelector(C=>{L("rclick",C),te.style.display=""},!oe),te.style.display="none"}),J.addEventListener("click",v=>{clearTimeout(ae),ae=setTimeout(()=>{je.getSelector(C=>{L("click",C),te.style.display=""},!oe),te.style.display="none"},250)}),$.addEventListener("click",v=>{let C=prompt(N("sleepPrompt"),1e3);C=C&&parseInt(C),C&&L("sleep","",C)}),A.addEventListener("click",v=>{let C=Q();C&&(ze.value=location.href+"#p{"+C+"}"),te.classList.remove("crawling")}),te.addEventListener("keydown",v=>{v.keyCode==13&&v.target&&v.target.nodeName=="INPUT"&&Ti.click()})}E.addToShadow(te),ti.value="",ii.value="",ei.value=l||"",$t.value=e||"",ze.value=t||"",i&&i[0]?(Oe.style.display="",t.indexOf(location.origin)===0?(Oe.onerror=o=>{Oe.onerror=null,vt.value=i[0],Oe.src=i[0]},Oe.src=location.origin+"/favicon.ico"):(vt.value=i[0],Oe.src=i[0])):(Oe.style.display="none",Oe.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),Wt.innerHTML=ie(),i&&i.length>1?(Wt.style.opacity="",i.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",u=>{vt.value=o,Oe.src=o}),p.onload=u=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},Wt.appendChild(p)})):Wt.style.opacity=0}function Hr(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Pe,cacheIcon:ye,sortSiteNames:Me},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function zr(l){l.cacheIcon&&(ye=l.cacheIcon,K.setItem("cacheIcon",ye),He=[],c.prefConfig.cacheSwitch=!0,K.setItem("searchData",c)),l.sortTypeNames&&(Pe=l.sortTypeNames,K.setItem("sortTypeNames",Pe)),l.sortSiteNames&&(Me=l.sortSiteNames,K.setItem("sortSiteNames",Me))}function ar(l,e){$e({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let i=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!i){e("error",t);return}let r=t.responseXML.querySelector("ShortName"),s=t.responseXML.querySelector("Description"),n=t.responseXML.querySelector("Image"),a=t.responseXML.querySelector("InputEncoding"),o=i.querySelectorAll("Param"),p=r&&r.textContent,u=s&&s.textContent,h=i.getAttribute("template"),m=n&&n.textContent,d=a&&a.textContent;if(o.length>0){let f=[];[].forEach.call(o,y=>{f.push(`${y.getAttribute("name")}=${y.getAttribute("value")}`)}),h+=`%p{${f.join("&")}}`}si(p,u,h.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[m],d),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function Or(){if(location.hostname!=="mycroftproject.com")return;Ne(`
                 .searchJumper-loading {
                     animation-name: changeScale;
                     animation-duration: 2.5s;
                     animation-iteration-count: infinite;
                 }
                 @keyframes changeScale {
                     0% {
                         -webkit-transform:rotate(0deg) scale(1);
                         -moz-transform:rotate(0deg) scale(1);
                         transform:rotate(0deg) scale(1);
                     }
                     50% {
                         -webkit-transform:rotate(180deg) scale(1.5);
                         -moz-transform:rotate(180deg) scale(1.5);
                         transform:rotate(180deg) scale(1.5);
                     }
                     100% {
                         -webkit-transform:rotate(360deg) scale(1);
                         -moz-transform:rotate(360deg) scale(1);
                         transform:rotate(360deg) scale(1);
                     }
                 }
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let i=!1;[].forEach.call(t,r=>{if(r.previousElementSibling&&r.previousElementSibling.classList.contains("searchJumperIcon")||r.previousElementSibling&&r.previousElementSibling.previousElementSibling&&r.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let s=r.href.match(/\?id=(\d+)&basename=(.+?)&/);if(s===null)return;let n=document.createElement("img");n.className="icon searchJumperIcon",n.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",n.title="Add to SearchJumper",n.src=yt,r.parentNode.insertBefore(n,r),n.onclick=a=>{i||(i=!0,n.classList.add("searchJumper-loading"),ar(`https://mycroftproject.com/installos.php/${s[1]}/${s[2]}.xml`,(o,p)=>{i=!1,n.classList.remove("searchJumper-loading"),o!="load"&&ke(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function Fr(){E=new Ir}function Ur(){if(rt){if(E.appendBar(),E.showAllSites(),setTimeout(()=>{E.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}E.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,i;l.forEach(r=>{let s=r.split("="),n=s[0],a=s[1];try{a=decodeURIComponent(a)}catch{}switch(n){case"kw":e=a;break;case"engine":t=a;break;case"self":i=a;break}}),e&&(E.searchJumperInputKeyWords.value=e||""),t&&E.searchBySiteName(t,{},!!i)}if(Z(document).style.cssText=`
                    zoom: 1;
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                    height: 100vh;
                    background-position: center 0;
                    background-repeat: no-repeat;
                    background-size: cover;
                    -webkit-background-size: cover;
                    -o-background-size: cover;
                    overflow: hidden;
                `,c.prefConfig.bgUrl&&(Xe=c.prefConfig.bgUrl,Xe.length)){Z(document).style.backgroundImage=`url("${Xe}")`;return}K.getItem("allPageBg",l=>{l?(Xe=l.url,Z(document).style.backgroundImage=`url("${l.base64||Xe}")`):l={url:""},$e({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var i=t.images[0].url;if(/^https?:\/\//.test(i)||(i="https://global.bing.com"+i),Xe=i,i==l.url)return;$e({method:"GET",url:i,responseType:"blob",onload:function(r){var s=r.response,n=new FileReader;n.readAsDataURL(s),n.onload=function(a){var o=a.target.result;l={url:i,base64:o},K.setItem("allPageBg",l)}}}),l.base64||(Z(document).style.backgroundImage=`url("${i}")`)}catch(r){console.log(r)}}})})}}async function Kr(){await E.initRun(),Ar(),Ur()}async function We(l){await new Promise(e=>{setTimeout(()=>{e()},l)})}async function qr(){let l=await new Promise(e=>{K.getItem("searchData",t=>{e(t)})});Be=await new Promise(e=>{K.getItem("cacheKeywords",t=>{e(t||"")})}),ht=await new Promise(e=>{K.getItem("cacheFilter",t=>{e(t||"")})}),hi=await new Promise(e=>{K.getItem("disableState",t=>{e(t||!1)})}),st=await new Promise(e=>{K.getItem("tipsStorage",t=>{e(t||[])})}),Et=await new Promise(e=>{K.getItem("lastSign",t=>{e(t||!1)})}),K.setItem("lastSign",!1),Ye=await K.getListItem("inPagePostParams",location.hostname),ye=await new Promise(e=>{K.getItem("cacheIcon",t=>{e(t||{})})}),_e=await new Promise(e=>{K.getItem("historySites",t=>{e(t||[])})}),Lt=await new Promise(e=>{K.getItem("historyType",t=>{e(t||"")})}),Pe=await new Promise(e=>{K.getItem("sortTypeNames",t=>{e(t||{})})}),Me=await new Promise(e=>{K.getItem("sortSiteNames",t=>{e(t||{})})}),Ae=await new Promise(e=>{K.getItem("globalInPageWords",t=>{e(t||"")})}),Ze=await new Promise(e=>{K.getItem("navEnable",t=>{e(typeof t>"u"?!0:t)})}),Ft=await new Promise(e=>{K.getItem("referrer",t=>{e(t||"")})}),ui=await new Promise(e=>{K.getItem("clickLink",t=>{e(t||"")})}),Ut=await new Promise(e=>{K.getItem("disableHighlight",t=>{e(t||"")})}),Hi=await new Promise(e=>{K.getItem("lastHighlight",t=>{e(t||"")})}),zi=await new Promise(e=>{K.getItem("allPageNewMode",t=>{e(t||!1)})}),di=await new Promise(e=>{K.getItem("lastAddType",t=>{e(t||"")})}),l&&(c=l,Pt=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Re=c.prefConfig.lang),Wi(),c.prefConfig.firstRun&&K.supportCrossSave()&&(c.prefConfig.firstRun=!1,K.setItem("searchData",c),setTimeout(()=>{K.getItem("searchData",e=>{e.prefConfig.firstRun===!1&&me(pr,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={}),typeof c.prefConfig.suggestType>"u"&&(Re==="zh-CN"?c.prefConfig.suggestType="baidu":c.prefConfig.suggestType="google"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?it=c.prefConfig.configPage:c.prefConfig.configPage=it}function ai(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?ai(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?ai(l.substring(1),e)||ai(l,e.substring(1)):!1}if(de.indexOf("#searchJumperMin")!=-1)if(Fi=!0,de.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",de.replace(/#searchJumperMin(Post)?/,""));else{if(de.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Ai}}),$e({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Ai},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;var nr=!1,ki,Ii,wt;async function ji(l){if(await mr(),nr){l&&l();return}if(nr=!0,$r(),await qr(),!hi){if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let i=c.prefConfig.blacklist[t];if(i&&i.indexOf("//")!=0){if(e){/\*\/$/.test(i)&&(e=!1);continue}if(i.indexOf("/*")==0){e=!0;continue}if(i.indexOf("/")==0){let r=i.match(/^\/(.*)\/(\w*)$/);if(r&&new RegExp(r[1],r[2]).test(de))return}else if(ai(i,de))return}}}Fr(),await Dr(),Or(),Kr(),l&&l(),wt=document.title}}function Gr(){if(document.hidden){if(E)E.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;ki=setInterval(async()=>{let l=Ae;Ae=await K.getItem("globalInPageWords"),(l||"")!=(Ae||"")&&(E.refreshPageWords(),E.navMarks.innerHTML&&(clearInterval(ki),clearInterval(Ii),wt=document.title,Ii=setInterval(()=>{document.title=document.title==wt?"\u{1F6A9}":wt},500)))},parseInt(500+Math.random()*500));return}ji(async()=>{(ot||c.prefConfig.syncBuild)&&(c=await K.getItem("searchData"),E&&c.lastModified&&Pt!=c.lastModified&&(E.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=Ae||"";K.getItem("globalInPageWords",t=>{Ae=t||"",l!=Ae&&E&&E.refreshPageWords()});let e=Ze||!1;K.getItem("navEnable",t=>{Ze=typeof t>"u"?!0:t,e!=Ze&&E&&E.refreshNav()})})}var Ei=!1;function Vr(){!document.head||!Z(document)||It||hi||(c.prefConfig.globalSearchNow&&(clearInterval(ki),clearInterval(Ii),document.hidden?wt=document.title:wt&&(document.title=wt)),!Ei&&(Ei=!0,setTimeout(()=>{Gr(),Ei=!1},500)))}K.getItem("postUrl",l=>{if(l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)K.setItem("postUrl",""),Gt(l[1],l[0],"_self");else{if(document.head&&Z(document))ji();else{let e=()=>{document.head&&Z(document)?ji():setTimeout(()=>{e()},10)};e()}document.addEventListener("visibilitychange",Vr)}})}if(document&&document.documentElement)$i();else{let Re=()=>{document&&document.documentElement?$i():setTimeout(()=>{Re()},10)};Re()}})();
