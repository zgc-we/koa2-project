const router = require('koa-router')()
// router.prefix('/koa'); // 默认加上前缀

let _prodcutionList = require('../public/data/index-list.json');
let _titleList = require('../public/data/titleList.json')

router.get('/', async (ctx, next) => {
  ctx.cookies.set('name', "zhangsan"); // 创建 cookie 
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => { // 字符串类型
  let _name = ctx.cookies.get("name"); // 读取cookies
  ctx.body = `koa2 string。 这是cookie引入${_name}`
})

router.get("/login", async(ctx, next) => {
  ctx.cookies.set("token", '123456');
  ctx.body={}
})

router.get('/userinfo', async (ctx, next) => { // json类型
  let _token = ctx.cookies.get('token');
  ctx.body = {
    title: 'koa2 json , wo zi ji xie de shu ju ',
    age: '18',
    name: '张三',
    imgurl: 'http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
  }
})

router.get('/prodcutionList', async (ctx, next) => {
  ctx.body = {
    code: '0',
    data: _prodcutionList,
  };
})

router.get('/titleList', async (ctx, next) => {
  ctx.body = {
    code: '0',
    data: _titleList,
  };
})

router.post('/user/login', async (ctx, next) => {
  ctx.body = {
    code: '0',
    data: [{
      avatar: "http://blog.sosout.com/images/common/default.png",
      email: "1107743896@qq.com",
      id: 1,
      name: "GongXiaoZhu",
      user_name: "123456"
    }],
  };
})

router.get('/user/getUser', async (ctx, next) => {
  var requset_url = ctx.path.query;
  console.log(requset_url, '-------urlurlurlurlurlurlurlurl----')
  //将字符串格式参数转化为对象使用
  // var strurl  = url.parse(requset_url,true).query;
  // console.log(strurl, '----------str------')
  ctx.body = {
    code: '0',
    data: [{
      avatar: "http://blog.sosout.com/images/common/default.png",
      email: "1107743896@qq.com",
      id: 1,
      name: "GongXiaoZhu",
      user_name: "123456"
    }],
  };
})

module.exports = router
