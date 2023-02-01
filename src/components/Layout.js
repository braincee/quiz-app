import React from 'react';

const Layout = ({ title, children }) => {
    return (
        <main>
            <section className="flex bg-blue-700 text-white text-[25px] py-[20px] pl-[10%]">
                <h2 className="font-bold text-[25px]">{title}</h2>
            </section>
            {children}
        </main>
    )
}

export default Layout;