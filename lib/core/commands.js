const program = require('commander')

const {
  createProjectActive,
  addComponentAction,
  addPageAndRouteAction,
  addPageAndRouteAction2,
} = require('./actives')

const createCommands = () => {
  program
    .command('create <project>')
    .description(
      'clone a repository into a folder, 例如: coderhxl create project'
    )
    .action(createProjectActive)

  program
    .command('add-cpn <name>')
    .description(
      'add component, 例如: coderhxl add-cpn Home [-d src/components]'
    )
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })

  program
    .command('add-page <name>')
    .description(
      'add page and route, 例如: coderhxl add-page Home [-d src/pages]'
    )
    .action((name) => {
      addPageAndRouteAction(name, program.opts().dest || 'src/pages')
    })

  program
    .command('add-page2 <name>')
    .description(
      'in src/views/... default add separate page and route, 例如: coderhxl add-page2 Home [-d src/views]'
    )
    .action((name) => {
      addPageAndRouteAction2(name, program.opts().dest || 'src/views')
    })
}

module.exports = createCommands
