import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Lock
} from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const SLIDE_IMAGES = [
  '/images/hero_nourdoc-wide.png',
  '/images/hero_leadhive-wide.png',
  '/images/hero_services-wide.png',
];

const SLIDE_ALTS = [
  'NourDoc AI Medical Scribe — Ambient Clinical Documentation',
  'LeadHive AI — Omnichannel Conversational Lead Intelligence',
  'Katko AI & Product Engineering — Enterprise Software Architecture',
];

export default function HeroCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const slideDuration = 6000;
  const progressStepMs = 40;
  const totalSlides = 3;

  const slidesData = [
    {
      id: 'nourdoc',
      badge: 'Healthcare AI Solution',
      headline: 'Let AI Handle the Documentation. Let Doctors Focus on Care.',
      headlineHighlight: 'Let Doctors Focus on Care.',
      supportingCopy: 'Introduce AI-assisted clinical documentation that helps healthcare professionals capture consultations, generate structured notes and streamline documentation workflows.',
      primaryCta: { label: 'Explore NourDoc', path: '/nourdoc' },
      secondaryCta: { label: 'Book a Demo', path: '/contact-us?enquiry=nourdoc' },
      tabNumber: '01',
      tabTitle: 'NourDoc',
      tabSubtitle: 'Clinical Intelligence',
      trustTags: ['POPIA-Aligned Architecture', 'Mandatory Physician Review']
    },
    {
      id: 'leadhive',
      badge: 'Conversational Lead Intelligence',
      headline: 'Turn Every Conversation into a Business Opportunity.',
      headlineHighlight: 'a Business Opportunity.',
      supportingCopy: 'Engage prospects, qualify leads and automate customer interactions across digital channels using AI-powered conversational workflows.',
      primaryCta: { label: 'Explore LeadHive AI', path: '/leadhive-ai' },
      secondaryCta: { label: 'Request a Demo', path: '/contact-us?enquiry=leadhive' },
      tabNumber: '02',
      tabTitle: 'LeadHive AI',
      tabSubtitle: 'Conversational Agent',
      trustTags: ['WhatsApp & Omnichannel Sync', 'Automated CRM Calendar Booking']
    },
    {
      id: 'services',
      badge: 'Enterprise Product & AI Engineering',
      headline: 'Build Smarter. Engineer for Impact.',
      headlineHighlight: 'Engineer for Impact.',
      supportingCopy: 'From agentic AI and generative AI to enterprise software engineering and product discovery, Katko helps organisations turn complex challenges into practical digital solutions.',
      primaryCta: { label: 'Explore Our Services', path: '/artificial-intelligence-services' },
      secondaryCta: { label: 'Discuss Your Project', path: '/contact-us?enquiry=services' },
      tabNumber: '03',
      tabTitle: 'AI Services',
      tabSubtitle: 'Product Engineering',
      trustTags: ['Multi-Agent Production Topology', 'Zero Hallucination Guardrails']
    }
  ];

  const goToSlide = useCallback((idx) => {
    setCurrentSlideIndex(idx);
    setProgress(0);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  // Autoplay countdown timer
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const increment = (progressStepMs / slideDuration) * 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, progressStepMs);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, goToNextSlide]);

  const currentSlide = slidesData[currentSlideIndex];

  // Motion variants for hero text displayed directly over the image
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.45, 
        ease: [0.16, 1, 0.3, 1], 
        delay: prefersReducedMotion ? 0 : custom * 0.08 
      }
    }),
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: prefersReducedMotion ? 0.01 : 0.2 } 
    }
  };

  return (
    <section
      className="hero-carousel-premium"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Katko Featured Products and Services"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#0F172A',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1
      }}
    >
      {/* ================= BACKGROUND IMAGES (Clear on right side) ================= */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : 1.065 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: prefersReducedMotion ? 0.01 : 0.7 },
            scale: { duration: prefersReducedMotion ? 0.01 : 8, ease: [0.16, 1, 0.3, 1] }
          }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}
        >
          <img
            src={SLIDE_IMAGES[currentSlideIndex]}
            alt={SLIDE_ALTS[currentSlideIndex]}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Directional image overlay for readable, integrated left-aligned content */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(90deg, rgba(7, 15, 30, 0.86) 0%, rgba(7, 15, 30, 0.7) 33%, rgba(7, 15, 30, 0.28) 53%, transparent 72%)',
          pointerEvents: 'none'
        }} 
      />

      {/* Soft motion layers bring depth to the opening experience without obscuring the image. */}
      <div className="hero-ambient-orb hero-ambient-orb-one" aria-hidden="true" />
      <div className="hero-ambient-orb hero-ambient-orb-two" aria-hidden="true" />
      <div className="hero-fine-grid" aria-hidden="true" />

      {/* ================= CENTER CONTENT: DIRECTLY ON HERO IMAGE ================= */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center',
          paddingTop: 'calc(var(--header-height) + 1.25rem)',
          paddingBottom: '1rem'
        }}
      >
        <Container>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            {/* Left Column: content sits directly on the hero image */}
            <div style={{ maxWidth: '560px', width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    padding: 'clamp(1rem, 2vw, 1.5rem) 0',
                    color: '#FFFFFF',
                    textShadow: '0 2px 18px rgba(4, 10, 20, 0.48)'
                  }}
                >
                  {/* Eyebrow Badge */}
                  <motion.div 
                    custom={0} 
                    variants={fadeUpVariant}
                    style={{ marginBottom: '1.15rem' }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.3rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(7, 15, 30, 0.28)',
                        border: '1px solid rgba(255, 255, 255, 0.28)',
                        color: '#FFD08A',
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-orange)',
                          display: 'inline-block',
                          boxShadow: '0 0 0 3px rgba(243, 140, 19, 0.25)'
                        }}
                      />
                      {currentSlide.badge}
                    </div>
                  </motion.div>

                  {/* Headline: light typography with Katko orange accent */}
                  <motion.h1
                    custom={1}
                    variants={fadeUpVariant}
                    style={{
                      fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)',
                      fontWeight: 800,
                      lineHeight: 1.15,
                      letterSpacing: '-0.035em',
                      color: '#FFFFFF',
                      marginBottom: '1.15rem'
                    }}
                  >
                    {currentSlide.headline.replace(currentSlide.headlineHighlight, '')}
                    <span style={{ color: 'var(--color-orange)' }}>
                      {currentSlide.headlineHighlight}
                    </span>
                  </motion.h1>

                  {/* Supporting Copy */}
                  <motion.p
                    custom={2}
                    variants={fadeUpVariant}
                    style={{
                      fontSize: '0.98rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem',
                      fontWeight: 450
                    }}
                  >
                    {currentSlide.supportingCopy}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    custom={3}
                    variants={fadeUpVariant}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.85rem',
                      alignItems: 'center',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <Button
                      to={currentSlide.primaryCta.path}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight size={16} />}
                      style={{
                        boxShadow: '0 4px 16px rgba(243, 140, 19, 0.35)',
                        padding: '0.8rem 1.6rem'
                      }}
                    >
                      {currentSlide.primaryCta.label}
                    </Button>

                    <Button
                      to={currentSlide.secondaryCta.path}
                      variant="secondary"
                      size="md"
                      style={{
                        backgroundColor: 'rgba(7, 15, 30, 0.18)',
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#FFFFFF',
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                        padding: '0.8rem 1.4rem'
                      }}
                    >
                      {currentSlide.secondaryCta.label}
                    </Button>
                  </motion.div>

                  {/* Trust Verification Strip */}
                  <motion.div
                    custom={4}
                    variants={fadeUpVariant}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      paddingTop: '1.15rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.35)'
                    }}
                  >
                    {currentSlide.trustTags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--color-orange)" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Completely Clear Space showing Hero Background Image */}
            <div style={{ display: 'none' }}>
              {/* Intentionally left clear so background image on right 50% is 100% visible */}
            </div>
          </div>
        </Container>
      </div>

      {/* ================= BOTTOM CONTROL DOCK (Inside 100vh) ================= */}
      <div
        style={{
          position: 'absolute',
          zIndex: 3,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(0deg, rgba(4, 10, 20, 0.72), transparent)',
          padding: '1.25rem 0 1.5rem'
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            {/* Slide Navigation Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: 'min(42vw, 240px)' }}>
              <span style={{ color: '#FFFFFF', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.1em' }}>0{currentSlideIndex + 1}</span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.28)', overflow: 'hidden' }} aria-label={`Slide ${currentSlideIndex + 1} of ${totalSlides}`}>
                <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--color-orange)', transition: 'width 0.04s linear' }} />
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.72rem', fontWeight: 600 }}>0{totalSlides}</span>
            </div>
            <div style={{ display: 'none' }}>
              {slidesData.map((slide, idx) => {
                const isActive = currentSlideIndex === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}: ${slide.headline}`}
                    aria-current={isActive ? 'true' : 'false'}
                    style={{
                      position: 'relative',
                      padding: '0.5rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'rgba(243, 140, 19, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                      border: isActive ? '1px solid rgba(243, 140, 19, 0.9)' : '1px solid rgba(255, 255, 255, 0.13)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      minWidth: '145px',
                      overflow: 'hidden',
                      boxShadow: isActive ? '0 8px 22px rgba(243, 140, 19, 0.2)' : 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.64rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        color: isActive ? '#FFD08A' : 'rgba(255, 255, 255, 0.5)',
                        marginBottom: '0.1rem'
                      }}
                    >
                      {slide.tabNumber} · {slide.tabTitle}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.76)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {slide.tabSubtitle}
                    </div>

                    {/* Smooth Progress Countdown Bar */}
                    {isActive && !prefersReducedMotion && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          height: '2.5px',
                          width: `${progress}%`,
                          backgroundColor: 'var(--color-orange)',
                          transition: 'width 0.04s linear',
                          borderRadius: '0 2px 2px 0'
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Play/Pause & Arrow Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.16)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {isPaused ? <Play size={14} color="var(--color-orange)" /> : <Pause size={14} />}
              </button>

              <button
                type="button"
                onClick={goToPrevSlide}
                aria-label="Previous slide"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.16)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={goToNextSlide}
                aria-label="Next slide"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.16)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <style>{`
        .hero-ambient-orb,
        .hero-fine-grid {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ambient-orb {
          border-radius: 999px;
          filter: blur(12px);
          mix-blend-mode: screen;
        }
        .hero-ambient-orb-one {
          width: 34vw;
          height: 34vw;
          min-width: 320px;
          min-height: 320px;
          left: -12vw;
          top: 12%;
          background: radial-gradient(circle, rgba(243, 140, 19, 0.2) 0%, rgba(243, 140, 19, 0.04) 42%, transparent 70%);
          animation: heroFloatOne 12s ease-in-out infinite alternate;
        }
        .hero-ambient-orb-two {
          width: 26vw;
          height: 26vw;
          min-width: 260px;
          min-height: 260px;
          right: 4vw;
          bottom: 10%;
          background: radial-gradient(circle, rgba(80, 177, 255, 0.16) 0%, transparent 68%);
          animation: heroFloatTwo 16s ease-in-out infinite alternate;
        }
        .hero-fine-grid {
          inset: 0;
          opacity: 0.12;
          background-image: linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: linear-gradient(90deg, black 0%, rgba(0,0,0,0.45) 42%, transparent 70%);
        }
        @keyframes heroFloatOne {
          from { transform: translate3d(0, -2%, 0) scale(0.94); }
          to { transform: translate3d(10%, 7%, 0) scale(1.08); }
        }
        @keyframes heroFloatTwo {
          from { transform: translate3d(0, 0, 0) scale(0.92); }
          to { transform: translate3d(-12%, -8%, 0) scale(1.1); }
        }
        @media (max-width: 768px) {
          .hero-carousel-premium {
            height: 100vh !important;
            min-height: 100vh !important;
          }
          .hero-carousel-premium::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background: linear-gradient(90deg, rgba(7, 15, 30, 0.9) 0%, rgba(7, 15, 30, 0.76) 58%, rgba(7, 15, 30, 0.32) 100%);
          }
          .hero-ambient-orb-one {
            left: -32vw;
            top: 18%;
          }
          .hero-ambient-orb-two {
            right: -25vw;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ambient-orb-one,
          .hero-ambient-orb-two {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
