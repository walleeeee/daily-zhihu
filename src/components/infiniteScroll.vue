<template>
<div class="infinite-scroll">
	<div class="loader" v-show="loading">
		<svg class="loader-circular" viewBox="25 25 50 50">
			<circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
		</svg>
	</div>
	<span v-show="loading" class="infinite-scroll-text">{{loadingText}}</span>
</div>
</template>

<script>
import Scroll from './scroll'
export default {
	name: 'infinite-scroll',
	mixins: [Scroll],
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		loadingText: {
			type: String,
			default: '正在加载...'
		}
	},
	methods: {
		onScroll() {
			if (this.loading) return
			const scroller = this.scroller
			const isWindow = scroller === window
			const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop
			const scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight
			let h = scrollHeight - scrollTop - 5
			let sh = isWindow ? window.innerHeight : scroller.offsetHeight
			//滑动距离大于内容高度触发加载事件
			if (h <= sh) {
				this.$emit('load')
			}
		}
	}
}
</script>

<style>
.infinite-scroll {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 8px;
	line-height: 36px;
	width: 100%;
}

.infinite-scroll-text {
	margin-left: 16px;
	font-size: 16px;
}
.loader {
	width: 30px;
	height: 30px;
	position: relative;
}
.loader-path {
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
	stroke-linecap: round;
}
.loader-circular {
	animation: rotate 2s linear infinite;
	height: 100%;
	transform-origin: center center;
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes dash {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124;
	}
}
@keyframes color {
	0%,
	100% {
		stroke: #FFD300;
	}
	40% {
		stroke: #5B7492;
	}
	66% {
		stroke: #FFD300;
	}
	80%,
	90% {
		stroke: #acb9c8;
	}
}
</style>
