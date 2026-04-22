import React from 'react';
import {
  Page, Text, View, Document, StyleSheet,
} from '@react-pdf/renderer';

/* ── Palette (mirrors web design tokens) ── */
const C = {
  dark:    '#0F172A',
  dark2:   '#1E293B',
  dark3:   '#334155',
  surface: '#FFFFFF',
  bg:      '#F1F5F9',
  border:  '#E2E8F0',
  text1:   '#0F172A',
  text2:   '#475569',
  text3:   '#94A3B8',
  blue:    '#2563EB',
  blueLight: '#DBEAFE',
  amber:   '#F59E0B',
  green:   '#22C55E',
  iconGreen:  '#DCFCE7',
  iconAmber:  '#FEF3C7',
  iconPurple: '#F3E8FF',
  iconBlue:   '#DBEAFE',
  iconRed:    '#FEE2E2',
  iconSlate:  '#F1F5F9',
};

const styles = StyleSheet.create({
  /* Page */
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: C.bg,
    paddingBottom: 40,
  },

  /* ── Hero ── */
  hero: {
    backgroundColor: C.dark,
    paddingHorizontal: 48,
    paddingTop: 44,
    paddingBottom: 52,
    position: 'relative',
  },
  heroLogoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  heroLogoMark: {
    width: 44,
    height: 44,
    backgroundColor: C.dark3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  heroLogoMarkText: {
    color: C.surface,
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
  },
  heroLogoText: {
    color: C.surface,
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  heroH1: {
    color: C.surface,
    fontSize: 30,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
    lineHeight: 1.15,
    marginBottom: 14,
    maxWidth: 400,
  },
  heroAccent: {
    color: C.amber,
  },
  heroSubtitle: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 1.65,
    maxWidth: 380,
    marginBottom: 28,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 0,
  },
  statBox: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 100,
  },
  statValue: {
    color: C.surface,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
  },
  statLabel: {
    color: C.text3,
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 2,
  },
  /* "Powered by Movara" pill */
  poweredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  poweredLabel: {
    color: C.text3,
    fontSize: 9,
    marginRight: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  movaraPill: {
    borderColor: 'rgba(37,99,235,0.4)',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  movaraText: {
    color: '#93C5FD',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  /* ── Section wrapper ── */
  section: {
    paddingHorizontal: 40,
    paddingTop: 32,
    paddingBottom: 8,
    backgroundColor: C.bg,
  },
  sectionEyebrow: {
    backgroundColor: C.blueLight,
    color: C.blue,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 99,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  sectionTitle: {
    color: C.dark,
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: C.text2,
    fontSize: 11,
    lineHeight: 1.6,
    marginBottom: 18,
    maxWidth: 420,
  },

  /* ── Bot Library grid ── */
  botGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
    marginHorizontal: -6,
  },
  botCard: {
    width: '31%',
    marginHorizontal: '1.1%',
    marginBottom: 12,
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: C.border,
  },
  botCardIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  botCardIcon: {
    fontSize: 16,
  },
  botCardTitle: {
    color: C.dark,
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
  },
  botCardLabel: {
    color: C.blue,
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  botCardDesc: {
    color: C.text2,
    fontSize: 9,
    lineHeight: 1.55,
  },

  /* ── Investment table ── */
  tableSection: {
    backgroundColor: C.dark,
    marginHorizontal: 40,
    marginTop: 28,
    marginBottom: 0,
    borderRadius: 20,
    padding: 32,
  },
  tableSectionTitle: {
    color: C.surface,
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 8,
  },
  savingsBadge: {
    alignSelf: 'center',
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'rgba(245,158,11,0.3)',
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 20,
  },
  savingsBadgeText: {
    color: C.amber,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    paddingBottom: 8,
    marginBottom: 4,
  },
  th: {
    color: C.text3,
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.04)',
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 4,
    backgroundColor: 'rgba(37,99,235,0.18)',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  col1: { flex: 2.2 },
  col2: { flex: 1, textAlign: 'right' },
  col3: { flex: 1, textAlign: 'right' },
  tdMain: {
    color: C.surface,
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
  },
  tdBadge: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tdBadgeBlue: { color: '#93C5FD' },
  tdBadgeAmber: { color: C.amber },
  tdStrike: {
    color: '#475569',
    fontSize: 10,
    textDecoration: 'line-through',
    textAlign: 'right',
  },
  tdPrice: {
    color: C.surface,
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'right',
  },
  totalLabel: {
    color: C.surface,
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -0.3,
  },
  totalStrike: {
    color: '#475569',
    fontSize: 10,
    textDecoration: 'line-through',
    textAlign: 'right',
  },
  totalPrice: {
    color: C.amber,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'right',
    letterSpacing: -0.5,
  },
  tableNote: {
    color: '#475569',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },

  /* ── Footer ── */
  footer: {
    marginTop: 28,
    marginHorizontal: 40,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: C.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  footerWordmark: {
    color: C.dark,
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginRight: 8,
  },
  footerX: {
    color: C.text3,
    fontSize: 14,
    marginRight: 8,
  },
  footerMovara: {
    color: C.blue,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  footerRight: {
    alignItems: 'flex-end',
  },
  footerPrepared: {
    color: C.text2,
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  footerYear: {
    color: C.text3,
    fontSize: 7.5,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});

/* ── Data ── */
const bots = [
  { icon: '💬', bg: C.iconGreen,  title: 'WhatsApp Bot',     label: '24/7 Receptionist', desc: 'Answers FAQs on WhatsApp instantly so no lead waits overnight.' },
  { icon: '⭐', bg: C.iconAmber,  title: 'Review Solicitor', label: 'Reputation Builder', desc: 'Auto-texts a Google Review link 24 hrs after each job.' },
  { icon: '🏗️', bg: C.iconPurple, title: 'On-Site Status',   label: 'Worker Check-In',   desc: 'Workers log progress with one tap — one clean summary SMS to you.' },
  { icon: '📅', bg: C.iconBlue,   title: 'Site Scheduler',   label: 'Booking Assistant', desc: 'Clients self-book from your live calendar. No back-and-forth.' },
  { icon: '📜', bg: C.iconRed,    title: 'Invoicing Bot',    label: 'Bookkeeper',         desc: 'Auto-creates and emails invoices the moment a job is marked done.' },
  { icon: '🖼️', bg: C.iconSlate,  title: 'Portfolio Gallery',label: 'Digital Showroom',  desc: 'Clients type "kitchens" in chat and see curated past-work photos.' },
];

const rows = [
  { title: 'Full-Scroll Animated Website', badgeStyle: styles.tdBadgeBlue,  badge: 'One-time', agency: '$5,000+',   price: '$888' },
  { title: 'Google SEO & AI Search Setup',  badgeStyle: styles.tdBadgeBlue,  badge: 'One-time', agency: '$1,500',    price: '$200' },
  { title: 'Social posting (FB / IG)',       badgeStyle: styles.tdBadgeAmber, badge: 'Monthly',  agency: '$2,000/mo', price: 'At-Cost' },
  { title: 'Educational Blogs (2–4/mo)',     badgeStyle: styles.tdBadgeAmber, badge: 'Monthly',  agency: '$800/mo',   price: 'Included' },
];

/* ── Document ── */
export function AtrellisPdfTemplate() {
  return (
    <Document title="Atrellis Design & Build — Partnership Proposal" author="Movara">
      <Page size="A4" style={styles.page}>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.poweredRow}>
            <Text style={styles.poweredLabel}>Powered by</Text>
            <View style={styles.movaraPill}>
              <Text style={styles.movaraText}>Movara</Text>
            </View>
          </View>

          <View style={styles.heroLogoRow}>
            <View style={styles.heroLogoMark}>
              <Text style={styles.heroLogoMarkText}>A</Text>
            </View>
            <Text style={styles.heroLogoText}>Atrellis</Text>
          </View>

          <Text style={styles.heroH1}>
            <Text>The </Text>
            <Text style={styles.heroAccent}>Digital Foreman</Text>
            <Text>{'\n'}for Atrellis Design & Build</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            Dad, you've built the foundation. Now let's automate the admin so you can focus on the big builds.
          </Text>

          <View style={styles.statsRow}>
            {[
              { value: '85%', label: 'Less admin time' },
              { value: '24/7', label: 'Lead response' },
              { value: '$6.2k', label: 'Saved vs agency' },
            ].map((s) => (
              <View key={s.label} style={styles.statBox}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* BOT LIBRARY */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>The Team</Text>
          <Text style={styles.sectionTitle}>The Bot Library</Text>
          <Text style={styles.sectionSubtitle}>
            A growing workforce of digital employees that never sleep, never call in sick, and never ask for a raise.
          </Text>

          <View style={styles.botGrid}>
            {bots.map((bot) => (
              <View key={bot.title} style={styles.botCard}>
                <View style={[styles.botCardIconBox, { backgroundColor: bot.bg }]}>
                  <Text style={styles.botCardIcon}>{bot.icon}</Text>
                </View>
                <Text style={styles.botCardTitle}>{bot.title}</Text>
                <Text style={styles.botCardLabel}>{bot.label}</Text>
                <Text style={styles.botCardDesc}>{bot.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* INVESTMENT TABLE */}
        <View style={styles.tableSection}>
          <Text style={styles.tableSectionTitle}>Investment Breakdown</Text>
          <View style={styles.savingsBadge}>
            <Text style={styles.savingsBadgeText}>🎉  You save $6,212 vs. a standard agency</Text>
          </View>

          {/* Table header */}
          <View style={styles.tableHeader}>
            <View style={styles.col1}><Text style={styles.th}>What you get</Text></View>
            <View style={styles.col2}><Text style={[styles.th, { textAlign: 'right' }]}>Standard agency</Text></View>
            <View style={styles.col3}><Text style={[styles.th, { textAlign: 'right', color: '#FBBF24' }]}>Atrellis price</Text></View>
          </View>

          {/* Rows */}
          {rows.map((row) => (
            <View key={row.title} style={styles.tableRow}>
              <View style={styles.col1}>
                <Text style={styles.tdMain}>{row.title}</Text>
                <Text style={[styles.tdBadge, row.badgeStyle]}>{row.badge}</Text>
              </View>
              <View style={styles.col2}>
                <Text style={styles.tdStrike}>{row.agency}</Text>
              </View>
              <View style={styles.col3}>
                <Text style={styles.tdPrice}>{row.price}</Text>
              </View>
            </View>
          ))}

          {/* Total row */}
          <View style={styles.totalRow}>
            <View style={styles.col1}>
              <Text style={styles.totalLabel}>Total Initial Damage</Text>
            </View>
            <View style={styles.col2}>
              <Text style={styles.totalStrike}>$7,300+</Text>
            </View>
            <View style={styles.col3}>
              <Text style={styles.totalPrice}>$1,088</Text>
            </View>
          </View>

          <Text style={styles.tableNote}>
            * ~$25/mo in hosting & software licences is not included in the $888 setup fee.
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.footerBrand}>
            <Text style={styles.footerWordmark}>Atrellis</Text>
            <Text style={styles.footerX}>×</Text>
            <Text style={styles.footerMovara}>Movara</Text>
          </View>
          <View style={styles.footerRight}>
            <Text style={styles.footerPrepared}>Prepared exclusively for Andrew</Text>
            <Text style={styles.footerYear}>Atrellis Design & Build Partnership · 2024</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}
