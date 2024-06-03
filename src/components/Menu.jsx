import React from "react";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  const handleResumeClick = () => {
    const googleDriveResumeLink =
      "https://drive.google.com/file/d/1R3QLDSh3TvOvyaaVdlvMJciobJXdVh7a/view?usp=sharing";
    window.open(googleDriveResumeLink, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <a
            href="https://github.com/sponsors/Pulkit1822"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
          >
            <img
              src="https://avatars.githubusercontent.com/u/97748031?v=4"
              className="h-12 w-12  rounded-lg  shadow-md"
              alt="Spo"chr
            />
            <div className="ml-4 text-indigo-600 font-bold"> Sponser ♥️ </div>
          </a>
          <MusicPlayer />
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton
            label="Projects/Work"
            onClick={() => onSectionChange(2)}
          />
          <MenuButton label="Resume ↗" onClick={handleResumeClick} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />

          
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

export const MusicPlayer = () => {
  return (
    <div className="relative inline-block mt-4 pl-0 pr-12">
      <a
        href="/public/musicPlayer/index.html"
        className="flex items-center rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/Content/musicalME.png"
          className="h-12 w-12  rounded-lg  shadow-md"
          alt="MusicPlayer"
        />
        <div className="ml-4 text-indigo-600 font-bold"> My Playlist ↗ (Ads-Free) </div>
      </a>
    </div>
  );
};

