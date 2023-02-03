import React from 'react';

const Layout = ({ title, children }) => {
    return (
        <main>
            <section className="flex bg-blue-700 text-white text-[25px] py-[20px] pl-[10%]">
                <h2 className="font-bold text-[25px]">{title}</h2>
            </section>
            <section className="grid grid-cols-10 justify-items-start px-[10%] pt-[10px]">
                {children}
                <aside className='col-span-2 mt-10 col-start-9'>
                    <div>
                        <p className='text-[13px] font-bold text-[#333333]'>Support this Project</p>
                    </div>
                    <div className="font-bold">
                            <p className='pt-4'>Lifeintheuktestweb has been created as 
                            a free source to help migrants prepare for the British Citizenship 
                            test. If you like this project and would like to help us maintain it 
                            please donate. <span className='text-blue-600'>Thanks and good luck!</span>
                        </p>
                    </div>
                    <div className='flex items-center justify-center pt-4'>
                        <button className='bg-yellow-400 rounded-full h-10 w-20 font-bold'>Donate</button>
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default Layout;