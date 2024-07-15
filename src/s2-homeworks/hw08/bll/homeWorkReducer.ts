import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name

      if (action.payload === 'up') {
        return [...state].sort((a:any, b:any): any => a.name.localeCompare(b.name))
      }

      if (action.payload === 'down') {

        return [...state].sort((a:any, b:any): any => b.name.localeCompare(a.name))
      }

      return state
    }
    case 'check': {
      return state.filter((user:any) => user.age > action.payload)
    }
    default:
      return state
  }
}
