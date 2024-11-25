import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

export default function Project() {
  return (
    <div className="mt-16 w-full scroll-mt-28 md:scroll-mt-32" id="projects">
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800 dark:text-slate-300">
        &lt;List <span className="text-sky-600">Projects</span>/&gt;
     </h1>
    <blockquote className=" p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto md:mt-8 -mb-6 dark:text-slate-300">
            "Here is a list of some projects I have created;"
    </blockquote>
    <div className="flex justify-center gap-4 w-full mx-auto mt-8 flex-wrap">
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project1.png" alt="X-Detect" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    X-Detect
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
                <p>his innovative mobile application can detect diseases through chest X-ray scans and provide accurate diagnoses. In this project, I was responsible for the backend, creating the API to connect the model with the mobile application.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
            <div className="flex gap-4">
                <img src="/img/js.svg" width={30} alt="JavaScript"/>
                <img src="/img/nodejs.svg" width={30} alt="Node JS"/>
                <img src="/img/express.svg" width={30} alt="Express JS"/>
                <img src="/img/googlecloud.svg" width={30} alt="Google Cloud"/>
            </div>
            <div className="flex text-xs gap-4">
                    <a href="https://github.com/X-Detect" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project2.png" alt="SM Corner" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    SM Corner
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300 ">
                <p>A sales information system website for managing inventory at the Suara Muhammadiyah Mayong Unit. I developed the entire system as a full-stack developer.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                    <img src="/img/php.svg" width={30} alt="PHP"/>
                    <img src="/img/js.svg" width={30} alt="JavaScript"/>
                    <img src="/img/codeigniter.svg" width={30} alt="CodeIgniter"/>
                    <img src="/img/bootstrap.svg" width={30} alt="Bootstrap"/>
                    <img src="/img/mysql.svg" width={30} alt="MySQL"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://github.com/RizalPradanaaa/sm-corner" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project3.png" alt="Stroke Prediction" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    Stroke Prediction
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
                <p>A website for early detection of stroke based on relevant labels, providing effective solutions for prevention and early diagnosis.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                <img src="/img/python.svg" width={30} alt="Python"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://github.com/RizalPradanaaa/StrokePrediction" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project7.png" alt="Early detection of diabetes" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                   Website - MSI Kota Semarang
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
            <p>A landing page website for Yayasan Mentari Sehat Kota Semarang, developed during my internship at Bakrie Center Foundation in Central Java Province.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                <img src="/img/html.svg" width={30} alt="HTML"/>
                <img src="/img/css.svg" width={30} alt="CSS"/>
                <img src="/img/laravel.svg" width={30} alt="Laravel"/>
                <img src="/img/bootstrap.svg" width={30} alt="Bootrap"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://yayasanmsikotasmg.com/public/" target='_blank' className='items-center underline hover:text-sky-600'>
                        <ExternalLinkIcon size={15} className="inline-block mr-1" />
                        View project
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project4.png" alt="My Portofolio" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    My Portofolio V1
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
            <p>"This is the first portfolio website I developed, showcasing the projects I've worked on and my skills in web development."</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                <img src="/img/html.svg" width={30} alt="HTML"/>
                <img src="/img/css.svg" width={30} alt="CSS"/>
                <img src="/img/tailwind.svg" width={30} alt="Tailwind"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://rizalpradanaaa.github.io/my-portofolio" target='_blank' className='items-center underline hover:text-sky-600'>
                        <ExternalLinkIcon size={15} className="inline-block mr-1" />
                        View project
                    </a>
                    <a href="https://github.com/rizalpradanaaa/my-portofolio" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project6.png" alt="Simple Restful API with Golang" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    Simple Restful API with Golang
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
                <p>This is a simple RESTful API project I built using Golang. It falls under the category of data management with a clean structure, developed as part of my learning from the 'Programmer Zaman Now' course on Udemy.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                <img src="/img/go.svg" width={30} alt="Golang"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://app.swaggerhub.com/apis/RIZALNAWANG1/category-res_tful_api/1.0.0" target='_blank' className='items-center underline hover:text-sky-600'>
                        <ExternalLinkIcon size={15} className="inline-block mr-1" />
                        View project
                    </a>
                    <a href="https://github.com/RizalPradanaaa/golang-restful-api" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-xl border border-dark rounded-md dark:bg-slate-900 dark:border-slate-500 dark:border-2 dark:rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project5.png" alt="Early detection of diabetes" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    Early detection of diabetes
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600 dark:text-slate-300">
                <p>"Website for early detection of diabetes, a final project for my studies focused on data processing and improving the accuracy of the random forest model using genetic algorithms.</p>
            </CardContent>
            <CardFooter className="flex flex-col px-6 italic font-md text-left gap-4">
                <div className="flex gap-4">
                <img src="/img/python.svg" width={30} alt="Python"/>
                <img src="/img/mysql.svg" width={30} alt="MySQL"/>
                <img src="/img/flask.svg" width={30} alt="Flask"/>
                <img src="/img/bootstrap.svg" width={30} alt="Bootstrap"/>
                </div>
                <div className="flex text-xs gap-4">
                    <a href="https://github.com/RizalPradanaaa/diabetes-prediction" target='_blank' className='items-center underline hover:text-sky-600'>
                        <GithubIcon size={15} className="inline-block mr-1" />
                        View source code
                    </a>
                </div>
            </CardFooter>
        </Card>
    </div>
    </div>
  )
}
