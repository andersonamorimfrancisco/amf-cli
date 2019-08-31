module.exports = {
  name: 'amf',
  description:
    'Assistente para criação de arquivos (frequentemente utilizados) de forma automatizada por linha de comando',
  run: async toolbox => {
    const {
      print: { success, error }
    } = toolbox

    success('Opções disponiveis: ')
    console.log('+ reactjs')
  }
}
