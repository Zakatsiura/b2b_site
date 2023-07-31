interface Slide {
    title: string;
    description: string;
    urls: string;
}

interface DotsProps {
    activeIndex: number;
    onClick: (index: number) => void;
    sliderImage: Slide[];
}

function Dots({ activeIndex, onClick, sliderImage }: DotsProps) {
    return (
        <>
            <div className="all-dots">
                {sliderImage.map((slide: Slide, index: number) => (
                    <span
                        key={index}
                        className={`${
                            activeIndex === index ? 'dot active-dot' : 'dot'
                        }`}
                        onClick={() => onClick(index)}
                    ></span>
                ))}
            </div>
        </>
    );
}

export default Dots;
