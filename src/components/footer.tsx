import Logo from './logo'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center z-50 bg-white dark:bg-neutral-900 border-solid border-t-[1px] border-t-gray-200 h-[60px]">
      <div className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-neutral-900 w-full h-full">
        <div className="flex gap-3 w-full items-center">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © 2023 Sanguan Wongse Industries Co.,Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
