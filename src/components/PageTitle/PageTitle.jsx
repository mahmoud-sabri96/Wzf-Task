
const PageTitle = ({ title, count }) => {
    // -------- JSX Code ----------
    return (
        <>
            <h2 className="page-title" >
                {title} {' '}
                { count && <span className="page-title">({count})</span> }
            </h2>
        </>
    )
}

export default PageTitle
