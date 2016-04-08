var frames = require("ui/frame");
var Observable = require("data/Observable");
var data = require('~/data/partners');
var view = require("ui/core/view");
var ButtonModule = require("ui/button");
var viewModel = new Observable.Observable(data);

//on page loading
exports.pageLoaded = function (args) {
    
    page = args.object;
    page.bindingContext = viewModel;

    var container = view.getViewById(page, "container");
    addCategories(container);
    
};

// on category clicked
function categoryPage(args) {
    var button = args.object;
    var id = button.id;
    var navigationEntry = {
        moduleName: "views/partners/list",
        context: {
            category: id
        }
    };
    frames.topmost().navigate(navigationEntry);
}

function addCategories(container) {

    container.removeChildren();

    //prepare images
    for (var categoryIndex = 0; categoryIndex < data.categories.length; categoryIndex++) {
        var category = data.categories[categoryIndex];
        var image = "~/data/images/categories/" + category.name + ".png";
        var imageStyle = "url('" + image + "')";
        var button = new ButtonModule.Button();
        button.id = category.name;
        button.text = category.title;
        button.cssClass = "btn";
        button.style.backgroundImage = imageStyle;
        button.on(ButtonModule.Button.tapEvent, categoryPage);
        container.addChild(button);
    }
}
