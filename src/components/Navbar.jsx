import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { close, logo, menu } from '../assets';

const Navbar = () => {
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank-logo" className="w-[7rem] h-[4rem]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <li className="font-poppins cursor-pointer text-[16px] text-white mr-10">{t('navLinks.home')}</li>
                <li className="font-poppins cursor-pointer text-[16px] text-white mr-10">{t('navLinks.features')}</li>
                <li className="font-poppins cursor-pointer text-[16px] text-white mr-10">{t('navLinks.product')}</li>
                <li className="font-poppins cursor-pointer text-[16px] text-white">{t('navLinks.clients')}</li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <button type="button" onClick={() => setToggle((prev) => !prev)}>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-fill "
                    />
                </button>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-br from-[#5ce1e6] to-blue-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        <li className="font-poppins cursor-pointer text-[16px] text-white mb-4">{t('navLinks.home')}</li>
                        <li className="font-poppins cursor-pointer text-[16px] text-white mb-4">{t('navLinks.features')}</li>
                        <li className="font-poppins cursor-pointer text-[16px] text-white mb-4">{t('navLinks.product')}</li>
                        <li className="font-poppins cursor-pointer text-[16px] text-white">{t('navLinks.clients')}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
