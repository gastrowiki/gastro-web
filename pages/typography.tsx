import { NextPage } from "next";
import Head from "next/head";

const TypographyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>TypographyPage the Gastro Cooperative</title>
        <meta
          name="description"
          content="A living history of the world's food written by its people"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Header 1 - <em>with emphasis</em></h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
        ante vitae condimentum dignissim. Praesent lobortis venenatis pharetra.
        Praesent in luctus arcu. Phasellus tortor dolor, hendrerit ut ipsum sit
        amet, rutrum lobortis metus. Sed facilisis dignissim dolor, sed ultrices
        augue dapibus at. Integer eu maximus justo. Ut sagittis lacus ac auctor
        accumsan. Etiam id enim et dui elementum cursus. Sed ullamcorper neque
        interdum erat ultricies iaculis. Nunc non finibus est, ut dignissim
        elit.
      </p>

      <p>
        Nunc a tincidunt ante. Donec eget tellus lacus. Cras suscipit ligula
        quis ligula auctor condimentum. Sed dolor erat, porttitor at venenatis
        id, ultricies vitae nulla. Sed tellus augue, viverra ut aliquam et,
        molestie vel arcu. Phasellus tincidunt ante quis turpis molestie finibus
        commodo varius tellus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Maecenas sagittis turpis non
        venenatis auctor.
      </p>
    </>
  );
};

export default TypographyPage;
