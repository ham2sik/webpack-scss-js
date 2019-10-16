require("components/ui.component.event");

var $tabItem = $(".tab").find("a");

$(window).on("load", function() {
	ui.util.fixedArea(".tab", { fixedChild: "event_1", fixedSpace: $tabItem.innerHeight() });
});
