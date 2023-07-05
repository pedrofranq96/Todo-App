import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";


//---------------------------------------------------------------
// Enter : adiciona a tarefa 
// shift + enter : pesquisa a tarefa que estiver no campo de busca 
// esc : limpa o campo de busca e retorna para todas as tarefas 
//-----------------------------------------------------------------

export default props => {
    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicionar tarefa'
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}>
        
                    </input>
                </Grid>
               
               
               <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}>
                    </IconButton>
                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}>
                    </IconButton>
                    <IconButton style='default' icon='close'
                        onClick={props.handleClear}>
                    </IconButton>
               </Grid>           
               
            </div>
        )
    )
}