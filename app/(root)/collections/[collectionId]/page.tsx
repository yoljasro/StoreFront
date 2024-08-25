import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
      />
      <p className="text-heading3-bold text-blue-700">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-600 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center mt-8">
        {collectionDetails.products.map((product: ProductType) => (
          <div key={product._id} className="group">
            <ProductCard product={product} />
            <div className="mt-4 text-center">
              <p className="text-heading5-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </p>
              <p className="text-body-normal text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
