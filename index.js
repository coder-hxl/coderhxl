#!/usr/bin/env node
import { program } from 'commander'

import helpOptions from './lib/core/help.js'
import commands from './lib/core/commands.js'

// 查看版本
// program.version(
//   (await import('./package.json', { assert: { type: 'json' } })).default.version
// )

program.version('1.3.9')

// 帮助和可选
helpOptions()

// 创建命令
commands()

program.parse(process.argv)
