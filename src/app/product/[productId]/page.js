import Breadcrumb from "@/components/product/Breadcrumb";
import DeliveryOptions from "@/components/product/DeliveryOptions";
import Description from "@/components/product/Description";
import Gallery from "@/components/product/Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import Specifications from "@/components/product/Specifications";


export default function ProductPage({productId}) {
    console.log(productId);
    
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-6 flex flex-col gap-8">
        <Breadcrumb />
        <div className="grid lg:grid-cols-3 gap-6">
          <Gallery />
          <ProductInfo />
          <DeliveryOptions />
        </div>
        <Description />
        <Specifications />
      </main>
    </div>
  );
}
