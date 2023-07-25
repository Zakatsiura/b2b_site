import Modal from 'react-modal';
import { useState, useContext } from 'react';

import styles from './Certificates.module.css';
import { LanguageContext } from '../../context/languageContext';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton';
import { locales } from '../../locales/locales';
import image1 from '../../assets/certificates/MRO_Airbus.png';
import image2 from '../../assets/certificates/AOC.png';
import image3 from '../../assets/certificates/MOAC.png';
import image4 from '../../assets/certificates/MOAC_1.png';
import image5 from '../../assets/certificates/CAMO.png';
import image6 from '../../assets/certificates/CAMO_1.png';
import image7 from '../../assets/certificates/DIST_en.png';
import image8 from '../../assets/certificates/DIST_ua.png';

const Certificates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const languageContext = useContext(LanguageContext);

    if (!languageContext) {
        return null;
    }
    const { language } = languageContext;

    const openModal = (imageSrc: string) => {
        if (window.innerWidth > 900) {
            setSelectedImage(imageSrc);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {locales[language].certificates__titile}
            </h2>
            <div className={styles.imageRow}>
                <div className={styles.imageContainer}>
                    <img
                        src={image1}
                        alt="MRO certificate"
                        className={styles.image}
                        onClick={() => openModal(image1)}
                    />
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src={image2}
                        alt="AOC certificate"
                        className={styles.image}
                        onClick={() => openModal(image2)}
                    />
                </div>
            </div>
            <div className={styles.imageRow}>
                <div className={styles.imageContainer}>
                    <img
                        src={image3}
                        alt="MOAC certificate"
                        className={styles.image}
                        onClick={() => openModal(image3)}
                    />
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src={image4}
                        alt="MOAC_1 certificate"
                        className={styles.image}
                        onClick={() => openModal(image4)}
                    />
                </div>
            </div>
            <div className={styles.imageRow}>
                <div className={styles.imageContainer}>
                    <img
                        src={image5}
                        alt="CAMO certificate"
                        className={styles.image}
                        onClick={() => openModal(image5)}
                    />
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src={image6}
                        alt="CAMO_1 certificate"
                        className={styles.image}
                        onClick={() => openModal(image6)}
                    />
                </div>
            </div>
            <div className={styles.imageRow}>
                <div className={styles.imageContainer}>
                    <img
                        src={image7}
                        alt="DIST_en  certificate"
                        className={styles.image}
                        onClick={() => openModal(image7)}
                    />
                </div>
                <div className={styles.imageContainer}>
                    <img
                        src={image8}
                        alt="DIST_ua certificate"
                        className={styles.image}
                        onClick={() => openModal(image8)}
                    />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Enlarged Image"
                ariaHideApp={false}
                shouldCloseOnOverlayClick={true}
            >
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Enlarged Image"
                        className={styles.enlargedImage}
                        onClick={closeModal}
                    />
                )}
            </Modal>
            <ScrollToTopButton />
        </div>
    );
};

export default Certificates;
