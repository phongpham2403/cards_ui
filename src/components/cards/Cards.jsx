import React from "react"
import classNames from "classnames/bind"
import styles from "./Cards.module.scss"

const cx = classNames.bind(styles)

const Cards = ({ src, showFront, showBack }) => {
    return (
        <div style={showBack ? { display: "block" } : {}} className={cx("wrapper")}>
            <div className={cx("image")}>
                <img alt="cards" src={src} />
                {!showFront && (
                    <img
                        alt="back"
                        src="https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/back_wxkkbl.png"
                    />
                )}
            </div>
        </div>
    )
}

export default Cards
