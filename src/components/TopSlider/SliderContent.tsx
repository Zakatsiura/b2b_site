function SliderContent({
    activeIndex,
    sliderImage,
}: {
    activeIndex: number;
    sliderImage: { title: string; description: string; urls: string }[];
}) {
    return (
        <>
            {sliderImage.map(
                (
                    slide: { title: string; description: string; urls: string },
                    index: number
                ) => (
                    <div
                        key={index}
                        className={
                            index === activeIndex ? 'slides active' : 'inactive'
                        }
                    >
                        <img className="slide-image" src={slide.urls} alt="" />
                        <h2 className="slide-title">{slide.title}</h2>
                        <h3 className="slide-text">{slide.description}</h3>
                    </div>
                )
            )}
        </>
    );
}

export default SliderContent;
