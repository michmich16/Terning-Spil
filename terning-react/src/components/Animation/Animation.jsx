// src/hooks/useAnimation.js
import { useState } from 'react';

const useAnimation = () => {
    const [animation, setAnimation] = useState(null);

    const playAnimation = (type) => {
        setAnimation(type);
        setTimeout(() => setAnimation(null), 60000);
    };

    return { animation, playAnimation };
};

export default useAnimation;
