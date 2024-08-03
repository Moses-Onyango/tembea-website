document.addEventListener('DOMContentLoaded', function() {
  const paymentMethodSelect = document.getElementById('payment-method');
  const creditCardFields = document.getElementById('credit-card-fields');
  const cryptoFields = document.getElementById('crypto-fields');

  paymentMethodSelect.addEventListener('change', function() {
      const selectedMethod = paymentMethodSelect.value;
      if (selectedMethod === 'credit-card') {
          creditCardFields.style.display = 'block';
          cryptoFields.style.display = 'none';
      } else {
          creditCardFields.style.display = 'none';
          cryptoFields.style.display = 'block';
      }
  });

  // Initialize form state based on the default selection
  if (paymentMethodSelect.value === 'credit-card') {
      creditCardFields.style.display = 'block';
      cryptoFields.style.display = 'none';
  } else {
      creditCardFields.style.display = 'none';
      cryptoFields.style.display = 'block';
  }
});
function openForm() {
  const form = document.getElementById('donate-form');
  form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}

// Hide the form initially
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('donate-form').style.display = 'none';
});



