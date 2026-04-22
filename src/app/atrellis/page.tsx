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
      "Hello Andrew! I'm the Lead Qualifier. I act as your shield. Try pretending you're a customer and ask about a project—I'll check their budget before they reach you.",
  },
  quote: {
    name: 'Quotation Bot',
    avatar: '📊',
    greeting:
      "Ready to crunch numbers? I'm the Quotation Bot. Give me some project details (like room size or materials) and I'll give you a ballpark figure so you don't have to.",
  },
  admin: {
    name: 'Voice Assistant',
    avatar: '🎙️',
    greeting:
      "Hands-free mode active. Record a voice note or type out a messy thought, and I'll organize it into a task list for the crew.",
  },
};

function getBotResponse(mode: BotMode): string {
  if (mode === 'lead') {
    return "That sounds like a great project! Before we proceed, could you let me know your approximate budget range and when you're looking to start? This helps Andrew prioritize your request.";
  }
  if (mode === 'quote') {
    return "Based on standard rates for tiling at about $60 per sqm, a project of that size would be roughly $4,200 – $5,500. I've noted this down for Andrew to review properly.";
  }
  return "Got it. I've added 'Order materials' and 'Check site progress' to the daily manifest for the Atrellis crew. Would you like me to email this to the supplier?";
}

const selectorBots: { mode: BotMode; emoji: string; name: string; nickname: string }[] = [
  { mode: 'lead',  emoji: '🛡️', name: 'Lead Qualifier',  nickname: '"The Virtual Bouncer"' },
  { mode: 'quote', emoji: '📊', name: 'Quotation Bot',    nickname: '"Instant Estimator"' },
  { mode: 'admin', emoji: '🎙️', name: 'Voice Assistant',  nickname: '"Hands-free Manager"' },
];

const libraryBots = [
  {
    icon: '💬',
    iconClass: styles.iconGreen,
    title: 'WhatsApp Bot',
    label: '24/7 Receptionist',
    desc: "Answers common questions (services, hours, location) instantly on your business WhatsApp so leads don't wait.",
  },
  {
    icon: '⭐',
    iconClass: styles.iconAmber,
    title: 'Review Solicitor',
    label: 'Reputation Builder',
    desc: 'Automatically texts happy clients a Google Review link 24 hours after you finish a job.',
  },
  {
    icon: '🏗️',
    iconClass: styles.iconPurple,
    title: 'On-Site Status',
    label: 'Worker Check-In',
    desc: 'Workers tap a button to update progress; you get a single summary text instead of 20 phone calls.',
  },
  {
    icon: '📅',
    iconClass: styles.iconBlue,
    title: 'Site Scheduler',
    label: 'Booking Assistant',
    desc: 'Lets clients pick a site-visit time on your calendar based on your real availability.',
  },
  {
    icon: '📜',
    iconClass: styles.iconRed,
    title: 'Invoicing Bot',
    label: 'Bookkeeper',
    desc: 'Automatically creates and sends bills via email/text as soon as you mark a job "Done".',
  },
  {
    icon: '🖼️',
    iconClass: styles.iconSlate,
    title: 'Portfolio Gallery',
    label: 'Digital Showroom',
    desc: 'Clients type "Kitchens" in chat to instantly see your past work samples.',
  },
];

