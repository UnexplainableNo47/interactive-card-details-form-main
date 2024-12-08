form = document.getElementById('form');
success_page = document.getElementById('success-page');
success_page_close = document.getElementById('success-page-close')

card_holder = document.getElementById('card-holder');
card_number = document.getElementById('card-number');
exp_date_mm = document.getElementById('exp-date-mm');
exp_date_yy = document.getElementById('exp-date-yy');
cvc = document.getElementById('cvc');

card_holder_dsp = document.getElementById('card-holder-dsp');
card_number_dsp = document.getElementById('card-number-dsp');
exp_date_mm_dsp = document.getElementById('exp-date-mm-dsp');
exp_date_yy_dsp = document.getElementById('exp-date-yy-dsp');
cvc_dsp = document.getElementById('cvc-dsp');

card_number.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = value;
  });

  form.addEventListener('submit', (e) =>{
    card_holder_dsp.innerText = card_holder.value;
    card_number_dsp.innerText = card_number.value;
    exp_date_mm_dsp.innerText = exp_date_mm.value;
    exp_date_yy_dsp.innerText = exp_date_yy.value;
    cvc_dsp.innerText = cvc.value;

    form.style.display = "none";
    success_page.style.display = "flex";
  });

  success_page_close.addEventListener('click', (e) =>{
    form.style.display = "flex";
    success_page.style.display = "none"
  })