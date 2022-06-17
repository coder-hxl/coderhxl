const program = require('commander')

function helpOptions() {
  // 添加options
  program.option('-c --coderhxl', 'a coderhxl cli')
  program.option(
    '-d --dest <dest>',
    'choice you dest, 例如: -d /src/components'
  )

  program.on('--help', () => {
    console.log('')
    console.log('explication:')
    console.log('  coderhxl~')
  })
}

module.exports = helpOptions
