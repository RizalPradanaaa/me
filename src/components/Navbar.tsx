import { ModeToggle } from './mode-toggle'
import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Navbar() {
    const scrollToElement = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className="flex items-center justify-between dark:bg-slate-900 dark:border-stone-800 w-full -mt-4 px-4 font-bold sticky py-4 border-2 shadow-lg rounded-full top-0  backdrop-blur-md z-10">
        <NavigationMenu>
            <h1 className='ml-2 text-2xl font-bold dark:text-slate-200'>{"<R/>"}</h1>
        </NavigationMenu>
        <NavigationMenu className='hidden md:flex '>
            <div className="flex gap-4 hover:text-sky-600 font-bold">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} onClick={() => scrollToElement("about")}>
                    About
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`}  onClick={() => scrollToElement("techstack")}>
                Tech stack
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`}  onClick={() => scrollToElement("projects")}>
                Projects
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`}  onClick={() => scrollToElement("sertificate")}>
                Sertificate
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`}  onClick={() => scrollToElement("contact")}>
                Contact
                </NavigationMenuLink>
                <ModeToggle></ModeToggle>
            </div>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet>
            <div className="md:hidden flex mr-4">
            <ModeToggle></ModeToggle>
            </div>
            <SheetTrigger className='md:hidden text-3xl mr-3'>☰</SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>
                    <button
                        onClick={() => scrollToElement("about")}
                        className="text-left w-full"
                    >
                        About
                    </button>
                    </SheetTitle>
                    <SheetTitle>
                    <button
                        onClick={() => scrollToElement("techstack")}
                        className="text-left w-full"
                    >
                        Tech Stack
                    </button>
                    </SheetTitle>
                    <SheetTitle>
                    <button
                        onClick={() => scrollToElement("projects")}
                        className="text-left w-full"
                    >
                        Projects
                    </button>
                    </SheetTitle>
                    <SheetTitle>
                    <button
                        onClick={() => scrollToElement("sertificate")}
                        className="text-left w-full"
                    >
                        Certificate
                    </button>
                    </SheetTitle>
                    <SheetTitle>
                    <button
                        onClick={() => scrollToElement("contact")}
                        className="text-left w-full"
                    >
                        Contact
                    </button>
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}
