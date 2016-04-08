var categories = [
    {
        title: "المطاعم",
        name: "restaurants",
        partners: [
            'Hatam',
            'Du',
            'Etisalat'
        ],
        description: "Put some description here. <b>HTML</b> is allowed"
    },
    {
        title: "الفنادق",
        name: "hotels",
        partners: [
            'Ramada',
            'Du',
            'Etisalat'
        ],
        description: "Put some description here. <b>HTML</b> is allowed"
    },
    {
        title: "الإلكترونيات",
        name: "electronics",
        partners: [
            'Du',
            'Etisalat'
        ],
        description: "Put some description here. <b>HTML</b> is allowed"
    },
    {
        title: "السياحة",
        name: "tourism",
        partners: [
            'GoldenCoast'
        ],
        description: "Put some description here. <b>HTML</b> is allowed"
    }
];

var partners = [
    {
        name: 'Hatam',
        title: 'مطعم حاتم',
        categories: [
            'restaurants'
        ]
    },
    {
        name: 'Du',
        title: 'شركة دو للاتصالات',
        categories: [
            'electronics'
        ]
    },
    {
        name: 'Etisalat',
        title: 'شركة اتصالات',
        categories: [
            'electronics'
        ]
    },
    {
        name: 'Ramada',
        title: 'فندق رمادا',
        categories: [
            'hotels'
        ]
    },
    {
        name: 'GoldenCoast',
        title: 'الساحل الذهبي للسياحة والسفر',
        categories: [
            'tourism'
        ]
    }
];

var categoriesIndex = {};
var partnersIndex = {};

for (var i = 0; i < categories.length; i++) {
    categoriesIndex[categories[i].name] = i;
}

for (var i = 0; i < partners.length; i++) {
    partnersIndex[partners[i].name] = i;
}

function findCategory(categoryName) {
    return categories[categoriesIndex[categoryName]];
}

function findPartner(partnerName) {
    return partners[partnersIndex[partnerName]];
}

function categoriesIndexed() {
    var result = {};
    for (var i = 0; i < categories.length; i++) {
        result[categories[i].name] = categories[i];
    }
    return result;
}

function partnersIndexed() {
    var result = {};
    for (var i = 0; i < partners.length; i++) {
        result[partners[i].name] = partners[i];
    }
    return result;
}

function findPartners(partners) {
    var result = [];
    for (var partnerIndex in partners) {
        result.push(findPartner(partners[partnerIndex]));
    }
    return result;
}

exports.categories = categories;

exports.partners = partners;

exports.findCategory = findCategory;

exports.findPartner = findPartner;

exports.categoriesIndexed = categoriesIndexed;

exports.partnersIndexed = partnersIndexed;

exports.findPartners = findPartners;