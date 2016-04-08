var frames = require("ui/frame");
var Observable = require("data/Observable");
var view = require("ui/core/view");
var viewModelData = {
    id: null,
    title: null,
    content: null
};
var viewModel = new Observable.Observable(viewModelData);
var page;

//on page loading
exports.pageLoaded = function (args) {
    page = args.object;
};

//on navigation to page
exports.pageNavigatedTo = function (args) {

    page = args.object;
    var container = view.getViewById(page, "web-view-source");
    var id = page.navigationContext.id;
    var title = page.navigationContext.title;
    var subTitle = page.navigationContext.subTitle || false;
    var date = page.navigationContext.date || false;
    var content = page.navigationContext.content || "~/data/" + id + ".html";

    //add view model
    viewModel.id = id;
    viewModel.title = title;
    viewModel.content = content;
    viewModel.subTitle = subTitle;
    viewModel.date = date;

    //at the end
    page.bindingContext = viewModel;

};