const tableRows = [
  {
    title: 'Full-Scroll Animated Website',
    badgeClass: styles.tdBadgeBlue,
    badge: 'One-time Payment',
    agency: '$5,000.00+',
    price: '$888.00',
  },
  {
    title: 'Google SEO & AI Search Setup',
    badgeClass: styles.tdBadgeBlue,
    badge: 'One-time Payment',
    agency: '$1,500.00',
    price: '$200.00',
  },
  {
    title: 'Social posting (FB/IG)',
    badgeClass: styles.tdBadgeAmber,
    badge: 'Monthly Service',
    agency: '$2,000/mo',
    price: 'At-Cost',
  },
  {
    title: 'Educational Blogs (2-4/mo)',
    badgeClass: styles.tdBadgeAmber,
    badge: 'Monthly Service',
    agency: '$800/mo',
    price: 'Included',
  },
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
      {/* Inter font — scoped import so it doesn't bleed into root layout */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');`}</style>

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

      {/* ── HEADER ── */}
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogoWrap}>
            <div className={styles.headerLogoBox}>
              <div className={styles.headerLogoMark}>A</div>
              <span className={styles.headerLogoText}>Atrellis</span>
            </div>
          </div>
          <h1 className={styles.h1}>
            The <span className={styles.accent}>Digital Foreman</span> for Atrellis Design &amp; Build
          </h1>
          <p className={styles.headerSubtitle}>
            Dad, you&apos;ve built the foundation. Now, let&apos;s automate the admin so you can focus on the big builds.
          </p>
          <a href="#demo" className={styles.ctaButton}>See the Demo ↓</a>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className={styles.main}>

        {/* Bot Lab Demo */}
        <section className={styles.section} id="demo">
          <div className={styles.botLab}>
            <div className={styles.botLabInner}>
              <div className={styles.botLabTopBar}>
                <div>
                  <h2 className={styles.botLabTitle}>The Bot Lab</h2>
                  <p className={styles.botLabSubtitle}>Select a bot to see how it handles your daily headaches.</p>
                </div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  <span className={styles.liveBadgeText}>AI Live Simulator</span>
                </div>
              </div>

              <div className={styles.botGrid}>
                {/* Bot selector */}
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

                {/* Chat box */}
                <div className={styles.chatBox}>
                  <div className={styles.chatHeader}>
                    <div className={styles.chatHeaderLeft}>
                      <div className={styles.chatAvatar}>{botConfigs[mode].avatar}</div>
                      <div>
                        <div className={styles.chatBotName}>{botConfigs[mode].name}</div>
                        <div className={styles.chatOnline}>● ONLINE</div>
                      </div>
                    </div>
                    <button onClick={resetChat} className={styles.chatResetBtn} title="Reset chat">
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className={styles.chatMessages}>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`${styles.chatMessage} ${
                          msg.sender === 'user' ? styles.chatMessageUser : styles.chatMessageBot
                        }`}
                      >
                        <div
                          className={`${styles.messageBubble} ${
                            msg.sender === 'user' ? styles.messageBubbleUser : styles.messageBubbleBot
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className={`${styles.chatMessage} ${styles.chatMessageBot}`}>
                        <div className={`${styles.messageBubble} ${styles.messageBubbleBot}`}>
                          <em>Bot is typing…</em>
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
                        placeholder="Ask the bot something..."
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
            <h2 className={styles.sectionTitle}>The Bot Library</h2>
            <p className={styles.sectionSubtitle}>
              A growing workforce of digital employees that never sleep. Choose which ones we &ldquo;hire&rdquo; for Atrellis.
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
        <section>
          <div className={styles.tableSection}>
            <div className={styles.tableInner}>
              <h2 className={styles.tableTitle}>Investment Breakdown</h2>
              <div className={styles.tableScroll}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Solution Element</th>
                      <th>Standard Agency</th>
                      <th style={{ color: '#f59e0b' }}>Atrellis Kickstart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.title}>
                        <td>
                          <span className={styles.tdMainLabel}>{row.title}</span>
                          <span className={`${styles.tdBadge} ${row.badgeClass}`}>{row.badge}</span>
                        </td>
                        <td>
                          <span className={styles.tdStrikethrough}>{row.agency}</span>
                        </td>
                        <td>
                          <span className={styles.tdPrice}>{row.price}</span>
                        </td>
                      </tr>
                    ))}
                    <tr className={styles.totalRow}>
                      <td><span className={styles.totalLabel}>Total Initial Damage</span></td>
                      <td><span className={styles.totalStrike}>$7,300.00+</span></td>
                      <td><span className={styles.totalPrice}>$1,088.00</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                * Monthly hosting and small software licenses (approx. $25) are not included in the $888 setup.
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
          <p className={styles.footerPrepared}>PREPARED EXCLUSIVELY FOR ANDREW</p>
          <p className={styles.footerYear}>Atrellis Design &amp; Build Partnership • 2024</p>
        </div>
      </footer>
    </div>
  );
}
