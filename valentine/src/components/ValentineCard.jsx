import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaMusic, FaVolumeMute, FaPause } from "react-icons/fa";
import "../CSS/ValentineCard.css";
import CatSound from "../assets/animals-cat-blue-meow.mp3";
import NemerennoSound from "../assets/nemerenno.mp3";

const ValentineCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    // Анимация сердца
    const [scale, setScale] = useState(1);
    const heartAnimation = useSpring({
        transform: `scale(${scale})`,
        config: { tension: 300, friction: 10 },
    });

    // Анимация письма
    const letterAnimation = useSpring({
        opacity: showLetter ? 1 : 0,
        transform: showLetter ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
    });

    // Ссылка на аудиоэлемент
    const audioRef = useRef(null);

    // Обработчик нажатия на сердце
    const handlePress = () => {
        setScale(scale === 1 ? 1.5 : 1);
        // Воспроизведение звука кошки
        const catSound = new Audio(CatSound);
        catSound.play();
    };

    // Переключение фоновой музыки
    const toggleSound = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Пауза
        } else {
            audioRef.current.play(); // Воспроизведение
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="background">
            <div className="container">
                <button className="noteIcon" onClick={toggleSound}>
                    {isPlaying ? <FaPause size={28} /> : <FaMusic size={28} />}
                </button>
                <div className="centerContainer">
                    <button onClick={handlePress} style={{ background: "none", border: "none" }}>
                        <animated.div style={heartAnimation} className="heartContainer">
                            <svg width="100px" height="100px" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"><title/>
                                <path
                                    d="M19.5,22H14a1,1,0,0,1-1-1V20a1,1,0,0,1,1-1h5.5A1.5,1.5,0,0,1,21,20.5h0A1.5,1.5,0,0,1,19.5,22Z"
                                    fill="#4b5661"/>
                                <path d="M11,10h6a0,0,0,0,1,0,0V22a0,0,0,0,1,0,0H8a4,4,0,0,1-4-4V17A7,7,0,0,1,11,10Z"
                                      fill="#4b5661"/>
                                <path d="M12,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,12,22Z" fill="#fff"/>
                                <path d="M16,22h0a1,1,0,0,1-1-1V20h2v1A1,1,0,0,1,16,22Z" fill="#fff"/>
                                <path d="M14,14h0a2.99994,2.99994,0,0,1-3-3V9h6v2A2.99994,2.99994,0,0,1,14,14Z"
                                      fill="#fff"/>
                                <path d="M13,4,10,6V2.2071a.5.5,0,0,1,.8536-.3535Z" fill="#ff888b"/>
                                <path d="M15,4l3,2V2.2071a.5.5,0,0,0-.8536-.3535Z" fill="#ff888b"/>
                                <path d="M14,11h0a4,4,0,0,1-4-4V4h8V7A4.00005,4.00005,0,0,1,14,11Z"
                                      fill="#4b5661"/>
                                <circle cx="12.25" cy="6.75" r="0.75" fill="#fff"/>
                                <circle cx="16" cy="6.75" r="0.75" fill="#fff"/>
                            </svg>
                        </animated.div>
                    </button>
                    <button className="button" onClick={() => setShowLetter(!showLetter)}>
                        💌 Открыть письмо
                    </button>
                    {showLetter && (
                        <animated.div style={letterAnimation} className="letterContainer">
                            <h2 className="letterText">❤️ Котеночная, с Праздником! ❤️</h2>
                            <p className="letterSubText">
                                Ты — самое прекрасное, что случалось со мной. Спасибо за твою любовь и поддержку. Для
                                меня это значит очень много. Ты самый близкий человек в моей жизни. Я тебя очень люблю!
                            </p>
                        </animated.div>
                    )}
                </div>
            </div>

            <audio ref={audioRef} src={NemerennoSound} loop />
        </div>
    );
};

export default ValentineCard;