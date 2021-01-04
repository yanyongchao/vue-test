const Koa = require('koa')
const app = new Koa()
const path = require('path')

// 静态资源
app.use(require('koa-static')(path.join(__dirname, 'dist')))

app.listen(3001, () => {
  console.log('build success')
})
