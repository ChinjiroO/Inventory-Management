import Logo from './logo'
import { NavigationMenuDemo } from '@/components/nav-menu'
import { ModeToggle } from '@/components/ThemeToggle'
import { AvatarUser } from '@/components/avatar-user'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-solid border-b-[1px] border-b-gray-200">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-neutral-900 mx-auto">
        <div className="flex gap-3 w-full items-center">
          <Logo />
          <NavigationMenuDemo />
        </div>

        <div className="flex gap-3 items-center">
          <ModeToggle />
          <AvatarUser />
        </div>
      </nav>
    </header>
  )
}
export default Header
