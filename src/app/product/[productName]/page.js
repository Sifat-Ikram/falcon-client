"use client";
import { useProductById } from "@/components/hooks/useProductById";
import Breadcrumb from "@/components/product/Breadcrumb";
import DeliveryOptions from "@/components/product/DeliveryOptions";
import Description from "@/components/product/Description";
import Gallery from "@/components/product/Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import Specifications from "@/components/product/Specifications";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productName = decodeURIComponent(params.productName);
  const { product, loading, error } = useProductById(productName);
  if (loading) {
    // You can customize this however you want: spinner, skeleton, or simple text
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    // Show error message nicely
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    // No product found (after loading finished)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto flex flex-col">
      <main className="container mx-auto py-6 flex flex-col gap-8">
        <Breadcrumb product={product} />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="space-y-10">
            <div className="grid lg:grid-cols-2 gap-10 bg-white">
              <Gallery
                images={
                  Object.values(product.image || {}).map((img) => img.url) || [
                    product.thumbnail,
                  ] || ["/default-placeholder.jpg"]
                }
              />
              <ProductInfo product={product} />
            </div>
            <Description product={product} />
            <Specifications />
          </div>
          <div className="">
            <DeliveryOptions merchant={product.merchant} />
          </div>
        </div>
      </main>
    </div>
  );
}
