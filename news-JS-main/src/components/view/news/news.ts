import './news.css';
import { ItemsList } from '../../../types/index';

class News {
    draw(data: readonly ItemsList[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const itemEL = newsClone.querySelector('.news__item');
            if (itemEL) {
                if (idx % 2) itemEL.classList.add('alt');
            }

            (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const metaAuthEl = newsClone.querySelector('.news__meta-author');
            if (metaAuthEl) metaAuthEl.textContent = item.author || item.source.name;
            const metaDateEl = newsClone.querySelector('.news__meta-date');
            if (metaDateEl) {
                metaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const descTitEl = newsClone.querySelector('.news__description-title');
            if (descTitEl) descTitEl.textContent = item.title;
            const descSourEl = newsClone.querySelector('.news__description-source');
            if (descSourEl) descSourEl.textContent = item.source.name;
            const descContEl = newsClone.querySelector('.news__description-content');
            if (descContEl) descContEl.textContent = item.description;
            const readMoreEl = newsClone.querySelector('.news__read-more a');
            if (readMoreEl) readMoreEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsEl = document.querySelector('.news');
        if (newsEl) newsEl.innerHTML = '';
        if (newsEl) newsEl.appendChild(fragment);
    }
}

export default News;
