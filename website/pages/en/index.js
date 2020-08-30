/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const source = `// Runkit doesn't support import
const { riduce, bundle } = require('redux-leaves')
const { createStore } = require('redux')

// set up with initial state
const initialState = {
  counter: 0,
  list: [],
  props: {}
}

const [reducer, actions] = riduce(initialState)
const store = createStore(reducer)

// setup complete! Now dispatch actions to your heart's content

console.log(store.getState())
// => { counter: 0, list: [], props: {} } 

store.dispatch(actions.counter.create.increment(10))
console.log(store.getState())
// => { counter: 10, list: [], props: {} }

store.dispatch(actions.list.create.push('foo'))
console.log(store.getState())
// => { counter: 10, list: ['foo'], props: {} }

const compoundAction = bundle([
  actions.counter.create.reset(),
  actions.list[0].create.concat('bar'),
  actions.props.at.arbitrary.path.create.update('here I am!')
])

store.dispatch(compoundAction)
console.log(store.getState())
/*
  => {
    counter: 0,
    list: ['foobar'],
    props: { at: { arbitrary: { path: 'here I am!' } } }
  }
*/`

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/Icon.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('intro/overview')}>Overview</Button>
            <Button href={docUrl('examples/basic-example')}>Example</Button>
            <Button href='https://runkit.com/richardcrng/redux-leaves-playground' target='_blank'>Demo</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        docUrl={docUrl}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            title: 'Write once.',
            content: `Tired of writing repetitive reducer logic? With Redux-Leaves, you <a href=${docUrl('example/intermediate-example')}><b>define reducer logic once</b> and can <b>use it on an arbitrary leaf of state</b></a>.`,
            image: `${baseUrl}img/code.png`,
            imageAlign: 'top',
          },
          {
            title: 'Reduce anywhere.',
            content: `Redux-Leaves makes that reducer logic instantly available to you for any leaf of your state shape, through <a href=${docUrl('api/create')}><b>an intuitive action creator API</b></a>.`,
            image: `${baseUrl}img/hierarchy.png`,
            imageAlign: 'top',
          },
          {
            title: 'No boilerplate.',
            content: `No more need to write action creators. Redux-Leaves <a href=${docUrl('api/actions')}><b>writes your action creators for you</b></a> based on the reducer logic that you supply.`,
            image: `${baseUrl}img/ban.svg`,
            imageAlign: 'top',
          },
          {
            title: 'Quick setup.',
            content: `With <a href=${docUrl('defaults/overview')}>multiple action creators built in by default</a>, it takes <a href=${docUrl('examples/basic-example')}>just 30 seconds</a> to get up and running.`,
            image: `${baseUrl}img/fast.png`,
            imageAlign: 'top',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <script
          src="https://embed.runkit.com"
          data-element-id="redux-leaves-demo"
          // preamble={preamble}
        />
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div
            id="redux-leaves-demo"
            style={{ width: '80vw' }}
          >
            {source}
          </div>
        </div>
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
