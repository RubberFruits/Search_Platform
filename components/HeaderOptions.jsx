import HeaderItemsOptions from './HeaderItemsOptions'

const HeaderOptions = () => {
   return (
      <div>
         <HeaderItemsOptions />
         <div className='flex space-x-4'>
            <p className='link'>
               Settings
            </p>
            <p className='link'>
               Tools
            </p>
         </div>
      </div>
   )
}

export default HeaderOptions
