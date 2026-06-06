import { useState } from 'react';
import { images } from '../assets/images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';
import { ReviewCard, FaqItem } from '../components/ProductCard';
import { Label, SectionHeader } from '../components/SectionTitle';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

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

export default function AboutUs() {
  const [openFaq, setOpenFaq] = useState(0);

  const heroRef = useScrollReveal({ direction: 'fade' });
  const heroTitleRef = useScrollReveal({ direction: 'up', delay: 100 });
  const storyRef = useScrollReveal({ direction: 'fade' });
  const storyImageRef = useScrollReveal({ direction: 'left', distance: 40 });
  const storyTextRef = useScrollReveal({ direction: 'right', distance: 40 });
  const missionRef = useScrollReveal({ direction: 'fade' });
  const missionCardsRef = useStaggerReveal(2, { staggerDelay: 200 });
  const valuesRef = useScrollReveal({ direction: 'fade' });
  const valuesCardsRef = useStaggerReveal(4, { staggerDelay: 150 });
  const motionHeaderRef = useScrollReveal({ direction: 'fade' });
  const videoRef = useScrollReveal({ direction: 'scale', delay: 100 });
  const motionContentRef = useScrollReveal({ direction: 'right', delay: 200 });
  const reviewRef = useScrollReveal({ direction: 'fade' });
  const reviewCardsRef = useStaggerReveal(6, { staggerDelay: 100, baseDelay: 100 });
  const faqLeftRef = useScrollReveal({ direction: 'left', distance: 40 });
  const faqRightRef = useScrollReveal({ direction: 'right', distance: 40 });

  return (
    <div className="bg-aerovue-grey-white flex flex-col items-start w-full overflow-x-hidden">
      {/* Hero Section */}
      <header className="w-full" ref={heroRef}>
        <div className="flex flex-col items-start w-full">
          <Navbar />
          <div className="relative h-[400px] md:h-[600px] lg:h-[899px] w-full bg-gradient-to-br from-aerovue-secondary to-aerovue-dark flex items-center">
            <div className="absolute inset-0 opacity-20">
              <img alt="" className="w-full h-full object-cover" src={images.heroBg} />
            </div>
            <div className="relative z-10 px-4 md:px-[60px] max-w-[800px]">
              <h1 ref={heroTitleRef} className="font-host-grotesk font-semibold leading-none text-[40px] md:text-[56px] lg:text-heading-1 text-aerovue-light uppercase mb-6">
                Behind The Brand
              </h1>
              <p className="font-host-grotesk font-normal leading-[26px] text-[18px] md:text-[20px] tracking-[-0.36px] text-aerovue-light/80 max-w-[600px]">
                At AEROVUE, we believe your vision should never hold you back. Born from a passion for sports and a commitment to precision, we engineer eyewear that helps athletes see sharper, move faster, and perform better.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Company Story */}
      <section className="w-full py-[100px] px-4 md:px-[60px]" ref={storyRef}>
        <div className="flex flex-col lg:flex-row gap-[64px] items-center max-w-[1392px] mx-auto">
          <div ref={storyImageRef} className="flex-1 img-zoom rounded-lg">
            <div className="h-[400px] md:h-[490px] rounded-lg overflow-hidden">
              <img alt="Our Story" className="w-full h-full object-cover" src={images.motionImage1} />
            </div>
          </div>
          <div ref={storyTextRef} className="flex-1 flex flex-col gap-6">
            <Label>Our Story</Label>
            <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-4 text-aerovue-secondary uppercase">
              Engineered for Champions
            </h2>
            <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
              Founded by athletes and optical engineers, AEROVUE started with a simple mission: create sports eyewear that performs as hard as you do. From trail runs to open-water swims, we design every pair to withstand the elements and elevate your experience.
            </p>
            <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
              We also collaborate with sports doctors, optometrists, and performance specialists to refine our lens technology, ergonomic design, and long-term eye protection features.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-[80px] px-4 md:px-[60px] bg-aerovue-grey-border" ref={missionRef}>
        <div className="max-w-[1392px] mx-auto">
          <div ref={missionCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <div className="bg-white p-10 rounded-lg border border-aerovue-grey-100 card-hover">
              <div className="size-[48px] mb-6 bg-aerovue-primary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-host-grotesk font-semibold leading-none text-[28px] md:text-heading-6 text-aerovue-secondary uppercase mb-4">Our Mission</h3>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
                To empower every athlete with precision-engineered eyewear that enhances visual clarity, ensures protection, and elevates performance in any environment.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg border border-aerovue-grey-100 card-hover">
              <div className="size-[48px] mb-6 bg-aerovue-primary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-host-grotesk font-semibold leading-none text-[28px] md:text-heading-6 text-aerovue-secondary uppercase mb-4">Our Vision</h3>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">
                To become the world's most trusted sports eyewear brand, where science meets sport, and every athlete sees the world through clearer, sharper eyes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-[100px] px-4 md:px-[60px]" ref={valuesRef}>
        <div className="max-w-[1392px] mx-auto">
          <div className="text-center mb-[60px]">
            <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-4 text-aerovue-secondary uppercase mb-4">Our Core Values</h2>
            <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[621px] mx-auto">The principles that drive every lens, frame, and innovation.</p>
          </div>
          <div ref={valuesCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Precision First', desc: 'Every lens is engineered for crystal-clear vision in any condition.' },
              { icon: '🛡️', title: 'Uncompromising Protection', desc: 'UV400, impact-resistant, anti-fog—your safety is our priority.' },
              { icon: '⚡', title: 'Peak Performance', desc: 'Lightweight designs that move with you, zero distractions.' },
              { icon: '🌍', title: 'Athlete-Driven', desc: 'Tested by pros, refined by science, trusted by champions.' },
            ].map((value, i) => (
              <div key={i} className="bg-aerovue-grey-border p-8 rounded-lg border border-aerovue-grey-100 card-hover">
                <span className="text-[40px] mb-4 block">{value.icon}</span>
                <h3 className="font-host-grotesk font-semibold leading-[32px] text-[24px] tracking-[-0.48px] text-aerovue-grey-900 mb-3">{value.title}</h3>
                <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Section */}
      <section className="w-full" ref={motionHeaderRef}>
        <div className="flex flex-col gap-[64px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <SectionHeader label="motion" title="Proven in the Field. Approved by Experts." description="This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle." />
          <div className="flex flex-col gap-[100px] items-start w-full max-w-[1392px]">
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
                    <div className="w-full h-[300px] md:h-[490px] rounded-lg overflow-hidden img-zoom">
                      <img alt="Research and development" className="w-full h-full object-cover" src={images.motionImage1} />
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
                    <div className="h-[300px] md:h-[420px] w-full rounded-lg overflow-hidden img-zoom">
                      <img alt="Athletes testing" className="w-full h-full object-cover" src={images.motionImage2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="w-full" ref={reviewRef}>
        <div className="flex flex-col gap-[64px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col gap-6 items-center max-w-[1112px]">
            <div className="flex items-center">
              {[images.avatarSm1, images.avatarSm2, images.avatarSm3, images.avatarSm4].map((src, i) => (
                <div key={i} className={`size-[55px] ${i < 3 ? 'mr-[-20px]' : ''}`}>
                  <img alt="" className="block size-full rounded-full border-2 border-white" src={src} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 items-center text-center w-full">
              <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase">
                Trusted by Athletes. Built for Performance.
              </h2>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[621px]">
                This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle.
              </p>
            </div>
          </div>
          <div ref={reviewCardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1392px]">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row gap-[64px] items-start px-4 md:px-[60px] py-[100px] w-full max-w-[1512px] mx-auto">
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

      <NewsletterSection />
      <Footer />
    </div>
  );
}