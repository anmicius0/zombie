import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from '../actions/actionTypes'

const HIT = 'hit'
let _upcoming = []

class gameStore extends EventEmitter {
    addHitListener(callback) {
        this.on(HIT, callback)
    }

    removeHitListener(callback) {
        this.on(HIT, callback)
    }

    emitHit() {
        this.emit(HIT)
    }

    initialUpcoming() {
        for (var i = 0; i < 6; i++) {
            _upcoming.push(Math.floor(Math.random() * 3))
        }

        return _upcoming
    }

    getUpcoming() {
        return _upcoming
    }
}

const store = new gameStore()

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.CORRECT_HIT:
            _upcoming.push(Math.floor(Math.random() * 3))
            _upcoming.shift()
            store.emitHit()
            break
        default:
    }
})

export default store
