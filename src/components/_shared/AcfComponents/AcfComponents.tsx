import { ImageBlock } from '@jpp/organisms/ImageBlock/ImageBlock';
import { ImageScroller } from '@jpp/organisms/ImageScroller/ImageScroller';
import { PageHero } from '@jpp/organisms/PageHero/PageHero';
import PressPack from '@jpp/organisms/PressPack/PressPack';
import { Testimonials } from '@jpp/organisms/Testimonials/Testimonials';
import { TextBlock } from '@jpp/organisms/TextBlock/TextBlock';
import React, { ComponentType, PureComponent } from 'react';

import { InlineQuote } from '@jpp/organisms/InlineQuote/InlineQuote';
import { HeroSplash } from '@jpp/organisms/HeroSplash/HeroSplash';
import { CtaBanner } from '@jpp/organisms/CtaBanner/CtaBanner';

interface IAcfComponentMap {
  [key: string]: React.ComponentType<any>;
}

enum EAcfComponentType {
  HeroSplash = 'hero_splash',
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
  [EAcfComponentType.CtaBanner]: CtaBanner,
  [EAcfComponentType.InlineQuote]: InlineQuote,
  [EAcfComponentType.ImageBlock]: ImageBlock,
  [EAcfComponentType.ImageScroller]: ImageScroller,
  [EAcfComponentType.PageHero]: PageHero,
  [EAcfComponentType.PressPack]: PressPack,
  [EAcfComponentType.Testimonials]: Testimonials,
  [EAcfComponentType.TextBlock]: TextBlock
};

export class AcfComponents extends PureComponent<Core.IAcfComponentCore> {
  getComponent(): JSX.Element[] | null {
    const { components, page_theme } = this.props;

    return components && components.map((component, index) => {
      const componentName: string = component.acf_fc_layout!;

      const componentProps = {
        ...component,
        page_theme
      };

      const Component: ComponentType<any> = ACF_COMPONENT_MAP[componentName];

      if (Component === undefined) {
        return <></>;
      }

      return (
        <Component
          key={index}
          {...componentProps}
        />
      );
    });
  }

  render() {
    return (
      <article className="AcfComponent">
        {this.getComponent()}
      </article>
    );
  }
}
