var frames = require("ui/frame");

exports.aboutPage = function () {
    var navigationEntry = {
        moduleName: "views/item/item",
        context: {
            id: "about",
            title: "نبذة عن بطاقة الخصم"
        }
    };
    frames.topmost().navigate(navigationEntry);
};

exports.contactPage = function () {
    var navigationEntry = {
        moduleName: "views/item/item",
        context: {
            id: "contact",
            title: "تواصل معنا"
        }
    };
    frames.topmost().navigate(navigationEntry);
};

exports.newsPage = function () {
    frames.topmost().navigate("views/news/list");
};

exports.partnersPage = function () {
    frames.topmost().navigate("views/partners/categories");
};