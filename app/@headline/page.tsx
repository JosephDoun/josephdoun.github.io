import Image from 'next/image'


export default function Headline() {
    return <section className="flex flex-col sm:flex-row sm:gap-[64px] gap-[8px] items-center">
          <div className='items-center flex-1 flex-none'>
          <Image
              className="dark rounded-full border h-32 w-fit"
              src="https://avatars.githubusercontent.com/u/67523692?v=4"
              alt="Avatar"
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="flex flex-col flex-1 gap-[8px] items-center text-nowrap">
            <h1 className="text-xl font-bold">Joseph Doundoulakis</h1>
            <h2 className="">Data Science | Software Development | GIS</h2>
          </div>
	    </section>
}
