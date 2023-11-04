import Image from 'next/image';

function Welcome() {
  return (
    <div className="text-gray-200 body-font">
      <div>
        <section className="text-white-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-1">
                  <h2 className="text-purple-500 text-2xl font-medium tracking-widest mb-1">
                    A Top-Tier Translator from LangBridge
                  </h2>
                  <h1 className="text-2xl sm:text-3xl font-medium text-gray-200">
                    What you can do with this online translator
                  </h1>
                </div>
              </div>
            </section>
            <div className="sm:mx-auto lg:w-4/5 -mx-2 sm:mb-2 flex flex-wrap">
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex h-full p-4 items-center rounded bg-gray-700 hover:bg-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-6 h-6 text-purple-500 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium title-font">
                    Translate longer texts
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex h-full p-4 items-center rounded bg-gray-700 hover:bg-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-6 h-6 text-purple-500 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium title-font">
                    Enjoy completely free translation
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex h-full p-4 items-center rounded bg-gray-700 hover:bg-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-6 h-6 text-purple-500 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium title-font">
                    Use a translator without ads
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="flex h-full p-4 items-center rounded bg-gray-700 hover:bg-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-6 h-6 text-purple-500 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium title-font">
                    Translate online without downloading an app
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Welcome;
