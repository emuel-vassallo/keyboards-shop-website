function addToCart() {
  alert('Product was added to cart.');
}

function isEmail(email) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// TODO: Make this cleaner and more readable.
$(document).ready(function () {
  $('#submit').click(function () {
    let fullName = $('#fullName input').val();
    let emailAddress = $('#emailAddress input').val();
    let contactNumber = $('#contactNumber input').val();
    let comment = $('#comment textarea').val();

    let isFormValid =
      fullName.length > 2 &&
      isEmail(emailAddress) &&
      contactNumber.length >= 8 &&
      comment.length >= 10;

    if (fullName === '') {
      $('#fullName p').text('This is a required field.');
      $('#fullName input').css('border', '1px solid red');
    } else if (fullName.length < 3) {
      $('#fullName p').text('Please enter a valid name.');
      $('#fullName input').css('border', '1px solid red');
    } else {
      $('#fullName p').text('');
      $('#fullName input').css('border', '1px solid #656565');
    }
    if (emailAddress === '') {
      $('#emailAddress p').text('This is a required field.');
      $('#emailAddress input').css('border', '1px solid red');
    } else if (!isEmail(emailAddress)) {
      $('#emailAddress p').text('Please enter a valid email address.');
      $('#emailAddress input').css('border', '1px solid red');
    } else {
      $('#emailAddress p').text('');
      $('#emailAddress input').css('border', '1px solid #656565');
    }
    if (contactNumber === '') {
      $('#contactNumber p').text('This is a required field.');
      $('#contactNumber input').css('border', '1px solid red');
    } else if (contactNumber.length < 8) {
      $('#contactNumber p').text('Please enter a valid contact number.');
      $('#contactNumber input').css('border', '1px solid red');
    } else {
      $('#contactNumber p').text('');
      $('#contactNumber input').css('border', '1px solid #656565');
    }
    if (comment === '') {
      $('#comment p').text('This is a required field.');
      $('#comment textarea').css('border', '1px solid red');
    } else if (comment.length < 10) {
      $('#comment p').text('Please enter at least 10 characters.');
      $('#comment textarea').css('border', '1px solid red');
    } else {
      $('#comment p').text('');
      $('#comment textarea').css('border', '1px solid #656565');
    }

    if (isFormValid) {
      location.href = `mailto:?body=${comment}&to=emuel.vassallo.g52404@mcast.edu.mt`;
    }
  });

  $('.carousel').flickity({
    autoPlay: true,
    contain: true,
    wrapAround: true,
    lazyLoad: true,
  });
});
