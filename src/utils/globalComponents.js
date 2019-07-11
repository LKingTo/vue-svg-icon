/** 全局公共组件库注册 **/
// Svg组件懒加载

export default (Vue) => {
	Vue.component('SvgIcon', () => import('@/components/svgIcon'))
}