'use strict';

const mainNews = document.querySelector('#main_news');

const NEWS_THEME = ['digital', 'economic'];
const CORS = 'https://cors-anywhere.herokuapp.com/https://news.daum.net/';

function paintNews(htmlDoc) {
    const ulMainNews = htmlDoc.querySelector('.list_mainnews');
    const newsTitle = ulMainNews.querySelectorAll('.link_txt');
    const newsPublisher = ulMainNews.querySelectorAll('.txt_info');

    for (let i=0; i<3; i++) {
        const div = document.createElement('div');
        const li_title = document.createElement('li');
        const li_publisher = document.createElement('li');

        div.className = 'news_item';
        li_title.className = 'title';
        li_publisher.className = 'publisher';
        div.appendChild(li_title);
        div.appendChild(li_publisher);
        mainNews.appendChild(div);

        li_title.innerText = newsTitle[i].innerText;
        li_publisher.innerText = newsPublisher[i].innerText;
    }
}

NEWS_THEME.forEach((url) => {
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
    .catch((e) => "뉴스를 보기 위해서 https://cors-anywhere.herokuapp.com/에 접속해서 허용해주세요!")
})
