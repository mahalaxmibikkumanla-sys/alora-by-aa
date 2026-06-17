import Reveal from '@/components/ui/Reveal';

const products = [
  // NIYYAT collection
  {
    id: 1,
    name: 'Intention in Bloom',
    collection: 'NIYYAT',
    image:
      'https://images.unsplash.com/photo-1564474881250-b40b4464cd0f?w=400&h=500&fit=crop&q=80',
    price: '₹8,500',
  },
  {
    id: 2,
    name: 'Purpose Worn',
    collection: 'NIYYAT',
    image:
      'https://images.unsplash.com/photo-1747396206869-75ea57b325ce?w=400&h=500&fit=crop&q=80',
    price: '₹7,200',
  },
  {
    id: 3,
    name: "Heart's Intent",
    collection: 'NIYYAT',
    image:
      'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=400&h=500&fit=crop&q=80',
    price: '₹9,100',
  },

  // ANUBHAV collection
  {
    id: 4,
    name: 'Felt Moment',
    collection: 'ANUBHAV',
    image:
      'https://images.unsplash.com/photo-1764298493197-a1c1cce57800?w=400&h=500&fit=crop&q=80',
    price: '₹8,900',
  },
  {
    id: 5,
    name: 'Sensory Evening',
    collection: 'ANUBHAV',
    image:
      'https://images.unsplash.com/photo-1623421536321-f4036ba3fe6b?w=400&h=500&fit=crop&q=80',
    price: '₹7,800',
  },
  {
    id: 6,
    name: 'Experience Worn',
    collection: 'ANUBHAV',
    image:
      'https://images.unsplash.com/photo-1728205104611-061fa1465f85?w=400&h=500&fit=crop&q=80',
    price: '₹8,600',
  },

  // TAARA collection
  {
    id: 7,
    name: 'Under Stars',
    collection: 'TAARA',
    image:
      'https://images.unsplash.com/photo-1732263993951-36403aca3a1f?w=400&h=500&fit=crop&q=80',
    price: '₹9,300',
  },
  {
    id: 8,
    name: 'Luminous Night',
    collection: 'TAARA',
    image:
      'https://images.unsplash.com/photo-1656276926800-b47a0bc5aac0?w=400&h=500&fit=crop&q=80',
    price: '₹8,200',
  },
  {
    id: 9,
    name: 'Star-Bright',
    collection: 'TAARA',
    image:
      'https://images.unsplash.com/photo-1752074212249-d1c5e28d1efb?w=400&h=500&fit=crop&q=80',
    price: '₹7,950',
  },

  // MOKSH collection
  {
    id: 10,
    name: 'Freedom to Move',
    collection: 'MOKSH',
    image:
      'https://images.unsplash.com/photo-1564701999220-80741d357cb6?w=400&h=500&fit=crop&q=80',
    price: '₹8,400',
  },
  {
    id: 11,
    name: 'Ease of Being',
    collection: 'MOKSH',
    image:
      'https://images.unsplash.com/photo-1620140786352-43d7e7a1cfcb?w=400&h=500&fit=crop&q=80',
    price: '₹7,600',
  },
  {
    id: 12,
    name: 'Movement Unbound',
    collection: 'MOKSH',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop&q=80',
    price: '₹8,700',
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="container-px max-w-6xl">
        {/* Section heading */}
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-gold">
            Collections
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] leading-tight text-charcoal">
            Made to be worn, lived in
          </h2>
        </Reveal>

        {/* Product grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <Reveal key={product.id} delay={idx * 40}>
              <div className="group">
                {/* Product image */}
                <div className="mb-4 overflow-hidden rounded-sm bg-light-gray">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Collection label */}
                <p className="text-xs uppercase tracking-widest text-gold">
                  {product.collection}
                </p>

                {/* Product name */}
                <h3 className="mt-2 font-display text-base text-charcoal">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="mt-2 text-sm text-taupe">{product.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
