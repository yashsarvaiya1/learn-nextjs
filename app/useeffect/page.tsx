import BasicTimer from "@/components/useeffect/timer/BasicTimer";
import CountDown from "@/components/useeffect/timer/CountDown";
import DynamicTitle from "@/components/useeffect/DynamicTitle";
import OnlineStatus from "@/components/useeffect/window/OnlineStatus";
import RenderCount from "@/components/useeffect/RenderCount";
import ScrollPosition from "@/components/useeffect/window/ScrollPosition";
import Stopwatch from "@/components/useeffect/timer/Stopwatch";
import TimerDemo from "@/components/useeffect/timer/TimerDemo";
import WindowWidth from "@/components/useeffect/window/WindowWidth";
import ThemeToggle from "@/components/useeffect/localstorage/ThemeToggle";
import RemeberName from "@/components/useeffect/localstorage/RemeberName";
import PersistantTimer from "@/components/useeffect/localstorage/PersistantTimer";

export default function EffectPage(){
    return (
        <>
            <PersistantTimer />
        </>
    )
}
