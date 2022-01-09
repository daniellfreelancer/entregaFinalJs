
// Validacion de email


fetch("https://zerobounce1.p.rapidapi.com/v2/validate?ip_address=replace_the_IP_address_the_email_signed_up_from&email=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "zerobounce1.p.rapidapi.com",
		"x-rapidapi-key": "94ce4439a8msh5afdb9cf4a0edadp14c897jsn5e09435da097"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


