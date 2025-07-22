import { storyblokEditable, renderRichText } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

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
      <hr />
      Rich text using <code>storyblok-rich-text-react-renderer</code>
      <div>{render(blok.summary) }</div>
      Rich text using <code>renderRichText @ @storyblok/react</code>
      <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.summary) }} />
      <hr />
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
