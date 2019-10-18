import React, { PureComponent } from 'react';

import HeroSplash from '@jpp/organisms/HeroSplash/HeroSplash';

import RenderChildren from '../../../utils/components/RenderChildren/RenderChildren';

type TAcfComponents = Core.IAcfComponentCore;

export class AcfComponents extends PureComponent<TAcfComponents> {
  render() {
    const { component, page_theme } = this.props;
    const componentName: string = component.acf_fc_layout!;

    const defaultProps = {
      component,
      page_theme
    };

    return (
      <>
        <RenderChildren if={componentName === 'hero_splash'}>
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
