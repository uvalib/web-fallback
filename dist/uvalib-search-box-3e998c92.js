import{c as e,h as a}from"./uvalib-ui-base-d828b1c1.js";import"./iron-a11y-keys-behavior-5573d08a.js";import"./paper-button-189b90bb.js";import"./iron-icon-030d512c.js";window.customElements.define("uvalib-simple-search-box",class extends e{static get template(){return a`
      <custom-style>
        <style include="uvalib-theme iron-flex iron-flex-alignment iron-flex-factors">

        :host { display: block; }

        .search-group {
          margin-left: auto;
          margin-right: auto;
          padding-top: .5em;
          padding-bottom: .5em;
          @apply(--layout-horizontal);
          /* max-width: 525px; */
        }

        .search-field {
          margin: 0px;
          padding: 0px;
          width: 91%;
          max-width: 500px;
          background-color: var(--color-white);
          color: var(--color-text-gray);
          border-top: var(--uvalib-search-box-border);
          border-left: var(--uvalib-search-box-border);
          border-bottom: var(--uvalib-search-box-border);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          line-height: 30px;
          text-align: left;
          padding-left: 10px;
          padding-right: 10px;
          font-size: var(--uvalib-main-font-size-unit);
        }

        .search-button, .reset-button {
          background-color: var(--uvalib-background-search, var(--uvalib-main-rotunda-orange));
          font-weight: 700;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          margin-left: 0;
          color: var(--uvalib-main-white);
          border: none;
        }

        .reset-button {
          background-color: var(--uvalib-background-search-reset, black);
        }

        [hidden] {
          display: none;
        }

        </style>
      </custom-style>
      <div role="search">
        <h2 id="searchStr" class="screen-reader-text">[[label]]</h2>
        <slot></slot>
        <form method="get" action="[[action]]" id="searchForm">
          <template is="dom-repeat" items="[[hiddenInputs]]">
            <input type="hidden" name="[[item.name]]" value="[[item.value]]">
          </template>
          <template is="dom-if" if="[[queryName]]">
            <input type="hidden" name="[[queryName]]" value$="[[value]]">
          </template>
          <label class="screen-reader-text" for="q1">[[placeholder]]</label>
          <div class="search-group">
            <input class="search-field" name="q" id="q1" value="{{value::change}}" placeholder="[[placeholder]]" tabindex="0" autocomplete="off" />
            <paper-button class="search-button" on-tap="submitSearch" alt="Search Virgo" hidden$="[[_showResetButton(searchAgainOption, submitted, value)]]"><span>Search</span></paper-button>
            <paper-button id="reset" class="reset-button" on-tap="resetSearch" alt="Reset Search" hidden$="[[!_showResetButton(searchAgainOption, submitted, value)]]"><span><iron-icon icon="times"></iron-icon></span></paper-button>
          </div>
        </form>
      </div>
    `}static get properties(){return{label:{type:String,value:"Search"},queryName:{type:String,value:null},action:{type:String,value:null},value:{type:String,notify:!0,value:null},submitted:{type:Boolean,value:!1},hiddenInputs:Array,placeholder:{type:String,value:"Search terms here"},relativeLinks:{type:Boolean,value:!1},searchAgainOption:{type:Boolean,value:!1}}}ready(){super.ready(),this.shadowRoot.querySelector("form").addEventListener("keypress",this._checkForEnter.bind(this))}changeFocusToCatalogAdvanced(){this.$.catalogAdv.focus()}submitSearch(){this.submitted=!0,this.value=""==this.value?null:this.value,this.value&&this.searchAgainOption&&this.shadowRoot.getElementById("reset").focus(),this.action?this.$.searchForm.submit():(console.log("submitted"),this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.dispatchEvent(new CustomEvent("uvalib-analytics-event",{bubbles:!0,composed:!0,detail:{track:["simple-search-box","submitted",this.value?this.value:""]}})))}resetSearch(){this.value=null,this.shadowRoot.getElementById("q1").focus()}_checkForEnter(e){if(13===e.keyCode){e.preventDefault();var a=this.shadowRoot.querySelector("paper-button");return a.focus(),a.click(),!1}}_showResetButton(e,a,t){return e&&a&&!!t}});window.customElements.define("uvalib-search-box",class extends e{static get template(){return a`
      <custom-style>
        <style include="uvalib-theme">

          a, a:link, a:visited { color: inherit; }
          li a span { text-decoration: underline; color: var(--uvalib-main-white);}
          li a span:visited { color: var(--uvalib-main-white); }
          li a span:hover { text-decoration: none; }

          nav ul { list-style-type: none; margin: 0; padding: 0; }
          nav li { display: inline-block; color: var(--color-white); }

          :host([small-screen]) nav li {
            display: block;
            font-size: 120%;
            padding-bottom: .5em;
          }
          nav a { padding: 10px; }

        </style>
      </custom-style>
      <uvalib-simple-search-box placeholder="[[placeholder]]" action="[[_virgoSearchUrl]]" value="{{_query}}" query-name="q" hidden-inputs='[[_hi]]'>
        <nav hidden$="[[noLinks]]">
          <ul>
            <li>
              <a id="catalogAdv" href="https://search.lib.virginia.edu/catalog/advanced" aria-labelledby="catalogAdv searchStr">Catalog Advanced <span aria-hidden="true">&gt;</span></a>
            </li>
            <li>
              <a id="articleAdv" href="https://search.lib.virginia.edu/articles/advanced" aria-labelledby="articleAdv searchStr">Article Advanced <span aria-hidden="true">&gt;</span></a>
            </li>
            <li>
              <a href="[[_domain]]/search">Site Search <span aria-hidden="true">&gt;</span></a>
            </li>
          </ul>
        </nav>
      </uvalib-simple-search-box>
    `}static get properties(){return{_virgoSearchUrl:{type:String,value:"https://search.lib.virginia.edu/catalog"},_query:String,placeholder:{type:String,value:"Search Virgo for books, articles, digital materials, and more."},relativeLinks:{type:Boolean,value:!1},noLinks:{type:Boolean,value:!1},_domain:{type:String,computed:"_makeLinkDomain(relativeLinks)"},_hiddenInputs:{type:Array,value:function(){return[{name:"catalog_select",value:"all"}]}},hiddenInputs:Array,_hi:{type:Array,computed:"_mergehiddenInputs(_hiddenInputs, hiddenInputs)"}}}_mergehiddenInputs(e,a){if(!a&&e)return e;var t={};e.forEach(e=>{t[e.name]=e.value}),a.forEach(e=>{t[e.name]=e.value});var i=[];for(name in t)i.push({name:name,value:t[name]});return i}changeFocusToCatalogAdvanced(){this.$.catalogAdv.focus()}submitCatalogSearch(){this.$.virgoSearchForm.submit()}_checkForEnterVirgo(e){13===e.keyCode&&this.submitCatalogSearch()}_makeLinkDomain(e){return e?"":"https://www.library.virginia.edu"}});
