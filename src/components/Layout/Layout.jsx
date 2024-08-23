import React from 'react'
// Components
import Header from '../Header/Header'
// ----------------------------------------------------------
const Layout = ({ showSearch, children }) => {
    // ------- JSX Code --------
    return (
        <>
            <Header showSearch={showSearch} />
            <main
                className='layout-container'
                style={{ width: '100%', minHeight: '100vh', }}>
                {children}
            </main>
        </>
    )
}

export default Layout
