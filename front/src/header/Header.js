const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
            {/* style={{backgroundColor:'#FCF3E8'}} */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5" style={{width: '100%'}}>
                            <div className="header__top__right">
                                <div className="header__top__auth">
                                    <ul>
                                        <li><a href="#!" style={{textDecoration: 'none'}}>로그인</a></li>
                                        <li><a href="#!" style={{textDecoration: 'none'}}>공지</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;