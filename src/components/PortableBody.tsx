import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanityClient";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).width(1200).url()}
        alt={value?.alt || "Image"}
        className="my-6 rounded-lg"
        loading="lazy"
      />
    ),
  },
};

export default function PortableBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
