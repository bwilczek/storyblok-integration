import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature">
    {blok.name}
    <pre>
    {blok.code}
    </pre>
  </div>
);

export default Feature;
