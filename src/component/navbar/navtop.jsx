import React from 'react'


const NavTop = ({sticky}) => {
    return (
        <nav className={sticky ? "notshow" : "navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"} >
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-envelope mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        <i className="fa fa-phone mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:">0122222222</a>
                    </div>
                   
                </div>
            </div>
        </nav>
        

    );
}

export default NavTop;