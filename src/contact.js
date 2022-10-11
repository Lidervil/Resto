export default function form(){
    const form = document.createElement('form');
    form.classList.add('form');

    const divInput1 = document.createElement('div');
    const divInput2 = document.createElement('div');
    const divInput3 = document.createElement('div');
    const divBtn = document.createElement('div');
    
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const textarea = document.createElement('textarea');
    const btn = document.createElement('button');
    
    divInput1.classList.add('input');
    divInput2.classList.add('input');
    divInput3.classList.add('input');
    divBtn.classList.add('btn');

    label1.classList.add('label');
    label2.classList.add('label');
    input1.classList.add('input');
    input2.classList.add('input');
    textarea.classList.add('textarea');
    btn.classList.add('btn');

    label1.textContent = 'Email: ';
    label1.setAttribute('for', 'email');
    label1.setAttribute('required', '');
    label2.textContent = 'Name: ';
    label2.setAttribute('for', 'name');
    label2.setAttribute('required', '');
    input1.setAttribute('type', 'email');
    input1.setAttribute('name', 'email');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'name');
    textarea.setAttribute('name', 'tarea');
    textarea.setAttribute('id', 'tarea');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    btn.textContent = 'Send!';
    btn.setAttribute('type', 'submit');

    divInput1.appendChild(label1);
    divInput1.appendChild(input1);
    divInput2.appendChild(label2);
    divInput2.appendChild(input2);
    divInput3.appendChild(textarea);
    divBtn.appendChild(btn);

    form.appendChild(divInput1);
    form.appendChild(divInput2);
    form.appendChild(divInput3);
    form.appendChild(divBtn);

    return form;

}