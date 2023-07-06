const INITIAL_STATE = {
    description: 'ler livro',
    list: [{
      _id: 1,
      description: 'pagar cartão',
      done:true
    },{
      _id: 2,
      description: 'pagar conta de luz',
      done:false
    },{
      _id: 3,
      description: 'consulta médica',
      done:false
    }]
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED': 
            return  {...state, list: action.payload.data}
        default: 
            return state
    }
}