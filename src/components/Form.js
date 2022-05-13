import { useState } from "react"

export default function Form({getRandomGiphy}) {

    const [formState, setFormState] = useState({
        randomGiphy: "tag=&rating=g"
    })

    const handleSubmit = (evt) => {
        evt.preventDefault()
        getRandomGiphy(formState.randomGiphy)
        setFormState({
            randomGiphy: "tag=&rating=g"
        })
    }
    return (
        <div>
            <h1 className="title">Giphy Browser</h1>
            <form onSubmit={handleSubmit}>
                <button className="btn" type="submit">Get Random Giphy</button>
            </form>
        </div>
    )
}