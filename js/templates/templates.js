define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"activityView\">\n    <div class=\"activity\">\n\n        <div class=\"spinner\"><i class=\"fa fa-spinner fa-spin\"></i>\n            <div>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["background-activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav id=\"background-activity\" class=\"message-bar-container\">\n    <div>\n        <button id=\"message-bar-dismiss-button\" class=\"\"><i class=\" fa fa-remove fa-2x\"></i></button>\n        <div class=\"message\">\n            <i class=\" fa fa-spinner fa-spin fa-large\"></i>\n            ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n</nav>";
  return buffer;
  });

this["JST"]["brand"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n    <img src=\"img/login.png\" width=\"320\">\n</div>";
  });

this["JST"]["clear-route-control"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div title=\"Click to remove route\" class=\"removeRouteOverlayControl\">\n    Clear Route\n    <!--<i class=\"fa fa-2x fa-trash-o\"> </i>-->\n</div>";
  });

this["JST"]["contact-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"contact-view\" class=\"text-area-view scroll-wrapper\">\n    <div class=\"scroll-content\" parsley-validate parsley-bind>\n        <h1>Contact</h1>\n\n        <div class=\"topcoat-overlay-buttons\">\n            <button id=\"message-cancel-button\" role=\"button\" class=\"topcoat-button\">Cancel</button>\n            <button id=\"send-message-button\" data-role=\"button\"\n                    class=\"topcoat-button--cta\" disabled>Send\n            </button>\n        </div>\n\n        <textarea id=\"message-text\" rows=\"7\" cols=\"17\"\n                  placeholder=\"Enter Message for Householder here. 2000 char max\"\n                  parsley-maxlength=\"2000\"></textarea>\n\n    </div>\n</div>\n";
  });

this["JST"]["contact"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"contact-dialog\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n\n        <div class=\"topcoat-overlay-bg\"></div>\n        <aside class=\"topcoat-overlay\">\n            <h1>Contact</h1>\n\n            <div class=\"topcoat-overlay-buttons\">\n                <button role=\"button\" class=\"message-cancel topcoat-button\">Cancel</button>\n                <button data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-role=\"button\" id=\"send-message-button\"\n                        class=\"send-message topcoat-button--cta is-disabled\">Send\n                </button>\n            </div>\n\n            <textarea class=\"message-text topcoat-textarea\" rows=\"7\" cols=\"17\"\n                      placeholder=\"Enter Message for Householder here.\"></textarea>\n\n        </aside>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["costDisclaimer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"popout\">\n    <div class=\"topcoat-overlay-bg\"></div>\n    <aside class=\"topcoat-overlay\">\n        <h1>Costs</h1>\n        <!--<a class=\"close-popout\">-->\n        <!--<i class=\"fa fa-times fa-2x\"></i>-->\n        <!--</a>-->\n\n        <p>These values are self-reported by house holders and thus vary.</p>\n\n\n    </aside>\n</div>";
  });

this["JST"]["disruptionDisclaimer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"popout\">\n    <div class=\"topcoat-overlay-bg\"></div>\n    <!--<a class=\"topcoat-icon-button--quiet close-popout\">-->\n    <!--<i class=\"fa fa-times fa-2x\"></i>-->\n    <!--</a>-->\n    <aside class=\"topcoat-overlay\">\n        <h1>Disruption</h1>\n\n\n        <p>These values are self-reported by house holders and thus vary.</p>\n\n\n    </aside>\n</div>";
  });

this["JST"]["filter-checkbox-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"filter-group\">\n    <label class=\"topcoat-checkbox\" for=\"filter-checkbox-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <input type=\"checkbox\" id=\"filter-checkbox-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.checked || depth0.checked),stack1 ? stack1.call(depth0, depth0.setting, options) : helperMissing.call(depth0, "checked", depth0.setting, options)))
    + " data-filter-bind=\"measures\"\n               data-measure-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n\n        <div class=\"topcoat-checkbox__checkmark\"></div>\n        ";
  if (stack2 = helpers['short']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['short']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n    </label>\n</div>";
  return buffer;
  });

this["JST"]["filter-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <span class=\"measure-category\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            ";
  stack2 = helpers.each.call(depth0, depth0.measures, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = self.invokePartial(partials.filterCheckboxItem, 'filterCheckboxItem', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }

  buffer += "<div id=\"filter-view\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n\n        <div class=\"filter-buttons\">\n            <button id=\"filter-apply-button\" class=\"topcoat-button--cta\">Apply</button>\n            <button id=\"filter-reset-button\" class=\"topcoat-button--cta\">Reset</button>\n        </div>\n\n        <span class=\"view-title\">Show houses that have installed:</span>\n        <br>\n        <!--print all categories-->\n        ";
  stack1 = helpers.each.call(depth0, depth0.measureCategories, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        <div>\n            ";
  stack1 = self.invokePartial(partials.filterCheckboxItem, 'filterCheckboxItem', depth0.other, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <!--<div class=\"filter-group\">-->\n        <!--<label for=\"filter-distance\">Maximum distance from current location</label> <br>-->\n        <!--<input type=\"number\" id=\"filter-distance\" class=\"topcoat-text-input\" data-filter-bind=\"distance\"-->\n        <!--value=\"";
  if (stack1 = helpers.distance) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.distance; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> <br>-->\n        <!--</div>-->\n\n        <div class=\"filter-group\">\n            <label for=\"filter-beds\">Minimum number of bedrooms</label> <br>\n            <input type=\"number\" id=\"filter-beds\" class=\"topcoat-text-input\" data-filter-bind=\"bedrooms\"\n                   value=\"";
  if (stack1 = helpers.bedrooms) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bedrooms; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> <br>\n        </div>\n\n        <!--<div class=\"filter-group\">-->\n        <!--<input type=\"checkbox\" id=\"filter-open\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.checked || depth0.checked),stack1 ? stack1.call(depth0, depth0.open, options) : helperMissing.call(depth0, "checked", depth0.open, options)))
    + " data-filter-bind=\"open\"/>-->\n        <!--<label for=\"filter-open\" class=\"light-checkbox checkbox-left\">Show only houses open 28-29 Sept.</label>  -->\n        <!--</div>-->\n\n        <button id=\"filter-apply-button\" class=\"topcoat-button--cta\">Apply</button>\n        <button id=\"filter-reset-button\" class=\"topcoat-button--cta\">Reset</button>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["guestModeDisclaimer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"guest-mode-disclaimer\">\n    <div class=\"topcoat-overlay-bg\"></div>\n    <aside class=\"topcoat-overlay\">\n        <h1>Login Required</h1>\n\n        <p>This function will help you collect additional information.</p>\n\n        <p>In order for this to work you must be registered.</p>\n\n        <div class=\"topcoat-overlay-buttons\">\n            <button role=\"button\" class=\"dialog-close topcoat-button\">Cancel</button>\n            <button role=\"button\" id=\"login-register-button\" class=\"login-register-button topcoat-button--cta\">\n                Register\n            </button>\n        </div>\n    </aside>\n</div>";
  });

this["JST"]["horizontal_bar/foldout-menu-top"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n            <a id=\"scanbutton\" class=\"equidist-button\"><i class=\"fa fa-qrcode fa-2x\"></i></a>\n        ";
  }

  buffer += "<nav class=\"horizontal-bar-container top\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <!-- @if DEVICE != 'BROWSER' -->\n        <a class=\"equidist-button\" id=\"navbar-back-button\" onclick=\"window.history.back();\">\n            <i class=\"fa fa-chevron-left fa-2x\"></i>\n        </a>\n        <!-- @endif -->\n        <!-- @if DEVICE != 'BROWSER' -->\n        ";
  stack1 = helpers.unless.call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <!-- @endif -->\n        <a href=\"#showFilter\" class=\"equidist-button\">Edit Filter</a>\n        <a href=\"#menu\" class=\"equidist-button\"> <i class=\"fa fa-lightbulb-o fa-2x\"></i></a>\n    </div>\n</nav>\n";
  return buffer;
  });

