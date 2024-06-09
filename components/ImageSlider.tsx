// components/ImageSlider.js
import Image from 'next/image'

const ImageSlider = () => {


  return (
    <div className="absolute w-screen h-[300px] mt-[15vh] overflow-hidden">
      <Image src="/pollution.png" width={400} height={100} alt=""/>
    {/*   <Image src="/pollution.png" width={300} height={10} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 animate-display" />
      <Image src="/pollu.png" width={300} height={10} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 animate-display" style={{ animationDelay: '2s' }} />*/}
    </div>
  )
}

export default ImageSlider
