/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#00FF9D',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    // chaves: nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('Funcionouuuu');
    const URL_CATEGORIAS = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categoria'
      : 'http://theusflix.herokuapp.com/categoria';
    fetch(URL_CATEGORIAS)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, [
    values.nome,
  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        &nbsp;
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault(); // impede o comportamento default (recarregar a página)
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          name="cor"
          type="color"
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>
        { categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            { categoria.nome }
          </li>
        )) }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
