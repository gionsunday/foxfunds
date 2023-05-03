
function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    var string_length = 8
    var randomstring = ""

    for (let i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length)
        randomstring += chars.substring(rnum,rnum+1) 

        console.log(randomstring)
        
    }
}