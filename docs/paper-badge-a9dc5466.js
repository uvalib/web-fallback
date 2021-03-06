import{P as t,h as e,d as i}from"./uvalib-ui-base-6ae119bb.js";import{I as a}from"./iron-resizable-behavior-51eccad6.js";import"./iron-icon-ac3da9d7.js";import"./typography-46104b3a.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/t({_template:e`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      iron-icon {
        --iron-icon-width: var(--paper-badge-icon-width, 12px);
        --iron-icon-height: var(--paper-badge-icon-height, 12px);
      }

      .badge {
        @apply --layout;
        @apply --layout-center-center;
        @apply --paper-font-common-base;

        font-weight: normal;
        font-size: 11px;
        border-radius: 50%;
        margin-left: var(--paper-badge-margin-left, 0px);
        margin-bottom: var(--paper-badge-margin-bottom, 0px);
        width: var(--paper-badge-width, 20px);
        height: var(--paper-badge-height, 20px);
        background-color: var(--paper-badge-background, var(--accent-color));
        opacity: var(--paper-badge-opacity, 1.0);
        color: var(--paper-badge-text-color, white);

        @apply --paper-badge;
      }
    </style>

    <div class="badge">
      <iron-icon hidden\$="{{!_computeIsIconBadge(icon)}}" icon="{{icon}}"></iron-icon>
      <span id="badge-text" hidden\$="{{_computeIsIconBadge(icon)}}">{{label}}</span>
    </div>
  `,is:"paper-badge",hostAttributes:{role:"status",tabindex:0},behaviors:[a],listeners:{"iron-resize":"updatePosition"},properties:{for:{type:String,observer:"_forChanged"},label:{type:String,observer:"_labelChanged"},icon:{type:String,value:""},_boundNotifyResize:{type:Function,value:function(){return this.notifyResize.bind(this)}},_boundUpdateTarget:{type:Function,value:function(){return this._updateTarget.bind(this)}}},attached:function(){requestAnimationFrame(this._boundUpdateTarget)},attributeChanged:function(t){"hidden"===t&&this.updatePosition()},_forChanged:function(){this.isAttached&&this._updateTarget()},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_updateTarget:function(){this._target=this.target,requestAnimationFrame(this._boundNotifyResize)},_computeIsIconBadge:function(t){return t.length>0},get target(){var t=i(this).parentNode,e=i(this).getOwnerRoot();return this.for?i(e).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t},updatePosition:function(){if(this._target&&this.offsetParent){var t=this.offsetParent.getBoundingClientRect(),e=this._target.getBoundingClientRect(),i=this.getBoundingClientRect();this.style.left=e.left-t.left+(e.width-i.width/2)+"px",this.style.top=e.top-t.top-i.height/2+"px"}}});
