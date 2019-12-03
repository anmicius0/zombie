import dispatcher from '../dispatcher'
import actionTypes from './actionTypes'

export const Hit = (key) => {
    dispatcher.dispatch(
        {
            actionType: actionTypes.HIT,
            key: key
        }
    )
}