
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
  $( "#button" ).css( {"background-color":"red"},{"border":"0px"});
  }
  