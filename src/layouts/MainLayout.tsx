import Navbar from '../components/Navbar'
export default function MainLayout({children}) {
    return (
        <>
            <main>
                <Navbar />
                {children}
                <footer>Footer Test</footer>
            </main>
        </>
    );
}
