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
            <h1>Click Here For a Random Giphy</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Get Random Giphy</button>
            </form>
        </div>
    )
}