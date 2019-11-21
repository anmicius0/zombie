import React, { useEffect, useState } from "react"
import gameStore from '../flux/stores/gameStore'
import * as gameActions from '../flux/actions/action'


const Game = () => {
    const [upcoming, setUpcoming] = useState(gameStore.initialUpcoming())

    useEffect(() => {
        gameStore.addHitListener(update)
        document.addEventListener('keydown', check)
        return () => {
            gameStore.removeHitListener(update)
            document.removeEventListener('keydown', check)
        }
    }, [])

    function update() {
        setUpcoming(gameStore.getUpcoming())
        console.log(upcoming)
    }

    function check(e) {
        console.log(e.key)
        if (parseInt(e.key) === upcoming[0]) {
            gameActions.correctHit()
        }
    }

    return (
        < main >
            {upcoming}
        </main >
    )
}

export default Game