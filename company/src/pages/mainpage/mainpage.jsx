import React from 'react';
import Main from "../../component/main";
import Searchbar from "../../component/searchbar";

class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <section>
            <Main />
            <Searchbar />
        </section>
        <div>
          <p>Favorites</p>
        </div>
        <section className=''>
          <section className="container mx-auto p-8 bg-blue-900">
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg mx-4 mb-8 bg-gray-100 flex p-3 w-auto h-auto">
              {/* Profile Image */}
              <div className="w-1/3 flex flex-col items-center">
                <img src="assets/Revou.png" className="w-[10rem] h-[10rem]" alt="Profile" />
              </div>
              {/* Text Content */}
              <div className="w-2/3 px-6 pl-[4rem] gap-2 flex flex-col justify-center">
                <p className="">Full Stack Developer</p>
                <p className="">Revou</p>
                <p className="">Jakarta</p>
              </div>
              <div className="w-3/3 flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21M10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29" class="clr-i-outline clr-i-outline-path-1 "/><path fill="none" d="M0 0h36v36H0z"/></svg>
                  <p className="">Posted since 20 August 2024</p>
                </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Mainpage;

