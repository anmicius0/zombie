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
        gameActions.Hit(parseInt(e.key) - 1)
    }

    return (
        <div id={'gameBoard'}>
            {
                upcoming.reverse().map(item => {
                    switch (item) {
                        case 0:
                            return (
                                <div className={'row'}>
                                    <span className={"left"}>
                                        <img src={logo} alt='logo'></img>
                                    </span>
                                    <span className={"middle"}></span>
                                    <span className={"right"}></span>
                                </div>
                            )
                            break
                        case 1:
                            return (
                                <div className={'row'}>
                                    <span className={"left"}>
                                    </span>
                                    <span className={"middle"}>
                                        <img src={logo} alt='logo'></img>
                                    </span>
                                    <span className={"right"}></span>
                                </div>
                            )
                            break
                        case 2:
                            return (
                                <div className={'row'}>
                                    <span className={"left"}>
                                    </span>
                                    <span className={"middle"}>
                                    </span>
                                    <span className={"right"}>
                                        <img src={logo} alt='logo'></img>
                                    </span>
                                </div>
                            )
                            break
                        default:
                    }

                })
            }
            <div className={'row hitbar'}>
                <span className={"left"} onClick={() => {
                    gameActions.Hit(0)
                }}>
                </span>
                <span className={"middle"} onClick={() => {
                    gameActions.Hit(1)
                }}
                >
                </span>
                <span className={"right"} onClick={() => {
                    gameActions.Hit(2)
                }}
                >
                </span>
            </div>
        </div>
    )
}

export default Game