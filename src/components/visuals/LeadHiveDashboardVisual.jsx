import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  CheckCircle, 
  Clock, 
  Zap, 
  ArrowRight, 
  Bot, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles,
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
      channel: 'WhatsApp Business',
      channelColor: '#25D366',
      channelBg: '#DCFCE7',
      score: 96,
      scoreColor: '#059669',
      scoreBg: '#D1FAE5',
      time: 'Just now',
      intent: 'Multi-Site Depot Automation',
      status: 'Meeting Scheduled',
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
      company: 'Highveld Health',
      channel: 'Web Chat',
      channelColor: '#2563EB',
      channelBg: '#DBEAFE',
      score: 98,
      scoreColor: '#059669',
      scoreBg: '#D1FAE5',
      time: '34m ago',
      intent: 'NourDoc Clinical Trial',
      status: 'Demo Confirmed',
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
        boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
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
          padding: '0.85rem 1.25rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>
          <div style={{ width: 1, height: 16, backgroundColor: '#CBD5E1', margin: '0 0.2rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Zap size={15} color="var(--color-orange)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              LeadHive AI Pipeline &amp; Engagement Hub
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
            Omnichannel Routing Active
          </span>
        </div>
      </div>

      {/* Main Conversation & Qualification Interface */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Channel & Prospect Selector Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: '#F8FAFC',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E2E8F0',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', backgroundColor: currentLead.channelBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={16} color={currentLead.channelColor} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-charcoal)' }}>
                  {currentLead.name}
                </span>
                <span style={{ fontSize: '0.68rem', padding: '0.1rem 0.45rem', borderRadius: '4px', backgroundColor: currentLead.channelBg, color: currentLead.channelColor, fontWeight: 700 }}>
                  {currentLead.channel}
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                {currentLead.company} · {currentLead.role}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', backgroundColor: currentLead.scoreBg, color: currentLead.scoreColor }}>
              Score {currentLead.score} · High Intent
            </span>
          </div>
        </div>

        {/* Live Chat Thread with Rich Elements */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid #E2E8F0',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Automated Qualification Dialogue
          </div>

          {currentLead.messages.map((msg, i) => (
            <div 
              key={i}
              style={{
                alignSelf: msg.sender === 'prospect' ? 'flex-start' : 'flex-end',
                maxWidth: '85%',
                backgroundColor: msg.sender === 'prospect' ? '#F8FAFC' : '#FFF7ED',
                border: msg.sender === 'prospect' ? '1px solid #E2E8F0' : '1px solid #FED7AA',
                borderRadius: msg.sender === 'prospect' ? '12px 12px 12px 2px' : '12px 12px 2px 12px',
                padding: '0.65rem 0.85rem',
                fontSize: '0.78rem',
                lineHeight: 1.55,
                color: msg.sender === 'prospect' ? '#334155' : '#7C2D12'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.2rem', fontSize: '0.66rem', fontWeight: 700, color: msg.sender === 'prospect' ? '#64748B' : 'var(--color-orange)' }}>
                <span>{msg.sender === 'prospect' ? currentLead.name : 'LeadHive AI Agent'}</span>
                <span style={{ color: '#94A3B8', fontWeight: 400 }}>{msg.time}</span>
              </div>
              <p style={{ margin: 0 }}>
                {msg.text}
              </p>
            </div>
          ))}

          {/* Embedded Meeting Booking Confirmation Card */}
          {currentLead.meeting && (
            <div 
              style={{
                backgroundColor: '#ECFDF5',
                border: '1.5px solid #A7F3D0',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginTop: '0.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Calendar size={15} color="#059669" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#065F46' }}>
                    {currentLead.meeting.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#047857' }}>
                    📅 {currentLead.meeting.time} · Synced to HubSpot &amp; Calendar
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', backgroundColor: '#FFFFFF', color: '#047857', border: '1px solid #A7F3D0' }}>
                Confirmed
              </span>
            </div>
          )}
        </div>

        {/* BANT Qualification Scorecard */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E2E8F0',
            padding: '0.85rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.74rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--color-charcoal)' }}>
              BANT Lead Verification Status
            </span>
            <span style={{ color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCheck size={14} /> 100% Qualified &amp; CRM Synced
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', height: '6px' }}>
            <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Need Identified" />
            <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Authority Confirmed" />
            <div style={{ backgroundColor: 'var(--color-orange)', borderRadius: '3px' }} title="Budget Verified" />
            <div style={{ backgroundColor: '#10B981', borderRadius: '3px' }} title="Calendar Booked" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: '#64748B' }}>
            <span>Need Identified</span>
            <span>Authority Confirmed</span>
            <span>Budget Verified</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>Routed to Account Executive</span>
          </div>
        </div>
      </div>

      {/* Illustrative tag */}
      <div className="illustrative-tag">
        Illustrative interface
      </div>
    </div>
  );
}