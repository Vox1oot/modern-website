import React from 'react';
import { useTranslation } from 'react-i18next';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../styles';

const Billing = () => {
    const { t } = useTranslation();

    return (
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                <div className="absolute z-[3] -left-1/2 top-0 w-[70%] h-[70%] rounded-full white__gradient" />
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[70%] rounded-full pink__gradient" />
            </div>

            <div className={`${layout.sectionInfo} md:text-left max-w-[600px] `}>
                <h2 className={styles.heading2}>{`${t('billing_h2')}`}</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{`${t('billing_p')}`}</p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-4">
                    <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                    <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Billing;
