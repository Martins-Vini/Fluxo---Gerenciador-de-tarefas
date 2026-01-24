function AddTask(){
    return(
        <div className="containerAddTarefa">
            <div><input placeholder="Título da tarefa" type="text" /></div>
            <div><input placeholder="Descrição da tarefa" type="text" /></div>
            <div><button>Adicionar</button></div>
        </div>
    )
}

export default AddTask