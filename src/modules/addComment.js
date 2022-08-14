import { sendForm } from "./sendForm";

export const addComment = () => {

    const comments = document.querySelector('.comments')

    const createForm = (element) => {

        const newComment = document.createElement('form');
        newComment.classList.add('new-comment')
        newComment.innerHTML = `
                    <textarea class="new-comment__textarea" name="new-comment__textarea" cols="30" rows="10"></textarea>
					<button class="new-comment__send" type="submit">Отправить</button>
            `

        element.closest('.comments__statistic').after(newComment)

        setTimeout(() => {

            newComment.classList.add('new-comment-active')
        }, 300)

        sendForm('.new-comment')

    }

    const removeForm = (element) => {



        element.classList.remove('new-comment-active')


        setTimeout(() => {

            element.remove()
        }, 300)

    }


    document.addEventListener('click', (e) => {


        if (e.target.closest('.article__comments')) {
            document.querySelector('.new-comment').classList.toggle('new-comment-active')
        }


        if (e.target.closest('.comments__comments')) {

            if (e.target.closest('.comments__item').querySelector('.new-comment-active')) {
                comments.querySelectorAll('.new-comment-active').forEach(item => removeForm(item))
                console.log(1);
            }
            else if (!e.target.closest('.comments__item').querySelector('.new-comment-active') && comments.querySelector('.new-comment-active')) {
                comments.querySelectorAll('.new-comment-active').forEach(item => removeForm(item))
                createForm(e.target)
                console.log(2);
            } else {
                createForm(e.target)
            }


        }

    })

}