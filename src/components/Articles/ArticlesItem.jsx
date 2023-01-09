const ArticlesItem = ({by="by", title="Title", description="description"}) => {
    return(
        <div className="px-4">
            <p className="text-xs text-GrayishBlue mb-2">{by}</p>
            <a href="#" className="text-DarkBlue hover:text-BrightCyan">{title}</a>
            <p className="text-base text-GrayishBlue mt-2">{description}</p>
        </div>
    )
}

export default ArticlesItem