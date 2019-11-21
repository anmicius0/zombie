import dispatcher from '../dispatcher'
import actionTypes from './actionTypes'

export const correctHit = () => {
    dispatcher.dispatch(
        {
            actionType: actionTypes.CORRECT_HIT
        }
    )
}