import Image from 'next/image'


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none '>
    <Image src={'/Avatar2.png'} width={737} height={678} alt='' className=' ml-60 translate-z-0 w-[900px] h-[800px] '/>
    </div>;
};

export default Avatar;
