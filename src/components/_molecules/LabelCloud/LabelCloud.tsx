import React, { FunctionComponent } from 'react';
import CategoryCloud from './CategoryCloud/CategoryCloud';
import WordCategoryCloud from './WordCategoryCloud/WordCategoryCloud';
import TagCloud from './TagCloud/TagCloud';
import WordTagCloud from './WordTagCloud/WordTagCloud';

interface ILabelCloud {
  className?: string;
  taxonomy: Core.ETaxonomy;
}

const LabelCloud: FunctionComponent<ILabelCloud> = ({ className, taxonomy }) => {
  let cloud: JSX.Element;

  switch (taxonomy) {
    case 'category':
      cloud = <CategoryCloud className={className}/>;
      break;

    case 'word_category':
      cloud = <WordCategoryCloud className={className}/>;
      break;

    case 'post_tag':
      cloud = <TagCloud className={className}/>;
      break;

    case 'word_tag':
      cloud = <WordTagCloud className={className}/>;
      break;

    default:
      cloud = <></>;
  }

  return cloud;
};

export default LabelCloud;
