module.exports = client => {
console.log('Bot aktif Frenzy Code!')
  
  var oyun = [
        "Vampir Köylü",
    "v.bilgi"
    ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random]);
        }, 2 * 2500);};