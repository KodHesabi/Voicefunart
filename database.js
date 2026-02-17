
var mysql = require('mysql')

var baglanti = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database: "test",
  
});

baglanti.connect (function(err){
  if(err) throw err; 
  baglanti.query("CREATE TABLE musteriler (name VARCHAR(30), adres VARCHAR(35) ) ", function(err){
    /* if(err) throw err; */
    console.log("Tablo Oluşturuldu")
  })
}) 