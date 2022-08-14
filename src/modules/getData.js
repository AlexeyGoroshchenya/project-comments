import { render } from './render';

export const getData = (url) => {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            render(data.comments)

        })
        .catch(err => console.log(err))
}

