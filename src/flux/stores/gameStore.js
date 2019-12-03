import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from '../actions/actionTypes'

const HIT = 'hit'
let _upcoming = []
for (var i = 0; i < 5; i++) {
    _upcoming.push(Math.floor(Math.random() * 3))
}

class gameStore extends EventEmitter {
    addHitListener(callback) {
        this.on(HIT, callback)
    }

    removeHitListener(callback) {
        this.removeListener(HIT, callback)
    }

    emitHit() {
        this.emit(HIT)
    }

    getUpcoming() {
        return _upcoming.slice()
    }
}

const store = new gameStore()

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.HIT:
            _upcoming.push(Math.floor(Math.random() * 3))
            _upcoming.shift()
            store.emitHit()
            break
        default:
    }
})

export default store
