import{U as e,h as a}from"./uvalib-ui-base-6ae119bb.js";var i=[];i.push(import("./uvalib-ui-base-6ae119bb.js").then((function(e){return e.i}))),i.push(import("./uvalib-ui-base-6ae119bb.js").then((function(e){return e.f}))),i.push(import("./waterfall-0f5953ec.js").then(()=>{import("./app-header-03c65bcb.js")})),Promise.all(i).then(()=>{var e=[];e.push(import("./paper-button-643af30a.js").then((function(e){return e.p}))),e.push(import("./uvalib-logos-9d1e8306.js")),Promise.all(e).then(()=>{import("./uvalib-icons-7d9ce6b9.js"),import("./uvalib-search-box-657e7e9c.js"),import("./uvalib-alerts-8221c14c.js"),import("./paper-dialog-a2e99246.js"),import("./paper-badge-a9dc5466.js"),import("./app-localstorage-document-f3503647.js")})});class l extends e{static get is(){return"uvalib-header"}static get template(){return a`
      <div>${super.template}</div>
      <custom-style>
        <style include="uvalib-theme iron-flex iron-flex-alignment iron-flex-factors">

          [hide] paper-badge { opacity: 0; }
          [hide] iron-icon { opacity: .5; }
          :host([simple]) #top #menu { display: inline-block; }
          :host([simple][small-screen]) #spacer { display: none; }
          :host([simple][small-screen]) #top > div { display: block; }
          :host {
            display: block;
            position: relative;
            margin: 0;
            z-index: 1000;
            transition: height 1s ease;
          }
          :host([demo]) {
            z-index: 0;
          }
          :host([large-screen]) #bottom #menu { background-color: var(--uvalib-header-nav-background-color, var(--color-secondary-blue)); }

          /*full header*/
          :host uvalib-logos { max-width: 400px; }
          /*simple header*/
          :host([simple]) uvalib-logos { height: 40px; padding: 0 0 0 10px; }
          /*mobile header*/
          :host([small-screen]) uvalib-logos { height: 45px; padding-top: 0px; padding-left: 0px; }
          /*simple header - mobile*/
          :host([simple][small-screen]) uvalib-logos { height: 38px; padding-top: 5px; }

          app-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            color: var(--color-white);
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }

          :host([demo]) app-header {
            position: relative;
          }

          #top, #bottom #menu {
            @apply --layout-horizontal;
            @apply --layout-center-justified;
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }
          #bottom nav { width: 100%; }
          /*#top > div,*/ #bottom nav { max-width: var(--uvalib-display-width-max); @apply --layout-horizontal; }
          #top #search, #top #menu { @apply --layout-flex; text-align: right; }
          #menuButton { margin-right: var(--uvalib-spacing-unit); }
          #top { padding-top: var(--uvalib-spacing-unit); padding-bottom: var(--uvalib-spacing-unit); width: 100%; }
          :host([simple][small-screen]) #top { padding-top: 0; padding-bottom: 0; }
          :host([medium-screen]) #top { padding-left: var(--uvalib-spacing-unit); padding-right: var(--uvalib-spacing-unit); }

          #search, #menu { padding-right: var(--uvalib-spacing-unit); }
          :host([large-screen]) #search { min-width: 550px; }

          :host([small-screen]) #logo { padding-left: .1em; }
          :host([medium-screen]) #logo { padding-left: 0; }
          #logo { padding-left: var(--uvalib-spacing-unit); }

          :host([medium-screen]) #search, :host([medium-screen]) .largeScreen { display:none }
          :host([small-screen]) #search, :host([small-screen]) .largeScreen { display:none; }
          :host([large-screen]) .visibleMobile, :host([medium-screen]) .visibleMobile { display: none; }

          a, a:link, a:visited { color: inherit; }

          nav { min-height: calc(var(--uvalib-spacing-unit)*2.5); }
          nav ul { list-style-type: none; margin: 0; padding: 0; }
          nav li { display: inline-block; color: var(--color-white); }
          nav a { padding: calc(var(--uvalib-spacing-unit)*0.625); }

          #bottom nav {
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-justified;
          }
          :host([large-screen]) #bottom nav { @apply --layout-end-justified; }

          #bottom li a iron-icon { display: inline-block; height: calc(var(--uvalib-main-font-size-unit)*1.875);}

          uvalib-search-box { color: var(--color-white);  }

          paper-button { color: var(--color-white); }

          #menuDialog {
            position: fixed;
            margin: 0;
            top:0;
            width: 100%;
            height: 100vh;
            overflow: auto;
            background-color: var(--uvalib-header-background-color, var(--color-primary-color));
          }

          :host([small-screen]) #menuDialogSearch {
            background-color: var(--uvalib-blue-600);
            padding: calc(var(--uvalib-spacing-unit)/2);
            margin-top: var(--uvalib-spacing-unit);
            margin-bottom: var(--uvalib-spacing-unit);
            margin-left: -.5em;
            margin-right: -.5em;
          }

          #menuContainer {
            height: 100%;
            @apply --layout-vertical;
            padding-left: calc(var(--uvalib-spacing-unit)/2);
            padding-right: calc(var(--uvalib-spacing-unit)/2);
          }
          :host([small-screen]) #menuContainer nav li {
            display: block;
            font-size: 130%;
            padding-left: 1.5em;
            padding-bottom: calc(var(--uvalib-spacing-unit)/2);
          }

          /* 11-1-18 */

          .spacer { @apply --layout-flex; }

          #menuButton paper-button {
            min-width: calc(var(--uvalib-spacing-unit)*4);
            border: 1px solid var(--color-white);
            padding-top: .35em;
            padding-bottom: calc(var(--uvalib-spacing-unit)/4);
            margin-right: .75em;
            margin-top: .3em;
          }

          /*Used on Tablet & Mobile*/
          #menuButton.menuLarge paper-button::after {
            font-family: uvalib-custom-icons;
            content: "\f002";
            padding-left: calc(var(--uvalib-spacing-unit)/2);
          }

          #simple-menu { float: right; }
          :host([simple][small-screen]) #simple-menu { float: left; padding-left: var(--uvalib-spacing-unit); }

          /* ALERTS */
          #alert paper-badge, #alertSmall paper-badge {
            --paper-badge-background: var(--color-primary-orange);
            --paper-badge-margin-left: -1.65em;
            --paper-badge-margin-bottom: -0.2em;
          }

          /* disable link if no alerts available */
          a#alert, a#alertSmall { opacity: .5; }
          a#alert[href], a#alertSmall[href] { opacity: 1; }
          a#alert paper-badge, a#alertSmall paper-badge { display:none; }
          a#alert[href] paper-badge, a#alertSmall[href] paper-badge { display: inline-block; }
        </style>
      </custom-style>
      <!--mobile header-->
      <div hidden$="[[!_dialogMenu]]">
        <paper-dialog id="menuDialog" with-backdrop>
          <div id="menuContainer">
            <div id="menuTop" class="layout horizontal justified">
              <a href="[[libraryHomeLink]]"><uvalib-logos simple$="[[simple]]"></uvalib-logos></a>
              <div id="menuButton">
                <paper-button dialog-dismiss aria-label="close menu">Close&nbsp;X</paper-button>
              </div>
            </div>
            <uvalib-search-box relative-links$="[[relativeLinks]]" id="menuDialogSearch" small-screen$="[[smallScreen]]" medium-screen$="[[mediumScreen]]" large-screen$="[[largeScreen]]"></uvalib-search-box>

            <div id="menuDialogNav">
              <nav class="horizontal layout wrap">
                <ul class="vertical layout">
                  <li>
                    <a id="menuDialogFirstItem" href="[[_domain]]/about-uva-library">About</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/research">Research</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/collections">Collections</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/services">Services</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/hours"><iron-icon icon="clock-o"></iron-icon> Hours</a>
                  </li>
                  <li>
                    <a href="[[_domain]]/askalibrarian"><iron-icon icon="comments"></iron-icon> Ask a Librarian</a>
                  </li>
                  <li>
                    <a href="https://search.lib.virginia.edu/account"><iron-icon icon="user"></iron-icon> Account</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </paper-dialog>
      </div>
      <!--default header-->
      <app-header id="header" condenses reveals$="[[!demo]]" fixed$="[[!demo]]" effects="waterfall" role="banner">
        <div id="top">
          <div id="logo" class="flex-2 layout horizontal">
            <a href="[[libraryHomeLink]]"><uvalib-logos tabindex="-1" stacked$="[[_and(largeScreen,full)]]" simple$="[[simple]]"></uvalib-logos></a>
          </div>
          <div hidden$="[[_or(simple, largeScreen)]]" id="menuButton" class="menuLarge">
            <paper-button aria-label="open menu" icon="search" reverse outline on-tap="openMenu">Menu</paper-button>
          </div>
          <uvalib-search-box class="flex-4" hidden$="[[simple]]" relative-links$="[[relativeLinks]]" id="search" small-screen$="[[smallScreen]]" medium-screen$="[[mediumScreen]]" large-screen$="[[largeScreen]]"></uvalib-search-box>
          <div id="simple-menu" hidden$="[[full]]">
            <nav>
              <ul>
                <li>
                  <a href="//library.virginia.edu/askalibrarian"><iron-icon  class="largeScreen" icon="comments"></iron-icon> Ask a Librarian</a>
                </li>
                <li>
                  <div style="position: relative; display: inline-block">
                    <a href$="[[_alertLink(_alertSeenCount)]]" id="alertSmall" on-click="viewAllAlerts" aria-label="Alerts">
                      <iron-icon icon="bell" alt="Library Alerts"></iron-icon>
                      <paper-badge id="alertBadgeSmall" for="alertSmall" label="[[_alertSeenCount]]"></paper-badge>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!--hidden with simple header-->
        <div id="bottom" sticky hidden$="[[simple]]">
          <div id="menu">
            <nav>
              <ul>
                <li>
                  <a class="largeScreen" id="menuFirstItem" href="[[_domain]]/about-uva-library">About</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/research">Research</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/collections">Collections</a>
                </li>
                <li>
                  <a class="largeScreen" href="[[_domain]]/services">Services</a>
                </li>
                <li>
                  <a id="menuNotLargeScreenFirstItem" href="[[_domain]]/hours"><iron-icon class="largeScreen" icon="clock-o"></iron-icon> Hours</a>
                </li>
                <li>
                  <a href="[[_domain]]/askalibrarian"><iron-icon class="largeScreen" icon="comments"></iron-icon> Ask a Librarian</a>
                </li>
                <li>
                  <a href="https://search.lib.virginia.edu/account"><iron-icon class="largeScreen" icon="user"></iron-icon> Account</a>
                </li>
                <li>
                  <div style="position: relative; display: inline-block">
                    <a href$="[[_alertLink(_alertSeenCount)]]" id="alert" on-click="viewAllAlerts" aria-label="Alerts">
                      <iron-icon icon="bell" alt="Library Alerts"></iron-icon>
                      <paper-badge hidden$="[[!_alertSeenCount]]" id="alertBadge" for="alert" label="[[_alertSeenCount]]"></paper-badge>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <uvalib-alerts tabindex="-1" id="alerts" seen-count="{{_alertSeenCount}}" on-size-changed="_delayedAdjustHeight"></uvalib-alerts>
      </app-header>
      <app-localstorage-document key="uvalib-header-height" data="{{_height}}" session-only></app-localstorage-document>
    </template>
    `}static get properties(){return{libraryHomeLink:{type:String,value:"https://www.library.virginia.edu"},full:{type:Boolean,computed:"_not(simple)",notify:!0},simple:{type:Boolean,value:!1,observer:"_simpleChange",reflectToAttribute:!0,notify:!0},demo:{type:Boolean,value:!1},_height:{type:String,notify:!0},_dialogMenu:{type:Boolean,computed:"_isDialogMenu(simple,largeScreen)"}}}static get observers(){return["_adjustHeight(smallScreen, mediumScreen, largeScreen)"]}_alertLink(e){return e>0?"#link":null}connectedCallback(){super.connectedCallback(),this._adjustHeight(),this.simple?this._loadExtraLazyItems():this._adjustHeight()}_loadExtraLazyItems(){this._adjustHeight()}_stackedLogo(e,a,i){return!(!e||!a)||i&&!a}_delayedAdjustHeight(){setTimeout(function(){this._adjustHeight()}.bind(this),500)}_adjustHeight(){this._height=this.style.height=this.$.header.clientHeight+"px"}openMenu(){this.shadowRoot.querySelector("#menuDialog").open()}closeMenu(){var e=this.shadowRoot.querySelector("#menuDialog");e&&e.close()}viewAllAlerts(e){e.preventDefault(),this.$.alerts.unseeAll()}changeFocusToSearch(){this.largeScreen?this.$.search.changeFocusToCatalogAdvanced():(this.openMenu(),this.$.menuDialogSearch.changeFocusToCatalogAdvanced())}changeFocusToNavigation(){this.largeScreen?this.shadowRoot.querySelector("#menuFirstItem").focus():(this.openMenu(),this.shadowRoot.querySelector("#menuDialogFirstItem").focus())}changeFocusToFirstItem(){this.$.logo.querySelector("a").focus()}_simpleChange(){this._delayedAdjustHeight()}_isDialogMenu(e,a){return 0==e&&0==a}}window.customElements.define(l.is,l);
