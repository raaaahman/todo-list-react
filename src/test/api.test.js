import { createFetchMock } from './helpers'
import {
    todos,
    fetchTodos,
    postTodo,
    fetchTodo,
    updateTodo,
    deleteTodo
} from '../api'



describe('Le tableau "todos"', () => {
    it('est exporté du fichier "api.js"', () => {
        expect(todos).toBeDefined()
        expect(todos).toBeInstanceOf(Array)
    })

    it('est par défaut un tableau vide', () => {
        expect(todos).toHaveLength(0)
    })
})

describe('La fonction "fetchTodos"', () => {
    const stubData = [
        { 
            id: 0,
            label: 'Hello World!',
            complete: false,
            creationDate: new Date(2022, 3, 7)
        },
        {
            id: 1,
            label: 'How are you today?',
            complete: true,
            creationDate: new Date(2022, 3, 14)
        },
        {
            id: 2,
            label: 'Fine thank you!',
            complete: false,
            creationDate: new Date(2022, 3, 15)
        }
    ]

    beforeEach(() => createFetchMock(stubData))

    it('est exportée du fichier "api.js"', () => {
        expect(fetchTodos).toBeDefined()
    })

    it('appelle la fonction "fetch" avec l\'url "/api/v1/todos" comme paramètre', async () => {
        await fetchTodos()

        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toContain('/api/v1/todos')
    })

    it('stocke les données récupérées dans le tableau "todos"', async () => {
        await fetchTodos()

        expect(todos).not.toHaveLength(0)
        expect(todos).toEqual(stubData)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })
})

describe('La fonction "postTodo"', () => {
    const stubJson = "{ \"id\": 3, \"label\": 'Not so fast!', \"complete\": true, \"creationDate\": 2022-04-07T00:00:000Z }"

    beforeEach(() => {
        createFetchMock()
        jest.spyOn(JSON, 'stringify').mockReturnValue(
            stubJson
        )
    })

    it('reçoit un paramètre, il s\'agit d\'un objet correspondant à une nouvelle tâche que l\'on souhaite enregistrer', () => {
        expect(postTodo).toBeInstanceOf(Function)
        expect(postTodo.length).toEqual(1)
    })

    it('appelle la méthode "JSON.stringify()" en lui passant le paramètre reçu', async () => {
        const arg = {
            id: 0,
            label: 'Hello You!',
            complete: false,
            creationDate: new Date(2022, 3, 12)
        }

        await postTodo(arg)

        expect(JSON.stringify).toHaveBeenCalledWith(arg)
    })

    it('appelle la fonction "fetch" avec l\'url "/api/v1/todos" comme premier paramètre', async () => {
        await postTodo({
            id: 1,
            label: 'Hello Yourself!',
            complete: false,
            creationDate: new Date(2022, 2, 21)
        })

        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toContain('/api/v1/todos')
    })

    describe('appelle la fonction "fetch" avec un objet comme second paramètre', () => {
        it('cet objet a une propriété "method" dont la valeur est "POST"', async () => {
            await postTodo({
                id: 2,
                label: 'How are you?',
                complete: true,
                creationDate: new Date(2022, 1, 12)
            })

            expect(fetch.mock.calls[0][1]).toHaveProperty('method')
            expect(fetch.mock.calls[0][1].method).toMatch(/POST/i)
        })

        it('cet objet a une propriété "headers" qui est un objet,avec une propriété "Content-Type" (utiliser des guillemets et majuscules) dont la valeur est "application/json"', async () => {
            await postTodo({
                id: 3,
                label: 'I am fine, thank you',
                complete: false,
                creationDate: new Date(2022, 2, 13)
            })

            expect(fetch.mock.calls[0][1]).toHaveProperty('headers', {
                'Content-Type': 'application/json'
            })
        })

        it('cet objet a une propriété "body" qui est une chaîne de caractère correspondant à la valeur produite par la méthode "JSON.stringify"', async () => {
            const arg = {
                id: 1,
                label: 'Hello World!',
                complete: false,
                creationDate: new Date(2022, 3, 8)
            }

            await postTodo(arg)

            expect(fetch.mock.calls[0][1].body).toEqual(stubJson)
        })
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })
})

describe('La fonction "fetchTodo" ', () => {
    const stubData = {
        id: 1,
        label: 'Now I\'m here!',
        complete: false,
        creationDate: new Date(2022, 1, 15)
    }

    beforeEach(() => createFetchMock(stubData))

    it('reçoit un paramètre, qui est un nombre indiquant un identifiant de tâche à récupérer', async () => {
        expect(fetchTodo).toBeInstanceOf(Function)
        expect(fetchTodo.length).toEqual(1)
    })
    
    it('appelle la fonction "fetch" avec l\'url "/api/v1/todos/:id" comme premier paramètre, où ":id" est remplacé par le nombre reçu en paramètre', async() => {
        await fetchTodo(0)
        await fetchTodo(1)

        expect(fetch.mock.calls[0][0]).toContain('/api/v1/todos/0')
        expect(fetch.mock.calls[1][0]).toContain('/api/v1/todos/1')
    })

    it('modifie le tableau "todos" pour ne contenir que l\'objet récupéré de la requête', async () => {
        await fetchTodo(1)

        expect(todos).toEqual([
            stubData
        ])
    })

    afterEach(() => {
        jest.restoreAllMocks()
        todos.splice(0, todos.length)
    })
})


