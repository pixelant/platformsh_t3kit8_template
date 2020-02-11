var path = require('path')

async function asyncAwaitTask () {
  // const { version } = fs.readFileSync('../package.json')
  console.log(path.resolve(__dirname))
  console.log(path.resolve('.'))
  // console.log(process.chdir())
  console.log(process.env.INIT_CWD)
  // console.log(process)
  // return Promise.resolve('the value is ignored')
  // await Promise.resolve('some result')
}



// exports.promiseTask = promiseTask

exports.asyncAwaitTask = asyncAwaitTask
