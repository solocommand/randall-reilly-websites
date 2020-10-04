const ImageSlider = () => import(/* webpackChunkName: "image-slider" */ './image-slider.vue');

export default (Browser) => {
  Browser.register('ImageSlider', ImageSlider);
};
