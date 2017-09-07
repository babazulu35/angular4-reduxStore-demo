
import { Action } from '@ngrx/store';
import { Iitem } from './model/iitem';


export const ADD_ITEM = 'ADD_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export class AddItemAction implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: any ) {}
}

export class CreateItemAction implements Action {
    readonly type = CREATE_ITEM;
    constructor(public payload: any ){}
}

export class UpdateItemAction implements Action {
    readonly type = UPDATE_ITEM;
    constructor(public payload: any ) {}
}

export class DeleteItemAction implements Action  {
    readonly type = DELETE_ITEM;
    constructor( public payload: any ){}
}

export type Actions = AddItemAction | CreateItemAction | UpdateItemAction | DeleteItemAction;
 