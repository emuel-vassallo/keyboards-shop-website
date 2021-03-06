$(document).ready(() => {
  if ($('body').hasClass('home-page')) {
    $('.carousel').flickity({
      autoPlay: true,
      contain: true,
      wrapAround: true,
      lazyLoad: true,
    });
  }

  $('.menu-button').on('click', () => {
    $('.sidebar').toggleClass('active');
    $('.site-overlay').toggleClass('active');
  });

  //https://github.com/Basir-PD/100-Projects-HTML-CSS-JavaScript/tree/master/6%20-%20How%20To%20Create%20a%20Modal%20Using%20HTML%2C%20CSS%20and%20JavaScript
  (() => {
    const infoButtons = document.querySelectorAll('[data-target]');
    const infoCloseButtons = document.querySelectorAll('.close-modal');
    const overlay = document.getElementsByClassName('site-overlay')[0];

    infoButtons.forEach((infoButton) => {
      infoButton.addEventListener('click', () => {
        document
          .querySelector(infoButton.dataset.target)
          .classList.add('active');
        overlay.classList.add('active');
      });
    });

    infoCloseButtons.forEach((infoCloseButton) => {
      infoCloseButton.addEventListener('click', () => {
        const modal = infoCloseButton.closest('.modal');
        modal.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  })();

  $('.button-add-to-cart').on('click', () => {
    alert('Product was added to cart.');
  });

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

  // https://melvingeorge.me/blog/check-if-string-is-valid-email-address-javascript
  isEmail = (email) => {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  function showRequiredFieldError(inputField, errorField) {
    errorField.text('This is a required field.');
    inputField.css('border', '1px solid red');
  }

  function restoreError(inputField, errorField) {
    errorField.text('');
    inputField.css('border', '1px solid #656565');
  }

  function showFullNameError() {
    let fullName = fullNameInputField.val();
    isFullNameValid = false;

    if (!fullName) {
      showRequiredFieldError(fullNameInputField, fullNameErrorField);
    } else if (fullName.length < 3) {
      fullNameErrorField.text('Please enter a valid name.');
      fullNameInputField.css('border', '1px solid red');
    } else {
      restoreError(fullNameInputField, fullNameErrorField);
      isFullNameValid = true;
    }
  }

  function showEmailAddressError() {
    let emailAddress = emailAddressInputField.val();
    isEmailAddressValid = false;

    if (!emailAddress) {
      showRequiredFieldError(emailAddressInputField, emailAddressErrorField);
    } else if (!isEmail(emailAddress)) {
      emailAddressErrorField.text('Please enter a valid email address.');
      emailAddressInputField.css('border', '1px solid red');
    } else {
      restoreError(emailAddressInputField, emailAddressErrorField);
      isEmailAddressValid = true;
    }
  }

  function showContactNumberError() {
    let contactNumberString = contactNumberInputField.val();
    let contactNumber = parseInt(contactNumberString);
    isContactNumberValid = false;

    if (!contactNumberString) {
      showRequiredFieldError(contactNumberInputField, contactNumberErrorField);
    } else if (contactNumberString.length < 8 || isNaN(contactNumber)) {
      contactNumberErrorField.text('Please enter a valid contact number.');
      contactNumberInputField.css('border', '1px solid red');
    } else {
      restoreError(contactNumberInputField, contactNumberErrorField);
      isContactNumberValid = true;
    }
  }

  function showCommentError() {
    let comment = commentInputField.val();
    isCommentValid = false;

    if (!comment) {
      showRequiredFieldError(commentInputField, commentErrorField);
    } else if (comment.length < 10) {
      commentErrorField.text('Please enter at least 10 characters.');
      commentInputField.css('border', '1px solid red');
    } else {
      restoreError(commentInputField, commentErrorField);
      isCommentValid = true;
    }
  }

  fullNameInputField.on('input', showFullNameError);
  emailAddressInputField.on('input', showEmailAddressError);
  contactNumberInputField.on('input', showContactNumberError);
  commentInputField.on('input', showCommentError);

  $('#submit').click(() => {
    showFullNameError();
    showEmailAddressError();
    showContactNumberError();
    showCommentError();

    let emailBody = commentInputField.val();

    const isFormValid =
      isFullNameValid &&
      isEmailAddressValid &&
      isContactNumberValid &&
      isCommentValid;

    // https://stackoverflow.com/questions/7977165/how-to-write-in-mailto-body-link-to-current-page
    if (isFormValid) {
      location.href = `mailto:?body=${emailBody}&to=emuel.vassallo.g52404@mcast.edu.mt`;
    }
  });
});
