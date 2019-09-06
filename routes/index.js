const router = require('koa-router')()

router.prefix('/koa'); // 默认加上前缀

router.get('/', async (ctx, next) => {
  ctx.cookies.set('name', "zhangsan"); // 创建 cookie 
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => { // 字符串类型
  let _cookies = ctx.cookies.get("name"); // 读取cookies
  ctx.body = `koa2 string。 这是cookie引入${_cookies}`
})

router.get('/json', async (ctx, next) => { // json类型
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
