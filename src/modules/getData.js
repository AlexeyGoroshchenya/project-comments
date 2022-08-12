import { render } from './render';

export const getData = (url) => {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.comments);
            render(data.comments)
            //sendData(data)
        })
        .catch(err => console.log(err))
}