describe('La fonction "updateTodo"', () => {
    const stubData = [
        {
            id: 2,
            label: 'Hello World!',
            complete: true,
            creationDate: new Date(2022, 1, 15)
        }
    ]
    const stubJson = '{ "id": 1, "label": "Hello World!", "complete": true, "creationDate": 2022-2-15T00:00:000Z }'

    beforeEach(() => {
        createFetchMock(stubData)
        jest.spyOn(JSON, 'stringify').mockReturnValue(
            stubJson
        )
    })

    it('reçoit deux paramètres, le premier est l\'identifiant de la tâche à modifier, le second est un objet pour remplacer la tâche existante.', () => {
        expect(updateTodo).toBeInstanceOf(Function)
        expect(updateTodo.length).toEqual(2)
    })

    it('appelle la fonction "fetch" avec l\'url "/api/v1/todos/:id" comme premier paramètre, où :id est remplacé par le nombre donné en premier paramètre de la fonction "updateTodo"', async () => {
        await updateTodo(1, {
            id: 1,
            label: 'Hello World',
            complete: true,
            creationDate: new Date(2022, 1, 15)
        })
        await updateTodo(2, {
            id: 2,
            label: 'How are you today?',
            complete: false,
            creationDate: new Date(2022, 2, 7)
        })

        expect(fetch).toHaveBeenCalledTimes(2)
        expect(fetch.mock.calls[0][0]).toContain('/api/v1/todos/1')
        expect(fetch.mock.calls[1][0]).toContain('/api/v1/todos/2')
    })

    it('appelle la méthode "JSON.stringify" en lui passant un objet en premier paramètre, cet objet est l\'objet reçu en second paramètre de la fonction "updateTodo"', async () => {
        const arg = {
            id: 1,
            label: 'Hello World',
            complete: true,
            creationDate: new Date(2022, 1, 15)
        }

        await updateTodo(1, arg)

        expect(JSON.stringify).toHaveBeenCalledTimes(1)
        expect(JSON.stringify.mock.calls[0][0]).toEqual(arg)
    })

    describe('appelle la méthode "fetch" avec un objet comme second paramètre', () => {
        it('cet objet a une propriété "method" dont la valeur est la chaîne de caractère "PATCH"', async () => {
            const arg = {
                id: 1,
                label: 'Hello World',
                complete: true,
                creationDate: new Date(2022, 1, 15)
            }
    
            await updateTodo(1, arg)

            expect(fetch.mock.calls[0][1]).toHaveProperty('method')
            expect(fetch.mock.calls[0][1].method).toMatch(/PATCH/i)
        })

        it('cet objet a une propriété "headers" qui est un objet, avec une propriété "Content-Type" (utiliser les guillmets et majuscules) dont la valeur est "application/json"', async () => {
            const arg = {
                id: 1,
                label: 'Hello World',
                complete: true,
                creationDate: new Date(2022, 1, 15)
            }
    
            await updateTodo(1, arg)

            expect(fetch.mock.calls[0][1]).toHaveProperty('headers', {
                'Content-Type': 'application/json'
            })
        })

        it('cet objet a une propriété "body" qui est une chaîne de caractère, correspondant au résultat de la méthode "JSON.stringify"', async () => {
            const arg = {
                id: 1,
                label: 'Hello World',
                complete: true,
                creationDate: new Date(2022, 1, 15)
            }
    
            await updateTodo(1, arg)

            expect(fetch.mock.calls[0][1]).toHaveProperty('body', stubJson)
        })
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })
})

describe('La fonction "deleteTodo"', () => {
    beforeEach(() => createFetchMock())

    it('reçoit un paramètre, qui est l\'identifiant de la tâche à supprimer', () => {
        expect(deleteTodo).toBeInstanceOf(Function)
        expect(deleteTodo.length).toEqual(1)
    })

    it('appelle la fonction "fetch" avec l\'url "/api/v1/todos/:id" comme premier paramètre, où :id est remplacé par le nombre donné en premier paramètre de la fonction "deleteTodo"', async () => {
        await deleteTodo(2)
        await deleteTodo(3)

        expect(fetch).toHaveBeenCalledTimes(2)
        expect(fetch.mock.calls[0][0]).toContain('/api/v1/todos/2')
        expect(fetch.mock.calls[1][0]).toContain('/api/v1/todos/3')
    })

    describe('appelle la fonction "fetch" avec un objet comme second paramètre', () => {
        it('cet objet a une propriété "method" dont la valeur est "DELETE"', async () => {
            await deleteTodo(2)

            expect(fetch.mock.calls[0][1]).toHaveProperty('method')
            expect(fetch.mock.calls[0][1].method).toMatch(/DELETE/i)
        })
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })
})