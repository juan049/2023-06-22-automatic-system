import { NextAuthProvider } from "./providers/sessionProvider";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>Automatic System</title>
            </head>
            <body>
                <NextAuthProvider>{children}</NextAuthProvider>
            </body>
        </html>
    );
}
