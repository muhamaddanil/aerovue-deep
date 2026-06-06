import { useState } from 'react';
import { images } from '../assets/images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';
import ProductCard, { CategoryCard, ReviewCard, FaqItem } from '../components/ProductCard';
import { Label, Button, SectionHeader } from '../components/SectionTitle';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const categories = [
  {
    title: 'AEROVUE RUN',
    description: 'Built for speed, clarity, and outdoor endurance. See the path. Stay in motion.',
    image: images.categoryRun,
  },
  {
    title: 'AEROVUE SWIM',
    description: 'Hydra-coat clarity for pool and open-water domination. Cut through water with confidence.',
    image: images.categorySwim,
  },
  {
    title: 'AEROVUE FISH',
    description: 'Polarized precision for glare-free visibility on the water. Spot every detail. Master the conditions.',
    image: images.categoryFish,
  },
];

const products = [
  {
    title: 'PolarEdge™',
    price: '95.99',
    variants: 2,
    tag: 'Best Seller',
    image: images.productPolarEdge,
  },
  {
    title: 'AquaPulse™',
    price: '65.99',
    variants: 4,
    tag: 'Top Pick',
    image: images.productAquaPulse,
  },
  {
    title: 'AeroDash™',
    price: '89.99',
    variants: 3,
    tag: 'Brand Choose',
    image: images.productAeroDash,
  },
];

const features = [
  {
    num: '01',
    title: 'Ultra-Light Performance',
    desc: 'Designed for speed, endurance, and zero distractions.',
    image: images.featureLight,
  },
  {
    num: '02',
    title: 'Precision Optics',
    desc: 'Crystal-clear vision engineered for every sport environment.',
    image: images.featureOptics,
  },
  {
    num: '03',
    title: 'Superior Protection',
    desc: 'UV400, anti-fog, impact-resistant—built for real athletes.',
    image: images.featureProtection,
  },
  {
    num: '04',
    title: 'Ergonomic Comfort',
    desc: 'Fits naturally, stays stable, moves with you.',
    image: images.featureComfort,
  },
];

const reviews = [
  { text: 'TideMaster\'s polarized lens cuts through glare better than anything I\'ve used. Spotting fish in bright conditions is so much easier now.', name: 'Ryan Cooper', role: 'Fishing Community Member', avatar: images.avatarRyan },
  { text: 'As a triathlete, eyewear must survive running, water, and speed. AEROVUE delivers on all three. Reliable, tough, and crystal clear in every condition.', name: 'Horge Lorzen', role: 'Triathlete', avatar: images.avatarHorge },
  { text: 'I\'m not an athlete, but I hike and bike every weekend. The AeroDash makes everything look sharper and feels super lightweight. Totally worth it.', name: 'Sofia Martinez', role: 'Casual Outdoor Enthusiast', avatar: images.avatarSofia },
  { text: 'The visibility underwater is insane. AquaPulse stays comfortable even after hours of training. I finally found goggles that match my performance goals.', name: 'Elena Brooks', role: 'Open Water Swimmer', avatar: images.avatarElena },
  { text: 'I use AEROVUE daily on my motor commute. Lightweight, comfy, and keeps my eyes protected. Didn\'t expect sport eyewear to feel this good for everyday use.', name: 'Mark Lewis', role: 'Everyday User', avatar: images.avatarMark },
  { text: 'AEROVUE RunStrike gives me the clarity I need during long-distance runs. No fogging, no slipping—just pure focus. It\'s become my must-have gear for every race.', name: 'Maya Rinaldi', role: 'Marathon Runner', avatar: images.avatarMaya },
];

