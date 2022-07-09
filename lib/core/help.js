import { program } from 'commander'

function helpOptions() {
  // 添加options
  program.option('-d --dest <dest>', 'choice you dest, 例如: -d src/components')

  program.on('--help', () => {
    console.log('')
    console.log('Supplement:')
    console.log(
      '  If you have any questions, please mention Issues in https://github.com/coder-hxl/coderhxl.'
    )
  })
}

export default helpOptions
