export interface ItemsList {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    source: {
        id: string;
        name: string;
    };
}

export interface ArticlesList {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface SourcesList {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

//в методы draw должны улететь массивы с итемами
//в sources.ts прилетает массив из итемов сурсов, а в news.ts прилетает массив из итемов артиклей
