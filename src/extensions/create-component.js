module.exports = toolbox => {
  const {
    parameters,
    template,
    print: { success }
  } = toolbox

  function optionsToParameters(options) {
    const { s, d, a } = options
    const state = s ? ['state'] : []
    const dispatch = d ? [...state, 'dispatch'] : state
    const actions = a ? [...dispatch, 'actions'] : dispatch
    return `{${actions.toString()}}`
  }

  async function createComponent(name, options) {
    const componentParameters = optionsToParameters(options)
    await template.generate({
      template: 'component.js.ejs',
      target: `src/components/${name}/index.js`,
      props: { name, componentParameters, options }
    })

    await template.generate({
      template: 'styles.js.ejs',
      target: `src/components/${name}/styles.js`,
      props: { name: name }
    })
    success(`Componente ${name} criado`)
  }

  toolbox.createComponent = createComponent
}
