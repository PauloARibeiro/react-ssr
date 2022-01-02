import chalk from 'chalk';
import path from 'path'
import { spawn } from 'child_process';

const colors = {
  error: chalk.hex('#C30F16'),
  success: chalk.hex('#0dbc79'),
  blue: chalk.hex('#11a8cd'),
  darkBlue: chalk.hex('#3b8eea'),
  lightGray: chalk.hex('#787878')
}

const strings = {
  dev: {
    start() {
      console.clear()
      console.log(`${chalk.bold(colors.success('Starting Server...'))}`)
      console.log('')
    },
    changes() {
      console.log(`[${colors.blue('web server')}] Restarting...`)
    },
    error(message) {
      console.log(`[${colors.darkBlue('dev server')}] ${colors.error(message)}`)
    },
    listen(port) {
      console.log(`[${colors.blue('web server')}] Port: ${chalk.bold(colors.success(`http://localhost:${port}`))}`)
      console.log(`[${colors.darkBlue('dev server')}] Looking good. Watching for file changes...`)
    }
  }
}

function webServerInit() {
  const __dirname = path.resolve(path.dirname(''));

  return spawn(
    'node',
    [path.join(__dirname, 'dist/index.js')],
    {
      stdio: 'inherit',
    }
  )
}

export {
  colors,
  strings,
  webServerInit
}
