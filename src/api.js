export let todos = []

/**
 * Récupère une liste de tâches et la stocke dans le tableau todos.
 * 
 * @function fetchTodos
 * 
 * @param {number} _page Optionnel. Numéro de la page contenant les tâches désirées. 10 tâches par page par défaut. 
 * @param {number} _limit Optionnel. Nombre de tâches à retourner par page.
 * 
 * @return {Promise|void} Une promise permettant de savoir lorsque la tâche est terminée (utile pour tester). Ou rien du tout si ce n'est pas possible.
 */
export function fetchTodos(_page, _limit) {

}

// fetchTodos().then(() => console.table(todos))
// fetchTodos({_limit: 5}).then(() => console.table(todos))
// fetchTodos(2, 5).then(() => console.table(todos))

/**
 * Ajoute une nouvelle tâche.
 * 
 * @function postTodo
 * 
 * @param {Object} todo Un objet de type "Todo"
 * 
 * @return {Promise|void} Une Promise permettant de savoir lorsque la tâche est terminée (utile pour tester). Ou rien du tout si ce n'est pas possible.
 */
export function postTodo(todo) {
   
}

// postTodo({ id: 0, label: 'Hello World!', completed: false, creationDate: new Date() }).then(() => fetchTodos()).then(() => console.table(todos))

/**
 * Récupère une seule tâche et remplace le contenu du tableau todos.
 * 
 * @function fetchTodo
 * 
 * @param {number} id Identifiant de la tâche à récupérer.
 * 
 * @return {Promise|void} Une Promise permettant de savoir lorsque la tâche est terminée (utile pour tester). Ou rien du tout si ce n'est pas possible.
 */
export function fetchTodo(id) {

}

// fetchTodo(1).then(() => console.table(todos))

/**
 * Met à jour une tâche.
 * 
 * @function updateTodo
 *
 * @param {number} id Identifiant de la tâche à modifier.
 * @param {Object} todo Le propriétés à modifier.
 * 
 * @return {Promise|void} Une Promise permettant de savoir lorsque la tâche est terminée (utile pour tester). Ou rien du tout si ce n'est pas possible.
 */
export function updateTodo(id, todo) {
   
}

// updateTodo(4, { label: 'J\'ai changé', complete: true }).then(() => fetchTodo(4)).then(() => console.table(todos))

/**
 * Supprime une tâche.
 * 
 * @function deleteTodo
 * 
 * @param {number} id Identifiant de la tâche à supprimer.
 * 
 * @return {Promise|void} Une Promise permettant de savoir lorsque la tâche est terminée (utile pour tester). Ou rien du tout si ce n'est pas possible.
 */
export function deleteTodo(id) {
    
}

// deleteTodo(3).then(() => fetchTodos()).then(() => console.table(todos))