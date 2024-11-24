import { ModeToggle } from './mode-toggle'
import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between dark:bg-slate-900 dark:border-stone-800 w-full -mt-4 px-4 font-bold sticky py-4 border-2 shadow-lg rounded-full top-0  backdrop-blur-md z-10">
        <NavigationMenu>
            <h1 className='ml-2 text-2xl font-bold dark:text-slate-200'>{"<R/>"}</h1>
        </NavigationMenu>
        <NavigationMenu className='hidden md:flex '>
            <div className="flex gap-4 hover:text-sky-600 font-bold">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} href='#about'>
                About
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} href='#techstack'>
                Tech stack
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} href='#projects'>
                Projects
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} href='#sertificate'>
                Sertificate
                </NavigationMenuLink>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} dark:bg-slate-900`} href='#contact'>
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
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>
                        <a href="#about">
                            About
                        </a>
                    </SheetTitle>
                    <SheetTitle>
                        <a href="#techstack">
                            Tech stack
                        </a>
                    </SheetTitle>
                    <SheetTitle>
                        <a href="#projects">
                            Projects
                        </a>
                    </SheetTitle>
                    <SheetTitle>
                        <a href="#sertificate">
                            Sertificate
                        </a>
                    </SheetTitle>
                    <SheetTitle>
                        <a href="#contact">
                            Contact
                        </a>
                    </SheetTitle>
                    </SheetHeader>
                </SheetContent>
        </Sheet>
    </div>
  )
}
