import React, { PureComponent } from 'react';

interface IPrimaryFooter {
  className?: string;
  footerMenu: Core.IMenuItem[];
  termsMenu: Core.IMenuItem[];
}

export class PrimaryFooter extends PureComponent<IPrimaryFooter> {
  render() {
    return (
      <footer>
        Primary Footer
      </footer>
    );
  }
}

export default PrimaryFooter;
