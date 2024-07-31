// ここにJavaScriptを記述していきます。

const readMore = document.getElementById('read-more');
const moreText = document.getElementById('more-text');
let clickCount = 0;

readMore.addEventListener(('click'), () => {
  clickCount ++;  
  console.log(clickCount); 
  if(clickCount % 2 !== 0) {
    moreText.style.display = 'block';
    readMore.textContent = '閉じる';
  } else {
    moreText.style.display = 'none';
    readMore.textContent = 'もっと詳しく';
  }
});

//学習言語
const languageImages = Array.from(document.querySelectorAll('.icon img'));
const languageExplanations = Array.from(document.querySelectorAll('.languages-content p'));

languageImages.forEach((image, index) => {
  image.addEventListener('mouseover', e => {
    const explanation = languageExplanations[index];
    explanation.style.display = 'block';
    explanation.style.opacity = '1';
  });
  image.addEventListener('mouseout', e => {
    const explanation = languageExplanations[index];
    explanation.style.display = 'none';
  })
});

//申し込みフォーム
const applyButtons = Array.from(document.querySelectorAll('.btn-pricing'));
const course = document.getElementById('course-select');
const form = document.getElementById('apply-modal');
const closeButton = document.getElementById('close-modal');
applyButtons.forEach((button, index) => {
  button.addEventListener('click', e => {
    course.options[index].selected = true;
    form.style.display = 'flex';
  });
  closeButton.addEventListener('click', e => {
    form.style.display = 'none';
  });
});

//生徒の声
const slideButtons = Array.from(document.querySelectorAll('.carousel-indicators li'));
const studentBoxes = Array.from(document.querySelectorAll('.student-box'));

slideButtons.forEach((button, index) => {
  button.addEventListener('click', e => {
    const activeSlideButton = document.querySelector('.carousel-indicators li.active');
    const activeStudentBox = document.querySelector('.student-box.active');
    activeSlideButton.classList.remove('active');
    activeStudentBox.classList.remove('active');
    button.classList.add('active');
    studentBoxes[index].classList.add('active');
  });
});

//コラム
const columnImages = document.querySelectorAll('.column-image');
const zoomBlack = document.querySelectorAll('.zoom-black');
columnImages.forEach((image, index) => {
  const zoomTarget = zoomBlack[index];
  image.addEventListener('mouseover', e => {
    zoomTarget.style.display = 'inline-block';
  });
  image.addEventListener('mouseout', e => {
    zoomTarget.style.display = 'none';
  });
});

//お問い合わせ
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if(!contactForm.checkValidity()) {
    e.stopPropagation();
  } else {
    contactForm.innerHTML = '<h4>お問い合わせありがとうございます。</h4>';
  }
});
