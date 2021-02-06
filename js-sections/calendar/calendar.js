var date = new Date;



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];



function renderCalendar() {
  date.setDate(1);

  var daystag = document.querySelector(".days");
  var days = "";

  var firstDayWeek = date.getDay();

  var lastDayWeek = new Date(
    date.getFullYear(), 
    date.getMonth() + 1, 
    0
  ).getDay();

  var lastDate = new Date(
    date.getFullYear(), 
    date.getMonth() + 1, 
    0
  ).getDate();

  var prevLastDate = new Date(
    date.getFullYear(), 
    date.getMonth(), 
    0
  ).getDate();

  var nextDates = 7 - lastDayWeek - 1;

  document.querySelector(".month").innerHTML = months[date.getMonth()];
  document.querySelector(".date .year").innerHTML = new Date().toDateString();



  for (var i = 1; i <= firstDayWeek; i++)
  {
    days += `<div class="prev-date">${prevLastDate - firstDayWeek + i}</div>`;
  }

  for (var i = 1; i <= lastDate; i++)
  {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (var i = 1; i <= nextDates; i++)
  {
    days += `<div class="next-date">${i}</div>`;
  }

  daystag.innerHTML = days;
};

document.querySelector(".month-prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".month-next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();