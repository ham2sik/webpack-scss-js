window.ui = window.ui || {};
ui.component = ui.component || {};
ui.component.event = ui.component.event || {};

ui.component.event.tab = function(container, options, callback) {
	if (typeof container !== "string") {
		console.error("container id 또는 class가 존재하질 않습니다.");
		return false;
	}

	if (!(this instanceof ui.component.event.tab)) {
		return new ui.component.event.tab(container, options, callback);
	}

	switch (typeof options) {
		case "undefined":
			options = {};
			callback = function() {};
			break;
		case "function":
			callback = options;
			options = {};
			break;
		case "object":
			callback = callback || function() {};
			break;
		// no default
	}

	var defaults = {
		tab_name_1: "",
		tab_name_2: "",
		speed: 400
	};

	options = $.extend(defaults, options);

	var thisInstance = this,
		$container = $(container),
		$tabItem = $container.find("a");

	thisInstance.event = {
		click: function() {
			$tabItem.on("click", function(event) {
				event.preventDefault();

				var $thisName = $(this).text();
				switch ($thisName) {
					case options.tab_name_1:
						setPosition(1);
						break;
					case options.tab_name_2:
						setPosition(2);
						break;
					// no default
				}
			});

			function setPosition($targetNum) {
				var positionResult = Math.ceil($(".event_" + $targetNum).offset().top - $tabItem.innerHeight());
				$("body, html").animate({ scrollTop: positionResult }, options.speed);
			}
		},

		scrollEvent: function() {
			var $target = $(".event_2").offset().top - $tabItem.innerHeight();
			$(window).on("scroll", function() {
				$(document).scrollTop() >= $target ? setActivateMenu(1) : setActivateMenu(0);
			});

			function setActivateMenu(valueNum) {
				$tabItem
					.eq(valueNum)
					.addClass("active")
					.siblings()
					.removeClass("active");
			}
		}
	};

	thisInstance.init = function() {
		thisInstance.event.click();

		$(window).on("load", function() {
			thisInstance.event.scrollEvent();
		});
	};

	thisInstance.init();
};

module.exports = ui;
