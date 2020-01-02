import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faBracketsCurly,
  faTerminal,
  faCodeCommit,
  faCodeBranch,
  faAtomAlt,
  faTint,
  faPaintBrush,
  faBooks,
  faFont,
  faSitemap,
  faAnalytics,
  faServer,
  faUsers,
  faIcons,
  faAd,
  faObjectGroup,
  faNewspaper,
  faBuilding,
  faCheck,
  faTimes,
  faLink,
  faAngleDoubleRight,
  faEnvelope,
  faEnvelopeSquare,
  faArrowUp,
  faChartLine,
  faBrowser,
  faPalette
} from '@fortawesome/pro-regular-svg-icons';
import {
  faHeart,
  faPhone,
  faSearch
} from '@fortawesome/pro-solid-svg-icons';
import {
  faFacebookSquare,
  faFacebook,
  faFacebookF,
  faGit,
  faAws,
  faNodeJs,
  faGoogle,
  faCss3,
  faHtml5,
  faPhp,
  faPython,
  faTwitter,
  faTwitterSquare,
  faYoutube,
  faYoutubeSquare,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faBitbucket, faWhatsappSquare, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

export enum EFontAwesomeType {
  solid = 'fas',
  regular = 'far',
  light = 'fal',
  brand = 'fab',
  duotone = 'fad'
}

/**
 * Add Fontawesome icons to library for app
 */
export default {
  init: () =>
    library.add(
      faHtml5,
      faCss3,
      faPhone,
      faChartLine,
      faBrowser,
      faTimes,
      faCode,
      faBracketsCurly,
      faTerminal,
      faCodeCommit,
      faCodeBranch,
      faAtomAlt,
      faTint,
      faPaintBrush,
      faPalette,
      faBooks,
      faAngleDoubleRight,
      faFont,
      faCheck,
      faArrowUp,
      faSitemap,
      faAnalytics,
      faServer,
      faUsers,
      faIcons,
      faAd,
      faObjectGroup,
      faYoutube,
      faYoutubeSquare,
      faNewspaper,
      faBuilding,
      faSearch,
      faHeart,
      faFacebookSquare,
      faFacebook,
      faFacebookF,
      faGit,
      faWhatsappSquare,
      faWhatsapp,
      faEnvelope,
      faEnvelopeSquare,
      faAws,
      faNodeJs,
      faGoogle,
      faPhp,
      faPython,
      faTwitter,
      faTwitterSquare,
      faInstagram,
      faLinkedin,
      faLinkedinIn,
      faGithub,
      faBitbucket,
      faLink
    )
};
