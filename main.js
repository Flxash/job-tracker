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
/*
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
*/
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('js-new-job')) {
      const html = `
            <input placeholder="Company" class="js-company-input company-input">
            <input placeholder="Position" class="js-position-input position-input">
            <input type="date" class="js-date-applied-input date-applied-input">
            <input placeholder="Stage" class="js-stage-input stage-input">
            <input placeholder="Resume" class="js-resume-input resume-input">
            <input placeholder="Posting URL" class="js-posting-input posting-input">
      `;

      document.querySelector('.job-grid').innerHTML += html;
  }
});



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

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }