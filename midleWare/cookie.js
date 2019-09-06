function cookie(ctx) {
    if (ctx.url === '/login') {
        ctx.cookies.set('token', '123456', {
            domain: 'localhost',
            path: '/login',   //cookie写入的路径
            maxAge: 1000 * 60 * 60 * 1,
            expires: new Date('2018-07-06'),
            httpOnly: false,
            overwrite: false
        }
        );
        ctx.body = 'cookies is seted;'
    } else {
        console.log(ctx.cookies.get('token'))
        if (ctx.cookies.get('token')) {
            ctx.body = 'welcome ' + ctx.cookies.get('username');
        } else {
            ctx.body = 'hello koa2'
        }
    }
}

module.exports = function () {
    return async function (ctx, next) {
        cookie(ctx);
        await next();
    }
}