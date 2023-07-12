import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Home.css";
import Isaque from "../assets/isaqueproa.jpg";

function Home() {
  return (
    <>
      <Header />
      <section>
        <div className= "segura">
          <div className= "grid">
            <div>
          <h1>Olá, tudo bem?</h1>
              <p>
              Olá. Eu Isaque de Oliveira Cruz. <span>Seja muito bem-vindo</span> ao meu projeto de
              cadastro de alunos! Sou um desenvolvedor <span>full stack</span>, tenho 18 anos, moro em São Paulo capital e estou aqui
              para lhe fornecer todas as informações sobre essa incrível
              aplicação. Este projeto foi construído utilizando tecnologias
              modernas como <span>React</span>, <span>MySQL</span>, <span>Bootstrap</span> e <span>Node.js</span>, garantindo uma
              experiência de desenvolvimento eficiente e uma aplicação robusta. Para maiores detalhes, acesse a página <span>sobre</span>, lá eu te conto um pouco mais ;)
              </p>
            </div>

            <div>
              <div className= "fotoIsaque">
                <img src={Isaque} alt="isaque de oliveira cruz" />
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
