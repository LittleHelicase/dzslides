(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['style.css'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "html, .view body { background-color: black; counter-reset: slideidx; }\nbody, .view section { background-color: white; border-radius: 12px }\n/* A section is a slide. It's size is 800x600, and this will never change */\nsection, .view head > title {\n    /* The font from Google */\n    font-family: 'Oswald', arial, serif;\n    font-size: "
    + escapeExpression(helpers.x_size.call(depth0, 30, {hash:{},data:data}))
    + "px;\n}\n\n.view section:after {\n  counter-increment: slideidx;\n  content: counter(slideidx, decimal-leading-zero);\n  position: absolute; bottom: -"
    + escapeExpression(helpers.y_size.call(depth0, 80, {hash:{},data:data}))
    + "px; right: "
    + escapeExpression(helpers.x_size.call(depth0, 100, {hash:{},data:data}))
    + "px;\n  color: white;\n}\n\n.view head > title {\n  color: white;\n  text-align: center;\n  margin: 1em 0 1em 0;\n}\n\nh1, h2 {\n  margin-top: "
    + escapeExpression(helpers.y_size.call(depth0, 200, {hash:{},data:data}))
    + "px;\n  text-align: center;\n  font-size: "
    + escapeExpression(helpers.font_size.call(depth0, 80, {hash:{},data:data}))
    + "px;\n}\nh3 {\n  margin: "
    + escapeExpression(helpers.y_size.call(depth0, 100, {hash:{},data:data}))
    + "px 0 "
    + escapeExpression(helpers.y_size.call(depth0, 50, {hash:{},data:data}))
    + "px "
    + escapeExpression(helpers.x_size.call(depth0, 100, {hash:{},data:data}))
    + "px;\n}\n\nul {\n    margin: "
    + escapeExpression(helpers.y_size.call(depth0, 50, {hash:{},data:data}))
    + "px "
    + escapeExpression(helpers.x_size.call(depth0, 200, {hash:{},data:data}))
    + "px;\n}\nli > ul {\n    margin: "
    + escapeExpression(helpers.y_size.call(depth0, 15, {hash:{},data:data}))
    + "px "
    + escapeExpression(helpers.x_size.call(depth0, 50, {hash:{},data:data}))
    + "px;\n}\n\np {\n  margin: "
    + escapeExpression(helpers.x_size.call(depth0, 75, {hash:{},data:data}))
    + "px;\n  font-size: "
    + escapeExpression(helpers.font_size.call(depth0, 50, {hash:{},data:data}))
    + "px;\n}\n\nblockquote {\n  height: 100%;\n  background-color: black;\n  color: white;\n  font-size: "
    + escapeExpression(helpers.font_size.call(depth0, 60, {hash:{},data:data}))
    + "px;\n  padding: "
    + escapeExpression(helpers.x_size.call(depth0, 50, {hash:{},data:data}))
    + "px;\n}\nblockquote:before {\n  content: open-quote;\n}\nblockquote:after {\n  content: close-quote;\n}\n\n/* Figures are displayed full-page, with the caption\n   on top of the image/video */\nfigure {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\nfigure > * {\n  position: absolute;\n}\nfigure > img, figure > video {\n  width: 100%; height: 100%;\n}\nfigcaption {\n  margin: "
    + escapeExpression(helpers.x_size.call(depth0, 70, {hash:{},data:data}))
    + "px;\n  font-size: "
    + escapeExpression(helpers.font_size.call(depth0, 50, {hash:{},data:data}))
    + "px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: ";
  if (stack1 = helpers.footerHeight) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.footerHeight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n  text-align: right;\n  background-color: #F3F4F8;\n  border-top: 1px solid #CCC;\n}\n\n/* Transition effect */\n/* Feel free to change the transition effect for original\n   animations. See here:\n   https://developer.mozilla.org/en/CSS/CSS_transitions\n   How to use CSS3 Transitions: */\nsection {\n  -moz-transition: left 400ms linear 0s;\n  -webkit-transition: left 400ms linear 0s;\n  -ms-transition: left 400ms linear 0s;\n  transition: left 400ms linear 0s;\n}\n.view section {\n  -moz-transition: none;\n  -webkit-transition: none;\n  -ms-transition: none;\n  transition: none;\n}\n\n.view section[aria-selected] {\n  border: "
    + escapeExpression(helpers.x_size.call(depth0, 5, {hash:{},data:data}))
    + "px red solid;\n}\n\n/* Before */\nsection { left: -150%; }\n/* Now */\nsection[aria-selected] { left: 0; }\n/* After */\nsection[aria-selected] ~ section { left: +150%; }\n\n/* Incremental elements */\n\n/* By default, visible */\n.incremental > * { opacity: 1; }\n\n/* The current item */\n.incremental > *[aria-selected] { opacity: 1; }\n\n/* The items to-be-selected */\n.incremental > *[aria-selected] ~ * { opacity: 0; }\n\n/* The progressbar, at the bottom of the slides, show the global\n   progress of the presentation. */\n#progress-bar {\n  height: "
    + escapeExpression(helpers.y_size.call(depth0, 2, {hash:{},data:data}))
    + "px;\n  background: #AAA;\n}";
  return buffer;
  });
})();