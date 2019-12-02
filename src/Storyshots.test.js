import initStoryshots from '@storybook/addon-storyshots';  

initStoryshots({
    config: ({ configure }) =>
      configure(() => {
        require('./components/Button/Button.stories.js');
      }, module),
  });

