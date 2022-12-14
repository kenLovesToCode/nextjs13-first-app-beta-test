import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <header className="p-5 bg-blue-500">
            <Link href="/" className="px-2 py-1 bg-white text-blue-500">
                Home
            </Link>
            <Link
                href="/todos"
                className="px-2 py-1 ml-2 bg-white text-blue-500"
            >
                Todos
            </Link>
            <Link
                href="/search"
                className="px-2 py-1 ml-2 bg-white text-blue-500"
            >
                Search
            </Link>
        </header>
    );
}

export default Header;
