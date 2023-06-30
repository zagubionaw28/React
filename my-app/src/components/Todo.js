import React from 'react'
import TodoItem from "./TodoItem"
// Będę trzymać tu stan, listę, która tworzy nowe rzeczy
class Todo extends React.Component {
    //tworzenie listy, gdzie każdy element będzie miał ID
    state = {
        elements: [
            { id: '3432874263', isCompleted: true, title: 'Zrobić zakupy' },
            { id: 'fs932r28wr', isCompleted: false, title: 'Nauczyć się biologii' }
        ],
        inputValue:''
    }
    markCompleted(id) {
        const index = this.state.elements
                .findIndex(x => x.id === id)
        const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({ elements:newElements })
    }

addItem() {
    // dodawanie elementów
    const item = {
        id: Math.random(),
        title: this.state.inputValue
    }
    const newElements = [item,...this.state.elements]
    this.setState({ elements: newElements })
    // czyszczenie po inpucie 
    this.setState({inputValue: ''})
}

inputHandler(event) {
    const newValue = event.target.value
    this.setState({ inputValue: newValue })
}

    render() {
        const elements = this.state.elements.map(e => {
            return <TodoItem element={e} markClicked={this.markCompleted.bind(this)}/>
            //<div className="card" key={e.id}>{e.title}</div>  //każdy element niech składa się z div i z tytułu , oczywiście ten div musi mieć jakiś klucz
        })
        return (
            <div>
                Todo app   '
                <input typu="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default Todo