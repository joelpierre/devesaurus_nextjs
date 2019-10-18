import React, { Component, ComponentType } from 'react';
import { getDisplayName } from './utils';

interface IWithScrolling {
  Component?: Component;
}

interface IWithScrollingState {
  threshold: number;
  scroll: number;
  isScrollingDown: boolean;
  isScrollingUp: boolean;
  isScrolling: boolean;
}

export interface IWithScrollingInjectedProps {
  scroll: number;
  isScrollingDown: boolean;
  isScrollingUp: boolean;
  isScrolling: boolean;
}

const withScrolling = <P extends object>(WrappedComponent: ComponentType<P>) =>
  class WithScrolling extends Component<P & IWithScrolling> {
    public static displayName = `WithScrolling(${getDisplayName(
      WrappedComponent
    )})`;

    state: IWithScrollingState = {
      threshold: 50,
      scroll: 0,
      isScrolling: false,
      isScrollingUp: false,
      isScrollingDown: false
    };

    constructor(props: any) {
      super(props);

      this.setScrollState = this.setScrollState.bind(this);
      this.setScrollPosition = this.setScrollPosition.bind(this);
      this.setScrollListener = this.setScrollListener.bind(this);
      this.removeScrollListener = this.removeScrollListener.bind(this);
    }

    componentDidMount(): void {
      this.setScrollListener();
    }

    componentDidUpdate(
      _prevProps: Readonly<P & IWithScrolling>,
      prevState: Readonly<IWithScrollingState>
    ): void {
      const { scroll, threshold } = this.state;

      /* istanbul ignore else */
      if (scroll !== prevState.scroll) {
        if (scroll <= threshold) {
          this.setScrollState(false, false, false);
        }

        if (scroll > threshold) {
          /**
           * If we are scrolling up
           */
          /* istanbul ignore else */
          if (scroll < prevState.scroll) {
            this.setScrollState(true, true, false);
          }

          /**
           * If we are scrolling down
           */
          /* istanbul ignore else */
          if (scroll > prevState.scroll) {
            this.setScrollState(true, false, true);
          }
        }
      }
    }

    componentWillUnmount(): void {
      this.removeScrollListener();
    }

    setScrollPosition() {
      this.setState(() => ({
        scroll: window.pageYOffset
      }));
    }

    setScrollState(
      isScrolling: boolean,
      isScrollingUp: boolean,
      isScrollingDown: boolean
    ) {
      this.setState({
        isScrolling,
        isScrollingUp,
        isScrollingDown
      });
    }

    setScrollListener() {
      window.addEventListener('scroll', this.setScrollPosition);
    }

    removeScrollListener() {
      window.removeEventListener('scroll', this.setScrollPosition);
    }

    render() {
      const { ...props } = this.props;
      const {
        scroll,
        isScrollingDown,
        isScrollingUp,
        isScrolling
      } = this.state;

      return (
        <WrappedComponent
          {...(props as P)}
          scroll={scroll}
          isScrolling={isScrolling}
          isScrollingUp={isScrollingUp}
          isScrollingDown={isScrollingDown}
        />
      );
    }
  };

export default withScrolling;
