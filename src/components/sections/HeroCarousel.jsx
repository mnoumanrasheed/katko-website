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
  '/images/hero_nourdoc.png',
  '/images/hero_leadhive.jpg',
  '/images/hero_services.jpg',
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
      trustTags: ['POPIA-Aligned Architecture', 'Mandatory Physician Sign-Off']
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

  // Motion variants for text content over image
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.55, 
        ease: [0.16, 1, 0.3, 1], 
        delay: prefersReducedMotion ? 0 : custom * 0.09 
      }
    }),
    exit: { 
      opacity: 0, 
      y: -14, 
      transition: { duration: prefersReducedMotion ? 0.01 : 0.25 } 
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
        backgroundColor: '#0A0F16',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1
      }}
    >
      {/* ================= BACKGROUND IMAGES (Cinematic Cross-Fade) ================= */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.01 : 0.9, 
            ease: [0.16, 1, 0.3, 1] 
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
              objectPosition: 'center center',
              display: 'block'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ================= MULTI-LAYER DARK MASK (Maximum Text Legibility) ================= */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: [
            /* Deep base scrim */
            'rgba(8, 12, 18, 0.65)',
            /* Left directional heavy gradient for crisp text contrast */
            'linear-gradient(95deg, rgba(8,12,18,0.96) 0%, rgba(8,12,18,0.88) 45%, rgba(8,12,18,0.45) 75%, rgba(8,12,18,0.15) 100%)',
            /* Top vignette for navbar integration */
            'linear-gradient(to bottom, rgba(8,12,18,0.65) 0%, transparent 25%)',
            /* Bottom vignette for bottom dock integration */
            'linear-gradient(to top, rgba(8,12,18,0.92) 0%, transparent 35%)'
          ].join(', '),
          pointerEvents: 'none'
        }} 
      />

      {/* Ambient Orange & Amber Aura */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243, 140, 19, 0.22) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(35px)',
          zIndex: 2
        }}
      />

      {/* ================= CENTER CONTENT: ULTRA-PREMIUM TEXT ON IMAGE ================= */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 3, 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center',
          paddingTop: 'calc(var(--header-height) + 1rem)'
        }}
      >
        <Container>
          <div style={{ maxWidth: '820px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Eyebrow Pill Badge */}
                <motion.div 
                  custom={0} 
                  variants={fadeUpVariant}
                  style={{ marginBottom: '1.35rem' }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.35rem 0.95rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(243, 140, 19, 0.18)',
                      border: '1px solid rgba(243, 140, 19, 0.45)',
                      color: 'var(--color-amber)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-orange)',
                        display: 'inline-block',
                        boxShadow: '0 0 8px rgba(243, 140, 19, 0.8)'
                      }}
                    />
                    {currentSlide.badge}
                  </div>
                </motion.div>

                {/* Main Headline — High Contrast Crisp White with Orange Accent */}
                <motion.h1
                  custom={1}
                  variants={fadeUpVariant}
                  style={{
                    fontSize: 'clamp(2.35rem, 4.5vw, 3.85rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    marginBottom: '1.35rem',
                    textShadow: '0 2px 25px rgba(0, 0, 0, 0.85), 0 4px 50px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {currentSlide.headline.replace(currentSlide.headlineHighlight, '')}
                  <span 
                    style={{ 
                      color: 'var(--color-orange)',
                      textShadow: '0 0 35px rgba(243, 140, 19, 0.6), 0 2px 20px rgba(0,0,0,0.85)'
                    }}
                  >
                    {currentSlide.headlineHighlight}
                  </span>
                </motion.h1>

                {/* Supporting Description */}
                <motion.p
                  custom={2}
                  variants={fadeUpVariant}
                  style={{
                    fontSize: 'clamp(1.02rem, 1.5vw, 1.18rem)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.7,
                    marginBottom: '2.25rem',
                    maxWidth: '620px',
                    textShadow: '0 1px 14px rgba(0, 0, 0, 0.85)'
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
                    gap: '1rem',
                    alignItems: 'center',
                    marginBottom: '2.25rem'
                  }}
                >
                  <Button
                    to={currentSlide.primaryCta.path}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight size={17} />}
                    style={{
                      boxShadow: '0 4px 20px rgba(243, 140, 19, 0.45)',
                      padding: '0.9rem 2rem'
                    }}
                  >
                    {currentSlide.primaryCta.label}
                  </Button>

                  <a
                    href={currentSlide.secondaryCta.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      padding: '0.85rem 1.8rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(12px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    }}
                  >
                    {currentSlide.secondaryCta.label}
                  </a>
                </motion.div>

                {/* Trust Verification Strip */}
                <motion.div
                  custom={4}
                  variants={fadeUpVariant}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {currentSlide.trustTags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.85)',
                        backgroundColor: 'rgba(10, 15, 22, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.35rem 0.75rem',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--color-orange)" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>

      {/* ================= BOTTOM CONTROL DOCK (Inside 100vh Container) ================= */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          backgroundColor: 'rgba(8, 12, 18, 0.75)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0.9rem 0'
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {/* Slide Navigation Tabs */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
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
                      padding: '0.55rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isActive ? 'rgba(243, 140, 19, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: isActive ? '1.5px solid var(--color-orange)' : '1px solid rgba(255, 255, 255, 0.15)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      minWidth: '150px',
                      overflow: 'hidden',
                      backdropFilter: 'blur(8px)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        color: isActive ? 'var(--color-orange)' : 'rgba(255, 255, 255, 0.5)',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {slide.tabNumber} · {slide.tabTitle}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
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
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
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
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
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
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
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
        @media (max-width: 768px) {
          .hero-carousel-premium {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
      `}</style>
    </section>
  );
}