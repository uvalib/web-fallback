/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let e,t,i=/(url\()([^)]*)(\))/g,n=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function r(i,r){if(i&&n.test(i))return i;if("//"===i)return i;if(void 0===e){e=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",e="http://a/c%20d"===t.href}catch(e){}}if(r||(r=document.baseURI||window.location.href),e)try{return new URL(i,r).href}catch(e){return i}return t||(t=document.implementation.createHTMLDocument("temp"),t.base=t.createElement("base"),t.head.appendChild(t.base),t.anchor=t.createElement("a"),t.body.appendChild(t.anchor)),t.base.href=r,t.anchor.href=i,t.anchor.href||i}function o(e,t){return e.replace(i,(function(e,i,n,o){return i+"'"+r(n.replace(/["']/g,""),t)+"'"+o}))}function a(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s=!window.ShadyDOM||!window.ShadyDOM.inUse,l=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),s&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let c=window.Polymer&&window.Polymer.rootPath||a(document.baseURI||window.location.href),d=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,u=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,h=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,p=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,f=window.Polymer&&window.Polymer.legacyOptimizations||!1,m=window.Polymer&&window.Polymer.legacyWarnings||!1,_=window.Polymer&&window.Polymer.syncInitialRender||!1,g=window.Polymer&&window.Polymer.legacyUndefined||!1,b=window.Polymer&&window.Polymer.orderedComputed||!1,y=window.Polymer&&window.Polymer.removeNestedTemplates||!1,v=window.Polymer&&window.Polymer.fastDomIf||!1,w=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,x=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,C=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,P=0;const S=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=P++;return function(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let t=Object.create(a.__mixinSet||r||null);t[i]=!0,a.__mixinSet=t}return a}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let E={},k={};function A(e,t){E[e]=k[e.toLowerCase()]=t}function O(e){return E[e]||k[e.toLowerCase()]}class T extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=O(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=r(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=a(t)}return this.__assetpath}register(e){if(e=e||this.id){if(h&&void 0!==O(e))throw A(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,A(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}T.prototype.modules=E,customElements.define("dom-module",T);function N(e){return T.import(e)}function I(e){const t=o((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function D(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...F(t[e]));return i}function F(e){const t=N(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...M(t));const i=t.querySelector("template");i&&e.push(...R(i,t.assetpath)),t._styles=e}return t._styles}function R(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let r=n[e],a=r.getAttribute("include");a&&i.push(...D(a).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=o(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function M(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=I(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=I(e));t.push(i?e._unscopedStyle:e._style)}}return t}function L(e){let t=N(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=M(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const n=R(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function B(e){return e.indexOf(".")>=0}function j(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function H(e,t){return 0===e.indexOf(t+".")}function q(e,t){return 0===t.indexOf(e+".")}function U(e,t,i){return t+i.slice(e.length)}function $(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function Y(e){return Array.isArray(e)?$(e).split("."):e.toString().split(".")}function V(e,t,i){let n=e,r=Y(t);for(let e=0;e<r.length;e++){if(!n)return;n=n[r[e]]}return i&&(i.path=r.join(".")),n}function J(e,t,i){let n=e,r=Y(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(n=n[r[e]],!n)return}n[o]=i}else n[t]=i;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const G={},X=/-[a-z]/g,W=/([A-Z])/g;function Q(e){return G[e]||(G[e]=e.indexOf("-")<0?e:e.replace(X,e=>e[1].toUpperCase()))}function K(e){return G[e]||(G[e]=e.replace(W,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Z=0,ee=0,te=[],ie=0,ne=!1,re=document.createTextNode("");new window.MutationObserver((function(){ne=!1;const e=te.length;for(let t=0;t<e;t++){let e=te[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}te.splice(0,e),ee+=e})).observe(re,{characterData:!0});const oe={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},ae={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},se={run:e=>(ne||(ne=!0,re.textContent=ie++),te.push(e),Z++),cancel(e){const t=e-ee;if(t>=0){if(!te[t])throw new Error("invalid async handle: "+e);te[t]=null}}},le=se,ce=S(e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],r=this._shouldPropertyChange(e,t,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,le.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=z(e)),void 0===n?e.removeAttribute(i):e.setAttribute(i,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),de={};let ue=HTMLElement.prototype;for(;ue;){let e=Object.getOwnPropertyNames(ue);for(let t=0;t<e.length;t++)de[e[t]]=!0;ue=Object.getPrototypeOf(ue)}const he=S(e=>{const t=ce(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Q(e[t]))}static attributeNameForProperty(e){return K(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!de[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),pe={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fe=!1,me=!1;function _e(e){(function(){if(!fe){fe=!0;const e=document.createElement("textarea");e.placeholder="a",me=e.placeholder===e.textContent}return me})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ge(e){let t=e.getAttribute("is");if(t&&pe[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function be(e,t){let i=t.parentInfo&&be(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function ye(e,t,i,n){n.id&&(t[n.id]=i)}function ve(e,t,i){if(i.events&&i.events.length)for(let n,r=0,o=i.events;r<o.length&&(n=o[r]);r++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function we(e,t,i,n){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=n)}const xe=S(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,t,i)||n,_e(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,t,i)||n),n||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let n,r=e.firstChild,o=0;r;r=n){if("template"==r.localName&&(r=ge(r)),n=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,n=i.nextSibling,e.removeChild(i),i=n;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let a={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,t,a)&&(a.infoIndex=t.nodeInfoList.push(a)-1),r.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let n=e,r=this._parseTemplate(n,t);return(r.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,r=Array.from(e.attributes);for(let o,a=r.length-1;o=r[a];a--)n=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,r){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,n=t.content||e.content,r=document.importNode(n,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let e,n=0,a=i.length;n<a&&(e=i[n]);n++){let i=o[n]=be(r,e);ye(0,r.$,i,e),we(0,i,e,t),ve(this,i,e)}return r=r,r}_addMethodEventListenerToNode(e,t,i,n){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ce=0;const Pe=[],Se={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ee=/[A-Z]/;function ke(e,t,i){let n=e[t];if(n){if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),i))for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else n=e[t]={};return n}function Ae(e,t,i,n,r,o){if(t){let a=!1;const s=Ce++;for(let l in i){let c=t[r?j(l):l];if(c)for(let t,d=0,u=c.length;d<u&&(t=c[d]);d++)t.info&&t.info.lastRun===s||r&&!Te(l,t.trigger)||(t.info&&(t.info.lastRun=s),t.fn(e,l,i,n,t.info,r,o),a=!0)}return a}return!1}function Oe(e,t,i,n,r,o,a,s){let l=!1,c=t[a?j(n):n];if(c)for(let t,d=0,u=c.length;d<u&&(t=c[d]);d++)t.info&&t.info.lastRun===i||a&&!Te(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,r,o,t.info,a,s),l=!0);return l}function Te(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!H(i,e))||!(!t.wildcard||!q(i,e))}return!0}function Ne(e,t,i,n,r){let o="string"==typeof r.method?e[r.method]:r.method,a=r.property;o?o.call(e,e.__data[a],n[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Ie(e,t,i){let n=j(t);if(n!==t){return De(e,K(n)+"-changed",i[t],t),!0}return!1}function De(e,t,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),z(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function Fe(e,t,i,n,r,o){let a=(o?j(t):t)!=t?t:null,s=a?V(e,a):e.__data[t];a&&void 0===s&&(s=i[t]),De(e,r.eventName,s,a)}function Re(e,t,i,n,r){let o=e.__data[t];d&&(o=d(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}function Me(e,t,i,n){let r=e[Se.COMPUTE];if(r)if(b){Ce++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[Se.COMPUTE];let n,{counts:r,ready:o,total:a}=function(e){const t=e.__computeInfo,i={},n=e[Se.COMPUTE],r=[];let o=0;for(let e in t){const n=t[e];o+=i[e]=n.args.filter(e=>!e.literal).length+(n.dynamicFn?1:0)}for(let e in n)t[e]||r.push(e);return{counts:i,ready:r,total:o}}(e);for(;n=o.shift();){t.set(n,t.size);const e=i[n];e&&e.forEach(e=>{const t=e.info.methodInfo;--a,0==--r[t]&&o.push(t)})}if(0!==a){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),a=[];for(let e in t)ze(e,r,a,o,n);let s;for(;s=a.shift();)Be(e,"",t,i,s)&&ze(s.methodInfo,r,a,o,n);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;Ae(e,r,o,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const Le=(e,t,i)=>{let n=0,r=t.length-1,o=-1;for(;n<=r;){const a=n+r>>1,s=i.get(t[a].methodInfo)-i.get(e.methodInfo);if(s<0)n=a+1;else{if(!(s>0)){o=a;break}r=a-1}}o<0&&(o=r+1),t.splice(o,0,e)},ze=(e,t,i,n,r)=>{const o=t[r?j(e):e];if(o)for(let t=0;t<o.length;t++){const a=o[t];a.info.lastRun===Ce||r&&!Te(e,a.trigger)||(a.info.lastRun=Ce,Le(a.info,i,n))}};function Be(e,t,i,n,r){let o=Ve(e,t,i,n,r);if(o===Pe)return!1;let a=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,o,!0):(e[a]=o,!1)}function je(e,t,i,n,r,o,a){i.bindings=i.bindings||[];let s={kind:n,target:r,parts:o,literal:a,isCompound:1!==o.length};if(i.bindings.push(s),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||K(r)+"-changed",s.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<s.parts.length;i++){let n=s.parts[i];n.compoundIndex=i,He(e,t,s,n,l)}}function He(e,t,i,n,r){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=n.dependencies,a={index:r,binding:i,part:n,evaluator:e};for(let i=0;i<o.length;i++){let n=o[i];"string"==typeof n&&(n=Qe(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:qe,info:a,trigger:n})}}}function qe(e,t,i,n,r,o,a){let s=a[r.index],l=r.binding,c=r.part;if(o&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let n=i[t];t=U(c.source,l.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(s)}else{let a=r.evaluator._evaluateBinding(e,c,t,i,n,o);a!==Pe&&function(e,t,i,n,r){r=function(e,t,i,n){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[n.compoundIndex]=t,t=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,i,n),d&&(r=d(r,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[Se.READ_ONLY]&&t[Se.READ_ONLY][n]||t._setPendingProperty(n,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,r)}}(e,s,l,c,a)}}function Ue(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e].literal;let o=t.target;i[o]=r,t.literal&&"property"==t.kind&&("className"===o&&(e=z(e)),e[o]=t.literal)}}function $e(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,n,r){let o,a=e.detail,s=a&&a.path;s?(n=U(i,n,s),o=a&&a.value):o=e.currentTarget[i],o=r?!o:o,t[Se.READ_ONLY]&&t[Se.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,o,!0,Boolean(s))||a&&a.queueProperty||t._invalidateProperties()}(e,t,i.target,n.source,n.negate)}))}}function Ye(e,t,i,n,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<t.args.length&&(r=t.args[o]);o++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:n,info:a,trigger:r});return o&&e._addPropertyEffect(t.methodName,i,{fn:n,info:a}),a}function Ve(e,t,i,n,r){let o=e._methodHost||e,a=o[r.methodName];if(a){let n=e._marshalArgs(r.args,t,i);return n===Pe?Pe:a.apply(o,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Je=[],Ge=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Xe(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function We(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Je};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Qe(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Qe(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=j(t),i.structured=B(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Ke(e,t,i){let n=V(e,i);return void 0===n&&(n=t[i]),n}function Ze(e,t,i,n){const r={indexSplices:n};g&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),g&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function et(e,t,i,n,r,o){Ze(e,t,i,[{index:n,addedCount:r,removed:o,object:t,type:"splice"}])}const tt=S(e=>{const t=xe(he(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Se}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(it.length){let e=it[it.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Se.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==Se.READ_ONLY);let n=ke(this,t,!0)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=ke(this,t,!0)[e],r=n.indexOf(i);r>=0&&n.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Se.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Se.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Se.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Se.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||j(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=V(this,e);if(!(e=J(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let n=e.__dataLinkedPaths;if(n){let r;for(let o in n){let a=n[o];q(o,t)?(r=U(o,a,t),e._setPendingPropertyOrPath(r,i,!0,!0)):q(a,t)&&(r=U(a,o,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=z(e)),e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&B(e),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[Se.NOTIFY]&&this[Se.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[Se.READ_ONLY]&&this[Se.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n,r=this.__dataHasPaths;this.__dataHasPaths=!1,Me(this,t,i,r),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),Ae(this,this[Se.REFLECT],t,i,r),Ae(this,this[Se.OBSERVE],t,i,r),n&&function(e,t,i,n,r){let o,a,s=e[Se.NOTIFY],l=Ce++;for(let a in t)t[a]&&(s&&Oe(e,s,l,a,i,n,r)||r&&Ie(e,a,i))&&(o=!0);o&&(a=e.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,n,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[Se.PROPAGATE]&&Ae(this,this[Se.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,n){const r=(t,n)=>{Ae(this,e.propertyEffects,t,i,n,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,i,n)};e.runEffects?e.runEffects(r,t,n):r(t,n)}linkPaths(e,t){e=$(e),t=$(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=$(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Ze(this,V(this,e,i),i.path,t)}get(e,t){return V(t||this,e)}set(e,t,i){i?J(i,e,t):this[Se.READ_ONLY]&&this[Se.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=V(this,e,i),r=n.length,o=n.push(...t);return t.length&&et(this,n,i.path,r,t.length,[]),o}pop(e){let t={path:""},i=V(this,e,t),n=Boolean(i.length),r=i.pop();return n&&et(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...n){let r,o={path:""},a=V(this,e,o);return t<0?t=a.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?a.splice(t):a.splice(t,i,...n),(n.length||r.length)&&et(this,a,o.path,t,n.length,r),r}shift(e){let t={path:""},i=V(this,e,t),n=Boolean(i.length),r=i.shift();return n&&et(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},n=V(this,e,i),r=n.unshift(...t);return t.length&&et(this,n,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=V(this,e,n),i=n.path}else i=Array.isArray(e)?$(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,Se.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,Se.OBSERVE,{fn:Ne,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,Se.OBSERVE,{fn:Ne,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=We(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Ye(this,i,Se.OBSERVE,Ve,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Se.NOTIFY,{fn:Fe,info:{eventName:K(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Se.REFLECT,{fn:Re,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=We(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");const r=Ye(this,n,Se.COMPUTE,Be,e,i);ke(this,"__computeInfo")[e]=r}_marshalArgs(e,t,i){const n=this.__data,r=[];for(let o=0,a=e.length;o<a;o++){let{name:a,structured:s,wildcard:l,value:c,literal:d}=e[o];if(!d)if(l){const e=q(a,t),r=Ke(n,i,e?t:a);c={path:e?t:a,value:r,base:e?V(n,a):r}}else c=s?Ke(n,i,a):n[a];if(g&&!this._overrideLegacyUndefined&&void 0===c&&e.length>1)return Pe;r[o]=c}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__preBoundTemplateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=n,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,n=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=n,n?n.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),it.push(this);let i=super._stampTemplate(e,t);if(it.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let r=n[t],o=i[t],a=r.bindings;if(a)for(let t=0;t<a.length;t++){let i=a[t];Ue(o,i),$e(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:n,parent:r}=t;i?i.nextSibling=n:r&&(r.firstChild=n),n?n.previousSibling=i:r&&(r.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];z(z(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,n){let r=t._parseTemplateNode.call(this,e,i,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Xe(t)||" ",je(this,i,n,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,n,r,o){let a=this._parseBindings(o,i);if(a){let t=r,o="property";Ee.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let s=Xe(a);return s&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(s+=" "+e.getAttribute(r)),e.setAttribute(r,s)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(r=Q(r)),je(this,i,n,o,r,a,s),!0}return t._parseTemplateNodeAttribute.call(this,e,i,n,r,o)}static _parseTemplateNestedTemplate(e,i,n){let r=t._parseTemplateNestedTemplate.call(this,e,i,n);const o=e.parentNode,a=n.templateInfo,s="dom-if"===o.localName,l="dom-repeat"===o.localName;y&&(s||l)&&(o.removeChild(e),(n=n.parentInfo).templateInfo=a,n.noted=!0,r=!1);let c=a.hostProps;if(v&&s)c&&(i.hostProps=Object.assign(i.hostProps||{},c),y||(n.parentInfo.noted=!0));else{let e="{";for(let t in c){je(this,i,n,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return r}static _parseBindings(e,t){let i,n=[],r=0;for(;null!==(i=Ge.exec(e));){i.index>r&&n.push({literal:e.slice(r,i.index)});let o=i[1][0],a=Boolean(i[2]),s=i[3].trim(),l=!1,c="",d=-1;"{"==o&&(d=s.indexOf("::"))>0&&(c=s.substring(d+2),s=s.substring(0,d),l=!0);let u=We(s),h=[];if(u){let{args:e,methodName:i}=u;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let n=t.dynamicFns;(n&&n[i]||u.static)&&(h.push(i),u.dynamicFn=!0)}else h.push(s);n.push({source:s,mode:o,negate:a,customEvent:l,signature:u,dependencies:h,event:c}),r=Ge.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,r,o){let a;return a=t.signature?Ve(e,i,n,0,t.signature):i!=t.source?V(e,t.source):o&&B(i)?V(e,i):e.__data[i],t.negate&&(a=!a),a}}}),it=[];const nt=S(e=>{const t=ce(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),rt=window.ShadyCSS&&window.ShadyCSS.cssBuild,ot=S(e=>{const t=nt(tt(e));function i(e,t,i,n){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,n)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,n[i.observer]),e._addPropertyToAttributeMap(t)}function n(e,t,i,n){if(!rt){const r=t.content.querySelectorAll("style"),o=R(t),a=function(e){let t=N(e);return t?M(t):[]}(i),s=t.content.firstElementChild;for(let i=0;i<a.length;i++){let r=a[i];r.textContent=e._processStyleText(r.textContent,n),t.content.insertBefore(r,s)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],a=r[l];a!==i?(i=i.cloneNode(!0),a.parentNode.insertBefore(i,a)):l++,i.textContent=e._processStyleText(i.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),C&&rt&&l){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):f||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!h||p)&&(t=T.import(e,"template"),h&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=a(e.url);else{const e=T.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=c,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return o(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;n(this,t,e,i?r(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=z(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),_&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=r(this.importPath)),r(e,t)}static _parseTemplateContent(e,i,n){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,n)}static _addTemplatePropertyEffect(e,i,n){return!m||i in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class at{constructor(e){this.value=e.toString()}toString(){return this.value}}function st(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof at)return function(e){if(e instanceof at)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}(e);throw new Error("non-template value passed to Polymer's html function: "+e)}const lt=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+st(i)+e[n+1],e[0]),i},ct=ot(HTMLElement),dt=!(window.ShadyDOM&&window.ShadyDOM.inUse);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ut,ht;function pt(e){ut=(!e||!e.shimcssproperties)&&(dt||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ht=window.ShadyCSS.cssBuild);const ft=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ut=window.ShadyCSS.nativeCss:window.ShadyCSS?(pt(window.ShadyCSS),window.ShadyCSS=void 0):pt(window.WebComponents&&window.WebComponents.flags);const mt=ut;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class _t{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function gt(e){return function e(t,i){let n=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;n=i.substring(e,t.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(xt.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=n.trim();t.atRule=0===r.indexOf(St),t.atRule?0===r.indexOf(Pt)?t.type=yt.MEDIA_RULE:r.match(xt.keyframesRule)&&(t.type=yt.KEYFRAMES_RULE,t.keyframesName=t.selector.split(xt.multipleSpaces).pop()):0===r.indexOf(Ct)?t.type=yt.MIXIN_RULE:t.type=yt.STYLE_RULE}let r=t.rules;if(r)for(let t,n=0,o=r.length;n<o&&(t=r[n]);n++)e(t,i);return t}(function(e){let t=new _t;t.start=0,t.end=e.length;let i=t;for(let n=0,r=e.length;n<r;n++)if(e[n]===vt){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new _t,i.start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===wt&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(xt.comments,"").replace(xt.port,"")),e)}function bt(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Ct)}(i))for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++)n=bt(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(xt.mixinApply,"").replace(xt.varApply,"")}(e=function(e){return e.replace(xt.customProp,"").replace(xt.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+vt+"\n"),i+=n,e.selector&&(i+=wt+"\n\n")),i}const yt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},vt="{",wt="}",xt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ct="--",Pt="@media",St="@",Et=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,kt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,At=/@media\s(.*)/,Ot=new Set;function Tt(e){const t=e.textContent;if(!Ot.has(t)){Ot.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Nt(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function It(e,t){return e?("string"==typeof e&&(e=gt(e)),t&&Ft(e,t),bt(e,mt)):""}function Dt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=gt(e.textContent)),e.__cssRules||null}function Ft(e,t,i,n){if(!e)return;let r=!1,o=e.type;if(n&&o===yt.MEDIA_RULE){let t=e.selector.match(At);t&&(window.matchMedia(t[1]).matches||(r=!0))}o===yt.STYLE_RULE?t(e):i&&o===yt.KEYFRAMES_RULE?i(e):o===yt.MIXIN_RULE&&(r=!0);let a=e.rules;if(a&&!r)for(let e,r=0,o=a.length;r<o&&(e=a[r]);r++)Ft(e,t,i,n)}window.ShadyDOM&&window.ShadyDOM.wrap;function Rt(e){if(void 0!==ht)return ht;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function Mt(e){return""!==Rt(e)}function Lt(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function zt(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Bt=/;\s*/m,jt=/^\s*(initial)|(inherit)\s*$/,Ht=/\s*!important/;class qt{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Ut=null;class $t{constructor(){this._currentElement=null,this._measureElement=null,this._map=new qt}detectMixin(e){return function(e){const t=kt.test(e)||Et.test(e);return kt.lastIndex=0,Et.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];Nt(n)?dt||(Tt(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Dt(e);return this.transformRules(i,t),e.textContent=It(i),i}transformCustomStyle(e){let t=Dt(e);return Ft(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=It(t),t}transformRules(e,t){this._currentElement=t,Ft(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Et,(e,i,n,r)=>this._produceCssProperties(e,i,n,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return Ft(t,t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=kt.exec(e);){let n=i[0],r=i[1],o=i.index,a=o+n.indexOf("@apply"),s=o+n.length,l=e.slice(0,a),c=e.slice(s),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let u=this._atApplyToCssProperties(r,d);e=`${l}${u}${c}`,kt.lastIndex=o+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Bt,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let r,o,a;this._currentElement&&(n.dependants[this._currentElement]=!0);const s=n.properties;for(r in s)a=t&&t[r],o=[r,": var(",e,"_-_",r],a&&o.push(",",a.replace(Ht,"")),o.push(")"),Ht.test(s[r])&&o.push(" !important"),i.push(o.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=jt.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,r=e.split(";"),o={};for(let e,a,s=0;s<r.length;s++)e=r[s],e&&(a=e.split(":"),a.length>1&&(i=a[0].trim(),n=a.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),o[i]=n));return o}_invalidateMixinEntry(e){if(Ut)for(let t in e.dependants)t!==this._currentElement&&Ut(t)}_produceCssProperties(e,t,i,n,r){if(i&&function e(t,i){let n=t.indexOf("var(");if(-1===n)return i(t,"","","");let r=function(e,t){let i=0;for(let n=t,r=e.length;n<r;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}(t,n+3),o=t.substring(n+4,r),a=t.substring(0,n),s=e(t.substring(r+1),i),l=o.indexOf(",");return-1===l?i(a,o.trim(),"",s):i(a,o.substring(0,l).trim(),o.substring(l+1).trim(),s)}(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let o=this._consumeCssProperties(""+n,r),a=e.slice(0,e.indexOf("--")),s=this._cssTextToMap(o,!0),l=s,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),s):this._map.set(t,l);let u,h,p=[],f=!1;for(u in l)h=s[u],void 0===h&&(h="initial"),d&&!(u in d)&&(f=!0),p.push(`${t}_-_${u}: ${h}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(a=`${e};${a}`),`${a}${p.join("; ")};`}}$t.prototype.detectMixin=$t.prototype.detectMixin,$t.prototype.transformStyle=$t.prototype.transformStyle,$t.prototype.transformCustomStyle=$t.prototype.transformCustomStyle,$t.prototype.transformRules=$t.prototype.transformRules,$t.prototype.transformRule=$t.prototype.transformRule,$t.prototype.transformTemplate=$t.prototype.transformTemplate,$t.prototype._separator="_-_",Object.defineProperty($t.prototype,"invalidCallback",{get:()=>Ut,set(e){Ut=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Yt={},Vt="_applyShimCurrentVersion",Jt="_applyShimNextVersion",Gt=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xt(e){let t=Yt[e];t&&function(e){e[Vt]=e[Vt]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[Jt]=(e[Jt]||0)+1}(t)}function Wt(e){return e[Vt]===e[Jt]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Qt,Kt=null,Zt=window.HTMLImports&&window.HTMLImports.whenReady||null;function ei(e){requestAnimationFrame((function(){Zt?Zt(e):(Kt||(Kt=new Promise(e=>{Qt=e}),"complete"===document.readyState?Qt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Qt()})),Kt.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ti="__shadyCSSCachedStyle";let ii=null,ni=null;class ri{constructor(){this.customStyles=[],this.enqueued=!1,ei(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&ni&&(this.enqueued=!0,ei(ni))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[ti])return e[ti];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[ti])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;ii&&ii(e),i[ti]=e}}return e}}ri.prototype.addCustomStyle=ri.prototype.addCustomStyle,ri.prototype.getStyleForCustomStyle=ri.prototype.getStyleForCustomStyle,ri.prototype.processStyles=ri.prototype.processStyles,Object.defineProperties(ri.prototype,{transformCallback:{get:()=>ii,set(e){ii=e}},validateCallback:{get:()=>ni,set(e){let t=!1;ni||(t=!0),ni=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const oi=new $t;class ai{constructor(){this.customStyleInterface=null,oi.invalidCallback=Xt}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{oi.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Mt(e))return;Yt[t]=e;let i=oi.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&oi.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Lt(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}(e),i=Yt[t];if((!i||!Mt(i))&&i&&!Wt(i)){(function(e){return!Wt(e)&&e._applyShimValidatingVersion===e[Jt]})(i)||(this.prepareTemplate(i,t),function(e){e._applyShimValidatingVersion=e[Jt],e._validating||(e._validating=!0,Gt.then((function(){e[Vt]=e[Jt],e._validating=!1})))}(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=It(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ai;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>zt(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:mt,nativeShadow:dt,cssBuild:ht,disableRuntime:ft},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=oi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class si{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,li.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),li.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof si?e._cancelAsync():e=new si,e.setConfig(t,i),e}}let li=new Set;const ci=function(e){li.add(e)},di=function(){const e=Boolean(li.size);return li.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ui="string"==typeof document.head.style.touchAction,hi="__polymerGesturesHandled",pi="__polymerGesturesTouchAction",fi=["mousedown","mousemove","mouseup","click"],mi=[0,1,4,2],_i=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function gi(e){return fi.indexOf(e)>-1}let bi=!1;function yi(e){if(!gi(e)&&"touchend"!==e)return ui&&bi&&u?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){bi=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let vi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const wi=[],xi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ci={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Pi(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let Si=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[hi]={skip:!0},"click"===e.type)){let t=!1,n=Ni(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)wi.push(n[e]);else if(i=n[e],xi[i.localName]){let i=Pi(n[e]);for(let e=0;e<i.length;e++)t=t||wi.indexOf(i[e])>-1}if(n[e]===Ai.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Ei(e){let t=vi?["click"]:fi;for(let i,n=0;n<t.length;n++)i=t[n],e?(wi.length=0,document.addEventListener(i,Si,!0)):document.removeEventListener(i,Si,!0)}function ki(e){let t=e.type;if(!gi(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!_i&&(t=mi[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Ai={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Oi(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Ti(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Ai.mouse.mouseIgnoreJob||Ei(!0),Ai.mouse.target=Ni(e)[0],Ai.mouse.mouseIgnoreJob=si.debounce(Ai.mouse.mouseIgnoreJob,oe.after(2500),(function(){Ei(),Ai.mouse.target=null,Ai.mouse.mouseIgnoreJob=null}))}),!!bi&&{passive:!0});const Ni=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ii={},Di=[];function Fi(e){const t=Ni(e);return t.length>0?t[0]:e.target}function Ri(e){let t,i=e.type,n=e.currentTarget.__polymerGestures;if(!n)return;let r=n[i];if(r){if(!e[hi]&&(e[hi]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(Ai.touch.id=t.identifier),Ai.touch.id!==t.identifier)return;ui||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)Ai.touch.x=t.clientX,Ai.touch.y=t.clientY,Ai.touch.scrollDecided=!1;else if("touchmove"===i){if(Ai.touch.scrollDecided)return;Ai.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Ni(e);for(let e,n=0;n<i.length;n++)if(e=i[n],e[pi]){t=e[pi];break}return t}(e),n=!1,r=Math.abs(Ai.touch.x-t.clientX),o=Math.abs(Ai.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=o>r:"pan-y"===i&&(n=r>o)),n?e.preventDefault():Hi("track")}}(e)}if(t=e[hi],!t.skip){for(let i,n=0;n<Di.length;n++)i=Di[n],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,o=0;o<Di.length;o++)n=Di[o],r[n.name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function Mi(e,t,i){return!!Ii[t]&&(function(e,t,i){let n=Ii[t],r=n.deps,o=n.name,a=e.__polymerGestures;a||(e.__polymerGestures=a={});for(let t,i,n=0;n<r.length;n++)t=r[n],vi&&gi(t)&&"click"!==t||(i=a[t],i||(a[t]=i={_count:0}),0===i._count&&e.addEventListener(t,Ri,yi(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&Bi(e,n.touchAction)}(e,t,i),!0)}function Li(e,t,i){return!!Ii[t]&&(function(e,t,i){let n=Ii[t],r=n.deps,o=n.name,a=e.__polymerGestures;if(a)for(let t,i,n=0;n<r.length;n++)t=r[n],i=a[t],i&&i[o]&&(i[o]=(i[o]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,Ri,yi(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function zi(e){Di.push(e);for(let t=0;t<e.emits.length;t++)Ii[e.emits[t]]=e}function Bi(e,t){ui&&e instanceof HTMLElement&&se.run(()=>{e.style.touchAction=t}),e[pi]=t}function ji(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,z(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Hi(e){let t=function(e){for(let t,i=0;i<Di.length;i++){t=Di[i];for(let i,n=0;n<t.emits.length;n++)if(i=t.emits[n],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function qi(e,t,i,n){t&&ji(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return Hi(e)}})}function Ui(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),r=Math.abs(e.y-i);return n>=5||r>=5}function $i(e,t,i){if(!t)return;let n,r=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],a=o.x-e.x,s=o.y-e.y,l=0;r&&(n=o.x-r.x,l=o.y-r.y),ji(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:a,dy:s,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(e,t),r===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function Yi(e,t,i){let n=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=Fi(i||t);!o||Ci[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Fi(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,r=e.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||ji(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/zi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ti(this.info)},mousedown:function(e){if(!ki(e))return;let t=Fi(e),i=this;Oi(this.info,(function(e){ki(e)||(qi("up",t,e),Ti(i.info))}),(function(e){ki(e)&&qi("up",t,e),Ti(i.info)})),qi("down",t,e)},touchstart:function(e){qi("down",Fi(e),e.changedTouches[0],e)},touchend:function(e){qi("up",Fi(e),e.changedTouches[0],e)}}),zi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ti(this.info)},mousedown:function(e){if(!ki(e))return;let t=Fi(e),i=this,n=function(e){let n=e.clientX,r=e.clientY;Ui(i.info,n,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Hi("tap"),i.info.addMove({x:n,y:r}),ki(e)||(i.info.state="end",Ti(i.info)),t&&$i(i.info,t,e),i.info.started=!0)};Oi(this.info,n,(function(e){i.info.started&&n(e),Ti(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Fi(e),i=e.changedTouches[0],n=i.clientX,r=i.clientY;Ui(this.info,n,r)&&("start"===this.info.state&&Hi("tap"),this.info.addMove({x:n,y:r}),$i(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Fi(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),$i(this.info,t,i))}}),zi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){ki(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){ki(e)&&Yi(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Yi(this.info,e.changedTouches[0],e)}});const Vi=S(e=>class extends e{_addEventListenerToNode(e,t,i){Mi(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Li(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}),Ji=/:host\(:dir\((ltr|rtl)\)\)/g,Gi=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Xi=/:dir\((?:ltr|rtl)\)/,Wi=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Qi=[];
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ki=null,Zi="";function en(){Zi=document.documentElement.getAttribute("dir")}function tn(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Zi)}}function nn(){en(),Zi=document.documentElement.getAttribute("dir");for(let e=0;e<Qi.length;e++)tn(Qi[e])}const rn=S(e=>{Wi||Ki||(en(),Ki=new MutationObserver(nn),Ki.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=he(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!Wi&&Xi.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Ji,':host([dir="$1"])'),t=t.replace(Gi,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ki&&Ki.takeRecords().length&&nn(),Qi.push(this),tn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Qi.indexOf(this);e>-1&&Qi.splice(e,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function on(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function an(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?on():window.addEventListener("DOMContentLoaded",on);function sn(e,t,i,n,r,o){let a,s=0,l=0,c=Math.min(i-t,o-r);if(0==t&&0==r&&(s=function(e,t,i){for(let n=0;n<i;n++)if(!cn(e[n],t[n]))return n;return i}(e,n,c)),i==e.length&&o==n.length&&(l=function(e,t,i){let n=e.length,r=t.length,o=0;for(;o<i&&cn(e[--n],t[--r]);)o++;return o}(e,n,c-s)),r+=s,o-=l,(i-=l)-(t+=s)==0&&o-r==0)return[];if(t==i){for(a=an(t,[],0);r<o;)a.removed.push(n[r++]);return[a]}if(r==o)return[an(t,[],i-t)];let d=function(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let o,a=e[t-1][i-1],s=e[t-1][i],l=e[t][i-1];o=s<l?s<a?s:a:l<a?l:a,o==a?(a==n?r.push(0):(r.push(1),n=a),t--,i--):o==s?(r.push(3),t--,n=s):(r.push(2),i--,n=l)}return r.reverse(),r}(function(e,t,i,n,r,o){let a=o-r+1,s=i-t+1,l=new Array(a);for(let e=0;e<a;e++)l[e]=new Array(s),l[e][0]=e;for(let e=0;e<s;e++)l[0][e]=e;for(let i=1;i<a;i++)for(let o=1;o<s;o++)if(cn(e[t+o-1],n[r+i-1]))l[i][o]=l[i-1][o-1];else{let e=l[i-1][o]+1,t=l[i][o-1]+1;l[i][o]=e<t?e:t}return l}(e,t,i,n,r,o));a=void 0;let u=[],h=t,p=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:a&&(u.push(a),a=void 0),h++,p++;break;case 1:a||(a=an(h,[],0)),a.addedCount++,h++,a.removed.push(n[p]),p++;break;case 2:a||(a=an(h,[],0)),a.addedCount++,h++;break;case 3:a||(a=an(h,[],0)),a.removed.push(n[p]),p++}return a&&u.push(a),u}function ln(e,t){return sn(e,0,e.length,t,0,t.length)}function cn(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function dn(e){return"slot"===e.localName}let un=class{static getFlattenedNodes(e){const t=z(e);return dn(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>dn(e)?z(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){dn(this._target)?this._listenSlots([this._target]):z(this._target).children&&(this._listenSlots(z(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){dn(this._target)?this._unlistenSlots([this._target]):z(this._target).children&&(this._unlistenSlots(z(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,se.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=ln(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,r=0;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];dn(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];dn(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=di()}while(e||t)},pn=Element.prototype,fn=pn.matches||pn.matchesSelector||pn.mozMatchesSelector||pn.msMatchesSelector||pn.oMatchesSelector||pn.webkitMatchesSelector,mn=function(e,t){return fn.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class _n{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new un(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(z(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=z(t).parentNode||z(t).host;return t===this.node}getOwnerRoot(){return z(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?z(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=z(this.node).assignedSlot;for(;t;)e.push(t),t=z(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return z(i).importNode(e,t)}getEffectiveChildNodes(){return un.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,r=0,o=t.length;r<o&&(n=t[r]);r++)n.nodeType===Node.ELEMENT_NODE&&mn(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function gn(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class bn{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}_n.prototype.cloneNode,_n.prototype.appendChild,_n.prototype.insertBefore,_n.prototype.removeChild,_n.prototype.replaceChild,_n.prototype.setAttribute,_n.prototype.removeAttribute,_n.prototype.querySelector,_n.prototype.querySelectorAll,_n.prototype.parentNode,_n.prototype.firstChild,_n.prototype.lastChild,_n.prototype.nextSibling,_n.prototype.previousSibling,_n.prototype.firstElementChild,_n.prototype.lastElementChild,_n.prototype.nextElementSibling,_n.prototype.previousElementSibling,_n.prototype.childNodes,_n.prototype.children,_n.prototype.classList,_n.prototype.textContent,_n.prototype.innerHTML;let yn=_n;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(_n.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=_n.prototype[t])}),gn(e.prototype,["classList"]),yn=e,Object.defineProperties(bn.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&vn(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const n=i[e];if(vn(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(_n.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),gn(_n.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(_n.prototype,["textContent","innerHTML","className"]);const vn=function(e){if((e=e||document)instanceof yn)return e;if(e instanceof bn)return e;let t=e.__domApi;return t||(t=e instanceof Event?new bn(e):new yn(e),e.__domApi=t),t},wn=window.ShadyDOM,xn=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Cn(e,t){return z(e).getRootNode()===t}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Pn=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};S(e=>{const t=ot(e);let i=Pn(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,n){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,z(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});let Sn=window.ShadyCSS;const En=S(e=>{const t=Vi(ot(e)),i=rt?t:rn(t),n=Pn(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(x&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(x&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return x&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,z(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(f&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),x&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,r=0;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=t;let r=i.node||this;return z(r).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(e);r||(r={},n.set(e,r));let o=t+i;r[o]||(r[o]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,o=n&&n[r];o&&(this._removeEventListenerFromNode(e,t,o),n[r]=null)}setScrollDirection(e,t){Bi(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=z(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=vn(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return vn(this).getEffectiveChildNodes()}queryDistributedElements(e){return vn(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?vn(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&z(this).contains(e)&&z(this).getRootNode()===z(e).getRootNode()}isLocalDescendant(e){return this.root===z(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!wn||!xn)return null;if(!wn.handlesDynamicScoping)return null;const i=xn.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),r=z(e).getRootNode(),o=e=>{if(!Cn(e,r))return;const t=Array.from(wn.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!Cn(o,r))continue;const a=i.currentScopeForNode(o);a!==n&&(""!==a&&i.unscopeNode(o,a),i.scopeNode(o,n))}};if(o(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Sn.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=si.debounce(this._debouncers[e],i>0?oe.after(i):se,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?oe.run(e.bind(this),t):~se.run(e.bind(this))}cancelAsync(e){e<0?se.cancel(~e):oe.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return mn(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(z(i).setAttribute(e,""),!0):(z(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=V(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o}),kn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},An={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},On=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},An);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Tn(e,t,i,n){!function(e,t,i){const n=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let o=0;o<r.length;o++){let a=r[o];if(!(a in i))if(n)t[a]=e[a];else{let i=Object.getOwnPropertyDescriptor(e,a);i&&(i.configurable=!0,Object.defineProperty(t,a,i))}}}(t,e,n);for(let e in kn)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function Nn(e,t){for(const i in t){const n=e[i],r=t[i];e[i]=!("value"in r)&&n&&"value"in n?Object.assign({value:n.value},r):r}}const In=En(HTMLElement);function Dn(e,t,i){let n;const r={};class o extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)Nn(t,n[e].properties);return Nn(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)e=n[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=o.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),f&&a(e);const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=r.attributeChanged;if(n)for(let r=0;r<n.length;r++)n[r].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=function e(t,i,n){i=i||[];for(let r=t.length-1;r>=0;r--){let o=t[r];o?Array.isArray(o)?e(o,i):i.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&i.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),o.prototype.behaviors=e?e.concat(i):n}const a=t=>{n&&function(e,t,i){for(let n=0;n<t.length;n++)Tn(e,t[n],i,On)}(t,n,r),Tn(t,e,r,An)};return f||a(o.prototype),o.generatedFrom=e,o}const Fn=function(e){let t;return t="function"==typeof e?e:Fn.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Rn(e,t,i,n,r){let o;r&&(o="object"==typeof i&&null!==i,o&&(n=e.__dataTemp[t]));let a=n!==i&&(n==n||i==i);return o&&a&&(e.__dataTemp[t]=i),a}Fn.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(In):In;return i=Dn(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const Mn=S(e=>class extends e{_shouldPropertyChange(e,t,i){return Rn(this,e,t,i,!0)}}),Ln=S(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Rn(this,e,t,i,this.mutableData)}});Mn._mutablePropertyChange=Rn;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let zn=null;function Bn(){return zn}Bn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Bn,writable:!0}});const jn=tt(Bn),Hn=Mn(jn);const qn=tt(class{});function Un(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),z(z(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&z(z(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class $n extends qn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Un(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}$n.prototype.__dataHost,$n.prototype.__templatizeOptions,$n.prototype._methodHost,$n.prototype.__templatizeOwner,$n.prototype.__hostProps;const Yn=Mn($n);function Vn(e){let t=e.__dataHost;return t&&t._methodHost||t}function Jn(e,t,i){let n=i.mutableData?Yn:$n;Qn.mixin&&(n=Qn.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),function(e,t,i,n){let r=i.hostProps||{};for(let t in n.instanceProps){delete r[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Wn(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(r,e,t,i),r}function Gn(e,t,i,n){let r=i.forwardHostProp;if(r&&t.hasHostProps){const o="template"==e.localName;let a=t.templatizeTemplateClass;if(!a){if(o){let e=i.mutableData?Hn:jn;class n extends e{}a=t.templatizeTemplateClass=n}else{const i=e.constructor;class n extends i{}a=t.templatizeTemplateClass=n}let s=t.hostProps;for(let e in s)a.prototype._addPropertyEffect("_host_"+e,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Xn(e,r)}),a.prototype._createNotifyingProperty("_host_"+e);m&&n&&function(e,t,i){const n=i.constructor._properties,{propertyEffects:r}=e,{instanceProps:o}=t;for(let e in r)if(!(n[e]||o&&o[e])){const t=r[e];for(let i=0;i<t.length;i++){const{part:n}=t[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),o)!function(e,t){zn=e,Object.setPrototypeOf(e,t.prototype),new t,zn=null}(e,a),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,a.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Xn(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function Wn(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function Qn(e,t,i){if(h&&!Vn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:$n)._parseTemplate(e),r=n.templatizeInstanceClass;r||(r=Jn(e,n,i),n.templatizeInstanceClass=r);const o=Vn(e);Gn(e,n,i,o);let a=class extends r{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a=a,a}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Kn=!1;function Zn(){if(f&&!s){if(!Kn){Kn=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const er=Vi(Ln(tt(HTMLElement)));customElements.define("dom-bind",class extends er{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),h)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,n){this.mutableData=!0}connectedCallback(){Zn()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){z(z(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const tr=Ln(ct);class ir extends tr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!w,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Zn()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=z(z(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Qn(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let n,r=0;r<i.length&&(n=i[r]);r++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((n=this.as)===(r=t)||H(n,r)||q(n,r)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let r=U(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(r,i)}var n,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=si.debounce(this.__renderDebouncer,t>0?oe.after(t):se,e.bind(this)),ci(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),hn()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),w&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i])),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const n=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],o=i[r],a=e[o];n[o]=r,t?(t._setPendingProperty(this.as,a),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(a,r,o)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=z(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){const n=this.__stampInstance(e,t,i);let r=this.__instances[t+1],o=r?r.children[0]:this;return z(z(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[r],a=this.__instances[o];if(a){let i=this.as+(e?"."+e:"");a._setPendingPropertyOrPath(i,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=z(t).parentNode;return null}(this.template,e)}}customElements.define(ir.is,ir);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class nr extends ct{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=si.debounce(this.__renderDebouncer,se,()=>this.__render()),ci(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=z(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||z(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Zn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:z(e).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!z(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=z(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(z(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)z(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){hn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),w&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const rr=v?class extends nr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(h&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(n.changedProps,t)),e(t,i);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=j(e);n.changedProps[t]=this.__dataHost[t]}else Object.assign(n.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),z(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Un(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends nr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Qn(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[j(e)]=!0))}})),this.__instance=new this.__ctor,z(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=z(e[0]).parentNode;if(t){t=z(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(rr.is,rr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let or=S(e=>{let t=ot(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=ln(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=i.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(ct);class ar extends or{static get is(){return"array-selector"}static get template(){return null}}customElements.define(ar.is,ar);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const sr=new ri;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){sr.processStyles(),Lt(e,t)},styleElement(e){sr.processStyles()},styleDocument(e){sr.processStyles(),Lt(document.body,e)},getComputedStyleValue:(e,t)=>zt(e,t),flushCustomStyles(){},nativeCss:mt,nativeShadow:dt,cssBuild:ht,disableRuntime:ft}),window.ShadyCSS.CustomStyleInterface=sr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const lr=window.ShadyCSS.CustomStyleInterface;class cr extends HTMLElement{constructor(){super(),this._style=null,lr.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=L(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",cr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const dr=En(HTMLElement).prototype,ur=lt`
<custom-style>
  <style is="custom-style">
    html {
      /* OFFICIAL 2019-2020 BRAND COLORS */
      --uvalib-brand-blue-lightest: #87B9D9;
      --uvalib-brand-blue-lighter: #3395D4;
      --uvalib-brand-blue-light: #0370B7;
      --uvalib-brand-blue: #232D4B;

      --uvalib-brand-orange-lightest: #FFEAD6;
      --uvalib-brand-orange: #E57200;
      --uvalib-brand-orange-dark: #B35900;

      --uvalib-blue-alt-lightest: #BFE7F7;
      --uvalib-blue-alt: #007BAC;
      --uvalib-blue-alt-dark: #005679;

      --uvalib-teal-lightest: #C8F2F4;
      --uvalib-teal-light: #5BD7DE;
      --uvalib-teal: #1DA1A8;
      --uvalib-teal-dark: #16777C;

      --uvalib-green-lightest: #89CC74;
      --uvalib-green: #62BB46;
      --uvalib-green-dark: #4E9737;

      --uvalib-red-lightest: #FBCFDA;
      --uvalib-red: #EF3F6B;
      --uvalib-red-emergency: #DF1E43;

      --uvalib-yellow-lightest: #FEF6C8;
      --uvalib-yellow: #ECC602;
      --uvalib-yellow-dark: #B99C02;

      --uvalib-beige: #F7EFE1;
      --uvalib-beige-dark: #C0B298;

      --uvalib-grey-lightest: #F1F1F1;
      --uvalib-grey-light: #DADADA;
      --uvalib-grey: #808080;
      --uvalib-grey-dark: #4F4F4F;
      --uvalib-grey-darkest: #2B2B2B;

      --uvalib-text-light: #FFFFFF;
      --uvalib-text: var(--uvalib-grey-dark);
      --uvalib-text-dark: var(--uvalib-grey-darkest);

      /* Brand Color Palate*/
      --uvalib-main-white: var(--uvalib-white);
      --uvalib-main-black: var(--uvalib-black);
      --uvalib-main-rotunda-orange: #E57200;
      --uvalib-main-jefferson-blue: #232D4B;
      --uvalib-secondary-orange: var(--uvalib-secondary-web-orange);
      --uvalib-secondary-blue: var(--uvalib-secondary-web-blue);
      --uvalib-secondary-lt-grey: #F1F1EF;
      --uvalib-secondary-md-grey: var(--uvalib-secondary-medium-gray);

      /*Secondary Brand Colors*/
      --uvalib-secondary-web-orange: #EB5F0C;
      --uvalib-secondary-web-blue: #141E3C;
      --uvalib-secondary-cyan: #009FDF;
      --uvalib-secondary-yellow: #FDDA24;
      --uvalib-secondary-teal: #25CAD3;
      --uvalib-secondary-magenta: #EF3F6B;
      /*--uvalib-secondary-green: #62BB46; - NOT ADA compliant */
      --uvalib-secondary-green: #008000; /*ADA compliant*/
      --uvalib-secondary-light-gray: #F1F1F1;
      --uvalib-secondary-medium-gray: #DADADA;
      /*--uvalib-secondary-text-gray: #666666; - NOT ADA compliant*/
      --uvalib-text-grey: #595959; /*ADA compliant*/
      --uvalib-text-dk-grey: #474747; /*ADA compliant for hover over shaded table rows*/
      --uvalib-text-almost-black: #212121; /*ADA compliant*/
      /*--uvalib-secondary-emergency-red: #DF1E43; - NOT ADA compliant*/
      --uvalib-secondary-emergency-red: #E00000; /*ADA compliant*/

      /* link colors for body links */
      --uvalib-link-color: #0000FF;
      --uvalib-link-color-visited: #660099;

      /* Other color palette */
      --uvalib-blue-50: #B3D4FF;
      --uvalib-blue-100: #67A9FF;
      --uvalib-blue-200: #2F8AFF;
      --uvalib-blue-300: #0065E6;
      --uvalib-blue-400: #0057C8;
      --uvalib-blue-500: #004AA9;
      --uvalib-blue-600: #003D8A;
      --uvalib-blue-700: #002F6C;
      --uvalib-blue-800: #00224D;
      --uvalib-blue-900: #00142F;
      --uvalib-blue-a100: #82B1FF;
      --uvalib-blue-a200: #448AFF;
      --uvalib-blue-a400: #2979FF;
      --uvalib-blue-a700: #2962FF;

      --uvalib-orange-50: #FFF4EA;
      --uvalib-orange-100: #FFE8D2;
      --uvalib-orange-200: #FFD3A8;
      --uvalib-orange-300: #FFB060;
      --uvalib-orange-400: #FFA042;
      --uvalib-orange-500: #FF9123;
      --uvalib-orange-600: #FF8204;
      --uvalib-orange-700: var(--uvalib-main-rotunda-orange);
      --uvalib-orange-800: #C66300;
      --uvalib-orange-900: #A85400;
      --uvalib-orange-a100: #FFD180;
      --uvalib-orange-a200: #FFAB40;
      --uvalib-orange-a400: #FF9100;
      --uvalib-orange-a700: #FF6D00;

      --uvalib-grey-50: #FAFAFA;
      --uvalib-grey-100: #F5F5F5;
      --uvalib-grey-200: #EEEEEE;
      --uvalib-grey-300: #E0E0E0;
      --uvalib-grey-400: #BDBDBD;
      --uvalib-grey-500: #9E9E9E;
      --uvalib-grey-600: #757575;
      --uvalib-grey-700: #616161;
      --uvalib-grey-800: #424242;
      --uvalib-grey-900: #212121;

      --uvalib-black-alpha-12: rgba(0, 0, 0, 0.12);
      --uvalib-black-alpha-38: rgba(0, 0, 0, 0.38);
      --uvalib-black-alpha-54: rgba(0, 0, 0, 0.54);
      --uvalib-black-alpha-87: rgba(0, 0, 0, 0.87);
      --uvalib-white-alpha-12: rgba(255, 255, 255, 0.12);
      --uvalib-white-alpha-30: rgba(255, 255, 255, 0.30);
      --uvalib-white-alpha-70: rgba(255, 255, 255, 0.70);

      --uvalib-black: #000;
      --uvalib-white: #FFF;
      --uvalib-danger: #B30000; /*old not ADA compliant #C15943;*/
      --uvalib-success: #00D66E;

      /* color variables */
      --color-primary-color: var(--uvalib-blue-700);
      --color-primary-color-dark: var(--uvalib-blue-800);
      --color-primary-color-light: var(--uvalib-blue-500);

      --accent-color: var(--uvalib-orange-a200); /* paper components reference this */
      --color-accent-color: var(--uvalib-orange-a200);
      --color-accent-color-dark: var(--uvalib-orange-a400);
      --color-accent-color-light: var(--uvalib-orange-a100);

      --color-text-blue: var(--uvalib-blue-a400);
      --color-text-gray: var(--uvalib-grey-700);
      --color-text-dark: var(--uvalib-text-grey);
      --color-text-dark-secondary: var(--uvalib-text-grey);
      --color-text-disabled: var(--uvalib-black-alpha-38);
      --color-text-light: var(--uvalib-white);
      --color-text-light-secondary: var(--white-alpha-70);

      --color-primary-orange: var(--uvalib-orange-700);
      --color-primary-blue: var(--uvalib-blue-700);
      --color-white: var(--uvalib-white);
      --color-secondary-orange: #eb5f0c;
      --color-secondary-blue: #002359;
      --color-medium-blue: #344D9E;
      --color-light-blue: #9FB2CE;
      --color-light-gray: var(--uvalib-grey-100);
      --color-medium-gray: var(--uvalib-grey-400);
      --color-emergency-red: var(--uvalib-danger);

      --color-accessibility-outline: cyan;
      --color-accessibility-outline-light-bg: var(--uvalib-grey-700);
      --color-accessibility-outline-dark-bg: var(--uvalib-grey-400);

      --uvalib-captions-bg: var(--uvalib-grey-200);
      --uvalib-sidebar-bg: var(--uvalib-white);
    }
  </style>
</custom-style>
`;ur.setAttribute("style","display: none;"),document.head.appendChild(ur.content),import("./webfontloader-dec9cc92.js").then(e=>{(window.WebFont?window.WebFont:e.default).load({typekit:{id:"tgy5tlj"}})});const hr=lt`
<custom-style>
  <style is="custom-style">
  /*********************************************/
  /*              BASE ELEMENTS                */
  /*********************************************/

      /* making site background full width */
      body { margin: 0; }

      /* SITE WIDE CUSTOM VARIABLES */
      html {
        /* max display width */
        --uvalib-display-width-max: 1200px;

        /* small media width */
        --small-viewport: { max-width: 30em; }

        /* font variables */
        --font-primary: var(--uva-font-family);

        /*Pulling in fonts via Typekit, weights will pull in font variants*/
        --uva-font-family: 'franklin-gothic-urw',arial,sans-serif;
        --uva-font-family-condensed: 'franklin-gothic-urw-cond',arial narrow,sans-serif;
        /*try to refrain from using this one, difficult to read on small screens*/
        --uva-font-family-compressed: 'franklin-gothic-urw-comp',arial narrow,sans-serif;
        --uva-font-decorative: {
          font-family: 'bodoni-urw',georgia,serif;
          font-style: italic;
          font-weight: 900;
          text-transform: uppercase;
        }

        --font-weight-light: 300; /*not used?*/
        --font-weight-book: 400;
        --font-weight-medium: 500;
        --font-weight-demi: 700;
        --font-weight-heavy: 900;

  /* Main sizing unit - changing this will update most of the font size/spacing variables on the site */
        --uvalib-main-font-size-unit: 16px;

  /* spacing unit of measure */
        --uvalib-spacing-unit: 1em;

  /* typography variables */
        --uvalib-font-base: {
          font-family: var(--font-primary);
          font-weight: 300;
          margin-top: calc(var(--uvalib-spacing-unit)/1);
          margin-bottom: calc(var(--uvalib-spacing-unit)/4);
          text-transform: none;
          color: var(--uvalib-text-grey);
        }

        --h1: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-demi);
          font-size: calc(var(--uvalib-main-font-size-unit)*3.75);
          line-height: calc(var(--uvalib-main-font-size-unit)*3.75);
          color: var(--uvalib-main-jefferson-blue);
          margin-top: calc(var(--uvalib-spacing-unit)/4);
          margin-bottom: calc(var(--uvalib-spacing-unit)/1.5);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
        }
        --h2: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*2);
          line-height: calc(var(--uvalib-main-font-size-unit)*2);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          /* text-transform: uppercase; Not using to improve cognitive recognition*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h3-with-flair: {
          @apply --uva-font-decorative;
          font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.5);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h4: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: calc(var(--uvalib-main-font-size-unit)*1.25);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          /*text-transform: capitalize; Not using, handling with CMS manual entries*/
          color: var(--uvalib-main-jefferson-blue);
        }
        --h5: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-medium);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-main-jefferson-blue);
        }
        --h6: {
          font-family: var(--uva-font-family);
          font-weight: var(--font-weight-book);
          font-size: var(--uvalib-main-font-size-unit);
          line-height: var(--uvalib-main-font-size-unit);
          color: var(--uvalib-text-grey);
        }

        --font-headline: {
          font-family: var(--font-primary);
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          color: var(--uvalib-text-grey);
        };

  /* used for headers in card body */
        --font-title: {
          font-family: var(--font-primary);
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          color: var(--uvalib-text-grey);
        };

  /* main body font */
        --font-body1: {
          font-family: var(--font-primary);
          font-weight: 400;
          font-style: normal;
          font-size: var(--uvalib-main-font-size-unit);
          line-height: calc(var(--uvalib-main-font-size-unit)*1.25);
          color: var(--uvalib-text-grey);
        };

        --uvalib-liame-link-color:  var(--uvalib-link-color);

        --link-hover: {
          text-decoration: underline;
        };

      }

  </style>
</custom-style>`;hr.setAttribute("style","display: none;"),document.head.appendChild(hr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const pr=lt`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;pr.setAttribute("style","display: none;"),document.head.appendChild(pr.content);var fr=document.createElement("style");fr.textContent="[hidden] { display: none !important; }",document.head.appendChild(fr);var mr=Object.freeze({__proto__:null});const _r=lt`
<dom-module id="uvalib-theme">
  <template>
    <style>
    /*********************************************/
    /*          STRUCTURAL ELEMENTS              */
    /*********************************************/

    :host,
    body {
      @apply --font-body1;

      --accessibility-outline-for-light-bg: {
        outline: var(--color-accessibility-outline-light-bg) dotted 3px;
        padding: .15em;
      }

      ;

      --accessibility-outline-for-dark-bg: {
        outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
        padding: .15em;
      }

      ;
    }

    /* easy way to hide/show elements by setting the hidden attribute */
    [hidden] {
      display: none !important;
    }

    /* Only display on Mobile */
    :host([small-screen]) .largeScreen,
    :host([medium-screen]) .largeScreen {
      display: none;
    }

    /* Only display on Large Screen */
    :host([large-screen]) .visibleMobile,
    :host([medium-screen]) .visibleMobile {
      display: none;
    }

    /* Display on Tablet and Desktop only */
    :host([small-screen]) .visibleAllButMobile {
      display: none;
    }

    article>#content {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
      margin-bottom: 4em;
    }

    :host([small-screen]) article>#content {
      margin-bottom: 0;
    }

    h1, .h1 {
      @apply --h1;
    }

    h2, .h2 {
      @apply --h2;
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
    }

    h3, .h3 {
      @apply --h3;
    }

    h4, .h4 {
      @apply --h4;
    }

    h5, .h5 {
      @apply --h5;
    }

    h6, .h6 {
      @apply --h6;
    }

    .paragraph {
      @apply --font-body1;
    }

    /* p { line-height: 1.75; }needs further conditions */

    .all-cap {
      text-transform: uppercase;
    }

    strong {
      font-family: 'franklin-gothic-urw', 'arial', sans-serif;
      font-weight: 700;
    }

    blockquote {
      margin: 20px 0;
      text-transform: none;
      font-style: italic;
      line-height: 1.25;
    }

    blockquote p {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.15);
    }

    blockquote footer {
      text-align: right;
      font-size: calc(var(--uvalib-main-font-size-unit)/1.12);
    }

    ul,
    ol {
      font-family: var(--font-primary);
      font-weight: var(--font-weight-regular);
      line-height: 30px;
      margin: 15px 0px;
      color: var(--color-text-gray);
    }

    article ul li {
      list-style-type: disc;
      line-height: normal;
      padding-bottom: .5em;
    }
    article ul.simple li {
      list-style-type: none;
    }
    article ul.simple li > ul li {
      list-style-type: inherit;
    }

    article ul li li {
      list-style-type: circle;
      line-height: normal;
      padding-bottom: .5em;
    }

    iframe {
      width: 100%;
      height: 100%;
      min-height: 500px;
    }

    a:hover {
      text-decoration: none;
    }

    #menu a {
      text-decoration: none;
    }

    #menu a:hover {
      text-decoration: underline;
    }

    /*END*/

    /* IMAGES */
    [data-align="left"],
    figure.align-left {
      float: left;
    }

    [data-align="center"],
    figure.align-center {
      margin: 0 auto;
    }

    [data-align="right"],
    figure.align-right {
      float: right;
    }

    figure>img {
      max-width: 100%;
    }

    figure {
      display: table;
    }

    figcaption {
      padding: .5em;
      margin-top: -.5em;
      background-color: var(--uvalib-captions-bg);
      display: table-caption;
      caption-side: bottom;
    }

    /* img responsive for all */
    img {
      max-width: 100%;
      height: auto;
    }

    /* deprecated class */
    .img-responsive {
      max-width: 100%;
      height: auto;
    }

    .noBG {
      background-color: inherit;
    }

    :host([small-screen]) article>#content img {
      float: none;
      padding: inherit;
    }

    /*END*/

    /*USEFUL TWEAKS & CLASSES (for when you need a little extra) */
    .shady {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)*2) 1000px calc(var(--uvalib-spacing-unit)*2) 1000px;
      background-color: var(--color-light-gray);
    }

    .full-width {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }

    iron-image.round {
      border-radius: 50%;
      width: 300px;
      height: 300px;
      --iron-image-width: 300px;
    }

    iron-image.roundSmall {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      --iron-image-width: 150px;
    }

    iron-image.rectangle {
      width: 300px;
      --iron-image-width: 300px;
    }

    .bigFirstLetter:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }
    .dropCap:first-letter {
      @apply --uva-font-decorative;
      float: left;
      font-size: calc(var(--uvalib-main-font-size-unit)*5.8);
      line-height: calc(var(--uvalib-spacing-unit)*0.9);
      padding-right: calc(var(--uvalib-spacing-unit)*0.2);
      color: var(--color-primary-orange);
    }

    .takeNoticeColor,
    .uvalib-alert-text {
      color: var(--uvalib-secondary-emergency-red);
    }

    .takeNoticeSize {
      font-size: calc(var(--uvalib-main-font-size-unit)*1.5);
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .uva-padding {
      padding: var(--uvalib-spacing-unit);
    }

    .uva-padding-left {
      padding-left: var(--uvalib-spacing-unit);
    }

    .uva-padding-right {
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-left-right {
      padding-left: var(--uvalib-spacing-unit);
      padding-right: var(--uvalib-spacing-unit);
    }

    .uva-padding-top {
      padding-top: var(--uvalib-spacing-unit);
    }

    .uva-padding-bottom {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-padding-top-bottom {
      padding-top: var(--uvalib-spacing-unit);
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin {
      margin: var(--uvalib-spacing-unit);
    }

    .uva-margin-left {
      margin-left: var(--uvalib-spacing-unit);
    }

    .uva-margin-right {
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-left-right {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
    }

    .uva-margin-top {
      margin-top: var(--uvalib-spacing-unit);
    }

    .uva-margin-bottom {
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-bottom {
      margin-top: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    .uva-margin-top-none {
      margin-top: 0;
    }

    .uva-margin-bottom-none {
      margin-bottom: 0;
    }

    .uva-clear-margin { margin: 0; }
    .uva-clear-padding { padding: 0; }

    /*END*/

    /* GRID */
    .grid-main,
    .grid-container,
    .grid-one-third-right,
    .grid-three-cols {
      display: grid;
      grid-template-columns: 1fr;
      font-size: 18px;
      margin-bottom: 2rem;
    }

    .grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr;
    }

    :host([large-screen]) .grid-three-cols {
      grid-template-columns: 1fr 1fr 1fr;
    }

    :host([large-screen]) .grid-one-third-right {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 2fr 1.5fr;
    }

    :host([large-screen]) .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
      grid-gap: 1rem;
    }

    /* END */

    /* BUTTONS */
    /* phase out use of paper button 09-2019 */
    paper-button {
      border: 1px solid var(--uvalib-secondary-md-grey);
      border-radius: 5px;

      --paper-button-flat-keyboard-focus: {
        @apply --accessibility-outline-for-dark-bg;
      }
    }

    /* Start using this class on anchor links for buttons 09-2019 */
    a.uvalib-btn,
    a.uvalib-btn:link,
    a.uvalib-btn:visited,
    a.uvalib-btn:hover,
    a.uvalib-btn:active {
      padding: calc(var(--uvalib-spacing-unit)/2);
      text-decoration: none;
      background-color: var(--alt-button-color, var(--uvalib-main-rotunda-orange));
      color: var(--alt-button-text-color, #fff);
      text-transform: uppercase;
      border-radius: 5px;
    }

    a.uvalib-btn:hover {
      text-decoration: underline;
    }

    .uvalib-btn-margin {
      margin: var(--uvalib-spacing-unit) !important;
    }

    .uvalib-btn-white {
      --alt-button-color: var(--uvalib-white);
      --alt-button-text-color: var(--uvalib-text-dk-grey);
    }

    .uvalib-btn-blue {
      --alt-button-color: var(--uvalib-main-jefferson-blue);
    }

    .uvalib-btn-outline {
      border: 1px solid var(--uvalib-secondary-md-grey);
    }

    /* .foo { --alt-button-color: green; } */

    .smallButton {
      font-size: .75em;
    }

    .mediumButton {
      font-size: .85em;
    }

    .emergencyButton h3 {
      margin-top: 0;
      margin-bottom: 1em;
    }

    .emergencyButton paper-button {
      background-color: var(--uvalib-secondary-emergency-red);

      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
      }

      ;
    }

    .emergencyButton a paper-button {
      color: var(--color-white);

      --paper-button-raised-keyboard-focus: {
        color: white !important;
      }

      ;
    }

    .give-button {
      margin-top: .5em;
      margin-bottom: 1em;
      margin-left: 0;
      border: none;
      font-size: calc(var(--uvalib-main-font-size-unit)*1.125);
    }

    paper-button.give-button {
      color: var(--color-white);
      background: var(--color-primary-orange);
    }

    /* Make the button orange PHASE OUT */
    .button-pop {
      background-color: var(--uvalib-main-rotunda-orange);
      color: white;
    }

    .button-pop:hover {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    /* Make the button blue PHASE OUT */
    .button-pop-alt {
      background-color: var(--uvalib-main-jefferson-blue);
      color: white;
    }

    .button-pop-alt:hover {
      background: var(--uvalib-secondary-md-grey);
      color: var(--uvalib-black);
    }

    paper-button:hover {
      text-decoration: underline;
    }

    paper-button[disabled],
    paper-button[toggles][active] {
      background: var(--uvalib-orange-200);
      color: var(--uvalib-black);
    }

    paper-button:focus {
      outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
    }

    /*END*/

    /* TABLES */
    table {
      border-collapse: collapse;
      width: 100%;
    }

    thead {
      display: none;
    }

    th {
      padding: 1.5em;
    }

    tr {
      display: block;
      padding: 0.5em;
    }

    td {
      display: block;
      padding-left: 40%;
    }

    td:before {
      content: attr(data-label);
      display: inline-block;
      width: 50%;
      margin-left: -65%;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #E0E0E0;
    }

    td ul li {
      list-style-type: none;
    }

    @media screen and (min-width: 60em) {
      thead {
        display: table-header-group;
      }

      thead tr {
        background-color: #AAA;
      }

      tr {
        display: table-row;
      }

      td {
        display: table-cell;
        padding: 1em;
        text-align: center;
      }

      td:before {
        display: none;
      }
    }

    /* END */

            /* CUSTOM TABLES */
    #AlternateTable table,
    #AlternateTable thead,
    #AlternateTable tbody,
    #AlternateTable th,
    #AlternateTable td,
    #AlternateTable tr {
      display: block;
    }

    #AlternateTable caption {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    #AlternateTable thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    #AlternateTable tbody tr:nth-child(even) {
      background-color: inherit;
    }

    #AlternateTable tr {
      padding: 0 0 10px 0;
    }

    #AlternateTable tr th {
      background-color: var(--uvalib-main-jefferson-blue);
      color: var(--uvalib-white);
      padding: 5px;
    }

    #AlternateTable td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    #AlternateTable td::before {
      display: inherit;
      margin: inherit;
      position: absolute;
      top: 6px;
      left: 15px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /* Label the data */
    #AlternateTable td:nth-of-type(1)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(2)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(3)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }

    #AlternateTable td:nth-of-type(4)::before {
      content: attr(aria-labelledby);
      font-weight: bold;
    }
    /* END */

    /* ACCESSIBILITY */
    a:focus {
      @apply --accessibility-outline-for-light-bg;
    }

    /* a:hover { text-decoration: underline; } */
    nav a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* a { text-decoration: inherit; } */

    a span {
      text-decoration: underline;
      color: var(--uvalib-link-color);
    }

    a span:hover {
      text-decoration: none;
    }

    a span:visited {
      color: var(--uvalib-link-color-visited);
    }

    a:link paper-button {
      text-decoration: none;
    }

    #top #logo a:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    #top #logo a:hover {
      border-bottom: 1px solid var(--color-accessibility-outline-dark-bg);
      padding-bottom: .1em;
    }

    #top .section a:focus,
    #top .section paper-icon-button:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    iron-collapse:focus {
      @apply --accessibility-outline-for-dark-bg;
    }

    /* Text meant only for screen readers. Mostly used in the Search Bar and Header components */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .screen-reader-text:focus {
      background-color: #f1f1f1;
      border-radius: 3px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
      clip: auto !important;
      color: #21759b;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: bold;
      height: auto;
      left: 5px;
      line-height: normal;
      padding: 15px 23px 14px;
      text-decoration: none;
      top: 5px;
      width: auto;
      z-index: 100000;
    }

    /*END*/

    /* Styling Headers with slanted borders */

    /*Code taken from UVA main - need to clean up and standardize*/
    .header-wrapper {
      background: url(https://static.lib.virginia.edu/files/hp-grayhorizline.png) repeat-x center center;
      background-size: 5px auto;
      clear: both;
      margin-top: 48px;
      margin-top: 3rem;
      padding: 0 30px;
      padding: 0 1.875rem;
      margin-bottom: 48px;
      margin-bottom: 3rem;
    }

    .header-wrapper .header-wrapper-bg {
      background: var(--uvalib-main-white);
      border-left: var(--uvalib-grey-500) solid 1px;
      border-right: var(--uvalib-grey-500) solid 1px;
      display: inline-block;
      left: 50%;
      position: relative;
      -moz-transform: skew(-20deg) translateX(-50%);
      -ms-transform: skew(-20deg) translateX(-50%);
      -o-transform: skew(-20deg) translateX(-50%);
      -webkit-transform: skew(-20deg) translateX(-50%);
      transform: skew(-20deg) translateX(-50%);
    }

    .header-wrapper .header-wrapper-bg h1,
    .header-wrapper .header-wrapper-bg h2,
    .header-wrapper .header-wrapper-bg h3 {
      margin-top: calc(var(--uvalib-spacing-unit)/8);
      margin-bottom: calc(var(--uvalib-spacing-unit)/8);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      line-height: 1;
      padding: 5px 30px;
      -moz-transform: skew(20deg);
      -ms-transform: skew(20deg);
      -o-transform: skew(20deg);
      -webkit-transform: skew(20deg);
      transform: skew(20deg);
    }

    /*END*/

    /*END*/

    /*********************************************/
    /*          PAGE SPECIFIC CSS                */
    /*********************************************/

    /* ASK A LIBRARIAN */
    /* .mobile-small-min { min-width: 320px; max-width: 500px;  } */
    .askalibrarian-container {
      margin-left: var(--uvalib-spacing-unit);
      margin-right: var(--uvalib-spacing-unit);
      margin-bottom: var(--uvalib-spacing-unit);
    }

    /* END */

    /* HOMEPAGE CARDS */
    .events .event {
      padding-bottom: var(--uvalib-spacing-unit);
    }

    .events .category,
    #news-content .title {
      font-family: var(--uva-font-family);
      font-weight: var(--font-weight-demi);
    }

    #news-content .preview {
      margin-top: calc(var(--uvalib-spacing-unit)/-1.25);
    }

    .reno-buttons {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding-bottom: 20px;
      margin-top: 180px;
    }

    .reno-buttons paper-button {
      margin-top: 20px;
    }

    :host([medium-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    :host([large-screen]) .reno-buttons {
      padding: 0 20px 20px;
    }

    /*END*/

    /* ABOUT US PAGE */
    :host([small-screen]) figure#profileImage {
      margin: 2em auto;
      text-align: center;
    }

    :host([small-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([medium-screen]) figure#profileImage {
      margin-top: 2em;
      text-align: center;
    }

    :host([medium-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([large-screen]) figure#profileImage {
      margin: 2em 0 2em 4em;
      text-align: center;
    }

    :host([large-screen]) #profileImage figcaption {
      margin-top: 1em;
      width: 300px;
    }

    :host([small-screen]) #profile {
      margin-bottom: 2em;
    }

    :host([medium-screen]) #profile {
      margin: 2em;
    }

    :host([large-screen]) #profile {
      margin: 2em 4em 2em 6em;
      min-width: 300px;
    }

    img.aboutSig {
      width: 200px;
    }

    /*END*/

    /* SUPPORT THE LIBRARY */
    #supportAnnualFund,
    #supportCollect,
    #supportConserPreser {
      --uvalib-pc-max-width: 90%;
      --uvalib-pc-min-width: 90%;
    }

    /*END*/

    /* LIBRARY SPECIFIC PAGES (e.g. RMC) */
    #library-template .lt-thumbnail figure {
      border: 1px solid var(--uvalib-grey-500);
    }

    #library-template .lead-image figure {
      margin: 0;
    }

    #library-template paper-button {
      background-color: var(--uvalib-main-rotunda-orange);
      color: var(--uvalib-main-white);
    }

    #library-template dt {
      font-weight: var(--font-weight-medium);
    }

    #library-template dd {
      margin-left: var(--uvalib-spacing-unit);
      margin-bottom: calc(var(--uvalib-spacing-unit)*2);
    }

    /*END*/

    /* RENOVATION PAGES */
    #supportLibrary {
      --paper-card: {
        margin: calc(var(--uvalib-spacing-unit)/8);
        background-color: blue;
        max-width: 600px;
        min-width: 290px;
      }
    }

    #supportLibrary figure {
      margin-left: 0;
      margin-right: 0;
    }

    /*END*/

    /* SERVICES - GRAD STUDENT PAGE */
    /*use this to set the header styles*/
    #services-page h2 {
      text-align: center;
    }

    #services-page h2.background {
      margin: var(--uvalib-spacing-unit) -1000px var(--uvalib-spacing-unit) -1000px;
      padding: calc(var(--uvalib-spacing-unit)/4) 1000px calc(var(--uvalib-spacing-unit)/4) 1000px;
      background-color: var(--uvalib-secondary-light-gray);
    }

    #services-page ul {
      padding-left: 0;
    }

    #services-page ul li {
      list-style-type: none;
    }

    #services-page ul li h3,
    .services-graphic-index h3 {
      margin-bottom: 0;
    }

    #services-page ul li p {
      margin-top: .25em;
      margin-bottom: .25em;
    }

    #services-page ul li a,
    .services-graphic-index a:not(.basic) {
      color: var(--uvalib-main-rotunda-orange);
      text-decoration: none;
      font-weight: var(--font-weight-medium);
    }

    #services-page ul li a:hover,
    .services-graphic-index a:hover:not(.basic) {
      text-decoration: underline;
    }

    /* grid */
    .services-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }

    .services-grid-container {
      grid-gap: 1rem;
    }

    :host([medium-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 1rem;
    }

    :host([large-screen]) .services-grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }

    /*grid end*/
    /*individual block with image, title, blurb, and link(if applicable) Use Flexbox*/
    .services-graphic-index {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
      border: 2px solid var(--uvalib-secondary-light-gray);
      padding: 1.5em;
    }

    .services-graphic-index img.icon {
      width: 100px;
      height: 100px;
    }

    a.clickbox {
      text-decoration: none;
      color: inherit;
    }

    a.clickbox:hover {
      background-color: var(--uvalib-secondary-light-gray);
    }

    .no-border {
      border: none;
    }

    #Request,
    #Publishing,
    #Instruction,
    #Consultation,
    #Spaces {
      padding-top: 2em;
    }

    /*END*/

    /* COLLECTIONS PAGE */
    :host([small-screen]) #collections {
      @apply --layout-vertical;
    }

    :host([small-screen]) #collections div {
      border-left: none;
    }

    #collections {
      margin-bottom: 2em;
    }

    #collections div {
      border-left: 1px solid var(--uvalib-secondary-md-grey);
      padding-left: 2em;
      padding-right: 2em;
    }

    #collections div:first-child {
      border-left: none;
    }

    #collections p {
      font-style: italic;
    }

    .aldCollectionTable td {
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable th,
    .aldCollectionTable td {
      text-align: center;
    }

    .aldCollectionTable th[scope="row"] {
      text-align: left;
      border-bottom: 1px solid var(--color-medium-gray);
    }

    .aldCollectionTable tr:last-child th,
    .aldCollectionTable tr:last-child td {
      border-bottom: none;
    }

    /*new styling August 2019*/
    .collections-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third {
      grid-template-columns: 250px 1fr;
      margin-top: 2rem;
    }

    :host([small-screen]) .collections-grid,
    :host([small-screen]) .collections-grid.third {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .collections-grid.third div h3 {
      margin-top: 0;
      padding-top: 0;
    }

    .collections-seperator::before,
    .collections-seperator::after {
      content: " ";
      display: block;
      width: 100%;
      height: 1em;
      margin: 0 auto;
      padding: 35px 0;
      background: linear-gradient(to right, #FFF, var(--uvalib-main-rotunda-orange), #FFF) center / 100% 2px no-repeat;
    }

    .collections-section {
      display: block;
      margin-bottom: 2rem;
    }

    #collectionForm {
      height: 450px;
    }

    :host([small-screen]) #collectionForm {
      height: 370px;
    }

    :host([medium-screen]) #collectionForm {
      height: 415px;
    }

    /*END*/

    /* LIBRA LANDING PAGE */
    .libraLanding uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-main-jefferson-blue);
    }

    /*END*/

    /* STAFF BIO PAGE */
    :host([small-screen]) #staff-bio-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      margin-bottom: 2rem;
    }

    :host([small-screen]) .bio-quick-details {
      margin-top: 100px;
      margin-bottom: 0px;
      display: block;
    }

    #staff-bio-container {
      display: grid;
      grid-template-rows: 70px 1fr;
      grid-template-columns: 330px 1fr;
      grid-gap: 2em;
      margin-bottom: 2rem;
    }

    .spacer-row {
      grid-column: 1 / 3;
    }

    .bio-quick-details,
    .bio-web-links {
      margin-bottom: 2em;
      background-color: var(--uvalib-secondary-light-gray);
      text-align: center;
      padding: 2em;
    }

    .bio-quick-details .bio-image .round {
      margin-top: -130px;
      width: 260px;
      height: 260px;
    }

    .bio-quick-details .display-name {
      @apply --h2;
      color: var(--uvalib-main-rotunda-orange);
      margin-top: 0.75em;
    }

    .bio-quick-details .job-title,
    .bio-department p,
    .bio-languages p,
    .bio-pronouns p {
      margin-top: calc(var(--uvalib-spacing-unit)/4);
      line-height: 1.15;
    }

    .bio-contact-info,
    .bio-department,
    .bio-languages,
    .bio-pronouns {
      text-align: left;
    }

    .bio-department h4,
    .bio-languages h4,
    .bio-pronouns h4 {
      margin-bottom: 0;
    }

    .bio-pronouns p {
      color: var(--uvalib-main-rotunda-orange);
    }

    .bio-web-links h4 {
      margin: 0 0 0.75em 0;
    }

    .bio-web-links a,
    .bio-web-links a:before {
      color: var(--uvalib-main-rotunda-orange);
      font-size: 1.25em;
      text-decoration: none;
    }

    .bio-web-links a:hover,
    .bio-web-links a:hover:before {
      color: var(--uvalib-main-jefferson-blue);
    }

    a.uvalib-icon-twitter-square:before {
      color: #1DA1F2 !important;
    }

    a.uvalib-icon-linkedin-square:before {
      color: #0077B5 !important;
    }

    a.uvalib-icon-linkedin-square:hover:before,
    a.uvalib-icon-twitter-square:hover:before,
    a.uvalib-ai-orcid:hover:before {
      color: var(--uvalib-main-jefferson-blue) !important;
    }

    #staff-bio-container a paper-button {
      margin-top: var(--uvalib-spacing-unit);
      background-color: var(--uvalib-main-rotunda-orange);
      border-color: var(--uvalib-main-rotunda-orange);
      color: white;

      --paper-button-raised-keyboard-focus: {
        border-color: var(--uvalib-orange-200);
        background-color: var(--uvalib-orange-200) !important;
        color: #000 !important;
      }

      ;
    }

    #staff-bio-container a:hover paper-button {
      background-color: var(--uvalib-orange-200);
      border-color: var(--uvalib-orange-200);
      color: var(--uvalib-black);
      font-weight: bold;
    }

    /*END*/

    /* LEARNING RESOURCES PAGE */
    #tnl-container .tools>div {
      width: 90%;
    }

    #tnl-container uva-accordion {
      --uva-accordion-item-panel-padding: 0 !important;
      /* --uva-accordion-item-heading-border-bottom: 1px solid; */
    }

    #tnl-container uva-accordion:last-child {
      --uva-accordion-item-heading-border-bottom: 1px solid;
    }

    #tnl-container ul {
      margin: 0;
      padding: 0;
    }

    #tnl-container paper-button {
      text-transform: none;
      margin: var(--uvalib-spacing-unit) !important;
    }

    #tnl-container li {
      padding: var(--uvalib-spacing-unit) !important;
      list-style-type: none !important;
    }

    #tnl-container li>h4 {
      margin-top: 0;
    }

    #tnl-container .shaded {
      background-color: var(--uvalib-secondary-lt-grey);
      padding: var(--uvalib-spacing-unit);
    }

    /* #tnl-container li:nth-of-type(even) {
      background-color: var(--uvalib-secondary-lt-grey);
    } */
    #tnl-container div>img {
      float: left;
      /*
      max-width: 80px;
      max-height: 80px;
      */
      padding-right: var(--uvalib-spacing-unit);
    }

    #tnl-container ul li>h4 {
      margin-top: 50px;
    }

    #tnl-container ul li:first-child>h4 {
      margin-top: inherit;
    }

    #tnl-container .linkto {
      font-weight: bold;
      margin: calc(var(--uvalib-spacing-unit)*2) 0;
    }

    #tnl-container .linkto img {
      height: 15px;
      padding-left: calc(var(--uvalib-spacing-unit)*.5)
    }

    #tnl-container uvalib-simple-search-box {
      --uvalib-background-search: var(--uvalib-secondary-web-blue);
    }

    #tnl-container paper-radio-button {
      margin-left: var(--uvalib-spacing-unit);
    }

    #tnl-container .azbody {
      padding: var(--uvalib-spacing-unit);
      /* background-color: var(--uvalib-secondary-lt-grey); */
    }

    #tnl-container uva-accordion-item {
      --uvalib-box-shadow-custom: none;
    }

    #tnl-container .permalink a {
      font-size: calc(var(--uvalib-main-font-size-unit)*0.75);
      padding-top: var(--uvalib-spacing-unit);
    }

    #tnl-container uva-results-highlighter {
      --uva-results-highlighter-color: var(--color-medium-gray);
    }

    #tnl-container .alert {
      margin: var(--uvalib-spacing-unit);
    }

    #tnl-container .cat:not(:first-child) {
      margin-left: -.3em;
    }

    #tnl-container .cat:not(:first-child):before {
      content: ", ";
    }

    uva-results-highlighter {
      --uva-results-highlighter-color: var(--uvalib-secondary-light-gray);
    }

    /*END*/


    /*********************************************/
    /*              BROWSER HACKS                */
    /*********************************************/

    /* Hack to get tables working properl in IE11 */
    .table {
      display: table;
    }

    .thead {
      display: table-header-group;
    }

    .tbody {
      display: table-row-group;
    }

    .tr {
      display: table-row;
    }

    .td,
    .th {
      display: table-cell;
    }

    .colgroup {
      display: table-column-group;
    }

    .col {
      display: table-column;
    }

    </style>
  </template>
</dom-module>
`;_r.setAttribute("style","display: none;"),document.head.appendChild(_r.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const gr=lt`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;gr.setAttribute("style","display: none;"),document.head.appendChild(gr.content);var br=Object.freeze({__proto__:null});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fn({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var e=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),t="";this.query&&(t="?"+this.query.replace(/\#/g,"%23"),t=this.encodeSpaceAsPlusInQuery?t.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):t.replace(/\+/g,"%2B").replace(/ /g,"%20"));var i="";return this.hash&&(i="#"+window.encodeURI(this.hash)),e+t+i},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var e=this._getUrl(),t=new URL(e,this.__location.protocol+"//"+this.__location.host).href,i=window.performance.now(),n=this._lastChangedAt+this.dwellTime>i;this._lastChangedAt=i,n?window.history.replaceState({},"",t):window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t!==this.__location.href&&(window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey||e.shiftKey)return null;for(var t=vn(e).path,i=null,n=0;n<t.length;n++){var r=t[n];if("A"===r.tagName&&r.href){i=r;break}}if(!i)return null;if("_blank"===i.target)return null;if(("_top"===i.target||"_parent"===i.target)&&window.top!==window)return null;if(i.download)return null;var o,a,s,l=i.href;if(o=null!=document.baseURI?new URL(l,document.baseURI):new URL(l),a=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,o.origin)s=o.origin;else{var c=o.host,d=o.port,u=o.protocol;("https:"===u&&"443"===d||"http:"===u&&"80"===d)&&(c=o.hostname),s=u+"//"+c}if(s!==a)return null;var h=o.pathname+o.search+o.hash;return"/"!==h[0]&&(h="/"+h),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(h)?null:new URL(h,this.__location.href).href},_makeRegExp:function(e){return RegExp(e)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Fn({is:"iron-query-params",_template:null,properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(e){var t=[];for(var i in e){var n=e[i];""===n?t.push(encodeURIComponent(i)):n&&t.push(encodeURIComponent(i)+"="+encodeURIComponent(n.toString()))}return t.join("&")},_decodeParams:function(e){for(var t={},i=(e=(e||"").replace(/\+/g,"%20")).split("&"),n=0;n<i.length;n++){var r=i[n].split("=");r[0]&&(t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||""))}return t}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Fn({_template:lt`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[{properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(e){this.route&&(this.queryParams=e)}}],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Fn({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});class yr extends ct{static get template(){return lt`
      <custom-style>
        <style include="uvalib-theme iron-flex">
          [hidden] {display:none}
        </style>
      </custom-style>
      <app-location route="{{hash}}" use-hash-as-path url-space-regex="^/nomatchme/"></app-location>
      <iron-media-query query="[[smallScreenQuery]]" query-matches="{{smallScreen}}"></iron-media-query>
      <iron-media-query query="[[mediumScreenQuery]]" query-matches="{{mediumScreen}}"></iron-media-query>
      <iron-media-query query="[[largeScreenQuery]]" query-matches="{{largeScreen}}"></iron-media-query>
    `}static get properties(){return{hash:{type:String,value:null,observer:"_handleAnchor",notify:!0},smallScreenQuery:{type:String,value:"(max-width: 600px)"},mediumScreenQuery:{type:String,value:"(min-width: 600px) and (max-width: 992px)"},largeScreenQuery:{type:String,value:"(min-width: 993px)"},smallScreen:{type:Boolean,reflectToAttribute:!0,notify:!0},mediumScreen:{type:Boolean,reflectToAttribute:!0,notify:!0},largeScreen:{type:Boolean,reflectToAttribute:!0,notify:!0},webPsupport:{type:Boolean,computed:"_supportsWebp()",notify:!0},relativeLinks:{type:Boolean,value:!1},_domain:{type:String,computed:"_makeLinkDomain(relativeLinks)"}}}_handleAnchor(){this.hash&&this._scrollToSelector(window.location.hash)}_scrollToSelector(e){if(e){var t=this.shadowRoot.querySelector(e);t&&t.scrollIntoView()}}_supportsWebp(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}_makeLinkDomain(e){return e?"":"https://www.library.virginia.edu"}_or(...e){return e.some(e=>!!e)}_and(e,t){return e&&t}_isOdd(e){return!!(1&e)}_larger(e,t){return e>t}_not(e){return!e}_first(e){return Array.isArray(e)&&e.length>0?e[0]:null}_shuffle(e){var t;if(Array.isArray(e))for(var i,n,r=(t=JSON.parse(JSON.stringify(e))).length;0!==r;)n=Math.floor(Math.random()*r),i=t[r-=1],t[r]=t[n],t[n]=i;else t=e;return t}}window.customElements.define("uvalib-ui-base",yr);export{dr as B,si as D,Fn as P,yr as U,Mi as a,ae as b,ct as c,vn as d,ci as e,br as f,lt as h,mr as i,s as u};
