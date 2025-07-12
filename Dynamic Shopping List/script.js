const uList = document.querySelector('ul');
        const inpt = document.querySelector('input');
        const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
  
  const itemValue = inpt.value;

  inpt.value = '';

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  span.textContent = itemValue;
  deleteBtn.textContent = 'Delete';

  listItem.appendChild(span);
  listItem.appendChild(deleteBtn);
  uList.appendChild(listItem);

  deleteBtn.addEventListener('click', () => {
    uList.removeChild(listItem);
  });

  inpt.focus();
});
