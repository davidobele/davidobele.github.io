document.getElementById('surveyForm').addEventListener('submit', function (event) {
    let form = event.target;
    let inputs = form.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert('Please fill out all required fields before submitting.');
        event.preventDefault();
    }
});

document.getElementById('addCourse').addEventListener('click', function () {
    let courseContainer = document.getElementById('courseContainer');
    let newCourseDiv = document.createElement('div');
    newCourseDiv.style.marginBottom = '10px';

    let newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.name = 'courses[]';
    newCourseInput.placeholder = 'Enter course';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function () {
        courseContainer.removeChild(newCourseDiv);
    };

    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(deleteButton);
    courseContainer.appendChild(newCourseDiv);
});

document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let form = event.target;
    let output = document.getElementById('output');
    output.innerHTML = ''; 

    let formData = {
        name: form.name.value,
        mascot: form.mascot.value,
        image: form.image.files[0],
        caption: form.caption.value,
        personalBackground: form.personalBackground.value,
        professionalBackground: form.professionalBackground.value,
        academicBackground: form.academicBackground.value,
        webDevBackground: form.webDevBackground.value,
        platform: form.platform.value,
        courses: Array.from(form.querySelectorAll('input[name="courses[]"]')).map((input) => input.value),
        funnyThing: form.funnyThing.value,
        anythingElse: form.anythingElse.value
    };

    let content = `<h2>${formData.name}'s Introduction</h2>`;

    if (formData.image) {
        content += `<figure>
            <img src="${URL.createObjectURL(formData.image)}" alt="User Image" style="width: 300px; height: auto;">
            <figcaption>${formData.caption}</figcaption>
        </figure>`;
    }

    content += `
        <p><strong>Mascot:</strong> ${formData.mascot}</p>
        <p><strong>Personal Background:</strong> ${formData.personalBackground}</p>
        <p><strong>Professional Background:</strong> ${formData.professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${formData.academicBackground}</p>
        <p><strong>Background in Web Development:</strong> ${formData.webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${formData.platform}</p>
        <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
        <p><strong>Anything Else?</strong> ${formData.anythingElse}</p>
        <p><strong>Courses Currently Taking:</strong></p>`;

    formData.courses.forEach((course) => {
        if (course.trim() !== '') {
            content += `<p>${course}</p>`;
        }
    });

    content += '<button id="resetForm">Reset Form</button>';
    output.innerHTML = content;

    form.style.display = 'none';

    document.getElementById('resetForm').addEventListener('click', function () {
        form.style.display = 'block';
        output.innerHTML = '';
        form.reset();
    });
});

document.getElementById('surveyForm').reset();
