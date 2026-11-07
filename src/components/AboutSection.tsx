import React from 'react';
import { ArrowUpRight, Compass, Layers, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-cream-100 text-botanical-900 border-b border-botanical-800/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-earth-500" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-botanical-600">
                About PurNatureK
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.15] text-botanical-950 mb-6">
              US-Based Wholesale Partner for Premium Mitragyna speciosa Ingredients.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-botanical-800/90 leading-relaxed">
              <p>
                <strong className="font-semibold text-botanical-950">
                  Purnature Khatulistiwa LLC
                </strong>{' '}
                (operating as <strong className="font-semibold text-botanical-950">PurNatureK</strong>) is a US-based commercial wholesale business serving the American wholesale and bulk botanical market.
              </p>

              <p>
                Based in the United States, PurNatureK specializes in supplying high-grade{' '}
                <em className="font-serif italic text-lg text-botanical-900">
                  Mitragyna speciosa
                </em>{' '}
                (kratom) leaf powder and concentrated botanical extract products to US wholesale buyers, distributors, and qualified commercial partners. All commercial inquiries, accounts, and client relationships are managed directly by our US-based team.
              </p>

              <p>
                While our botanical raw materials are sourced from authentic Indonesian origins, PurNatureK operates strictly as a dedicated B2B wholesale partner—delivering documented, third-party laboratory verified bulk ingredients with reliable domestic communication and commercial support.
              </p>
            </div>

            {/* Key Factual Trade Attributes */}
            <div className="mt-9 pt-8 border-t border-botanical-800/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 text-botanical-800 font-semibold text-xs uppercase tracking-wider mb-1.5">
                  <MapPin className="w-4 h-4 text-earth-500" aria-hidden="true" />
                  <span>Product Origin</span>
                </div>
                <p className="text-xs text-botanical-700 leading-relaxed">
                  West Kalimantan, Indonesia—natural botanical origin of <em>Mitragyna speciosa</em>.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-botanical-800 font-semibold text-xs uppercase tracking-wider mb-1.5">
                  <Layers className="w-4 h-4 text-earth-500" aria-hidden="true" />
                  <span>Core Portfolio</span>
                </div>
                <p className="text-xs text-botanical-700 leading-relaxed">
                  Focused supply of bulk kratom leaf powder and concentrated botanical extract lots.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-botanical-800 font-semibold text-xs uppercase tracking-wider mb-1.5">
                  <Compass className="w-4 h-4 text-earth-500" aria-hidden="true" />
                  <span>US Commercial Desk</span>
                </div>
                <p className="text-xs text-botanical-700 leading-relaxed">
                  Dedicated US-based wholesale service, inquiry workflow, and private member portal.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-xs font-semibold tracking-[0.14em] uppercase rounded-sm transition-colors"
              >
                <span>Review Product Categories</span>
              </a>
              <a
                href="https://www.purnaturek.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-botanical-800 hover:text-botanical-950 underline underline-offset-4"
              >
                <span>Corporate Overview (purnaturek.com)</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Split Editorial Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Decorative Frame Offset */}
              <div
                className="hidden sm:block absolute -inset-3 border border-botanical-800/15 translate-x-3 translate-y-3 rounded-sm pointer-events-none"
                aria-hidden="true"
              />

              <figure className="relative bg-cream-50 p-3 sm:p-4 rounded-sm border border-botanical-800/15 shadow-editorial">
                <div className="overflow-hidden rounded-sm aspect-[16/11] bg-botanical-900">
                  <img
                    src="/images/sourcing-indonesia.jpg"
                    alt="Botanical sourcing specialists inspecting harvested Mitragyna speciosa leaves on bamboo drying racks in West Kalimantan"
                    loading="lazy"
                    className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <figcaption className="mt-3.5 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-botanical-600">
                  <span className="font-mono uppercase tracking-wider text-botanical-800">
                    Botanical Sourcing Origin • West Kalimantan
                  </span>
                  <span className="italic">
                    Illustrative editorial representation of botanical leaf inspection
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

