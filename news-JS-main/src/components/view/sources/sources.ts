import './sources.css';
import { SourcesList } from '../../../types/index';

class Sources {
    draw(data: readonly SourcesList[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const source_itemName = sourceClone.querySelector('.source__item-name');
            if (source_itemName) source_itemName.textContent = item.name;
            const source_item = sourceClone.querySelector('.source__item');
            if (source_item) source_item.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        if (sources) sources.append(fragment);
    }
}

export default Sources;
