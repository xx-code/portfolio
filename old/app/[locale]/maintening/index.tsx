import Image from 'next/image';
import WorkingImage from '../images/working.jpg';

export default function Maintening() {
    return (
        <div className="container">
            <div className='flex flex-col items-center mt-5'>
                <Image src={WorkingImage} height={300} width={250} alt='work' />
                <h1 className='mt-3' style={{color: 'white'}}>Le site est en maintenance, il n y a rien à voir ici.</h1>
            </div>
        </div>
    )
}