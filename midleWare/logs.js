function logs(ctx, type) {
    console.log(`-------------${type}-------------------`, ctx.name);
    console.log(`-------------${type}-------------------`, ctx._time);
}

module.exports=function(){
    return async function(ctx, next) {
        const start = new Date().getTime();
        let _ctx = {...ctx, name: 'lisi', _time: start} 
        logs(_ctx, 'start');
        await next(); 
        const end = new Date().getTime();
        logs({..._ctx, _time: end}, 'end');
    }
}