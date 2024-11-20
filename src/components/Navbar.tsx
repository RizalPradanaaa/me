import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full px-4 font-poppins font-bold">
        <NavigationMenu>
                <img src="./public/logo.png" alt="Logo" width={60}/>
        </NavigationMenu>
        <NavigationMenu className='hidden md:flex'>
            <div className="flex gap-4 hover:text-sky-600 font-bold">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sertificate
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
                </NavigationMenuLink>
            </div>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet>
            <SheetTrigger className='md:hidden'>☰</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Home</SheetTitle>
                    <SheetTitle>About</SheetTitle>
                    <SheetTitle>Skilss</SheetTitle>
                    <SheetTitle>Projects</SheetTitle>
                    <SheetTitle>Serticate</SheetTitle>
                    <SheetTitle>Contact</SheetTitle>
                    </SheetHeader>
                </SheetContent>
        </Sheet>
    </div>
  )
}
