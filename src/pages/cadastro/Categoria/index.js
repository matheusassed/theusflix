import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialValues)

  function setValue(key, value) {
    // chaves: nome, descricao, cor
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target
    setValue(
      getAttribute('name'),
      value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: { values.nome }</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault() // impede o comportamento default (recarregar a página)
        setCategorias([
          ...categorias,
          values
        ])

        setValues(initialValues)
      }}>

        <FormField
          label='Nome da Categoria'
          value={values.nome}
          onChange={ handleChange }
          name='nome'
          type='text'
        />

        <div>  
          <label>
            Descrição:
            <textarea
              type="text"
              name='descricao'
              value={ values.descricao }
              onChange={ handleChange }
            />
          </label>
        </div>

        <FormField
          label='Cor'
          value={values.cor}
          onChange={ handleChange }
          name='cor'
          type='color'
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        { categorias.map((categoria, indice) => {
          return (
            <li key={ `${categoria} ${indice}` }>
              { categoria.nome }
            </li>
          )
        }) }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria