import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import { arrowUp } from '../assets';

const GetStarted = () => {
    const { t } = useTranslation();

    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">{`${t('getStarted.get')}`}</span>
                    </p>
                    <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
                </div>

                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">{`${t('getStarted.started')}`}</span>
                </p>
            </div>
        </div>
    );
};

export default GetStarted;
