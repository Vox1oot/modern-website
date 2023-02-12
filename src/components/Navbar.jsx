import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { close, logo, menu } from '../assets';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState(i18n.language);

    console.log(language);

    const toggleLanguage = () => {
        const nextLanguage = language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
        setLanguage(nextLanguage);
    };

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank-logo" className="w-[7rem] h-[4rem]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <li className="font-poppins cursor-pointer text-[18px] text-white mr-10"><a href="#home">{t('navLinks.home')}</a></li>
                <li className="font-poppins cursor-pointer text-[18px] text-white mr-10"><a href="#features">{t('navLinks.features')}</a></li>
                <li className="font-poppins cursor-pointer text-[18px] text-white mr-10"><a href="#product">{t('navLinks.product')}</a></li>
                <li className="font-poppins cursor-pointer text-[18px] text-white mr-10"><a href="#clients">{t('navLinks.clients')}</a></li>
                <button
                    className=" w-[40px] h-[40px] text-white text-[18px] border-2 rounded-full p-3 flex items-center justify-center"
                    type="button"
                    onClick={toggleLanguage}
                >
                    <span>{language}</span>
                </button>
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
                        <li className="font-poppins cursor-pointer text-[14px] text-white mb-4"><a href="#home">{t('navLinks.home')}</a></li>
                        <li className="font-poppins cursor-pointer text-[14px] text-white mb-4"><a href="#features">{t('navLinks.features')}</a></li>
                        <li className="font-poppins cursor-pointer text-[14px] text-white mb-4"><a href="#product">{t('navLinks.product')}</a></li>
                        <li className="font-poppins cursor-pointer text-[14px] text-white mb-4"><a href="#clients">{t('navLinks.clients')}</a></li>
                        <button
                            className="w-[100%] h-[2rem] text-white text-[16px] border-2 p-2 rounded-[10px] flex items-center justify-center"
                            onClick={toggleLanguage}
                            type="button"
                        >
                            <span>{language}</span>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
