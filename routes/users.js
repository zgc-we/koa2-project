const router = require('koa-router')()
const cheerio = require('cheerio');
const charset = require('superagent-charset');
const superagent = charset(require('superagent'));

// router.prefix('/users')

let arr;

router.get('/users', function (ctx, next) {
  url = 'https://www.yesmywine.com/'; //target地址
  superagent.get(url)
    .charset('utf-8')  // 当前页面编码格式
    .buffer(true)
    .end((err, data) => { //页面获取到的数据
      if (err) {
        // return next(err); 
        console.log('页面不存在', err)
      }
      let html = data.text,
        $ = cheerio.load(html, {
          decodeEntities: false,
          ignoreWhitespace: false,
          xmlMode: false,
          lowerCaseTags: false
        }), //用cheerio解析页面数据
        obj = {};
        arr = [];
      // cheerio的使用类似jquery的操作
      $(".goodslist ul").each((index, element) => {
        let $element = $(element);
        // $element.find('#tctitle').next().find('a').addClass('link').attr('class', 'link').text('')
        $element.find('.clearfix').find('li>dl>dd>a').find('.pname').text();
        arr.push({
          'title': $element.find('.pname').text().trim().replace(/\s/g,"").replace(/\\t/g,"").replace(/\\n/g,""),
          'image': `https://www.yesmywine.com/${$element.find('.pname').attr('href')}`,
          'num': $element.find('.price').text().trim().replace(/\s/g,"").replace(/\\t/g,"").replace(/\\n/g,"")
          // 'image': $element.find('#bright img').attr('src'),
          // 'summary': $element.find('#tctitle').next().text(),
          // 'is_cgiia': $element.find('#tctitle font').attr('color') === 'green' ? 1 : 0
        })
      })
    })
    ctx.body = arr
  // console.log(arr)
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
