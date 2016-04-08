var frames = require("ui/frame");
var view = require("ui/core/view");
var Observable = require("data/Observable");
var data = require('~/data/news');
var page;
var viewModel;
var container;
var listViewModule = require("ui/list-view");

// on category clicked
exports.newsPage = function(args) {

    var newsItemIndex = args.index;
    var newsItem = container.items[newsItemIndex];

    var navigationEntry = {
        moduleName: "views/item/item",
        context: {
            id: newsItem.id,
            subTitle: newsItem.title,
            date: newsItem.date,
            title: "الأخبار",
            content: "~/data/news/" + newsItem.file + ".html"
        }
    };

    frames.topmost().navigate(navigationEntry);
};

//on navigation to page
exports.pageNavigatedTo = function (args) {

    page = args.object;
    viewModel = new Observable.Observable(data);
    page.bindingContext = viewModel;

    container = view.getViewById(page, 'container');

};