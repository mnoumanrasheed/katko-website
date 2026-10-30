import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  CheckCheck,
  Building,
  UserCheck
} from 'lucide-react';

export default function LeadHiveDashboardVisual({ compact = false }) {
  const [selectedLead, setSelectedLead] = useState(0);

  const leads = [
    {
      id: 0,
      name: 'Thabo Ndlovu',
      role: 'Operations Director',
      company: 'Apex Logistics Ltd',
      channel: 'WhatsApp Business',
      channelType: 'whatsapp',
      score: 96,
      intent: 'Multi-Site Depot Automation',
      messages: [
        {
          sender: 'prospect',
          time: '10:42 AM',
          text: 'We need to automate intake across 3 regional freight depots by next quarter. What are your deployment times?'
        },
        {
          sender: 'ai',
          time: '10:43 AM',
          text: 'Our discovery-to-pilot timeline is 3–4 weeks for multi-site workflows. Shall I connect you with our lead architect for a 20-minute scoping call?'
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
        attendees: 'Thabo Ndlovu + Katko Engineering Lead',
        confirmed: true
      }
    },
    {
      id: 1,
      name: 'Dr. Sarah Meyer',
      role: 'Practice Lead',
      company: 'Highveld Health Group',
      channel: 'Omnichannel Web',
      channelType: 'web',
      score: 98,
      intent: 'NourDoc Clinical Trial',
      messages: [
        {
          sender: 'prospect',
          time: '09:20 AM',
          text: 'Does NourDoc support custom templates for cardiology SOAP notes and POPIA compliance?'
        },
        {
          sender: 'ai',
          time: '09:21 AM',
          text: 'Yes, NourDoc includes cardiology-specific SOAP structures and enforces in-memory encryption aligned with POPIA requirements.'
        }
      ],
      meeting: {
        title: 'NourDoc Clinical Demonstration',
        time: 'Friday at 11:30 SAST',
        attendees: 'Dr. Sarah Meyer + Katko Health AI Lead',
        confirmed: true
      }
    }
  ];

  const currentLead = leads[selectedLead];

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 65px -12px rgba(15, 23, 42, 0.09), 0 1px 3px rgba(15, 23, 42, 0.04)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        color: '#0F172A',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      {/* Subtle Warm Top Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-40px',
          width: '320px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(243, 140, 19, 0.08) 0%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Application Header Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.95rem 1.4rem',
          borderBottom: '1px solid #F1F5F9',
          backgroundColor: '#FAFCFE',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>
          <div style={{ width: 1, height: 14, backgroundColor: '#E2E8F0', margin: '0 0.15rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 24,
              height: 24,
              borderRadius: '6px',
              backgroundColor: 'rgba(243, 140, 19, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(243, 140, 19, 0.25)'
            }}>
              <Zap size={13} color="#F38C13" />
            </div>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>
              LeadHive<span style={{ color: '#F38C13' }}>.ai</span>
            </span>
            <span style={{ 
              fontSize: '0.64rem', 
              fontWeight: 700, 
              padding: '0.12rem 0.5rem', 
              borderRadius: '999px', 
              backgroundColor: '#F1F5F9', 
              color: '#475569',
              border: '1px solid #E2E8F0'
            }}>
              Routing Hub
            </span>
          </div>
        </div>

        {/* Live Active Lead Switcher */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {leads.map((lead, idx) => (
            <button
              key={lead.id}
              type="button"
              onClick={() => setSelectedLead(idx)}
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.25rem 0.7rem',
                borderRadius: '6px',
                backgroundColor: selectedLead === idx ? '#0F172A' : '#F1F5F9',
                color: selectedLead === idx ? '#FFFFFF' : '#64748B',
                border: '1px solid',
                borderColor: selectedLead === idx ? '#0F172A' : '#E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {lead.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Prospect & Pipeline Meta Header */}
      <div 
        style={{
          padding: '0.9rem 1.4rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.8rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '10px',
            backgroundColor: 'rgba(243, 140, 19, 0.1)',
            border: '1px solid rgba(243, 140, 19, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.78rem',
            fontWeight: 800,
            color: '#C2410C'
          }}>
            {currentLead.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              {currentLead.name}
              <span style={{ 
                fontSize: '0.65rem', 
                fontWeight: 700, 
                color: currentLead.channelType === 'whatsapp' ? '#059669' : '#0284C7', 
                backgroundColor: currentLead.channelType === 'whatsapp' ? '#ECFDF5' : '#F0F9FF', 
                border: `1px solid ${currentLead.channelType === 'whatsapp' ? '#A7F3D0' : '#BAE6FD'}`,
                padding: '0.12rem 0.5rem', 
                borderRadius: '4px' 
              }}>
                {currentLead.channel}
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
              {currentLead.role} · {currentLead.company}
            </div>
          </div>
        </div>

        {/* Lead Score Indicator */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.45rem',
          padding: '0.25rem 0.75rem', 
          borderRadius: '999px',
          backgroundColor: '#ECFDF5',
          border: '1px solid #A7F3D0',
          color: '#059669',
          fontSize: '0.74rem',
          fontWeight: 700
        }}>
          <Sparkles size={13} color="#059669" />
          <span>Intent Score: {currentLead.score}/100</span>
        </div>
      </div>

      {/* Main Body: Conversational Stream & Calendar Dispatch */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
        
        {/* Chat Messages Container */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            backgroundColor: '#F8FAFC',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            padding: '1.1rem'
          }}
        >
          {currentLead.messages.map((msg, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'ai' ? 'flex-end' : 'flex-start'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.35rem', 
                fontSize: '0.7rem', 
                marginBottom: '0.25rem',
                paddingLeft: msg.sender === 'ai' ? 0 : '0.4rem',
                paddingRight: msg.sender === 'ai' ? '0.4rem' : 0
              }}>
                <span style={{ fontWeight: 700, color: msg.sender === 'ai' ? '#C2410C' : '#475569' }}>
                  {msg.sender === 'ai' ? 'LeadHive Agent' : currentLead.name}
                </span>
                <span style={{ color: '#94A3B8' }}>· {msg.time}</span>
              </div>

              <div 
                style={{
                  maxWidth: '85%',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'ai' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  backgroundColor: msg.sender === 'ai' ? '#FFF7ED' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: msg.sender === 'ai' ? '#FFEDD5' : '#E2E8F0',
                  color: '#0F172A',
                  fontSize: '0.78rem',
                  lineHeight: 1.55,
                  boxShadow: msg.sender === 'ai' ? 'none' : '0 1px 3px rgba(15, 23, 42, 0.04)'
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Automated Qualification Outcome & Calendar Dispatch */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            padding: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 800, color: '#0F172A' }}>
              <Calendar size={15} color="#F38C13" />
              <span>Automated Meeting Dispatch</span>
            </div>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              color: '#059669', 
              backgroundColor: '#ECFDF5', 
              padding: '0.2rem 0.6rem', 
              borderRadius: '999px',
              border: '1px solid #A7F3D0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <CheckCheck size={12} /> Calendar Synced
            </span>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            backgroundColor: '#F8FAFC', 
            padding: '0.75rem 1rem', 
            borderRadius: '10px', 
            border: '1px solid #E2E8F0',
            fontSize: '0.78rem'
          }}>
            <div>
              <div style={{ fontWeight: 800, color: '#0F172A' }}>
                {currentLead.meeting.title}
              </div>
              <div style={{ color: '#C2410C', fontSize: '0.74rem', marginTop: '0.2rem', fontWeight: 700 }}>
                {currentLead.meeting.time}
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.72rem', 
              color: '#475569',
              backgroundColor: '#FFFFFF',
              padding: '0.3rem 0.65rem',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
              fontWeight: 600
            }}>
              <UserCheck size={13} color="#059669" />
              <span>Host: Katko Lead Architect</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
