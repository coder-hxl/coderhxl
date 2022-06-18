const program = require('commander')

function helpOptions() {
  // 添加options
  program.option(
    '-d --dest <dest>',
    'choice you dest, 例如: -d src/components'
  )

  program.on('--help', () => {
    console.log('')
    console.log('Supplement:')
    console.log('  github: https://github.com/coder-hxl/coderhxl')
    console.log('  gitee: https://github.com/coder-hxl/coderhxl')
  })
}

module.exports = helpOptions
