import React, { useContext, useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from "./Area.module.scss"
import Cards from "../cards"
import User from "../user"
import { CardContext } from "../../context/showCard"

const cx = classNames.bind(styles)

const UserArea = ({ reverse, position, data, userList, coin, point }) => {
    let styles = {}
    const cardContext = useContext(CardContext)

    switch (position) {
        case "left":
            styles = {
                top: "35%",
                transform: "rotate(90deg)",
            }
            break
        case "right":
            styles = {
                right: "20px",
                top: "35%",
                transform: "rotate(270deg)",
            }
            break
        case "bottom":
            styles = {
                right: "50%",
                transform: "translate(50%)",
                bottom: "10px",
            }
            break
        default:
            styles = {
                top: "10px",
                right: "50%",
                transform: "translate(50%)",
                flexDirection: "column-reverse",
            }
    }

    return (
        <div style={{ ...styles }} className={cx("wrapper")}>
            {point === 19 && !cardContext.reset ? (
                <div className={cx("message")}>
                    <span>Winner</span>
                </div>
            ) : null}
            <div style={reverse && { marginBottom: 2, marginTop: 14 }} className={cx("card_list")}>
                <Cards showFront={cardContext.showFront} showBack={cardContext.showBack} src={data.img1} />
                <Cards showFront={cardContext.showFront} showBack={cardContext.showBack} src={data.img2} />
                <Cards showFront={cardContext.showFront} showBack={cardContext.showBack} src={data.img3} />
            </div>
            <div className={cx("user")}>
                <User point={point} coin={coin} userList={userList} />
            </div>
        </div>
    )
}

export default UserArea
