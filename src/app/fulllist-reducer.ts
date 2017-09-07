

import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as fulllist from './fulllist-actions';

export interface State {
  pay: string
};

export const initialState: State = {
  pay:" "
};

export function reducer (state = initialState, action: fulllist.Actions): State {
    switch(action.type) {
    case fulllist.ADD_ITEM:
        const items = action.payload
        return Object.assign({},state,{
            pay:'Zartongo'
        })
    case fulllist.CREATE_ITEM:
       
    case fulllist.DELETE_ITEM:
       
    case fulllist.UPDATE_ITEM:
      
    default:
        return state;    
    }
}


