import './Preloader.css';
import React, { useEffect, useState, Fragment } from 'react';
import preloader from '../../assets/img/video/preloader.gif'

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setShowMessage(true);
        }, 8000);
    }, []);

    return (
        isLoading && (
            <Fragment>
                <div className="preloader">
                    <img src={preloader} alt="Logo" className="preloader-logo" />
                </div>
                {showMessage && (
                    <div className="preloader-message">
                        <p>Bienvenido, estamos prepando todo...</p>
                    </div>
                )}
            </Fragment>
        )
    );
};

export default Preloader;
