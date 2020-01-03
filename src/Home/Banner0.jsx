import React from 'react';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
              dataSource.title.children.match(isImg) ? (
                <img src={dataSource.title.children} width="100%" alt="img" />
              ) : (
                dataSource.title.children
              )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          {/* <Button ghost key="button" {...dataSource.button}>
            {dataSource.button.children}
          </Button> */}
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <div className="banner0-copyright">
            <span>Copyright <Icon type="copyright" /> 2020</span>
            <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow noopener noreferrer">
              <i className="banner0-gongani" />陕ICP备17014336号-2
            </a>
          </div>
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
