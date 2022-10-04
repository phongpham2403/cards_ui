import React, { useContext } from "react"
import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import UserArea from "../../components/area"
import Board from "../../components/board"
import { CardContext } from "../../context/showCard"

const cx = classNames.bind(styles)

const Home = () => {
    const cartContext = useContext(CardContext)
    const { setShowBack, setShowFront, setReset, coins, points, setCoins, setPoints } = cartContext
    const data = [
        {
            img1: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804358/cards/q_4_bsumkv.png",
            img2: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804357/cards/j_4_irnne6.png",
            img3: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804357/cards/k_2_mdqjle.png",
        },
        {
            img1: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/a_3_dhrvmu.png",
            img2: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/10_3_atz3mj.png",
            img3: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804355/cards/8_4_jpsyl1.png",
        },
        {
            img1: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804355/cards/9_1_gyfwmu.png",
            img2: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804354/cards/7_3_hsxvt4.png",
            img3: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804356/cards/j_1_ebn3la.png",
        },
        {
            img1: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804355/cards/8_3_mwopne.png",
            img2: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804354/cards/6_3_xbtnjw.png",
            img3: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664804352/cards/3_1_bkftrp.png",
        },
    ]
    const userList = [
        {
            name: "Nguyen Van A",
            avatar: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664840591/cards/ava-4_ogjetc.png",
        },
        {
            name: "Nguyen Van B",
            avatar: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664840591/cards/ava-1_rwotgz.png",
        },
        {
            name: "Nguyen Van C",
            avatar: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664840591/cards/ava-5_baxjg5.png",
        },
        {
            name: "Me",
            avatar: "https://res.cloudinary.com/de4aiajqg/image/upload/v1664840591/cards/ava-2_sosxrv.png",
        },
    ]
    function handleReset() {
        setShowBack(false)
        setShowFront(false)
        setReset(true)
        setCoins([5000, 5000, 5000, 5000])
        setPoints([0, 0, 0, 0])
    }
    return (
        <div className={cx("wrapper")}>
            <div onClick={handleReset} className={cx("reset", "btn")}>
                <span>Reset</span>
            </div>
            <UserArea point={points[0]} coin={coins[0]} userList={userList[0]} data={data[0]} position="left" />
            <UserArea point={points[1]} coin={coins[1]} userList={userList[1]} data={data[1]} reverse position="top" />
            <UserArea point={points[2]} coin={coins[2]} userList={userList[2]} data={data[2]} position="right" />
            <UserArea point={points[3]} coin={coins[3]} userList={userList[3]} data={data[3]} position="bottom" />
            <Board />
        </div>
    )
}

export default Home
