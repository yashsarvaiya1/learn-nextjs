"use client";

import { useState } from "react";

export default function ToggleComponent() {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  const [isThemeRed, setIsThemeRed] = useState(false);
  const [isEmojiOn, setIsEmojiOn] = useState(true);
  const switchCounter = [
    isPowerOn,
    isLightOn,
    isNotification,
    isThemeRed,
    isEmojiOn,
  ].filter(Boolean).length;

  const togglePower = () => {
    setIsPowerOn((p) => !p);
    if (!isPowerOn) {
      setIsLightOn(false);
    }
  };

  const toggleLight = () => {
    setIsLightOn((p) => !p);
  };

  const toggleNotification = () => {
    setIsNotification((p) => !p);
  };

  const toggleTheme = () => {
    setIsThemeRed((p) => !p);
  };

  const toggleEmoji = () => {
    setIsEmojiOn((p) => !p);
  };

  const turnOnAll = () => {
    setIsPowerOn(true);
    setIsLightOn(true);
    setIsNotification(true);
    setIsThemeRed(true);
    setIsEmojiOn(true);
  };
  const turnOffAll = () => {
    setIsPowerOn(false);
    setIsLightOn(false);
    setIsNotification(false);
    setIsThemeRed(false);
    setIsEmojiOn(false);
  };

  return (
    <div className="space-y-4 text-lg font-mono">
      <div className="flex flex-col gap-4 p-4">
        <button className="w-80 border-2 p-2" onClick={() => togglePower()}>
          {isPowerOn ? "Turn off Power" : "Turn Power on"}
        </button>
        <button className="w-80 border-2 p-2" onClick={() => toggleLight()}>
          {isLightOn ? "Turn off Light" : "Turn Light on"}
        </button>
        <button
          className="w-80 border-2 p-2"
          onClick={() => toggleNotification()}
        >
          {isNotification ? "Turn off Notification" : "Turn Notification on"}
        </button>
        <button className="w-80 border-2 p-2" onClick={() => toggleTheme()}>
          {isThemeRed ? "Change theme to Green" : "Change Theme to Red"}
        </button>
        <button className="w-80 border-2 p-2" onClick={() => toggleEmoji()}>
          Change Emoji
        </button>
      </div>
      <br />
      <div>
        <p className="text-3xl font-black border-b mb-3">Status</p>
        <p>Power : {isPowerOn ? "ON" : "OFF"}</p>
        <p>Lght : {isLightOn ? "ON" : "OFF"}</p>
        <p>Notification : {isNotification ? "ON" : "OFF"}</p>
        <p className={`font-bold ${isThemeRed ? "text-red-400" : "text-green-400"}`}>
          Theme : {isThemeRed ? "Red" : "Green"}
        </p>
        <p>Emoji : {isEmojiOn ? "✅" : "❌"}</p>
        <p>Total On Count: {switchCounter}</p>
      </div>
      <br />
      <div className="flex gap-4">
        <button className="w-80 border-2 p-2" onClick={() => turnOnAll()}>
          Turn All ON
        </button>
        <button className="w-80 border-2 p-2" onClick={() => turnOffAll()}>
          Turn All OFF
        </button>
      </div>
    </div>
  );
}
