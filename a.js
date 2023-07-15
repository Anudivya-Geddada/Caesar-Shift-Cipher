function c_ciph(){
  var f = document.getElementById("key").value;
  var x = document.getElementById("myTextArea").value;
  var key1 = Number(f)
  console.log(key1);
  var result='';
  for (var i = 0, len = x.length; i < len; i++) {
    if (x[i] == x[i].toUpperCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 65 + key1) % 26) + 97);
      result = result + String.fromCharCode(e).toUpperCase();
    }
    else if (x[i] == x[i].toLowerCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 97 + key1) % 26) + 97);
      result = result + String.fromCharCode(e);
    }
    else {
      result = result + x[i];
    }
  }
  document.getElementById('result').value = result ;
}