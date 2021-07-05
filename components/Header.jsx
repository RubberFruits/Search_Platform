import { MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {

   const router = useRouter()
   const inputRef = useRef()

   const search = e => {
      e.preventDefault()
      const refValue = inputRef.current.value
      if (!refValue) return
      router.push(`/search?term=${refValue}`)
   }

   return (
      <header className='sticky top-0 bg-white'>
         <div className='flex w-full p-4 pl-0.5  items-center'>
            <Image
               src='https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_inline_005.jpg'
               alt='logo'
               className='cursor-pointer'
               width={100}
               height={50}
               onClick={() => router.push('/')}
            />
            <form className='flex mr-2 max-w-2xl h-10 flex-grow px-6 py-2 border border-gray-200 rounded-full shadow-lg lg:mr-auto'>
               <input
                  ref={inputRef}
                  value={router.query.term}
                  type='text'
                  className='flex-grow w-full focus:outline-none '
               />
               <XIcon
                  className='h-7 text-gray-500 cursor-pointer 
               transition duration-100 transform hover:scale-125
               sm:mr-3'
                  onClick={() => inputRef.current.value = ''}
               />
               <MicrophoneIcon
                  className='hidden h-6 mr-3 sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
               />
               <SearchIcon
                  className='hidden h-6 text-blue-500 sm:inline-flex cursor-pointer'
                  onClick={search}
               />
            </form>
            <div className='transform hover:scale-110 h-11 w-11  ml-auto  transition duration-200'><Avatar url='https://wiki.teamfortress.com/w/images/thumb/b/bc/Icon_engineer.jpg/150px-Icon_engineer.jpg' /></div>
         </div>
         <HeaderOptions />
      </header>
   )
}

export default Header
