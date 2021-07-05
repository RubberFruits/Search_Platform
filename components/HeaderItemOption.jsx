const HeaderItemOption = ({ icon, title, selected }) => {
   return (
      <div className={`flex items-center`}>
         <icon className='h-4' />
         <p className="hidden sm:inline-flex">{title}</p>
      </div>
   )
}

export default HeaderItemOption
