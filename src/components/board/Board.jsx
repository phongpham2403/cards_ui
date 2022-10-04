import classNames from "classnames/bind"
import React, { useContext, useEffect, useRef, useState } from "react"
import { CardContext } from "../../context/showCard"
import styles from "./Board.module.scss"

const cx = classNames.bind(styles)

const Board = () => {
    const [cardsQty, setCardsQty] = useState(52)
    const [share, setShare] = useState(false)
    const cardContext = useContext(CardContext)
    const { setShowBack, setShowFront, setReset, setCoins, setPoints } = cardContext
    let timerId = useRef()

    const img = document.getElementsByClassName("img")
    const css = window.document.styleSheets[0]
    css.insertRule(
        `
        @keyframes fadeRight {
            from {
                left: 0px;
            }
            to {
                left: 300px
            }
        }
    `,
        css.cssRules.length
    )
    css.insertRule(
        `
        @keyframes fadeLeft {
            from {
                right: 0px;
            }
            to {
                right: 300px
            }
        }
    `,
        css.cssRules.length
    )
    css.insertRule(
        `
        @keyframes fadeTop {
            from {
                bottom: 0px;
            }
            to {
                bottom: 200px
            }
        }
    `,
        css.cssRules.length
    )
    css.insertRule(
        `
        @keyframes fadeBottom {
            from {
                top: 0px;
            }
            to {
                top: 200px
            }
        }
    `,
        css.cssRules.length
    )

    function handleDrawn() {
        timerId.current = setInterval(() => {
            setCardsQty((prevState) => prevState - 1)
            setShare(true)
            setReset(false)
            setShowBack(true)
        }, 1000)
    }

    function handleShuffle() {
        alert("Bạn có muốn chơi lại từ đầu?")
    }

    function handleReveal() {
        setShowFront(true)
        setCardsQty(40)
        setCoins([4100, 5000, 4100, 4100])
        setPoints([30, 19, 16, 17])
    }

    useEffect(() => {
        if (share) {
            img[1].style.animation = "fadeRight 1s backwards"
            img[2].style.animation = "fadeTop 1s 1s backwards"
            img[3].style.animation = "fadeBottom 1s 3s backwards"
            img[4].style.animation = "fadeLeft 1s 2s backwards"
        }
    }, [img, share])

    useEffect(() => {
        if (cardsQty === 40) {
            clearInterval(timerId.current)
        } else if (cardsQty === 0) {
            cardContext.setReset(true)
        }

        if (cardContext.reset) {
            setCardsQty(52)
        }
    }, [cardContext, cardsQty, timerId])

    return (
        <div className={cx("wrapper")}>
            <p style={{ marginBottom: 10 }}>
                Click <span style={{ fontWeight: 600 }}>Drawn</span> to start!
            </p>
            <div className={cx("card")}>
                <img
                    className="img"
                    alt="card"
                    src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                />
                <img
                    className="img"
                    style={{ position: "absolute", right: 0 }}
                    alt="card"
                    src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                />
                <img
                    className="img"
                    style={{ position: "absolute", right: 0 }}
                    alt="card"
                    src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                />
                <img
                    className="img"
                    style={{ position: "absolute", right: 0 }}
                    alt="card"
                    src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                />
                <img
                    className="img"
                    style={{ position: "absolute", right: 0 }}
                    alt="card"
                    src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                />
            </div>
            <div className={cx("deck")}>
                <span>
                    Deck Cards <span className={cx("deck_qty")}>{!cardContext.reset ? cardsQty : 52}</span>
                </span>
            </div>
            <div className={cx("action")}>
                <div onClick={handleShuffle} className={cx("shuffle", "btn")}>
                    <span>Shuffle</span>
                </div>
                <div onClick={handleDrawn} className={cx("drawn", "btn")}>
                    <span>Drawn</span>
                </div>
                <div onClick={handleReveal} className={cx("reveal", "btn")}>
                    <span>Reveal</span>
                </div>
            </div>
        </div>
    )
}

export default Board
