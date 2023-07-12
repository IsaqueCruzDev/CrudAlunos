import Header from "../components/Header/Header.jsx";
import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import "./Alunos.css";

class Alunos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nome: "",
      email: "",
      alunos: [],
      modalAberta: false,
    };
  }

  componentDidMount() {
    this.buscarAlunos();
  }

  componentWillUnmount() {}

  buscarAlunos = () => {
    fetch("http://localhost:3000/alunos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ alunos: dados });
      });
  };

  deletarAlunos = (id) => {
    fetch("http://localhost:3000/alunos/" + id, { method: "DELETE" }).then(
      (resposta) => {
        if (resposta.ok) {
          this.buscarAlunos();
        }

      }
    );
  };

  carregarDados = (id) => {
    fetch("http://localhost:3000/alunos/" + id, { method: "GET" })
      .then((resposta) => resposta.json())
      .then((aluno) => {
        this.setState({
          id: aluno.id,
          nome: aluno.nome,
          email: aluno.email,
        });
        this.abrirModal();
      });
  };

  cadastraAluno = (aluno) => {
    fetch("http://localhost:3000/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarAlunos();
      } else {
        alert("Não foi possível adicionar o aluno!");
      }
    });
  };

  atualizarAluno = (aluno) => {
    fetch("http://localhost:3000/alunos/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    }).then((resposta) => {
      if (resposta.ok) {
        this.buscarAlunos();
      } else {
        alert("Não foi possível atualizar o aluno!");
      }
    });
  };

  renderTabela() {
    return (
      <Table striped bordered hover className= "segura">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td> {aluno.nome} </td>
              <td> {aluno.email} </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => this.carregarDados(aluno.id)} className= "botaoAtualizar"
                >
                  Atualizar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => this.deletarAlunos(aluno.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  atualizaEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  submit = () => {
    if (this.state.id == 0) {
      const aluno = {
        nome: this.state.nome,
        email: this.state.email,
      };

      this.cadastraAluno(aluno);
    } else {
      const aluno = {
        id: this.state.id,
        nome: this.state.nome,
        email: this.state.email,
      };

      this.atualizarAluno(aluno);
    }
    this.fecharModal();
  };

  reset = () => {
    this.setState({
      id: 0,
      nome: "",
      email: ""
    }
    );

    this.abrirModal();
  };

  fecharModal = () => {
    this.setState({
      modalAberta: false,
    });
  };

  abrirModal = () => {
    this.setState({
      modalAberta: true
    });
  };

  render() {
    return (
      <>
        <Header />

        <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>DADOS DO ALUNO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do aluno"
                  value={this.state.nome}
                  onChange={this.atualizaNome}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite o e-mail do aluno"
                  value={this.state.email}
                  onChange={this.atualizaEmail}
                />
                <Form.Text className="text-muted">
                  Utilize o melhor e-mail do aluno.
                </Form.Text>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.fecharModal}>
              Fechar
            </Button>
            <Button variant="primary" type="submit" onClick={this.submit}>
                Salvar
              </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="success" type="submit" onClick={this.reset} className= "botao">
                Novo
        </Button>
        {this.renderTabela()}
      </>
    );
  }
}

export default Alunos;
