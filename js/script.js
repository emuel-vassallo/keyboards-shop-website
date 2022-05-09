function addToCart() {
  alert('Product was added to cart.');
}

$(document).ready(function () {
  $('#submit').click(function () {
    let fullName = $('#fullName').val();
    let emailAddress = $('#emailAddress').val();
    let contactNumber = $('#contactNumber').val();
    let comment = $('#comment').val();
    $('#returnmessage').empty();
    if (
      fullName == '' ||
      emailAddress == '' ||
      contactNumber == '' ||
      comment == ''
    ) {
      alert('Please Fill Required Fields');
    } else {
      location.href = 'mailto:emuel.vassallo.g52404@mcast.edu.mt';
    }
  });
  $('.carousel').flickity({
    autoPlay: true,
    contain: true,
    wrapAround: true,
    lazyLoad: true,
  });
});
