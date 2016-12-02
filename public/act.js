$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById('btn-login').addEventListener('click', function() {
    lock.show(function(err, profile, token) {
      if (err) {
        // Error callback
        console.error("Something went wrong: ", err);
      } else {
        // Success calback

        // Save the JWT token.
        localStorage.setItem('userToken', token);
        // Save the profile
        localStorage.setItem('userProfile', JSON.stringify(profile));
      }
    });
  });
});

var lock = new Auth0Lock('tXdjGoxuPvPM7nWaSIlBqyNBt3LcM1Jr', 'best-apps63.auth0.com');
var getmore = function(){
  console.log("this is cool");
  $( document ).ready(function() {
    console.log( "ready!" );
});
  document.getElementById('btn-login').addEventListener('click', function() {
  lock.show(function(err, profile, token) {
    if (err) {
      // Error callback
      console.error("Something went wrong: ", err);
    } else {
      // Success calback

      // Save the JWT token.
      localStorage.setItem('userToken', token);
      // Save the profile
      localStorage.setItem('userProfile', JSON.stringify(profile));
    }
  });
});
}
