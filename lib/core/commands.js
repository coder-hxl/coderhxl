import { program } from 'commander'

import { repos } from '../config/repo-config.js'
import {
  createProjectActive,
  addComponentAction,
  addPiniaAction,
  addPageAndRouteAction,
  addPageAndRouteAction2,
} from './actives.js'

const createCommands = () => {
  program
    .command('repos')
    .description('View the repository where the command clone was created')
    .action(() => console.log(repos))

  program
    .command('create <project>')
    .description(
      'Clone a repository into a folder, 例如: coderhxl create project'
    )
    .action(createProjectActive)

  program
    .command('add-cpn <name>')
    .description(
      'Add component, 例如: coderhxl add-cpn main [-d src/components]'
    )
    .action((name) => {
      addComponentAction(name, program.opts().dest || 'src/components')
    })

  program
    .command('add-pinia <name>')
    .description('Add pinia, 例如: coderhxl add-pinia main [-d src/store]')
    .action((name) => {
      addPiniaAction(name, program.opts().dest || 'src/store')
    })

  program
    .command('add-page <name>')
    .description(
      'Add page and route, 例如: coderhxl add-page main [-d src/views]'
    )
    .action((name) => {
      addPageAndRouteAction(name, program.opts().dest || 'src/views')
    })

  program
    .command('add-page2 <name>')
    .description(
      'In src/views/... default add separate page and route, 例如: coderhxl add-page2 main [-d src/views]'
    )
    .action((name) => {
      addPageAndRouteAction2(name, program.opts().dest || 'src/views')
    })
}

export default createCommands
