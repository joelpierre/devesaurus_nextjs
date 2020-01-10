import React, { ComponentType, FunctionComponent, memo } from 'react';
import { ContentBlock } from '@jpp/organisms/ContentBlock/ContentBlock';
import { ImageBlock } from '@jpp/organisms/ImageBlock/ImageBlock';
import { ImageScroller } from '@jpp/organisms/ImageScroller/ImageScroller';
import { PageHero } from '@jpp/organisms/PageHero/PageHero';
import { PressPack } from '@jpp/organisms/PressPack/PressPack';
import { Testimonials } from '@jpp/organisms/Testimonials/Testimonials';
import { TextBlock } from '@jpp/organisms/TextBlock/TextBlock';
import { InlineQuote } from '@jpp/organisms/InlineQuote/InlineQuote';
import HeroSplash from '@jpp/organisms/HeroSplash/HeroSplash';
import { CtaBanner } from '@jpp/organisms/CtaBanner/CtaBanner';

interface IAcfComponentsProps {
  className?: string;
  components: Partial<Core.IAcfComponent>[];
  page_theme: Core.TTheme;
}

interface IAcfComponentMap {
  [key: string]: React.ComponentType<any>;
}

enum EAcfComponentType {
  HeroSplash = 'hero_splash',
  ContentBlock = 'content_block',
  CtaBanner = 'cta_banner',
  InlineQuote = 'inline_quote',
  ImageBlock = 'image_block',
  ImageScroller = 'image_scroller',
  PageHero = 'page_hero',
  PressPack = 'press_pack',
  Testimonials = 'testimonials',
  TextBlock = 'text_block'
}

const ACF_COMPONENT_MAP: IAcfComponentMap = {
  [EAcfComponentType.HeroSplash]: HeroSplash,
  [EAcfComponentType.ContentBlock]: ContentBlock,
  [EAcfComponentType.CtaBanner]: CtaBanner,
  [EAcfComponentType.InlineQuote]: InlineQuote,
  [EAcfComponentType.ImageBlock]: ImageBlock,
  [EAcfComponentType.ImageScroller]: ImageScroller,
  [EAcfComponentType.PageHero]: PageHero,
  [EAcfComponentType.PressPack]: PressPack,
  [EAcfComponentType.Testimonials]: Testimonials,
  [EAcfComponentType.TextBlock]: TextBlock
};

export const AcfComponents: FunctionComponent<IAcfComponentsProps> = (
  {
    components,
    page_theme
  }
) => {
  return (
    <>
      {components && components.map(
        (component, index): JSX.Element => {
          const componentName: string = component.acf_fc_layout!;

          const componentProps = {
            ...component,
            page_theme
          };

          const Component: ComponentType<any> = ACF_COMPONENT_MAP[componentName];

          return Component ? (
            <Component
              key={index}
              {...componentProps}
            />
          ) : <React.Fragment key={index} />;
        }
      )}
    </>
  );
};

export default memo(AcfComponents);
