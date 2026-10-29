import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  CheckCircle, 
  Clock, 
  Zap, 
  ArrowRight, 
  Filter, 
  ChevronDown, 
  Bot, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Send,
  Building,
  CheckCheck
} from 'lucide-react';

export default function LeadHiveDashboardVisual({ compact = false }) {
  const [selectedLead, setSelectedLead] = useState(0);

  const leads = [
    {
      id: 0,
      name: 'Thabo Ndlovu',
      role: 'Operations Director',
      company: 'Apex Logistics Ltd',
      channel: 'WhatsApp',
      channelColor: '#25D366',
      channelBg: '#DCFCE7',
      score: 96,
      scoreColor: '#059669',
      scoreBg: '#D1FAE5',
      time: 'Just now',
      intent: 'Multi-Site Depot Automation',
      budget: 'Enterprise Tier',
      status: 'Demo Scheduled',
      messages: [
        {
          sender: 'prospect',
          time: '10:42 AM',
          text: 'We need to automate freight intake across 3 regional depots by next quarter. What are your deployment times?'
        },
        {
          sender: 'ai',
          time: '10:43 AM',
          text: 'Our typical discovery-to-pilot timeline is 3–4 weeks for multi-site workflows. Would you like to schedule a 20-minute architecture scoping call with our lead engineering team?'
        },
        {
          sender: 'prospect',
          time: '10:45 AM',
          text: 'Yes, that would be ideal. Thursday afternoon works best.'
        }
      ],
      meeting: {
        title: 'Architecture Scoping Consultation (20 min)',
        time: 'Thursday at 14:00 SAST',
        attendees: 'Thabo Ndlovu + Katko Enterprise AI Lead',
        confirmed: true
      }
    },
    {
      id: 1,
      name: 'Dr. Sarah Meyer',
      role: 'Clinical Practice Lead',
      company: 'Highveld Healthcare',
      channel: 'Web Chat',
      channelColor: '#2563EB',
      channelBg: '#DBEAFE',
      score: 98,
      scoreColor: '#059669',
      scoreBg: '#D1FAE5',
      time: '34m ago',
      intent: 'NourDoc Clinical Trial',
      budget: 'Multi-Physician Practice',
      status: 'Meeting Scheduled',
      messages: [
        {
          sender: 'prospect',
          time: '09:20 AM',
          text: 'Does NourDoc support custom templates for cardiology SOAP notes and POPIA compliance?'
        },
        {
          sender: 'ai',
          time: '09:21 AM',
          text: 'Yes, NourDoc includes cardiology-specific SOAP structures and strictly enforces in-memory encryption aligned with POPIA requirements.'
        }
      ],
      meeting: {
        title: 'NourDoc Live Clinical Demonstration',
        time: 'Friday at 11:30 SAST',
        attendees: 'Dr. Sarah Meyer + Katko Health AI Lead',
        confirmed: true
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Product',
      company: 'Fintech Partners SA',
      channel: 'Instagram Direct',
      channelColor: '#9333EA',
      channelBg: '#F3E8FF',
      score: 84,
      scoreColor: '#B45309',
      scoreBg: '#FEF3C7',
      time: '1h ago',
      intent: 'Custom API Integration',
      budget: 'Mid-Market Annual',
      status: 'Intent Scored',
      messages: [
        {
          sender: 'prospect',
          time: '08:15 AM',
          text: 'Exploring conversational lead intelligence to embed within our fintech client onboarding portal.'
        },
        {
          sender: 'ai',
          time: '08:16 AM',
          text: 'LeadHive AI provides secure REST and webhook endpoints to qualify applicants and pass authenticated tokens directly into your core CRM.'
        }
      ],
      meeting: null
    }
  ];

  const currentLead = leads[selectedLead];

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        transition: 'all var(--transition-normal)'
      }}
    >
      {/* Top macOS-style Window Header Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          padding: '0.85rem 1.25rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Real traffic light dots */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
          </div>

          <div style={{ width: 1, height: 16, backgroundColor: '#CBD5E1', margin: '0 0.25rem' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Zap size={16} color="var(--color-orange)" />
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-charcoal)', letterSpacing: '-0.01em' }}>
              LeadHive AI Pipeline &amp; Engagement Hub
            </span>
          </div>
        </div>

        {/* Live Channel Status Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.74rem',
              fontWeight: 700
            }}
          >
            <span 
              style={{ 
                width: 7, 
                height: 7, 
                borderRadius: '50%', 
                backgroundColor: '#10B981', 
                display: 'inline-block',
                boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)' 
              }} 
            />
            Omnichannel Routing Active
          </div>
          <span style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 500 }}>
            94% Qualification SLA
          </span>
        </div>
      </div>

      {/* Main Grid: Responsive 2-column Layout */}
      <div 
        style={{ 
          padding: '1.25rem', 
          display: 'grid', 
          gridTemplateColumns: compact ? '1fr' : '1fr 1.45fr', 
          gap: '1.25rem',
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Left Column: Real-time Inbound Leads Stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              Live Inbound Pipeline
            </span>
            <span style={{ fontSize: '0.7rem', color: '#64748B', backgroundColor: '#F1F5F9', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
              3 Channels Synced
            </span>
          </div>

          {leads.map((lead, idx) => {
            const isSelected = selectedLead === idx;
            return (
              <div
                key={lead.id}
                onClick={() => setSelectedLead(idx)}
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '1.5px solid var(--color-orange)' : '1px solid #E2E8F0',
                  backgroundColor: isSelected ? '#FFF7ED' : '#F8FAFC',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? '0 4px 12px rgba(243, 140, 19, 0.1)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--color-charcoal)' }}>
                      {lead.name}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '0.64rem', 
                        fontWeight: 700, 
                        padding: '0.1rem 0.4rem', 
                        borderRadius: '3px', 
                        backgroundColor: lead.channelBg, 
                        color: lead.channelColor 
                      }}
                    >
                      {lead.channel}
                    </span>
                  </div>

                  <span 
                    style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 700, 
                      padding: '0.15rem 0.45rem', 
                      borderRadius: 'var(--radius-full)', 
                      backgroundColor: lead.scoreBg, 
                      color: lead.scoreColor 
                    }}
                  >
                    Score {lead.score}
                  </span>
                </div>

                <div style={{ fontSize: '0.73rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{lead.company}</span>
                  <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>{lead.time}</span>
                </div>

                <div 
                  style={{ 
                    fontSize: '0.74rem', 
                    color: isSelected ? '#9A3412' : '#475569', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    fontWeight: 500
                  }}
                >
                  "{lead.messages[lead.messages.length - 1].text}"
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Conversational AI & Autonomous Qualification Workspace */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
          }}
        >
          {/* Prospect & Channel Header */}
          <div>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                borderBottom: '1px solid #F1F5F9', 
                paddingBottom: '0.65rem', 
                marginBottom: '0.85rem' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: currentLead.channelBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={16} color={currentLead.channelColor} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                      {currentLead.name}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      ({currentLead.role})
                    </span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
                    {currentLead.company} · Via <strong style={{ color: currentLead.channelColor }}>{currentLead.channel}</strong>
                  </div>
                </div>
              </div>

              <div 
                style={{ 
                  backgroundColor: '#D1FAE5', 
                  color: '#065F46', 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  padding: '0.2rem 0.55rem', 
                  borderRadius: 'var(--radius-full)' 
                }}
              >
                {currentLead.status}
              </div>
            </div>

            {/* Conversation Bubbles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '0.85rem' }}>
              {currentLead.messages.map((msg, mIdx) => (
                <div 
                  key={mIdx}
                  style={{
                    alignSelf: msg.sender === 'prospect' ? 'flex-start' : 'flex-end',
                    maxWidth: '88%',
                    backgroundColor: msg.sender === 'prospect' ? '#F8FAFC' : '#FFF7ED',
                    border: msg.sender === 'prospect' ? '1px solid #E2E8F0' : '1px solid #FED7AA',
                    borderRadius: msg.sender === 'prospect' ? '12px 12px 12px 2px' : '12px 12px 2px 12px',
                    padding: '0.6rem 0.85rem',
                    fontSize: '0.78rem',
                    lineHeight: 1.5,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: msg.sender === 'prospect' ? '#475569' : '#C2410C' }}>
                      {msg.sender === 'prospect' ? currentLead.name : 'LeadHive AI Agent'}
                    </span>
                    <span style={{ fontSize: '0.64rem', color: '#94A3B8' }}>{msg.time}</span>
                  </div>
                  <p style={{ margin: 0, color: msg.sender === 'prospect' ? '#334155' : '#7C2D12' }}>
                    {msg.text}
                  </p>
                </div>
              ))}

              {/* Embedded Booking Confirmation Card if meeting scheduled */}
              {currentLead.meeting && (
                <div 
                  style={{
                    backgroundColor: '#ECFDF5',
                    border: '1.5px solid #A7F3D0',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    marginTop: '0.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065F46', fontSize: '0.76rem', fontWeight: 700 }}>
                      <Calendar size={14} color="#059669" />
                      <span>{currentLead.meeting.title}</span>
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '4px', backgroundColor: '#D1FAE5', color: '#047857' }}>
                      Calendar Synced
                    </span>
                  </div>

                  <div style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 600 }}>
                    📅 {currentLead.meeting.time}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#065F46' }}>
                    👥 {currentLead.meeting.attendees}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Autonomous Qualification Metric Strip (BANT Analysis) */}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 600, color: '#64748B' }}>
                Qualification Stage:
              </span>
              <strong style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCheck size={14} /> Lead Profiled &amp; Synced to CRM
              </strong>
            </div>

            {/* 4-Step Progress Indicator */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', height: '6px' }}>
              <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Intent Verified" />
              <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Budget Verified" />
              <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Authority Confirmed" />
              <div style={{ backgroundColor: '#10B981', borderRadius: '3px' }} title="Calendar Slot Booked" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.35rem', fontSize: '0.65rem', color: '#94A3B8' }}>
              <span>Inbound</span>
              <span>Intent Scored</span>
              <span>BANT Verified</span>
              <span style={{ color: '#059669', fontWeight: 700 }}>Routed to AE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Interface Disclaimer Badge */}
      <div className="illustrative-tag">
        Illustrative interface
      </div>
    </div>
  );
}