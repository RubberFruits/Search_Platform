import {
   DotsVerticalIcon, MapIcon, NewspaperIcon,
   PhotographerIcon, PlayIcon, SearchIcon
} from '@heroicons/react/outline'

const HeaderItemsOptions = ({ icon, title, selected }) => {
   return (
      <div className='flex space-x-6 space'>
         <div className={`flex items-center space-x-1 border-b-4 border-transparent`}>
            <SearchIcon className='h-4' />
            <p className="hidden sm:inline-flex">Search</p>
         </div>
         <div className={`flex items-center space-x-1 border-b-4 border-transparent`}>
            <PlayIcon className='h-4' />
            <p className="hidden sm:inline-flex">Videos</p>
         </div>
         <div className={`flex items-center space-x-1 border-b-4 border-transparent`}>
            <NewspaperIcon className='h-4' />
            <p className="hidden sm:inline-flex">News</p>
         </div>
         <div className={`flex items-center space-x-1 border-b-4 border-transparent`}>
            <MapIcon className='h-4' />
            <p className="hidden sm:inline-flex">Maps</p>
         </div>
         <div className={`flex items-center space-x-1 border-b-4 border-transparent`}>
            <DotsVerticalIcon className='h-4' />
            <p className="hidden sm:inline-flex">Some</p>
         </div>
      </div>
   )
}

export default HeaderItemsOptions