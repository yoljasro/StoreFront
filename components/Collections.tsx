import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-gradient-to-b from-blue-50 to-blue-100">
      <p className="text-heading1-bold text-blue-700">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold text-red-500">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="group transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-[350px] h-[200px]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  layout="fill"
                  className="rounded-lg cursor-pointer object-cover group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-lg font-semibold">
                    {collection.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
