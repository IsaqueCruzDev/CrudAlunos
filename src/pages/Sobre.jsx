import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Sobre.css";
import Sobre1 from "../assets/svgsobre.svg";
import Sobre2 from "../assets/svg2sobre.svg";
import Sobre3 from "../assets/svg3sobre.svg";


function Sobre() {
    return ( 
        <>
            <Header />

            <section> 
                <article className= "texto1">
                <div className= "grid">
                    <div>
                        <h1>Qual o objetivo dessa aplicação?</h1>
                    <p>
                        O objetivo principal dessa aplicação é realizar as operações de CRUD
                        (Create, Read, Update e Delete) para o cadastro de a lunos. Com ela,
                        é possível inserir os dados dos alunos, que serão enviados e
                        armazenados no banco de dados MySQL.
                        </p>
                        
                        <p>
                            Além disso, os dados são
                            retornados e exibidos em uma tabela para facilitar a visualização e
                            gerenciamento. Para tornar isso possível, utilizei o Node.js no
                            backend para criar uma API que lida com as funcionalidades do
                            sistema. Essa API permite a interação com o banco de dados,
                            realizando consultas, inserções, atualizações e exclusões de
                            registros.
                        </p>
                    </div>
                    <div>
                        <img src= {Sobre1} />
                    </div>
                </div>
                </article>

                <div className="grid">
                    
                    <div>
                        <img src= {Sobre2} />
                    </div>

                    <div>
                        <h1>O que utilizei?</h1>
                    <p>
                        O frontend da aplicação foi desenvolvido utilizando o
                        React, uma biblioteca JavaScript amplamente utilizada para a criação
                        de interfaces de usuário. Com o React, pude criar uma interface
                        responsiva e amigável para que os usuários possam interagir de forma
                        intuitiva com o sistema de cadastro de alunos.
                    </p>

                    <p>
                        Além disso, para
                        garantir um layout elegante e consistente, utilizei o Bootstrap, um
                        framework CSS que oferece diversos componentes e estilos
                        pré-definidos. Com o Bootstrap, pude criar uma interface moderna e
                        responsiva, facilitando a experiência do usuário em diferentes
                        dispositivos.
                        </p>
                        
                    </div>

                </div>
                
                <div className= "grid">
                    <div>
                        <h1>E sobre o node.js?</h1>
                        <p>
                        Com ele, é possível a criação, leitura, atualização e exclusão de
                        registros de alunos, gerenciar facilmente os
                        dados, armazenando-os em um banco de dados confiável e
                        exibindo-os em uma interface amigável. Espero que você aproveite
                        essa aplicação e que ela seja útil em suas atividades de cadastro de
                        alunos. Se tiver alguma dúvida ou precisar de mais informações,
                        estou à disposição. Atenciosamente, <span>Isaque de Oliveira Cruz.</span>
                    </p> 
                    </div>
                    <div>
                        <img src= {Sobre3} />
                    </div>
                </div>
            </section>

        <Footer />
        </>
     );
}

export default Sobre;