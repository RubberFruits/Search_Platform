import HeaderItemOption from './HeaderItemOption'
import {
   DotsVerticalIcon, MapIcon, NewspaperIcon,
   PhotographerIcon, PlayIcon, SearchIcon
} from '@heroicons/react/outline'

const HeaderOptions = () => {
   return (
      <div>
         <div className='flex space-x-6'>
            <HeaderItemOption icon={SearchIcon} title='Search' selected />
            <HeaderItemOption icon={PhotographerIcon} title='Images' />
            <HeaderItemOption icon={PlayIcon} title='Videos' />
            <HeaderItemOption icon={NewspaperIcon} title='News' />
            <HeaderItemOption icon={MapIcon} title='Maps' />
            <HeaderItemOption icon={DotsVerticalIcon} title='More' />
         </div>
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
