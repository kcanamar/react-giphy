export default function GiphyDisplay( { giphy }) {
    
    if (giphy) {
        const { data } = giphy
        const { title, images } = data
        return (
            <div>
                <h4 className="giphy-title">{title}</h4>
                <img src={images.downsized_large.url} alt={title} />

            </div>
        )
    }
}