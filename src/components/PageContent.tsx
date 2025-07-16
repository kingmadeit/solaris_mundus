import React from 'react'

type PageContentProps = {
  children: React.ReactNode;
  clasName?: string;
};

const PageContent = ({children, clasName}: PageContentProps) => {

    return (
        <section className={clasName}>
            {children}
        </section>
    )
}

export default PageContent