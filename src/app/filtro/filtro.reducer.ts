import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';
 
export const initialState: filtrosValidos = 'completados';
 
const _filtroReducer = createReducer(initialState,
  on(setFiltro, (state, { filtro }) => filtro as filtrosValidos)
);
 
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}