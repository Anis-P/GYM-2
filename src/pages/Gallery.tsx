import { PageHero } from "@/components/PageHero";
import { gallery } from "@/data/site";

const Gallery = () => (
  <>
    <PageHero
      eyebrow="Inside Titan"
      title={<>Step inside the <span className="text-gradient">arena</span></>}
      description="Take a tour of our 35,000 sq ft facility — every detail engineered for performance."
    />

    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <p className="text-sm font-medium">{g.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Gallery;
