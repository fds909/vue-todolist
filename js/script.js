/*
    Todo List
    Ogni todo sarà un oggetto, formato da due proprietà:
    - text, una stringa che indica il testo del todo
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
    MILESTONE 1
    Stampare all'interno di una lista, un item per ogni todo.
    Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
    MILESTONE 2
    Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
    MILESTONE 3
    Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
    Bonus:
    1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
    2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
    BONUS extra:
    non permettere l'inserimento di todo doppie nell'array di oggetti
*/

var app = new Vue (
    {
        el: "#root",
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Cucinare il pranzo',
                    done: false
                },
                {
                    text: "Ordinare la pizza per cena",
                    done: false
                }
            ],
        },
        methods: {
            addTodo: function() {
                const newItem = {
                    text: this.newTodo,
                    done: false
                }

                if (!this.todos.includes(newItem) && (newItem.text != '')) {
                    this.todos.push(newItem);
                }

                this.newTodo = '';
            },
            removeItem: function(index) {
                this.todos.splice(index, 1);
            },
            todoDone: function(index) {
                this.todos[index].done = true;
            }
        }
    }
)