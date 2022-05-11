export default function GiphyDisplay( { giphy }) {
    
    if (giphy) {
        const { data } = giphy
        const { title, images } = data
        return (
            <div>
                <h1>Giphy Display</h1>
                <h4>{title}</h4>
                <img src={images.downsized_large.url} alt={title} />

            </div>
        )
    } else {
        return <h1>Click To See a Random Giphy</h1>
    }
}