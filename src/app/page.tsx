import ConversationEngine from "@/components/ConversationEngine";
import ArticleCard from "@/components/ArticleCard";
import SEO from "@/components/SEO";
import OutreachHelper from "@/components/OutreachHelper";
import { ARTICLES } from "@/lib/articles";
import { Sparkles, Library, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";

export default function Home() {
  const featuredArticle = ARTICLES[0];
  const gridArticles = ARTICLES.slice(1);

  return (
    <div className="layout-wrapper">
      <SEO 
        title="Design Help Desk | Digital Magazine & SEO Engine" 
        description="Daily updated 2026 design trends, budget-tiered renovations, and creator-focused interior architecture insights."
      />
      <header className="header glass">
        <div className="logo-group">
          <Sparkles className="logo-icon" />
          <h1 className="logo-text">DESIGN HELP DESK</h1>
        </div>
        <nav className="nav">
          <a href="#magazine" className="nav-link">MAGAZINE</a>
          <a href="#budget" className="nav-link">BUDGET GUIDES</a>
          <button className="cta-btn">ACCESS BRIEF</button>
        </nav>
      </header>

      {/* Magazine Hero Cover */}
      <section className="hero-cover">
        <div className="cover-image-container">
          <img src={featuredArticle.coverImage} alt={featuredArticle.title} className="hero-bg" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content-overlay">
          <div className="issue-tag">ISSUE NO. 01 / APRIL 2026</div>
          <h2 className="hero-main-title serif italic">{featuredArticle.title}</h2>
          <p className="hero-main-subtitle">{featuredArticle.subtitle}</p>
          <div className="hero-meta">
            <span className="creator">Featured Work by {featuredArticle.creatorName}</span>
            <div className="hero-actions">
              <button className="read-btn glass">READ COVER STORY</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reasoning Engine Integration */}
      <section className="engine-section">
        <div className="section-intro">
          <span className="serif italic text-blue">Knowledge-as-a-Service</span>
          <h2 className="section-title">INTELLIGENT REASONING</h2>
        </div>
        <ConversationEngine />
      </section>

      {/* Magazine Masonry Grid */}
      <section id="magazine" className="magazine-grid-section">
        <div className="grid-header">
          <h2 className="serif italic">The Article Stack</h2>
          <div className="budget-filters">
            {['ESSENTIAL', 'STANDARD', 'PREMIUM', 'SIGNATURE'].map(tier => (
              <button key={tier} className="filter-pill">{tier}</button>
            ))}
          </div>
        </div>
        
        <div className="masonry-grid">
          {gridArticles.map((article, idx) => (
            <ArticleCard key={article.slug} article={article} index={idx} />
          ))}
          {/* Repeat some cards or add more content later */}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-card glass">
            <Library size={24} className="mb-4 text-blue" />
            <h3>DAILY UPDATES</h3>
            <p>New articles and covers published every 48 hours.</p>
          </div>
          <div className="footer-card glass">
            <BookOpen size={24} className="mb-4 text-blue" />
            <h3>VERIFIED CONTENT</h3>
            <p>Direct exposure and credit for original creators.</p>
          </div>
          <div className="footer-card glass">
            <ShieldCheck size={24} className="mb-4 text-blue" />
            <h3>SEO POWERED</h3>
            <p>Industry-leading design intelligence for homeowners.</p>
          </div>
        </div>
        <p className="copyright">&copy; 2026 Design Help Desk. All Rights Reserved.</p>
      </footer>

      {/* Internal Management (Visible in Dev/Demo) */}
      <section className="internal-tools">
        <OutreachHelper />
      </section>

    </div>
  );
}
