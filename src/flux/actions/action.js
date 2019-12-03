import dispatcher from '../dispatcher'
import actionTypes from './actionTypes'

export const correctHit = (prevUpcoming) => {
    dispatcher.dispatch(
        {
            actionType: actionTypes.HIT,
            prevUpcoming: prevUpcoming
        }
    )
}