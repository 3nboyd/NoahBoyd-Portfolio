WebFont.load({
    google: {
        families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic"]
    }
});
!function(o, c) {
    var n = c.documentElement
      , t = " w-mod-";
    n.className += t + "js",
    ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);