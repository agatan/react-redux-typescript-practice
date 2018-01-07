import { Action } from 'redux';

import { VisibilityFilter } from '../states/VisibilityState';

export enum TodoActionType {
    ADD_TODO = 'todo/add',
    TOGGLE_TODO = 'todo/toggle',
}

export interface AddTodoAction extends Action {
    type: TodoActionType.ADD_TODO;
    id: number;
    text: string;
}

export interface ToggleTodoAction extends Action {
    type: TodoActionType.TOGGLE_TODO;
    id: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction;

let nextTodoId = 0;

export function addTodo(text: string): AddTodoAction {
    return {
        type: TodoActionType.ADD_TODO,
        id: nextTodoId++,
        text: text,
    };
}

export function toggleTodo(id: number): ToggleTodoAction {
    return {
        type: TodoActionType.TOGGLE_TODO,
        id: id,
    };
}

export enum VisibilityActionType {
    SET_VISIBILITY_FILTER = 'todo/set-visibility-filter',
}

export interface SetVisibilityFilterAction extends Action {
    type: VisibilityActionType.SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
}

export type VisibilityAction = SetVisibilityFilterAction;

export function setVisibilityFilter(filter: VisibilityFilter): SetVisibilityFilterAction {
    return {
        type: VisibilityActionType.SET_VISIBILITY_FILTER,
        filter,
    };
}
