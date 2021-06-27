import headerStyles from  "../styles/Header.module.css"

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>
                    webDev
                </span>
                News
            </h1>
            <p className={headerStyles.description}>
                Lol who cares, something this, something that, ba da bing, ba da boom
            </p>
        </div>
    )
}

export default Header