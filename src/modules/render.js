
export const render = (arr) => {


    const comments = document.querySelector('.comments')


    const renderComment = (item, body) => {

        console.log(body);
        const comment = document.createElement('div');
        comment.classList.add('comments__item', 'item-comments')
        comment.innerHTML = `
        <div class="item-comments__header">
        <div class="item-comments__pic"></div>
        <div class="item-comments__title">${item.author} </div>
    </div>
    <div class="item-comments__text">${item.message}</div>
    <div class="comments__statistic">
        <div class="comments__likes like">
            <img src="dist/img/icons/icons8-like-49.png" alt=""> <span></span>
        </div>
        <div class="comments__comments comment">
            <img src="dist/img/icons/icons8-comment-67.png" alt=""> <span></span>
        </div>
    </div>
		
        `;
        body.append(comment);



        if (item.has_child) {
            item.reply.forEach(child => {
                renderComment(child, comment)

            })

        }

    }

    const init = () => {
        comments.innerHTML = '';

        arr.forEach(element => {

            renderComment(element, comments)



        });

    }

    init()





}