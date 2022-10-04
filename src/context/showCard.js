import { createContext, useState } from "react"

export const CardContext = createContext()

function CardProvider({ children }) {
    const [showBack, setShowBack] = useState(false)
    const [showFront, setShowFront] = useState(false)
    const [reset, setReset] = useState(false)
    const [coins, setCoins] = useState([5000, 5000, 5000, 5000])
    const [points, setPoints] = useState([0, 0, 0, 0])
    const value = {
        showBack,
        showFront,
        reset,
        points,
        setPoints,
        coins,
        setCoins,
        setReset,
        setShowBack,
        setShowFront,
    }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export default CardProvider
