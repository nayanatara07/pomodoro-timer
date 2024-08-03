import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({ key, timer, animate, children }) => {
    const { stopAnimate } = useContext(SettingsContext);

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[['#FE6F6B', 0.25], ['#FE6F6B', 0.25], ['#FE6F6B', 0.25], ['#FE6F6B', 0.25]]}
            strokeWidth={15}
            size={200}
            trailColor="#333"
            onComplete={() => stopAnimate()}
        >
            {children}
        </CountdownCircleTimer>
    );
};

export default CountdownAnimation;
