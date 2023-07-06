import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () =>({
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
    })
})

export default rootReducer