import{P as i,h as t,d as o,U as e}from"./uvalib-ui-base-6ae119bb.js";import{I as a}from"./iron-a11y-keys-behavior-81d6be43.js";import{I as l}from"./paper-button-643af30a.js";import{I as n,N as r,a as s}from"./neon-animation-runner-behavior-8ce3954a.js";import"./iron-resizable-behavior-51eccad6.js";
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
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[l,a,n,r],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var i=o(this.$.content).getDistributedNodes(),t=0,e=i.length;t<e;t++)if(i[t].nodeType===Node.ELEMENT_NODE)return i[t]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),s._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):s._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):s._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var i=this.containedElement,t=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),o=0;o<t.length;o++)t[o].node=i;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(i){this._readied&&(i?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var i=this.focusTarget||this.containedElement;i&&this.opened&&!this.noAutoFocus?i.focus():s._applyFocus.apply(this,arguments)}});class d extends e{static get is(){return"uvalib-footer"}static get template(){return t`
      <div>${super.template}</div>
      <style>
      :host {
        box-sizing: border-box;
        display: block;
        width: 100%;
        --uvalib-footer-background-color: var(--color-primary-blue);
        --uvalib-footer-color: var(--color-light-blue);
        background-color: var(--uvalib-footer-background-color);
        color: var(--uvalib-footer-color);
        font-family: var(--font-primary);
        font-weight: var(--font-weight-medium);
        @apply --layout-vertical;
        @apply --layout-center;
        @apply --uvalib-footer;
        text-align: left;
        --uvalib-footer-desktop-height: 460px;
        --uvalib-footer-tablet-height: 710px;
        --uvalib-footer-mobile-height: 1315px;
        --uvalib-footer-columns: {
          position: relative;
          top: -23px;
        };
      }
      :host([small-screen]) {
        padding: 30px 0 0 0;
        /*height: var(--uvalib-footer-mobile-height) !important;*/
      }
      :host([medium-screen]) {
        padding: 20px 0 0 0;
        /*height: var(--uvalib-footer-tablet-height) !important;*/
      }
      :host([large-screen]) {
        padding: 50px 0 0 0;
        /*height: var(--uvalib-footer-desktop-height) !important;*/
      }

      #top {
        @apply --layout-flex;
        width: 95%;
        max-width: 1200px;
        flex-basis: auto;
      }
      .copyright {
        text-align:  center;
        font-size: 14px;
        padding-top: 20px;
        background-color: var(--color-white);
        color: var(--color-text-gray);
        padding: 10px !important;
        border-radius: 3px;
      }
      a {
        color: var(--color-light-blue);
        margin-bottom: 5px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      ul li {
        padding: 0;
        padding-bottom: 8px;
        font-size: 1.1em;
        color: var(--color-light-blue);
      }
      h3 {
        font-family: var(--font-primary);
        font-weight: var(--font-weight-book);
        text-transform: none;
        color: var(--color-white);
        margin-bottom: 25px;
        font-style: normal;
        font-size: 18px;
        margin-top: 0;
      }
      #give-button {
        margin-top: .5em;
        margin-bottom: 1em;
        margin-left: 0;
        border: none;
        font-weight: bold;
        font-size: calc(var(--uvalib-main-font-size-unit)*1.125);
      }
      paper-button {
        color: var(--color-white);
        background: var(--color-primary-orange);
      }
      .social-links {
        @apply --layout-horizontal;
      }
      address {
        color: var(--color-white);
        font-style: normal;
        line-height: 1.4;
      }
      .bottom-bar {
        width: 100%;
        height: 80px;
        color: var(--color-white);
        background-color: var(--color-secondary-blue);
        @apply --layout-center-justified;
      }
      .bottom-bar a, a {
        text-decoration: none;
      }
      .bottom-bar ::slotted {
        @apply --layout-horizontal;
      }
      .bottom-bar ::slotted(.footer-extended) {
        background-color: initial !important;
        height: 100% !important;
      }
      .bottom-bar a {
        color: var(--color-white);
        padding: 0 10px 0 10px;
        font-size: 1.1em;
      }
      .bottom-bar div.links {
        float: left;
        padding: 30px 0 0 28px;
      }
      .bottom-bar div.fdl {
        float: left;
        height: 80px;
      }
      .columns {
        @apply --uvalib-footer-columns;
      }
      div.fdl svg {
        height: 50%;
        padding-top: 20px;
        /*padding-right: 20px;*/
      }

      /* desktop */
      :host([large-screen]) #top {
          @apply --layout-horizontal;
          padding-left: 90px;
          padding-bottom: 10px;
      }
      :host([large-screen]) #top > .section {
          @apply --layout-flex-2;
          @apply --layout-horizontal;
      }
      :host([large-screen]) .section > div {
          @apply --layout-flex;
      }

      /* tablet */
      :host([medium-screen]) #top {
          @apply --layout-horizontal;
          padding-left: 90px;
          padding-bottom: 10px;
      }
      :host([medium-screen]) #top > .section {
          @apply --layout-flex-2;
          @apply --layout-vertical;
      }
      :host([medium-screen]) .section > div {
          padding-bottom: 20px;
      }
      :host([medium-screen]) .column {
          padding-bottom: 10px;
      }

      /* mobile */
      :host([small-screen]) #top {
          @apply --layout-vertical;
          padding-bottom: 10px;
      }
      :host([small-screen]) #top > .section {
          @apply --layout-flex-2;
          @apply --layout-vertical;
      }
      :host([small-screen]) .section > div {
          @apply --layout-flex;
          padding-bottom: 20px;
          @apply --layout-center;
          text-align: center;
      }
      :host([small-screen]) .column {
          padding-bottom: 10px;
      }
      :host([small-screen]) .social-links {
          @apply --layout-center-justified;
      }

      #top .section paper-icon-button:focus {
        outline: var(--color-accessibility-outline-dark-bg) dotted 3px;
        padding: .15em;
      }
      </style>

      <div role="contentinfo" id="top">
        <div class="section">
          <div class="column-1 column">
            <h3>Contact Us</h3>
            <ul>
              <li>(434) 924-3021</li>
              <li><a href="mailto:library@virginia.edu">library@virginia.edu</a></li>
              <li><a href="[[_domain]]/askalibrarian/">Ask a Librarian</a></li>
            </ul>
            <div class="social-links">
              <uvalib-instagram-link style="color:white; height:40px; width:40px" alt="Library Instagram Account"></uvalib-instagram-link>
              <uvalib-facebook-link style="color:white; height:40px; width:40px" alt="Library Facebook Account"></uvalib-facebook-link>
              <uvalib-twitter-link style="color:white; height:40px; width:40px" alt="Library Twitter Account"></uvalib-twitter-link>
            </div>
            <address>
              Alderman Library<br>
              P.O. Box - 400109<br>
              160 McCormick Road<br>
              Charlottesville, VA 22904
            </address>
          </div>
          <div class="column-2 column">
            <h3>About the Library</h3>
            <ul>
              <li><a href="[[_domain]]/hours/">Hours</a></li>
              <li><a href="[[_domain]]/staff/">Staff Directory</a></li>
              <li><a href="[[_domain]]/jobs/">Jobs</a></li>
              <li><a href="[[_domain]]/press/">Press</a></li>
              <li><a href="[[_domain]]/renovation/">Alderman Renovation</a></li>
              <li><a href="[[_domain]]/jobs/fellowships/">Fellowship Opportunities</a></li>
              <li><a href="[[_domain]]/support-library/"><paper-button id="give-button">Give to the Library</paper-button></a></li>
            </ul>
          </div>
        </div>
        <div class="section">
          <div class="column-3 column">
            <h3>Help &amp; Assistance</h3>
            <ul>
              <li><a href="https://answers.lib.virginia.edu/" aria-label="F A Qs">FAQs</a></li>
              <li><a href="[[_domain]]/services/off-grounds-access/">Off-Grounds Access</a></li>
              <li><a href="https://virginia.service-now.com/its?id=kb_article&amp;sys_id=1cbb89a4db471b045bce5478dc9619ad" aria-label="I T S Computing Accounts">ITS Computing Accounts</a></li>
              <li><a href="[[_domain]]/services/accessibility-services/">Accessibility</a></li>
              <li><a href="[[_domain]]/emergency/">Emergency Information</a></li>
              <li><a href="[[_domain]]/policies/">Library Policies</a></li>
            </ul>
          </div>
          <div class="column-4 column">
            <h3>Related Resources</h3>
            <ul>
              <li><a href="http://www.virginia.edu" aria-label="U V A Home">UVA Home</a></li>
              <li><a href="https://virginia.service-now.com/its?id=home" aria-label="I T S">ITS</a></li>
              <li><a href="https://sisuva.admin.virginia.edu/ihprd/signon.html">SIS</a></li>
              <li><a href="https://collab.itc.virginia.edu/portal" aria-label="U V A Collab">UVaCollab</a></li>
              <li><a href="https://www.virginia.edu/cavalieradvantage/">Cavalier Advantage</a></li>
              <li><a href="https://staffweb.lib.virginia.edu/">Library Staff Site</a></li>
              <li><a href="https://analytics.lib.virginia.edu/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=en">Tracking Opt-out</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bottom-bar lib3">
        <slot name="bottom-bar">

          <div class="links">
            <a href="mailto:site-feedback@virginia.edu">Feedback</a> |
            <iron-dropdown id="copydrop" auto-fit-on-attach="" no-overlap="" vertical-align="bottom" horizontal-align="left">
                <div slot="dropdown-content">
                  <div id="copyright-info" class="copyright"><span role="img" arial-label="copyright">©</span> {{_currentYear}} by the Rector and Visitors of the University of Virginia</div>
                </div>
            </iron-dropdown>
            <a href="" on-tap="_copyrightDropup" aria-labelledby="copyright-info">Copyright</a>
          </div>
          <div class="fdl">
            <iron-dropdown id="fdlpdrop" auto-fit-on-attach="" no-overlap="" always-on-top="" vertical-align="bottom" horizontal-align="left">
                <div slot="dropdown-content">
                  <div class="copyright">This library is a congressionally designated depository for U.S. Government documents. Public access to the government documents collection is guaranteed by public law. (Title 44 United States Code)</div>
                </div>
            </iron-dropdown>

            <a href="https://guides.lib.virginia.edu/findinggovinfo" id="fdl">
              <svg alt="Federal Depository Library Program logo" on-mouseover="_fdlpDropup" on-mouseout="_fdlpDropdown" width="50px" viewBox="0 0 76 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>Federal Depository Library Program</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="First-Release" transform="translate(-1164.000000, -2888.000000)">
                          <g id="footer" transform="translate(-1.000000, 2650.000000)">
                              <g id="fdlp-emblem-logo-text-cmyk" transform="translate(1164.778054, 238.000000)">
                                  <path d="M13.4360945,28.2205532 L2.35993899,28.2205532 C2.35993899,28.2205532 0.577055368,28.0392271 0.575613488,27.3131932 C0.565880804,19.4366373 0.594718388,19.7671834 0.594718388,19.7671834 C0.594718388,19.7671834 1.50598604,20.7522545 2.71824597,20.806251 C3.74774771,20.852221 14.3304201,20.806251 14.3304201,20.806251 C14.3304201,20.806251 17.2444579,21.0645585 16.6543688,23.3356948 C16.1432227,25.2930677 15.6944378,26.5462971 15.601797,29.8915257 L15.5808898,29.870365 C15.0560458,28.2511999 13.4360945,28.2205532 13.4360945,28.2205532" id="Fill-2" fill="#FFFFFF"></path>
                                  <path d="M1.62277825,39.3398174 C2.12094751,40.9224984 3.90130785,40.1742092 3.90130785,40.1742092 C3.90130785,40.1742092 11.6283384,38.3894062 13.4169896,38.0493742 C15.2002337,37.7104368 16.4759363,38.5907985 16.4759363,38.5907985 C16.4759363,38.5907985 15.6695654,34.9529673 15.4013758,32.8952631 C15.1353491,30.8415721 12.2973704,30.5923856 12.2973704,30.5923856 C12.2973704,30.5923856 3.62230422,30.6022363 2.29649631,30.5923856 C0.89462926,30.579981 0.575613488,29.5058886 0.575613488,29.5058886 C0.575613488,29.5058886 0.610218589,36.0956498 1.62277825,39.3398174" id="Fill-3" fill="#FFFFFF"></path>
                                  <path d="M18.1340974,26.4142246 C17.2916794,29.9969648 17.5137288,33.4023923 18.5035789,36.8924629 C21.4493381,47.2524927 32.2774904,53.7878925 42.599543,51.7210673 C42.3299116,52.3256091 41.8209283,52.7958894 41.5931114,53.3745275 C39.8444724,57.8595199 38.9851124,61.8942984 37.3824637,66.4445974 C37.1232859,67.1815766 36.5533831,67.7992527 36.0101551,68.372783 C35.8958862,68.4928157 36.0386322,68.6832628 36.166599,68.6894651 C41.1508149,68.9962966 46.0993443,68.2421699 50.8027542,66.5128227 C51.713301,66.181547 52.5816727,65.8626758 53.443556,65.4314335 C66.739845,58.8000805 75.3929225,45.3604264 75.5760411,31.4727474 C75.7259966,20.4629355 71.0557499,10.1277149 63.027727,2.29931795 C62.7069089,1.98117645 63.2814977,1.39816027 63.1081117,0.928609688 C63.027727,0.710799511 62.7872936,0.433520224 62.6009307,0.433520224 C57.3337461,0.421115624 52.153795,0.512325916 46.8916569,0.495908063 C46.5769668,0.495908063 46.2071248,0.933717464 46.0337388,1.30074768 C45.9461447,1.48937056 45.8617947,1.92316671 46.1764849,1.94907043 C47.4514665,2.05998215 47.9752291,3.2825649 49.0443826,3.57115426 C50.161118,3.86777013 51.0370596,3.0592821 52.0827825,2.78820512 C52.834362,2.59119089 53.6749776,2.54777479 54.3537422,2.96770697 C55.078647,3.41938034 54.9149937,4.68428466 54.1785539,5.00643941 C51.8037789,6.03930476 49.2321873,5.20454817 47.1652535,3.54889895 C46.8628193,3.31065767 46.3268008,2.8571601 45.8340385,3.1256832 C43.7883724,4.23334098 40.4972832,3.97722248 39.8307745,6.34431197 C39.3571172,8.02659459 40.4388871,9.90881018 41.1688384,11.5841608 C42.0548732,10.3079464 43.554788,10.1040002 44.9126777,10.5217433 C47.3476512,11.2663842 49.337805,12.5889334 51.0900487,14.381398 C53.2845888,16.6288196 54.3587888,19.5789253 54.6049897,22.6246194 C55.2826729,30.9032303 52.9735034,43.1640826 43.6823943,44.6551884 C28.0538657,47.1689441 24.0681512,37.5520957 24.0681512,32.7489618 C24.0681512,30.8696649 24.0184064,29.1041985 24.4819705,27.343475 C25.4361341,23.716589 27.4194389,20.6249249 30.6925047,18.7511007 C32.025522,17.9893123 33.5950075,17.6262954 34.4947401,16.2435474 C35.1781908,15.1949938 35.0603172,13.9800728 34.6821844,12.8720501 C34.3328892,11.8483058 33.3632254,10.9113937 32.413027,10.9113937 C21.7449233,10.9113937 9.9078161,10.9095695 0.621393153,10.9095695 C0.621393153,13.6221636 0.594718388,14.9177146 0.621393153,17.1443402 C0.632207247,18.1943531 1.28501805,18.7521952 2.40860241,18.7521952 L21.6551664,18.7521952 C20.4173131,21.3301629 18.8207923,23.4929414 18.1340974,26.4142246 Z" id="Fill-4" fill="#FFFFFF"></path>
                                  <path d="M11.3828585,54.9313047 C12.5742112,54.515021 21.0726472,49.1828673 21.7878192,48.9209113 C22.4258508,48.6888724 22.9550204,48.6111612 23.8875558,49.2802799 C26.3931814,51.080771 29.0235295,52.8995043 30.3186975,52.8995043 C30.3186975,52.8995043 29.9146108,53.2154567 29.1107632,53.9827177 C28.3512533,54.7098461 20.9396338,62.70607 20.9396338,62.70607 C20.9396338,62.70607 19.600849,64.1081546 18.1705048,63.1599324 C18.1705048,63.1599324 13.3016392,59.7238583 9.37323939,55.293592 C9.37323939,55.293592 10.0894929,55.3848023 11.3828585,54.9313047" id="Fill-5" fill="#FFFFFF"></path>
                                  <path d="M21.3422786,64.9199262 C21.3422786,64.9199262 22.5033518,64.8765101 23.1298483,64.2905752 C23.7545425,63.7020864 31.5673649,54.432202 31.5673649,54.432202 C31.5673649,54.432202 31.8672757,53.4431176 33.3996329,53.7988377 C35.3198555,54.2541595 38.4029537,54.390975 39.0265664,54.3431808 C39.0265664,54.3431808 38.6232007,54.7098461 38.1769391,55.9258617 C37.9166799,56.6376669 35.1421439,66.5026072 34.6057648,67.2705978 C34.0697462,68.0415072 33.9810706,68.7186524 32.1913381,68.4016055 C28.8014801,67.8010769 26.0694795,66.9685093 21.3422786,64.9199262" id="Fill-6" fill="#FFFFFF"></path>
                                  <path d="M2.46159147,42.2184143 C2.46159147,42.2184143 3.39989436,42.4891264 4.33891818,42.3081652 C6.18308167,41.9528099 13.275325,40.0829989 14.6097841,39.9593177 C16.5307277,39.7765323 16.1738626,40.048339 17.1983178,41.0447202 C18.0803874,41.8940705 19.8340729,45.6968099 20.2817764,45.9693463 C20.7258752,46.2385991 20.9933438,46.7369721 21.754656,46.8756118 C21.754656,46.8756118 11.0227492,52.9334345 10.1868197,53.0220909 C9.29645932,53.1129363 8.42340147,53.9973113 7.50888959,52.661263 C4.33891818,48.0055248 4.25168449,47.3247312 2.86387577,43.4384431 L2.46159147,42.2184143" id="Fill-7" fill="#FFFFFF"></path>
                                  <polygon id="Fill-8" fill="#C11E42" points="30.9895318 38.5240326 46.0903326 38.5240326 46.0903326 24.2594726 30.9895318 24.2594726"></polygon>
                                  <path d="M38.5792234,23.2010684 C38.5792234,23.2010684 36.2116577,19.9455907 32.2828974,20.1283761 L32.2828974,22.7964596 L29.7372597,22.7964596 L29.7372597,39.8356366 L36.5238246,39.8356366 C36.5238246,39.8356366 36.8395961,38.750599 37.4181502,38.5240326 L31.0774864,38.5240326 L31.0774864,24.329887 L32.1913381,24.329887 L32.1913381,35.5418209 C32.1913381,35.5418209 35.7390818,35.4586371 37.7501428,38.5316943 L38.8928321,38.5316943" id="Fill-9" fill="#FFFFFF"></path>
                                  <path d="M38.5792234,23.2010684 C38.5792234,23.2010684 40.9568822,19.9455907 44.8842006,20.1283761 L44.8842006,22.7964596 L47.4276755,22.7964596 L47.4276755,39.8356366 L40.6414711,39.8356366 C40.6414711,39.8356366 40.3303857,38.750599 39.7482269,38.5240326 L46.0903326,38.5240326 L46.0903326,24.329887 L44.9710738,24.329887 L44.9710738,35.5418209 C44.9710738,35.5418209 41.4290976,35.4586371 39.4201994,38.5316943 L38.7609002,38.5316943" id="Fill-10" fill="#FFFFFF"></path>
                                  <path d="M37.8903656,24.329887 C37.8903656,24.329887 36.4823706,21.619482 33.5326462,21.619482 L33.5326462,34.5001994 C33.5326462,34.5001994 35.9016537,34.7716412 37.5500821,36.0832452 L37.9094705,36.3991976 L37.8903656,24.329887" id="Fill-11" fill="#C11E42"></path>
                                  <path d="M39.30557,24.329887 C39.30557,24.329887 40.6854484,21.619482 43.6326495,21.619482 L43.6326495,34.5001994 C43.6326495,34.5001994 40.7535772,34.92378 39.735971,35.879299 C39.5377126,36.0660977 39.30557,36.4232772 39.30557,36.4232772 L39.30557,24.329887" id="Fill-12" fill="#C11E42"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>

          </div>
        </slot>
      </div>

    `}static get properties(){return{_currentYear:{type:String,value:()=>(new Date).getFullYear()}}}changeFocusToFirstItem(){this.$.liame.focus()}_copyrightDropup(i){return this.$.copydrop.open(),i.preventDefault(),!1}_fdlpDropup(i){return this.$.fdlpdrop.open(),i.preventDefault(),!1}_fdlpDropdown(i){return this.$.fdlpdrop.close(),i.preventDefault(),!1}}window.customElements.define(d.is,d);