this["JST"]["horizontal_bar/homepage_bottom_menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"horizontal-bar-container bottom\">\n    <div class=\"horizontal-bar-buttongroup equidist-buttongroup-container\">\n        <a id=\"filter-selection-all\" class=\"equidist-button\"><i>All</i></a>\n        <a id=\"filter-selection-features\" class=\"equidist-button\"> <i class=\"fa fa-filter fa-1x\"></i></a>\n        <a id=\"filter-selection-favs\" class=\"equidist-button\"> <i class=\"fa fa-star fa-1x\"></i></a>\n        <a id=\"homepage-toggle\" class=\"equidist-button\"> <i class=\"fa fa-location-arrow fa-1x\"></i></a>\n    </div>\n</div>\n";
  });

this["JST"]["house-actions-list-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n        disabled\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n                        fa-star\n                        ";
  }

function program5(depth0,data) {
  
  
  return "\n                        fa-star-o\n                        ";
  }

  buffer += "<button class=\"topcoat-icon-button showon-map\"\n    ";
  stack1 = helpers['if'].call(depth0, depth0.offline, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <i class=\"topcoat-icon position-icon fa fa-map-marker fa-2x\"></i>\n</button>\n\n<button class=\"home-action-button topcoat-icon-button route-there\"\n    ";
  stack1 = helpers['if'].call(depth0, depth0.offline, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i\n        class=\"topcoat-icon road-icon fa fa-road fa-2x\"></i></button>\n\n<button class=\"topcoat-icon-button toggle-favourite\"\n    ";
  stack1 = helpers['if'].call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <i class=\"topcoat-icon star-icon fa fa-2x\n                        ";
  stack1 = helpers['if'].call(depth0, depth0.fav, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            ></i>\n</button>\n\n";
  return buffer;
  });

this["JST"]["house-list-item-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            <!--no access-->\n            ";
  options = {hash:{
    'compare': (0)
  },inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lteq || depth0.if_lteq),stack1 ? stack1.call(depth0, depth0.accessibility, options) : helperMissing.call(depth0, "if_lteq", depth0.accessibility, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                <i class=\"fa fa-wheelchair accessibility-none\"></i>\n            ";
  }

function program4(depth0,data) {
  
  
  return "\n                <i class=\"fa fa-wheelchair accessibility-partial\"></i>\n            ";
  }

function program6(depth0,data) {
  
  
  return "\n            <i class=\"fa fa-wheelchair accessibility-full\"></i>\n        ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.open_enum || depth0.open_enum),stack1 ? stack1.call(depth0, depth0.day, options) : helperMissing.call(depth0, "open_enum", depth0.day, options)))
    + "</span>\n                <span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.time_enum || depth0.time_enum),stack1 ? stack1.call(depth0, depth0.time, options) : helperMissing.call(depth0, "time_enum", depth0.time, options)))
    + "</span>\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n                Booking required.\n            ";
  }

  buffer += "<div>\n    <div class=\"list-home-address\">\n        "
    + escapeExpression(((stack1 = depth0.address),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        ";
  options = {hash:{
    'compare': (1)
  },inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_lteq || depth0.if_lteq),stack1 ? stack1.call(depth0, depth0.accessibility, options) : helperMissing.call(depth0, "if_lteq", depth0.accessibility, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n\n</div>\n<div class=\"home-header\">\n    <img src=\"";
  if (stack2 = helpers.baseUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.baseUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "img/houses/house_"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\" class=\"home-image\" width=\"100\" height=\"100\"/>\n    <!--<img src=\"data:image/jpeg;base64,"
    + escapeExpression(((stack1 = depth0.image),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"home-image\" width=\"100\" height=\"100\"/>-->\n\n    <div class=\"home-right-float\">\n\n        <div class=\"opening-times\">\n            ";
  options = {hash:{
    'compare': (0)
  },inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.booking, options) : helperMissing.call(depth0, "if_eq", depth0.booking, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </div>\n\n        <div class=\"house-actions\" data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n            <!--Contains subview-->\n        </div>\n    </div>\n</div>\n<!--<hr>-->";
  return buffer;
  });

this["JST"]["house-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n                        <dt>Booking required</dt>\n                        <dd></dd>\n                    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                        <dt>Notes</dt>\n                        <dd>\n                            ";
  stack2 = ((stack1 = depth0.comments),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        </dd>\n                    ";
  return buffer;
  }

  buffer += "<div data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"scroll-wrapper house-view\">\n    <!--<div class=\"scroll-content\">-->\n    <div class=\"scroll-content\">\n        <div class=\"home-address column\">";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"home-header\">\n\n            <!--<img src=\"data:image/jpeg;base64,";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"home-image column\" width=\"100\" height=\"100\"/>-->\n            <img src=\"";
  if (stack1 = helpers.baseUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.baseUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "img/houses/house_"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\" class=\"home-image column\" width=\"100\" height=\"100\"/>\n\n            <div class=\"house-actions\"></div>\n\n            <div class=\"properties\">\n                <dl>\n                    <dt>House Type:</dt>\n                    <dd>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.type_enum || depth0.type_enum),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "type_enum", depth0.type, options)))
    + "</dd>\n                    <dt>House Age:</dt>\n                    <dd>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.age_enum || depth0.age_enum),stack1 ? stack1.call(depth0, depth0.age, options) : helperMissing.call(depth0, "age_enum", depth0.age, options)))
    + "</dd>\n                    <dt>Open:</dt>\n                    <dd>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.open_enum || depth0.open_enum),stack1 ? stack1.call(depth0, depth0.day, options) : helperMissing.call(depth0, "open_enum", depth0.day, options)))
    + "</dd>\n                    <dt>Time:</dt>\n                    <dd>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.time_enum || depth0.time_enum),stack1 ? stack1.call(depth0, depth0.time, options) : helperMissing.call(depth0, "time_enum", depth0.time, options)))
    + "</dd>\n                    ";
  options = {hash:{
    'compare': (depth0.booking)
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, 1, options) : helperMissing.call(depth0, "if_eq", 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n                    ";
  stack2 = helpers['if'].call(depth0, depth0.comments, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </dl>\n            </div>\n\n        </div>\n\n        <div class=\"measures\"></div>\n\n        <div class=\"houseNotes\"></div>\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["house/inline_note"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h2>Your Notes</h2>\n    <p>"
    + escapeExpression(((stack1 = depth0.text),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.text, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

this["JST"]["house_actions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button class=\"home-action-button topcoat-icon-button send-message\"\n        ";
  stack1 = helpers['if'].call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><i\n            class=\"topcoat-icon fa fa-envelope-o fa-2x\"></i></button>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n            disabled\n        ";
  }

function program6(depth0,data) {
  
  
  return "\n        disabled\n    ";
  }

function program8(depth0,data) {
  
  
  return "\n                        fa-star\n                        ";
  }

function program10(depth0,data) {
  
  
  return "\n                        fa-star-o\n                        ";
  }

function program12(depth0,data) {
  
  
  return "\n                        fa-file\n                        ";
  }

function program14(depth0,data) {
  
  
  return "\n                        fa-file-o\n                        ";
  }

  options = {hash:{
    'compare': (0)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.contact, options) : helperMissing.call(depth0, "if_eq", depth0.contact, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n<button class=\"topcoat-icon-button toggle-favourite\"\n    ";
  stack2 = helpers['if'].call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n    <i class=\"topcoat-icon star-icon fa fa-2x\n                        ";
  stack2 = helpers['if'].call(depth0, depth0.fav, {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"\n            ></i>\n</button>\n\n\n<button class=\"home-action-button topcoat-icon-button take-note\"\n    ";
  stack2 = helpers['if'].call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        >\n    <i class=\"topcoat-icon note-icon fa fa-2x\n                        ";
  stack2 = helpers['if'].call(depth0, depth0.note, {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"\n            ></i>\n</button>\n\n\n<button class=\"topcoat-icon-button showon-map\"\n    ";
  stack2 = helpers['if'].call(depth0, depth0.offline, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n    <i class=\"topcoat-icon position-icon fa fa-map-marker fa-2x\"></i>\n</button>\n\n<button class=\"home-action-button topcoat-icon-button route-there\"\n    ";
  stack2 = helpers['if'].call(depth0, depth0.offline, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><i\n        class=\"topcoat-icon road-icon fa fa-road fa-2x\"></i></button>\n\n";
  return buffer;
  });

this["JST"]["list-main-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"list-main-view\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n\n        <ul class=\"house-list\">\n            <div id=\"daysFilterHook\"></div>\n            <!--subview-->\n            <li id=\"empty-list-placeholder\">Unfortunately no properties meet this requirement.</li>\n        </ul>\n    </div>\n</div>";
  });

this["JST"]["list/dayToggle"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"days-filter\" class=\"topcoat-button-bar\">\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"1\">Saturday</button>\n    </div>\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"2\">Sunday</button>\n    </div>\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"3\">Both</button>\n    </div>\n\n</div>";
  });

this["JST"]["login/login-start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"registration-reminder-view\">\n    <div class=\"scroll-content\">\n        <div class=\"login-header\">\n            <img src=\"img/logo.gif\" class=\"login-logo\" width=\"50\">\n\n            <h2 class=\"login-title\">Greendoors</h2>\n        </div>\n\n        <div class=\"disclaimer\">Registration allows you to save houses for future reference, contact home owners, and\n            use QR codes to get a personalised report about retrofitting measures. You’ll also avoid seeing this screen\n            again.\n        </div>\n\n\n        <div class=\"field-container-longtext\">\n            <button id=\"reg-login-button\" class=\"topcoat-button--cta\"\n                    onclick=\"(\n                                function(){ require(['backbone'],\n                                    function(Backbone){\n                                        Backbone.history.navigate('login', {replace:true, trigger:true});\n                                    })\n                                }\n                            )();\"\n                    >Login</button>\n            <button id=\"reg-remind-reg-button\" class=\"topcoat-button\"\n                    onclick=\"(\n                                function(){ require(['backbone'],\n                                    function(Backbone){\n                                        Backbone.history.navigate('register', {replace:true, trigger:true});\n                                    })\n                                }\n                            )();\"\n                    >\n                Register\n            </button>\n        </div>\n        <div class=\"field-container-longtext\">\n            <a class=\"login-start-pwReset\" href=\"#passwordReset\">Forget username or password?</a>\n        </div>\n        <div class=\"field-container-longtext\">\n            <label for=\"reg-remind-guest-button\">No thanks, just the</label>\n            <button id=\"reg-remind-guest-button\" class=\"topcoat-button\" onclick=\"window.location.hash='guestMode'\">Basic\n                App\n            </button>\n        </div>\n    </div>\n</div>";
  });

this["JST"]["login/login-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"login-view\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <!--<div class=\"scroll\">-->\n        <!--<div class=\"centered-image\">-->\n        <!--<img src=\"img/login.png\" width=\"320\">-->\n        <!--</div>-->\n        <div class=\"login-header\">\n            <img src=\"img/logo.gif\" class=\"login-logo\" width=\"50\">\n\n            <h2 class=\"login-title\">Greendoors</h2>\n        </div>\n        <div id=\"login-form\" class=\"form\" parsley-validate parsley-bind>\n\n\n            <!--<label for=\"username\">Username:</label>-->\n            <input type=\"text\"\n                   id=\"login-username-text\"\n                   class=\"username-text topcoat-text-input\"\n                   autocorrect=\"off\"\n                   autocapitalize=\"off\"\n                   parsley-minlength=\"4\"\n                   placeholder=\"Username\"\n                   required/>\n\n            <!--<label for=\"password\">Password:</label>-->\n            <input id=\"login-password-field\" type=\"password\" parsley-trigger=\"change\"\n                   class=\"password-text topcoat-text-input\" placeholder=\"Password\" autocorrect=\"off\"\n                   parsley-minlength=\"4\"\n                   autocapitalize=\"off\" required/>\n\n\n            <!--</div>-->\n        </div>\n        <div>\n            <button id=\"login-login-button\" class=\"topcoat-button--cta\"> Login</button>\n            <a id=\"password-reset\" class=\"forget-password\" href=\"#passwordReset\">Forget username or password?</a>\n        </div>\n\n        <button id=\"login-register-button\" class=\"topcoat-button\">Register</button>\n        <div class=\"field-container-longtext\">\n            <a id=\"login-continue-unregistered\" class=\"continue-unregistered-link\">Continue without registering</a>\n        </div>\n\n    </div>\n</div>";
  });

this["JST"]["login/password-reset"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"login-view\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <!--<div class=\"scroll\">-->\n        <!--<div class=\"centered-image\">-->\n        <!--<img src=\"img/login.png\" width=\"320\">-->\n        <!--</div>-->\n        <div class=\"login-header\">\n            <img src=\"img/logo.gif\" class=\"login-logo\" width=\"50\">\n\n            <h2 class=\"login-title\">Greendoors</h2>\n        </div>\n        <div id=\"password-reset-form\" class=\"form\" parsley-validate parsley-bind>\n\n            <p>Forget your username or password? Enter the email address you registered with below and instructions for\n                resetting your account will be sent to you.\n            </p>\n\n            <input type=\"email\" id=\"email-reset-tf\" class=\"email-tf topcoat-text-input\" autocorrect=\"off\"\n                   parsley-type=\"email\" parsley-trigger=\"change\" placeholder=\"Email\"\n                   pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,4}$\"\n                   autocapitalize=\"off\" required/>\n\n        </div>\n        <div>\n            <button id=\"pw-reset-cancel\" class=\"topcoat-button\">Back</button>\n            <button id=\"password-reset-button\" class=\"topcoat-button--cta\"> Reset</button>\n        </div>\n\n    </div>\n</div>";
  });

this["JST"]["login/registration-reminder-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"registration-reminder-view\">\n    <div class=\"scroll-content\">\n        <div class=\"login-header\">\n            <img src=\"img/logo.gif\" class=\"login-logo\" width=\"50\">\n\n            <h2 class=\"login-title\">Greendoors</h2>\n        </div>\n\n        <div class=\"disclaimer\">Registration allows you to save houses for future reference, contact home owners, and\n            use QR\n            codes to get a personalised report about retrofitting measures. You’ll also avoid seeing this screen again.\n        </div>\n\n        <div class=\"field-container-longtext\">\n            <label for=\"reg-remind-reg-button\">You convinced me, I’ll </label>\n            <button id=\"reg-remind-reg-button\" class=\"topcoat-button--cta\">Register</button>\n\n        </div>\n\n        <div class=\"field-container-longtext\">\n\n            <label for=\"reg-remind-guest-button\">No thanks, just the</label>\n            <button id=\"reg-remind-guest-button\" class=\"topcoat-button\">Basic App</button>\n        </div>\n    </div>\n</div>";
  });

this["JST"]["login/registration-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"registration-view\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n\n        <div class=\"login-header\">\n            <img src=\"img/logo.gif\" class=\"login-logo\" width=\"50\">\n\n            <h2 class=\"login-title\">Greendoors</h2>\n        </div>\n\n        <div id=\"registration-form\" class=\"form\" parsley-validate parsley-bind>\n\n            <!--<label for=\"reg-name-tf\">:</label>-->\n            <input type=\"text\" id=\"reg-name-tf\"\n                   name=\"username\"\n                   class=\"reg-name-tf topcoat-text-input\"\n                   autocorrect=\"off\"\n                   autocapitalize=\"off\"\n                   placeholder=\"Username\"\n                   parsley-trigger=\"change\"\n\n                   parsley-remote=\"";
  if (stack1 = helpers.server) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.server; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                   parsley-minlength=\"4\"\n\n                   required\n                    />\n\n            <!--<label for=\"reg-email-tf\">Email:</label>-->\n            <input type=\"email\" id=\"reg-email-tf\" class=\"email-tf topcoat-text-input\" autocorrect=\"off\"\n                   parsley-type=\"email\" parsley-trigger=\"change\" placeholder=\"Email\"\n                   pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,4}$\"\n                   autocapitalize=\"off\" required/>\n\n\n            <!--<label for=\"reg-pass-tf\">Password:</label>-->\n            <input id=\"reg-pass-tf\" type=\"password\" class=\"password-field pass-tf topcoat-text-input\"\n                   autocorrect=\"off\" parsley-minlength=\"4\" parsley-trigger=\"change\" placeholder=\"Password\"\n                   autocapitalize=\"off\" required/>\n\n            <!--<label for=\"reg-pass-2-tf\">Repeat Password:</label>-->\n            <input id=\"reg-pass-2-tf\" type=\"password\" class=\"password-field pass-tf topcoat-text-input\"\n                   autocorrect=\"off\" parsley-equalto=\"#reg-pass-tf\" parsley-trigger=\"change\"\n                   placeholder=\"Repeat Password\"\n                   autocapitalize=\"off\" required/>\n\n            <!--<div class=\"checkbox-container\">-->\n\n            <!--<label for=\"checkbox-reg-ack-desc\" class=\"light-checkbox checkbox-left\">-->\n            <!--<input type=\"checkbox\" name=\"news\" id=\"checkbox-reg-ack-desc\" checked/>-->\n\n            <!--<div class=\"topcoat-checkbox__checkmark\"/>-->\n            <!--I am happy to be contacted by Bristol Green Doors with a monthly newsletter and promotional-->\n            <!--material.-->\n            <!--</label>  -->\n\n\n            <!--</div>-->\n\n            <div class=\"checkbox-container\">\n                <label for=\"checkbox-reg-ack-research\" class=\"light-checkbox checkbox-left\">\n                    <input name=\"reasearch\" type=\"checkbox\" id=\"checkbox-reg-ack-research\" checked/>\n\n                    <div class=\"topcoat-checkbox__checkmark\"/>\n                    I am happy to be contacted by the University of Bristol for research purposes involving this app.\n                    Financial incentives are available if you participate in follow up research evaluations.\n                </label>\n\n            </div>\n            <div class=\"center\">\n                <button id=\"reg-cancel-button\" class=\"topcoat-button\">Cancel</button>\n                <button id=\"reg-register-button\" class=\" topcoat-button--cta\">Submit</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"topcoat-navigation-bar\">\n    <div class=\"topcoat-navigation-bar__item center full\">\n        <h1 class=\"topcoat-navigation-bar__title\">Houses</h1>\n    </div>\n</div>\n<!--<div class=\"search-bar\">-->\n<!--<input type=\"search\" placeholder=\"search\" class=\"topcoat-search-input search-key\" style=\"width:100%;\">-->\n<!--</div>-->\n<div class=\"topcoat-list__container scroller\" style=\"top:138px;\"></div>";
  });

this["JST"]["map/day_toggle-control"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"days-filter\" class=\"topcoat-button-bar\">\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"1\">Saturday</button>\n    </div>\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"2\">Sunday</button>\n    </div>\n    <div class=\"topcoat-button-bar__item\">\n        <button class=\"days-filter topcoat-button-bar__button\" data-day=\"3\">Both</button>\n    </div>\n</div>";
  });

this["JST"]["measure"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <span class=\"measure-head\" style=\"background-color: "
    + escapeExpression(((stack1 = depth0.color),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\">"
    + escapeExpression(((stack1 = depth0.measure),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <span class=\"measure-head\"></span>\n    ";
  }

function program5(depth0,data) {
  
  
  return "\n            <a class=\"disruption\"><i class=\"fa fa-wrench\"></i></a>\n        ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a class=\"cost\"><i class=\"fa fa-gbp\"></i> "
    + escapeExpression(((stack1 = depth0.cost),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        ";
  return buffer;
  }

  buffer += "<div class=\"measure\">\n    ";
  options = {hash:{
    'compare': (15)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_lteq || depth0.if_lteq),stack1 ? stack1.call(depth0, depth0.measure, options) : helperMissing.call(depth0, "if_lteq", depth0.measure, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    <div class=\"measure-body\">\n        <a class=\"measure-anchor\" data-id=\""
    + escapeExpression(((stack1 = depth0.measure),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        <br>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.loop || depth0.loop),stack1 ? stack1.call(depth0, depth0.disruption, options) : helperMissing.call(depth0, "loop", depth0.disruption, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers['if'].call(depth0, depth0.cost, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>\n\n<hr>\n\n\n";
  return buffer;
  });

this["JST"]["measurePopout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"popout\">\n    <div class=\"topcoat-overlay-bg\"></div>\n    <aside class=\"topcoat-overlay\">\n        <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <!--<a class=\"topcoat-icon-button--quiet close-popout\">-->\n        <!--<i class=\"fa fa-times fa-2x\"></i>-->\n        <!--</a>-->\n\n\n        <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n\n    </aside>\n</div>";
  return buffer;
  });

this["JST"]["menu/about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"about\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <h1>About</h1>\n\n        <p>\n            Frome Open Homes is an eco-homes event that showcases the work that householders have done to retrofit their\n            homes, making them more energy efficient and fit for the future. This app provides an overview of the houses\n            involved in this year’s event (15-16 March) by showing their location and providing information about the\n            installed retrofitting measures. When registered, users are able to save houses to a shortlist, make notes,\n            contact householders, and scan associated QR codes (available at the houses during the weekend of the\n            event). Whilst certain app features are designed to be used during the Frome Open Homes weekend, information\n            provided about the houses and the ability to contact householders will be accessible throughout the year.\n        </p>\n\n        <p>\n            If you use the scanning function to record the QR codes of the measures you are interested in during the\n            Frome Open Homes weekend, a personalised report will be sent to you after the event. This will include more\n            information about the measure itself, the suppliers or contractors used by the household, and additional\n            information about how you can improve your home’s energy efficiency.\n        </p>\n\n        <h2>Research</h2>\n\n        <p>\n            The Digital Green Doors project is a collaboration between Frome Open Homes and the University of Bristol.\n            It is investigating how mobile technology can help people learn about retrofitting and encourage them to\n            reduce their own energy usage. If you would like to take part in the University of Bristol’s research study\n            and have not yet confirmed your interest, please contact Elaine at <a href=\"mailto:Elaine.Massung@bristol.ac.uk\">Elaine.Massung@bristol.ac.uk</a>. Gift\n            vouchers will be available to those who complete the study.\n        </p>\n\n        <h2>Householders</h2>\n\n        <p>We would like to ask all users to respect the privacy of householders. Please be courteous in any emails to\n            householders, and please do not try to contact the householder outside of the app. Also, please note that\n            some houses are only open on Saturday or Sunday, or have set tour times – please be respectful and mindful\n            of this when visiting houses.\n        </p>\n\n\n        <p>\n            <button id=\"login-register-button\" class=\"topcoat-button\" onclick=\"(function(){ require(['js/services/EmailService'],\n        function(emailService){\n                emailService.getSingleton().openEmailComposer('green-doors+research@bristol.ac.uk','Greendoors Research Participation');\n        })})();\">Send Email\n            </button>\n        </p>\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n    </div>\n</div>";
  });

this["JST"]["menu/feedback"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"scroll\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <h1>FEEDBACK</h1>\n\n        <p>Please share any comments, questions or queries you have about the app using the email button below. You can also email us if you are interested in joining the research study.</p>\n\n            <button id=\"login-register-button\" class=\"topcoat-button\" onclick=\"(function(){ require(['js/services/EmailService'],\n        function(emailService){\n                emailService.getSingleton().openEmailComposer('Elaine.Massung@bristol.ac.uk','The app is awesome!');\n        })})();\">Send Email\n            </button>\n        </p>\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n    </div>\n</div>";
  });

this["JST"]["menu/help"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"scroll\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <h1>HELP</h1>\n\n\n        <p>If you run into technical problems while using the app, please submit the following form.</p>\n        <button id=\"login-register-button\" class=\"topcoat-button\" onclick=\"(function(){ require(['js/services/EmailService'],\n        function(emailService){\n                emailService.getSingleton().openEmailComposer('green-doors+help@bristol.ac.uk','Greendoors App Problem');\n        })})();\">Send Email\n        </button>\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n    </div>\n</div>\n";
  });

this["JST"]["menu/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"info\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <button id=\"info-about-button\" class=\" topcoat-button\" onclick=\"window.location.hash='info/menu/about'\">About\n        </button>\n        <!--<button id=\"info-instructions-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/instructions'\">Instructions</button>-->\n        <button id=\"info-cheatsheet-button\" class=\"topcoat-button\"\n                onclick=\"window.location.hash='info/menu/instructions'\">\n            Instructions\n        </button>\n        <button id=\"info-help-button\" class=\" topcoat-button\" onclick=\"window.location.hash='info/help'\">Help</button>\n        <button id=\"info-feedback-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/menu/feedback'\">\n            Feedback\n        </button>\n        <button id=\"info-privacy-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/menu/privacy'\">\n            Privacy\n            Policy\n        </button>\n        <!--<button id=\"info-privacy-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#settings'\"><i-->\n        <!--class= \"fa fa-cogs\"></i> Settings-->\n        <!--</button>        -->\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n\n    </div>\n</div>\n";
  });

this["JST"]["menu/instructions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"instructions\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <table>\n            <tr>\n                <td>\n                    <i class=\"fa fa-home\"></i>\n                </td>\n                <td>\n                    Tap on a house in list or map view to see details about it, and tap on a retrofitting measure to\n                    learn\n                    more about it.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <i class=\"fa fa-qrcode\"></i>\n                </td>\n                <td>\n                    Scan QR codes about features in houses; a personalised report will be produced and emailed to you\n                    about\n                    a week later.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    ALL\n                </td>\n                <td>\n                    See all houses in either list or map view\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <i class=\"fa fa-star\"></i><i class=\"fa fa-star-empty\"></i>\n                </td>\n                <td>\n                    <p>\n                        • To mark a house as a favourite, tap on the star icon in house view; a black star indicates the\n                        house has been added to the Favourites list. Tap on a black star to remove the house from the\n                        list.\n                    </p>\n\n                    <p>\n                        • Tapping the star icon in the lower navigation bar will show your favourite houses.\n                    </p>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    <i class=\"fa fa-remove\"></i>\n                </td>\n                <td>\n                    Remove a house from your favourites list\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    <i class=\"fa fa-filter\"></i>\n                </td>\n                <td>\n                    <p>\n                        Select “Edit Filter” from the upper navigation bar to choose the filter criteria; if you choose\n                        several retrofit measures, it will display houses with at least one of them.\n\n\n                    </p>\n\n                    <p>\n                        Select the filter in the lower navigation bar to view your filtered houses in list or map view.\n                    </p>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    <i class=\"fa fa-location-arrow\"></i>\n                </td>\n                <td>\n                    Switch to map view\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <i class=\"fa fa-list\"></i>\n                </td>\n                <td>\n                    Switch to list view\n\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    <i class=\"fa fa-map-marker\"></i>\n                </td>\n                <td>\n                    Centre map on a particular house\n\n                </td>\n            </tr>\n\n\n            <tr>\n                <td>\n                    <i class=\"fa fa-envelope-alt\"></i>\n                </td>\n\n\n                <td>\n                    Send a contact message to a householder. Your email address will not be revealed to the recipient.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <i class=\"fa fa-file\"></i>\n                    <i class=\"fa fa-file-alt\"></i>\n                </td>\n                <td>\n                    Write a note about a house; a filled note icon indicates a note has been saved – tap to open and\n                    view or\n                    edit. Notes will be added to your personalised report.\n\n                </td>\n            </tr>\n\n\n        </table>\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n    </div>\n</div>";
  });

this["JST"]["menu/menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n            <button class=\"topcoat-button\"\n                    onclick=\"Backbone.history.navigate('register', {replace:true, trigger:true});\">Register\n            </button>\n        ";
  }

  buffer += "<div id=\"menu\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content menu\">\n        <button class=\"topcoat-button\" onclick=\"Backbone.history.navigate('main', true);\">Back to App</button>\n        <!--<button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Routing</button>-->\n        <button id=\"info-about-button\" class=\" topcoat-button\" onclick=\"window.location.hash='info/menu/about'\">About\n        </button>\n        <!--<button id=\"info-instructions-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/instructions'\">Instructions</button>-->\n        <button id=\"info-cheatsheet-button\" class=\"topcoat-button\" onclick=\"window.location.hash='info/menu/help'\">\n            Instructions\n        </button>\n        <button id=\"info-feedback-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/menu/feedback'\">\n            Feedback\n        </button>\n        <button id=\"info-privacy-button\" class=\" topcoat-button\" onclick=\"window.location.hash='#info/menu/privacy'\">\n            Privacy\n            Policy\n        </button>\n        ";
  stack1 = helpers['if'].call(depth0, depth0.guestMode, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <button class=\"topcoat-button\" onclick=\"window.location.hash='#info/menu/settings'\"><i class=\"fa fa-cogs\"></i>Settings\n        </button>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["menu/privacy"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"privacy\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n\n        <h1>PRIVACY POLICY</h1>\n        <p>\n        Thank you for your downloading the Greendoors app.  This page explains how any personal data collected in the process of using this application will be stored and used.\n        </p>\n\n        <h2>Email Address</h2>\n\n        <p>Your email address will be used to provide you with a personalised list of the features you scanned during the Frome Open Homes weekend of 15-16 March.</p>\n\n        <p>If you have opted in to taking part in the University of Bristol research study, we will be in touch about the next stage of the research when it is ready.  This may involve an online survey or an interview, and a financial incentive in the form of gift vouchers will be provided to compensate for your time.  You can opt out at any time, and submission of your email address does not obligate you to participate in the study.  If you have previously opted out but would like to participate, please send us an email.</p>\n\n        <button id=\"login-register-button\" class=\"topcoat-button\" onclick=\"(function(){ require(['js/services/EmailService'],\n        function(emailService){\n                emailService.getSingleton().openEmailComposer('green-doors+optin@bristol.ac.uk','Greendoors Opt In');\n        })})();\">Send Email\n        </button>\n\n        <p>Your email address will only be used for this purpose and will not be passed on to any third parties.</p>\n\n        <h2>What data is collected?</h2>\n\n        <p>The details about the QR codes scanned are held in order to provide you with a personalised report, which will be sent out after the event.  Information about how the app is used, such as which buttons are pressed, are also collected in order to determine which features are most or least popular.</p>\n\n        <h2>How will data be used?</h2>\n\n        <p>Information about user behaviour and frequency of features used will be used to improve the user experience.</p>\n\n        <p>The links provided in the personalised report will be tracked to so that University of Bristol can determine the effectiveness of Frome Open Homes.</p>\n\n        <p>Anonymous data may be written up and published or shared in the academic community.</p>\n\n        <h2>How long will my data be stored?</h2>\n\n        <p>Your email address and the data collected will be stored for the duration of the Digital Green Doors study.</p>\n\n        <h2>Data Protection Legislation</h2>\n\n        <p>The University of Bristol is your data controller. As your data controller, the University has notified its activities to the Office of the Information Commissioner as required under the Data Protection Act 1998 (the \"Act\") and is listed in the Public Register of Data Controllers. Personal information will only be collected and/or processed by the University in accordance with the Act.</p>\n\n        <h2>Disclosure of your information</h2>\n\n        <p>Except as set out in this policy or as required by law, your personal data will not be provided to any third party without your prior written consent.</p>\n\n        <p>The information you provide to us will be held on our computers in the UK. It may be accessed by or given to third parties some of whom may be located outside the European Economic Area who act for us for the purposes set out in this policy or for other purposes approved by you. Those parties process information and may provide support services to the University or on the University's behalf.</p>\n\n        <p>Countries outside the European Economic Area do not always have strong data protection laws. However, we will always take steps to ensure that your information is used by third parties in accordance with this policy.</p>\n\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n    </div>\n</div>\n";
  });

this["JST"]["menu/settings"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n        <!--<p>Current Location: <span id=\"latitude\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.position),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>, <span-->\n        <!--id=\"longitude\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.position),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>-->\n            <!--";
  return buffer;
  }

  buffer += "<div id=\"settings\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content\">\n        <!--<p></p>-->\n        <!--<button id=\"info-networkon-button\" class=\" topcoat-button\">Network On</button>-->\n        <!--<button id=\"info-networkoff-button\" class=\" topcoat-button\">Network Off</button>-->\n\n        <!--<p>Enable access to current location to order map and lists by proximity:-->\n\n        <!--<div class=\"slide-switch-container\">-->\n        <!--<input type=\"checkbox\" name=\"light-switch\" id=\"slideswitch-location\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.checked || depth0.checked),stack1 ? stack1.call(depth0, depth0.location_enabled, options) : helperMissing.call(depth0, "checked", depth0.location_enabled, options)))
    + ">-->\n        <!--<label class=\"light-slide-switch\" for=\"slideswitch-location\">-->\n        <!--<div class=\"on-off\"></div>-->\n        <!--<div class=\"switch\"></div>-->\n        <!--</label>-->\n        <!--</div>-->\n        <!--</p>-->\n\n            <!--";
  stack2 = helpers['if'].call(depth0, depth0.location_enabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "-->\n        <p>Version: ";
  if (stack2 = helpers.version) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.version; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n        <p>You can delete local data, including your registration information, all houses, notes and favourites.\n            Data synced with greendoors.cs.bris.ac.uk will still be available.</p>\n        <button id=\"info-dellogin-button\" class=\" topcoat-button\" onclick=\"javascript:localStorage.clear();\">Delete\n            local data\n        </button>\n\n        <!--<p>Increase or decrease font size</p>-->\n\n        <!--<button id=\"increase-font-size\" class=\"topcoat-button\">+</button>-->\n        <!--<button id=\"decrease-font-size\" class=\"topcoat-button\">-</button>-->\n        <button id=\"info-back-button\" class=\"topcoat-button\" onclick=\"window.history.back()\">Back</button>\n\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["navbar_infoviews"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"topcoat-navigation-bar\">\n    <div class=\"topcoat-navigation-bar__item left quarter\">\n        <a class=\"topcoat-icon-button--quiet\" onclick=\"window.history.back();\">\n            <span class=\"topcoat-icon\"></span>\n        </a>\n    </div>\n    <div class=\"topcoat-navigation-bar__item center half\">\n        <h1 class=\"topcoat-navigation-bar__title\">";
  if (stack1 = helpers.MenuTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MenuTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    </div>\n    <!--<div class=\"topcoat-navigation-bar__item right quarter\">-->\n    <!--<a class=\"topcoat-icon-button--quiet\">-->\n    <!--<span class=\"topcoat-icon topcoat-icon--menu-stack\"></span>-->\n    <!--</a>-->\n    <!--</div>-->\n</div>";
  return buffer;
  });

this["JST"]["note-view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  
  return "Enter note here.";
  }

function program5(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = depth0.text),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  buffer += "<div id=\"note-view\" class=\"text-area-view scroll-wrapper\">\n    <div class=\"scroll-content\" parsley-validate parsley-bind>\n\n        <h1>Note</h1>\n\n        <div class=\"topcoat-overlay-buttons\">\n            <button id=\"note-cancel-button\" role=\"button\" class=\"topcoat-button\">Cancel</button>\n            <button id=\"save-note-button\" role=\"button\" class=\"topcoat-button--cta\"\n                    ";
  stack1 = helpers.unless.call(depth0, depth0.text, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Save\n            </button>\n        </div>\n\n        <textarea id=\"note-text\" rows=\"7\" cols=\"17\"\n                  placeholder=\"";
  stack1 = helpers.unless.call(depth0, depth0.text, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                  parsley-maxlength=\"1000\">";
  stack1 = helpers['if'].call(depth0, depth0.text, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\n\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["note"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "Enter note here.";
  }

function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = depth0.note),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  buffer += "<div class=\"note-dialog\">\n    <div class=\"topcoat-overlay-bg\"></div>\n    <aside class=\"topcoat-overlay\">\n        <h1>Note</h1>\n\n        <div class=\"topcoat-overlay-buttons\">\n            <button role=\"button\" class=\"note-cancel topcoat-button\">Cancel</button>\n            <button role=\"button\" class=\"save-note topcoat-button--cta is-disabled\">Save</button>\n        </div>\n\n        <textarea class=\"note-text topcoat-textarea\" rows=\"7\" cols=\"18\"\n                  placeholder=\"";
  stack1 = helpers.unless.call(depth0, depth0.note, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, depth0.note, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</textarea>\n\n    </aside>\n</div>";
  return buffer;
  });

this["JST"]["offlineAppStart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"waitScreen\">\n    <div class=\"waitMessage\">\n        <h1 class=\"wait-header\">";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n        <p class=\"wait-message\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n\n        <button id=\"start\">Try Again</button>\n\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["popup-message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"popup-message\" class=\"message-bar-container\">\n    <button id=\"message-bar-dismiss-button\"><i class=\"fa fa-remove fa-2x\"></i></button>\n    <div class=\"message\">\n        ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["routes/directions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n                        active\n                        ";
  }

function program3(depth0,data) {
  
  
  return "\n                        inactive\n                        ";
  }

  buffer += "<nav class=\"horizontal-bar-container top\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\" id=\"navbar-back-button\" onclick=\"window.history.back();\">\n            <i class=\"fa fa-chevron-left fa-2x\"></i>\n        </a>\n\n        <a data-mode=\"BICYCLING\" href=\"#\" class=\"equidist-button modeSelect\"><i class=\"fa fa-wheelchair fa-2x\n                        ";
  options = {hash:{
    'compare': (depth0.mode)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, "BICYCLING", options) : helperMissing.call(depth0, "if_eq", "BICYCLING", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        \"></i></a>\n\n        <a data-mode=\"DRIVING\" href=\"#\" class=\"equidist-button modeSelect\"><i class=\"fa  fa-fighter-jet fa-2x\n        ";
  options = {hash:{
    'compare': (depth0.mode)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, "DRIVING", options) : helperMissing.call(depth0, "if_eq", "DRIVING", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        \"></i></a>\n        <a data-mode=\"TRANSIT\" href=\"#\" class=\"equidist-button modeSelect\">\n            <i class=\"fa  fa-twitter fa-2x\n            ";
  options = {hash:{
    'compare': (depth0.mode)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, "TRANSIT", options) : helperMissing.call(depth0, "if_eq", "TRANSIT", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            \"></i></a>\n        <a data-mode=\"WALKING\" href=\"#\" class=\"equidist-button modeSelect\">\n            <i class=\"fa fa-male fa-2x\n            ";
  options = {hash:{
    'compare': (depth0.mode)
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, "WALKING", options) : helperMissing.call(depth0, "if_eq", "WALKING", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            \"></i></a>\n    </div>\n\n    <!--<button class=\"top-foldout-button\"><i class= \"fa fa-reorder\"></i></button>-->\n</nav>\n<div>\n    <div>\n        <span>START</span>\n        <button id=\"start-point\" class=\"topcoat-button\">My Location</button>\n\n    </div>\n    <div>\n        <span>END</span>\n        <button id=\"end-point\" class=\"topcoat-button\">House ";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</button>\n    </div>\n</div>\n\n<div>\n    <button id=\"calculate-directions-button\" class=\"topcoat-button\">Calculate</button>\n</div>\n";
  return buffer;
  });

this["JST"]["routes/routes-list-house-actions-list-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n                        fa-check-square\n                        ";
  }

function program3(depth0,data) {
  
  
  return "\n                        fa-square-o\n                        ";
  }

  buffer += "<!--<a class=\"topcoat-icon-button--quiet showon-map\">-->\n<!--<i class=\"fa fa-map-marker fa-2x\"></i>-->\n<!--</a>-->\n\n<!--<a class=\"home-action-button topcoat-icon-button--quiet route-there\"><i-->\n<!--class=\"fa fa-road fa-2x\"></i></a>-->\n\n\n<a class=\"topcoat-icon-button--quiet toggle-waypoint\">\n    <i class=\"fa fa-2x\n                        ";
  stack1 = helpers['if'].call(depth0, depth0.waypoint, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            waypoint-marker\"></i>\n</a>\n";
  return buffer;
  });

this["JST"]["routes/routes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n                fa-check-square-o\n            ";
  }

function program3(depth0,data) {
  
  
  return "\n                fa-edit\n            ";
  }

  buffer += "<div id=\"routes-main\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content menu\">\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/planning/map'\">Plan on map</button>\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/lists'\">From Lists</button>\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/legs/start'\">Select Start\n            <i class=\"fa\n            ";
  stack1 = helpers['if'].call(depth0, depth0.start, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " route-plan-icon\"></i></button>\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/legs/end'\">Select End\n            <i class=\"fa\n            ";
  stack1 = helpers['if'].call(depth0, depth0.end, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " route-plan-icon\"></i>\n        </button>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["routes/routes_lists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-main\" class=\"scroll-wrapper\">\n    <div class=\"scroll-content menu\">\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/lists/favourites'\">Favourites</button>\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/lists/filtered'\">Filtered</button>\n        <button class=\" topcoat-button\" onclick=\"window.location.hash='#routes/lists/all'\">From All</button>\n    </div>\n</div>\n";
  });

this["JST"]["routes/routes_mapplannig_mapmarker"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n    fa-circle\n";
  }

function program3(depth0,data) {
  
  
  return "\n    fa-circle-o\n";
  }

  buffer += "<div><i class=\"fa\n";
  stack1 = helpers['if'].call(depth0, depth0.selected, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\nfa-2x mapmarker-position\"></i> <span class=\"marker-house-number\">";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>";
  return buffer;
  });

this["JST"]["routes/routes_mapplanning"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-mapplanning\">\n    <div id=\"routemap\"></div>\n    <div id=\"routemap-buttons\" class=\"menu\">\n        <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>\n        <button id=\"route-calculation\" class=\"topcoat-button\">Calculate</button>\n    </div>\n</div>\n\n";
  });

this["JST"]["routes/routes_mapplanning_end"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-mapplanning\" class=\"menu\">\n    <h1>end</h1>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/position/end'\">My Position</button>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/pointonmap/end'\">Point on Map</button>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/search/end'\">Search Address</button>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/roundtrip'\">Same as Start</button>\n    <div id=\"locationMap\"></div>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>\n</div>\n\n";
  });

this["JST"]["routes/routes_mapplanning_position"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-mapplanning\" class=\"menu\">\n\n    <h2>Waiting for position</h2>\n    <i class=\"fa fa-spinner fa-spin\"></i>\n\n    <div id=\"errorMsg\"></div>\n    <!--<button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>-->\n</div>\n\n";
  });

this["JST"]["routes/routes_mapplanning_start"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-mapplanning\" class=\"menu\">\n    <h1>Start</h1>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/position/start'\">My Position</button>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/pointonmap/start'\">Point on Map</button>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes/search/start'\">Search Address</button>\n    <div id=\"locationMap\"></div>\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>\n</div>";
  });

this["JST"]["routes/routes_name_search"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-namesearch\">\n    <!-- place for pointmap -->\n    <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\">\n\n    <div id=\"routemap\"></div>\n    <div id=\"routemap-buttons\" class=\"menu\">\n        <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>\n    </div>\n</div>\n\n";
  });

this["JST"]["routes/routes_point_selection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-pointselection\">\n    <!-- place for pointmap -->\n    <div id=\"routemap-buttons\" class=\"menu\">\n        <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Cancel</button>\n    </div>\n</div>\n\n";
  });

this["JST"]["routes/routes_point_selection_infowindow"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"routes-pointselection-info\">\n    <button class=\"topcoat-button\" onclick=\"window.location.hash='#routes'\">Select</button>\n\n</div>\n\n";
  });

this["JST"]["savedhomes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n            <div class=\"home-header\" data-id=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <img src=\"img/house_"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\" class=\"home-image\"/>\n\n                <div class=\"home-address\">\n                    "
    + escapeExpression(((stack1 = depth0.address),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n                <div class=\"home-actions\">\n                    <a class=\"remove-favourite topcoat-button\">Remove</a>\n                    <a href=\"#note/"
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"topcoat-button\">Note</a>\n                </div>\n            </div>\n        </li>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <p class=\"empty\">No content</p>\n    ";
  }

  stack1 = self.invokePartial(partials.navbar, 'navbar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<input type=\"checkbox\"> Show only saved houses on map\n\n<ul>\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["wait"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"waitScreen\">\n    <div class=\"waitMessage\">\n        <h1 class=\"wait-header\">";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n        <p class=\"wait-message\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n\n        <div class=\"spinner\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["welcome/0_welcome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody\">\n\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">Hello ";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ",</h2>\n\n            <p>Thank you for downloading the Greendoors app. Please take a moment to read through the instructions to\n                take advantage of everything the app has to offer.</p>\n        </div>\n\n\n        <ul class=\"clearfix newMenu\">\n            <li>\n                <div class=\"confirmation cloud-only \">\n                    <p><a id=\"nextView\">Next <i class=\"fa fa-chevron-right\"></i></a></p>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n\n</div>\n<nav class=\"horizontal-bar-container abovebottom\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n";
  return buffer;
  });

this["JST"]["welcome/10_welcome-icons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody final\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage \">\n            <ul class=\"iconList\">\n                <li>\n                    <i class=\"topcoat-icon fa-star fa fa-2x\"></i>\n                    Save to Favourites<sup>1</sup></li>\n                <li><i class=\"topcoat-icon fa-file fa fa-2x\"></i>Take Notes<sup>1</sup></li>\n                <li><i class=\"topcoat-icon fa fa-envelope-o fa-2x\"></i> Contact a Householder<sup>1</sup></li>\n                <li><i class=\"topcoat-icon road-icon fa fa-road fa-2x\"></i>Get Routing Information<sup>2</sup></li>\n                <li><i class=\"topcoat-icon fa fa-map-marker fa-2x\"></i>Centre the map<sup>2</sup></li>\n            </ul>\n        </div>\n\n\n        <ul class=\"clearfix newMenu\">\n            <li>\n                <div class=\"confirmation cloud-only\">\n                    <p>\n                        <!--<input type=\"submit\" name=\"next\" id=\"previousView\" value=\"Previous\" class=\"button\">-->\n                        <a id=\"previousView\"><i class=\"fa fa-chevron-left\"></i> Previous</a>\n                    </p>\n                </div>\n            </li>\n            <li>\n                <div class=\"confirmation cloud-only \">\n                    <p><a id=\"startApp\">Start App <i class=\"fa fa-chevron-right\"></i></a></p>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n</div>\n\n<div class=\"welcomeFootnote\">\n    <p><sup>1</sup> Only available if you have registered Greendoors.</p>\n\n    <p><sup>2</sup> Only available with network connection.</p>\n</div>";
  });

this["JST"]["welcome/1_welcome-top-back"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"welcome\">\n\n    <nav class=\"horizontal-bar-container top\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n            <a class=\"equidist-button\"><i class=\"fa fa-qrcode fa-2x\"></i></a>\n            <a class=\"equidist-button\">Edit Filter</a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-lightbulb-o fa-2x\"></i></a>\n        </div>\n    </nav>\n\n    <nav class=\"horizontal-bar-container undertop\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n\n    <div class=\"welcomeBody\">\n\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">BACK</h2>\n\n            <p>The arrow will take you back to the previous screen.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n\n</div>\n<nav class=\"horizontal-bar-container abovebottom\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>";
  return buffer;
  });

this["JST"]["welcome/2_welcome-top-scan"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"welcome\">\n\n    <nav class=\"horizontal-bar-container top\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n            <a class=\"equidist-button\"><i class=\"fa fa-qrcode fa-2x\"></i></a>\n            <a class=\"equidist-button\">Edit Filter</a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-lightbulb-o fa-2x\"></i></a>\n        </div>\n    </nav>\n\n    <nav class=\"horizontal-bar-container undertop\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n\n    <div class=\"welcomeBody\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">SCAN AND SAVE</h2>\n\n            <p>Use this button to scan the QR codes at participating houses to save information to your personalised\n                report. This is only available if you have registered Greendoors.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n\n</div>\n<nav class=\"horizontal-bar-container abovebottom\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>";
  return buffer;
  });

this["JST"]["welcome/3_welcome-top-filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"welcome\">\n    <nav class=\"horizontal-bar-container top\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n            <a class=\"equidist-button\"><i class=\"fa fa-qrcode fa-2x\"></i></a>\n            <a class=\"equidist-button\">Edit Filter</a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-lightbulb-o fa-2x\"></i></a>\n        </div>\n    </nav>\n\n    <nav class=\"horizontal-bar-container undertop\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n\n    <div class=\"welcomeBody\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">EDIT FILTER</h2>\n\n            <p>Change your filter criteria to find the houses you want to visit.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n\n</div>\n<nav class=\"horizontal-bar-container abovebottom\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>";
  return buffer;
  });

this["JST"]["welcome/4_welcome-top-info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"welcome\">\n\n    <nav class=\"horizontal-bar-container top\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"><i class=\"fa fa-chevron-left fa-2x\"></i></a>\n            <a class=\"equidist-button\"><i class=\"fa fa-qrcode fa-2x\"></i></a>\n            <a class=\"equidist-button\">Edit Filter</a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-lightbulb-o fa-2x\"></i></a>\n        </div>\n    </nav>\n    <nav class=\"horizontal-bar-container undertop\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n        </div>\n    </nav>\n\n    <div class=\"welcomeBody\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">MENU</h2>\n\n            <p>Go to the main menu.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n\n</div>\n<nav class=\"horizontal-bar-container abovebottom\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>";
  return buffer;
  });

this["JST"]["welcome/5_welcome-bottom-all"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">VIEW MODE: ALL</h2>\n\n            <p>View all the properties participating in Frome Open Homes.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <nav class=\"horizontal-bar-container abovebottom\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n    <nav class=\"horizontal-bar-container bottom\">\n        <div class=\"horizontal-bar-buttongroup equidist-buttongroup-container\">\n            <a class=\"equidist-button\"><i>All</i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-filter fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-star fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-location-arrow fa-1x\"></i></a>\n        </div>\n    </nav>\n\n</div>";
  return buffer;
  });

this["JST"]["welcome/6_welcome-bottom-filtered"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody \">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">VIEW MODE: FILTER</h2>\n\n            <p>View only the houses that meet your filter requirements; use EDIT FILTER to make changes.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <nav class=\"horizontal-bar-container abovebottom\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n\n    <nav class=\"horizontal-bar-container bottom\">\n        <div class=\"horizontal-bar-buttongroup equidist-buttongroup-container\">\n            <a class=\"equidist-button\"><i>All</i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-filter fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-star fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-location-arrow fa-1x\"></i></a>\n        </div>\n    </nav>\n\n</div>";
  return buffer;
  });

this["JST"]["welcome/7_welcome-bottom-favs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n\n<div class=\"welcome\">\n\n    <div class=\"welcomeBody \">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">VIEW MODE: SAVED</h2>\n\n\n            <p>View only the houses that you have saved to your shortlist. This is only available if you have registered\n                Greendoors.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <nav class=\"horizontal-bar-container abovebottom\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        </div>\n    </nav>\n    <nav class=\"horizontal-bar-container bottom\">\n        <div class=\"horizontal-bar-buttongroup equidist-buttongroup-container\">\n            <a class=\"equidist-button\"><i>All</i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-filter fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-star fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-location-arrow fa-1x\"></i></a>\n        </div>\n    </nav>\n\n</div>";
  return buffer;
  });

this["JST"]["welcome/8_welcome-bottom-toggle"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody \">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">MAP/LIST VIEW</h2>\n\n            <p>Toggle between the map and list view.</p>\n        </div>\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <nav class=\"horizontal-bar-container abovebottom\">\n        <div class=\"horizontal-bar-buttongroup\">\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-circle\"></i></a>\n        </div>\n    </nav>\n    <nav class=\"horizontal-bar-container bottom\">\n        <div class=\"horizontal-bar-buttongroup equidist-buttongroup-container\">\n            <a class=\"equidist-button\"><i>All</i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-filter fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-star fa-1x\"></i></a>\n            <a class=\"equidist-button\"> <i class=\"fa fa-location-arrow fa-1x\"></i></a>\n        </div>\n    </nav>\n</div>";
  return buffer;
  });

this["JST"]["welcome/9_welcome-house"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<nav class=\"horizontal-bar-container undertop\">\n    <div class=\"horizontal-bar-buttongroup\">\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n        <a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>\n    </div>\n</nav>\n<div class=\"welcome\">\n\n\n    <div class=\"welcomeBody\">\n        <a id=\"finishLater\" class=\"close float-right\"><i class=\"fa fa-2x fa-times\"></i></a>\n\n        <div class=\"welcomeMessage\" id=\"welcomeOverlayMessage\">\n            <h2 id=\"welcomeOverlayHello\">ALMOST DONE</h2>\n\n            <p>Click on a house to see an overview of the measures installed, the level of disruption involved, and the\n                cost. You also have the opportunity to ...</p>\n        </div>\n\n\n        ";
  stack1 = self.invokePartial(partials['welcome/navigation'], 'welcome/navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <!--<nav class=\"horizontal-bar-container abovebottom\">-->\n    <!--<div class=\"horizontal-bar-buttongroup\">-->\n    <!--<a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>-->\n    <!--<a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>-->\n    <!--<a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>-->\n    <!--<a class=\"equidist-button\"> <i class=\"fa fa-circle-o\"></i></a>-->\n    <!--</div>-->\n    <!--</nav>-->\n\n</div>";
  return buffer;
  });

this["JST"]["welcome/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"clearfix newMenu\">\n    <li>\n        <div class=\"confirmation cloud-only\">\n            <p>\n                <!--<input type=\"submit\" name=\"next\" id=\"previousView\" value=\"Previous\" class=\"button\">-->\n                <a id=\"previousView\"><i class=\"fa fa-chevron-left\"></i> Previous</a>\n            </p>\n        </div>\n    </li>\n\n    <li>\n        <div class=\"confirmation cloud-only \">\n            <p><a id=\"nextView\">Next <i class=\"fa fa-chevron-right\"></i></a></p>\n        </div>\n    </li>\n</ul>";
  });

return this["JST"];

});