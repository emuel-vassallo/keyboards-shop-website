function addToCart() {
  alert('Product was added to cart.');
}

function isEmail(email) {
  // https://melvingeorge.me/blog/check-if-string-is-valid-email-address-javascript
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// TODO: Make this cleaner and more readable.
$(document).ready(function () {
  const fullNameInputField = $('#fullName input');
  const fullNameErrorField = $('#fullName p');

  const emailAddressInputField = $('#emailAddress input');
  const emailAddressErrorField = $('#emailAddress p');

  const contactNumberInputField = $('#contactNumber input');
  const contactNumberErrorField = $('#contactNumber p');

  const commentInputField = $('#comment textarea');
  const commentErrorField = $('#comment p');

  let isFullNameValid = false;
  let isEmailAddressValid = false;
  let isContactNumberValid = false;
  let isCommentValid = false;

  function showFullNameError() {
    let fullName = fullNameInputField.val();
    isFullNameValid = false;

    if (!fullName) {
      fullNameErrorField.text('This is a required field.');
      fullNameInputField.css('border', '1px solid red');
    } else if (fullName.length < 3) {
      fullNameErrorField.text('Please enter a valid name.');
      fullNameInputField.css('border', '1px solid red');
    } else {
      fullNameErrorField.text('');
      fullNameInputField.css('border', '1px solid #656565');
      isFullNameValid = true;
    }
  }

  function showEmailAddressError() {
    let emailAddress = emailAddressInputField.val();
    isEmailAddressValid = false;
    if (!emailAddress) {
      emailAddressErrorField.text('This is a required field.');
      emailAddressInputField.css('border', '1px solid red');
    } else if (!isEmail(emailAddress)) {
      emailAddressErrorField.text('Please enter a valid email address.');
      emailAddressInputField.css('border', '1px solid red');
    } else {
      emailAddressErrorField.text('');
      emailAddressInputField.css('border', '1px solid #656565');
      isEmailAddressValid = true;
    }
  }

  function showContactNumberError() {
    let contactNumberString = contactNumberInputField.val();
    let contactNumber = parseInt(contactNumberString);
    isContactNumberValid = false;

    if (!contactNumberString) {
      contactNumberErrorField.text('This is a required field.');
      contactNumberInputField.css('border', '1px solid red');
    } else if (contactNumberString.length < 8 || isNaN(contactNumber)) {
      contactNumberErrorField.text('Please enter a valid contact number.');
      contactNumberInputField.css('border', '1px solid red');
    } else {
      contactNumberErrorField.text('');
      contactNumberInputField.css('border', '1px solid #656565');
      isContactNumberValid = true;
    }
  }

  function showCommentError() {
    let comment = commentInputField.val();
    isCommentValid = false;

    if (!comment) {
      commentErrorField.text('This is a required field.');
      commentInputField.css('border', '1px solid red');
    } else if (comment.length < 10) {
      commentErrorField.text('Please enter at least 10 characters.');
      commentInputField.css('border', '1px solid red');
    } else {
      commentErrorField.text('');
      commentInputField.css('border', '1px solid #656565');
      isCommentValid = true;
    }
  }

  fullNameInputField.on('input', function () {
    showFullNameError();
  });
  emailAddressInputField.on('input', function () {
    showEmailAddressError();
  });
  contactNumberInputField.on('input', function () {
    showContactNumberError();
  });
  commentInputField.on('input', function () {
    showCommentError();
  });

  $('#submit').click(function () {
    showFullNameError();
    showEmailAddressError();
    showContactNumberError();
    showCommentError();

    const isFormValid =
      isFullNameValid &&
      isEmailAddressValid &&
      isContactNumberValid &&
      isCommentValid;

    if (isFormValid) {
      // https://stackoverflow.com/questions/7977165/how-to-write-in-mailto-body-link-to-current-page
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
