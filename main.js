const jobList = [{
    company: 'Amazon',
    postion: 'Software Engineering Intern',
    dateApplied: 'Jnuary 27, 2022',
    stage: 'Applied',
    resume: '',
    postingURL: '5vbuvb4uvbnubv'
  }, {
    company: 'Amazon',
    postion: 'Software Engineering Intern',
    dateApplied: 'Jnuary 27, 2022',
    stage: 'Applied',
    resume: '',
    postingURL: '5vbuvb4uvbnubv'
  }];

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('js-new-job')) {
      const html = `
            <input placeholder="Company" class="js-company-input company-input">
            <input placeholder="Position" class="js-position-input position-input">
            <input type="date" class="js-date-applied-input date-applied-input">
            <input placeholder="Stage" class="js-stage-input stage-input">
            <input placeholder="Resume" class="js-resume-input resume-input">
            <input placeholder="Posting URL" class="js-posting-input posting-input">
            <button class="delete-button js-delete-button">x</button>
      `;

      document.querySelector('.js-new-job').classList.add("js-hidden");
      document.querySelector('.js-new-job').classList.add("hidden");
      document.querySelector('.job-grid').innerHTML += html;
  }
});

document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    document.querySelectorAll('.job-grid').splice(index, 1);
    renderTodoList();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Load saved values from localStorage
  document.querySelectorAll('input').forEach(input => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue) {
          input.value = savedValue;
      }
  });

  // Save input values to localStorage on input change
  document.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
          localStorage.setItem(input.id, input.value);
      });
  });
});