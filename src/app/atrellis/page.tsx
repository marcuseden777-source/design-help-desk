'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './atrellis.module.css';

type BotMode = 'lead' | 'quote' | 'admin';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const botConfigs: Record<BotMode, { name: string; avatar: string; greeting: string }> = {
  lead: {
    name: 'Lead Qualifier Bot',
    avatar: '🛡️',
    greeting:
      "G'day! I'm the Lead Qualifier — Andrew's first line of defence. Pretend you're a new customer and ask about a project. I'll filter out the tyre-kickers before they reach him.",
  },
  quote: {
    name: 'Quotation Bot',
    avatar: '📊',
    greeting:
      "Ready to crunch numbers! Give me project details — room size, material type, scope — and I'll fire back a ballpark figure so Andrew doesn't have to stop mid-job to answer calls.",
  },
  admin: {
    name: 'Voice Assistant',
    avatar: '🎙️',
    greeting:
      "Hands-free mode active. Type a messy site note or rambling thought and I'll turn it into a clean, numbered task list for the crew.",
  },
};

function getBotResponse(mode: BotMode): string {
  if (mode === 'lead') {
    return "Thanks for reaching out! Before I connect you with Andrew, could you share your approximate budget range and ideal start date? This helps him prioritise your project and give you his best attention.";
  }
  if (mode === 'quote') {
    return "Based on current rates (~$65/sqm for tiling, ~$120/sqm for timber), a project that size is roughly $4,500–$6,200 supply-and-install. I've flagged this estimate for Andrew — he'll confirm with a full quote after a site visit.";
  }
  return "Got it. Here's the task list for the crew:\n1. Order tile adhesive (3 bags)\n2. Confirm waterproofing is dry before tiling\n3. Check site progress — bathroom floor\n4. Call supplier re: delivery ETA\n\nShall I send this to the team?";
}

const selectorBots: { mode: BotMode; emoji: string; name: string; nickname: string }[] = [
  { mode: 'lead',  emoji: '🛡️', name: 'Lead Qualifier',  nickname: '"The Virtual Bouncer"' },
  { mode: 'quote', emoji: '📊', name: 'Quotation Bot',    nickname: '"Instant Estimator"' },
  { mode: 'admin', emoji: '🎙️', name: 'Voice Assistant',  nickname: '"Hands-free Manager"' },
];

const libraryBots = [
  {
    icon: '💬', iconClass: styles.iconGreen,
    title: 'WhatsApp Bot', label: '24/7 Receptionist',
    desc: "Answers FAQs on your business WhatsApp instantly — services, pricing, location — so no lead waits overnight for a reply.",
  },
  {
    icon: '⭐', iconClass: styles.iconAmber,
    title: 'Review Solicitor', label: 'Reputation Builder',
    desc: 'Automatically texts a Google Review link to happy clients 24 hrs after job completion. More 5-stars, zero effort.',
  },
  {
    icon: '🏗️', iconClass: styles.iconPurple,
    title: 'On-Site Status', label: 'Worker Check-In',
    desc: 'Workers tap once to log progress. You get one clean summary SMS instead of ten separate phone calls.',
  },
  {
    icon: '📅', iconClass: styles.iconBlue,
    title: 'Site Scheduler', label: 'Booking Assistant',
    desc: 'Clients self-book a site-visit slot from your live calendar. No back-and-forth, no double bookings.',
  },
  {
    icon: '📜', iconClass: styles.iconRed,
    title: 'Invoicing Bot', label: 'Bookkeeper',
    desc: 'Generates and emails invoices the moment you mark a job complete. Gets paid faster with zero admin.',
  },
  {
    icon: '🖼️', iconClass: styles.iconSlate,
    title: 'Portfolio Gallery', label: 'Digital Showroom',
    desc: 'Clients type "kitchens" or "bathrooms" in chat and instantly see curated photos of your past work.',
  },
];

