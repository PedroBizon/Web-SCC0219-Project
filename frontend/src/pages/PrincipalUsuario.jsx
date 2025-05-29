import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import BookCard from "../components/BookCard/BookCard";

function PrincipalUsuario() {
    return (
        <>
            <Navbar />
            <SearchBar />

            <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',  
                gap: '50px',
                columnGap: '0%',                            
                maxWidth: '1000px',                     
                margin: '40px auto',
                padding: '10px'
            }}>
                <BookCard title="Título 1" />
                <BookCard title="Título 2" />
                <BookCard title="Título 3" />
                <BookCard title="Título 4" />
                <BookCard title="Título 5" />
                <BookCard title="Título 6" />
                <BookCard title="Título 7" />
                <BookCard title="Título 8" />
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px !important;
                        max-width: 90% !important;
                    }

                    .grid-container > * {
                        width: 100% !important;
                    }
                }
            `}</style>

            <Footer />
        </>
    );
}

export default PrincipalUsuario;
