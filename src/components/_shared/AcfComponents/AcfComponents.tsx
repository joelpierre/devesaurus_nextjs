import React, { PureComponent } from 'react';
import { mapOverACFComponents } from 'src/utils';
import RenderChildren from '../../../utils/components/RenderChildren/RenderChildren';
import { HeroSplash } from '@jpp/organisms/HeroSplash/HeroSplash';

interface IAcfComponentsProps {
  component: Partial<Core.IAcfComponents>;
  pageTheme: Core.TTheme | string;
}

export class AcfComponents extends PureComponent<IAcfComponentsProps> {
  render() {
    const { component: rootComponent, pageTheme } = this.props;
    const component = mapOverACFComponents(rootComponent);
    const componentName = component.__typename;

    const defaultProps = {
      'data-test': `hoc-acf-${componentName}`,
      module: component,
      pageTheme
    };

    return (
      <>
        <RenderChildren if={componentName === 'page_hero'}>
          <HeroSplash
            {...defaultProps}
          />
        </RenderChildren>

        {/*<RenderChildren if={componentName === 'page_hero'}>*/}
        {/*  <PageHero*/}
        {/*    {...defaultProps}*/}
        {/*    location={location}*/}
        {/*    pageContext={pageContext}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'text_block'}>*/}
        {/*  <TextBlock*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'simple_hero'}>*/}
        {/*  <SimpleHero*/}
        {/*    {...defaultProps}*/}
        {/*    pageContext={pageContext}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'image_block'}>*/}
        {/*  <ImageBlock*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'inline_quote'}>*/}
        {/*  <InlineQuote*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'cta_banner'}>*/}
        {/*  <CtaBanner*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'content_block'}>*/}
        {/*  <ContentBlock*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'press_pack'}>*/}
        {/*  <PressPack*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'all_projects'}>*/}
        {/*  <AllProjects*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'featured_services'}>*/}
        {/*  <FeaturedServices*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'featured_projects'}>*/}
        {/*  <FeaturedProjects*/}
        {/*    {...defaultProps}*/}
        {/*    showHeader={false}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'technology_banner'}>*/}
        {/*  <TechnologyBanner*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

        {/*<RenderChildren if={componentName === 'testimonials'}>*/}
        {/*  <Testimonials*/}
        {/*    {...defaultProps}*/}
        {/*  />*/}
        {/*</RenderChildren>*/}

      </>
    );
  }
}
