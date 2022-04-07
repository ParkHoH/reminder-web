'use strict';

const mainNews = document.querySelector('#main_news');
const techNews = mainNews.querySelector('.tech_news');
const economicNews = mainNews.querySelector('.economic_news');
const errorNews = mainNews.querySelector('.error_news');

const NEWS_THEME = ['digital', 'economic'];
const CORS = 'https://cors-anywhere.herokuapp.com/https://news.daum.net/';

function paintNews(htmlDoc, idx) {
    const ulMainNews = htmlDoc.querySelector('.list_mainnews');
    const newsTitle = ulMainNews.querySelectorAll('.link_txt');
    const newsPublisher = ulMainNews.querySelectorAll('.txt_info');

    for (let i=0; i<3; i++) {
        const div = document.createElement('div');
        div.className = 'news_item';
        if(NEWS_THEME[idx] === 'economic') {
            economicNews.appendChild(div);
        } else {
            techNews.appendChild(div);
        }

        div.innerText = `- [${newsPublisher[i].innerText}] ${newsTitle[i].innerText}`;
    }
}

NEWS_THEME.forEach((url, idx) => {
    fetch(CORS + url, {
    headers: {
        "host": "news.daum.net",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
    },
    }).then((response) => response.text())
    .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        paintNews(htmlDoc, idx);
    })
    .catch((e) => {
        techNews.classList.add(HIDDEN_CLASSNAME);
        economicNews.classList.add(HIDDEN_CLASSNAME);
        errorNews.innerText = "Click here to permit 'Request temporay aceess'";
    })
})
