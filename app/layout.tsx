import './globals.css';
import Header from './Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <title>kltc web</title>
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
