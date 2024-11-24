export default function About() {
    return (
        <div className='mt-14 md:mt-20 mb-14 md:mb-20 scroll-mt-28 md:scroll-mt-32' id="about">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 dark:text-slate-300">
            Hi, I am <span className='text-sky-600 dark:text-sky-500'>Rizal Pradanaaa</span>👋.
            </h1>
            <h2 className="scroll-m-20 mt-5 text-2xl md:text-3xl font-bold tracking-tight first:mt-0 underline-offset-4 dark:text-slate-300">
            A Web Programmer;
            </h2>
            <blockquote className=" p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto dark:text-slate-300">
            "Informatics graduate with an interest in web programming, knowledgeable in web application development, and familiar with using modern technologies;"
            </blockquote>

            <div className="flex flex-inline gap-4 mx-auto items-center justify-center mt-2 dark:text-slate-300">
                <svg className="h-8 w-8 text-slate-500 hover:text-sky-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
                <svg className="h-8 w-8 text-slate-600 hover:text-sky-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                <svg className="h-8 w-8 text-slate-600 hover:text-sky-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </div>
        </div>
      )
}
