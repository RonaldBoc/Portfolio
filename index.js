const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

$(document).ready(function() {
 
  // The Url from your Authorisations list  
  var instantTokenApiUrl = 'https://ig.instant-tokens.com/users/5e14ca15-94ff-4d25-a573-f0bf78f4204e/instagram/17841400605919626/token.js?userSecret=8svxn8lixx3nfuf2ckvsl'
  
	$.ajax({
		  url: instantTokenApiUrl,
      dataType: 'json'
		})
		 .done(function( response ) {
          
          if (!response.Token) {
            console.log('Error :: ', response);
          } else {
              var feed = new Instafeed({
                         accessToken: response.Token
                        });
              feed.run();
            }
  });
 
});
