import Image from 'next/image'

function Logo() {
  return (
    <div>
        <Image
          src="/logo2.png"
          height={45}
          width={120}
          alt='logo'
          placeholder='blur'
          loading='lazy'
          blurDataURL='...'
          style={{ height: '60px', width: 'auto' }}
        />
    </div>
  )
}

export default Logo