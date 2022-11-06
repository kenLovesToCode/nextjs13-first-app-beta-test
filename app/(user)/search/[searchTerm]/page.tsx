import React from 'react';

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResponse = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );
    const data: SearchResponse = await res.json();
    return data;
};

const SearchResult = async ({ params: { searchTerm } }: PageProps) => {
    const searchResponse = await search(searchTerm);
    return (
        <div>
            <p className="text-gray-500 text-sm">
                You search for: {searchTerm}
            </p>
            <ol className="space-y-5 p-5">
                {searchResponse.organic_results.map((result) => (
                    <li key={result.position} className="list-decimal">
                        <p className="font-bold">{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default SearchResult;
