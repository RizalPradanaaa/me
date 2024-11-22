import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

export default function Project() {
  return (
    <div className="mt-16 w-full">
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800">
        &lt;List <span className="text-sky-600">Projects</span>/&gt;
     </h1>
    <blockquote className=" p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto md:mt-8 -mb-6">
            "Here is a list of some projects I have created;"
    </blockquote>
    <div className="flex justify-center items-center gap-4 w-full mx-auto mt-8 flex-wrap">
        <Card className="w-full md:w-1/3 shadow-md border-1 rounded-md">
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
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600">
                <p>his innovative mobile application can detect diseases through chest X-ray scans and provide accurate diagnoses. In this project, I was responsible for the backend, creating the API to connect the model with the mobile application.</p>
            </CardContent>
            <CardFooter className="px-6 italic font-md text-left flex gap-4">
                <img src="/img/js.svg" width={30} alt="JavaScript"/>
                <img src="/img/nodejs.svg" width={30} alt="Node JS"/>
                <img src="/img/express.svg" width={30} alt="Express JS"/>
                <img src="/img/googlecloud.svg" width={30} alt="Google Cloud"/>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-md border-1 rounded-md">
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
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600">
                <p>A sales information system website for managing inventory at the Suara Muhammadiyah Mayong Unit. I developed the entire system as a full-stack developer.</p>
            </CardContent>
            <CardFooter className="px-6 italic font-md text-left flex gap-4">
                <img src="/img/php.svg" width={30} alt="PHP"/>
                <img src="/img/js.svg" width={30} alt="JavaScript"/>
                <img src="/img/codeigniter.svg" width={30} alt="CodeIgniter"/>
                <img src="/img/bootstrap.svg" width={30} alt="Bootstrap"/>
                <img src="/img/mysql.svg" width={30} alt="MySQL"/>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-md border-1 rounded-md">
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
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600">
                <p>A website for early detection of stroke based on relevant labels, providing effective solutions for prevention and early diagnosis.</p>
            </CardContent>
            <CardFooter className="px-6 italic font-md text-left flex gap-4">
                <img src="/img/python.svg" width={30} alt="Python"/>
            </CardFooter>
        </Card>
        <Card className="w-full md:w-1/3 shadow-md border-1 rounded-md">
            <CardHeader className="p-0">
                <CardTitle>
                    <img src="/img/projects/project4.png" alt="Early detection of diabetes" />
                </CardTitle>
                <CardTitle>
                <h4 className="px-6 py-4 scroll-m-20 text-lg font-semibold tracking-tight text-left">
                    Early detection of diabetes
                </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 italic text-left md:text-justify font-md text-slate-600">
                <p>"Website for early detection of diabetes, a final project for my studies focused on data processing and improving the accuracy of the random forest model using genetic algorithms.</p>
            </CardContent>
            <CardFooter className="px-6 italic font-md text-left flex gap-4">
                <img src="/img/python.svg" width={30} alt="Python"/>
                <img src="/img/mysql.svg" width={30} alt="MySQL"/>
                <img src="/img/bootstrap.svg" width={30} alt="Bootstrap"/>
            </CardFooter>
        </Card>
    </div>
    </div>
  )
}
