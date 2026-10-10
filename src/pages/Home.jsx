import { Link } from 'react-router-dom';
import { Gauge, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, PRICE } from '../data/products';
import styles from './Home.module.css';

const byId = (id) => products.find((p) => p.id === id);

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const heroMain = byId('p1');
  const heroSide = [byId('p15'), byId('p4')];

  const collections = [
    { cat: 'F1 Racing', title: 'F1 Racing', img: byId('p2').image },
    { cat: 'Porsche 911', title: 'Porsche 911', img: byId('p5').image },
    { cat: 'Driver Series', title: 'Driver Series', img: byId('p9').image },
    { cat: 'Muscle & Classic', title: 'Muscle & Classic', img: byId('p16').image },
  ];

  return (
    <div className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className="eyebrow">Diecast Display Frames</span>
            <h1 className={`h1 ${styles.heroTitle}`}>
              Your Passion.<br />
              <span className={styles.redText}>Framed</span> To<br />
              Perfection.
            </h1>
            <p className={styles.heroSubtitle}>
              Real diecast cars mounted in premium frames. F1, Porsche, muscle
              legends — all for one price.
            </p>
            <div className={styles.heroActions}>
              <Link to="/shop" className="btn-primary">Explore Collection</Link>
              <Link to="/shop?category=F1+Racing" className="btn-secondary">F1 Frames</Link>
            </div>

            <div className={styles.dash}>
              <div className={styles.dashItem}>
                <span className={styles.dashValue}>₹{PRICE}</span>
                <span className={styles.dashLabel}>Every frame</span>
              </div>
              <div className={styles.dashItem}>
                <span className={styles.dashValue}>{products.length}</span>
                <span className={styles.dashLabel}>Models</span>
              </div>
              <div className={styles.dashItem}>
                <span className={styles.dashValue}>4</span>
                <span className={styles.dashLabel}>Collections</span>
              </div>
            </div>
          </div>

          <div className={styles.heroStage}>
            <div className={styles.ring} />
            <Link to={`/product/${heroSide[0].id}`} className={`${styles.stageCard} ${styles.stageLeft}`}>
              <img src={heroSide[0].image} alt={heroSide[0].name} />
            </Link>
            <Link to={`/product/${heroMain.id}`} className={`${styles.stageCard} ${styles.stageMain}`}>
              <img src={heroMain.image} alt={heroMain.name} />
              <span className={styles.stageTag}>₹{PRICE}</span>
            </Link>
            <Link to={`/product/${heroSide[1].id}`} className={`${styles.stageCard} ${styles.stageRight}`}>
              <img src={heroSide[1].image} alt={heroSide[1].name} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              FERRARI <i /> PORSCHE 911 <i /> MERCEDES-AMG <i /> McLAREN <i /> DODGE CHARGER <i /> BMW M3 <i /> ASTON MARTIN <i />{' '}
            </span>
          ))}
        </div>
      </div>

      {/* COLLECTIONS */}
      <section className="section-spacing container">
        <div className={styles.sectionHeader}>
          <span className="eyebrow">Garage</span>
          <h2 className="h2">Find Your Machine</h2>
          <p className="text-secondary">Pick a collection and go for a drive.</p>
        </div>
        <div className={styles.collectionGrid}>
          {collections.map((c, i) => (
            <Link
              key={c.cat}
              to={`/shop?category=${encodeURIComponent(c.cat).replace(/%20/g, '+')}`}
              className={styles.collectionCard}
            >
              <img src={c.img} alt={c.title} loading="lazy" />
              <span className={styles.collectionNo}>0{i + 1}</span>
              <div className={styles.collectionInfo}>
                <h3>{c.title}</h3>
                <span className={styles.exploreLink}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container" style={{ paddingBottom: 'var(--space-16)' }}>
        <div className={styles.sectionHeader}>
          <span className="eyebrow">Showroom</span>
          <h2 className="h2">Built For Collectors</h2>
          <p className="text-secondary">Every frame at ₹{PRICE}. No tricks.</p>
        </div>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.centerAction}>
          <Link to="/shop" className="btn-primary">View All {products.length} Frames</Link>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section className={styles.specs}>
        <div className={`container ${styles.specGrid}`}>
          <div className={styles.spec}><Gauge size={28} /><h4>One Price</h4><p>₹{PRICE} for every frame in the store.</p></div>
          <div className={styles.spec}><Sparkles size={28} /><h4>Real Diecast</h4><p>Actual miniature cars, mounted on printed posters.</p></div>
          <div className={styles.spec}><ShieldCheck size={28} /><h4>Premium Frames</h4><p>Black &amp; white box frames, ready to hang.</p></div>
          <div className={styles.spec}><Truck size={28} /><h4>Safe Delivery</h4><p>Carefully packed and shipped. Order on WhatsApp.</p></div>
        </div>
      </section>
    </div>
  );
}
