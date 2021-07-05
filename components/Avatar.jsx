import Image from 'next/image'
const Avatar = ({ url }) => {
   return (
      <Image
         src={url}
         alt='avatar'
         width='50'
         height='50'
         className='rounded-full'
      />
   )
}

export default Avatar
