import ImageCard from '@/components/ImageCard';
import { DecoderText } from '@/components/DecoderText';

function Gallary() {
  return (
    <>
      <section className="text-gray-900 dark:text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <DecoderText
              className="sm:text-3xl text-2xl font-medium title-font mb-4"
              text="Master Cleanse Reliac Heirloom"
            />
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallary