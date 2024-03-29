const name = 'Cigar Parties for Dummies';
let description = 'Host and plan the perfect cigar party for all of your squirrelly friends.';

// THE OBJECT CALLED REVIEWS 
let reviews = [
  {
    reviewer: 'Malcolm Gladwell',
    title: 'What a book!',
    review:
      "It certainly is a book. I mean, I can see that. Pages kept together with glue (I hope that's glue) and there's writing on it, in some language.",
    rating: 3
  }
  // END OF OBJECT
];

/**
 * Add our product name to the page title
 * Get our page page title by the id and the query the .name selector
 * once you have the element you can add the product name to the span.
 */
function setPageTitle() {
  const pageTitle = document.getElementById('page-title');
  pageTitle.querySelector('.name').innerHTML = name;
}

/**
 * Add our product description to the page.
 */
function setPageDescription() {
  document.querySelector('.description').innerText = description;
}

/**
 * I will display all of the reviews in the reviews array
 */
function displayReviews() {
  //CHECK THAT TEMPLATES ARE SUPPORTED 
  if ('content' in document.createElement('template')) {
    //REVIEW IS A MADE UP A NAME OF THAT OBJECT 
    reviews.forEach((review) => {
      displayReview(review);
    });
  } else {
    console.error('Your browser does not support templates');
  }
}

/**
 *
 * @param {Object} review The review to display
 */
function displayReview(review) {

  const main = document.getElementById('main');
  //CREATES A COPY OR CLONE AND PUTS IT IN TMP 
  //REVIEWER IS THE PROPERTY OF OBJECT REVIEWS 
  const tmpl = document.getElementById('review-template').content.cloneNode(true);
  tmpl.querySelector('h4').innerHTML = review.reviewer;
  tmpl.querySelector('h3').innerHTML = review.title;
  tmpl.querySelector('p').innerHTML = review.review;
  // there will always be 1 star because it is a part of the template
  for (let i = 1; i < review.rating; ++i) {
    const img = tmpl.querySelector('img').cloneNode();
    //TAKE TYPE OF tmpl AND APPEND IT AS A CHILD TO NAME
    //WE ADD IT TO CONTAINER AS ANOTHER CHILD
    tmpl.querySelector('.rating').appendChild(img);
  }
  main.appendChild(tmpl);
}

// LECTURE STARTS HERE ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // set the product reviews page title
  setPageTitle();
  // set the product reviews page description
  setPageDescription();
  // display all of the product reviews on our page
  displayReviews();


  //WHEN USER CLICKS ON DESC SHOW INPUT BOX
  const desc = document.querySelector('.description');
  desc / addEventListener('click', (event) => {
    //passes target what thing what was actually clicked the object target
    //this is the object i want to act on 
    toggleDescriptionEdit(event.target);
  });

  //input desc in html has class d-none on line 19 
  const inputDesc = docoment.getElementById('inputDesc');
  //if event. key was the enter key 
  inputDesc.addEventListener('keyup', (event) => {


    if (event.key === 'Enter') {
      exitDescriptionEdit(event.target, true);
    }

    if (event.key === 'Escape') {
        exitDescriptionEdit(event.target, false);
    }

    inputDesc.addEventListener('mouseleave',(event => {
      exitDescriptionEdit( event.target, false)
    }))
      // show hide the add review form
      const btnToggleForm = document.getElementById('btnToggleForm');
      btnToggleForm.addEventListener('click',() => {
        showHideForm()
      });
      //save review and display it with const btnSaveReview = document.getelementbyreview('btnSaveReview)
      const btnSaveReview = document.getElementById('btnSaveReview');
      event.preventDefault();
        saveReview();
  });


  /**
   * Take an event on the description and swap out the description for a text box.
   *
   * @param {Event} event the event object
   */
  function toggleDescriptionEdit(desc) {
    const textBox = desc.nextElementSibling;
    textBox.value = description;
    textBox.classList.remove('d-none');
    desc.classList.add('d-none');
    textBox.focus();
  }

  /**
   * Take an event on the text box and set the description to the contents
   * of the text box and then hide the text box and show the description.
   *
   * @param {Event} event the event object
   * @param {Boolean} save should we save the description text
   */
  function exitDescriptionEdit(textBox, save) {
    let desc = textBox.previousElementSibling;
    if (save) {
      desc.innerText = textBox.value;
    }
    textBox.classList.add('d-none');
    desc.classList.remove('d-none');
  }

  /**
   * I will show / hide the add review form
   */
  function showHideForm() {
    const form = document.querySelector('form');
    const btn = document.getElementById('btnToggleForm');

    if (form.classList.contains('d-none')) {
      form.classList.remove('d-none');
      btn.innerText = 'Hide Form';
      document.getElementById('name').focus();
    } else {
      resetFormValues();
      form.classList.add('d-none');
      btn.innerText = 'Add Review';
    }
  }

  /**
   * I will reset all of the values in the form.
   */
  function resetFormValues() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.value = '';
    });
    document.getElementById('rating').value = 1;
    document.getElementById('review').value = '';
  }

  /**
   * I will save the review that was added using the add review from
   */
  function saveReview() { }
