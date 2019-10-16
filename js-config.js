const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let jsExports = {};

// common Configurations
const config = {
	mode: "production",
	output: {
		// ex) /dist/css/common.min.js
		path: __dirname + "/dist/js",
		filename: "[name].min.js"
	},
	devtool: "source-map",
	optimization: {
		// minify ie8
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					ie8: true
				}
			})
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css", ".scss"],
		alias: {
			js: path.resolve(__dirname, "entry/js/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			components: path.resolve(__dirname, "entry/js/components/")
		}
	}
};

// config list by category

// category: aside
jsExports.aside = {
	favorite: Object.assign({}, config, {
		entry: {
			"ui.aside.favorite": "./entry/aside/ui.aside.favorite.js"
		}
	})
};

// category: common
jsExports.common = {
	dropdown_menu: Object.assign({}, config, {
		entry: {
			"ui.common.dropDown.menu": "./entry/common/dropDown/ui.common.dropDown.menu.js"
		}
	})
};

// category: community
jsExports.community = {
	monTV: Object.assign({}, config, {
		entry: {
			"ui.community.monTV.list": "./entry/community/monTV/ui.community.monTV.list.js",
			"ui.community.monTV.movie": "./entry/community/monTV/ui.community.monTV.movie.js"
		}
	}),
	monsters: Object.assign({}, config, {
		entry: {
			"ui.community.monsters": "./entry/community/monsters/ui.community.monsters.js"
		}
	})
};

// category: corp
jsExports.corp = {
	home_bnr: Object.assign({}, config, {
		entry: {
			"ui.corp.home.bnr": "./entry/js/corp/home/ui.corp.home.bnr.js"
		}
	}),
	home_recruitAgency: Object.assign({}, config, {
		entry: {
			"ui.corp.home.recruitAgency": "./entry/js/corp/home/ui.corp.home.recruitAgency.js"
		}
	}),
	report_chart: Object.assign({}, config, {
		entry: {
			"ui.corp.report.chart": "./entry/js/corp/report/ui.corp.report.chart.js"
		}
	}),
	popup_rule: Object.assign({}, config, {
		entry: {
			"ui.corp.popup.rule": "./entry/js/corp/popup/ui.corp.popup.rule.js"
		}
	})
};

// category: event
jsExports.event = {
	studyOpen_2018: Object.assign({}, config, {
		entry: {
			"ui.event.dummy": "./entry/js/event/dummy/ui.event.dummy.js"
		}
	}),
	csat_2019: Object.assign({}, config, {
		entry: {
			"ui.event.2019csat": "./entry/js/event/2019csat/ui.event.2019csat.js",
			"ui.event.2019csat.popup": "./entry/js/event/2019csat/ui.event.2019csat.popup.js"
		}
	}),
	suneung_2019: Object.assign({}, config, {
		entry: {
			"ui.event.2019suneung": "./entry/js/event/2019suneung/ui.event.2019suneung.js",
			"ui.event.2019suneung.popup": "./entry/js/event/2019suneung/ui.event.2019suneung.popup.js"
		}
	}),
	appdown_2019: Object.assign({}, config, {
		entry: {
			"ui.event.dummy": "./entry/js/event/dummy/ui.event.dummy.js"
		}
	}),
	tvc_2019: Object.assign({}, config, {
		entry: {
			"ui.event.dummy": "./entry/js/event/dummy/ui.event.dummy.js"
		}
	}),
	summerFestival_2019: Object.assign({}, config, {
		entry: {
			"ui.event.2019SummerFestival": "./entry/js/pages/event/2019SummerFestival/ui.event.summerFestival.js"
		}
	})
};

// category: member
jsExports.member = {
	certificate: Object.assign({}, config, {
		entry: {
			"ui.member.certificate": "./entry/member/certificate/ui.member.certificate.js"
		}
	})
};

// category: recruit
jsExports.recruit = {
	applicant_mng: Object.assign({}, config, {
		entry: {
			"ui.recruit.applicant.mng": "./entry/js/recruit/applicant/ui.recruit.applicant.mng.js"
		}
	}),
	subMenu_fixed: Object.assign({}, config, {
		entry: {
			"ui.recruit.subMenu.fixed": "./entry/recruit/subMenu/ui.recruit.subMenu.fixed.js"
		}
	}),
	mng: Object.assign({}, config, {
		entry: {
			"ui.recruit.mng.recruitmanager": "./entry/recruit/mng/ui.recruit.mng.recruitmanager.js"
		}
	})
};

// category: resume
jsExports.resume = {
	main: Object.assign({}, config, {
		entry: {
			"ui.resume.main": "./entry/resume/ui.resume.main.js"
		}
	})
};

// category: search
jsExports.search = {
	filter: Object.assign({}, config, {
		entry: {
			"ui.search.filter": "./entry/search/ui.search.filter.js"
		}
	})
};

// category: service
jsExports.service = {
	report_watch: Object.assign({}, config, {
		entry: {
			"ui.service.report.watch": "./entry/service/report/ui.service.report.watch.js"
		}
	})
};

// category: tab
jsExports.tab = {
	native_tab: Object.assign({}, config, {
		entry: {
			"ui.tab.fixed": "./entry/tab/ui.tab.fixed.js"
		}
	})
};

jsExports.test = Object.assign({}, config, {
	entry: {
		"ui.just.test": "./entry/js/pages/test.js"
	}
});

// Return Array of Configurations
module.exports = jsExports;
