export default {
	componentName: 'Drawer',
	category: '反馈',
	title: '抽屉',
	screenshot: null,
	isElement: true,
	props: [
		{
			name: 'width',
			title: {
				label: '宽度',
				tip: 'width | 抽屉的宽度'
			},
			propType: 'number',
			defaultValue: 378
		},
		{
			name: 'height',
			title: {
				label: '高度',
				tip: 'height | 抽屉的高度'
			},
			propType: 'number',
			defaultValue: 378
		},
		{
			name: 'placement',
			title: {
				label: '方向',
				tip: 'placement | 抽屉方向'
			},
			propType: 'select',
			defaultValue: 'right',
			values: {
				top: '上',
				right: '右',
				bottom: '下',
				left: '左'
			}
		},
		{
			name: 'size',
			title: {
				label: '预设',
				tip: 'size | 抽屉的大小'
			},
			propType: 'select',
			defaultValue: 'default',
			values: {
				default: '默认',
				large: '大'
			}
		},
		{
			name: 'isTitle',
			title: {
				label: '标题',
				tip: 'isTitle | 是否显示标题'
			},
			defaultValue: true,
			propType: 'boolean'
		},
		{
			name: 'isFooter',
			title: {
				label: '底部',
				tip: 'isFooter | 是否显示底部'
			},
			defaultValue: false,
			propType: 'boolean'
		},
		{
			name: 'mask',
			title: {
				label: '遮罩',
				tip: 'mask | 是否展示遮罩'
			},
			defaultValue: true,
			propType: 'boolean'
		},
		{
			name: 'isExtra',
			title: {
				label: '额外区域',
				tip: 'isExtra | 是否显示额外区域'
			},
			defaultValue: false,
			propType: 'boolean'
		},
		{
			name: 'closable',
			title: {
				label: '关闭按钮',
				tip: 'closable | 是否显示右上角的关闭按钮'
			},
			defaultValue: true,
			propType: 'boolean'
		},
		{
			name: 'maskClosable',
			title: {
				label: '蒙层关闭',
				tip: 'maskClosable | 点击蒙层是否允许关闭'
			},
			defaultValue: true,
			propType: 'boolean'
		},
		{
			name: 'getContainer',
			title: {
				label: '挂载节点',
				tip: 'getContainer | 挂载的节点，当前或页面'
			},
			propType: 'select',
			//defaultValue: 'body',
			values: {
				body: '页面',
				current: '当前位置'
			}
		}
	]
};
