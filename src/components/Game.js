import React, { useEffect, useState } from "react"
import gameStore from '../flux/stores/gameStore'
import * as gameActions from '../flux/actions/action'
import logo from '../images/gatsby.png'

const Game = () => {
    const [upcoming, setUpcoming] = useState(gameStore.getUpcoming())

    useEffect(() => {
        gameStore.addHitListener(update)
        document.addEventListener('keydown', check)
        console.log(upcoming)
        return () => {
            gameStore.removeHitListener(update)
            document.removeEventListener('keydown', check)
            console.log('removed')
        }
    }, [upcoming])

    function update() {
        setUpcoming(gameStore.getUpcoming())
        console.log(upcoming)
    }

    function check(e) {
        if ((parseInt(e.key) - 1) === upcoming[upcoming.length - 1]) {
            gameActions.correctHit(upcoming)
        }
    }


    return (
        < main >
            <div id={'gameBoard'}>
                {
                    upcoming.reverse().map(item => {
                        switch (item) {
                            case 0:
                                return (
                                    <div className={'row left'}>
                                        <img src={logo} alt='logo   '></img>
                                    </div>
                                )
                                break
                            case 1:
                                return (
                                    <div className={'row middle'}>
                                        <img src={logo} alt='logo   '></img>
                                    </div>
                                )
                                break
                            case 2:
                                return (
                                    <div className={'row right'}>
                                        <img src={logo} alt='logo   '></img>
                                    </div>
                                )
                                break
                            default:
                        }

                    })
                }

            </div>
        </main >
    )
}

export default Game