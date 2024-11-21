import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Contact() {
  return (
    <div className="mt-8">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 mb-8">
            &lt;Contact/&gt;
        </h1>
        <Card className="bg-slate-200 border-2 shadow-md -pt-8 md:w-2/3 mx-auto">
            <CardHeader>
                <CardTitle>
                <blockquote className="italic text-[20px] text-slate-600 lg:w-2/3 mx-auto md:mt-8 mb-3">
                    "Want to hire me as a web programmer or discuss web development? Let's talk!"
                </blockquote>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-sm md:px-16 italic text-slate-600 w-full font-semibold">
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
    </div>
  )
}
