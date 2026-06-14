import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} — ${product.collection}`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  // "You may also like" — same collection first, then fill from the rest.
  const related = [
    ...products.filter((p) => p.collection === product.collection && p.id !== product.id),
    ...products.filter((p) => p.collection !== product.collection),
  ].slice(0, 4);

  return <ProductDetail product={product} related={related} />;
}
