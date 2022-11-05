'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
    };

    return <div>I am a search component</div>;
};

export default Search;
