
$('#funda,#yambuka,#rongeka,#utano,#kura,#contactForm').submit(function(e) {
    e.preventDefault();
    
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwtFYOvewQHx9rza-DxVmtT5olGNeX7qh3B59U9wgpneFOcm0aa/exec",
        data: $(this).serialize(),
        type: "POST",
        dataType: "xml",
        success: function(data) {
          document.getElementById("funda").reset();
          document.getElementById("yambuka").reset();
          document.getElementById("rongeka").reset();
          document.getElementById("utano").reset();
          document.getElementById("kura").reset();
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
      title: 'Thank you for your application. We will get back to you shortly',
      showConfirmButton: false,
      timer: 4000
  })
  $( "#button" ).prop( "disabled", true );
  $("input").val(" ");
  $( "#button" ).css( {"background-color":"red"},{"border":"0px"});
  }


  function contact(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you for contacting us. We will get back to you shortly',
      showConfirmButton: false,
      timer: 4000
  })
  $( "#button" ).prop( "disabled", true );
  


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
		lblError.innerHTML = "Invalid email address. Application will not submit";
	}
}





// Jquery Dependency

$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
// format number 1000000 to 1,234,567
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
var input_val = input.val();

// don't validate empty input
if (input_val === "") { return; }

// original length
var original_len = input_val.length;

// initial caret position 
var caret_pos = input.prop("selectionStart");
  
// check for decimal
if (input_val.indexOf(".") >= 0) {

  // get position of first decimal
  // this prevents multiple decimals from
  // being entered
  var decimal_pos = input_val.indexOf(".");

  // split number by decimal point
  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

  // add commas to left side of number
  left_side = formatNumber(left_side);

  // validate right side
  right_side = formatNumber(right_side);
  
  // On blur make sure 2 numbers after decimal
  if (blur === "blur") {
    right_side += "00";
  }
  
  // Limit decimal to only 2 digits
  right_side = right_side.substring(0, 2);

  // join number by .
  input_val = "$" + left_side + "." + right_side;

} else {
  // no decimal entered
  // add commas to number
  // remove all non-digits
  input_val = formatNumber(input_val);
  input_val = "$" + input_val;
  
  // final formatting
  if (blur === "blur") {
    input_val += ".00";
  }
}

// send updated string to input
input.val(input_val);

// put caret back in the right position
var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}



$('.input')[0].checkValidity();
