import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('vencer a Thanos'),
  new Todo('Comprar el traje de ironman'),
  new Todo('Robar escudo del capitán america')
];
 
const _todoReducer = createReducer(estadoInicial,
  on(actions.crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        };
      }else{
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          texto
        };
      }else{
        return todo;
      }
    });
  }),
  on(actions.borrar, (state, {id}) => state.filter(element => element.id != id)),
  on(actions.toggleAll, (state, {complete}) => state.map(todo => {
    return {
      ...todo,
      completado: complete
    }
  })),
  on(actions.cleanComplete, (state) => {
    return state.filter(todo => !todo.completado);
  })
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}