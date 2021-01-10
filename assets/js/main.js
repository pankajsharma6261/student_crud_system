const showStudent = async() => {
    const body = document.querySelector('.show_student_data');
    const response = await fetch('./backends/select.php');
    const result = await response.json();
    let data = ``;
    if (result.length === 0) {
        data += `<tr>
                    <td colspan="6"><div class="alert text-danger text-center" >Data Not Found</div></td>
                </tr>`;
    } else {
        for (let [index, item] of result.entries()) {
            data += `<tr>
                        <td>${ ++index }</td>
                        <td>${ item.name }</td>
                        <td>${ item.mobile_no }</td>
                        <td>${ item.email }</td>
                        <td>${ item.message }</td>
                        <td><button class="btn btn-delete" data-id="${item.id}">delete</button></td>
                        <td><button class="btn btn-edit" data-id="${item.id}">edit</button></td>
                    </tr>`;
        }
    }
    body.innerHTML = data;
    deleteStudent();
    editStudent();
}
showStudent();


const myform = document.querySelector('.myform');
myform.addEventListener('submit', async(e) => {
    e.preventDefault();
    const response = await fetch('backends/insert.php', {
        method: 'POST',
        body: JSON.stringify({
            'id': myform.student_id.value,
            'name': myform.name.value,
            'mobile_no': myform.mobile_no.value,
            'email': myform.email.value,
            'message': myform.message.value
        }),
    });
    const result = await response.json();
    document.querySelector('.messageinfo').innerHTML = `<span class="alert text-success">${result}</sapn>`;
    myform.reset();
    showStudent();
})


function deleteStudent() {
    const deleteBtn = document.querySelectorAll('.btn-delete');
    for (let button of deleteBtn) {
        button.addEventListener('click', async(e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            const response = await fetch('backends/delete.php', {
                method: 'POST',
                body: JSON.stringify({ 'id': id })
            })
            const result = await response.text();
            document.querySelector('.messageinfo').innerHTML = `<span class="alert text-success">${result}</sapn>`;
            showStudent();
        })
    }
}


function editStudent() {
    const editBtn = document.querySelectorAll('.btn-edit');
    for (let button of editBtn) {
        button.addEventListener('click', async(e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            const response = await fetch('backends/edit.php', {
                method: 'POST',
                body: JSON.stringify({ 'id': id })
            })
            const result = await response.json();
            myform.student_id.value = result.id;
            myform.name.value = result.name;
            myform.mobile_no.value = result.mobile_no;
            myform.email.value = result.email;
            myform.message.value = result.message;
        })
    }
}