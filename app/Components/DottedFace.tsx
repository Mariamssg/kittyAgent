
import Image from 'next/image';

export default function DottedFace(props: any) {
    return (
        <div className="flex justify-center items-center">
            <Image 
                src="/kittyagent.png"
                alt="Kitty Agent"
                width={200}
                height={200}
                className="rounded-full shadow-2xl"
            />
        </div>
    );
}