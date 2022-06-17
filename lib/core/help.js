const program = require('commander')

function helpOptions() {
  // 添加options
  program.option(
    '-d --dest <dest>',
    'choice you dest, 例如: -d /src/components'
  )

  program.on('--help', () => {
    console.log('')
    console.log('explication:')
    console.log('  github: https://github.com/coder-hxl/coderhxl')
  })
}

module.exports = helpOptions
