import React from "react";
import Image from "./assets/code.jpg";
import "./App.css";

function App() {
    const year = new Date().getFullYear();
    return (
        <>
            <header>
                <h1>Desenvolvimento Web</h1>
            </header>
            <figure>
                <img
                    src={Image}
                    alt="Notebook com trecho de código de programção"
                />
                <figcaption>
                    Notebook com trecho de código de Desenvolvimento Web
                </figcaption>
            </figure>
            <main>
                <section>
                    <h2>Introdução ao React</h2>
                    <p>
                        React é uma biblioteca JavaScript poderosa para criar
                        interfaces de usuário interativas e dinâmicas. Ele
                        permite a construção de componentes reutilizáveis,
                        facilitando o desenvolvimento e a manutenção de projetos
                        modernos.
                    </p>
                </section>

                <section>
                    <h2>O Papel do Vite</h2>
                    <p>
                        Vite é um bundler rápido e eficiente que acelera o
                        processo de desenvolvimento. Com inicialização
                        instantânea e hot module replacement (HMR), Vite é ideal
                        para projetos em React.
                    </p>
                </section>

                <section>
                    <h2>Por que Usar React com Vite?</h2>
                    <p>
                        Juntos, React e Vite oferecem uma experiência de
                        desenvolvimento ágil e simplificada. A combinação
                        garante melhor desempenho em desenvolvimento e builds
                        otimizados para produção.
                    </p>
                </section>
            </main>
            <footer>
                <p>{year} Front-end com React e Vite</p>
            </footer>
        </>
    );
}
export default App;
