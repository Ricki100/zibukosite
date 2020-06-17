
$('#form').submit(function(e) {
    e.preventDefault();
    
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwQHm8G8ZPmOlbDxVcNPmGILJs_Xg3vnjoCmRYPTQ/exec",
        data: $(this).serialize(),
        type: "POST",
        dataType: "xml",
        success: function(data) {
       
        },
        error: function(xhr, status, error) {
            console.log('Submission failed: ' + error);
        }
    });
  });
  
  function validateForm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thanks for contacting us. We will get back to you shortly',
      showConfirmButton: false,
      timer: 4000
  })
  $( "#button" ).prop( "disabled", true );
  $( "input" ).prop( "disabled", true );
  $( "#button" ).css( {"background-color":"red"},{"border":"0px"});
  }
  

  //emailvalidation//
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}


function ValidateEmail() {
	var email = document.getElementById("email").value;
	var lblError = document.getElementById("lblError");
	lblError.innerHTML = "";
	var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (!expr.test(email)) {
		lblError.innerHTML = "Invalid email address.";
	}
}


$('.amount').each(function () {
  var item = $(this).text();
  var num = Number(item).toLocaleString('en');    

  if (Number(item) < 0) {
      num = num.replace('-','');
      $(this).addClass('negMoney');
  }else{
      $(this).addClass('enMoney');
  }
  
  $(this).text(num);
});