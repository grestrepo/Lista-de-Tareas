import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] creartodo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggletodo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] editartodo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] borrartodo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] toggleAlltodos',
    props<{ complete: boolean }>()
)

export const cleanComplete = createAction('[TODO] cleanComplete')