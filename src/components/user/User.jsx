import React, { useState } from "react"
import classNames from "classnames/bind"
import styles from "./User.module.scss"

const cx = classNames.bind(styles)

const User = ({ userList, coin, point }) => {
    return (
        <div style={{ position: "relative" }}>
            <div className={cx("wrapper")}>
                <div className={cx("info")}>
                    <div className={cx("name")}>
                        <div className={cx("avatar")}>
                            <img alt="avatar" src={userList.avatar} />
                        </div>
                        <div className={cx("user_name")}>
                            <p>{userList.name}</p>
                        </div>
                    </div>
                    <div className={cx("coin")}>
                        <span>
                            <i className="fa-solid fa-coins"></i>
                        </span>
                        <span className={"coin_qty"}>{coin}</span>
                    </div>
                    <div className={cx("point")}>
                        <span>
                            <i className="fa-solid fa-marker"></i>
                        </span>
                        <span>{point} Points</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
