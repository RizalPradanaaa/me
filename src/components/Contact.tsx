import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Contact() {
  return (
    <div className="mt-8 scroll-mt-28 md:scroll-mt-32" id="contact">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 mb-8 dark:text-slate-300">
            &lt;Contact/&gt;
        </h1>
        <Card className="bg-slate-100 border-2 shadow-md -pt-8 md:w-2/3 mx-auto dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader>
                <CardTitle>
                <blockquote className="italic text-[20px] text-slate-600 lg:w-2/3 mx-auto md:mt-8 mb-3 dark:text-slate-300">
                    "Want to hire me as a web programmer or discuss web development? Let's talk!"
                </blockquote>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-sm md:px-16 italic text-slate-600 w-full font-semibold dark:text-slate-300">
                <h3 className="mb-1">What I can do for you?</h3>
                <ul className="list-disc list-inside space-y-2 text-justify md:text:left">
                    <li>Build full-stack web applications using modern technologies.</li>
                    <li>Integrate APIs into the frontend of web applications.</li>
                    <li>Process data and create machine learning models.</li>
                    <li> Discuss technology based on your needs.</li>
                </ul>
            </CardContent>
            <CardFooter className="w-full">
                <Button className="bg-green-500 hover:bg-green-800 w-full text-dark font-extrabold shadow-md border-2 hover:text-white border-dark mb-2">
                <svg className="h-8 w-8 text-dark hover:text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg>
                    <a href="https://wa.me/6285875328397" target="_blank" >Chat on WhatsApp</a>
                </Button>
                <Button className="bg-red-500 hover:bg-red-800 w-full text-dark font-extrabold shadow-md border-2 hover:text-white border-dark">
                    <svg className="h-8 w-8 text-dark hover:text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
                    <a href="mailto:rizalnawang1@gmail.com" target="_blank">Send an Email</a>
                </Button>
            </CardFooter>
        </Card>

        <div className="mt-16">
        <p className="w-full border-b border-slate-400 mb-8"></p>
            <div className="flex justify-between flex-wrap">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.1rem] font-mono text-sm font-semibold mx-auto md:m-0">
                © {new Date().getFullYear()} @RizalPradana/portofolio
                </code>
                <div className="flex gap-2 md:gap-3 mt-8 md:mt-2 mx-auto md:m-0">
                    <a href="https://wa.me/6285875328397" target="_blank">
                        <svg className="h-8 w-8 text-dark hover:text-sky-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/RizalPradanaaa" target="_blank">
                        <svg className="h-8 w-8 text-dark hover:text-sky-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                    </a>
                    <a href="https://www.instagram.com/rizalpradana.exe/" target="_blank">
                        <svg className="h-8 w-8 text-dark hover:text-sky-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/rizal-nawang-pradana/" target="_blank">
                        <svg className="h-8 w-8 text-dark hover:text-sky-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
