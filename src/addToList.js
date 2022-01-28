import list from './list.js'
let body = document.querySelector('.body')
let addAD = document.createElement('div')
    addAD.setAttribute('class' , 'buttonAD')
let addToList = document.createElement('button')
    addToList.setAttribute('class' , 'add-to-list')
    addToList.setAttribute('type' , 'submit')
    addToList.innerText = 'Add To List'
    body.appendChild(addAD);
    addAD.appendChild(addToList);


//even

    let addList = document.querySelector('.add-to-list')
        addList.addEventListener("click" , show_add )
     


//function
      
            function show_add() {
                let body = document.querySelector('body')

                let card = document.createElement('div')
                    card.setAttribute('class' , 'card-body')

                let card_title = document.createElement('h5')
                    card_title.setAttribute('class' , 'card-title')

                let inputGroup1 = document.createElementNS('div')
                    inputGroup1.setAttribute('class' , 'input-group input-group-sm mb-3')

                let input_group_text1 = document.createElement('span')
                    input_group_text1.setAttribute('class' , 'input-group-text')
                    input_group_text1.setAttribute('id' , 'inputGroup-sizing-sm')
                    input_group_text1.innerText = 'Name'

                let  input_text1 = document.createElement('input')
                    input_text1.setAttribute('type' , 'text')
                    input_text1.setAttribute('class' , 'form-control')
                    input_text1.setAttribute('aria-label' , 'Sizing example input')
                    input_text1.setAttribute('aria-describedby' ,'inputGroup-sizing-sm')

                let inputGroup1 = document.createElementNS('div')
                    inputGroup1.setAttribute('class' , 'input-group input-group-sm mb-3')

                let input_group_text1 = document.createElement('span')
                    input_group_text1.setAttribute('class' , 'input-group-text')
                    input_group_text1.setAttribute('id' , 'inputGroup-sizing-sm')
                    input_group_text1.innerText = 'Name'

                let  input_text1 = document.createElement('input')
                    input_text1.setAttribute('type' , 'text')
                    input_text1.setAttribute('class' , 'form-control')
                    input_text1.setAttribute('aria-label' , 'Sizing example input')

            //------------------------------------------------------------------------------------

                let inputGroup2 = document.createElementNS('div')
                    inputGroup2.setAttribute('class' , 'input-group input-group-sm mb-3')
                    

                let input_group_text2 = document.createElement('span')
                    input_group_text2.setAttribute('class' , 'input-group-text')
                    input_group_text2.setAttribute('id' , 'inputGroup-sizing-sm')
                    input_group_text2.innerText = 'Name'

                let  input_text2 = document.createElement('input')
                    input_text2.setAttribute('type' , 'text')
                    input_text2.setAttribute('class' , 'form-control')
                    input_text2.setAttribute('aria-label' , 'Sizing example input')
                    input_text2.setAttribute('aria-describedby' ,'inputGroup-sizing-sm')

                let inputGroup2 = document.createElementNS('div')
                    inputGroup2.setAttribute('class' , 'input-group input-group-sm mb-3')

                let input_group_text2 = document.createElement('span')
                    input_group_text2.setAttribute('class' , 'input-group-text')
                    input_group_text2.setAttribute('id' , 'inputGroup-sizing-sm')
                    input_group_text2.innerText = 'Name'

                let  input_text2 = document.createElement('input')
                    input_text2.setAttribute('type' , 'text')
                    input_text2.setAttribute('class' , 'form-control')
                    input_text2.setAttribute('aria-label' , 'Sizing example input')

                let submit = document.createElement('a')
                    submit.setAttribute('href' , '#')
                    submit.setAttribute('class' , 'btn btn-primary')
                    submit.innerText = 'Submit'

                body.appendChild(card)
                card.appendChild(card_title)
                card.appendChild(inputGroup1)
                card.appendChild(submit)
                inputGroup1.appendChild(input_group_text1)
                inputGroup1.appendChild(input_text1)
                card.appendChild(inputGroup2)
                inputGroup2.appendChild(input_group_text2)
                inputGroup2.appendChild(input_text2)

            }

        
    