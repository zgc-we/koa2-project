function m2(ctx) {
    global.console.log('m2', ctx.m2);
}

module.exports=function() {
    return async function(ctx, next){
        global.console.log("-------------start-----------")
        let _ctx = {...ctx, m2: '这是m2'}
        m2(_ctx);
        await next();
        global.console.log("--------------end----------")
    }
}