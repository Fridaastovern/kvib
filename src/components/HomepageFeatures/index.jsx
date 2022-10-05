import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
            <h3 className="heading heading__h3--sm">
                <a href={"/kvib/designsystem/Komponenter"}>Komponenter</a>
            </h3>
    ),
    description: (
        <p className="label label--sml">
          Komponenter vi bruker på både nettsiden og i løsnignene våre
      </p>
    ),
  },
  {
    title: (
      <h3 className="heading heading__h3--sm">
          <a href={"/kvib/designsystems/uu"}>Universell utforming</a>
      </h3>
    ),
    description: (
        <p className="label label--sml">
          Komponenter vi bruker på både nettsiden og i løsnignene våre
      </p>
    ),
  },
  {
    title: (
        <h3 className="heading heading__h3--sm">
            <a href={"/kvib/designsystems/designTokens/designsystems/designtokens/ikoner"}>Ikoner</a>
        </h3>
    ),
    description: (
        <p className="label label--sml">
          Komponenter vi bruker på både nettsiden og i løsnignene våre
        </p>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
          <div className={styles.features__category}>
              {title}
              {description}
          </div>
          </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
      <>
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {FeatureList.map((props, idx) => (
                          <Feature key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>
          <br/>
          <section className={styles.features__contact}>
              <div className="container">
              <h2>Ser du noe som mangler?</h2>
              <p>Et designsystem er i kontinuerlig utvikling. <br/> Send oss en mail og bidra med at systemet blir enda bedre!</p>
              <button className="button button__green--secondary button--sm">Skriv en melding</button>
              </div>
          </section>
      </>
  );
}