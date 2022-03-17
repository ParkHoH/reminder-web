'use strict';

const mainNews = document.querySelector('#main_news');
const newsItem = mainNews.querySelectorAll('.news_item');

const URL_NEWS = ['https://news.daum.net/digital', 'https://news.daum.net/economic'];
const CORS = 'https://cors-anywhere.herokuapp.com/';

function paintNews(htmlDoc) {
    const ulMainNews = htmlDoc.querySelector('.list_mainnews');
    const newsTitle = ulMainNews.querySelectorAll('.link_txt');
    const newsPublisher = ulMainNews.querySelectorAll('.txt_info');

    newsTitle.forEach((title, idx) => {
        const list_title = newsItem[idx].querySelector('li:first-child');
        list_title.innerText = title.innerText;
    });
    newsPublisher.forEach((publisher, idx) => {
        const list_publisher = newsItem[idx].querySelector('li:last-child');
        list_publisher.innerText = publisher.innerText;
    });
}

URL_NEWS.forEach((url) => {
    fetch(CORS + url, {
    headers: {
        "host": "news.daum.net",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    },
    }).then((response) => response.text())
    .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        paintNews(htmlDoc);
    })
    .catch((e) => console.log('Many Requests'))
})
