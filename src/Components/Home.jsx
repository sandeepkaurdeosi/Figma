
import Tabs from './tabs';
import Gallery from './Gallery'
function Home() {
  return (
    <>
    <div className='min-h-screen bg-gray-950 text-white'>
        <div className='flex pl-[29px] pt-[96px]  pr-[39px] '> 
            <div className='w-1/2 border-[1px] rounded-2xl border-blue-300 h-[450px]  '>
                <p className='mt-3 ml-3'>
                    <h1 className='text-center'>This is left half of the screen.</h1>
                    <p className='m-10'>Here, In the first Right box we can switch tabs as they are clickable.
                    It contains three tabs that are about, experiences and recommended.</p> 
                    <p className='m-10'>
                        Now, there is second right box which contains some images by default.
                        Here we can add images by click on add image button after adding images
                        we can scroll them by arrows. 
                    </p>
                        </p>
            </div>
            <div className=' flex flex-col ml-[29px] space-y-4'>
                <div className='h-1/2 border-2 rounded-2xl shadow-2xl pr-2 w-[550px]'>
                    <Tabs/>
                </div>
                <div className='h-1/2 border-2 rounded-2xl shadow-2xl pr-2 w-[550px]'>
                    <Gallery/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home