const faqs = [
  { question: 'Are AEROVUE sports glasses suitable for all outdoor conditions?', answer: 'Yes. Every pair is engineered with weather-resistant coatings, anti-glare lenses, and durable frames designed to perform in bright sun, rain, or changing environments.' },
  { question: 'Do the lenses fog up during intense activity?', answer: 'Our lenses feature advanced anti-fog technology that prevents condensation even during high-intensity activities in varying temperatures.' },
  { question: 'Can I use the running glasses for cycling or daily wear?', answer: 'Absolutely. Our versatile designs are engineered to perform across multiple sports and everyday activities with equal comfort and clarity.' },
  { question: 'Are the frames flexible and impact-resistant?', answer: 'Yes, our frames are crafted from lightweight, flexible materials that offer exceptional impact resistance without compromising on comfort.' },
  { question: 'Do you offer prescription lens options?', answer: 'We offer prescription-compatible designs for select models. Contact our support team to learn more about customization options.' },
  { question: 'How do I choose the right model for my sport?', answer: 'Consider your primary activity, environment, and lens needs. Our sport-specific series are optimized for different conditions—from running to swimming to fishing.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll reveal refs for each section with different animations
  const heroRef = useScrollReveal({ direction: 'fade', duration: 0.8 });
  const heroTitleRef = useScrollReveal({ direction: 'up', delay: 100, distance: 60 });
  const heroTextRef = useScrollReveal({ direction: 'up', delay: 200, distance: 40 });
  const heroCtaRef = useScrollReveal({ direction: 'up', delay: 300, distance: 30 });

  const categoryRef = useScrollReveal({ direction: 'fade' });
  const categoryTitleRef = useScrollReveal({ direction: 'up', distance: 40 });
  const categoryCardsRef = useStaggerReveal(3, { staggerDelay: 150, baseDelay: 100 });

  const highlightRef = useScrollReveal({ direction: 'fade' });
  const highlightTitleRef = useScrollReveal({ direction: 'left', distance: 40 });
  const highlightProductsRef = useStaggerReveal(3, { staggerDelay: 200, baseDelay: 100 });

  const motionRef = useScrollReveal({ direction: 'fade' });
  const featuresHeaderRef = useScrollReveal({ direction: 'scale', delay: 100 });
  const featuresGridRef = useStaggerReveal(4, { staggerDelay: 150 });

  const videoRef = useScrollReveal({ direction: 'scale', delay: 100 });
  const motionContentRef = useScrollReveal({ direction: 'left', delay: 200 });

  const reviewRef = useScrollReveal({ direction: 'fade' });
  const reviewAvatarsRef = useScrollReveal({ direction: 'scale', delay: 100 });
  const reviewTitleRef = useScrollReveal({ direction: 'up', delay: 200 });
  const reviewCardsRef = useStaggerReveal(6, { staggerDelay: 100, baseDelay: 100 });

  const faqRef = useScrollReveal({ direction: 'fade' });
  const faqLeftRef = useScrollReveal({ direction: 'left', distance: 40 });
  const faqRightRef = useScrollReveal({ direction: 'right', distance: 40 });
  const faqItemsRef = useStaggerReveal(6, { staggerDelay: 80, baseDelay: 100 });

  const newsletterRef = useScrollReveal({ direction: 'fade', delay: 100 });

  return (
    <div className="bg-aerovue-grey-white flex flex-col items-start w-full overflow-x-hidden">
      {/* ===== Hero Section ===== */}
      <header className="w-full" ref={heroRef}>
        <div className="flex flex-col items-start w-full">
          <Navbar />
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col lg:flex-row gap-[64px] items-start w-full">
              <div className="flex-1 flex flex-col items-start justify-between min-w-px pl-4 md:pl-[60px] pt-[60px] self-stretch">
                <div className="flex flex-col gap-6 items-start w-full">
                  <h1 ref={heroTitleRef} className="font-host-grotesk font-semibold leading-none text-[40px] md:text-[48px] lg:text-heading-1 text-neutral-100 uppercase">
                    Enhance Your Vision for Every Moment
                  </h1>
                  <p ref={heroTextRef} className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 w-full max-w-[485px]">
                    Introducing our precision engineered sport eyewear, crafted to enhance your visual clarity, boost performance, and offer unmatched protection.
                  </p>
                  <div ref={heroCtaRef} className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Explore Shop</Button>
                    <Button variant="secondary">Colaborate</Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start mt-8 lg:mt-0 w-[291px]">
                  <div className="flex gap-3 items-start">
                    <div className="h-[48px] w-[132px]">
                      <img alt="12k+ customers" className="block size-full" src={images.avatarGroup} />
                    </div>
                    <span className="font-host-grotesk font-semibold leading-none text-[48px] tracking-[-0.96px] uppercase text-neutral-100">
                      12k+
                    </span>
                  </div>
                  <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
                    Whether you&rsquo;re on the trails, riding the waves, or competing
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-start shrink-0 w-full lg:w-auto">
                <div className="bg-[#d9d9d9] h-[400px] md:h-[783px] w-full lg:w-[903px] overflow-hidden">
                  <img alt="AEROVUE Hero" className="w-full h-full object-cover" src={images.heroBg} />
                </div>
                <div className="flex flex-col md:flex-row items-end justify-between pr-4 md:pr-[60px] w-full gap-4">
                  <div className="flex gap-0">
                    <div className="bg-aerovue-primary h-[13px] w-[86px]" />
                    <div className="bg-aerovue-secondary h-[13px] w-[86px]" />
                    <div className="bg-aerovue-light h-[13px] w-[86px]" />
                  </div>
                  <div className="flex gap-[53px] items-center">
                    <div className="flex flex-col gap-3 items-start">
                      <span className="font-host-grotesk font-semibold leading-none text-[32px] md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">50,000+</span>
                      <span className="font-host-grotesk font-medium leading-[24px] text-[16px] text-aerovue-grey-700">units sold globally</span>
                    </div>
                    <div className="flex flex-col gap-3 items-start w-[154px]">
                      <span className="font-host-grotesk font-semibold leading-none text-[32px] md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">4.8/5</span>
                      <span className="font-host-grotesk font-medium leading-[24px] text-[16px] text-aerovue-grey-700">from 8,500+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Section Category ===== */}
      <section className="w-full" ref={categoryRef}>
        <div className="flex flex-col gap-[100px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col gap-[64px] items-center justify-center w-full">
            <div className="flex flex-col gap-8 items-center w-full">
              <div ref={categoryTitleRef} className="h-[200px] md:h-[402px] overflow-clip w-full max-w-[1052px]">
                <img alt="Sport Series" className="w-full h-full object-cover" src={images.categoryBanner} />
              </div>
              <div className="flex flex-col lg:flex-row gap-[48px] items-end w-full">
                <div className="flex-1 flex flex-col gap-3 items-start">
                  <div ref={categoryTitleRef}>
                    <Label>category</Label>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6 items-end justify-between w-full">
                    <h2 ref={categoryTitleRef} className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase max-w-[517px]">
                      Explore Our<br />Sport Series
                    </h2>
                    <p ref={categoryTitleRef} className="flex-1 font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 min-w-px max-w-[569px]">
                      Discover performance eyewear built for your world&mdash;whether you&rsquo;re racing on the track, cutting through open water, or scanning the horizon on your next fishing trip.
                    </p>
                  </div>
                </div>
                <Button variant="primary" className="hidden lg:flex">Shop The Series</Button>
              </div>
            </div>
            <div ref={categoryCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] w-full">
              {categories.map((cat, i) => (
                <CategoryCard key={i} category={cat} />
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* ===== Best of Series ===== */}
      <section className="w-full" ref={highlightRef}>
        <div className="flex flex-col gap-[60px] items-start px-4 md:px-[60px] py-[100px] w-full">
          <div ref={highlightTitleRef} className="flex items-center justify-between w-full">
            <h2 className="font-host-grotesk font-semibold leading-none text-[40px] md:text-heading-1 text-aerovue-secondary uppercase">
              Best of Series
            </h2>
            <div className="hidden md:flex items-center justify-center">
              <div className="rotate-180">
                <div className="h-[30.25px] w-[158px]">
                  <img alt="" className="block size-full" src={images.groupOrnament} />
                </div>
              </div>
            </div>
          </div>
          <div ref={highlightProductsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="relative w-full" ref={featuresHeaderRef}>
        <div className="absolute inset-0">
          <img alt="" className="w-full h-full object-cover" src={images.featureLight} />
        </div>
        <div className="relative backdrop-blur-[150px] bg-[rgba(117,153,222,0.32)] flex flex-col gap-[60px] items-center px-4 md:px-[60px] py-[100px] w-full">
          <div className="absolute h-[1799px] left-[455px] top-[364.5px] w-[562px] hidden lg:block opacity-30">
            <img alt="" className="block size-full" src={images.line} />
          </div>
          <div className="flex flex-col gap-4 items-center w-full max-w-[1004px]">
            <div className="flex flex-col items-center relative">
              <span className="font-host-grotesk font-bold leading-[24px] text-[16px] text-center tracking-[1.28px] uppercase text-aerovue-light z-[2]">
                features
              </span>
              <div className="bg-aerovue-primary h-[9px] w-[121px] relative mt-[-4px]" />
            </div>
            <div className="flex flex-col gap-6 items-center text-center w-full">
              <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-light uppercase">
                Why Athletes Choose <em className="font-semibold italic not-italic">AER</em><em className="font-semibold italic text-aerovue-primary not-italic">OV</em><em className="font-semibold italic not-italic">UE</em>
              </h2>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-[#f9f9f9] max-w-[1004px]">
                Every AEROVUE product is tested in real conditions&mdash;on the track, in open water, and under the sun. So whatever challenge you face, your vision stays sharp and unstoppable.
              </p>
            </div>
          </div>
          <div ref={featuresGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1392px]">
            {features.map((feature, i) => (
              <div key={i} className="relative card-hover">
                <div className="relative overflow-hidden rounded-lg img-zoom">
                  <img alt={feature.title} className="w-full h-[350px] md:h-[557px] object-cover" src={feature.image} />
                </div>
                <div className="absolute bottom-4 left-4 bg-aerovue-primary p-4 max-w-[85%]">
                  <h3 className="font-host-grotesk font-semibold leading-[32px] text-[20px] md:text-[24px] tracking-[-0.48px] text-aerovue-light">{feature.title}</h3>
                  <p className="font-host-grotesk font-normal leading-[26px] text-[16px] md:text-[18px] tracking-[-0.36px] text-aerovue-light">{feature.desc}</p>
                </div>
                <span className="absolute top-4 left-4 font-greater-theory leading-[41px] not-italic text-aerovue-primary text-[48px] md:text-[64px]">{feature.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Motion Section ===== */}
      <section className="w-full" ref={motionRef}>
        <div className="flex flex-col gap-[64px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <SectionHeader
            label="motion"
            title="Proven in the Field. Approved by Experts."
            description="This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle."
          />
          <div className="flex flex-col gap-[100px] items-start w-full">
            <div ref={videoRef} className="flex flex-col gap-6 items-center w-full">
              <div className="relative h-[400px] md:h-[741px] w-full overflow-hidden rounded-lg">
                <img alt="AEROVUE in action" className="absolute inset-0 w-full h-full object-cover" src={images.videoThumbnail} />
                <div className="absolute inset-0 bg-[rgba(22,35,42,0.56)]" />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[48px] hover:scale-110 transition-transform" aria-label="Play video">
                  <img alt="Play" className="block size-full" src={images.iconPlay} />
                </button>
              </div>
              <p className="font-host-grotesk font-semibold leading-[1.2] text-[24px] md:text-[32px] tracking-[-0.64px] text-aerovue-grey-900 text-center">
                &ldquo;Where athletic experience meets scientific precision.&rdquo;
              </p>
            </div>
            <div ref={motionContentRef} className="flex flex-col items-end w-full">
              <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
                <div className="hidden lg:flex items-center justify-center">
                  <div className="h-[262px] w-[50px]">
                    <img alt="" className="block size-full" src={images.frameOrnament} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
                  <div className="flex flex-col gap-10 h-full items-start justify-center max-w-[583px]">
                    <div className="w-full h-[300px] md:h-[490px]">
                      <img alt="Research and development" className="w-full h-full object-cover rounded-lg" src={images.motionImage1} />
                    </div>
                    <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
                      We also collaborate with sports doctors, optometrists, and performance specialists to refine our lens technology, ergonomic design, and long-term eye protection features.
                    </p>
                  </div>
                  <div className="flex flex-col gap-10 items-end w-full lg:w-[661px]">
                    <div className="flex flex-col gap-3 items-end max-w-[538px]">
                      <h3 className="font-host-grotesk font-semibold leading-[32px] text-[24px] tracking-[-0.48px] text-aerovue-primary whitespace-nowrap">
                        Proven in the Field. Approved by Experts.
                      </h3>
                      <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 text-right">
                        At AEROVUE, performance isn&rsquo;t just a promise&mdash;it&rsquo;s a standard.<br />
                        Every product is rigorously tested by professional athletes across running, swimming, and outdoor sports to ensure clarity, comfort, and durability in real-world conditions.
                      </p>
                    </div>
                    <div className="h-[300px] md:h-[420px] w-full">
                      <img alt="Athletes testing" className="w-full h-full object-cover rounded-lg" src={images.motionImage2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Review Section ===== */}
      <section className="w-full" ref={reviewRef}>
        <div className="flex flex-col gap-[64px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col gap-6 items-center max-w-[1112px]">
            <div ref={reviewAvatarsRef} className="flex items-center">
              {[images.avatarSm1, images.avatarSm2, images.avatarSm3, images.avatarSm4].map((src, i) => (
                <div key={i} className={`size-[55px] ${i < 3 ? 'mr-[-20px]' : ''}`}>
                  <img alt="" className="block size-full rounded-full border-2 border-white" src={src} />
                </div>
              ))}
            </div>
            <div ref={reviewTitleRef} className="flex flex-col gap-8 items-center text-center w-full">
              <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase">
                Trusted by Athletes. Built for Performance.
              </h2>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[621px]">
                This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle.
              </p>
            </div>
          </div>
          <div ref={reviewCardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="w-full" ref={faqRef}>
        <div className="flex flex-col lg:flex-row gap-[64px] items-start px-4 md:px-[60px] py-[100px] w-full">
          <div ref={faqLeftRef} className="flex flex-col items-start justify-between self-stretch w-full lg:w-[492px]">
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col gap-4 items-start">
                <Label>FAQ</Label>
                <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-4 text-aerovue-secondary uppercase max-w-[443px]">
                  Questions About Aerovue
                </h2>
              </div>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[443px]">
                Everything you need to know before choosing your AEROVUE gear.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start mt-8 lg:mt-0 w-full">
              <div className="flex gap-6 items-center">
                <div className="size-[32px]">
                  <img alt="" className="block size-full" src={images.iconMail} />
                </div>
                <a href="mailto:support@aerovue.com" className="font-host-grotesk font-semibold leading-[32px] text-[20px] md:text-[24px] tracking-[-0.48px] text-aerovue-grey-900 hover:text-aerovue-primary transition-colors">support@aerovue.com</a>
              </div>
              <div className="flex gap-6 items-center">
                <div className="size-[32px]">
                  <img alt="" className="block size-full" src={images.iconPhone} />
                </div>
                <a href="tel:+62891034648" className="font-host-grotesk font-semibold leading-[32px] text-[20px] md:text-[24px] tracking-[-0.48px] text-aerovue-grey-900 hover:text-aerovue-primary transition-colors">+62891034648</a>
              </div>
            </div>
          </div>
          <div ref={faqRightRef} className="flex-1 flex flex-col gap-[48px] items-start min-w-px w-full">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                number={i + 1}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <div ref={newsletterRef}>
        <NewsletterSection />
      </div>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}