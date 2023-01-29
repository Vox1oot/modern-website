import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({ styles }) => {
    const { t } = useTranslation();

    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg ${styles}`}>
            {`${t('getStarted.get')} ${t('getStarted.started')}`}
        </button>
    );
};

export default Button;
