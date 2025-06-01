import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import BookCard from "../components/BookCard/BookCard";

const PrincipalUsuario = (props) => {
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
                {(props.livros).map(livro => <BookCard
                key={livro.id}
                nome={livro.nome}
                preco={"R$ "+ livro.preco}
                foto={livro.foto}
                />)}
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
