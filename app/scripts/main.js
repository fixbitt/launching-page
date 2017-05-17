function loadDoc(e) {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(event) {
    if (this.readyState == 4) {

      alert(this.responseText);

      if ( this.status == 200 ) {
        e.email.value = '';
      }

    }
  };
  // xhttp.open("GET", "http://fixbitt.com/launching-page", true);
  xhttp.open('GET', '/launching-page', true);
  xhttp.send();

  return false;

}

function validateName(name) {

    if ( name.value.length < 3 ) {
      name.focus();
      name.className = 'error';
      return false;
    }
    name.classList.remove('error');
    return true;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( !re.test(email.value) ) {
      email.focus();
      email.className = 'error';
      return false;
    }
    email.classList.remove('error');
    return true;
}

// loadDoc();
