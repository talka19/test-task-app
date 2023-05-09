import './LoadMoreBtn.css'

export default function LoadMoreBtn({ handleLoadMore }) {
    return(
        <>
        <button className="load_more_btn" type="button" onClick={handleLoadMore}>Load more...</button>
        </>
    )
}