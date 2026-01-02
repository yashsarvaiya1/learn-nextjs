"use client";

import { useState } from "react";

export default function ContentComponent() {
  const [isProfile, setIsProfile] = useState(true);
  const [isSettings, setIsSetting] = useState(true);
  const [isFaq, setIsFaq] = useState(false);
  const [subFaq, setSUbFaq] = useState<boolean[]>([false, false, false]);
  const [isSpoiler, setIsSpoiler] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isStats, setIsStats] = useState(false);

  const [profile, setProfile] = useState<string[]>(["John", "john@email.com"]);

  const [password, setPassword] = useState("password");
  const [isShowPasswrd,setIsShowPassword] = useState(false);
  const contentCounter = [
    isProfile,
    isSettings,
    isFaq,
    isSpoiler,
    isPassword,
    isStats,
  ].filter((i) => i === true).length;

  return (
    <div className="space-y-4 text-lg font-mono">
      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">Profile</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsProfile((p) => !p)}
          >
            {isProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>

        {isProfile && (
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label>Name: </label>
              <input
                type="text"
                value={profile[0]}
                onChange={(e) =>
                  setProfile((profile) => [e.target.value, profile[1]])
                }
              />

              <label>Email: </label>
              <input
                type="text"
                value={profile[1]}
                onChange={(e) =>
                  setProfile((profile) => [profile[0], e.target.value])
                }
              />
            </div>
            <hr />
            <br />
            <div>
              <p>Name: {profile[0]}</p>
              <p>Email: {profile[1]}</p>
            </div>
          </div>
        )}
      </div>

      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">Settings</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsSetting((p) => !p)}
          >
            {isSettings ? "Hide Settings" : "Show Settings"}
          </button>
        </div>

        {isSettings && (
          <div className="flex flex-col">
            <p>This is Settings Section</p>
          </div>
        )}
      </div>

      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">FAQ</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsFaq((p) => !p)}
          >
            {isFaq ? "Hide FAQ" : "Show FAQ"}
          </button>
        </div>

        {isFaq && (
          <div className="flex flex-col px-10">
            <div className="flex justify-between my-5 pb-5 border-b-2">
              <p className="font-bold text-2xl">FAQ 1</p>
              <button
                className="text-md font-bold border-2 border-blue-500 px-5"
                onClick={() => setSUbFaq([!subFaq[0], subFaq[1], subFaq[2]])}
              >
                {subFaq[0] ? "Hide FAQ1" : "Show FAQ1"}
              </button>

              
            </div>

            {subFaq[0] && <div>
                    FAQ 1 Section
                </div>}

            <div className="flex justify-between my-5 pb-5 border-b-2">
              <p className="font-bold text-2xl">FAQ 2</p>
              <button
                className="text-md font-bold border-2 border-blue-500 px-5"
                onClick={() => setSUbFaq([subFaq[0], !subFaq[1], subFaq[2]])}
              >
                {subFaq[1] ? "Hide FAQ2" : "Show FAQ2"}
              </button>

              
            </div>

            {subFaq[1] && <div>
                    FAQ 2 Section
                </div>}

            <div className="flex justify-between my-5 pb-5 border-b-2">
              <p className="font-bold text-2xl">FAQ 3</p>
              <button
                className="text-md font-bold border-2 border-blue-500 px-5"
                onClick={() => setSUbFaq([subFaq[0], subFaq[1], !subFaq[2]])}
              >
                {subFaq[2] ? "Hide FAQ3" : "Show FAQ3"}
              </button>

              
            </div>

            {subFaq[2] && <div>
                    FAQ 3 Section
                </div>}
           

            
          </div>
        )}
      </div>

      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">Spoiler</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsSpoiler(true)}
          >
            {isSpoiler ? "Hide SPoiler" : "Show Spolier"}
          </button>
        </div>

        {isSpoiler && <div className="flex flex-col">
            
                <p className="text-red-500">This is a Spoiler</p>
            </div>}
      </div>

      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">Password</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsPassword((p) => !p)}
          >
            {isPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        {isPassword && <div className="flex flex-col">
                <div className="flex justify-between">
                    <input
                  type={isShowPasswrd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="text-md font-bold border-2 border-blue-500 px-5 mt-2"
                  onClick={() => setIsShowPassword((p) => !p)}
                >
                  {isShowPasswrd ? "Hide" : "Show"}
                </button>
                </div>
                <label>Password : {isShowPasswrd ? password : "*".repeat(password.length)} </label>
            </div>}
      </div>

      <div className="m-2 p-4 border-2">
        <div className="flex justify-between mb-5 pb-5 border-b-2">
          <p className="font-bold text-2xl">Stats</p>
          <button
            className="text-md font-bold border-2 border-blue-500 px-5"
            onClick={() => setIsStats((p) => !p)}
          >
            {isStats ? "Hide Stats" : "Show Stats"}
          </button>
        </div>

        {isStats && <div className="flex flex-col">
                <p>Showing: {contentCounter} / 5 sections</p>
            </div>}
      </div>
    </div>
  );
}
