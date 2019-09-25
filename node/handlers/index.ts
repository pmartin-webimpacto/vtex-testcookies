const functionGetCookie = (ctx: Context, name: string) => {
    let pairSplitRegExp = /; */;

    let cookie:any = ctx.cookies.request.headers.cookie

    if(!cookie) return null; 

    let pairs = cookie.split(pairSplitRegExp);

    var obj = []
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf('=');

        if (eq_idx < 0) {
            continue;
        }
        var key = pair.substr(0, eq_idx).trim()
        var val = pair.substr(++eq_idx, pair.length).trim();

        if (key == name) {
            // quoted values
            if ('"' == val[0]) {
                val = val.slice(1, -1);
            }
            obj.push(val)
        }
    } 

    return obj.sort((a,b) => {
       if(b<a) return -1
       else if(b>a) return 1
       else return 0
    })[0]
}


export const getCookie = async (ctx: Context) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    ctx.response.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization")
    ctx.response.set('Cache-Control', 'no-cache')

    ctx.status = 200
    ctx.body = functionGetCookie(ctx, "_ga");
    return;
}