const tableRows = [
  { title: 'Full-Scroll Animated Website', badgeClass: styles.tdBadgeBlue,  badge: 'One-time',       agency: '$5,000+', price: '$888' },
  { title: 'Google SEO & AI Search Setup',  badgeClass: styles.tdBadgeBlue,  badge: 'One-time',       agency: '$1,500',  price: '$200' },
  { title: 'Social posting (FB / IG)',       badgeClass: styles.tdBadgeAmber, badge: 'Monthly',        agency: '$2,000/mo', price: 'At-Cost' },
  { title: 'Educational Blogs (2–4/mo)',     badgeClass: styles.tdBadgeAmber, badge: 'Monthly',        agency: '$800/mo', price: 'Included' },
];

export default function AtrellisPage() {
  const [mode, setMode] = useState<BotMode>('lead');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ sender: 'bot', text: botConfigs[mode].greeting }]);
    setIsLoading(false);
    setInputValue('');
  }, [mode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = inputValue.trim();
    if (!msg || isLoading) return;
    setMessages(prev => [...prev, { sender: 'user', text: msg }]);
    setInputValue('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, { sender: 'bot', text: getBotResponse(mode) }]);
    }, 1200);
  };

  const resetChat = () => {
    setMessages([{ sender: 'bot', text: botConfigs[mode].greeting }]);
    setIsLoading(false);
    setInputValue('');
  };

  return (
    <div className={styles.page}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;1,700&display=swap');`}</style>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            <div className={styles.logoGroup}>
              <span className={styles.logoWordmark}>Atrellis</span>
              <div className={styles.navDivider} />
              <span className={styles.proposalLabel}>Proposal</span>
            </div>
            <div className={styles.poweredBy}>
              <span className={styles.poweredByLabel}>Powered by</span>
              <span className={styles.movaraWordmark}>Movara</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogoWrap}>
            <div className={styles.headerLogoBox}>
              <div className={styles.headerLogoMark}>A</div>
              <span className={styles.headerLogoText}>Atrellis</span>
            </div>
          </div>

          <h1 className={styles.h1}>
            The <span className={styles.accent}>Digital Foreman</span>
            <br />for Atrellis Design &amp; Build
          </h1>

          <p className={styles.headerSubtitle}>
            Dad, you&apos;ve built the foundation. Now let&apos;s automate the admin so you can focus on the big builds.
          </p>

          <div className={styles.heroActions}>
            <a href="#demo" className={styles.ctaButton}>See it in action ↓</a>
            <a href="#pricing" className={styles.ctaButtonSecondary}>View pricing</a>
          </div>

          <div className={styles.statsStrip}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>85%</span>
              <span className={styles.statLabel}>Less admin time</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Lead response</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>$6.2k</span>
              <span className={styles.statLabel}>Saved vs agency</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className={styles.main}>

        {/* Bot Lab Demo */}
        <section className={styles.section} id="demo">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Interactive Demo</span>
            <h2 className={styles.sectionTitle}>The Bot Lab</h2>
            <p className={styles.sectionSubtitle}>
              Select a bot and see exactly how it handles your daily headaches. Try it — type anything.
            </p>
          </div>

          <div className={styles.botLab}>
            <div className={styles.botLabInner}>
              <div className={styles.botLabTopBar}>
                <div>
                  <div className={styles.botLabTitle}>AI Live Simulator</div>
                  <div className={styles.botLabSubtitle}>Pick a bot below and chat with it</div>
                </div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  <span className={styles.liveBadgeText}>3 Bots Online</span>
                </div>
              </div>

              <div className={styles.botGrid}>
                {/* Bot Selector */}
                <div className={styles.botSelector}>
                  {selectorBots.map((bot) => (
                    <button
                      key={bot.mode}
                      onClick={() => setMode(bot.mode)}
                      className={`${styles.botButton} ${mode === bot.mode ? styles.botButtonActive : ''}`}
                    >
                      <div className={styles.botButtonInner}>
                        <span className={styles.botEmoji}>{bot.emoji}</span>
                        <div>
                          <div className={styles.botBtnName}>{bot.name}</div>
                          <div className={styles.botBtnNickname}>{bot.nickname}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Chat */}
                <div className={styles.chatBox}>
                  <div className={styles.chatHeader}>
                    <div className={styles.chatHeaderLeft}>
                      <div className={styles.chatAvatar}>{botConfigs[mode].avatar}</div>
                      <div>
                        <div className={styles.chatBotName}>{botConfigs[mode].name}</div>
                        <div className={styles.chatOnline}>
                          <span>●</span> Online now
                        </div>
                      </div>
                    </div>
                    <button onClick={resetChat} className={styles.chatResetBtn} title="Reset chat">
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className={styles.chatMessages}>
                    {messages.map((msg, i) => (
                      <div key={i} className={`${styles.chatMessage} ${msg.sender === 'user' ? styles.chatMessageUser : styles.chatMessageBot}`}>
                        <div className={`${styles.messageBubble} ${msg.sender === 'user' ? styles.messageBubbleUser : styles.messageBubbleBot}`}
                          style={{ whiteSpace: 'pre-line' }}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className={`${styles.chatMessage} ${styles.chatMessageBot}`}>
                        <div className={`${styles.messageBubble} ${styles.messageBubbleBot}`}
                          style={{ color: '#94A3B8', fontStyle: 'italic' }}>
                          Typing…
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className={styles.chatFooter}>
                    <form onSubmit={handleSubmit} className={styles.chatForm}>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message…"
                        className={styles.chatInput}
                      />
                      <button type="submit" className={styles.sendBtn}>Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bot Library */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Team</span>
            <h2 className={styles.sectionTitle}>The Bot Library</h2>
            <p className={styles.sectionSubtitle}>
              A growing workforce of digital employees that never sleep, never call in sick, and never ask for a raise.
            </p>
          </div>
          <div className={styles.libraryGrid}>
            {libraryBots.map((bot) => (
              <div key={bot.title} className={styles.botCard}>
                <div className={`${styles.botCardIcon} ${bot.iconClass}`}>{bot.icon}</div>
                <h3 className={styles.botCardTitle}>{bot.title}</h3>
                <p className={styles.botCardLabel}>{bot.label}</p>
                <p className={styles.botCardDesc}>{bot.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Breakdown */}
        <section id="pricing">
          <div className={styles.tableSection}>
            <div className={styles.tableInner}>
              <h2 className={styles.tableTitle}>Investment Breakdown</h2>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <span className={styles.savingsBadge}>
                  🎉 You save $6,212 vs. a standard agency
                </span>
              </div>
              <div className={styles.tableScroll}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>What you get</th>
                      <th>Standard agency</th>
                      <th style={{ color: '#FBBF24' }}>Atrellis Kickstart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.title}>
                        <td>
                          <span className={styles.tdMainLabel}>{row.title}</span>
                          <span className={`${styles.tdBadge} ${row.badgeClass}`}>{row.badge}</span>
                        </td>
                        <td><span className={styles.tdStrikethrough}>{row.agency}</span></td>
                        <td><span className={styles.tdPrice}>{row.price}</span></td>
                      </tr>
                    ))}
                    <tr className={styles.totalRow}>
                      <td><span className={styles.totalLabel}>Total Initial Damage</span></td>
                      <td><span className={styles.totalStrike}>$7,300+</span></td>
                      <td><span className={styles.totalPrice}>$1,088</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                * ~$25/mo in hosting &amp; software licences is not included in the $888 setup fee.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogos}>
            <span className={styles.footerLogoWordmark}>Atrellis</span>
            <span className={styles.footerX}>×</span>
            <span className={styles.footerLogoWordmarkSub}>Movara</span>
          </div>
          <div className={styles.footerDivider} />
          <p className={styles.footerPrepared}>Prepared exclusively for Andrew</p>
          <p className={styles.footerYear}>Atrellis Design &amp; Build Partnership · 2024</p>
        </div>
      </footer>
    </div>
  );
}
