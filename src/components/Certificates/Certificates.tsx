import Modal from 'react-modal';
import { useState, useContext } from 'react';

import styles from './Certificates.module.css';
import { LanguageContext } from '../../context/languageContext';
import { ScrollToTopButton } from '../ScrollToTopButton/ScrollToTopButton';
import { locales } from '../../locales/locales';

import MRO_Airbus from '../../assets/certificates/MRO_Airbus.png';
import AOC from '../../assets/certificates/AOC.png';
import MOAC from '../../assets/certificates/MOAC.png';
import MOAC_1 from '../../assets/certificates/MOAC_1.png';
import CAMO from '../../assets/certificates/CAMO.png';
import CAMO_1 from '../../assets/certificates/CAMO_1.png';
import DIST_en from '../../assets/certificates/DIST_en.png';
import DIST_ua from '../../assets/certificates/DIST_ua.png';

const imagePaths = [
    MRO_Airbus,
    AOC,
    MOAC,
    MOAC_1,
    CAMO,
    CAMO_1,
    DIST_en,
    DIST_ua,
];

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
            {Array.from({ length: Math.ceil(imagePaths.length / 2) }).map(
                (_, index) => (
                    <div key={index} className={styles.imageRow}>
                        {imagePaths
                            .slice(index * 2, index * 2 + 2)
                            .map((imagePath, i) => (
                                <div key={i} className={styles.imageContainer}>
                                    <img
                                        src={imagePath}
                                        alt={`Certificate ${index * 2 + i + 1}`}
                                        className={styles.image}
                                        onClick={() => openModal(imagePath)}
                                    />
                                </div>
                            ))}
                    </div>
                )
            )}
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
                        alt="Enlarged Certificate"
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
