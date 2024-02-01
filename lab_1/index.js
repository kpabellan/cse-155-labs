document.addEventListener("DOMContentLoaded", function() {

  function updateDays() {
    let monthSelect = document.getElementById("months");
    let yearSelect = document.getElementById("years");
    let daysSelect = document.getElementById("days");

    daysSelect.innerHTML = "<option value=''>1</option>";

    let month = parseInt(monthSelect.value);
    let year = parseInt(yearSelect.value);

    let daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      let option = document.createElement("option");
      option.text = i;
      option.value = i;
      daysSelect.appendChild(option);
    }
  }

  function generateYears() {
    let yearsSelect = document.getElementById("years");

    yearsSelect.innerHTML = "";

    let currentYear = new Date().getFullYear();

    for (let year = currentYear; year >= currentYear - 100; year--) {
      let option = document.createElement("option");
      option.text = year;
      option.value = year;
      yearsSelect.appendChild(option);
    }

    yearsSelect.value = currentYear;

    updateDays();
  }

  function calculateAge() {
    let selectedMonth = document.getElementById("months").value;
    let selectedDay = document.getElementById("days").value;
    let selectedYear = document.getElementById("years").value;

    let today = new Date();
    let birthDate = new Date(selectedYear, selectedMonth - 1, selectedDay);

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    let ageElement = document.getElementById("age")

    let ageValue = document.createElement("h1");

    if (age <= 0) {
      let node = document.createTextNode("Invalid date of birth. Please try again.");
      ageValue.appendChild(node);
    } else {
      let node = document.createTextNode("You are " + age + " years old.");
      ageValue.appendChild(node);
    }
    
    ageElement.appendChild(ageValue);
  }

  document.getElementById("months").onchange = updateDays;
  document.getElementById("years").onchange = updateDays;
  document.getElementById("calculate").onclick = calculateAge;

  generateYears();
})