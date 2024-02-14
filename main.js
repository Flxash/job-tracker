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

  document.querySelector('.js-new-job').addEventListener('click', () => {
    const html = `
        <div class="">
            <input placeholder="Company"
            class="js-company-input company-input">
            <input placeholder="Postion"
            class="js-position-input position-input">
            <input type="Date Applied"
            class="js-date-applied-input date-applied-input">
            <input placeholder="Stage"
            class="js-stage-input stage-input">
            <input placeholder="Resume"
            class="js-resume-input resume-input">
            <input placeholder="Posting URL"
            class="js-posting-input posting-input">
        </div>
      `;

      document.querySelector('.js-job-grid')
      .innerHTML = html;
  });//this doesnt work.
/*
renderJobs();
  
  function renderJobs() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;
      const html = `
        <div class="">
            <input placeholder="Company"
            class="js-company-input company-input">
            <input placeholder="Postion"
            class="js-position-input position-input">
            <input type="Date Applied"
            class="js-date-applied-input date-applied-input">
            <input placeholder="Stage"
            class="js-stage-input stage-input">
            <input placeholder="Resume"
            class="js-resume-input resume-input">
            <input placeholder="Posting URL"
            class="js-posting-input posting-input">
        </div>
      `;
      todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderJobs();
      });
    });
  }

  document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
  });
  */