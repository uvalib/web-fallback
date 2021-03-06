import{P as i,h as t,B as n,d as e}from"./uvalib-ui-base-d828b1c1.js";import{I as s}from"./iron-resizable-behavior-6f1bb02b.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/i({_template:t`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[s],properties:{horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(i,t){i="auto"===i?"":i;var n=t&&!this.noAnimation&&this.isAttached&&this._desiredSize!==i;if(this._desiredSize=i,this._updateTransition(!1),n){var e=this._calcSize();""===i&&(this.style[this._dimensionMax]="",i=this._calcSize()),this.style[this._dimensionMax]=e,this.scrollTop=this.scrollTop,this._updateTransition(!0),n=i!==e}this.style[this._dimensionMax]=i,n||this._transitionEnd()},enableTransition:function(i){n._warn("`enableTransition()` is deprecated, use `noAnimation` instead."),this.noAnimation=!i},_updateTransition:function(i){this.style.transitionDuration=i&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var i="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[i]="",this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened),this._setTransitioning(!0),this.toggleClass("iron-collapse-closed",!1),this.toggleClass("iron-collapse-opened",!1),this.updateSize(this.opened?"auto":"0px",!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("iron-collapse-closed",!this.opened),this.toggleClass("iron-collapse-opened",this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(i){e(i).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});
