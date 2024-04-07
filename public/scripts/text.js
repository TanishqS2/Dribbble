
const checkbox = document.getElementById('myCheck1');
const cardImage = document.getElementById('cardImage1');
const text = document.getElementById('text1');
const heading = document.getElementById('head1');
const span = document.getElementById('span1');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        text.style.display = 'block';
        cardImage.style.marginBottom = '10px';
        heading.style.marginBottom = '10px';
        span.style.marginBottom = '10px'
        span.style.marginTop = '10px'
    } else {
        text.style.display = 'none';
        cardImage.style.marginBottom = '0';
        text.style.marginBottom = '0';
        heading.style.marginBottom = '0';
    }
});

const checkbox2 = document.getElementById('myCheck2');
const cardImage2 = document.getElementById('cardImage2');
const text2 = document.getElementById('text2');
const heading2 = document.getElementById('head2');
const span2 = document.getElementById('span2');

checkbox2.addEventListener('change', function() {
    if (checkbox2.checked) {
        text2.style.display = 'block';
        cardImage2.style.marginBottom = '10px';
        heading2.style.marginBottom = '10px';
        span2.style.marginBottom = '10px'
        span2.style.marginTop = '10px'
    } else {
        text2.style.display = 'none';
        cardImage2.style.marginBottom = '0';
        text2.style.marginBottom = '0';
        heading2.style.marginBottom = '0';
    }
});

const checkbox3 = document.getElementById('myCheck3');
const cardImage3 = document.getElementById('cardImage3');
const text3 = document.getElementById('text3');
const heading3 = document.getElementById('head3');
const span3 = document.getElementById('span3');

checkbox3.addEventListener('change', function() {
    if (checkbox3.checked) {
        text3.style.display = 'block';
        cardImage3.style.marginBottom = '10px';
        heading3.style.marginBottom = '10px';
        span3.style.marginBottom = '10px'
        span3.style.marginTop = '10px'
    } else {
        text3.style.display = 'none';
        cardImage3.style.marginBottom = '0';
        text3.style.marginBottom = '0';
        heading3.style.marginBottom = '0';
    }
});