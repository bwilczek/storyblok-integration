import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  console.log(blok);
  return (
    <>
      <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
        {blok.headline}
      </h2>
      <div>
        {blok.body}
      </div>
    </>
  );
};

// const Teaser = ({ blok }) => {
//   console.log(blok);
//   return (
//     <StoryblokComponent blok={blok} />
//   );
// };


export default Teaser;
