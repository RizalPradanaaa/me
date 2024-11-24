import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'

export default function Sertificate() {
  return (
    <div className="mt-16">
    <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-800">
        &lt;Sertificate/&gt;
    </h1>
    <blockquote className=" p-5 italic md:text-lg text-slate-600 lg:w-2/3 mx-auto md:mt-8 -mb-6">
            "Here are some certificates I have obtained while learning programming;"
    </blockquote>
    <Carousel className="my-12 mx-8" >
        <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-md border-2 transition-all pt-6">
                    <CardContent>
                        <img src="/img/sertif/bangkit.jpg" alt="Bangkit Sertificate" />
                    </CardContent>
                </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-md border-2 transition-all pt-4 -pb-10">
                    <CardContent>
                        <img src="/img/sertif/javascript.jpg" alt="JavaScript Sertificate" />
                    </CardContent>
                </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-md border-2 transition-all pt-4 -pb-10">
                    <CardContent>
                        <img src="/img/sertif/nodejs.jpg" alt="Node JS Sertificate" />
                    </CardContent>
                </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-md border-2 transition-all pt-4 -pb-10">
                    <CardContent>
                        <img src="/img/sertif/golang.jpg" alt="Golang Sertificate" />
                    </CardContent>
                </Card>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
    </Carousel>
    </div>
  )
}
