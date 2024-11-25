import { Card, CardContent } from "./ui/card";
import logoData from '../data/skills.json';
import logoLearningData from '../data/skillslearning.json';
export default function Skills() {
    return (
        <div className="mt-10 scroll-mt-28 md:scroll-mt-32" id="techstack">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 dark:text-slate-300">
                &lt;Tech <span className="text-sky-600 dark:text-sky-500">Stack</span>/&gt;
            </h1>
            <blockquote className=" p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto md:mt-8 md:mb-6 m:4 -mb-8 dark:text-slate-300">
            "Some stacks I have use in my projects;"
            </blockquote>
            <div className="flex flex-inline justify-center items-center gap-4 w-full mx-auto mt-8 flex-wrap">
            {logoData.map((item, index) => (
               <Card
               key={index}
               className="flex flex-col w-1/5 md:w-1/12 shadow-xl border hover:shadow-lg transition-all"
             >
               <CardContent className="p-3 relative dark:bg-slate-800 dark:border-slate-500 dark:border-2 dark:rounded-md">
                 <img
                   src={item.logo}
                   alt={item.name}
                   className="object-contain w-full h-full"
                 />
                 <p className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity whitespace-normal  rounded-md">
                   {item.name}
                 </p>
               </CardContent>
             </Card>


            ))}
            </div>

            <blockquote className="p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto md:mt-8 md:mb-6 m:4 -mb-8 dark:text-slate-300">
            "I will study this tech stack in the coming months due to my interest;"
            </blockquote>
            <div className="flex flex-inline justify-center items-center gap-4 w-full mx-auto mt-8 flex-wrap">
            {logoLearningData.map((item, index) => (
               <Card
               key={index}
               className="flex flex-col w-1/5 md:w-1/12 shadow-xl border hover:shadow-lg transition-all"
             >
               <CardContent className="p-3 relative dark:bg-slate-800 dark:border-slate-500 dark:border-2 dark:rounded-md">
                 <img
                   src={item.logo}
                   alt={item.name}
                   className="object-contain w-full"
                 />
                 <p className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity whitespace-normal  rounded-md">
                   {item.name}
                 </p>
               </CardContent>
             </Card>


            ))}
            </div>
        </div>
    )
}
