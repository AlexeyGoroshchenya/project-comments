export const renderComment = (item, element, render) => {

    const comment = document.createElement('div');
    comment.classList.add('comments__item', 'item-comments')

    comment.setAttribute('c-id', item.id)
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

    if (render === 'addComment') {
        element.prepend(comment);
    } else if (render === 'addSubcomment') {
        element.querySelector('.comments__statistic').after(comment)

    } else { element.append(comment) }

    if (item.has_child) {
        item.reply.forEach(child => {
            renderComment(child, comment)

        })
    }
}