import list  from './list.js'
  let addList = (index ,inputname , inputamount) => {
 
    let topCard = document.querySelector('.card')
      let discription_list = document.createElement('div')
        discription_list.setAttribute('class' , 'discription-list')
     
      let table_card = document.createElement('table')
        table_card.setAttribute('class' , 'table-card')
        table_card.setAttribute('style' , 'width:100%;')

      let row_section = document.createElement('tr')
        row_section.setAttribute('class' , 'row-section')
  
      let card_input_list = document.createElement('tr')
        card_input_list.setAttribute('class' , 'card-input-list')
        
      let input_name = document.createElement('td')
        input_name.setAttribute('class' , 'input-name')
        input_name.innerText = `${index} : ${inputname}`

      let input_amount = document.createElement('td')
        input_amount.setAttribute('class' , 'input-amount')
        input_amount.innerText = `${inputamount} Bath`
          if(inputamount < 0){
             input_amount.setAttribute('style' , 'background-color: red')

          }
          else{
            input_amount.setAttribute('style' , 'background-color: green')

          }
    topCard.appendChild(discription_list)
    discription_list.appendChild(table_card)
    table_card.appendChild(card_input_list)
    card_input_list.appendChild(input_name)
    card_input_list.appendChild(input_amount)

  }
 

  console.log(list);

  list.forEach((list , index) => {
        if(index >=0 ){
          addList(
            index ,
            list.Name ,
            list.Amount
          )
        } 
  });