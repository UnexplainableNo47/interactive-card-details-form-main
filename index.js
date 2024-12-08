card_number = document.getElementById('card-number');


card_number.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = value;
  });