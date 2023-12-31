import React from 'react';

function Footer() {
  return (
    <div className="text-gray-200 body-font sm:mx-auto lg:w-9/10 -mx-2 sm:mb-2 flex flex-wrap">
      <div className="flex flex-wrap mx-12 mb-10 mt-10">
        <div className="md:w-1/3 p-4">
          <div className="flex rounded-lg h-full bg-slate-500 bg-opacity-20  hover:shadow-2xl p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-purple-400 text-lg title-font font-medium">
                Copy translation
              </h2>
            </div>
            <div className="flex-grow">
              <p className="text-base leading-relaxed">
                Just copy the text to the clipboard and view the translation
                results in the next second, enjoying the pleasure of what you
                see is what you get.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <div className="flex rounded-lg h-full bg-slate-500 bg-opacity-20  hover:shadow-xl p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-purple-400 text-lg title-font font-medium">
                Optimize translation
              </h2>
            </div>
            <div className="flex-grow">
              <p className="text-base leading-relaxed">
                Solve the garbled code problems caused by redundant sentence
                fragmentation and line breaks, and the translation results are
                more in line with reading habits.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <div className="flex rounded-lg h-full bg-slate-500 bg-opacity-20  hover:shadow-xl p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-purple-400 text-lg title-font font-medium">
                Drag and drop to copy
              </h2>
            </div>
            <div className="flex-grow">
              <p className="text-base leading-relaxed">
                It is infinitely close to the system-level open source
                implementation of cross-translation. You can copy the
                translation by dragging and selecting it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
