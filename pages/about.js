import BlueFrame from "components/blue-frame";
import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Accordion from "components/accordion";
import Image from "next/legacy/image";
// import eyecatch from "images/about.jpg";

const eyecatch = {
  src: "https://images.microcms-assets.io/assets/b5c33691f83a4424b4cd755f438e4967/a94d911f47a14f328a6c4c8e1c358f48/about.jpg",
  height: 960,
  width: 1920,
  blurDataURL: "data:image/jpeg;base64",
};

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              laudantium laborum at impedit et architecto quam assumenda
              provident amet doloribus. Sapiente tenetur magnam error illum
              ullam vel dolorum? Repellat, labore?
            </p>
            <h2>aaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quidem repellat libero quis atque quia exercitationem aspernatur
              recusandae nulla! Aliquid nam doloremque odit, debitis nihil porro
              aspernatur nisi molestiae mollitia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, qui!
              Vel optio qui dolorum fugiat voluptatem velit dolores, sint, at
              obcaecati nostrum magnam fuga minima! Hic repellendus quisquam
              possimus deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
              consequuntur nostrum expedita mollitia? Eligendi eveniet, beatae
              atque sapiente deleniti sunt provident itaque vel. Debitis nam
              blanditiis illum quae unde!
            </p>
            <h3>ああああああああああああああああああああああ</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              magni sint, optio voluptatem veritatis quos veniam doloribus rerum
              distinctio, tempora quo ullam consectetur quidem beatae accusamus
              aspernatur maxime doloremque error.
            </p>
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia commodi est eum a quod totam atque animi,
                ducimus veniam tempora sint ipsa quidem et architecto ut dolor
                vero dignissimos.
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                iste qui quas dolorem molestiae harum assumenda in culpa fuga
                commodi aut adipisci excepturi, exercitationem doloribus
                pariatur quibusdam, numquam amet nobis.
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ut, maxime assumenda laboriosam dolorem ullam, libero eligendi
                temporibus modi cum dignissimos corrupti, numquam saepe
                perspiciatis minus necessitatibus tempora laudantium eaque!
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

About.getLayout = function (page) {
  return <BlueFrame>{page}</BlueFrame>;
};
