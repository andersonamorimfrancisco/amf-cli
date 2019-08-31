module.exports = {
  name: 'reactjs',
  description: 'Comandos relacionados a criação de componentes ReactJS',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
      print: { success, error }
    } = toolbox

    const { first, second, options } = parameters

    if (!first) {
      error('Nenhuma opção selecionada')
      success('Opções disponiveis: ')
      console.log('+ create-component (nomeDoComponente) [--s --d --a]')
      return
    }

    if (first === 'create-component') {
      if (!second) {
        error('Nome do componente não informado')
        return
      }
      await createComponent(second, options)

      return
    }

    error('Comando não reconhecido')
  }
}
