import { burger } from './modules/burger';
import { sendForm } from './modules/sendForm';
import { getData } from './modules/getData';
import { addComment } from './modules/addComment';



//burger();
sendForm('.new-comment');
getData('../dist/comments.json')
addComment()