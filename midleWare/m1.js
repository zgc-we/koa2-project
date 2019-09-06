function m1(ctx) {
    global.console.log('pv', ctx.m1);
}

module.exports=function() {
    return async function(ctx, next){
        global.console.log("-------------start-----------")
        let _ctx = {...ctx, m1: '这是m1'}
        m1(_ctx);
        await next();
        global.console.log("--------------end----------")
    }
}