document.getElementById('calculateTax').addEventListener('click', function() {
    let grossIncome = parseFloat(document.getElementById('grossIncome').value);
    let extraIncome = parseFloat(document.getElementById('extraIncome').value);
    let deductions = parseFloat(document.getElementById('deductions').value);
    let ageGroup = document.getElementById('age').value;
  
    // Validate inputs
    validateInput('grossIncome', grossIncome);
    validateInput('extraIncome', extraIncome);
    validateInput('deductions', deductions);
    validateInput('age', ageGroup, true);
  
    let totalIncome = grossIncome + extraIncome - deductions;
    let tax = 0;
  
    // More than 8 lakhs
    if (totalIncome > 800000) { 
      switch (ageGroup) {
        case 'below40':
          tax = 0.3 * (totalIncome - 800000);
          break;
        case 'between40and60':
          tax = 0.4 * (totalIncome - 800000);
          break;
        case '60andabove':
          tax = 0.1 * (totalIncome - 800000);
          break;
      }
    }
  
    // Show result
    document.getElementById('resultText').innerText = `Total Tax Payable: ₹${tax.toFixed(2)}`;
    document.getElementById('resultModal').style.display = 'block';
  });
  
  function validateInput(id, value, isSelect = false) {
    let element = document.getElementById(id);
    let errorIcon = element.nextElementSibling;
    if ((isNaN(value) && !isSelect) || (isSelect && !value)) {
      errorIcon.style.display = 'inline';
    } else {
      errorIcon.style.display = 'none';
    }
  }
  
  // close
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('resultModal').style.display = 'none';
  });
  