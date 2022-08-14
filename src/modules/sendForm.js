import { renderComment } from "./renderComment";


export const sendForm = (formClass) => {

    const forms = document.querySelectorAll(formClass)

    forms.forEach((form) => {
        const validate = (input) => {

            let nameInput = true

            if (input.matches('textarea')) {
                if (input.value.length < 1) {
                    nameInput = false
                }
            }
            return nameInput
        }

        const sendData = (data) => {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "aplication/json"
                }
            }).then(res => res.json())
        }

        const submitData = () => {
            const formElements = form.querySelector('textarea')
            const formBody = {}

            formBody.message = formElements.value
            formBody.author = 'Artem'




            if (validate(formElements)) {
                sendData(formBody)
                    .then(data => {


                        console.log(data);

                        formElements.value = ''

                        formBody.id = data.id

                        console.log(formBody);
                        if (form.closest('.article')) {
                            renderComment(formBody, document.querySelector('.comments'), 'addComment')
                        } else if (form.closest('.comments')) {
                            renderComment(formBody, form.closest('.comments__item'), 'addSubcomment')
                        }

                        form.classList.remove('new-comment-active')

                    })
                    .catch(error => {
                        console.log(error);

                    })
            } else {
                console.log('данные не валидны');
            }
        }

        try {
            if (!form) {
                throw new Error('верните форму')
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitData()
            })
        } catch (error) {
            console.log(error.message);
        }

    })



}