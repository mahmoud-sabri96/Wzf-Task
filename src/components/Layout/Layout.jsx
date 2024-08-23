import React from 'react'
import Header from '../Header/Header'

// ----------------------------------------------------------



const Layout = ({ showSearch, children }) => {

    // ------- JSX Code --------
    return (
        <>
            <Header showSearch={showSearch} />

            <main style={{width: '100%', minHeight:'100vh', background:'#09c'}}>
                {children}
            </main>

        </>
    )
}

export default Layout
