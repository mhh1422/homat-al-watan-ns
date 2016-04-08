var frames = require("ui/frame");
var Observable = require("data/Observable");
var data = require('~/data/partners');
var view = require("ui/core/view");
var ButtonModule = require("ui/button");
var viewModelData = {
    category: null,
    title: null,
    partners: []
};
var viewModel = new Observable.Observable(viewModelData);
var page;

// on category clicked
function partnerPage(args) {
    var button = args.object;
    var id = button.id;
    var navigationEntry = {
        moduleName: "views/item/item",
        context: {
            id: id,
            title: "الشركاء",
            subTitle: data.findPartner(id).title,
            content: "~/data/partners/" + id + ".html"
        }
    };
    frames.topmost().navigate(navigationEntry);
}

function addPartners(container, category) {

    //remove items
    container.removeChildren();

    //prepare add items
    var partners = data.findPartners(category.partners);
    for (var partnerId in partners) {
        var partner = partners[partnerId];
        var button = new ButtonModule.Button();
        button.id = partner.name;
        button.text = partner.title;
        button.cssClass = "btn";
        button.on(ButtonModule.Button.tapEvent, partnerPage);
        container.addChild(button);
    }
    viewModelData.partners = partners;
    viewModel.partners = partners;

}

//on page loading
exports.pageLoaded = function (args) {
    page = args.object;
};

//on navigation to page
exports.pageNavigatedTo = function (args) {

    page = args.object;
    var container = view.getViewById(page, "container");
    var category = data.findCategory(page.navigationContext.category);

    //add view model
    viewModel.category = category.name;
    viewModel.title = category.title;

    //load partners in the category
    addPartners(container, category);

    //at the end
    page.bindingContext = viewModel;
};
