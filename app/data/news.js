var news = [
    {
        id: "news2",
        title: "افتتاح بطاقة الخصم لحماة الوطن",
        date: "2016-04-08",
        file: "news1"
    },
    {
        id: "news1",
        title: "تطبيق بطاقة خصم حماة الوطن",
        date: "2016-04-07",
        file: "news1"
    }
];

var newsIndex = {};

for (var i = 0; i < news.length; i++) {
    newsIndex[news[i].id] = i;
}

function findNews(newsId) {
    return news[newsIndex[newsId]];
}

exports.news = news;
exports.findNews = findNews;
