import list from './list.js'
    let sum = list.reduce((sum , number) => sum + number.Amount,0)
    let body = document.querySelector('.body')
    let total = document.createElement('h3')
    total.setAttribute('class' , 'total')
    total.setAttribute('style' , 'float: right; text-decoration: underline;')
    total.innerText = `Total Amount : ${sum} Bath`
    body.appendChild(total)




