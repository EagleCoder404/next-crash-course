import articleStyles from "../styles/Article.module.css"
import Article from "./Article"

const ArticleList = ({articles}) => {
    const articleCompoenets = articles.map( article => <Article key={article.id} article={article}/>)
    return(
        <div className={articleStyles.grid}>
            {articleCompoenets}
        </div>
    )
}

export default ArticleList