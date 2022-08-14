import { renderComment } from "./renderComment";

export const render = (arr) => {

    const comments = document.querySelector('.comments')




    const init = () => {
        comments.innerHTML = '';

        arr.forEach(element => {
            renderComment(element, comments)
        });

    }

    init()

}