document.getElementById('loan-form').addEventListener('submit', calculateResults);
const results = document.querySelector('#results');
const loading = document.querySelector('#loading');
results.style.display = 'none';
loading.style.display = 'none';


function calculateResults(e){
  console.log('Calculating...');

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    loading.style.display = 'block';
    setTimeout(function(){loading.style.display = 'none', results.style.display = 'block'}, 2000);
  } else {
    displayError('Please check your numbers');
  }

  e.preventDefault();
}

function displayError(msg) {
    const card = document.querySelector('.card');
    const errorEL = document.createElement('div');
    const title = document.querySelector('.card h1');
    errorEL.className = "alert alert-danger";
    errorEL.textContent = msg;
    card.insertBefore(errorEL, title)
    setTimeout(function(){errorEL.remove()}, 3000);
}


